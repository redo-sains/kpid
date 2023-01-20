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
exports.postPengaduanReply = exports.postPengaduan = exports.deleteReplyPengaduanById = exports.deletePengaduanById = exports.getPengaduanById = exports.getPengaduans = void 0;
var pengaduanModels_1 = __importDefault(require("../models/pengaduanModels"));
var replyPengaduanModels_1 = __importDefault(require("../models/replyPengaduanModels"));
var getPengaduans = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, values, promises, final, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, pengaduanModels_1["default"].findAll()];
            case 1:
                response = _a.sent();
                values = response.map(function (article) {
                    var id = article.id, nama = article.nama, saran = article.saran, email = article.email, input_at = article.input_at;
                    var value = {
                        id: id,
                        nama: nama,
                        saran: saran,
                        email: email,
                        input_at: input_at
                    };
                    return __assign({}, value);
                });
                return [4 /*yield*/, values.map(function (obj) {
                        return replyPengaduanModels_1["default"].findAll({ where: { pengaduan: obj.id } }).then(function (results) {
                            return __assign(__assign({}, obj), { replies: results.map(function (res) { return res.reply; }), detail_replies: results });
                        });
                    })];
            case 2:
                promises = _a.sent();
                return [4 /*yield*/, Promise.all(promises).then(function (results) {
                        return results;
                    })];
            case 3:
                final = _a.sent();
                res.status(200).json(final);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_1 instanceof Error) {
                    errMsg = err_1.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getPengaduans = getPengaduans;
var getPengaduanById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, id, nama, saran, email, input_at, value_1, final, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, pengaduanModels_1["default"].findOne({
                        where: {
                            id: req.params.id
                        }
                    })];
            case 1:
                response = _a.sent();
                id = response.id, nama = response.nama, saran = response.saran, email = response.email, input_at = response.input_at;
                value_1 = { id: id, nama: nama, saran: saran, email: email, input_at: input_at };
                return [4 /*yield*/, replyPengaduanModels_1["default"].findAll({
                        where: { pengaduan: response.id }
                    }).then(function (asset) {
                        return __assign(__assign({}, value_1), { replies: asset.map(function (res) { return res.reply; }), detail_replies: asset });
                    })];
            case 2:
                final = _a.sent();
                res.status(200).json(final);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_2 instanceof Error) {
                    errMsg = err_2.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPengaduanById = getPengaduanById;
var deletePengaduanById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_3, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, pengaduanModels_1["default"].destroy({
                        where: {
                            id: id
                        }
                    }).then(function (d) {
                        return {
                            message: "Berhasil Untuk Menghapus Pengaduan",
                            success: true
                        };
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
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
exports.deletePengaduanById = deletePengaduanById;
var deleteReplyPengaduanById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_4, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, replyPengaduanModels_1["default"].destroy({
                        where: {
                            id: id
                        }
                    }).then(function (d) {
                        return {
                            message: "Berhasil Untuk Menghapus Reply Pengaduan",
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
exports.deleteReplyPengaduanById = deleteReplyPengaduanById;
var postPengaduan = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, nama, _c, saran, _d, email, response, err_5, errMsg;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.body, _b = _a.nama, nama = _b === void 0 ? "" : _b, _c = _a.saran, saran = _c === void 0 ? "" : _c, _d = _a.email, email = _d === void 0 ? "" : _d;
                return [4 /*yield*/, pengaduanModels_1["default"].create({
                        nama: nama,
                        saran: saran,
                        email: email
                    }).then(function (d) {
                        return {
                            success: true,
                            message: "Pengaduan Sukses Dibuat",
                            attributes: d
                        };
                    })];
            case 1:
                response = _e.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _e.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_5 instanceof Error) {
                    errMsg = err_5.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postPengaduan = postPengaduan;
var postPengaduanReply = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, nama, reply, email, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, nama = _a.nama, reply = _a.reply, email = _a.email;
                return [4 /*yield*/, replyPengaduanModels_1["default"].create({
                        nama: nama,
                        reply: reply,
                        email: email,
                        pengaduan: parseInt(id)
                    }).then(function (d) {
                        return {
                            success: true,
                            message: "Reply Pengaduan Sukses Dibuat",
                            attributes: d
                        };
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
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postPengaduanReply = postPengaduanReply;
