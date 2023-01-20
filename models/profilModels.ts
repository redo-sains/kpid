const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize/types";
import db from "../config/database";

interface profil
  extends Model<InferAttributes<profil>, InferCreationAttributes<profil>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()

  visi: string;
  misi: string;
  struktur_organisasi: string;
  latar_belakang: string;
  wilayah_kerja: string;
  program_unggulan: string;
  id: CreationOptional<number>;
}

const Profil = db.define<profil>(
  "profil",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    visi: { type: DataTypes.STRING, defaultValue: "" },
    misi: { type: DataTypes.STRING, defaultValue: "" },
    struktur_organisasi: { type: DataTypes.STRING, defaultValue: "" },
    latar_belakang: { type: DataTypes.STRING, defaultValue: "" },
    wilayah_kerja: { type: DataTypes.STRING, defaultValue: "" },
    program_unggulan: { type: DataTypes.STRING, defaultValue: "" },
  },
  {
    freezeTableName: true,
  }
);

export default Profil;

(async () => {
  await db.sync();
})();
