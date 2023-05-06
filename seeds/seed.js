// const sequelize = require('../config/connection');
// const { User } = require('../models');
// const { BlogPost } = require('../models')

// const userData = require('./userData.json');
// const BlogData = require('./blogData.json')

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await BlogPost.bulkCreate(BlogData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();