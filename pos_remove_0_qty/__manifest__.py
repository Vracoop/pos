# Copyright (C) 2018-Today: BEES coop (<http://www.bees-coop.be/>)
# Copyright (C) 2019-Today: Coop IT Easy SCRLfs (<http://www.bees-coop.be/>)
# - Houssine BAKKALI - <houssine@coopiteasy.be>
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    'name': 'POS order remove zero quantities',
    'version': '12.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Remove pos order line with quantity set to 0',
    'description': """
    This module fix the issue on picking when there is two lines on 
    the pos order for the same product, with one of lines with a 0 quantity.
    The lines with quantity set to 0 are removed before the pos order is 
    processed to avoid such issue.
    """,
    'author': 'BEES coop SCRLfs ,'
              'Coop IT Easy SCRLfs',
    'website': 'www.coopiteasy.be',
    'license': 'AGPL-3',
    'depends': [
        'point_of_sale',
    ],
    'data': [],
    'installable': True,
}
