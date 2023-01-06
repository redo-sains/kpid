import express, { Express, Request } from "express";
import multer from "multer";
import {
  deleteArticleAssetById,
  deleteArticleAssetByName,
  deleteArticleById,
  getArticleById,
  getArticles,
  getTopArticles,
  postArticle,
  postArticleAsset,
  updateArticle,
  updateArticleAssetById,
} from "../controllers/articleController";
import {
  deleteCommentById,
  getCommentByPartner,
  getComments,
  getRatingByPartnerId,
  getTopComments,
  postComment,
} from "../controllers/commentController";

import {
  deleteUmkmAssetById,
  deleteUmkmAssetByName,
  deleteUmkmById,
  getUmkmById,
  getUmkmExclusiveById,
  getUmkms,
  postUmkmAsset,
  postUmkmByCategory,
  updateUmkmById,
  getUmkmByCategory,
  getTopUmkms,
} from "../controllers/umkmController";
import {
  deletePengaduanById,
  deleteReplyPengaduanById,
  getPengaduanById,
  getPengaduans,
  postPengaduan,
  postPengaduanReply,
} from "../controllers/pengaduanController";
import {
  getLatarBelakang,
  getProfil,
  getProgramUnggulan,
  getStrukOrg,
  getVisiMisi,
  getWilayahKerja,
  updateLatarBelakang,
  updateProfilDetail,
  updateProgramUnggulan,
  updateStrukOrg,
  updateVisiMisi,
  updateWilayahKerja,
} from "../controllers/profilController";
import {
  deleteVideoById,
  getVideoById,
  getVideos,
  postVideo,
  updateVideo,
} from "../controllers/videoController";

import {
  deleteCommentArticleById,
  getCommentArticleById,
  getCommentsArticle,
  getRatingArticleById,
  getTopCommentsArticle,
  postCommentArticle,
} from "../controllers/commentArticleController";

import {
  getLembagas,
  getLembagaById,
  postLembaga,
  deleteLembagaById,
  updateLembagaById,
  getTopLembagas,
} from "../controllers/lembagaController";
import {
  deleteProfilesById,
  getProfiles,
  getProfilesById,
  getTopProfiles,
  postProfiles,
  updateProfilesById,
} from "../controllers/profilesController";
import {
  deleteLokerById,
  getLokerById,
  getLokers,
  getTopLokers,
  postLoker,
  getLokerByIdAdmin,
  updateLokerById,
} from "../controllers/lokerController";

var storage = multer.diskStorage({
  destination: "./images",
  filename: function (req: Request, file: Express.Multer.File, cb) {
    const name = file.originalname;
    const ext = name.split(".").slice(-1);
    const nameSave = name.split(".").slice(0, -1).join(".");
    cb(null, nameSave + "-" + Date.now() + "." + ext);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/umkm", getUmkms);
router.get("/umkm/exclusive", getUmkmExclusiveById);
router.get("/umkm/:id", getUmkmById);
router.get("/umkm/category/:category", getUmkmByCategory);
router.get("/umkm/top/:number", getTopUmkms);
router.post(
  "/umkm/:category",
  upload.fields([
    {
      name: "owner_image",
      maxCount: 1,
    },
    {
      name: "qr_code",
      maxCount: 1,
    },
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  postUmkmByCategory
);
// router.post("/umkm/tv", upload.single("logo"), postPartnerTv);
router.post("/umkm/:id/asset", upload.single("foto"), postUmkmAsset);
router.patch(
  "/umkm/:id",
  upload.fields([
    {
      name: "owner_image",
      maxCount: 1,
    },
    {
      name: "qr_code",
      maxCount: 1,
    },
  ]),
  updateUmkmById
);
router.delete("/umkm/:id", deleteUmkmById);
router.delete("/umkm/asset/:id", deleteUmkmAssetById);
router.delete("/umkm/asset/name/:name", deleteUmkmAssetByName);

//visi misi
router.get("/profil", getProfil);
router.get("/visiMisi", getVisiMisi);
router.get("/strukturOrganisasi", getStrukOrg);
router.get("/latarBelakang", getLatarBelakang);
router.get("/wilayahKerja", getWilayahKerja);
router.get("/programUnggulan", getProgramUnggulan);
router.patch("/visiMisi", upload.any(), updateVisiMisi);
router.patch("/latarBelakang", upload.any(), updateLatarBelakang);
router.patch("/wilayahKerja", upload.any(), updateWilayahKerja);
router.patch("/programUnggulan", upload.any(), updateProgramUnggulan);
router.patch("/updateProfilDetail", upload.any(), updateProfilDetail);
router.patch(
  "/strukturOrganisasi",
  upload.single("struktur_organisasi"),
  updateStrukOrg
);

// comment
router.get("/comment", getComments);
router.get("/comment/:umkm_id", getCommentByPartner);
router.get("/comment/top/:umkm_id/:number", getTopComments);
router.post("/comment/:umkm_id", upload.single("foto"), postComment);
router.get("/comment/:umkm_id/rating", getRatingByPartnerId);
router.delete("/comment/:id", deleteCommentById);

// commentArticle
router.get("/commentArticle", getCommentsArticle);
router.get("/commentArticle/:article", getCommentArticleById);
router.get("/commentArticle/top/:article/:number", getTopCommentsArticle);
router.post(
  "/commentArticle/:article",
  upload.single("foto"),
  postCommentArticle
);
router.get("/commentArticle/:article/rating", getRatingArticleById);
router.delete("/commentArticle/:id", deleteCommentArticleById);

// article
router.get("/article", getArticles);
router.get("/article/:id", getArticleById);
router.get("/article/top/:number", getTopArticles);
router.post("/article", upload.single("gambar"), postArticle);
router.post("/article/:id/asset", upload.single("foto"), postArticleAsset);
router.patch("/article/:id", upload.single("gambar"), updateArticle);
router.patch(
  "/article/asset/:id",
  upload.single("foto"),
  updateArticleAssetById
);
router.delete("/article/:id", deleteArticleById);
router.delete("/article/asset/:id", deleteArticleAssetById);
router.delete("/article/asset/name/:name", deleteArticleAssetByName);

// video
router.get("/video", getVideos);
router.get("/video/:id", getVideoById);
router.post("/video", upload.any(), postVideo);
router.patch("/video/:id", upload.any(), updateVideo);
router.delete("/video/:id", deleteVideoById);

// pengaduan
router.get("/pengaduan", getPengaduans);
router.get("/pengaduan/:id", getPengaduanById);
router.post("/pengaduan", upload.any(), postPengaduan);
router.post("/pengaduan/:id/reply", upload.any(), postPengaduanReply);
router.delete("/pengaduan/:id", deletePengaduanById);
router.delete("/pengaduan/reply/:id", deleteReplyPengaduanById);

// Lembaga
router.get("/lembaga", getLembagas);
router.get("/lembaga/:id", getLembagaById);
router.get("/lembaga/top/:number", getTopLembagas);
router.post("/lembaga", upload.single("foto"), postLembaga);
router.patch("/lembaga/:id", upload.single("foto"), updateLembagaById);
router.delete("/lembaga/:id", deleteLembagaById);

// profiles
router.get("/profiles", getProfiles);
router.get("/profiles/:id", getProfilesById);
router.get("/profiles/top/:number", getTopProfiles);
router.post("/profiles", upload.single("foto"), postProfiles);
router.patch("/profiles/:id", upload.single("foto"), updateProfilesById);
router.delete("/profiles/:id", deleteProfilesById);

// Loker
router.get("/lokers", getLokers);
router.get("/loker/:id", getLokerById);
router.get("/loker/admin/:admin_id", getLokerByIdAdmin);
router.get("/loker/top/:number", getTopLokers);
router.post("/loker", upload.single("image"), postLoker);
router.patch("/loker/:id", upload.single("image"), updateLokerById);
router.delete("/loker/:id", deleteLokerById);

export default router;
