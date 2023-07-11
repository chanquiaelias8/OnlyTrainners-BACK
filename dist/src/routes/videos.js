"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postvideo_1 = __importDefault(require("../controllers/video/postvideo"));
const getvideos_1 = __importDefault(require("../controllers/video/getvideos"));
const routesVideos = (0, express_1.Router)();
routesVideos.post("/createvideo", postvideo_1.default);
routesVideos.get("/getvideo", getvideos_1.default);
exports.default = routesVideos;
