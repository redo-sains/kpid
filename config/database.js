"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize("hipmi_db", "root", "13Digital@gmailcom", {
    host: "localhost",
    dialect: "mysql",
    define: {
        scopes: {
            excludeId: {
                attributes: {
                    exclude: ["id"]
                }
            }
        },
        timestamps: false
    }
});
exports["default"] = db;
