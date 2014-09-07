/*
 * Automatically resize a dom node to fit its parent by keeping its original ratio.
 * Usefull for image for example to fit the content. A good fallback for old browser that does not support
 * css3 background cover.
 *
 * Usage:
 * $('img.example').fillparent();
 *
 * CSS rules requirements:
 * .parent{
 *   potision:relative/fixed/absolute;
 * }
 * .parent img.example{
 *   position:absolute;
 * }
 *
 * Do use this script as a fallback for css3 cover rule not support is better
 */

/* global jQuery */

;(function ($) {
    'use strict';

    $.fn.fillparent = function() {

        return this.each(function() {
            var $this = $( this ),
                $parent = $(this).parent();
            
            if(!$this.data('originalwidth')) {
                $this.data('originalratio', $(this).width() / $(this).height() );
            }
            
            var ratio = $this.data('originalratio'),
                parentRatio = $parent.width() / $parent.height();
            
            if(ratio > parentRatio) {
                $this.css({
                    width: $parent.height() * ratio + 'px',
                    height: $parent.height() + 'px',
                    left: Math.ceil( ($parent.width() - $parent.height() * ratio) / 2) + 'px',
                    top: 0
                });    
            }
            else {
                $this.css({
                    width: $parent.width() + 'px',
                    height: ($parent.width() / ratio) + 'px',
                    left: 0,
                    top: Math.ceil( ($parent.height() - $parent.width() / ratio) / 2) + 'px'
                });
            }
        });
    };
}(jQuery));