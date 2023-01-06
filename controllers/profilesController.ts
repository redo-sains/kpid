import { profile } from "console";
import Profiles from "../models/profilesModels";
import { Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
import City from "../models/cityModels";
const fs = require("fs");

export const getProfiles = async (req: Request, res: Response) => {
  try {
    const response = await Profiles.findAll();
    const value = await Promise.all(
      response.map(async (profile) => {
        const data = profile["dataValues"];
        const city_name = await City.findOne({
          where: {
            id: profile.city_id,
          },
        }).then((city) => city.city_name);

        return { ...data, city_name };
      })
    );
    res.status(200).json(value);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getProfilesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await Profiles.findOne({
      where: {
        id,
      },
    });

    const city_name = await City.findOne({
      where: {
        id: response.city_id,
      },
    }).then((city) => city.city_name);

    res.status(200).json({ ...response["dataValues"], city_name });
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const postProfiles = async (req: Request, res: Response) => {
  try {
    const {
      nama,
      jabatan,
      history,
      instagram,
      facebook,
      twitter,
      youtube,
      city_id,
    } = req.body;
    const filter = JSON.parse(
      JSON.stringify({
        nama,
        jabatan,
        history,
        instagram,
        facebook,
        twitter,
        youtube,
        city_id,
      })
    );
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

    const response = await Profiles.create({
      ...final,
    }).then((Lembaga) => {
      const {
        id,
        history,
        jabatan,
        foto,
        nama,
        instagram,
        facebook,
        twitter,
        youtube,
        city_id,
      } = Lembaga;
      return {
        message: "Berhasil Untuk Membuat Profile Anggota",
        success: true,
        attributes: {
          id,
          nama,
          history,
          jabatan,
          foto,
          instagram,
          facebook,
          twitter,
          youtube,
          city_id,
        },
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

export const deleteProfilesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Profiles.findOne({
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
      return Lembaga.destroy().then(() => {
        return {
          message: "Berhasil Untuk Menghapus Profile Anggota KPID",
          success: true,
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

export const getTopProfiles = async (req: Request, res: Response) => {
  try {
    const { number } = req.params;
    const response = await Profiles.findAll({
      limit: parseInt(number),
    });
    const value = await Promise.all(
      response.map(async (profile) => {
        const data = profile["dataValues"];
        const city_name = await City.findOne({
          where: {
            id: profile.city_id,
          },
        }).then((city) => city.city_name);

        return { ...data, city_name };
      })
    );
    res.status(200).json(value);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    res.status(400).json({ message: errMsg });
  }
};

export const updateProfilesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const {
      nama,
      jabatan,
      history,
      instagram,
      facebook,
      twitter,
      youtube,
      city_id,
    } = req.body;
    const filter = JSON.parse(
      JSON.stringify({
        nama,
        jabatan,
        history,
        instagram,
        facebook,
        twitter,
        youtube,
        city_id,
      })
    );
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

    const response = await Profiles.findOne({
      where: {
        id,
      },
    }).then((Profiles) => {
      if (file) {
        fs.unlink(`./images/${Profiles.foto}`, (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
      return Profiles.update({ ...final }).then((newProflies) => {
        const {
          id,
          history,
          nama,
          jabatan,
          foto,
          instagram,
          facebook,
          twitter,
          youtube,
          city_id,
        } = newProflies;
        return {
          message: "Berhasil Untuk Mengupdate Profile Anggota",
          success: true,
          attributes: {
            id,
            history,
            nama,
            jabatan,
            foto,
            instagram,
            facebook,
            twitter,
            youtube,
            city_id,
          },
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
