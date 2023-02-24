const { User } = require('../models');

const userData = [
  {
    name: 'bharatrai',
    email: 'brai@ucr.edu',
    password: 'test1'
    
  },
  {
    name: 'brai',
    email: 'brai@usc.edu',
    password: 'test2'
  },
  {
    name: 'swaggyrai',
    email: 'brai@ucla.edu',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;