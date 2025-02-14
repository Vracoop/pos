===============================
Point of Sale - Price to Weight
===============================

.. 
   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   !! This file is generated by oca-gen-addon-readme !!
   !! changes will be overwritten.                   !!
   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   !! source digest: sha256:b0443f725649e14ed47bb43b7e7815d98a6f850cf45bffdd6f66b8eee3ac1b76
   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.. |badge1| image:: https://img.shields.io/badge/maturity-Beta-yellow.png
    :target: https://odoo-community.org/page/development-status
    :alt: Beta
.. |badge2| image:: https://img.shields.io/badge/licence-AGPL--3-blue.png
    :target: http://www.gnu.org/licenses/agpl-3.0-standalone.html
    :alt: License: AGPL-3
.. |badge3| image:: https://img.shields.io/badge/github-OCA%2Fpos-lightgray.png?logo=github
    :target: https://github.com/OCA/pos/tree/12.0/pos_price_to_weight
    :alt: OCA/pos
.. |badge4| image:: https://img.shields.io/badge/weblate-Translate%20me-F47D42.png
    :target: https://translation.odoo-community.org/projects/pos-12-0/pos-12-0-pos_price_to_weight
    :alt: Translate me on Weblate
.. |badge5| image:: https://img.shields.io/badge/runboat-Try%20me-875A7B.png
    :target: https://runboat.odoo-community.org/builds?repo=OCA/pos&target_branch=12.0
    :alt: Try me on Runboat

|badge1| |badge2| |badge3| |badge4| |badge5|

This module extends Odoo Point Of Sale features, to allow to scan barcode
with price and to compute according quantity.

In Odoo by default, there are three types of barcode rules for products.

* 'Unit Product' (type='product'). Scanning a product will add a unit of this
  product to the current order.
* 'Priced product' (type='price'). A price is extracted from the barcode, and
  a new line with the given price and a quantity = 1 is added to the current
  order.
* 'Weighted product' (type='weight). A weight is extracted from the barcode,
  and a new line with the given weight, and a computed price
  (quantity * Unit price) is added to the current order.

This module add a new option:

* 'Priced Product (Computed Weight)' (type='price_to_weight'). A price is
  extracted from the barcode, and a new line with the given price, and a
  computed quantity (Price / Unit Price) is added to the current order.

.. image:: https://raw.githubusercontent.com/OCA/pos/12.0/pos_price_to_weight/static/description/barcode_rule.png
   :width: 800 px

This module is usefull in shops with products scaled, to manage correctly
stock quantities.

Samples

* Given a product with a unit price of 1,50€ / kg
* The barcode is 0212345{NNNDD}x where:
    * 02 is the prefix of the barcode rule
    * 12345 is the product number
    * {NNNDD} is the price of the scaled product
    * x is the control digit

if {NNNDD} is 00265, the price is so 2,65€ and the according quantity is
2,65€ / 1,5 €/kg = 1,767 kg

.. image:: https://raw.githubusercontent.com/OCA/pos/12.0/pos_price_to_weight/static/description/pos_test_1.png
   :width: 800 px

if {NNNDD} is 00810, the price is so 8,10€ and the according quantity is
8,10€ / 1,5 €/kg = 5,400 kg

.. image:: https://raw.githubusercontent.com/OCA/pos/12.0/pos_price_to_weight/static/description/pos_test_2.png
   :width: 800 px

**Table of contents**

.. contents::
   :local:

Configuration
=============

* Go to Point of Sale > Configuration > Barcode Nomenclatures
* Edit your barcode rules, according to your barcodes settings

* Go to Point of Sale > Configuration > Point of Sale
* Select the 'Unit Price' field that will be used to convert the price to weight.

.. image:: https://raw.githubusercontent.com/OCA/pos/12.0/pos_price_to_weight/static/description/pos_config_form.png
   :width: 800 px

**Note:**

By default, this is the field ``list_price`` that will be used.
If you want to use a custom field, it should be loaded in the javascript file calling

``models.load_fields("product.product", ['my_custom_field']);``

Bug Tracker
===========

Bugs are tracked on `GitHub Issues <https://github.com/OCA/pos/issues>`_.
In case of trouble, please check there if your issue has already been reported.
If you spotted it first, help us to smash it by providing a detailed and welcomed
`feedback <https://github.com/OCA/pos/issues/new?body=module:%20pos_price_to_weight%0Aversion:%2012.0%0A%0A**Steps%20to%20reproduce**%0A-%20...%0A%0A**Current%20behavior**%0A%0A**Expected%20behavior**>`_.

Do not contact contributors directly about support or help with technical issues.

Credits
=======

Authors
~~~~~~~

* La Louve
* GRAP

Contributors
~~~~~~~~~~~~

* Sylvain LE GAL <https://twitter.com/legalsylvain>
* Druidoo <https://www.druidoo.io>

Other credits
~~~~~~~~~~~~~

Icon parts come from http://icons8.com

Maintainers
~~~~~~~~~~~

This module is maintained by the OCA.

.. image:: https://odoo-community.org/logo.png
   :alt: Odoo Community Association
   :target: https://odoo-community.org

OCA, or the Odoo Community Association, is a nonprofit organization whose
mission is to support the collaborative development of Odoo features and
promote its widespread use.

This module is part of the `OCA/pos <https://github.com/OCA/pos/tree/12.0/pos_price_to_weight>`_ project on GitHub.

You are welcome to contribute. To learn how please visit https://odoo-community.org/page/Contribute.
