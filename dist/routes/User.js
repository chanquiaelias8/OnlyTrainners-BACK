"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../controllers/User");
const router = (0, express_1.Router)();
router
    .get('/', User_1.getUsers)
    .post('/', User_1.createUser)
    .get('/:id', User_1.getUser)
    .put('/id', User_1.updateUser)
    .delete('/:id', User_1.deleteUser);
exports.default = router;
