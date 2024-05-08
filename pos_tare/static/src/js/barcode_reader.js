odoo.define('pos_tare.ProductScreen', function (require) {
    "use strict";

    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");
    const {useBarcodeReader} = require("point_of_sale.custom_hooks");

    const extendProductScreen = (ProductScreen_) =>
        class extends ProductScreen_ {
            setup() {
                console.log("extend ProductScreen");
                super.setup();
                useBarcodeReader({
                    tare: this._barcodeTareAction,
                });
            }

            async _barcodeTareAction(code) {
                console.log("_barcodetareAction _barcodetareAction _barcodetareAction _barcodetareAction", code);

            }
        }

    Registries.Component.extend(ProductScreen, extendProductScreen);
});
// odoo.define('pos_tare.screens', function (require) {
//
//     "use strict";
//     var core = require('web.core');
//     var screens = require('point_of_sale.screens');
//     var utils = require('web.utils');
//
//     var _t = core._t;
//     var round_pr = utils.round_precision;
//     var leq_zero_qty = (ol) => ol.get_quantity() <= 0;
//
//     // This configures read action for tare barcode. A tare barcode contains a
//     // fake product ID and the weight to be subtracted from the product in the
//     // latest order line.
//     screens.ScreenWidget.include({
//         barcode_tare_action: function (code) {
//             try {
//                 var order = this.pos.get_order();
//                 var selected_order_line = order.get_selected_orderline();
//                 var tare_weight = code.value;
//                 selected_order_line.set_tare(tare_weight, true);
//             } catch (error) {
//                 var title = _t("We can not apply this tare barcode.");
//                 var popup = {title: title, body: error.message};
//                 this.gui.show_popup('error', popup);
//             }
//         },
//         // Setup the callback action for the "weight" barcodes.
//         show: function () {
//             this._super();
//             if (this.pos.config.iface_tare_method !== 'manual') {
//                 this.pos.barcode_reader.set_action_callback(
//                     'tare',
//                     _.bind(this.barcode_tare_action, this));
//             }
//         },
//     });
//
//     var _super_ScaleScreenWidget_order_product = screens.ScaleScreenWidget.prototype.order_product;
//
//
// });
