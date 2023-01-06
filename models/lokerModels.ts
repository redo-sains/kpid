const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface Loker
  // @ts-ignore
  extends Model<InferAttributes<Loker>, InferCreationAttributes<Loker>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  judul: string;
  admin_id: string;
  image: string;
  description: string;
  create_at: Date;
}

// @ts-ignore
const Loker = db.define<Loker>(
  "loker",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    judul: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    admin_id: { type: DataTypes.INTEGER },
    description: DataTypes.STRING,
    create_at: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default Loker;

(async () => {
  await db.sync();
})();
