/*!
 * jQuery UI Effects Puff @VERSION
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Puff Effect
//>>group: Effects
//>>description: Creates a puff effect by scaling the element up and hiding it at the same time.
//>>docs: http://api.jqueryui.com/puff-effect/
//>>demos: http://jqueryui.com/effect/

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('jquery'), require('./effect'), require('./effect-scale')) || module.exports;;
}(function ($) {
    return $.effects.define('puff', 'hide', function (options, done) {
        var newOptions = $.extend(true, {}, options, {
            fade: true,
            percent: parseInt(options.percent, 10) || 150
        });
        $.effects.effect.scale.call(this, newOptions, done);
    });
}));