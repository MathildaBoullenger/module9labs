const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }

//Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
    },
    userEmail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      required: true,
      unique: true,
    },
    userPassword: {
      type: DataTypes.STRING(100),
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = User;
