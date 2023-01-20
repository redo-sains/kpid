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
exports.deleteArticleAssetByName = exports.deleteArticleAssetById = exports.deleteArticleById = exports.updateArticleAssetById = exports.updateArticle = exports.getTopArticles = exports.postArticleAsset = exports.postArticle = exports.getArticleById = exports.getArticles = void 0;
var articleModels_1 = __importDefault(require("../models/articleModels"));
var articleAssetsModels_1 = __importDefault(require("../models/articleAssetsModels"));
var fs = require("fs");
var getArticles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, values, promises, final, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, articleModels_1["default"].findAll()];
            case 1:
                response = _a.sent();
                values = response.map(function (article) {
                    var id = article.id, judul = article.judul, deskripsi = article.deskripsi, gambar = article.gambar, input_at = article.input_at;
                    var value = {
                        id: id,
                        judul: judul,
                        deskripsi: deskripsi,
                        gambar: gambar,
                        input_at: input_at
                    };
                    return __assign({}, value);
                });
                return [4 /*yield*/, values.map(function (obj) {
                        return articleAssetsModels_1["default"].findAll({ where: { article: obj.id } }).then(function (results) {
                            return __assign(__assign({}, obj), { assets: __spreadArray([
                                    obj.gambar && obj.gambar
                                ], results.map(function (assets) {
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
                return [2 /*return*/, res.status(200).json(final)];
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
exports.getArticles = getArticles;
var getArticleById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, id, judul, deskripsi, gambar_1, input_at, value_1, final, err_2, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, articleModels_1["default"].findOne({
                        where: {
                            id: req.params.id
                        }
                    })];
            case 1:
                response = _a.sent();
                id = response.id, judul = response.judul, deskripsi = response.deskripsi, gambar_1 = response.gambar, input_at = response.input_at;
                value_1 = { id: id, judul: judul, deskripsi: deskripsi, gambar: gambar_1, input_at: input_at };
                return [4 /*yield*/, articleAssetsModels_1["default"].findAll({
                        where: { article: response.id }
                    }).then(function (asset) {
                        return __assign(__assign({}, value_1), { assets: __spreadArray([
                                gambar_1 && gambar_1
                            ], asset.map(function (assets) {
                                return assets.foto;
                            }), true), detail_assets: asset });
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
exports.getArticleById = getArticleById;
var postArticle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, judul, deskripsi, file, filter, final, response, err_3, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, judul = _a.judul, deskripsi = _a.deskripsi;
                file = req.file;
                filter = JSON.parse(JSON.stringify({ judul: judul, deskripsi: deskripsi }));
                final = {};
                if (file) {
                    final = __assign(__assign({}, filter), { gambar: file.filename });
                }
                else {
                    final = __assign({}, filter);
                }
                return [4 /*yield*/, articleModels_1["default"].create(__assign({}, final)).then(function (d) {
                        return {
                            success: true,
                            message: "Article Berhasil di Buat",
                            attribute: d
                        };
                    })];
            case 1:
                response = _b.sent();
                res.status(200).json({ test: response });
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
exports.postArticle = postArticle;
var postArticleAsset = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, file, response, err_4, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                file = req.file;
                return [4 /*yield*/, articleAssetsModels_1["default"].count({ where: { article: parseInt(id) } })];
            case 1:
                if ((_a.sent()) > 8) {
                    return [2 /*return*/, res
                            .status(200)
                            .json({ success: false, message: "Maksimal Foto Sudah Penuh" })];
                }
                return [4 /*yield*/, articleAssetsModels_1["default"].create({
                        article: parseInt(id),
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
                err_4 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_4 instanceof Error) {
                    errMsg = err_4.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.postArticleAsset = postArticleAsset;
var getTopArticles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var number, response, values, promises, final, err_5, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                number = req.params.number;
                return [4 /*yield*/, articleModels_1["default"].findAll({
                        order: [["input_at", "DESC"]],
                        limit: parseInt(number)
                    })];
            case 1:
                response = _a.sent();
                values = response.map(function (article) {
                    var id = article.id, judul = article.judul, deskripsi = article.deskripsi, gambar = article.gambar, input_at = article.input_at;
                    var value = {
                        id: id,
                        judul: judul,
                        deskripsi: deskripsi,
                        gambar: gambar,
                        input_at: input_at
                    };
                    return __assign({}, value);
                });
                return [4 /*yield*/, values.map(function (obj) {
                        return articleAssetsModels_1["default"].findAll({ where: { article: obj.id } }).then(function (results) {
                            return __assign(__assign({}, obj), { assets: __spreadArray([
                                    obj.gambar && obj.gambar
                                ], results.map(function (assets) {
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
                err_5 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_5 instanceof Error) {
                    errMsg = err_5.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getTopArticles = getTopArticles;
var updateArticle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, judul, deskripsi, id, file, update, filter, final_1, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, judul = _a.judul, deskripsi = _a.deskripsi;
                id = req.params.id;
                file = req.file;
                update = { judul: judul, deskripsi: deskripsi };
                filter = JSON.parse(JSON.stringify(update));
                final_1 = {};
                if (file) {
                    final_1 = __assign(__assign({}, filter), { gambar: file.filename });
                }
                else {
                    final_1 = __assign({}, filter);
                }
                return [4 /*yield*/, articleModels_1["default"].update(__assign({}, final_1), {
                        where: {
                            id: id
                        }
                    })
                        .then(function (article) { return ({
                        success: true,
                        message: "Article Berhasil di Edit",
                        attribute: final_1
                    }); })["catch"](function (err) { return ({
                        success: false,
                        message: "Article Gagal di Edit",
                        attribute: final_1,
                        detail: err
                    }); })];
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
exports.updateArticle = updateArticle;
var updateArticleAssetById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, file_1, response, err_7, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                file_1 = req.file;
                return [4 /*yield*/, articleAssetsModels_1["default"].findOne({
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
                            .update({ foto: file_1.filename })
                            .then(function (asset) { return ({
                            success: true,
                            message: "Foto Berhasil Di Update",
                            attributes: asset
                        }); })["catch"](function (err) { return ({
                            success: false,
                            message: "Foto Gagal Di Update",
                            detail: err
                        }); });
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
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateArticleAssetById = updateArticleAssetById;
var deleteArticleById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, assetDelete, destroy, err_8, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                return [4 /*yield*/, articleModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, articleAssetsModels_1["default"].findAll({
                        where: { article: response.id }
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
                assetDelete = _a.sent();
                return [4 /*yield*/, response
                        .destroy()
                        .then(function () {
                        return {
                            success: true,
                            message: "Article Berhasil Dihapus"
                        };
                    })["catch"](function (err) {
                        return {
                            success: false,
                            message: "Article gagal Dihapus",
                            detail: err
                        };
                    })];
            case 3:
                destroy = _a.sent();
                res.status(200).json(destroy);
                return [3 /*break*/, 5];
            case 4:
                err_8 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_8 instanceof Error) {
                    errMsg = err_8.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteArticleById = deleteArticleById;
var deleteArticleAssetById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, err_9, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, articleAssetsModels_1["default"].findOne({
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
exports.deleteArticleAssetById = deleteArticleAssetById;
var deleteArticleAssetByName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name_1, response, err_10, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name_1 = req.params.name;
                return [4 /*yield*/, articleAssetsModels_1["default"].findOne({
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
exports.deleteArticleAssetByName = deleteArticleAssetByName;
