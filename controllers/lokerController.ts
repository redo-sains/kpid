import Admin from "../models/adminModels";
import Loker from "../models/lokerModels";
import { Request, Response, NextFunction } from "express";
import Umkm from "../models/umkmModels";

const fs = require("fs");

interface MulterRequest extends Request {
  file: any;
}

export const getLokers = async (req: Request, res: Response) => {
  try {
    const response = await Loker.findAll({ order: [["id", "DESC"]] });
    const values = await Promise.all(
      response.map(async (article) => {
        const umkm_id = await Admin.findOne({
          where: {
            id: article.admin_id,
          },
        }).then((admin) => admin.umkm_id);

        // console.log(umkm_id);

        const umkm_name = umkm_id
          ? await Umkm.findOne({ where: { id: umkm_id } }).then(
              (umkm) => umkm.nama
            )
          : "Admin";
        const { id, create_at, judul, image, description } = article;
        const value = {
          id,
          create_at,
          judul,
          image,
          source: umkm_name,
          description,
        };
        // console.log(article);

        // console.log(article);

        return {
          ...value,
        };
      })
    );

    const final = values;

    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getLokerById = async (req: Request, res: Response) => {
  try {
    const response = await Loker.findOne({
      where: {
        id: req.params.id,
      },
    });

    const umkm_id = await Admin.findOne({
      where: {
        id: response.admin_id,
      },
    }).then((admin) => admin.umkm_id);

    // console.log(umkm_id);

    const umkm_name = umkm_id
      ? await Umkm.findOne({ where: { id: umkm_id } }).then((umkm) => umkm.nama)
      : "Admin";
    const { id, create_at, judul, image, description, admin_id } = response;
    const final = {
      id,
      create_at,
      judul,
      image,
      source: umkm_name,
      description,
      admin_id,
    };

    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getLokerByIdAdmin = async (req: Request, res: Response) => {
  try {
    const response = await Loker.findAll({
      where: {
        admin_id: req.params.admin_id,
      },
    });

    const values = await Promise.all(
      response.map(async (article) => {
        const umkm_id = await Admin.findOne({
          where: {
            id: article.admin_id,
          },
        }).then((admin) => admin.umkm_id);

        // console.log(umkm_id);

        const umkm_name = umkm_id
          ? await Umkm.findOne({ where: { id: umkm_id } }).then(
              (umkm) => umkm.nama
            )
          : "Admin";
        const { id, create_at, judul, image, description } = article;
        const value = {
          id,
          create_at,
          judul,
          image,
          source: umkm_name,
          description,
        };

        return {
          ...value,
        };
      })
    );

    const final = values;

    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const postLoker = async (req: Request, res: Response) => {
  try {
    const image = req.file as Express.Multer.File;
    // const qr_code = req.files["qr_code"][0] as Express.Multer.File;

    const { judul = "", description = "", admin_id } = req.body;

    const filter = JSON.parse(
      JSON.stringify({
        judul,
        description,
        admin_id: parseInt(admin_id),
      })
    );

    let final = { ...filter };

    final = image
      ? {
          ...final,
          image: image.filename,
        }
      : {
          ...final,
        };

    const response = await Loker.create({
      ...final,
    }).then((d) => {
      return {
        success: true,
        message: `Loker Sukses Dibuat`,
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

export const deleteLokerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Loker.findOne({
      where: {
        id,
      },
    });

    response.image != "" &&
      fs.unlink(`./images/${response.image}`, (err: any) => {
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
          message: "Loker Berhasil Dihapus",
        };
      })
      .catch((err) => {
        return {
          success: false,
          message: "Loker gagal Dihapus",
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

export const updateLokerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const image = req.file as Express.Multer.File;
    // const qr_code = req.files["qr_code"][0] as Express.Multer.File;

    const { judul, description } = req.body;

    const filter = JSON.parse(
      JSON.stringify({
        judul,
        description,
      })
    );

    let final = { ...filter };

    final = image
      ? {
          ...final,
          image: image.filename,
        }
      : {
          ...final,
        };

    const response = await Loker.update(
      {
        ...final,
      },
      {
        where: { id },
      }
    ).then((d) => {
      return {
        success: true,
        message: "Loker Sukses Update",
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
      message: "Loker Gagal Update",
      detail: errMsg,
    });
  }
};

export const getTopLokers = async (req: Request, res: Response) => {
  try {
    const { number } = req.params;
    const response = await Loker.findAll({
      limit: parseInt(number),
      order: [["id", "DESC"]],
    });

    const values = await Promise.all(
      response.map(async (article) => {
        const umkm_id = await Admin.findOne({
          where: {
            id: article.admin_id,
          },
        }).then((admin) => admin.umkm_id);

        // console.log(umkm_id);

        const umkm_name = umkm_id
          ? await Umkm.findOne({ where: { id: umkm_id } }).then(
              (umkm) => umkm.nama
            )
          : "Admin";
        const { id, create_at, judul, image, description } = article;
        const value = {
          id,
          create_at,
          judul,
          image,
          source: umkm_name,
          description,
        };
        // console.log(article);

        // console.log(article);

        return {
          ...value,
        };
      })
    );

    const final = values;
    res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};
