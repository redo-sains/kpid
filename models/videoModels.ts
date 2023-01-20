const { Sequelize, Model, DataTypes } = require("sequelize");
import db from "../config/database";

const Video = db.define(
  "video",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    judul: { type: DataTypes.STRING, defaultValue: "" },
    video: { type: DataTypes.STRING, defaultValue: "" },
    input_at: { type: "TIMESTAMP" },
  },
  {
    freezeTableName: true,
  }
);

export default Video;

(async () => {
  await db.sync();
})();
