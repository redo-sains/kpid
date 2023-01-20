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
exports.getStrukOrg = exports.updateStrukOrg = exports.updateProfilDetail = exports.updateProgramUnggulan = exports.updateWilayahKerja = exports.updateLatarBelakang = exports.updateVisiMisi = exports.getProgramUnggulan = exports.getWilayahKerja = exports.getLatarBelakang = exports.getVisiMisi = exports.getProfil = void 0;
var profilModels_1 = __importDefault(require("../models/profilModels"));
var fs = require("fs");
var getProfil = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                return [4 /*yield*/, profilModels_1["default"].findOne()];
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
exports.getProfil = getProfil;
var getVisiMisi = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                return [4 /*yield*/, profilModels_1["default"].findOne({ attributes: ["visi", "misi"] })];
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
exports.getVisiMisi = getVisiMisi;
var getLatarBelakang = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_3, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                return [4 /*yield*/, profilModels_1["default"].findOne({ attributes: ["latar_belakang"] })];
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
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getLatarBelakang = getLatarBelakang;
var getWilayahKerja = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_4, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                return [4 /*yield*/, profilModels_1["default"].findOne({ attributes: ["wilayah_kerja"] })];
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
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getWilayahKerja = getWilayahKerja;
var getProgramUnggulan = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_5, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                return [4 /*yield*/, profilModels_1["default"].findOne({ attributes: ["program_unggulan"] })];
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
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProgramUnggulan = getProgramUnggulan;
var updateVisiMisi = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, visi_1, misi_1, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                _a = req.body, visi_1 = _a.visi, misi_1 = _a.misi;
                return [4 /*yield*/, profilModels_1["default"].findAll().then(function (record) {
                        if (record) {
                            record[0].set({ visi: visi_1, misi: misi_1 });
                            record[0].save();
                        }
                        return {
                            success: true,
                            message: "Berhasil Mengupdate Visi Misi",
                            attributes: record[0]
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
exports.updateVisiMisi = updateVisiMisi;
var updateLatarBelakang = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var latar_belakang, filter_1, response, err_7, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                latar_belakang = req.body.latar_belakang;
                filter_1 = JSON.parse(JSON.stringify({
                    latar_belakang: latar_belakang
                }));
                return [4 /*yield*/, profilModels_1["default"].findOne().then(function (record) {
                        if (record) {
                            record.set(__assign({}, filter_1));
                            record.save();
                        }
                        return {
                            success: true,
                            message: "Berhasil Mengupdate Latar Belakang",
                            attributes: record
                        };
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_7 instanceof Error) {
                    errMsg = err_7.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateLatarBelakang = updateLatarBelakang;
var updateWilayahKerja = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var wilayah_kerja, filter_2, response, err_8, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                wilayah_kerja = req.body.wilayah_kerja;
                filter_2 = JSON.parse(JSON.stringify({
                    wilayah_kerja: wilayah_kerja
                }));
                return [4 /*yield*/, profilModels_1["default"].findOne().then(function (record) {
                        if (record) {
                            record.set(__assign({}, filter_2));
                            record.save();
                        }
                        return {
                            success: true,
                            message: "Berhasil Mengupdate Wilayah Kerja",
                            attributes: record
                        };
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_8 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_8 instanceof Error) {
                    errMsg = err_8.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateWilayahKerja = updateWilayahKerja;
var updateProgramUnggulan = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var program_unggulan, filter_3, response, err_9, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                program_unggulan = req.body.program_unggulan;
                filter_3 = JSON.parse(JSON.stringify({
                    program_unggulan: program_unggulan
                }));
                return [4 /*yield*/, profilModels_1["default"].findOne().then(function (record) {
                        if (record) {
                            record.set(__assign({}, filter_3));
                            record.save();
                        }
                        return {
                            success: true,
                            message: "Berhasil Mengupdate Program Unggulan",
                            attributes: record
                        };
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_9 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_9 instanceof Error) {
                    errMsg = err_9.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProgramUnggulan = updateProgramUnggulan;
var updateProfilDetail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, latar_belakang, wilayah_kerja, program_unggulan, filter_4, final, response, err_10, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, latar_belakang = _a.latar_belakang, wilayah_kerja = _a.wilayah_kerja, program_unggulan = _a.program_unggulan;
                filter_4 = JSON.parse(JSON.stringify({
                    latar_belakang: latar_belakang,
                    wilayah_kerja: wilayah_kerja,
                    program_unggulan: program_unggulan
                }));
                final = {};
                return [4 /*yield*/, profilModels_1["default"].findOne().then(function (Profil) {
                        return Profil.update(__assign({}, filter_4)).then(function (newProfils) {
                            var latar_belakang = newProfils.latar_belakang, wilayah_kerja = newProfils.wilayah_kerja, program_unggulan = newProfils.program_unggulan;
                            return {
                                message: "Berhasil Untuk Mengupdate Detail Profil",
                                success: true,
                                attributes: {
                                    latar_belakang: latar_belakang,
                                    wilayah_kerja: wilayah_kerja,
                                    program_unggulan: program_unggulan
                                }
                            };
                        });
                    })];
            case 1:
                response = _b.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_10 = _b.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_10 instanceof Error) {
                    errMsg = err_10.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProfilDetail = updateProfilDetail;
var updateStrukOrg = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var file_1, response, err_11, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                file_1 = req.file;
                return [4 /*yield*/, profilModels_1["default"].findAll().then(function (record) {
                        if (record) {
                            fs.unlink("./images/".concat(record[0].struktur_organisasi), function (err) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                            });
                            record[0].set({ struktur_organisasi: file_1.filename });
                            record[0].save();
                            return {
                                success: true,
                                message: "Berhasil Mengupdate Struktur Organisasi",
                                attributes: record[0]
                            };
                        }
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_11 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_11 instanceof Error) {
                    errMsg = err_11.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateStrukOrg = updateStrukOrg;
var getStrukOrg = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_12, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                profilModels_1["default"].removeAttribute("id");
                return [4 /*yield*/, profilModels_1["default"].findOne({
                        attributes: ["struktur_organisasi"]
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_12 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_12 instanceof Error) {
                    errMsg = err_12.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getStrukOrg = getStrukOrg;
