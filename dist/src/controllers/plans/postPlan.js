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
const Plan_1 = require("../../models/Plan");
const Video_1 = require("../../models/Video");
const createPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, privateDescription, publicDescription, price, tags, videos, } = req.body;
        // Crear el nuevo plan
        const newPlan = yield Plan_1.Plan.create({
            title,
            privateDescription,
            publicDescription,
            price,
            tags,
        });
        // Asociar los videos al plan
        if (videos && videos.length > 0) {
            const videoPromises = videos.map((video) => Video_1.Video.create({
                idVideo: video.idVideo,
                url: video.url,
                publico: video.publico,
                description: video.description,
            }));
            yield Promise.all(videoPromises);
        }
        res.status(200).json(newPlan);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear el plan" });
    }
});
exports.default = createPlan;
