---
docId: 'deployubuntuvpswithdocker'
sidebar_position: 2
---

# Deploy To Ubuntu VPS With Docker

## Requirements
  - A server running ubuntu
  - SSH access to the server from a local terminal
  - Docker

## Log in to your server

- Login to your server using ssh from a terminal. I recommend that you set up ssh keys on your server from the server monitoring dashboard if your service provider supports it.

```
ssh username@serveripaddress
```

![Deploy ubuntu wihtout docker vps login](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-vps-login.png)

- Update your package manager.

```
sudo apt-get update
```

![Deploy ubuntu wihtout docker vps update](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-vps-update.png)

## Install Docker

- Install Prerequisite Packages.

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

- Add GPG Key.

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- Add Docker Repository.

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- Specify Installation Source.

```
apt-cache policy docker-ce
```

- Install Docker.

```
sudo apt install docker-ce -y
```

- Check Docker Status.x

```
sudo systemctl status docker
```
## Create file Docker

- Create directory docker.

```
mkdir docker
cd docker
```

- Create file Dockerfile. Dockerfile is a text-based instruction script used to create container images.

```
sudo nano Dockerfile
```

- You can copy script to Dockerfile file.

```
FROM ubuntu:20.04

LABEL maintainer="Taylor Otwell"

ARG WWWGROUP
ARG NODE_VERSION=16

WORKDIR /var/www/html

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=UTC

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && apt-get install -y gnupg gosu curl ca-certificates zip unzip git supervisor sqlite3 libcap2-bin libpng-dev python2 \
    && mkdir -p ~/.gnupg \
    && chmod 600 ~/.gnupg \
    && echo "disable-ipv6" >> ~/.gnupg/dirmngr.conf \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E5267A6C \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C300EE8C \
    && echo "deb http://ppa.launchpad.net/ondrej/php/ubuntu impish main" > /etc/apt/sources.list.d/ppa_ondrej_php.list \
    && apt-get update \
    && apt-get install -y php8.1-cli php8.1-dev \
    php8.1-pgsql php8.1-sqlite3 php8.1-gd \
    php8.1-curl \
    php8.1-imap php8.1-mysql php8.1-mbstring \
    php8.1-xml php8.1-zip php8.1-bcmath php8.1-soap \
    php8.1-intl php8.1-readline \
    php8.1-ldap \
    php8.1-msgpack php8.1-igbinary php8.1-redis php8.1-swoole \
    php8.1-memcached php8.1-pcov php8.1-xdebug \
    && php -r "readfile('https://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer \
    && curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \

    && apt-get update \
    && apt-get install -y yarn \
    && apt-get install -y mysql-client \
    && apt-get install -y postgresql-client \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN setcap "cap_net_bind_service=+ep" /usr/bin/php8.1

RUN groupadd --force -g $WWWGROUP sail
RUN useradd -ms /bin/bash --no-user-group -g $WWWGROUP -u 1337 sail

COPY start-container /usr/local/bin/start-container
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY php.ini /etc/php/8.1/cli/conf.d/99-sail.ini
RUN chmod +x /usr/local/bin/start-container

RUN mkdir -p /var/www/html/storage \
    && mkdir -p /var/www/html/public

RUN chmod -R 777 /var/www/html/storage
RUN chmod -R 755 /var/www/html/public

EXPOSE 8000
EXPOSE 443

ENTRYPOINT ["start-container"]
```

after that, you can save.

- Create file supervisord.conf.

```
sudo nano supervisord.conf
```

- You can copy script to supervisord.conf file.

```
[supervisord]
nodaemon=true
user=root
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid

[program:php]
command=/usr/bin/php -d variables_order=EGPCS /var/www/html/artisan octane:start --server=swoole --host=0.0.0.0 --port=8000
user=sail
environment=LARAVEL_SAIL="1"
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0
```

after that, you can save.

- Create file start-container.

```
sudo nano start-container
```

- You can copy script to start-container file.

```
#!/usr/bin/env bash

if [ ! -z "$WWWUSER" ]; then
    usermod -u $WWWUSER sail
fi

if [ ! -d /.composer ]; then
    mkdir /.composer
fi

chmod -R ugo+rw /.composer

if [ $# -gt 0 ]; then
    exec gosu $WWWUSER "$@"
else
    /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
fi
```

after that, you can save.

- Create file php.ini.

```
sudo nano php.ini
```

- You can copy script to php.ini file.

```
[PHP]
post_max_size = 100M
upload_max_filesize = 100M
variables_order = EGPCS
```

after that, you can save.

- Go to directory project. and Create file d

```
# For more information: https://laravel.com/docs/sail
version: "3"
services:
  badaso-test:
    build:
      context: ./docker
      dockerfile: Dockerfile
      args:
        WWWGROUP: "${WWWGROUP-1000}"
    image: badaso-test
    extra_hosts:
      - "host.docker.internal:host-gateway"
    ports:
      - "${APP_PORT:-8000}:8000"
    environment:
      WWWUSER: "${WWWUSER-1000}"
      LARAVEL_SAIL: 1
      XDEBUG_MODE: "${SAIL_XDEBUG_MODE:-off}"
      XDEBUG_CONFIG: "${SAIL_XDEBUG_CONFIG:-client_host=host.docker.internal}"
    volumes:
      - ".:/var/www/html"
    networks:
      - sail
networks:
  sail:
    driver: bridge
```

## Run Docker

- Run your project with docker

```
sudo docker compose up -d
```