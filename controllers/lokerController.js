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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getTopLokers = exports.updateLokerById = exports.deleteLokerById = exports.postLoker = exports.getLokerByIdAdmin = exports.getLokerById = exports.getLokers = void 0;
var adminModels_1 = __importDefault(require("../models/adminModels"));
var lokerModels_1 = __importDefault(require("../models/lokerModels"));
var umkmModels_1 = __importDefault(require("../models/umkmModels"));
var fs = require("fs");
var getLokers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, values, final, err_1, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, lokerModels_1["default"].findAll({ order: [["id", "DESC"]] })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, Promise.all(response.map(function (article) { return __awaiter(void 0, void 0, void 0, function () {
                        var umkm_id, umkm_name, _a, id, create_at, judul, image, description, value;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, adminModels_1["default"].findOne({
                                        where: {
                                            id: article.admin_id
                                        }
                                    }).then(function (admin) { return admin.umkm_id; })];
                                case 1:
                                    umkm_id = _b.sent();
                                    if (!umkm_id) return [3 /*break*/, 3];
                                    return [4 /*yield*/, umkmModels_1["default"].findOne({ where: { id: umkm_id } }).then(function (umkm) { return umkm.nama; })];
                                case 2:
                                    _a = _b.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    _a = "Admin";
                                    _b.label = 4;
                                case 4:
                                    umkm_name = _a;
                                    id = article.id, create_at = article.create_at, judul = article.judul, image = article.image, description = article.description;
                                    value = {
                                        id: id,
                                        create_at: create_at,
                                        judul: judul,
                                        image: image,
                                        source: umkm_name,
                                        description: description
                                    };
                                    // console.log(article);
                                    // console.log(article);
                                    return [2 /*return*/, __assign({}, value)];
                            }
                        });
                    }); }))];
            case 2:
                values = _a.sent();
                final = values;
                res.status(200).json(final);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_1 instanceof Error) {
                    errMsg = err_1.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getLokers = getLokers;
var getLokerById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, umkm_id, umkm_name, _a, id, create_at, judul, image, description, admin_id, final, err_2, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4 /*yield*/, lokerModels_1["default"].findOne({
                        where: {
                            id: req.params.id
                        }
                    })];
            case 1:
                response = _b.sent();
                return [4 /*yield*/, adminModels_1["default"].findOne({
                        where: {
                            id: response.admin_id
                        }
                    }).then(function (admin) { return admin.umkm_id; })];
            case 2:
                umkm_id = _b.sent();
                if (!umkm_id) return [3 /*break*/, 4];
                return [4 /*yield*/, umkmModels_1["default"].findOne({ where: { id: umkm_id } }).then(function (umkm) { return umkm.nama; })];
            case 3:
                _a = _b.sent();
                return [3 /*break*/, 5];
            case 4:
                _a = "Admin";
                _b.label = 5;
            case 5:
                umkm_name = _a;
                id = response.id, create_at = response.create_at, judul = response.judul, image = response.image, description = response.description, admin_id = response.admin_id;
                final = {
                    id: id,
                    create_at: create_at,
                    judul: judul,
                    image: image,
                    source: umkm_name,
                    description: description,
                    admin_id: admin_id
                };
                res.status(200).json(final);
                return [3 /*break*/, 7];
            case 6:
                err_2 = _b.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_2 instanceof Error) {
                    errMsg = err_2.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getLokerById = getLokerById;
var getLokerByIdAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, values, final, err_3, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, lokerModels_1["default"].findAll({
                        where: {
                            admin_id: req.params.admin_id
                        }
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, Promise.all(response.map(function (article) { return __awaiter(void 0, void 0, void 0, function () {
                        var umkm_id, umkm_name, _a, id, create_at, judul, image, description, value;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, adminModels_1["default"].findOne({
                                        where: {
                                            id: article.admin_id
                                        }
                                    }).then(function (admin) { return admin.umkm_id; })];
                                case 1:
                                    umkm_id = _b.sent();
                                    if (!umkm_id) return [3 /*break*/, 3];
                                    return [4 /*yield*/, umkmModels_1["default"].findOne({ where: { id: umkm_id } }).then(function (umkm) { return umkm.nama; })];
                                case 2:
                                    _a = _b.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    _a = "Admin";
                                    _b.label = 4;
                                case 4:
                                    umkm_name = _a;
                                    id = article.id, create_at = article.create_at, judul = article.judul, image = article.image, description = article.description;
                                    value = {
                                        id: id,
                                        create_at: create_at,
                                        judul: judul,
                                        image: image,
                                        source: umkm_name,
                                        description: description
                                    };
                                    return [2 /*return*/, __assign({}, value)];
                            }
                        });
                    }); }))];
            case 2:
                values = _a.sent();
                final = values;
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
exports.getLokerByIdAdmin = getLokerByIdAdmin;
var postLoker = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var image, _a, _b, judul, _c, description, admin_id, filter, final, response, err_4, errMsg;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                image = req.file;
                _a = req.body, _b = _a.judul, judul = _b === void 0 ? "" : _b, _c = _a.description, description = _c === void 0 ? "" : _c, admin_id = _a.admin_id;
                filter = JSON.parse(JSON.stringify({
                    judul: judul,
                    description: description,
                    admin_id: parseInt(admin_id)
                }));
                final = __assign({}, filter);
                final = image
                    ? __assign(__assign({}, final), { image: image.filename }) : __assign({}, final);
                return [4 /*yield*/, lokerModels_1["default"].create(__assign({}, final)).then(function (d) {
                        return {
                            success: true,
                            message: "Loker Sukses Dibuat"
                        };
                    })];
            case 1:
                response = _d.sent();
                res.status(200).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _d.sent();
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
exports.postLoker = postLoker;
var deleteLokerById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, destroy, err_5, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, lokerModels_1["default"].findOne({
                        where: {
                            id: id
                        }
                    })];
            case 1:
                response = _a.sent();
                response.image != "" &&
                    fs.unlink("./images/".concat(response.image), function (err) {
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
                            message: "Loker Berhasil Dihapus"
                        };
                    })["catch"](function (err) {
                        return {
                            success: false,
                            message: "Loker gagal Dihapus",
                            detail: err
                        };
                    })];
            case 2:
                destroy = _a.sent();
                res.status(200).json(destroy);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_5 instanceof Error) {
                    errMsg = err_5.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteLokerById = deleteLokerById;
var updateLokerById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, image, _a, judul, description, filter, final, response, err_6, errMsg;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                image = req.file;
                _a = req.body, judul = _a.judul, description = _a.description;
                filter = JSON.parse(JSON.stringify({
                    judul: judul,
                    description: description
                }));
                final = __assign({}, filter);
                final = image
                    ? __assign(__assign({}, final), { image: image.filename }) : __assign({}, final);
                return [4 /*yield*/, lokerModels_1["default"].update(__assign({}, final), {
                        where: { id: id }
                    }).then(function (d) {
                        return {
                            success: true,
                            message: "Loker Sukses Update"
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
                res.status(200).json({
                    success: false,
                    message: "Loker Gagal Update",
                    detail: errMsg
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateLokerById = updateLokerById;
var getTopLokers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var number, response, values, final, err_7, errMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                number = req.params.number;
                return [4 /*yield*/, lokerModels_1["default"].findAll({
                        limit: parseInt(number),
                        order: [["id", "DESC"]]
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, Promise.all(response.map(function (article) { return __awaiter(void 0, void 0, void 0, function () {
                        var umkm_id, umkm_name, _a, id, create_at, judul, image, description, value;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, adminModels_1["default"].findOne({
                                        where: {
                                            id: article.admin_id
                                        }
                                    }).then(function (admin) { return admin.umkm_id; })];
                                case 1:
                                    umkm_id = _b.sent();
                                    if (!umkm_id) return [3 /*break*/, 3];
                                    return [4 /*yield*/, umkmModels_1["default"].findOne({ where: { id: umkm_id } }).then(function (umkm) { return umkm.nama; })];
                                case 2:
                                    _a = _b.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    _a = "Admin";
                                    _b.label = 4;
                                case 4:
                                    umkm_name = _a;
                                    id = article.id, create_at = article.create_at, judul = article.judul, image = article.image, description = article.description;
                                    value = {
                                        id: id,
                                        create_at: create_at,
                                        judul: judul,
                                        image: image,
                                        source: umkm_name,
                                        description: description
                                    };
                                    // console.log(article);
                                    // console.log(article);
                                    return [2 /*return*/, __assign({}, value)];
                            }
                        });
                    }); }))];
            case 2:
                values = _a.sent();
                final = values;
                res.status(200).json(final);
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                errMsg = "Gagal Untuk Melakukan Request Ini";
                if (err_7 instanceof Error) {
                    errMsg = err_7.message;
                }
                res.status(400).json({ message: errMsg });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTopLokers = getTopLokers;
