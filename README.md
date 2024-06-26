## Getting Started

Configure BackEnd:

```bash
composer install
npm install
```

```bash
cp .env.example .env
```

Then configure environment for the backend

```bash
php artisan key:generate
php artisan migrate --seed
```

Configure FrontEnd:

```bash
cd FrontEnd
cp .env.example .env
npm install
```

Then configure environment for the frontend

Run the server:

```bash
# run php server
php artisan serve

# run frontEnd vite
cd FrontEnd
npm run dev
```

## Require

Before run the serve, take a look at the following resources:

-   [Laravel 11 Documentation](https://laravel.com/) - Laravel 11.
-   [Composer](https://getcomposer.org/) - Download and Install Composer.
-   [php 8.3.6](https://windows.php.net/downloads/releases/php-8.3.6-nts-Win32-vs16-x64.zip) - PHP 8.3.5 up.
