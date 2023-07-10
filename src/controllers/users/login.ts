import { Request, Response } from "express";
import { User } from "../../models/User";
import { Op } from "sequelize";

const login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      // Buscar al usuario por nombre de usuario o correo electrónico
      const user = await User.findOne({
        where: {
          [Op.or]: [
            { userName: email },
            { email: email },
          ],
        },
      });
  
      // Verificar si el usuario existe y la contraseña es correcta
      if (user && user.password === password) {
        // Usuario autenticado correctamente
        res.status(200).json({ message: "Autenticación exitosa" });
      } else {
        // Credenciales inválidas
        res.status(401).json({ message: "Credenciales inválidas" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al procesar la solicitud" });
    }
  };
  

export default login;