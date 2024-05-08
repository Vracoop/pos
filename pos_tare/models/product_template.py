# Copyright (C) 2021-Today: GRAP (<http://www.grap.coop/>)
# @author: Sylvain LE GAL (https://twitter.com/legalsylvain)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

from odoo import models, fields


class ProductTemplate(models.Model):
    _inherit = "product.template"

    tare_weight = fields.Float(
        help="Set here Constant tare weight"
        " for the given product. This tare will be substracted when"
        " the product is weighted",
    )
