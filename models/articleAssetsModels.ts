import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import db from "../config/database";

interface ArticleAssetsModel
  extends Model<
    // @ts-ignore
    InferAttributes<ArticleAssetsModel>,
    InferCreationAttributes<ArticleAssetsModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  article: number;
  foto: string;
}

// @ts-ignore
const ArticleAssetsModel = db.define<ArticleAssetsModel>(
  "article_assets",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    article: { type: DataTypes.INTEGER },
    foto: { type: DataTypes.STRING, defaultValue: "" },
  },
  {
    freezeTableName: true,
  }
);

export default ArticleAssetsModel;

(async () => {
  await db.sync();
})();
