const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface profiles
  // @ts-ignore
  extends Model<InferAttributes<profiles>, InferCreationAttributes<profiles>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  nama: string;
  jabatan: string;
  foto: string;
  history: string;
  instagram: string;
  facebook: string;
  twitter: string;
  youtube: string;
  city_id: number;
}

// @ts-ignore
const Profiles = db.define<profiles>(
  "profiles",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING },
    jabatan: DataTypes.STRING,
    foto: DataTypes.STRING,
    history: DataTypes.STRING,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    youtube: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Profiles;

(async () => {
  await db.sync();
})();
