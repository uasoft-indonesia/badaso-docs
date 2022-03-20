---
sidebar_position: 1
docId: "how-to-test"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/test-packages/installation.md
---

# How To Test

1. Publish phpunit.xml dari vendor ke laravel project dengan perintah `php artisan badaso-test:setup`, berikut merupakan isi file phpunit.xml pada vendor badaso core

```
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="./vendor/phpunit/phpunit/phpunit.xsd" bootstrap="vendor/autoload.php" colors="true">
    <testsuites>
        <testsuite name="Unit">
            <directory suffix="Test.php">./tests/Unit</directory>
            <directory suffix="Test.php">./vendor/badaso/core/tests/Unit</directory>
        </testsuite>
        <testsuite name="Feature">
            <directory suffix="Test.php">./tests/Feature</directory>
            <directory suffix="Test.php">./vendor/badaso/core/tests/Feature</directory>
        </testsuite>
    </testsuites>
    <coverage processUncoveredFiles="true">
        <include>
            <!-- <directory suffix=".php">./app</directory> -->
            <directory suffix=".php">./vendor/badaso/core/src/Commands</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Controllers</directory>
            <directory suffix=".php">./vendor/badaso/core/src/ContentManager</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Events</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Exceptions</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Helpers</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Listeners</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Mail</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Middleware</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Models</directory>
            <directory suffix=".php">./vendor/badaso/core/src/OrchestratorHandlers</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Providers</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Routes</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Traits</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Widgets</directory>
            <directory suffix=".php">./vendor/badaso/core/src/Badaso.php</directory>
        </include>
    </coverage>
    <php>
        <server name="APP_ENV" value="testing"/>
        <server name="BCRYPT_ROUNDS" value="4"/>
        <server name="CACHE_DRIVER" value="array"/>
        <!-- <server name="DB_CONNECTION" value="sqlite"/> -->
        <!-- <server name="DB_DATABASE" value=":memory:"/> -->
        <server name="MAIL_MAILER" value="array"/>
        <server name="QUEUE_CONNECTION" value="sync"/>
        <server name="SESSION_DRIVER" value="array"/>
        <server name="TELESCOPE_ENABLED" value="false"/>
    </php>
</phpunit>

```

2. Untuk melakukan uji coba, ketikan perintah `php artisan test`
3. Untuk pengecekan coverage lakukan perintah `php -dxdebug.mode=coverage vendor/bin/phpunit --coverage-clover='reports/coverage/coverage.xml' --coverage-html='reports/coverage'`

pada bagian ini jika menginginkan pengecekan coverage secara spesifik, dapat menambahkan atau mengedit path yang akan di cek pada pagian tag coverage

```
...
<coverage processUncoveredFiles="true">
    <include>
        ...
        <directory suffix=".php">./vendor/badaso/core/src/Widgets</directory>
        <directory suffix=".php">./vendor/badaso/core/src/Badaso.php</directory>
        <!-- add new tag directory in this... -->
        ...
    </include>
</coverage>
...
```
