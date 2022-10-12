const { Sequelize, Model, DataTypes } = require("sequelize");
import db from "../config/database";

const Comment = db.define(
  "comment",
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
    partner: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
  }
);

export default Comment;

(async () => {
  await db.sync();
})();
