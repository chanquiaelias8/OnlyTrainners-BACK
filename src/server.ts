import express, {Application, Request, Response} from 'express';
import routesUsers from './routes/User'
import morgan from "morgan"
import { db } from "./db";

class Server {
  private app: Application;
  private port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Aplicacion corriendo en el puerto ${this.port}`);
    })
  }

  routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        msg: 'Api working'
      })
    })
    this.app.use('/users', routesUsers)
  }

  middlewares() {
    // paseBody
    this.app.use(express.json())
    this.app.use(morgan("dev"))
  }

  async dbConnect() {
    try {
      await db.authenticate();
      console.log('Base de datos conectada');
    } catch (error) {
      console.log(error);
      console.log('Error al conectar la base de datos');
    }
  }
}

export default Server;