import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import db from "../config/database";

interface ArticleModel
  extends Model<
    InferAttributes<ArticleModel>,
    InferCreationAttributes<ArticleModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  judul: string;
  deskripsi: string;
  gambar: string;
  input_at: string;
}

const ArticleModel = db.define<ArticleModel>(
  "article",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    judul: { type: DataTypes.STRING, defaultValue: "" },
    deskripsi: { type: DataTypes.TEXT, defaultValue: "" },
    gambar: { type: DataTypes.STRING, defaultValue: "" },
    input_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    freezeTableName: true,
  }
);

export default ArticleModel;

(async () => {
  await db.sync();
})();
