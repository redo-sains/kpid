"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize("kpid_db", "root", "13Digital@gmailcom", {
    host: "127.0.0.1",
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
