To install:
1) clone or download repository
2) composer install
3) create .env and fill yout credentials (like .env.example)
4) php artisan migrate
5) php artisan db:seed
6) npm install
7) bower install
8) And run one of following:
    - grunt dev (build with watch)
    - grunt stage(build without watch)
    - grunt prod (build with uglify)