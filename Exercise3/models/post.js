const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

Post.init(
    {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  postTitle: {
    type: DataTypes.STRING(50),
    allowNull: false,
    required: true,
  },
  postDescription: {
    type: DataTypes.STRING(600),
    allowNull: false,
    required: true,
  },
  postImage: {
    type: DataTypes.STRING(600),
    allowNull: false,
    required: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "users", key: "id" },
  },
},
{
    sequelize: sequelizeInstance,
    modelName: "posts", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
