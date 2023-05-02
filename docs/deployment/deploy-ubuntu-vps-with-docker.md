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

:::info
See [docker official docs](https://docs.docker.com/desktop/install/linux-install/) for up to date installation 
:::

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
## Deploy the project from your VCS

:::info
This step for only badaso project installed with [curl way](../getting-started/installation#via-curl--docker-recommended) or you already [dockerize](../customization/dockerize) the prohect by yourself.
:::


- Clone your project and go to project directory.

```
git clone {link-your-project-badaso-from-github-or-gitlab} your-name-project
```

![Deploy ubuntu with docker install clone](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone.png)

- Installing composer dependencies with docker 

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```
- Start the container

```
vendor/bin/sail up -d
```

- Run command to generate the key.

```
vendor/bin/sail php artisan key:generate
```

- Run database migration.

```
vendor/bin/sail artisan migrate
```

- Run database seeder.

```
vendor/bin/sail artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

- Run commmand below to generate token jwt.

```
vendor/bin/sail artisan jwt:secret -f
```

- Run commmand below to generate link storage.

```
vendor/bin/sail artisan storage:link
```

- Run the following command to install all javascript of dependencies.

```
vendor/bin/sail yarn
vendor/bin/sail yarn dev
```

- Look at your container, whether all the containers are running.

If all the containers are running well, then your project has been successfully installed

![Deploy ubuntu with docker install curl check container](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-curl-check-container.png)

- Finish. You can access your project.

![Deploy ubuntu with docker install clone docker finish](/img/deploy-ubuntu-with-docker/deploy-ubuntu-with-docker-install-clone-docker-finish.png)
