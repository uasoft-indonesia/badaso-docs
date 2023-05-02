---
sidebar_position: 1
docId: "how-to-test"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/test-packages/installation.md
---

# How To Test
1. Publish phpunit.xml from vendor to laravel project with command `php artisan badaso-test:setup`, here is the contents of phpunit.xml file on vendor badaso core

```
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="./vendor/phpunit/phpunit/phpunit.xsd" bootstrap="vendor/autoload.php" color ="right">
    <testsuite>
        <testsuite name="Units">
            <directory suffix="Test.php">./tests/Unit</directory>
            <directory suffix="Test.php">./vendor/badaso/core/tests/Unit</directory>
        </testsuite>
        <testsuite name="Features">
            <directory suffix="Test.php">./tests/Feature</directory>
            <directory suffix="Test.php">./vendor/badaso/core/tests/Feature</directory>
        </testsuite>
    </testsuites>
    <process coverageUncoveredFiles="true">
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
        <server name="APP_ENV" value="test"/>
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

2. To run a test, type the command `php artisan test`
3. To check coverage, run the command `php -dxdebug.mode=coverage vendor/bin/phpunit --coverage-clover='reports/coverage/coverage.xml' --coverage-html='reports/coverage'`

in this section if you want to check the scope specifically, you can add or modify the path to be checked on the scope of the paging tag

```
...
<process coverageUncoveredFiles="true">
    <include>
        ...
        <directory suffix=".php">./vendor/badaso/core/src/Widgets</directory>
        <directory suffix=".php">./vendor/badaso/core/src/Badaso.php</directory>
        <!-- add a new tag directory in this... -->
        ...
    </include>
</coverage>
...
```