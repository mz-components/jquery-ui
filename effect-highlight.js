/*!
 * jQuery UI Effects Highlight @VERSION
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Highlight Effect
//>>group: Effects
//>>description: Highlights the background of an element in a defined color for a custom duration.
//>>docs: http://api.jqueryui.com/highlight-effect/
//>>demos: http://jqueryui.com/effect/

(function (factory) {
    // AMD. Register as an anonymous module.
    
    module.exports = factory(require('jquery'), require('./effect')) || module.exports;;
}(function ($) {
    return $.effects.define('highlight', 'show', function (options, done) {
        var element = $(this), animation = { backgroundColor: element.css('backgroundColor') };
        if (options.mode === 'hide') {
            animation.opacity = 0;
        }
        $.effects.saveStyle(element);
        element.css({
            backgroundImage: 'none',
            backgroundColor: options.color || '#ffff99'
        }).animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
}));