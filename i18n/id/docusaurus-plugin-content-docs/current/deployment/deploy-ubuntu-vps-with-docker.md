---
docId: 'deployubuntuvpswithdocker'
sidebar_position: 2
---

# Deploy To Ubuntu VPS With Docker

## Requirements
  - Server Ubuntu
  - Akses SSH ke server dari terminal lokal
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