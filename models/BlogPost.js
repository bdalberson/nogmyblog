const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model{}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    creatorName: {   //I think this should be a FK
      type: DataTypes.STRING,
      allowNull: false,
    },
    commentContent: {
        type: DataTypes.TEXT,
    
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
  }
);

module.exports = BlogPost;
