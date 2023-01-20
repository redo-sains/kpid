import Partner from "../models/partnerModels";
import { Request, Response, NextFunction } from "express";

const fs = require("fs");

interface MulterRequest extends Request {
  file: any;
}

import { Multer } from "multer";
import PartnerAssetsModel from "../models/partnerAssetsModels";
import Admin from "../models/adminModels";

export const getPartners = async (req: Request, res: Response) => {
  try {
    const response = await Partner.findAll();
    const values = response.map((partner) => {
      const {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
      } = partner;
      const value = {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
      };
      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return PartnerAssetsModel.findAll({ where: { partner: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              obj.logo,
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

export const getPartnerExclusiveById = async (req: Request, res: Response) => {
  try {
    const response = await Partner.findAll();
    const admin = await Admin.findAll({ attributes: ["partner"] });

    const response1 = admin.map((d) => d.partner);

    const values = response.map((partner) => {
      const {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
      } = partner;
      const value = {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
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

export const getPartnerById = async (req: Request, res: Response) => {
  try {
    const response = await Partner.findOne({
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
      youtube,
      google_maps,
      logo,
      stream,
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
      youtube,
      google_maps,
      logo,
      stream,
    };

    const final = await PartnerAssetsModel.findAll({
      where: { partner: response.id },
    }).then((asset) => {
      return {
        ...value,
        assets: [
          value.logo,
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

export const getPartnerTv = async (req: Request, res: Response) => {
  try {
    const response = await Partner.findAll({
      where: {
        type: "tv",
      },
    });
    const values = response.map((partner) => {
      const {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
      } = partner;
      const value = {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
      };
      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return PartnerAssetsModel.findAll({ where: { partner: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              obj.logo,
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
export const getPartnerRadio = async (req: Request, res: Response) => {
  try {
    const response = await Partner.findAll({
      where: {
        type: "radio",
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
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
      } = article;
      const value = {
        id,
        type,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
        logo,
        stream,
      };
      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return PartnerAssetsModel.findAll({ where: { partner: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              obj.logo,
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

export const postPartnerRadio = async (req: Request, res: Response) => {
  try {
    const file = req.file as Express.Multer.File;
    const {
      nama = "",
      channel = "",
      deskripsi = "",
      alamat = "",
      instagram = "",
      facebook = "",
      youtube = "",
      google_maps = "",
      stream = "",
    } = req.body;

    const response = await Partner.create({
      type: "radio",
      nama,
      channel,
      deskripsi,
      alamat,
      instagram,
      facebook,
      youtube,
      google_maps,
      logo: file.filename,
      stream,
    }).then((d) => {
      return {
        success: true,
        message: "Partner Radio Sukses Dibuat",
      };
    });
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const postPartnerTv = async (req: Request, res: Response) => {
  try {
    const file = req.file as Express.Multer.File;
    const {
      nama = "",
      channel = "",
      deskripsi = "",
      alamat = "",
      instagram = "",
      facebook = "",
      youtube = "",
      google_maps = "",
      stream = "",
    } = req.body;

    const response = await Partner.create({
      type: "tv",
      nama,
      channel,
      deskripsi,
      alamat,
      instagram,
      facebook,
      youtube,
      google_maps,
      logo: file.filename,
      stream,
    }).then((d) => {
      return {
        success: true,
        message: "Partner Tv Sukses Dibuat",
      };
    });
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const postPartnerAsset = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const file = req.file as Express.Multer.File;

    if (
      (await PartnerAssetsModel.count({ where: { partner: parseInt(id) } })) > 8
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Maksimal Foto Sudah Penuh" });
    }

    const response = await PartnerAssetsModel.create({
      partner: parseInt(id),
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

export const deletePartnerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Partner.findOne({
      where: {
        id,
      },
    });

    const assetDelete = await PartnerAssetsModel.findAll({
      where: { partner: response.id },
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

    const destroy = await response
      .destroy()
      .then((d) => {
        response.logo != "" &&
          fs.unlink(`./images/${response.logo}`, (err: any) => {
            if (err) {
              console.error(err);
              return;
            }
          });
        return {
          success: true,
          message: "Partner Berhasil Dihapus",
        };
      })
      .catch((err) => {
        return {
          success: false,
          message: "Partner gagal Dihapus",
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

export const updatePartnerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      nama,
      channel,
      deskripsi,
      alamat,
      instagram,
      facebook,
      youtube,
      google_maps,
      stream,
    } = req.body;
    let logo;

    if (req.file) {
      const file = req.file as Express.Multer.File;
      logo = file.filename;
    } else {
      logo = undefined;
    }

    // let logo = file.filename ? file.filename : undefined;

    const update = {
      nama,
      channel,
      deskripsi,
      alamat,
      instagram,
      facebook,
      youtube,
      google_maps,
      logo,
      stream,
    };
    const final = JSON.parse(JSON.stringify(update));

    const response = await Partner.update(
      {
        ...final,
      },
      {
        where: { id },
      }
    ).then((d) => {
      return {
        success: true,
        message: "Partner Sukses Update",
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
      message: "Partner Gagal Update",
      detail: errMsg,
    });
  }
};

export const deletePartnerAssetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await PartnerAssetsModel.findOne({
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

export const deletePartnerAssetByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const response = await PartnerAssetsModel.findOne({
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
