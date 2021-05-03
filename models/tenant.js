
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tenant extends Model {}

//initalizing using sequalize
Tenant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    phone_number: {
        // make sure this is a string
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    emer_contact_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emer_contact_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    property_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "property",
            key: "id",
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tenant",
  }
);

module.exports = Tenant;