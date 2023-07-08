"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postUsers_1 = __importDefault(require("../controllers/users/postUsers"));
const GetUsers_1 = __importDefault(require("../controllers/users/GetUsers"));
const editUsers_1 = require("../controllers/users/editUsers");
const router = (0, express_1.Router)();
router.post('/createuser', postUsers_1.default);
router.get("/getusers", GetUsers_1.default);
router.patch("/changefistname", editUsers_1.changeFirstname);
router.patch("/changelastname", editUsers_1.changeLastname);
router.patch("/changeEmail", editUsers_1.changeEmail);
router.patch("/changepassword", editUsers_1.changePassword);
exports.default = router;
