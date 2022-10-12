import Video from "../models/videoModels";
import { Request, Response, NextFunction } from "express";

export const getVideos = async (req: Request, res: Response) => {
  try {
    const response = await Video.findAll();
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getVideoById = async (req: Request, res: Response) => {
  try {
    const response = await Video.findOne({
      where: {
        id: req.params.id,
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

export const postVideo = async (req: Request, res: Response) => {
  try {
    const { judul, video } = req.body;

    const response = await Video.create({
      judul,
      video,
    }).then((d) => {
      return {
        success: true,
        message: "Video Sukses Dibuat",
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

export const updateVideo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { judul, video } = req.body;
    const update = {
      judul,
      video,
    };
    const final = JSON.parse(JSON.stringify(update));

    const response = await Video.findOne({
      where: {
        id,
      },
    }).then((record) => {
      if (record) {
        record.set({ ...final });
        record.save();
      }
      return {
        success: true,
        message: "Article Berhasil di Edit",
        attributes: record,
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

export const deleteVideoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Video.destroy({
      where: {
        id,
      },
    }).then((d) => {
      return {
        message: "Berhasil Untuk Menghapus Video",
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
