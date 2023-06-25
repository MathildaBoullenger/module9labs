const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "posts", key: "id" },
    },
    commentText: {
      type: DataTypes.STRING(600),
      allowNull: false,
      required: true,
    }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Comment;