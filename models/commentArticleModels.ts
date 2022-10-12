const { Sequelize, Model, DataTypes } = require("sequelize");
import db from "../config/database";

const CommentArticle = db.define(
  "comment_article",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nama: DataTypes.STRING,
    komen: DataTypes.STRING,
    rating: DataTypes.INTEGER,
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
