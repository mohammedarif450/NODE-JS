/**
 * Created by USER on 6/4/15.
 */
/*=====================================================
 *
 *	_JL : A Really Small JavaScript framework
 *	 Sujeet Srivasta  2015
 *
 ======================================================*/

/*	_ Object Constructor
 ========================*/

function _(id) {

    // About object is returned if there is no 'id' parameter
    var about = {
        Version: 0.5,
        Author: "Sujeet Srivastava",
        Created: "Fall 2015",
        Updated: "04 Jun 2015"
    };

    if (id) {

        // Avoid clobbering the window scope:
        // return a new _ object if we're in the wrong scope
        if (window === this) {
            return new _(id);
        }

        // We're in the correct object scop:
        // Init our element object and return the object
        this.e = document.getElementById(id);
        return this;
    } else {
        // No 'id' paramter was given, return the 'about' object
        return about;
    }
}

/*	_ Prototype Functions
 ============================*/

_.prototype = {
    ss_hide:	function () {
        this.e.style.display = 'none';
        return this;
    },

    ss_show:	function () {
        this.e.style.display = 'inherit';
        return this;
    },

    ss_bgcolor: function (color) {
        this.e.style.background = color;
        return this;
    },

    ss_val:	function (newval) {
        this.e.value = newval;
        return this;
    },

    ss_toggle: function () {
        if (this.e.style.display !== 'none') {
            this.e.style.display = 'none';
        } else {
            this.e.style.display = '';
        }
        return this;
    },

    ss_size:	function (height, width) {
        this.e.style.height = height + 'px';
        this.e.style.width = width + 'px';
        return this;
    },

    //Event Handling in Custom Lib
    addListener: function(event, callback) {
        this.e.addEventListener(event, callback, false);
    },
    click: function(callback){
        this.addListener('click', callback);
    },
    mouseOver: function(callback){
        this.addListener('onMouseOver', callback);
    }


};