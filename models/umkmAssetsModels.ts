import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import db from "../config/database";

interface UmkmAssetsModel
  extends Model<
    // @ts-ignore
    InferAttributes<UmkmAssetsModel>,
    InferCreationAttributes<UmkmAssetsModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  umkm_id: number;
  foto: string;
}

// @ts-ignore
const UmkmAssetsModel = db.define<UmkmAssetsModel>(
  "umkm_assets",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    umkm_id: { type: DataTypes.INTEGER },
    foto: { type: DataTypes.STRING, defaultValue: "" },
  },
  {
    freezeTableName: true,
  }
);

export default UmkmAssetsModel;

(async () => {
  await db.sync();
})();
