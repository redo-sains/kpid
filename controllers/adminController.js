"use strict";
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
exports.deleteAdminById = exports.changeAdminPass = exports.authAdmin = exports.postAdminPartner = exports.postAdmin = exports.getAdminById = exports.getAdminsPartner = exports.getAdmins = void 0;
var adminModels_1 = __importDefault(require("../models/adminModels"));
var partnerModels_1 = __importDefault(require("../models/partnerModels"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var getAdmins = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, adminModels_1["default"].findAll()];
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
exports.getAdmins = getAdmins;
var getAdminsPartner = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, partners_1, result, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, adminModels_1["default"].findAll({
                        where: { type: "partner" }
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, partnerModels_1["default"].findAll()];
            case 2:
                partners_1 = _a.sent();
                result = response.map(function (d) {
                    var id = d.id, username = d.username, password = d.password, type = d.type, partner = d.partner;
                    var _a = partners_1.find(function (a) { return a.id == d.partner; }), id_partner = _a.id, type_partner = _a.type, nama = _a.nama, channel = _a.channel, deskripsi = _a.deskripsi, alamat = _a.alamat, instagram = _a.instagram, facebook = _a.facebook, youtube = _a.youtube, google_maps = _a.google_maps, logo = _a.logo;
                    return {
                        id: id,
                        username: username,
                        password: password,
                        type: type,
                        partner: partner,
                        detail_partner: {
                            id: id_partner,
                            type: type_partner,
                            nama: nama,
                            channel: channel,
                            deskripsi: deskripsi,
                            alamat: alamat,
                            instagram: instagram,
                            facebook: facebook,
                            youtube: youtube,
                            google_maps: google_maps,
                            logo: logo
                        }
                    };
                });
                res.status(200).json(result);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_2 instanceof Error) {
                    errMsg = err_2.message;
                }
                console.log(errMsg);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAdminsPartner = getAdminsPartner;
var getAdminById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_3, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, adminModels_1["default"].findOne({
                        where: {
                            id: req.params.id
                        }
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
                console.log(errMsg);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAdminById = getAdminById;
var postAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var type, _a, username, password, response, err_4, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                type = req.params.type;
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, adminModels_1["default"].create({
                        username: username,
                        password: password,
                        type: "admin"
                    }).then(function () {
                        return {
                            success: true,
                            message: "Admin Akun Berhasil Di Buat"
                        };
                    })];
            case 1:
                response = _b.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _b.sent();
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
exports.postAdmin = postAdmin;
var postAdminPartner = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, username, password, response, err_5, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, adminModels_1["default"].create({
                        username: username,
                        password: password,
                        type: "partner",
                        partner: parseInt(id)
                    }).then(function () {
                        return {
                            success: true,
                            message: "Partner Admin Akun Berhasil Di Buat"
                        };
                    })];
            case 1:
                response = _b.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _b.sent();
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
exports.postAdminPartner = postAdminPartner;
var authAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username_1, password_1, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username_1 = _a.username, password_1 = _a.password;
                return [4 /*yield*/, adminModels_1["default"].findOne({
                        where: {
                            username: username_1
                        }
                    }).then(function (d) {
                        return d
                            ? {
                                attribute: {
                                    username: d.username,
                                    type: d.type,
                                    id: d.id,
                                    partner: d.partner
                                },
                                auth: bcryptjs_1["default"].compareSync(password_1, d.password),
                                message: bcryptjs_1["default"].compareSync(password_1, d.password)
                                    ? "Login Sukses"
                                    : "Login Gagal, Silahkan Masukan Password Dengan Benar!!"
                            }
                            : {
                                attribute: { username: username_1 },
                                auth: false,
                                message: "Username Yang Dimasukan Salah!!!"
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
exports.authAdmin = authAdmin;
var changeAdminPass = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, newPassword_1, oldPassword_1, id, response, err_7, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, newPassword_1 = _a.newPassword, oldPassword_1 = _a.oldPassword;
                id = req.params.id;
                return [4 /*yield*/, adminModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    }).then(function (record) {
                        return bcryptjs_1["default"].compare(oldPassword_1, record.password).then(function (d) {
                            if (d) {
                                return bcryptjs_1["default"]
                                    .hash(newPassword_1, 10)
                                    .then(function (hash) {
                                    record.set({ password: hash });
                                    record.save();
                                    return {
                                        success: true,
                                        message: "Ganti Password Admin Sukses"
                                    };
                                })["catch"](function (err) {
                                    throw new Error();
                                });
                            }
                            return {
                                success: false,
                                message: "Password Lama Yang Dimasukan Salah!!!"
                            };
                        });
                    })];
            case 1:
                response = _b.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_7 = _b.sent();
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
exports.changeAdminPass = changeAdminPass;
var deleteAdminById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, destroy, err_8, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, adminModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response
                        .destroy()
                        .then(function (d) {
                        return {
                            success: true,
                            message: "Admin Berhasil Dihapus"
                        };
                    })["catch"](function (err) {
                        return {
                            success: false,
                            message: "Admin gagal Dihapus",
                            detail: err
                        };
                    })];
            case 2:
                destroy = _a.sent();
                res.status(200).json(destroy);
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_8 instanceof Error) {
                    errMsg = err_8.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteAdminById = deleteAdminById;
