/**
 * @module ./shipping-options.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ShippingOptions
 * @extends Component
 */
exports.ShippingOptions = Component.specialize(/** @lends ShippingOptions# */ {
    constructor: {
        value: function ShippingOptions() {
            this.super();
            window.shippingOptions = this;
        }
    }
});
