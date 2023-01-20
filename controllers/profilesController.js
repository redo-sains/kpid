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
exports.updateProfilesById = exports.getTopProfiles = exports.deleteProfilesById = exports.postProfiles = exports.getProfilesById = exports.getProfiles = void 0;
var profilesModels_1 = __importDefault(require("../models/profilesModels"));
var fs = require("fs");
var getProfiles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, profilesModels_1["default"].findAll()];
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
exports.getProfiles = getProfiles;
var getProfilesById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, profilesModels_1["default"].findAll({
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
exports.getProfilesById = getProfilesById;
var postProfiles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nama, jabatan, history_1, instagram, facebook, twitter, youtube, filter, final, file, response, err_3, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, nama = _a.nama, jabatan = _a.jabatan, history_1 = _a.history, instagram = _a.instagram, facebook = _a.facebook, twitter = _a.twitter, youtube = _a.youtube;
                filter = JSON.parse(JSON.stringify({
                    nama: nama,
                    jabatan: jabatan,
                    history: history_1,
                    instagram: instagram,
                    facebook: facebook,
                    twitter: twitter,
                    youtube: youtube
                }));
                final = {};
                file = req.file;
                if (file) {
                    final = __assign(__assign({}, filter), { foto: file.filename });
                }
                else {
                    final = __assign({}, filter);
                }
                return [4 /*yield*/, profilesModels_1["default"].create(__assign({}, final)).then(function (Lembaga) {
                        var id = Lembaga.id, history = Lembaga.history, jabatan = Lembaga.jabatan, foto = Lembaga.foto, nama = Lembaga.nama, instagram = Lembaga.instagram, facebook = Lembaga.facebook, twitter = Lembaga.twitter, youtube = Lembaga.youtube;
                        return {
                            message: "Berhasil Untuk Membuat Profile Anggota",
                            success: true,
                            attributes: {
                                id: id,
                                nama: nama,
                                history: history,
                                jabatan: jabatan,
                                foto: foto,
                                instagram: instagram,
                                facebook: facebook,
                                twitter: twitter,
                                youtube: youtube
                            }
                        };
                    })];
            case 1:
                response = _b.sent();
                return [2 /*return*/, res.status(200).json(response)];
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
exports.postProfiles = postProfiles;
var deleteProfilesById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_4, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, profilesModels_1["default"].findOne({
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
                        return Lembaga.destroy().then(function () {
                            return {
                                message: "Berhasil Untuk Menghapus Profile Anggota KPID",
                                success: true
                            };
                        });
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
exports.deleteProfilesById = deleteProfilesById;
var getTopProfiles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var number, response, err_5, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                number = req.params.number;
                return [4 /*yield*/, profilesModels_1["default"].findAll({
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
exports.getTopProfiles = getTopProfiles;
var updateProfilesById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, nama, jabatan, history_2, instagram, facebook, twitter, youtube, filter, final_1, file_1, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, nama = _a.nama, jabatan = _a.jabatan, history_2 = _a.history, instagram = _a.instagram, facebook = _a.facebook, twitter = _a.twitter, youtube = _a.youtube;
                filter = JSON.parse(JSON.stringify({
                    nama: nama,
                    jabatan: jabatan,
                    history: history_2,
                    instagram: instagram,
                    facebook: facebook,
                    twitter: twitter,
                    youtube: youtube
                }));
                final_1 = {};
                file_1 = req.file;
                if (file_1) {
                    final_1 = __assign(__assign({}, filter), { foto: file_1.filename });
                }
                else {
                    final_1 = __assign({}, filter);
                }
                return [4 /*yield*/, profilesModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    }).then(function (Profiles) {
                        if (file_1) {
                            fs.unlink("./images/".concat(Profiles.foto), function (err) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                            });
                        }
                        return Profiles.update(__assign({}, final_1)).then(function (newProflies) {
                            var id = newProflies.id, history = newProflies.history, nama = newProflies.nama, jabatan = newProflies.jabatan, foto = newProflies.foto, instagram = newProflies.instagram, facebook = newProflies.facebook, twitter = newProflies.twitter, youtube = newProflies.youtube;
                            return {
                                message: "Berhasil Untuk Mengupdate Profile Anggota",
                                success: true,
                                attributes: {
                                    id: id,
                                    history: history,
                                    nama: nama,
                                    jabatan: jabatan,
                                    foto: foto,
                                    instagram: instagram,
                                    facebook: facebook,
                                    twitter: twitter,
                                    youtube: youtube
                                }
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
exports.updateProfilesById = updateProfilesById;
