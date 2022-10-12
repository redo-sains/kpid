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
    visi: { type: DataTypes.STRING },
    misi: DataTypes.STRING,
    struktur_organisasi: DataTypes.STRING,
    latar_belakang: DataTypes.STRING,
    wilayah_kerja: DataTypes.STRING,
    program_unggulan: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Profil;

(async () => {
  await db.sync();
})();
