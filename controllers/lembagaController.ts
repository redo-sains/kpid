import Lembaga from "../models/lembagaModels";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
const fs = require("fs");

export const getLembagas = async (req: Request, res: Response) => {
  try {
    const response = await Lembaga.findAll();
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getLembagaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await Lembaga.findOne({
      where: {
        id,
      },
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

export const postLembaga = async (req: Request, res: Response) => {
  try {
    const { nama, deskripsi } = req.body;
    const filter = JSON.parse(JSON.stringify({ nama, deskripsi }));
    let final = {};

    const file = req.file as Express.Multer.File;

    if (file) {
      final = {
        ...filter,
        foto: file.filename,
      };
    } else {
      final = {
        ...filter,
      };
    }

    const response = await Lembaga.create({
      ...final,
    }).then((Lembaga) => {
      const { id, deskripsi, foto, nama } = Lembaga;
      return {
        message: "Berhasil Untuk Mengupdate Lembaga",
        success: true,
        attributes: { id, nama, deskripsi, foto },
      };
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

export const deleteLembagaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Lembaga.findOne({
      where: {
        id,
      },
    }).then((Lembaga) => {
      if (Lembaga.foto) {
        fs.unlink(`./images/${Lembaga.foto}`, (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
      Lembaga.destroy();
      return {
        message: "Berhasil Untuk Menghapus Lembaga",
        success: true,
      };
    });
    return res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getTopLembagas = async (req: Request, res: Response) => {
  try {
    const { number } = req.params;
    const response = await Lembaga.findAll({
      limit: parseInt(number),
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

export const updateLembagaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { nama, deskripsi } = req.body;
    const filter = JSON.parse(JSON.stringify({ nama, deskripsi }));
    let final = {};

    const file = req.file as Express.Multer.File;

    if (file) {
      final = {
        ...filter,
        foto: file.filename,
      };
    } else {
      final = {
        ...filter,
      };
    }

    const response = await Lembaga.findOne({
      where: {
        id,
      },
    }).then((Lembaga) => {
      if (file) {
        fs.unlink(`./images/${Lembaga.foto}`, (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
      return Lembaga.update({ ...final }).then((newProflies) => {
        const { id, deskripsi, nama, foto } = newProflies;
        return {
          message: "Berhasil Untuk Mengupdate Lembaga",
          success: true,
          attributes: { id, nama, deskripsi, foto },
        };
      });
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

// export const getRatingByPartnerId = async (req: Request, res: Response) => {
//   try {
//     const { partner } = req.params;

//     const response = await Lembaga.findOne({
//       where: {
//         partner,
//       },
//       attributes: [
//         [Sequelize.fn("AVG", Sequelize.col("rating")), "rating"],
//         [Sequelize.fn("COUNT", Sequelize.col("id")), "banyak"],
//       ],
//     }).then((d: any) => {
//       const attr = d.dataValues;
//       return { ...attr, rating: Number(attr.rating).toFixed(1) };

//       // };
//     });
//     res.status(200).json(response);
//   } catch (err) {
//     let errMsg = "Gagal Untuk Melakukan Request Ini";
//     if (err instanceof Error) {
//       errMsg = err.message;
//     }
//     res.status(400).json({ message: errMsg });
//   }
// };

// export const getTopComments = async (req: Request, res: Response) => {
//   try {
//     const { number, partner } = req.params;
//     const response = await Lembaga.findAll({
//       where: {
//         partner: parseInt(partner),
//       },
//       order: [["input_at", "DESC"]],
//       limit: parseInt(number),
//     });
//     res.status(200).json(response);
//   } catch (err) {
//     let errMsg = "Gagal Untuk Melakukan Request Ini";
//     if (err instanceof Error) {
//       errMsg = err.message;
//     }
//     res.status(400).json({ message: errMsg });
//   }
// };
