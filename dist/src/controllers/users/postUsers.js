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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, firstName, lastName, email, password, Birthdate, nationality, sex, typeUser, } = req.body;
        const haduserName = yield User_1.User.count({ where: { userName } });
        if (haduserName > 0)
            return res.status(400).json({ error: "usuario ya existe" });
        const hadmail = yield User_1.User.count({ where: { email } });
        if (hadmail > 0)
            return res.status(400).json({ error: "email ya existe" });
        //formato de la fecha en el objeto JSON y utiliza el formato "YYYY-MM-DD". 
        const birthdated = new Date(Birthdate);
        const newUser = yield User_1.User.create({
            userName,
            firstName,
            lastName,
            email,
            password,
            Birthdate: birthdated,
            nationality,
            sex,
            typeUser,
        });
        const newUserWithoutPassword = Object.assign(Object.assign({}, newUser.toJSON()), { password: undefined });
        console.log(newUserWithoutPassword);
        res.status(201).json(newUserWithoutPassword);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.default = createUser;
