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
exports.changePassword = exports.changeEmail = exports.changeLastname = exports.changeFirstname = void 0;
const User_1 = require("../../models/User");
const changeFirstname = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idUsuario, firstname } = req.body;
        if (!idUsuario || !firstname)
            return res.status(400).json({ Error: "id usuario o firstname no fueron resividos" });
        const searchUser = yield User_1.User.findByPk(idUsuario);
        if (!searchUser)
            return res.status(400).json({ Error: "Usuario no existe" });
        searchUser.firstName = firstname;
        yield searchUser.save();
        res.status(200).json(Object.assign(Object.assign({}, searchUser.toJSON()), { password: undefined }));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.changeFirstname = changeFirstname;
const changeLastname = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idUsuario, lastName } = req.body;
        if (!idUsuario || !lastName)
            return res.status(400).json({ Error: "id o lastname no existe" });
        const searchUser = yield User_1.User.findByPk(idUsuario);
        if (!searchUser)
            return res.status(400).json({ Error: "Usuario no existe" });
        searchUser.lastName = lastName;
        yield searchUser.save();
        res.status(200).json(Object.assign(Object.assign({}, searchUser.toJSON()), { password: undefined }));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.changeLastname = changeLastname;
const changeEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idUsuario, email } = req.body;
        if (!idUsuario || !email) {
            return res.status(400).json({ Error: "id usuario o email no fueron recibidos" });
        }
        const searchUser = yield User_1.User.findByPk(idUsuario);
        if (!searchUser) {
            return res.status(400).json({ Error: "Usuario no existe" });
        }
        searchUser.email = email;
        yield searchUser.save();
        res.status(200).json(Object.assign(Object.assign({}, searchUser.toJSON()), { password: undefined }));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.changeEmail = changeEmail;
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idUsuario, password } = req.body;
        if (!idUsuario || !password) {
            return res.status(400).json({ Error: "id usuario o password no fueron recibidos" });
        }
        const searchUser = yield User_1.User.findByPk(idUsuario);
        if (!searchUser) {
            return res.status(400).json({ Error: "Usuario no existe" });
        }
        searchUser.password = password;
        yield searchUser.save();
        res.status(200).json(Object.assign(Object.assign({}, searchUser.toJSON()), { password: undefined }));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.changePassword = changePassword;
