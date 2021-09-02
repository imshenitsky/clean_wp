const { environment } = require('@rails/webpacker')

// Have no idea what is that?
const webpack = require('webpack')

environment.plugins.append('Provide',
    new webpack.ProvidePlugin({
        $:      'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'] // Dependency of Bootstrap
    })
)

module.exports = environment
