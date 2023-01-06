import Admin from "../models/adminModels";
import Umkm from "../models/umkmModels";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";

export const getAdmins = async (req: Request, res: Response) => {
  try {
    const response = await Admin.findAll();
    res.status(200).json(response);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getAdminsUmkm = async (req: Request, res: Response) => {
  try {
    const response = await Admin.findAll({
      where: { type: "umkm admin" },
    });

    const umkm = await Umkm.findAll();

    const result = response.map((d) => {
      const { id, username, password, type, umkm_id } = d;
      const {
        id: id_partner,
        type: type_partner,
        nama,
        channel,
        deskripsi,
        alamat,
        instagram,
        facebook,
        youtube,
        google_maps,
      } = umkm.find((a) => a.id == d.umkm_id);

      return {
        id,
        username,
        password,
        type,
        umkm_id,
        detail_partner: {
          id: id_partner,
          type: type_partner,
          nama,
          channel,
          deskripsi,
          alamat,
          instagram,
          facebook,
          youtube,
          google_maps,
        },
      };
    });

    res.status(200).json(result);
  } catch (err) {
    let errMsg = "Gagal Untuk Melakukan Request Ini";
    if (err instanceof Error) {
      errMsg = err.message;
    }
    console.log(errMsg);
  }
};

export const getAdminById = async (req: Request, res: Response) => {
  try {
    const response = await Admin.findOne({
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

export const postAdmin = async (req: Request, res: Response) => {
  try {
    const { type } = req.params;
    const { username, password } = req.body;

    const response = await Admin.create({
      username,
      password,
      type: "super admin",
    }).then(() => {
      return {
        success: true,
        message: "Super Admin Akun Berhasil Di Buat",
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

export const postAdminUmkm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const response = await Admin.create({
      username,
      password,
      type: "umkm admin",
      umkm_id: parseInt(id),
    }).then(() => {
      return {
        success: true,
        message: "Umkm Admin Akun Berhasil Di Buat",
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

export const authAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const response = await Admin.findOne({
      where: {
        username,
      },
    }).then((d) => {
      return d
        ? {
            attribute: {
              username: d.username,
              type: d.type,
              id: d.id,
              umkm_id: d.umkm_id,
            },
            auth: bcrypt.compareSync(password, d.password),
            message: bcrypt.compareSync(password, d.password)
              ? "Login Sukses"
              : "Login Gagal, Silahkan Masukan Password Dengan Benar!!",
          }
        : {
            attribute: { username },
            auth: false,
            message: "Username Yang Dimasukan Salah!!!",
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

export const changeAdminPass = async (req: Request, res: Response) => {
  try {
    const { newPassword, oldPassword } = req.body;
    const { id } = req.params;

    const response = await Admin.findOne({
      where: {
        id,
      },
    }).then((record: any) => {
      return bcrypt.compare(oldPassword, record.password).then((d: any) => {
        if (d) {
          return bcrypt
            .hash(newPassword, 10)
            .then((hash) => {
              record.set({ password: hash });
              record.save();
              return {
                success: true,
                message: "Ganti Password Admin Sukses",
              };
            })
            .catch((err) => {
              throw new Error();
            });
        }
        return {
          success: false,
          message: "Password Lama Yang Dimasukan Salah!!!",
        };
      });
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

export const deleteAdminById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Admin.findOne({
      where: {
        id,
      },
    });

    const destroy = await response
      .destroy()
      .then((d) => {
        return {
          success: true,
          message: "Admin Berhasil Dihapus",
        };
      })
      .catch((err) => {
        return {
          success: false,
          message: "Admin gagal Dihapus",
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
