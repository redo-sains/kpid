import Article from "../models/articleModels";
import { Request, Response, NextFunction } from "express";
import ArticleAssetsModel from "../models/articleAssetsModels";
import sequelize from "sequelize";
const fs = require("fs");

export const getArticles = async (req: Request, res: Response) => {
  try {
    const response = await Article.findAll();
    const values = response.map((article) => {
      const { id, judul, deskripsi, gambar, input_at } = article;
      const value = {
        id,
        judul,
        deskripsi,
        gambar,
        input_at,
      };
      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return ArticleAssetsModel.findAll({ where: { article: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              obj.gambar && obj.gambar,
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

    return res.status(200).json(final);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const getArticleById = async (req: Request, res: Response) => {
  try {
    const response = await Article.findOne({
      where: {
        id: req.params.id,
      },
    });
    const { id, judul, deskripsi, gambar, input_at } = response;
    const value = { id, judul, deskripsi, gambar, input_at };

    const final = await ArticleAssetsModel.findAll({
      where: { article: response.id },
    }).then((asset) => {
      return {
        ...value,
        assets: [
          gambar && gambar,
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

export const postArticle = async (req: Request, res: Response) => {
  try {
    const { judul, deskripsi } = req.body;
    const file = req.file as Express.Multer.File;
    const filter = JSON.parse(JSON.stringify({ judul, deskripsi }));
    let final = {};

    if (file) {
      final = {
        ...filter,
        gambar: file.filename,
      };
    } else {
      final = {
        ...filter,
      };
    }

    const response = await Article.create({
      ...final,
    }).then((d) => {
      return {
        success: true,
        message: "Article Berhasil di Buat",
        attribute: d,
      };
    });

    res.status(200).json({ test: response });
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const postArticleAsset = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const file = req.file as Express.Multer.File;

    if (
      (await ArticleAssetsModel.count({ where: { article: parseInt(id) } })) > 8
    ) {
      return res
        .status(200)
        .json({ success: false, message: "Maksimal Foto Sudah Penuh" });
    }

    const response = await ArticleAssetsModel.create({
      article: parseInt(id),
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

export const getTopArticles = async (req: Request, res: Response) => {
  try {
    const { number } = req.params;
    const response = await Article.findAll({
      order: [["input_at", "DESC"]],
      limit: parseInt(number),
    });

    const values = response.map((article) => {
      const { id, judul, deskripsi, gambar, input_at } = article;
      const value = {
        id,
        judul,
        deskripsi,
        gambar,
        input_at,
      };
      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return ArticleAssetsModel.findAll({ where: { article: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            assets: [
              obj.gambar && obj.gambar,
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

export const updateArticle = async (req: Request, res: Response) => {
  try {
    const { judul, deskripsi } = req.body;
    const { id } = req.params;
    const file = req.file as Express.Multer.File;

    const update = { judul, deskripsi };
    const filter = JSON.parse(JSON.stringify(update));

    let final = {};
	
    if (file) {
      final = {
        ...filter,
        gambar: file.filename,
      };
    } else {
      final = {
        ...filter,
      };
    }

    const response = await Article.update(
      { ...final },
      {
        where: {
          id,
        },
      }
    )
      .then((article) => ({
        success: true,
        message: "Article Berhasil di Edit",
        attribute: final,
      }))
      .catch((err) => ({
        success: false,
        message: "Article Gagal di Edit",
        attribute: final,
        detail: err,
      }));

    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const updateArticleAssetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const file = req.file as Express.Multer.File;

    const response = await ArticleAssetsModel.findOne({
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
        .update({ foto: file.filename })
        .then((asset) => ({
          success: true,
          message: "Foto Berhasil Di Update",
          attributes: asset,
        }))
        .catch((err) => ({
          success: false,
          message: "Foto Gagal Di Update",
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

export const deleteArticleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Article.findOne({
      where: {
        id,
      },
    });

    const assetDelete = await ArticleAssetsModel.findAll({
      where: { article: response.id },
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
      .then(() => {
        return {
          success: true,
          message: "Article Berhasil Dihapus",
        };
      })
      .catch((err) => {
        return {
          success: false,
          message: "Article gagal Dihapus",
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

export const deleteArticleAssetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await ArticleAssetsModel.findOne({
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

export const deleteArticleAssetByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const response = await ArticleAssetsModel.findOne({
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
