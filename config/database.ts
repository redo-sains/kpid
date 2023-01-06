import { Sequelize } from "sequelize";

const db = new Sequelize("hipmi_db", "root", "13Digital@gmailcom", {
  host: "localhost",
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
