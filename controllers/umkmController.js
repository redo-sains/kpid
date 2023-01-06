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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getTopUmkms = exports.deleteUmkmAssetByName = exports.deleteUmkmAssetById = exports.updateUmkmById = exports.deleteUmkmById = exports.postUmkmAsset = exports.postUmkmByCategory = exports.getUmkmByCategory = exports.getUmkmById = exports.getUmkmExclusiveById = exports.getUmkms = void 0;
var umkmModels_1 = __importDefault(require("../models/umkmModels"));
var fs = require("fs");
var umkmAssetsModels_1 = __importDefault(require("../models/umkmAssetsModels"));
var adminModels_1 = __importDefault(require("../models/adminModels"));
var getUmkms = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, values, promises, final, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, umkmModels_1["default"].findAll()];
            case 1:
                response = _a.sent();
                values = response.map(function (article) {
                    var id = article.id, type = article.type, nama = article.nama, channel = article.channel, deskripsi = article.deskripsi, alamat = article.alamat, instagram = article.instagram, twitter = article.twitter, facebook = article.facebook, youtube = article.youtube, google_maps = article.google_maps, owner_image = article.owner_image, owner_name = article.owner_name, qr_code = article.qr_code;
                    var value = {
                        id: id,
                        type: type,
                        nama: nama,
                        channel: channel,
                        twitter: twitter,
                        deskripsi: deskripsi,
                        alamat: alamat,
                        instagram: instagram,
                        facebook: facebook,
                        youtube: youtube,
                        google_maps: google_maps,
                        owner_image: owner_image,
                        owner_name: owner_name,
                        qr_code: qr_code
                    };
                    // console.log(article);
                    return __assign({}, value);
                });
                return [4 /*yield*/, values.map(function (obj) {
                        return umkmAssetsModels_1["default"].findAll({ where: { umkm_id: obj.id } }).then(function (results) {
                            return __assign(__assign({}, obj), { assets: __spreadArray([], results.map(function (assets) {
                                    return assets.foto;
                                }), true), detail_assets: results });
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
exports.getUmkms = getUmkms;
var getUmkmExclusiveById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, admin, response1_1, values, filtered, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, umkmModels_1["default"].findAll()];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, adminModels_1["default"].findAll({ attributes: ["admin"] })];
            case 2:
                admin = _a.sent();
                response1_1 = admin.map(function (d) { return d.umkm_id; });
                values = response.map(function (article) {
                    var id = article.id, type = article.type, nama = article.nama, channel = article.channel, deskripsi = article.deskripsi, alamat = article.alamat, twitter = article.twitter, instagram = article.instagram, facebook = article.facebook, youtube = article.youtube, google_maps = article.google_maps, owner_image = article.owner_image, owner_name = article.owner_name, qr_code = article.qr_code;
                    var value = {
                        id: id,
                        type: type,
                        nama: nama,
                        channel: channel,
                        deskripsi: deskripsi,
                        alamat: alamat,
                        twitter: twitter,
                        instagram: instagram,
                        facebook: facebook,
                        youtube: youtube,
                        google_maps: google_maps,
                        owner_image: owner_image,
                        owner_name: owner_name,
                        qr_code: qr_code
                    };
                    if (id != response1_1.indexOf(id))
                        return __assign({}, value);
                });
                filtered = values.filter(function (value) { return value != null; });
                res.status(200).json(filtered);
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
exports.getUmkmExclusiveById = getUmkmExclusiveById;
var getUmkmById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, id, type, nama, channel, deskripsi, alamat, instagram, facebook, twitter, youtube, google_maps, owner_image, owner_name, qr_code, value_1, final, err_3, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, umkmModels_1["default"].findOne({
                        where: {
                            id: req.params.id
                        }
                    })];
            case 1:
                response = _a.sent();
                id = response.id, type = response.type, nama = response.nama, channel = response.channel, deskripsi = response.deskripsi, alamat = response.alamat, instagram = response.instagram, facebook = response.facebook, twitter = response.twitter, youtube = response.youtube, google_maps = response.google_maps, owner_image = response.owner_image, owner_name = response.owner_name, qr_code = response.qr_code;
                value_1 = {
                    id: id,
                    type: type,
                    nama: nama,
                    channel: channel,
                    deskripsi: deskripsi,
                    alamat: alamat,
                    instagram: instagram,
                    facebook: facebook,
                    twitter: twitter,
                    youtube: youtube,
                    google_maps: google_maps,
                    owner_image: owner_image,
                    owner_name: owner_name,
                    qr_code: qr_code
                };
                return [4 /*yield*/, umkmAssetsModels_1["default"].findAll({
                        where: { umkm_id: response.id }
                    }).then(function (asset) {
                        return __assign(__assign({}, value_1), { assets: __spreadArray([], asset.map(function (assets) {
                                return assets.foto;
                            }), true), detail_assets: asset });
                    })];
            case 2:
                final = _a.sent();
                res.status(200).json(final);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_3 instanceof Error) {
                    errMsg = err_3.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUmkmById = getUmkmById;
var getUmkmByCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var category, response, values, promises, final, err_4, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                category = req.params.category;
                return [4 /*yield*/, umkmModels_1["default"].findAll({
                        where: {
                            type: "".concat(category)
                        }
                    })];
            case 1:
                response = _a.sent();
                values = response.map(function (article) {
                    var id = article.id, type = article.type, nama = article.nama, channel = article.channel, deskripsi = article.deskripsi, alamat = article.alamat, instagram = article.instagram, twitter = article.twitter, facebook = article.facebook, youtube = article.youtube, google_maps = article.google_maps, owner_image = article.owner_image, owner_name = article.owner_name, qr_code = article.qr_code;
                    var value = {
                        id: id,
                        type: type,
                        nama: nama,
                        channel: channel,
                        deskripsi: deskripsi,
                        alamat: alamat,
                        instagram: instagram,
                        twitter: twitter,
                        facebook: facebook,
                        youtube: youtube,
                        google_maps: google_maps,
                        owner_image: owner_image,
                        owner_name: owner_name,
                        qr_code: qr_code
                    };
                    return __assign({}, value);
                });
                return [4 /*yield*/, values.map(function (obj) {
                        return umkmAssetsModels_1["default"].findAll({ where: { umkm_id: obj.id } }).then(function (results) {
                            return __assign(__assign({}, obj), { assets: __spreadArray([], results.map(function (assets) {
                                    return assets.foto;
                                }), true), detail_assets: results });
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
                err_4 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_4 instanceof Error) {
                    errMsg = err_4.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getUmkmByCategory = getUmkmByCategory;
var postUmkmByCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var owner_image, qr_code, image_1, category_1, _a, _b, nama, _c, channel, _d, deskripsi, _e, alamat, _f, instagram, _g, facebook, _h, youtube, _j, google_maps, _k, owner_name, _l, twitter, filter, final, response, err_5, errMsg;
    var _m, _o, _p, _q, _r, _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _t.trys.push([0, 2, , 3]);
                owner_image = ((_m = req === null || req === void 0 ? void 0 : req.files) === null || _m === void 0 ? void 0 : _m["owner_image"])
                    ? (_o = req === null || req === void 0 ? void 0 : req.files) === null || _o === void 0 ? void 0 : _o["owner_image"][0]
                    : undefined;
                qr_code = ((_p = req === null || req === void 0 ? void 0 : req.files) === null || _p === void 0 ? void 0 : _p["qr_code"])
                    ? (_q = req === null || req === void 0 ? void 0 : req.files) === null || _q === void 0 ? void 0 : _q["qr_code"][0]
                    : undefined;
                image_1 = ((_r = req === null || req === void 0 ? void 0 : req.files) === null || _r === void 0 ? void 0 : _r["image"])
                    ? (_s = req === null || req === void 0 ? void 0 : req.files) === null || _s === void 0 ? void 0 : _s["image"][0]
                    : undefined;
                category_1 = req.params.category;
                _a = req.body, _b = _a.nama, nama = _b === void 0 ? "" : _b, _c = _a.channel, channel = _c === void 0 ? "" : _c, _d = _a.deskripsi, deskripsi = _d === void 0 ? "" : _d, _e = _a.alamat, alamat = _e === void 0 ? "" : _e, _f = _a.instagram, instagram = _f === void 0 ? "" : _f, _g = _a.facebook, facebook = _g === void 0 ? "" : _g, _h = _a.youtube, youtube = _h === void 0 ? "" : _h, _j = _a.google_maps, google_maps = _j === void 0 ? "" : _j, _k = _a.owner_name, owner_name = _k === void 0 ? "" : _k, _l = _a.twitter, twitter = _l === void 0 ? "" : _l;
                filter = JSON.parse(JSON.stringify({
                    type: category_1,
                    nama: nama,
                    channel: channel,
                    deskripsi: deskripsi,
                    alamat: alamat,
                    instagram: instagram,
                    facebook: facebook,
                    youtube: youtube,
                    google_maps: google_maps,
                    owner_name: owner_name,
                    twitter: twitter
                }));
                final = __assign({}, filter);
                final = owner_image
                    ? __assign(__assign({}, final), { owner_image: owner_image.filename }) : __assign({}, final);
                final = qr_code
                    ? __assign(__assign({}, final), { qr_code: qr_code.filename }) : __assign({}, final);
                return [4 /*yield*/, umkmModels_1["default"].create(__assign({}, final)).then(function (d) {
                        umkmAssetsModels_1["default"].create({
                            umkm_id: d.id,
                            foto: image_1.filename
                        })
                            .then(function (d) { return ({
                            success: true,
                            message: "Foto Berhasil di Tambah",
                            attribute: d
                        }); })["catch"](function (err) { return ({
                            success: false,
                            message: "Foto Gagal Di Tambah",
                            detail: err
                        }); });
                        return {
                            success: true,
                            message: "Umkm Category ".concat(category_1, " Sukses Dibuat")
                        };
                    })];
            case 1:
                response = _t.sent();
                res.status(200).json({ "true": "yes" });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _t.sent();
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
exports.postUmkmByCategory = postUmkmByCategory;
var postUmkmAsset = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, file, response, err_6, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                file = req.file;
                return [4 /*yield*/, umkmAssetsModels_1["default"].count({ where: { umkm_id: parseInt(id) } })];
            case 1:
                if ((_a.sent()) > 8) {
                    return [2 /*return*/, res
                            .status(200)
                            .json({ success: false, message: "Maksimal Foto Sudah Penuh" })];
                }
                return [4 /*yield*/, umkmAssetsModels_1["default"].create({
                        umkm_id: parseInt(id),
                        foto: file.filename
                    })
                        .then(function (d) { return ({
                        success: true,
                        message: "Foto Berhasil di Tambah",
                        attribute: d
                    }); })["catch"](function (err) { return ({
                        success: false,
                        message: "Foto Gagal Di Tambah",
                        detail: err
                    }); })];
            case 2:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response)];
            case 3:
                err_6 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_6 instanceof Error) {
                    errMsg = err_6.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.postUmkmAsset = postUmkmAsset;
var deleteUmkmById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, destroy, err_7, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                return [4 /*yield*/, umkmModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, umkmAssetsModels_1["default"].findAll({
                        where: { umkm_id: response.id }
                    }).then(function (assets) {
                        assets.map(function (asset) {
                            asset.foto != "" &&
                                fs.unlink("./images/".concat(asset.foto), function (err) {
                                    if (err) {
                                        console.error(err);
                                        return;
                                    }
                                });
                            asset.destroy();
                        });
                    })];
            case 2:
                _a.sent();
                response.owner_image != "" &&
                    fs.unlink("./images/".concat(response.owner_image), function (err) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                    });
                response.qr_code != "" &&
                    fs.unlink("./images/".concat(response.qr_code), function (err) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                    });
                return [4 /*yield*/, response
                        .destroy()
                        .then(function (d) {
                        return {
                            success: true,
                            message: "Umkm Berhasil Dihapus"
                        };
                    })["catch"](function (err) {
                        return {
                            success: false,
                            message: "Umkm gagal Dihapus",
                            detail: err
                        };
                    })];
            case 3:
                destroy = _a.sent();
                res.status(200).json(destroy);
                return [3 /*break*/, 5];
            case 4:
                err_7 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_7 instanceof Error) {
                    errMsg = err_7.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteUmkmById = deleteUmkmById;
var updateUmkmById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, owner_image, qr_code, _a, nama, channel, deskripsi, alamat, instagram, facebook, youtube, google_maps, owner_name, twitter, filter, final, response, err_8, errMsg;
    var _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 2, , 3]);
                id = req.params.id;
                owner_image = ((_b = req === null || req === void 0 ? void 0 : req.files) === null || _b === void 0 ? void 0 : _b["owner_image"])
                    ? (_c = req === null || req === void 0 ? void 0 : req.files) === null || _c === void 0 ? void 0 : _c["owner_image"][0]
                    : undefined;
                qr_code = ((_d = req === null || req === void 0 ? void 0 : req.files) === null || _d === void 0 ? void 0 : _d["qr_code"])
                    ? (_e = req === null || req === void 0 ? void 0 : req.files) === null || _e === void 0 ? void 0 : _e["qr_code"][0]
                    : undefined;
                _a = req.body, nama = _a.nama, channel = _a.channel, deskripsi = _a.deskripsi, alamat = _a.alamat, instagram = _a.instagram, facebook = _a.facebook, youtube = _a.youtube, google_maps = _a.google_maps, owner_name = _a.owner_name, twitter = _a.twitter;
                filter = JSON.parse(JSON.stringify({
                    nama: nama,
                    channel: channel,
                    deskripsi: deskripsi,
                    alamat: alamat,
                    instagram: instagram,
                    facebook: facebook,
                    youtube: youtube,
                    google_maps: google_maps,
                    owner_name: owner_name,
                    twitter: twitter
                }));
                final = __assign({}, filter);
                final = owner_image
                    ? __assign(__assign({}, final), { owner_image: owner_image.filename }) : __assign({}, final);
                final = qr_code
                    ? __assign(__assign({}, final), { qr_code: qr_code.filename }) : __assign({}, final);
                return [4 /*yield*/, umkmModels_1["default"].update(__assign({}, final), {
                        where: { id: id }
                    }).then(function (d) {
                        return {
                            success: true,
                            message: "umkm Sukses Update"
                        };
                    })];
            case 1:
                response = _f.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_8 = _f.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_8 instanceof Error) {
                    errMsg = err_8.message;
                }
                res.status(200).json({
                    success: false,
                    message: "Umkm Gagal Update",
                    detail: errMsg
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUmkmById = updateUmkmById;
var deleteUmkmAssetById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_9, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, umkmAssetsModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    }).then(function (asset) {
                        fs.unlink("./images/".concat(asset.foto), function (err) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        });
                        return asset
                            .destroy()
                            .then(function (asset) { return ({
                            success: true,
                            message: "Foto Berhasil Di Hapus",
                            attributes: asset
                        }); })["catch"](function (err) { return ({
                            success: false,
                            message: "Foto Gagal Di Hapus",
                            detail: err
                        }); });
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
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUmkmAssetById = deleteUmkmAssetById;
var deleteUmkmAssetByName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name_1, response, err_10, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name_1 = req.params.name;
                return [4 /*yield*/, umkmAssetsModels_1["default"].findOne({
                        where: {
                            foto: name_1
                        }
                    }).then(function (asset) {
                        fs.unlink("./images/".concat(asset.foto), function (err) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        });
                        return asset
                            .destroy()
                            .then(function (asset) { return ({
                            success: true,
                            message: "Foto Berhasil Di Hapus",
                            attributes: asset
                        }); })["catch"](function (err) { return ({
                            success: false,
                            message: "Foto Gagal Di Hapus",
                            detail: err
                        }); });
                    })];
            case 1:
                response = _a.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_10 = _a.sent();
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
exports.deleteUmkmAssetByName = deleteUmkmAssetByName;
var getTopUmkms = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var number, response, values, promises, final, err_11, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                number = req.params.number;
                return [4 /*yield*/, umkmModels_1["default"].findAll({
                        limit: parseInt(number)
                    })];
            case 1:
                response = _a.sent();
                values = response.map(function (article) {
                    var id = article.id, type = article.type, nama = article.nama, channel = article.channel, deskripsi = article.deskripsi, alamat = article.alamat, instagram = article.instagram, twitter = article.twitter, facebook = article.facebook, youtube = article.youtube, google_maps = article.google_maps, owner_image = article.owner_image, owner_name = article.owner_name, qr_code = article.qr_code;
                    var value = {
                        id: id,
                        type: type,
                        nama: nama,
                        channel: channel,
                        twitter: twitter,
                        deskripsi: deskripsi,
                        alamat: alamat,
                        instagram: instagram,
                        facebook: facebook,
                        youtube: youtube,
                        google_maps: google_maps,
                        owner_image: owner_image,
                        owner_name: owner_name,
                        qr_code: qr_code
                    };
                    // console.log(article);
                    return __assign({}, value);
                });
                return [4 /*yield*/, values.map(function (obj) {
                        return umkmAssetsModels_1["default"].findAll({ where: { umkm_id: obj.id } }).then(function (results) {
                            return __assign(__assign({}, obj), { assets: __spreadArray([], results.map(function (assets) {
                                    return assets.foto;
                                }), true), detail_assets: results });
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
                err_11 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_11 instanceof Error) {
                    errMsg = err_11.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getTopUmkms = getTopUmkms;
