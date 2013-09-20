/**
 * @module ./product.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    PressComposer = require("montage/composer/press-composer").PressComposer;

/**
 * @class Product
 * @extends Component
 */
exports.Product = Component.specialize(/** @lends Product# */ {
    constructor: {
        value: function Product() {
            this.super();
            this._pressComposer = new PressComposer();
            this._pressComposer.delegate = this;
            this.addComposer(this._pressComposer);
        }
    },

    prepareForActivationEvents: {
        value: function() {
            this._pressComposer.addEventListener("press", this, false);
        }
    },

    _pressComposer: {
        value: null
    },

    expanded: {
        value: false
    },

    handlePress: {
        value: function() {
            if(!this.expanded) this.expanded = true;
        }
    },

    surrenderPointer: {
        value: function(pointer, component) {
            return false;
        }
    }
});
