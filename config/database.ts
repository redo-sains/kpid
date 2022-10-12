import { Sequelize } from "sequelize";

const db = new Sequelize("u953310580_kpid_db", "u953310580_root", "^A6z:@Uo@", {
  host: "151.106.117.102",
  dialect: "mysql",
  define: {
    scopes: {
      excludeId: {
        attributes: {
          exclude: ["id"],
        },
      },
      //   excludeCreatedAtUpdateAt: {
      //     attributes: { exclude: ["createdAt", "updatedAt", "id"] },
      //   },
    },
    timestamps: false,
  },
});

export default db;
