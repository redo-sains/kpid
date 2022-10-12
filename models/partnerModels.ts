const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize/types";
import db from "../config/database";

interface PartnerModel
  extends Model<
    InferAttributes<PartnerModel>,
    InferCreationAttributes<PartnerModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  type: string;
  nama: string;
  channel: string;
  deskripsi: string;
  alamat: string;
  instagram: string;
  facebook: string;
  youtube: string;
  google_maps: string;
  logo: string;
}

const Partner = db.define<PartnerModel>(
  "partner",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    nama: DataTypes.STRING,
    channel: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    alamat: DataTypes.STRING,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    youtube: DataTypes.STRING,
    google_maps: DataTypes.STRING,
    logo: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Partner;

(async () => {
  await db.sync();
})();
