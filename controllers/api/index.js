const router = require('express').Router();
const usersRoutes = require('./users');
const propertiesRoutes = require('./properties');
const tenantsRoutes = require('./tenants');

router.use('/user', usersRoutes);
router.use('/property', propertiesRoutes);
router.use('/tenant', tenantsRoutes);

module.exports = router;