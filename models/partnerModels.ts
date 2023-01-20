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
  stream: string;
}

const Partner = db.define<PartnerModel>(
  "partner",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, defaultValue: "" },
    nama: { type: DataTypes.STRING, defaultValue: "" },
    channel: { type: DataTypes.STRING, defaultValue: "" },
    deskripsi: DataTypes.TEXT,
    alamat: { type: DataTypes.STRING, defaultValue: "" },
    instagram: { type: DataTypes.STRING, defaultValue: "" },
    facebook: { type: DataTypes.STRING, defaultValue: "" },
    youtube: { type: DataTypes.STRING, defaultValue: "" },
    google_maps: { type: DataTypes.STRING, defaultValue: "" },
    logo: { type: DataTypes.STRING, defaultValue: "" },
    stream: { type: DataTypes.STRING, defaultValue: "" },
  },
  {
    freezeTableName: true,
  }
);

export default Partner;

(async () => {
  await db.sync();
})();
