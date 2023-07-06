"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id: id
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { name, lastname, mail, password } = req.body;
    res.json({
        msg: 'user created',
        name,
        lastname,
        mail,
        password
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { name, lastname, mail, password } = req.body;
    res.json({
        msg: 'updated user',
        name,
        lastname,
        mail,
        password
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleted user',
        id: id
    });
};
exports.deleteUser = deleteUser;
