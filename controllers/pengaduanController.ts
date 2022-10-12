import Pengaduan from "../models/pengaduanModels";
import { Request, Response, NextFunction } from "express";
import ReplyPengaduan from "../models/replyPengaduanModels";

export const getPengaduans = async (req: Request, res: Response) => {
  try {
    const response = await Pengaduan.findAll();
    const values = response.map((article) => {
      const { id, nama, saran, email, input_at } = article;
      const value = {
        id,
        nama,
        saran,
        email,
        input_at,
      };
      return {
        ...value,
      };
    });

    const promises = await values.map((obj) => {
      return ReplyPengaduan.findAll({ where: { pengaduan: obj.id } }).then(
        function (results) {
          return {
            ...obj,
            replies: results.map((res) => res.reply),
            detail_replies: results,
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

export const getPengaduanById = async (req: Request, res: Response) => {
  try {
    const response = await Pengaduan.findOne({
      where: {
        id: req.params.id,
      },
    });
    const { id, nama, saran, email, input_at } = response;
    const value = { id, nama, saran, email, input_at };

    const final = await ReplyPengaduan.findAll({
      where: { pengaduan: response.id },
    }).then((asset) => {
      return {
        ...value,
        replies: asset.map((res) => res.reply),
        detail_replies: asset,
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

export const deletePengaduanById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Pengaduan.destroy({
      where: {
        id,
      },
    }).then((d) => {
      return {
        message: "Berhasil Untuk Menghapus Pengaduan",
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

export const deleteReplyPengaduanById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await ReplyPengaduan.destroy({
      where: {
        id,
      },
    }).then((d) => {
      return {
        message: "Berhasil Untuk Menghapus Reply Pengaduan",
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

export const postPengaduan = async (req: Request, res: Response) => {
  try {
    const { nama = "", saran = "", email = "" } = req.body;

    const response = await Pengaduan.create({
      nama,
      saran,
      email,
    }).then((d) => {
      return {
        success: true,
        message: "Pengaduan Sukses Dibuat",
        attributes: d,
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

export const postPengaduanReply = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama, reply, email } = req.body;

    const response = await ReplyPengaduan.create({
      nama,
      reply,
      email,
      pengaduan: parseInt(id),
    }).then((d) => {
      return {
        success: true,
        message: "Reply Pengaduan Sukses Dibuat",
        attributes: d,
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
