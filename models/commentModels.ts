const { Sequelize, DataTypes } = require("sequelize");
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface Comment
  // @ts-ignore
  extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  nama: string;
  komen: string;
  rating: number;
  foto: string;
  input_at: Date;
  umkm_id: number;
}

// @ts-ignore
const Comment = db.define<Comment>(
  "comment",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nama: DataTypes.STRING,
    komen: DataTypes.STRING,
    rating: DataTypes.DOUBLE,
    foto: DataTypes.STRING,
    input_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    umkm_id: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
  }
);

export default Comment;

(async () => {
  await db.sync();
})();
