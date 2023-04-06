"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(t),k=r,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||u;return t?a.createElement(c,l(l({ref:n},s),{},{components:t})):a.createElement(c,l({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,l=new Array(u);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<u;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4207:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var a=t(7462),r=t(3366),u=(t(7294),t(3905)),l=["components"],i={docId:"deployubuntuvpswithoutdocker",sidebar_position:1},p="Deploy To Ubuntu VPS Without Docker",o={unversionedId:"deployment/deploy-ubuntu-vps-without-docker",id:"deployment/deploy-ubuntu-vps-without-docker",isDocsHomePage:!1,title:"Deploy To Ubuntu VPS Without Docker",description:"Requirements",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/deployment/deploy-ubuntu-vps-without-docker.md",sourceDirName:"deployment",slug:"/deployment/deploy-ubuntu-vps-without-docker",permalink:"/id/deployment/deploy-ubuntu-vps-without-docker",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/deployment/deploy-ubuntu-vps-without-docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{docId:"deployubuntuvpswithoutdocker",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How To Test",permalink:"/id/test-packages/how-to-test"},next:{title:"Deploy To Ubuntu VPS With Docker",permalink:"/id/deployment/deploy-ubuntu-vps-with-docker"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Log in to your server",id:"log-in-to-your-server",children:[]},{value:"Install Nginx",id:"install-nginx",children:[]},{value:"Install PHP 8.x",id:"install-php-8x",children:[]},{value:"Install MySQL",id:"install-mysql",children:[]},{value:"Install Adminer (Optional)",id:"install-adminer-optional",children:[{value:"Setup NGINX for adminer (if you use adminer)",id:"setup-nginx-for-adminer-if-you-use-adminer",children:[]}]},{value:"Install Composer",id:"install-composer",children:[]},{value:"Install Node",id:"install-node",children:[]},{value:"Deploy your project to vps (server)",id:"deploy-your-project-to-vps-server",children:[{value:"Clone Project",id:"clone-project",children:[]},{value:"Change access permission dicretory",id:"change-access-permission-dicretory",children:[]},{value:"Setup NGINX for your project",id:"setup-nginx-for-your-project",children:[]},{value:"Setup environment",id:"setup-environment",children:[]}]}],d={toc:s};function m(e){var n=e.components,i=(0,r.Z)(e,l);return(0,u.kt)("wrapper",(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"deploy-to-ubuntu-vps-without-docker"},"Deploy To Ubuntu VPS Without Docker"),(0,u.kt)("h2",{id:"requirements"},"Requirements"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"A server running ubuntu"),(0,u.kt)("li",{parentName:"ul"},"SSH access to the server from a local terminal"),(0,u.kt)("li",{parentName:"ul"},"Proyek yang dihosting dengan git (GitHub/GitLab/Bitbucket dll)"),(0,u.kt)("li",{parentName:"ul"},"Nginx(recomended) atau apache2"),(0,u.kt)("li",{parentName:"ul"},"PHP 8.x"),(0,u.kt)("li",{parentName:"ul"},"MySQL"),(0,u.kt)("li",{parentName:"ul"},"Adminer(Opsional)"),(0,u.kt)("li",{parentName:"ul"},"Composer"),(0,u.kt)("li",{parentName:"ul"},"Node"),(0,u.kt)("li",{parentName:"ul"},"NPM atau Yarn")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Jika LEMP (Linux, Nginx, MySQL dan PHP) belum terinstal di server kamu, kamu dapat mengikuti langkah-langkah ini.")),(0,u.kt)("h2",{id:"log-in-to-your-server"},"Log in to your server"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Login ke server kamu menggunakan ssh dari terminal. Kami sarankan kamu menyiapkan kunci ssh di server kamu dari dasbor pemantauan server jika penyedia layanan kamu mendukungnya.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"ssh username@serveripaddress\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker vps login",src:t(3429).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Perbarui manajer paket kamu.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo apt-get update\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker vps update",src:t(5892).Z})),(0,u.kt)("h2",{id:"install-nginx"},"Install Nginx"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Karena Nginx tersedia di repositori default Ubuntu, kamu dapat menginstalnya dari repositori ini menggunakan sistem packaging apt.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo apt install nginx\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ganti owner folder /var/www.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo chown -R www-data:www-data /var/www\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ubah izin akses untuk membuatnya dapat diakses.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo chmod -R 775 /var/www\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tambahkan pengguna ke grup www-data sehingga pengguna dapat mengedit file di folder /var/www. Ubah 'yourUsername' dengan nama pengguna ubuntu kamu.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  sudo usermod -a -G www-data 'Username'\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker nginx setting",src:t(2791).Z})),(0,u.kt)("h2",{id:"install-php-8x"},"Install PHP 8.x"),(0,u.kt)("p",null,"Dalam dokumentasi, kami menggunakan mysql PHP 8.1. kamu dapat menggunakan versi lain."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Install software-properties-common, yang menambahkan manajemen untuk sumber perangkat lunak tambahan.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo apt install software-properties-common\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Install the repository ppa:ondrej/php, yang akan memberi kamu semua versi PHP kamu.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo add-apt-repository ppa:ondrej/php\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Perbarui apt lagi sehingga manajer paket kamu dapat melihat paket yang baru terdaftar.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo apt update\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Sekarang kamu siap menginstal PHP 8.1 dan menginstal modul tambahan.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo apt install php8.1-fpm php8.1-mysql php8.1-curl php8.1-gd php8.1-mbstring php8.1-mcrypt php8.1-xml php8.1-xmlrpc php8.1-zip\n")),(0,u.kt)("h2",{id:"install-mysql"},"Install MySQL"),(0,u.kt)("p",null,"Dalam dokumentasi, kami menggunakan mysql untuk menyimpan data. kamu juga dapat menggunakan postgreSQL dan sqlite."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jika server mysql tidak diinstal di server, jalankan perintah ini untuk menginstal server mysql.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo apt install mysql-server\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Setelah selesai, Uji apakah kamu dapat masuk ke konsol MySQL dengan mengetik:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo mysql\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Kamu selalu dapat membuat pengguna yang mengotentikasi dengan caching_sha2_plugin dan kemudian MENGUBAH nanti dengan perintah ini:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ChangeWithYourPassword';\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Setelah ini, sebaiknya jalankan perintah FLUSH PRIVILEGES. Ini akan mengosongkan semua memori yang di-cache server sebagai hasil dari pernyataan CREATE USER dan GRANT sebelumnya.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"FLUSH PRIVILEGES;\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker mysql conf",src:t(322).Z})),(0,u.kt)("h2",{id:"install-adminer-optional"},"Install Adminer (Optional)"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Buat folder admin di dalam folder /var/www/ untuk menampung file admin.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"mkdir /var/www/adminer\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Buka folder /var/www/adminer")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"cd /var/www/adminer\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Unduh file adminer agar admin dapat diinstal di server.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"wget http://www.adminer.org/latest.php -O /var/www/adminer/adminer.php\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Rename file adminer.php menjadi index.php agar file dapat dibaca langsung oleh server.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"mv adminer.php index.php\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ubah file pemilik /var/www/adminer/index.php")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo chown www-data:www-data /var/www/adminer/index.php\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ubah izin akses untuk membuatnya dapat diakses.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo chmod 755 /var/www/adminer/index.php\n\nsudo service nginx reload\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker adminer conf",src:t(1637).Z})),(0,u.kt)("h3",{id:"setup-nginx-for-adminer-if-you-use-adminer"},"Setup NGINX for adminer (if you use adminer)"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Buka direktori /etc/nginx/sites-available. Kemudian, tambahkan file.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"cd /etc/nginx/sites-available\nsudo nano adminer\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker adminer edit",src:t(7724).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"You can follow this step to replace it.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"server {\n        listen 3307;\n        listen [::]:3307;\n\n        root /var/www/adminer;\n        index index.html index.htm index.nginx-debian.html index.php;\n\n        server_name _;\n\n        location / {\n              try_files $uri $uri/ /index.php$is_args$args;\n        }\n\n        location ~ \\.php$ {\n               include snippets/fastcgi-php.conf;\n        #\n        #       # With php-fpm (or other unix sockets):\n               fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;\n        #       # With php-cgi (or other tcp sockets):\n        #       fastcgi_pass 127.0.0.1:9000;\n        }\n\n        location ~ /\\.ht {\n               deny all;\n        }\n}\n")),(0,u.kt)("p",null,"listen : Kamu dapat mengubah port sesuai dengan kebutuhan kamu. Misalnya kita menggunakan port 3307.\nserver_name : Kamu dapat mengubah dengan domain kamu. Karena pada contoh ini tidak memiliki domain maka server_name dikosongkan dan kita gunakan port 3307 untuk mengakses admin."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker adminer edit file",src:t(9206).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Aktifkan kedua konfigurasi dengan membuat file link di /etc/nginx/site-enabled/.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"ln -s /etc/nginx/site-available/adminer /etc/nginx/site-enabled/adminer\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker adminer link",src:t(4042).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tes konfigurasi.Configuration test.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo nginx -t\n")),(0,u.kt)("p",null,"Jika konfigurasi valid, kamu akan mendapatkan:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Muat ulang NGINX.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"service nginx reload\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker finish nginx project",src:t(7199).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"kamu dapat mengakses admin dengan membuka your-ip:3307.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"your-ip:3307\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker finish nginx project",src:t(5595).Z})),(0,u.kt)("h2",{id:"install-composer"},"Install Composer"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Untuk menginstal Composer dengan cepat di direktori saat ini, jalankan skrip berikut di terminal kamu.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"php -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\"\nphp -r \"if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"\nphp composer-setup.php\nphp -r \"unlink('composer-setup.php');\"\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Kemungkinan besar, kamu ingin meletakkan composer.phar ke dalam direktori di PATH kamu, jadi kamu cukup memanggil komposer dari direktori mana saja (Global install).")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo mv composer.phar /usr/bin/composer\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker composer install",src:t(7220).Z})),(0,u.kt)("h2",{id:"install-node"},"Install Node"),(0,u.kt)("p",null,"Dalam dokumentasi, kami menggunakan Node versi 16."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Instal PPA untuk mendapatkan akses ke paketnya. Dari direktori home kamu, gunakan curl untuk mengambil skrip instalasi untuk versi pilihan kamu, pastikan untuk mengganti 16.x dengan string versi pilihan kamu.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"cd ~\ncurl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan skrip. PPA akan ditambahkan ke konfigurasi kamu dan cache paket lokal kamu akan diperbarui secara otomatis.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo bash /tmp/nodesource_setup.sh\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Install NodeJs")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker node install",src:t(9749).Z})),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo apt install nodejs\n")),(0,u.kt)("h2",{id:"deploy-your-project-to-vps-server"},"Deploy your project to vps (server)"),(0,u.kt)("h3",{id:"clone-project"},"Clone Project"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Clone proyek kamu ke folder /var/www dan beri nama proyek. Misalnya kami mengkloning proyek dari gitlab.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"cd /var/www\nsudo git clone {link-your-project-badaso-from-github-or-gitlab} your-name-project\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker clone project",src:t(8763).Z})),(0,u.kt)("h3",{id:"change-access-permission-dicretory"},"Change access permission dicretory"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ubah file pemilik /var/www/your-name-project")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo chown <username>:www-data your-name-project\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker chown project",src:t(2225).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ubah izin akses untuk membuatnya dapat diakses.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo setfacl -Rm u:www-data:rwx your-name-project\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker access project",src:t(6242).Z})),(0,u.kt)("h3",{id:"setup-nginx-for-your-project"},"Setup NGINX for your project"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Buka direktori /etc/nginx/sites-available.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"cd /etc/nginx/sites-available\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Salin file default dengan nama proyek kamu.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo cp default your-name-project\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker nginx project",src:t(7959).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Mengedit file.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo nano your-name-project\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker edit nginx project",src:t(8419).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"kamu dapat mengikuti langkah ini untuk menggantinya.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"server {\n        listen 80;\n        listen [::]:80;\n\n        root /var/www/{your-project-name}/public;\n        index index.html index.htm index.nginx-debian.html index.php;\n\n        server_name www.{your-domain} {your-domain};\n\n        location / {\n              try_files $uri $uri/ /index.php$is_args$args;\n        }\n\n        location ~ \\.php$ {\n               include snippets/fastcgi-php.conf;\n        #\n        #       # With php-fpm (or other unix sockets):\n               fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;\n        #       # With php-cgi (or other tcp sockets):\n        #       fastcgi_pass 127.0.0.1:9000;\n        }\n\n        location ~ /\\.ht {\n               deny all;\n        }\n}\n")),(0,u.kt)("p",null,"your-project-name : Ubah dengan direktori nama-proyek kamu.\nyour-domain : Ubah dengan domain kamu."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker edit file nginx project",src:t(4159).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Aktifkan kedua konfigurasi dengan membuat file tautan di /etc/nginx/site-enabled/.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"ln -s /etc/nginx/site-available/your-name-project /etc/nginx/site-enabled/your-name-project\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker link nginx project",src:t(942).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tes konfigurasi.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"sudo nginx -t\n")),(0,u.kt)("p",null,"Jika konfigurasi valid, kamu akan mendapatkan:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Muat ulang NGINX.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"service nginx reload\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker finish nginx project",src:t(7199).Z})),(0,u.kt)("h3",{id:"setup-environment"},"Setup environment"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Salin .env.example ke .env dan ubah variabel env yang diperlukan.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"cd /var/www/your-project-name\ncp .env.example .env\nnano .env\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker open env",src:t(8934).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Ubah variabel berikut, serta variabel lain yang mungkin harus kamu ubah seperti database, AWS, Redis, mail, pusher configs.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"APP_ENV=production\nAPP_DEBUG=false\nAPP_URL=your-hostname\n\nDB_DATABASE=your-database\nDB_USERNAME=username\nDB_PASSWORD=password\n\nFILESYSTEM_DRIVER=public\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker edit env",src:t(4653).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan penginstalan komposer untuk mengkompilasi composer.json")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"composer install\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan perintah untuk menghasilkan kunci.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"php artisan key:generate\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan migrasi basis data.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"php artisan migrate\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan perintah di bawah untuk menghasilkan token jwt.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"php artisan jwt:secret -f\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan perintah di bawah untuk menghasilkan penyimpanan tautan.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"php artisan storage:link\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan seeder database.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'php artisan db:seed --class="Database\\Seeders\\Badaso\\BadasoSeeder"\nphp artisan db:seed --class="your-seeder"\n')),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Jalankan perintah berikut untuk menginstal semua javascript dependensi.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"npm install\nnpm run prod\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Selesai dan kamu dapat mengakses proyek kamu.")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Deploy ubuntu wihtout docker finished project",src:t(3565).Z})))}m.isMDXComponent=!0},6242:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-access-project-35e6cd3cb81774194014bd0081542cf8.png"},7220:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-adminer-composer-install-b01e22bbdc8cbe89fbd27cf5f26bc7dc.png"},1637:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-adminer-conf-9d6d4e0ebd8e5a75e619de52fd76b0fb.png"},9206:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-adminer-edit-file-8ae9cfaea5a8126e5fab88f7fe44699d.png"},7724:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-adminer-edit-97f1f046318c153169835cbab65bae30.png"},5595:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-adminer-finish-f41930b88ae69070737d16371a892227.png"},4042:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-adminer-link-5fe4a84573cf700cdf295e1923fff807.png"},9749:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-adminer-node-install-21e124ad8321438aa46c39fbe5f18831.png"},2225:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-chown-project-03fd5c469d5a9df41ac96b1cea3ef71e.png"},8763:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-clone-project-414522ea80c92f4726e84e56ddfd8147.png"},4653:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-edit-env-2884c0c5496fc085b2ff238e60294d35.png"},4159:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-edit-file-nginx-project-f48095703a3bee47806afe325c9c6f77.png"},8419:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-edit-nginx-project-703319942ec30c51b6a931362f30a871.png"},7199:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-finish-nginx-project-133a1f181135bdf267600a9a4b6d21b8.png"},3565:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-finished-project-0893e28f0fd9fc633219381dbfebfacb.png"},942:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-link-nginx-project-57bc41c63acb609af862f51df4a61b65.png"},322:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-mysql-conf-28766b2727918f91bb41e215b7a28527.png"},7959:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-nginx-project-9c0c6e9f5ca688e7c88146e214d72708.png"},2791:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-nginx-setting-2f476d35ced6f9f67abef3fbf727366a.png"},8934:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-open-env-9d588ae963ce9a1db1e602b38ca0e26e.png"},3429:function(e,n){n.Z="data:image/png;base64,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"},5892:function(e,n,t){n.Z=t.p+"assets/images/deploy-ubuntu-wihtout-docker-vps-update-c6e5383cf1434a05255e06a9ca5715c8.png"}}]);