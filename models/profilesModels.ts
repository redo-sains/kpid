const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface profiles
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
}
const Profiles = db.define<profiles>(
  "profiles",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING, defaultValue: "" },
    jabatan: { type: DataTypes.STRING, defaultValue: "" },
    foto: { type: DataTypes.STRING, defaultValue: "" },
    history: { type: DataTypes.STRING, defaultValue: "" },
    instagram: { type: DataTypes.STRING, defaultValue: "" },
    facebook: { type: DataTypes.STRING, defaultValue: "" },
    twitter: { type: DataTypes.STRING, defaultValue: "" },
    youtube: { type: DataTypes.STRING, defaultValue: "" },
  },
  {
    freezeTableName: true,
  }
);

export default Profiles;

(async () => {
  await db.sync();
})();
