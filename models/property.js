
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Property extends Model {}

//initalizing using sequalize
Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leaseStart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leaseEnd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    squareFootage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landlord_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "property",
  }
);

module.exports = Property;