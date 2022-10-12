const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface Pengaduan
  extends Model<
    InferAttributes<Pengaduan>,
    InferCreationAttributes<Pengaduan>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  nama: string;
  saran: string;
  email: string;
  input_at: string;
}

const Partner = db.define<Pengaduan>(
  "pengaduan",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: DataTypes.STRING,
    saran: DataTypes.STRING,
    email: DataTypes.STRING,
    input_at: { type: "TIMESTAMP" },
  },
  {
    freezeTableName: true,
  }
);

export default Partner;

(async () => {
  await db.sync();
})();
