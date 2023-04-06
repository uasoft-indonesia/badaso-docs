---
docId: 'deployubuntuvpswithdocker'
sidebar_position: 2
---

# Deploy To Ubuntu VPS With Docker

## Requirements
  - Server ubuntu
  - Akses SSH ke server dari terminal lokal
  - Docker

## Log in to your server

- Login ke server kamu menggunakan ssh dari terminal. Saya sarankan kamu menyiapkan kunci ssh di server kamu dari dasbor pemantauan server jika penyedia layanan kamu mendukungnya.

```
ssh username@serveripaddress
```

![Deploy ubuntu wihtout docker vps login](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-vps-login.png)

- Perbarui manajer paket kamu.

```
sudo apt-get update
```

![Deploy ubuntu wihtout docker vps update](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-vps-update.png)

## Install Docker

- Instal Prerequisite Packages.

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

- Tambahkan GPG Key.

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- Tambahkan Docker Repository.

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- Tentukan Sumber Instalasi.

```
apt-cache policy docker-ce
```

- Install Docker.

```
sudo apt install docker-ce -y
```

- Cek Docker Status.x

```
sudo systemctl status docker
```
## Install project badaso

### Install with curl

- Jalankan perintah di bawah ini untuk menginstal proyek badaso.

```
curl -s "{your-link-project}" | bash
```

![Deploy ubuntu without docker install curl](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-curl.png)

- Lihat container kamu, apakah semua container berjalan.

Jika semua kontainer berjalan dengan baik, maka proyek kamu telah berhasil diinstal.

![Deploy ubuntu with docker install curl check container](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-curl-check-container.png)

### Install with clone from github or gitlab

- Clone proyek kamu dan buka direktori utama proyek.

```
sudo git clone {link-your-project-badaso-from-github-or-gitlab} your-name-project
```

![Deploy ubuntu with docker install clone](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone.png)

- Buat direktori docker dan pergi ke direktori docker.

```
mkdir docker
cd docker
```


- Buat file Dockerfile. Dockerfile adalah skrip instruksi berbasis teks yang digunakan untuk membuat gambar kontainer.

```
sudo nano Dockerfile
```

- kamu dapat menyalin skrip ke file Dockerfile.

```
FROM ubuntu:22.04

LABEL maintainer="Taylor Otwell"

ARG WWWGROUP
ARG NODE_VERSION=16
ARG POSTGRES_VERSION=14

WORKDIR /var/www/html

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=UTC

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && apt-get install -y gnupg gosu curl ca-certificates zip unzip git supervisor sqlite3 libcap2-bin libpng-dev python2 \
    && mkdir -p ~/.gnupg \
    && chmod 600 ~/.gnupg \
    && echo "disable-ipv6" >> ~/.gnupg/dirmngr.conf \
    && echo "keyserver hkp://keyserver.ubuntu.com:80" >> ~/.gnupg/dirmngr.conf \
    && gpg --recv-key 0x14aa40ec0831756756d7f66c4f4ea0aae5267a6c \
    && gpg --export 0x14aa40ec0831756756d7f66c4f4ea0aae5267a6c > /usr/share/keyrings/ppa_ondrej_php.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/ppa_ondrej_php.gpg] https://ppa.launchpadcontent.net/ondrej/php/ubuntu jammy main" > /etc/apt/sources.list.d/ppa_ondrej_php.list \
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
    && curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarn.gpg >/dev/null \
    && echo "deb [signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
    && curl -sS https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /usr/share/keyrings/pgdg.gpg >/dev/null \
    && echo "deb [signed-by=/usr/share/keyrings/pgdg.gpg] http://apt.postgresql.org/pub/repos/apt jammy-pgdg main" > /etc/apt/sources.list.d/pgdg.list \
    && apt-get update \
    && apt-get install -y yarn \
    && apt-get install -y mysql-client \
    && apt-get install -y postgresql-client-$POSTGRES_VERSION \
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

RUN mkdir -p /var/www/html/storage
RUN mkdir -p /var/www/html/public 
RUN chmod -R 777 /var/www/html/storage
RUN chmod -R 755 /var/www/html/public
EXPOSE 8000

ENTRYPOINT ["start-container"]
```

![Deploy ubuntu with docker install clone dockerfile](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone-dockerfile.png)

setelah itu, kamu dapat menyimpan.

- Buat file supervisord.conf.

```
sudo nano supervisord.conf
```

- kamu dapat menyalin skrip ke file supervisord.conf.

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

![Deploy ubuntu with docker install clone supervisord](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone-supervisord.png)

setelah itu, kamu dapat menyimpan.

- Buat file start-container.

```
sudo nano start-container
```

- kamu dapat menyalin skrip ke file start-container.

```
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
    exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
fi
```

![Deploy ubuntu with docker install clone start container](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone-start-container.png)

setelah itu, kamu dapat menyimpan.

- Buat file php.ini.

```
sudo nano php.ini
```

- kamu dapat menyalin skrip ke file php.ini.

```
[PHP]
post_max_size = 100M
upload_max_filesize = 100M
variables_order = EGPCS
```

after that, you can save.

![Deploy ubuntu with docker install clone php](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone-php.png)

- Pergi ke direktori utama proyek dan Buat file docker-compose.yml

```
version: '3'
services:
    badaso:
        build:
            context: ./docker/8.1
            dockerfile: Dockerfile
            args:
                WWWGROUP: '${WWWGROUP}'
        image: badaso
        extra_hosts:
            - 'host.docker.internal:host-gateway'
        ports:
            - '${APP_PORT:-8000}:8000'
            - '${VITE_PORT:-5173}:${VITE_PORT:-5173}'
        environment:
            WWWUSER: '${WWWUSER}'
            LARAVEL_SAIL: 1
            XDEBUG_MODE: '${SAIL_XDEBUG_MODE:-off}'
            XDEBUG_CONFIG: '${SAIL_XDEBUG_CONFIG:-client_host=host.docker.internal}'
        volumes:
            - '.:/var/www/html'
        networks:
            - sail
        depends_on:
            - mysql
            - redis
    mysql:
        image: 'mysql/mysql-server:8.0'
        ports:
            - '${FORWARD_DB_PORT:-3306}:3306'
        environment:
            MYSQL_ROOT_PASSWORD: '${DB_PASSWORD}'
            MYSQL_ROOT_HOST: '%'
            MYSQL_DATABASE: '${DB_DATABASE}'
            MYSQL_USER: '${DB_USERNAME}'
            MYSQL_PASSWORD: '${DB_PASSWORD}'
            MYSQL_ALLOW_EMPTY_PASSWORD: 1
        volumes:
            - 'sail-mysql:/var/lib/mysql'
            - './vendor/laravel/sail/database/mysql/create-testing-database.sh:/docker-entrypoint-initdb.d/10-create-testing-database.sh'
        networks:
            - sail
        healthcheck:
            test:
                - CMD
                - mysqladmin
                - ping
                - '-p${DB_PASSWORD}'
            retries: 3
            timeout: 5s
    redis:
        image: 'redis:alpine'
        ports:
            - '${FORWARD_REDIS_PORT:-6379}:6379'
        volumes:
            - 'sail-redis:/data'
        networks:
            - sail
        healthcheck:
            test:
                - CMD
                - redis-cli
                - ping
            retries: 3
            timeout: 5s
networks:
    sail:
        driver: bridge
volumes:
    sail-mysql:
        driver: local
    sail-redis:
        driver: local
```

![Deploy ubuntu with docker install clone docker compose](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone-docker-compose.png)

setelah itu, kamu dapat menyimpan.

## Run Docker

- Pergi ke proyek direktori.

- Salin .env.example ke .env dan ubah variabel env yang diperlukan.

```
cd /var/www/your-project-name
cp .env.example .env
nano .env
```

- Ubah dan tambahkan variabel berikut, serta variabel lain yang mungkin harus kamu ubah seperti database, AWS, Redis, mail, pusher configs.

```
APP_ENV=production
APP_DEBUG=false
APP_PORT=8000
APP_URL=your-hostname

DB_DATABASE=your-database
DB_USERNAME=username
DB_PASSWORD=password

WWWGROUP=1000
WWWUSER=1000
```

![Deploy ubuntu with docker edit env](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-edit-env.png)

- Jalankan penginstalan komposer untuk mengkompilasi composer.json

```
composer install
```

- Jalankan perintah untuk menghasilkan kunci.

```
php artisan key:generate
```

- Jalankan migrasi basis data.

```
php artisan migrate
```

- Jalankan perintah di bawah untuk menghasilkan token jwt.
```
php artisan jwt:secret -f
```

- Jalankan perintah di bawah untuk menghasilkan penyimpanan tautan.

```
php artisan storage:link
```

- Jalankan seeder database.

```
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
php artisan db:seed --class="your-seeder"
```

- Jalankan perintah berikut untuk menginstal semua javascript dependensi.

```
npm install
npm run prod
```

- Jalankan proyek kamu dengan buruh pelabuhan.

```
sudo docker compose up -d
```

- Lihat container kamu, apakah semua container berjalan.

Jika semua kontainer berjalan dengan baik, maka proyek kamu telah berhasil diinstal

![Deploy ubuntu with docker install curl check container](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-curl-check-container.png)

- Selesai dan kamu dapat mengakses proyek kamu.

![Deploy ubuntu with docker install clone docker finish](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone-docker-finish.png)
