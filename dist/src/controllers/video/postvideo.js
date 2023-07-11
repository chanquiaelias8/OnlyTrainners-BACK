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
const Video_1 = require("../../models/Video");
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idEntrenador, descPublica, descPrivada, precio, etiquetas, video, } = req.body;
        // }: Omit<VideoAttributes, "idVideo"> & { public: boolean } = req.body;
        const newVideo = yield Video_1.Video.create({
            idEntrenador,
            descPublica,
            descPrivada,
            precio,
            etiquetas,
            video,
        });
        res.status(201).json(newVideo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear el video" });
    }
});
exports.default = createVideo;
