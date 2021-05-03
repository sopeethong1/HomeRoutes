const router = require('express').Router(); //Router object 
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api');
const propertyRoutes = require('./propertyRoutes');
const tenantRoutes = require('./tenantRoutes');


router.use('/', homeRoutes);
router.use('/property', propertyRoutes);
router.use('/tenant', tenantRoutes);
router.use('/api', apiRoutes);


module.exports = router;