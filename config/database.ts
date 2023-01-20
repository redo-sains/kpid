import { Sequelize } from "sequelize";

const db = new Sequelize("kpid_db", "root", "13Digital@gmailcom", {
  host: "127.0.0.1",
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
