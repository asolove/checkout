/**
 * @module ./product.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Product
 * @extends Component
 */
exports.Product = Component.specialize(/** @lends Product# */ {
    constructor: {
        value: function Product() {
            this.super();
        }
    }
});
