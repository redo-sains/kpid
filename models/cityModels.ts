const { DataTypes } = require("sequelize");
import bcrypt from "bcryptjs";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface City
  // @ts-ignore
  extends Model<InferAttributes<City>, InferCreationAttributes<City>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  city_name: string;
}

// @ts-ignore
const City = db.define<City>(
  "city",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city_name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

City.beforeCreate((user: any, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      throw new Error();
    });
});

export default City;

(async () => {
  await db.sync();
})();
