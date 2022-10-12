const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface Lembaga
  extends Model<InferAttributes<Lembaga>, InferCreationAttributes<Lembaga>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  nama: string;
  foto: string;
  deskripsi: string;
}

const Lembaga = db.define<Lembaga>(
  "lembaga",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING },
    foto: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Lembaga;

(async () => {
  await db.sync();
})();
