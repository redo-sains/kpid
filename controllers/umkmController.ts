import Umkm from "../models/umkmModels";
import { Request, Response, NextFunction } from "express";

const fs = require("fs");

interface MulterRequest extends Request {
  file: any;
}

import { Multer } from "multer";
import UmkmAssetsModel from "../models/umkmAssetsModels";
import Admin from "../models/adminModels";

export const getUmkms = async (req: Request, res: Response) => {
  try {
    const response = await Umkm.findAll();
    const values = response.map((article) => {
      const {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        twitter,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      } = article;
      const value = {
        id,
        type,
        nama,
        channel,
        twitter,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      };

      // console.log(article);

      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return UmkmAssetsModel.findAll({ where: { umkm_id: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              ...results.map((assets) => {
                return assets.foto;
              }),
            ],
            detail_assets: results,
          };
        }
      );
    });

    const final = await Promise.all(promises).then(function (results) {
      return results;
    });

    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getUmkmExclusiveById = async (req: Request, res: Response) => {
  try {
    const response = await Umkm.findAll();
    const admin = await Admin.findAll({ attributes: ["admin"] });

    const response1 = admin.map((d) => d.umkm_id);

    const values = response.map((article) => {
      const {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        twitter,
        instagram,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      } = article;
      const value = {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        twitter,
        instagram,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      };

      if (id != response1.indexOf(id))
        return {
          ...value,
        };
    });

    const filtered = values.filter((value) => value != null);

    res.status(200).json(filtered);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getUmkmById = async (req: Request, res: Response) => {
  try {
    const response = await Umkm.findOne({
      where: {
        id: req.params.id,
      },
    });
    const {
      id,
      type,
      nama,
      channel,
      deskripsi,
      alamat,
      instagram,
      facebook,
      twitter,
      youtube,
      google_maps,
      owner_image,
      owner_name,
      qr_code,
    } = response;
    const value = {
      id,
      type,
      nama,
      channel,
      deskripsi,
      alamat,
      instagram,
      facebook,
      twitter,
      youtube,
      google_maps,
      owner_image,
      owner_name,
      qr_code,
    };

    const final = await UmkmAssetsModel.findAll({
      where: { umkm_id: response.id },
    }).then((asset) => {
      return {
        ...value,
        assets: [
          ...asset.map((assets) => {
            return assets.foto;
          }),
        ],
        detail_assets: asset,
      };
    });

    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getUmkmByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;

    const response = await Umkm.findAll({
      where: {
        type: `${category}`,
      },
    });

    const values = response.map((article) => {
      const {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        twitter,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      } = article;
      const value = {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        twitter,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      };
      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return UmkmAssetsModel.findAll({ where: { umkm_id: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              ...results.map((assets) => {
                return assets.foto;
              }),
            ],
            detail_assets: results,
          };
        }
      );
    });

    const final = await Promise.all(promises).then(function (results) {
      return results;
    });

    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const postUmkmByCategory = async (req: Request, res: Response) => {
  try {
    const owner_image = req?.files?.["owner_image"]
      ? (req?.files?.["owner_image"][0] as Express.Multer.File)
      : undefined;
    const qr_code = req?.files?.["qr_code"]
      ? (req?.files?.["qr_code"][0] as Express.Multer.File)
      : undefined;
    const image = req?.files?.["image"]
      ? (req?.files?.["image"][0] as Express.Multer.File)
      : undefined;
    // const image = req.files["image"][0] as Express.Multer.File;

    // console.log(owner_image);
    const { category } = req.params;
    const {
      nama = "",
      channel = "",
      deskripsi = "",
      alamat = "",
      instagram = "",
      facebook = "",
      youtube = "",
      google_maps = "",
      owner_name = "",
      twitter = "",
    } = req.body;

    const filter = JSON.parse(
      JSON.stringify({
        type: category,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        owner_name,
        twitter,
      })
    );

    let final = { ...filter };

    final = owner_image
      ? {
          ...final,
          owner_image: owner_image.filename,
        }
      : {
          ...final,
        };

    final = qr_code
      ? {
          ...final,
          qr_code: qr_code.filename,
        }
      : {
          ...final,
        };

    const response = await Umkm.create({
      ...final,
    }).then((d) => {
      UmkmAssetsModel.create({
        umkm_id: d.id,
        foto: image.filename,
      })

        .then((d) => ({
          success: true,
          message: "Foto Berhasil di Tambah",
          attribute: d,
        }))
        .catch((err) => ({
          success: false,
          message: "Foto Gagal Di Tambah",
          detail: err,
        }));

      return {
        success: true,
        message: `Umkm Category ${category} Sukses Dibuat`,
      };
    });

    res.status(200).json({ true: "yes" });
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const postUmkmAsset = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const file = req.file as Express.Multer.File;

    if (
      (await UmkmAssetsModel.count({ where: { umkm_id: parseInt(id) } })) > 8
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Maksimal Foto Sudah Penuh" });
    }

    const response = await UmkmAssetsModel.create({
      umkm_id: parseInt(id),
      foto: file.filename,
    })
      .then((d) => ({
        success: true,
        message: "Foto Berhasil di Tambah",
        attribute: d,
      }))
      .catch((err) => ({
        success: false,
        message: "Foto Gagal Di Tambah",
        detail: err,
      }));

    return res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const deleteUmkmById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Umkm.findOne({
      where: {
        id,
      },
    });

    await UmkmAssetsModel.findAll({
      where: { umkm_id: response.id },
    }).then((assets) => {
      assets.map((asset) => {
        asset.foto != "" &&
          fs.unlink(`./images/${asset.foto}`, (err: any) => {
            if (err) {
              console.error(err);
              return;
            }
          });

        asset.destroy();
      });
    });

    response.owner_image != "" &&
      fs.unlink(`./images/${response.owner_image}`, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
      });

    response.qr_code != "" &&
      fs.unlink(`./images/${response.qr_code}`, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
      });

    const destroy = await response
      .destroy()
      .then((d) => {
        return {
          success: true,
          message: "Umkm Berhasil Dihapus",
        };
      })
      .catch((err) => {
        return {
          success: false,
          message: "Umkm gagal Dihapus",
          detail: err,
        };
      });

    res.status(200).json(destroy);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const updateUmkmById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const owner_image = req?.files?.["owner_image"]
      ? (req?.files?.["owner_image"][0] as Express.Multer.File)
      : undefined;
    const qr_code = req?.files?.["qr_code"]
      ? (req?.files?.["qr_code"][0] as Express.Multer.File)
      : undefined;

    const {
      nama,
      channel,
      deskripsi,
      alamat,
      instagram,
      facebook,
      youtube,
      google_maps,
      owner_name,
      twitter,
    } = req.body;

    const filter = JSON.parse(
      JSON.stringify({
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        owner_name,
        twitter,
      })
    );

    let final = { ...filter };

    final = owner_image
      ? {
          ...final,
          owner_image: owner_image.filename,
        }
      : {
          ...final,
        };

    final = qr_code
      ? {
          ...final,
          qr_code: qr_code.filename,
        }
      : {
          ...final,
        };

    const response = await Umkm.update(
      {
        ...final,
      },
      {
        where: { id },
      }
    ).then((d) => {
      return {
        success: true,
        message: "umkm Sukses Update",
      };
    });
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(200).json({
      success: false,
      message: "Umkm Gagal Update",
      detail: errMsg,
    });
  }
};

export const deleteUmkmAssetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await UmkmAssetsModel.findOne({
      where: {
        id,
      },
    }).then((asset) => {
      fs.unlink(`./images/${asset.foto}`, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      return asset
        .destroy()
        .then((asset) => ({
          success: true,
          message: "Foto Berhasil Di Hapus",
          attributes: asset,
        }))
        .catch((err) => ({
          success: false,
          message: "Foto Gagal Di Hapus",
          detail: err,
        }));
    });

    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const deleteUmkmAssetByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const response = await UmkmAssetsModel.findOne({
      where: {
        foto: name,
      },
    }).then((asset) => {
      fs.unlink(`./images/${asset.foto}`, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      return asset
        .destroy()
        .then((asset) => ({
          success: true,
          message: "Foto Berhasil Di Hapus",
          attributes: asset,
        }))
        .catch((err) => ({
          success: false,
          message: "Foto Gagal Di Hapus",
          detail: err,
        }));
    });

    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getTopUmkms = async (req: Request, res: Response) => {
  try {
    const { number } = req.params;
    const response = await Umkm.findAll({
      limit: parseInt(number),
    });

    const values = response.map((article) => {
      const {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        twitter,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      } = article;
      const value = {
        id,
        type,
        nama,
        channel,
        twitter,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        owner_image,
        owner_name,
        qr_code,
      };

      // console.log(article);

      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return UmkmAssetsModel.findAll({ where: { umkm_id: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              ...results.map((assets) => {
                return assets.foto;
              }),
            ],
            detail_assets: results,
          };
        }
      );
    });

    const final = await Promise.all(promises).then(function (results) {
      return results;
    });

    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};
