---
docId: 'deployubuntuvpswithoutdocker'
sidebar_position: 1
---

# Deploy To Ubuntu VPS Without Docker

## Requirements
  - A server running ubuntu
  - SSH access to the server from a local terminal
  - Proyek yang dihosting dengan git (GitHub/GitLab/Bitbucket dll)
  - Nginx(recomended) atau apache2
  - PHP 8.x
  - MySQL
  - Adminer(Opsional)
  - Composer
  - Node
  - NPM atau Yarn

**Jika LEMP (Linux, Nginx, MySQL dan PHP) belum terinstal di server kamu, kamu dapat mengikuti langkah-langkah ini.**

## Log in to your server

- Login ke server kamu menggunakan ssh dari terminal. Kami sarankan kamu menyiapkan kunci ssh di server kamu dari dasbor pemantauan server jika penyedia layanan kamu mendukungnya.

```
ssh username@serveripaddress
```

![Deploy ubuntu wihtout docker vps login](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-vps-login.png)

- Perbarui manajer paket kamu.

```
sudo apt-get update
```

![Deploy ubuntu wihtout docker vps update](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-vps-update.png)

## Install Nginx

- Karena Nginx tersedia di repositori default Ubuntu, kamu dapat menginstalnya dari repositori ini menggunakan sistem packaging apt.

```
sudo apt install nginx
```

- Ganti owner folder /var/www.

```
sudo chown -R www-data:www-data /var/www
```

- Ubah izin akses untuk membuatnya dapat diakses.

```
sudo chmod -R 775 /var/www
```

- Tambahkan pengguna ke grup www-data sehingga pengguna dapat mengedit file di folder /var/www. Ubah 'yourUsername' dengan nama pengguna ubuntu kamu.

```
  sudo usermod -a -G www-data 'Username'
```

![Deploy ubuntu wihtout docker nginx setting](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-nginx-setting.png)

## Install PHP 8.x

Dalam dokumentasi, kami menggunakan mysql PHP 8.1. kamu dapat menggunakan versi lain.

- Install software-properties-common, yang menambahkan manajemen untuk sumber perangkat lunak tambahan.

```
sudo apt install software-properties-common
```

- Install the repository ppa:ondrej/php, yang akan memberi kamu semua versi PHP kamu.

```
sudo add-apt-repository ppa:ondrej/php
```

- Perbarui apt lagi sehingga manajer paket kamu dapat melihat paket yang baru terdaftar.

```
sudo apt update
```

- Sekarang kamu siap menginstal PHP 8.1 dan menginstal modul tambahan.

```
sudo apt install php8.1-fpm php8.1-mysql php8.1-curl php8.1-gd php8.1-mbstring php8.1-mcrypt php8.1-xml php8.1-xmlrpc php8.1-zip
```

## Install MySQL

Dalam dokumentasi, kami menggunakan mysql untuk menyimpan data. kamu juga dapat menggunakan postgreSQL dan sqlite.

- Jika server mysql tidak diinstal di server, jalankan perintah ini untuk menginstal server mysql.

```
sudo apt install mysql-server
```

- Setelah selesai, Uji apakah kamu dapat masuk ke konsol MySQL dengan mengetik:

```
sudo mysql
```

- Kamu selalu dapat membuat pengguna yang mengotentikasi dengan caching_sha2_plugin dan kemudian MENGUBAH nanti dengan perintah ini:

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ChangeWithYourPassword';
```

- Setelah ini, sebaiknya jalankan perintah FLUSH PRIVILEGES. Ini akan mengosongkan semua memori yang di-cache server sebagai hasil dari pernyataan CREATE USER dan GRANT sebelumnya.

```
FLUSH PRIVILEGES;
```

![Deploy ubuntu wihtout docker mysql conf](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-mysql-conf.png)

## Install Adminer (Optional)
- Buat folder admin di dalam folder /var/www/ untuk menampung file admin.

```
mkdir /var/www/adminer
```

- Buka folder /var/www/adminer

```
cd /var/www/adminer
```

- Unduh file adminer agar admin dapat diinstal di server.

```
wget http://www.adminer.org/latest.php -O /var/www/adminer/adminer.php
```

- Rename file adminer.php menjadi index.php agar file dapat dibaca langsung oleh server.

```
mv adminer.php index.php
```

- Ubah file pemilik /var/www/adminer/index.php

```
sudo chown www-data:www-data /var/www/adminer/index.php
```

- Ubah izin akses untuk membuatnya dapat diakses.

```
sudo chmod 755 /var/www/adminer/index.php

sudo service nginx reload
```

![Deploy ubuntu wihtout docker adminer conf](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-adminer-conf.png)

### Setup NGINX for adminer (if you use adminer)

- Buka direktori /etc/nginx/sites-available. Kemudian, tambahkan file.

```
cd /etc/nginx/sites-available
sudo nano adminer
```

![Deploy ubuntu wihtout docker adminer edit](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-adminer-edit.png)

- You can follow this step to replace it.

```
server {
        listen 3307;
        listen [::]:3307;

        root /var/www/adminer;
        index index.html index.htm index.nginx-debian.html index.php;

        server_name _;

        location / {
              try_files $uri $uri/ /index.php$is_args$args;
        }

        location ~ \.php$ {
               include snippets/fastcgi-php.conf;
        #
        #       # With php-fpm (or other unix sockets):
               fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        #       # With php-cgi (or other tcp sockets):
        #       fastcgi_pass 127.0.0.1:9000;
        }

        location ~ /\.ht {
               deny all;
        }
}
```

listen : Kamu dapat mengubah port sesuai dengan kebutuhan kamu. Misalnya kita menggunakan port 3307.
server_name : Kamu dapat mengubah dengan domain kamu. Karena pada contoh ini tidak memiliki domain maka server_name dikosongkan dan kita gunakan port 3307 untuk mengakses admin.

![Deploy ubuntu wihtout docker adminer edit file](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-adminer-edit-file.png)

- Aktifkan kedua konfigurasi dengan membuat file link di /etc/nginx/site-enabled/.

```
ln -s /etc/nginx/site-available/adminer /etc/nginx/site-enabled/adminer
```

![Deploy ubuntu wihtout docker adminer link](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-adminer-link.png)

- Tes konfigurasi.Configuration test.

```
sudo nginx -t
```

Jika konfigurasi valid, kamu akan mendapatkan:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

- Muat ulang NGINX.

```
service nginx reload
```

![Deploy ubuntu wihtout docker finish nginx project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-finish-nginx-project.png)

- kamu dapat mengakses admin dengan membuka your-ip:3307.

```
your-ip:3307
```
![Deploy ubuntu wihtout docker finish nginx project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-adminer-finish.png)

## Install Composer
- Untuk menginstal Composer dengan cepat di direktori saat ini, jalankan skrip berikut di terminal kamu.

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

- Kemungkinan besar, kamu ingin meletakkan composer.phar ke dalam direktori di PATH kamu, jadi kamu cukup memanggil komposer dari direktori mana saja (Global install).

```
sudo mv composer.phar /usr/bin/composer
```

![Deploy ubuntu wihtout docker composer install](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-adminer-composer-install.png)

## Install Node
Dalam dokumentasi, kami menggunakan Node versi 16.

- Instal PPA untuk mendapatkan akses ke paketnya. Dari direktori home kamu, gunakan curl untuk mengambil skrip instalasi untuk versi pilihan kamu, pastikan untuk mengganti 16.x dengan string versi pilihan kamu.

```
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
```

- Jalankan skrip. PPA akan ditambahkan ke konfigurasi kamu dan cache paket lokal kamu akan diperbarui secara otomatis.

```
sudo bash /tmp/nodesource_setup.sh
```

- Install NodeJs

![Deploy ubuntu wihtout docker node install](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-adminer-node-install.png)

```
sudo apt install nodejs
```

## Deploy your project to vps (server)

### Clone Project

- Clone proyek kamu ke folder /var/www dan beri nama proyek. Misalnya kami mengkloning proyek dari gitlab.

```
cd /var/www
sudo git clone {link-your-project-badaso-from-github-or-gitlab} your-name-project
```

![Deploy ubuntu wihtout docker clone project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-clone-project.png)

### Change access permission dicretory

- Ubah file pemilik /var/www/your-name-project

```
sudo chown <username>:www-data your-name-project
```

![Deploy ubuntu wihtout docker chown project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-chown-project.png)

- Ubah izin akses untuk membuatnya dapat diakses.

```
sudo setfacl -Rm u:www-data:rwx your-name-project
```

![Deploy ubuntu wihtout docker access project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-access-project.png)

### Setup NGINX for your project
- Buka direktori /etc/nginx/sites-available.

```
cd /etc/nginx/sites-available
```

- Salin file default dengan nama proyek kamu.

```
sudo cp default your-name-project
```

![Deploy ubuntu wihtout docker nginx project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-nginx-project.png)

- Mengedit file.

```
sudo nano your-name-project
```

![Deploy ubuntu wihtout docker edit nginx project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-edit-nginx-project.png)


- kamu dapat mengikuti langkah ini untuk menggantinya.

```
server {
        listen 80;
        listen [::]:80;

        root /var/www/{your-project-name}/public;
        index index.html index.htm index.nginx-debian.html index.php;

        server_name www.{your-domain} {your-domain};

        location / {
              try_files $uri $uri/ /index.php$is_args$args;
        }

        location ~ \.php$ {
               include snippets/fastcgi-php.conf;
        #
        #       # With php-fpm (or other unix sockets):
               fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        #       # With php-cgi (or other tcp sockets):
        #       fastcgi_pass 127.0.0.1:9000;
        }

        location ~ /\.ht {
               deny all;
        }
}
```

your-project-name : Ubah dengan direktori nama-proyek kamu.
your-domain : Ubah dengan domain kamu.

![Deploy ubuntu wihtout docker edit file nginx project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-edit-file-nginx-project.png)

- Aktifkan kedua konfigurasi dengan membuat file tautan di /etc/nginx/site-enabled/.

```
ln -s /etc/nginx/site-available/your-name-project /etc/nginx/site-enabled/your-name-project
```

![Deploy ubuntu wihtout docker link nginx project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-link-nginx-project.png)

- Tes konfigurasi.

```
sudo nginx -t
```

Jika konfigurasi valid, kamu akan mendapatkan:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

- Muat ulang NGINX.

```
service nginx reload
```

![Deploy ubuntu wihtout docker finish nginx project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-finish-nginx-project.png)

### Setup environment

- Salin .env.example ke .env dan ubah variabel env yang diperlukan.

```
cd /var/www/your-project-name
cp .env.example .env
nano .env
```

![Deploy ubuntu wihtout docker open env](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-open-env.png)

- Ubah variabel berikut, serta variabel lain yang mungkin harus kamu ubah seperti database, AWS, Redis, mail, pusher configs.

```
APP_ENV=production
APP_DEBUG=false
APP_URL=your-hostname

DB_DATABASE=your-database
DB_USERNAME=username
DB_PASSWORD=password

FILESYSTEM_DRIVER=public
```

![Deploy ubuntu wihtout docker edit env](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-edit-env.png)

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

- Selesai dan kamu dapat mengakses proyek kamu.

![Deploy ubuntu wihtout docker finished project](/img/deploy-ubuntu-without-docker/deploy-ubuntu-wihtout-docker-finished-project.png)