const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize/types";
import db from "../config/database";

interface ReplyPengaduan
  extends Model<
    InferAttributes<ReplyPengaduan>,
    InferCreationAttributes<ReplyPengaduan>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  nama: string;
  reply: string;
  email: string;
  input_at: string;
  pengaduan: number;
}

const ReplyPengaduan = db.define<ReplyPengaduan>(
  "reply_pengaduan",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING, defaultValue: "" },
    reply: { type: DataTypes.STRING, defaultValue: "" },
    email: { type: DataTypes.STRING, defaultValue: "" },
    input_at: { type: "TIMESTAMP" },
    pengaduan: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
  }
);

export default ReplyPengaduan;

(async () => {
  await db.sync();
})();
