"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getTopComments = exports.getRatingByPartnerId = exports.deleteCommentById = exports.postComment = exports.getCommentByPartner = exports.getComments = void 0;
var commentModels_1 = __importDefault(require("../models/commentModels"));
var sequelize_1 = require("sequelize");
var fs = require("fs");
var getComments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentModels_1["default"].findAll()];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_1 instanceof Error) {
                    errMsg = err_1.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getComments = getComments;
var getCommentByPartner = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var partner, response, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                partner = req.params.partner;
                return [4 /*yield*/, commentModels_1["default"].findAll({
                        where: {
                            partner: partner
                        }
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_2 instanceof Error) {
                    errMsg = err_2.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCommentByPartner = getCommentByPartner;
var postComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var partner, _a, nama, komen, rating, filter, final, file, response, err_3, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                partner = req.params.partner;
                _a = req.body, nama = _a.nama, komen = _a.komen, rating = _a.rating;
                filter = JSON.parse(JSON.stringify({ nama: nama, komen: komen, rating: rating, partner: partner }));
                final = {};
                file = req.file;
                if (file) {
                    final = __assign(__assign({}, filter), { foto: file.filename });
                }
                else {
                    final = __assign({}, filter);
                }
                return [4 /*yield*/, commentModels_1["default"].create(__assign({}, final))];
            case 1:
                response = _b.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _b.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_3 instanceof Error) {
                    errMsg = err_3.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postComment = postComment;
var deleteCommentById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_4, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, commentModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    }).then(function (Comment) {
                        if (Comment.foto) {
                            fs.unlink("./images/".concat(Comment.foto), function (err) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                            });
                        }
                        Comment.destroy();
                        return {
                            message: "Berhasil Untuk Menghapus Comment",
                            success: true
                        };
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_4 instanceof Error) {
                    errMsg = err_4.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCommentById = deleteCommentById;
var getRatingByPartnerId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var partner, response, err_5, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                partner = req.params.partner;
                return [4 /*yield*/, commentModels_1["default"].findOne({
                        where: {
                            partner: partner
                        },
                        attributes: [
                            [sequelize_1.Sequelize.fn("AVG", sequelize_1.Sequelize.col("rating")), "rating"],
                            [sequelize_1.Sequelize.fn("COUNT", sequelize_1.Sequelize.col("id")), "banyak"],
                        ]
                    }).then(function (d) {
                        var attr = d.dataValues;
                        return __assign(__assign({}, attr), { rating: Number(attr.rating).toFixed(1) });
                        // };
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_5 instanceof Error) {
                    errMsg = err_5.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRatingByPartnerId = getRatingByPartnerId;
var getTopComments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, number, partner, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.params, number = _a.number, partner = _a.partner;
                return [4 /*yield*/, commentModels_1["default"].findAll({
                        where: {
                            partner: parseInt(partner)
                        },
                        order: [["input_at", "DESC"]],
                        limit: parseInt(number)
                    })];
            case 1:
                response = _b.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_6 = _b.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_6 instanceof Error) {
                    errMsg = err_6.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTopComments = getTopComments;
