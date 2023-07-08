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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("./routes/User"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./db");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.dbConnect()
            .then(() => {
            this.routes();
            this.listen();
        })
            .catch((error) => {
            console.log(error);
            console.log('Error al conectar la base de datos');
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'Api working'
            });
        });
        this.app.use('/users', User_1.default);
    }
    middlewares() {
        // paseBody
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.db.sync({ force: false });
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectar la base de datos');
            }
        });
    }
}
exports.default = Server;
