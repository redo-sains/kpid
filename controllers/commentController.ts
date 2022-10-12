import Comment from "../models/commentModels";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
const fs = require("fs");

export const getComments = async (req: Request, res: Response) => {
  try {
    const response = await Comment.findAll();
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getCommentByPartner = async (req: Request, res: Response) => {
  try {
    const { partner } = req.params;
    const response = await Comment.findAll({
      where: {
        partner,
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

export const postComment = async (req: Request, res: Response) => {
  try {
    const { partner } = req.params;
    const { nama, komen, rating } = req.body;
    const filter = JSON.parse(JSON.stringify({ nama, komen, rating, partner }));
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

    const response = await Comment.create({
      ...final,
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

export const deleteCommentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Comment.findOne({
      where: {
        id,
      },
    }).then((Comment: any) => {
      if (Comment.foto) {
        fs.unlink(`./images/${Comment.foto}`, (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
      Comment.destroy();
      return {
        message: "Berhasil Untuk Menghapus Comment",
        success: true,
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

export const getRatingByPartnerId = async (req: Request, res: Response) => {
  try {
    const { partner } = req.params;

    const response = await Comment.findOne({
      where: {
        partner,
      },
      attributes: [
        [Sequelize.fn("AVG", Sequelize.col("rating")), "rating"],
        [Sequelize.fn("COUNT", Sequelize.col("id")), "banyak"],
      ],
    }).then((d: any) => {
      const attr = d.dataValues;
      return { ...attr, rating: Number(attr.rating).toFixed(1) };

      // };
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

export const getTopComments = async (req: Request, res: Response) => {
  try {
    const { number, partner } = req.params;
    const response = await Comment.findAll({
      where: {
        partner: parseInt(partner),
      },
      order: [["input_at", "DESC"]],
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
