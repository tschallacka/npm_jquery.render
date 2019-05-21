var $ = require('jquery');

var plugin = function(callback) {
    $(document).on('render', callback)
}

$.fn.render = plugin;
