const { User } = require('../models');

const userData = [
  {
    username: 'jimmi',
    email: 'jimmibean@email.com',
    password: 'password1',
  },
  {
    username: 'bigbird',
    email: 'bigbird@email.com',
    password: 'password2',
  },
  {
    username: 'tiger',
    email: 'tigerwoods@email.com',
    password: 'password3',
  },
  {
    username: 'bushdid911',
    email: 'bushdid911@email.com',
    password: 'password4',
  },
  {
    username: 'steve',
    email: 'stevo@email.com',
    password: 'password5',
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = userData;
