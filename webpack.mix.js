const mix = require('laravel-mix');

mix.disableNotifications();

mix
    .setPublicPath('dist')
    .js('src/app.js', 'dist')
    .sass('src/app.scss', 'dist');