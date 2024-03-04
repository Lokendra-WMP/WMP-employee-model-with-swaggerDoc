
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [{
      name: 'Gaurav Gupta',
      designation: 'DevOPs-I',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employees', null, {});
  }
};
