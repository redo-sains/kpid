const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize/types";
import db from "../config/database";

interface UmkmModel
  extends Model<
    // @ts-ignore
    InferAttributes<UmkmModel>,
    InferCreationAttributes<UmkmModel>
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
  twitter: string;
  google_maps: string;
  owner_name: string;
  owner_image: string;
  qr_code: string;
}

// @ts-ignore
const Umkm = db.define<UmkmModel>(
  "umkm",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    nama: DataTypes.STRING,
    channel: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    alamat: DataTypes.STRING,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    youtube: DataTypes.STRING,
    google_maps: DataTypes.STRING,
    owner_name: DataTypes.STRING,
    owner_image: DataTypes.STRING,
    qr_code: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Umkm;

(async () => {
  await db.sync();
})();
