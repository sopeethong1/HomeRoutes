const router = require('express').Router();
const { Tenant, Property } = require('../models');


// render all tenants
router.get('/', async (req, res) => {
    const tenantData = await Tenant.findAll({
        include: [
          {
            model: Property,
            attributes: ['address', 'leaseEnd'],
          },
        ],
      }).catch((err) => { 
        res.json(err);
      });
        const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));
        // console.log("This is the right data", tenants);
         res.render('all_tenants', {tenants});
});



// render view single tenant page
router.get('/view/:id', async (req, res) => {
    const tenantData = await Tenant.findAll({
      where: {
          id: req.params.id
      },
    }).catch((err) => { 
        res.json(err);
      });
        const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));
        console.log("This is the right data", tenants);
         res.render('view_tenant', {tenants});
});






// render update tenant page
router.get('/update/:id', (req, res) => {
         res.render('update_tenant');
});


router.get('/create', (req, res) => {
  res.render('add_tenants');
});
module.exports = router;