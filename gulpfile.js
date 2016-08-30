var elixir = require('laravel-elixir');

/**
 * Config the assets and public resources paths,
 * (override the defaults)
 */
config.assetsPath = 'assets';
config.publicPath = '.';
elixir.config.images = {
    folder: 'img',
    outputFolder: 'img'
};

elixir(function(mix) {
    mix
        .styles([
            'flexboxgrid.min.css',
            'hamburgers.min.css',
            'style.css'
        ], 'css/style.min.css')

        .scripts([
            'jquery-1.11.0.min.js',
            'jquery.stoocky-page.js',
        ], 'js/script.min.js')

});