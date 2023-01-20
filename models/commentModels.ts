const { Sequelize, Model, DataTypes } = require("sequelize");
import db from "../config/database";

const Comment = db.define(
  "comment",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nama: { type: DataTypes.STRING, defaultValue: "" },
    komen: { type: DataTypes.STRING, defaultValue: "" },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    foto: { type: DataTypes.STRING, defaultValue: "" },
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
