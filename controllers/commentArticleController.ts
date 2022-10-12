import CommentArticle from "../models/commentArticleModels";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
const fs = require("fs");

export const getCommentsArticle = async (req: Request, res: Response) => {
  try {
    const response = await CommentArticle.findAll();
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getCommentArticleById = async (req: Request, res: Response) => {
  try {
    const { article } = req.params;
    const response = await CommentArticle.findAll({
      where: {
        article,
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

export const postCommentArticle = async (req: Request, res: Response) => {
  try {
    const { article } = req.params;
    const { nama, komen, rating } = req.body;

    const file = req.file as Express.Multer.File;
    const filter = JSON.parse(JSON.stringify({ nama, komen, rating, article }));
    let final = {};

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

    const response = await CommentArticle.create({
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

export const deleteCommentArticleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await CommentArticle.findOne({
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

export const getRatingArticleById = async (req: Request, res: Response) => {
  try {
    const { article } = req.params;

    const response = await CommentArticle.findOne({
      where: {
        article,
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

export const getTopCommentsArticle = async (req: Request, res: Response) => {
  try {
    const { number, article } = req.params;
    const response = await CommentArticle.findAll({
      where: {
        article: parseInt(article),
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
