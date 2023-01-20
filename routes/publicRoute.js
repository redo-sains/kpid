"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var articleController_1 = require("../controllers/articleController");
var commentController_1 = require("../controllers/commentController");
var partnerController_1 = require("../controllers/partnerController");
var pengaduanController_1 = require("../controllers/pengaduanController");
var profilController_1 = require("../controllers/profilController");
var videoController_1 = require("../controllers/videoController");
var commentArticleController_1 = require("../controllers/commentArticleController");
var lembagaController_1 = require("../controllers/lembagaController");
var profilesController_1 = require("../controllers/profilesController");
var storage = multer_1["default"].diskStorage({
    destination: "./images",
    filename: function (req, file, cb) {
        var name = file.originalname;
        var ext = name.split(".").slice(-1);
        var nameSave = name.split(".").slice(0, -1).join(".");
        cb(null, nameSave + "-" + Date.now() + "." + ext);
    }
});
var upload = (0, multer_1["default"])({ storage: storage });
var router = express_1["default"].Router();
router.get("/partner", partnerController_1.getPartners);
router.get("/partner/exclusive", partnerController_1.getPartnerExclusiveById);
router.get("/partner/:id", partnerController_1.getPartnerById);
router.get("/partner/type/tv", partnerController_1.getPartnerTv);
router.get("/partner/type/radio", partnerController_1.getPartnerRadio);
router.post("/partner/radio", upload.single("logo"), partnerController_1.postPartnerRadio);
router.post("/partner/tv", upload.single("logo"), partnerController_1.postPartnerTv);
router.post("/partner/:id/asset", upload.single("foto"), partnerController_1.postPartnerAsset);
router.patch("/partner/:id", upload.single("logo"), partnerController_1.updatePartnerById);
router["delete"]("/partner/:id", partnerController_1.deletePartnerById);
router["delete"]("/partner/asset/:id", partnerController_1.deletePartnerAssetById);
router["delete"]("/partner/asset/name/:name", partnerController_1.deletePartnerAssetByName);
//visi misi
router.get("/profil", profilController_1.getProfil);
router.get("/visiMisi", profilController_1.getVisiMisi);
router.get("/strukturOrganisasi", profilController_1.getStrukOrg);
router.get("/latarBelakang", profilController_1.getLatarBelakang);
router.get("/wilayahKerja", profilController_1.getWilayahKerja);
router.get("/programUnggulan", profilController_1.getProgramUnggulan);
router.patch("/visiMisi", upload.any(), profilController_1.updateVisiMisi);
router.patch("/latarBelakang", upload.any(), profilController_1.updateLatarBelakang);
router.patch("/wilayahKerja", upload.any(), profilController_1.updateWilayahKerja);
router.patch("/programUnggulan", upload.any(), profilController_1.updateProgramUnggulan);
router.patch("/updateProfilDetail", upload.any(), profilController_1.updateProfilDetail);
router.patch("/strukturOrganisasi", upload.single("struktur_organisasi"), profilController_1.updateStrukOrg);
// comment
router.get("/comment", commentController_1.getComments);
router.get("/comment/:partner", commentController_1.getCommentByPartner);
router.get("/comment/top/:partner/:number", commentController_1.getTopComments);
router.post("/comment/:partner", upload.single("foto"), commentController_1.postComment);
router.get("/comment/:partner/rating", commentController_1.getRatingByPartnerId);
router["delete"]("/comment/:id", commentController_1.deleteCommentById);
// commentArticle
router.get("/commentArticle", commentArticleController_1.getCommentsArticle);
router.get("/commentArticle/:article", commentArticleController_1.getCommentArticleById);
router.get("/commentArticle/top/:article/:number", commentArticleController_1.getTopCommentsArticle);
router.post("/commentArticle/:article", upload.single("foto"), commentArticleController_1.postCommentArticle);
router.get("/commentArticle/:article/rating", commentArticleController_1.getRatingArticleById);
router["delete"]("/commentArticle/:id", commentArticleController_1.deleteCommentArticleById);
// article
router.get("/article", articleController_1.getArticles);
router.get("/article/:id", articleController_1.getArticleById);
router.get("/article/top/:number", articleController_1.getTopArticles);
router.post("/article", upload.single("gambar"), articleController_1.postArticle);
router.post("/article/:id/asset", upload.single("foto"), articleController_1.postArticleAsset);
router.patch("/article/:id", upload.single("gambar"), articleController_1.updateArticle);
router.patch("/article/asset/:id", upload.single("foto"), articleController_1.updateArticleAssetById);
router["delete"]("/article/:id", articleController_1.deleteArticleById);
router["delete"]("/article/asset/:id", articleController_1.deleteArticleAssetById);
router["delete"]("/article/asset/name/:name", articleController_1.deleteArticleAssetByName);
// video
router.get("/video", videoController_1.getVideos);
router.get("/video/:id", videoController_1.getVideoById);
router.post("/video", upload.any(), videoController_1.postVideo);
router.patch("/video/:id", upload.any(), videoController_1.updateVideo);
router["delete"]("/video/:id", videoController_1.deleteVideoById);
// pengaduan
router.get("/pengaduan", pengaduanController_1.getPengaduans);
router.get("/pengaduan/:id", pengaduanController_1.getPengaduanById);
router.post("/pengaduan", upload.any(), pengaduanController_1.postPengaduan);
router.post("/pengaduan/:id/reply", upload.any(), pengaduanController_1.postPengaduanReply);
router["delete"]("/pengaduan/:id", pengaduanController_1.deletePengaduanById);
router["delete"]("/pengaduan/reply/:id", pengaduanController_1.deleteReplyPengaduanById);
// Lembaga
router.get("/lembaga", lembagaController_1.getLembagas);
router.get("/lembaga/:id", lembagaController_1.getLembagaById);
router.get("/lembaga/top/:number", lembagaController_1.getTopLembagas);
router.post("/lembaga", upload.single("foto"), lembagaController_1.postLembaga);
router.patch("/lembaga/:id", upload.single("foto"), lembagaController_1.updateLembagaById);
router["delete"]("/lembaga/:id", lembagaController_1.deleteLembagaById);
// profiles
router.get("/profiles", profilesController_1.getProfiles);
router.get("/profiles/:id", profilesController_1.getProfilesById);
router.get("/profiles/top/:number", profilesController_1.getTopProfiles);
router.post("/profiles", upload.single("foto"), profilesController_1.postProfiles);
router.patch("/profiles/:id", upload.single("foto"), profilesController_1.updateProfilesById);
router["delete"]("/profiles/:id", profilesController_1.deleteProfilesById);
exports["default"] = router;
