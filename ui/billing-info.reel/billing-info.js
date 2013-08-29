/**
 * @module ./billing-info.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class BillingInfo
 * @extends Component
 */
exports.BillingInfo = Component.specialize(/** @lends BillingInfo# */ {
    constructor: {
        value: function BillingInfo() {
            this.super();
        }
    },

    states: {
    	value: ["AL", "AK", "AS", "AR", "CA", "CO", "CT"]
    },

    templateDidLoad: {
    	value: function () {
            this._initStates();
    	}
    },

    _initStates: {
    	value: function (){
    		var rangeController = this.templateObjects.rangeController1;
    		this.states.forEach(function(state){
    			rangeController.add({ label: state });
    		});
    	}
    }
});
