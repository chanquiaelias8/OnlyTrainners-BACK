"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
const sequelize_1 = require("sequelize");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Buscar al usuario por nombre de usuario o correo electrónico
        const user = yield User_1.User.findOne({
            where: {
                [sequelize_1.Op.or]: [
                    { userName: email },
                    { email: email },
                ],
            },
        });
        // Verificar si el usuario existe y la contraseña es correcta
        if (user && user.password === password) {
            // Usuario autenticado correctamente
            res.status(200).json({ message: "Autenticación exitosa" });
        }
        else {
            // Credenciales inválidas
            res.status(401).json({ message: "Credenciales inválidas" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al procesar la solicitud" });
    }
});
exports.default = login;
