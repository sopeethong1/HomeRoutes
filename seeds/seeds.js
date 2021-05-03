const sequelize = require('../config/connection');
const seedUsers = require('./users');
const seedProperties = require('./properties');
const seedTenants = require('./tenants');
const { Tenant, Property, User  } = require('../models');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  
  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  await Property.bulkCreate(seedProperties, {
    individualHooks: true,
    returning: true,
  });

  await Tenant.bulkCreate(seedTenants, {
    individualHooks: true,
    returning: true,
  });
 

  

  process.exit(0);
};

seedAll();

