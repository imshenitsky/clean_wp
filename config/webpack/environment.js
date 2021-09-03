const { environment } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')

// Have no idea what is that?
const webpack = require('webpack')

environment.plugins.append('Provide',
    new webpack.ProvidePlugin({
        $:      'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'] // Dependency of Bootstrap
    })
)

environment.loaders.prepend('coffee', coffee)
module.exports = environment
