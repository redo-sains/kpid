const { Sequelize, DataTypes } = require("sequelize");

import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import db from "../config/database";

interface CommentArticle
  // @ts-ignore
  extends Model<
    // @ts-ignore
    InferAttributes<CommentArticle>,
    InferCreationAttributes<CommentArticle>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  nama: string;
  komen: string;
  rating: number;
  foto: string;
  input_at: Date;
  article: number;
}

// @ts-ignore
const CommentArticle = db.define<CommentArticle>(
  "comment_article",
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
    article: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
  }
);

export default CommentArticle;

(async () => {
  await db.sync();
})();
