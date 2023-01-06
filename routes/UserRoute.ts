import Express from "express";

import {
  authAdmin,
  changeAdminPass,
  getAdminById,
  getAdminsUmkm,
  getAdmins,
  postAdmin,
  postAdminUmkm,
  deleteAdminById,
} from "../controllers/adminController";

const router = Express.Router();

import multer from "multer";

const upload = multer();

router.get("/admin", getAdmins);
router.get("/admin/partner", getAdminsUmkm);
router.get("/admin/:id", getAdminById);
router.post("/admin/", upload.any(), postAdmin);
router.post("/admin/partner/:id", upload.any(), postAdminUmkm);
router.post("/admin/auth", upload.any(), authAdmin);
router.delete("/admin/:id", deleteAdminById);
router.patch("/admin/:id", upload.any(), changeAdminPass);
router.use("/images", Express.static("images"));

export default router;
