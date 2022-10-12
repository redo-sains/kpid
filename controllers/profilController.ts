import Profil from "../models/profilModels";
import { Request, Response, NextFunction } from "express";
const fs = require("fs");

export const getProfil = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const response = await Profil.findOne();
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getVisiMisi = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const response = await Profil.findOne({ attributes: ["visi", "misi"] });
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getLatarBelakang = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const response = await Profil.findOne({ attributes: ["latar_belakang"] });
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getWilayahKerja = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const response = await Profil.findOne({ attributes: ["wilayah_kerja"] });
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getProgramUnggulan = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const response = await Profil.findOne({ attributes: ["program_unggulan"] });
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const updateVisiMisi = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const { visi, misi } = req.body;

    const response = await Profil.findAll().then((record) => {
      if (record) {
        record[0].set({ visi, misi });
        record[0].save();
      }
      return {
        success: true,
        message: "Berhasil Mengupdate Visi Misi",
        attributes: record[0],
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

export const updateLatarBelakang = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const { latar_belakang } = req.body;
    const filter = JSON.parse(
      JSON.stringify({
        latar_belakang,
      })
    );
    const response = await Profil.findOne().then((record) => {
      if (record) {
        record.set({ ...filter });
        record.save();
      }
      return {
        success: true,
        message: "Berhasil Mengupdate Latar Belakang",
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

export const updateWilayahKerja = async (req: Request, res: Response) => {
  try {
    const { wilayah_kerja } = req.body;

    const filter = JSON.parse(
      JSON.stringify({
        wilayah_kerja,
      })
    );

    const response = await Profil.findOne().then((record) => {
      if (record) {
        record.set({ ...filter });
        record.save();
      }
      return {
        success: true,
        message: "Berhasil Mengupdate Wilayah Kerja",
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

export const updateProgramUnggulan = async (req: Request, res: Response) => {
  try {
    const { program_unggulan } = req.body;
    const filter = JSON.parse(
      JSON.stringify({
        program_unggulan,
      })
    );

    const response = await Profil.findOne().then((record) => {
      if (record) {
        record.set({ ...filter });
        record.save();
      }
      return {
        success: true,
        message: "Berhasil Mengupdate Program Unggulan",
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

export const updateProfilDetail = async (req: Request, res: Response) => {
  try {
    const { latar_belakang, wilayah_kerja, program_unggulan } = req.body;
    const filter = JSON.parse(
      JSON.stringify({
        latar_belakang,
        wilayah_kerja,
        program_unggulan,
      })
    );
    let final = {};

    const response = await Profil.findOne().then((Profil) => {
      return Profil.update({ ...filter }).then((newProfils) => {
        const { latar_belakang, wilayah_kerja, program_unggulan } = newProfils;
        return {
          message: "Berhasil Untuk Mengupdate Detail Profil",
          success: true,
          attributes: {
            latar_belakang,
            wilayah_kerja,
            program_unggulan,
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

export const updateStrukOrg = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");

    const file = req.file as Express.Multer.File;

    const response = await Profil.findAll().then((record: any) => {
      if (record) {
        fs.unlink(`./images/${record[0].struktur_organisasi}`, (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
        });

        record[0].set({ struktur_organisasi: file.filename });
        record[0].save();

        return {
          success: true,
          message: "Berhasil Mengupdate Struktur Organisasi",
          attributes: record[0],
        };
      }
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

export const getStrukOrg = async (req: Request, res: Response) => {
  try {
    Profil.removeAttribute("id");
    const response = await Profil.findOne({
      attributes: ["struktur_organisasi"],
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
