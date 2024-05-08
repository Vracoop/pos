// odoo.define('pos_tare.OrderWidget', function (require) {
//     "use strict";
//
//     const {OrderWidget} = require("point_of_sale.OrderWidget");
//
//     const overloadOrderWidget = (OrderWidget_) =>
//         class OrderWidgetTare extends OrderWidget_ {
//             set_value(val) {
//                 var order = this.pos.get_order();
//                 if (order.get_selected_orderline()) {
//                     var mode = this.numpad_state.get('mode');
//                     if (mode === 'quantity') {
//                         var orderline = order.get_selected_orderline();
//                         var tare = orderline.get_tare();
//                         orderline.reset_tare();
//                         orderline.set_quantity(val);
//                         if (tare > 0) {
//                             orderline.set_tare(tare, true);
//                         }
//                     } else if (mode === 'discount') {
//                         order.get_selected_orderline().set_discount(val);
//                     } else if (mode === 'price') {
//                         var selected_orderline = order.get_selected_orderline();
//                         selected_orderline.price_manually_set = true;
//                         selected_orderline.set_unit_price(val);
//                     } else if (mode === 'tare') {
//                         if (this.pos.config.iface_tare_method === 'barcode') {
//                             this.gui.show_popup('error',
//                                 {
//                                     'title': _t('Feature Disabled'),
//                                     'body': _t('You can not set the tare.' +
//                                         ' To be able to set the tare manually' +
//                                         ' you have to change the tare input method' +
//                                         ' in the POS configuration.')
//                                 });
//                         } else {
//                             try {
//                                 order.get_selected_orderline().set_tare(val, true);
//                             } catch (error) {
//                                 var title = _t("We can not apply this tare.");
//                                 var popup = {title: title, body: error.message};
//                                 this.gui.show_popup('error', popup);
//                             }
//                         }
//                     }
//                 }
//             }
//         };
//
//     Registries.Model.extend(OrderWidget, overloadOrderWidget);
// });
