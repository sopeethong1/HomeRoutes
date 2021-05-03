const { Property } = require('../models');

const propertyData = [
  {
    address: '130 center Ave.',
    leaseStart: '01-01-2021',
    leaseEnd: '01-01-2022',
    squareFootage: '3000',
    propertyType: 'house',
    landlord_id: 1,
  },
  {
    address: '523 Gilbert St.',
    leaseStart: '01-01-2020',
    leaseEnd: '01-01-2022',
    squareFootage: '4500',
    propertyType: 'house',
    landlord_id: 1,
  },
  {
    address: '100 Benjamin Dr. apt. 7',
    leaseStart: '04-20-21',
    leaseEnd: '04-20-22',
    squareFootage: '1000',
    propertyType: 'apartment',
    landlord_id: 2,
  },
  {
    address: '1600 Pennsylvania Ave.',
    leaseStart: '10-13-1792',
    leaseEnd: '10-13-4792',
    squareFootage: '55000',
    propertyType: 'house',
    landlord_id: 3,
  },
  {
    address: '1221 Concrete Rd.',
    leaseStart: '01-01-21',
    leaseEnd: '06-01-21',
    squareFootage: '3500',
    propertyType: 'house',
    landlord_id: 3,
  },
];

const seedProperties = () => Property.bulkCreate(propertyData);

module.exports = propertyData;