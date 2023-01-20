import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import db from "../config/database";

interface PartnerAssetsModel
  extends Model<
    InferAttributes<PartnerAssetsModel>,
    InferCreationAttributes<PartnerAssetsModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  partner: number;
  foto: string;
}

const PartnerAssetsModel = db.define<PartnerAssetsModel>(
  "partner_assets",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    partner: { type: DataTypes.NUMBER },
    foto: {
      type: { type: DataTypes.STRING, defaultValue: "" },
      defaultValue: "",
    },
  },
  {
    freezeTableName: true,
  }
);

export default PartnerAssetsModel;

(async () => {
  await db.sync();
})();
