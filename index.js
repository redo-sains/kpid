"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var UserRoute_1 = __importDefault(require("./routes/UserRoute"));
var publicRoute_1 = __importDefault(require("./routes/publicRoute"));
var port = process.env.PORT || 3000;
var app = (0, express_1["default"])();
app.use(express_1["default"].urlencoded());
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
app.use(UserRoute_1["default"]);
app.use(publicRoute_1["default"]);
app.listen(port, function () {
    console.log("server dijalankan di port ".concat(port));
});
app.get("/", function (req, res) {
    res.status(200).json({
        status: "aktif"
    });
});
