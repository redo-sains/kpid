const { Sequelize, DataTypes } = require("sequelize");
import bcrypt from "bcryptjs";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface Admin
// @ts-ignore
  extends Model<InferAttributes<Admin>, InferCreationAttributes<Admin>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  username: string;
  password: string;
  type: string;
  umkm_id: number;
}

// @ts-ignore
const Admin = db.define<Admin>(
  "admin",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    umkm_id: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

Admin.beforeCreate((user: any, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      throw new Error();
    });
});

export default Admin;

(async () => {
  await db.sync();
})();
