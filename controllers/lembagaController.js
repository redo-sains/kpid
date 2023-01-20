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
exports.updateLembagaById = exports.getTopLembagas = exports.deleteLembagaById = exports.postLembaga = exports.getLembagaById = exports.getLembagas = void 0;
var lembagaModels_1 = __importDefault(require("../models/lembagaModels"));
var fs = require("fs");
var getLembagas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, lembagaModels_1["default"].findAll()];
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
exports.getLembagas = getLembagas;
var getLembagaById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, lembagaModels_1["default"].findOne({
                        where: {
                            id: id
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
exports.getLembagaById = getLembagaById;
var postLembaga = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nama, deskripsi, filter, final, file, response, err_3, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, nama = _a.nama, deskripsi = _a.deskripsi;
                filter = JSON.parse(JSON.stringify({ nama: nama, deskripsi: deskripsi }));
                final = {};
                file = req.file;
                if (file) {
                    final = __assign(__assign({}, filter), { foto: file.filename });
                }
                else {
                    final = __assign({}, filter);
                }
                return [4 /*yield*/, lembagaModels_1["default"].create(__assign({}, final)).then(function (Lembaga) {
                        var id = Lembaga.id, deskripsi = Lembaga.deskripsi, foto = Lembaga.foto, nama = Lembaga.nama;
                        return {
                            message: "Berhasil Untuk Mengupdate Lembaga",
                            success: true,
                            attributes: { id: id, nama: nama, deskripsi: deskripsi, foto: foto }
                        };
                    })];
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
exports.postLembaga = postLembaga;
var deleteLembagaById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_4, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, lembagaModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    }).then(function (Lembaga) {
                        if (Lembaga.foto) {
                            fs.unlink("./images/".concat(Lembaga.foto), function (err) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                            });
                        }
                        Lembaga.destroy();
                        return {
                            message: "Berhasil Untuk Menghapus Lembaga",
                            success: true
                        };
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response)];
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
exports.deleteLembagaById = deleteLembagaById;
var getTopLembagas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var number, response, err_5, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                number = req.params.number;
                return [4 /*yield*/, lembagaModels_1["default"].findAll({
                        limit: parseInt(number)
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
exports.getTopLembagas = getTopLembagas;
var updateLembagaById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, nama, deskripsi, filter, final_1, file_1, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, nama = _a.nama, deskripsi = _a.deskripsi;
                filter = JSON.parse(JSON.stringify({ nama: nama, deskripsi: deskripsi }));
                final_1 = {};
                file_1 = req.file;
                if (file_1) {
                    final_1 = __assign(__assign({}, filter), { foto: file_1.filename });
                }
                else {
                    final_1 = __assign({}, filter);
                }
                return [4 /*yield*/, lembagaModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    }).then(function (Lembaga) {
                        if (file_1) {
                            fs.unlink("./images/".concat(Lembaga.foto), function (err) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                            });
                        }
                        return Lembaga.update(__assign({}, final_1)).then(function (newProflies) {
                            var id = newProflies.id, deskripsi = newProflies.deskripsi, nama = newProflies.nama, foto = newProflies.foto;
                            return {
                                message: "Berhasil Untuk Mengupdate Lembaga",
                                success: true,
                                attributes: { id: id, nama: nama, deskripsi: deskripsi, foto: foto }
                            };
                        });
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
exports.updateLembagaById = updateLembagaById;
// export const getRatingByPartnerId = async (req: Request, res: Response) => {
//   try {
//     const { partner } = req.params;
//     const response = await Lembaga.findOne({
//       where: {
//         partner,
//       },
//       attributes: [
//         [Sequelize.fn("AVG", Sequelize.col("rating")), "rating"],
//         [Sequelize.fn("COUNT", Sequelize.col("id")), "banyak"],
//       ],
//     }).then((d: any) => {
//       const attr = d.dataValues;
//       return { ...attr, rating: Number(attr.rating).toFixed(1) };
//       // };
//     });
//     res.status(200).json(response);
//   } catch (err) {
//     let errMsg = "Gagal Untuk Melakukan Request Ini";
//     if (err instanceof Error) {
//       errMsg = err.message;
//     }
//     res.status(400).json({ message: errMsg });
//   }
// };
// export const getTopComments = async (req: Request, res: Response) => {
//   try {
//     const { number, partner } = req.params;
//     const response = await Lembaga.findAll({
//       where: {
//         partner: parseInt(partner),
//       },
//       order: [["input_at", "DESC"]],
//       limit: parseInt(number),
//     });
//     res.status(200).json(response);
//   } catch (err) {
//     let errMsg = "Gagal Untuk Melakukan Request Ini";
//     if (err instanceof Error) {
//       errMsg = err.message;
//     }
//     res.status(400).json({ message: errMsg });
//   }
// };
