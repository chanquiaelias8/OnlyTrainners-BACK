import express, {Application, Request, Response} from 'express';
import routesUsers from './routes/User'
import routesVideos from './routes/videos';
import morgan from "morgan"
import { db } from "./db";
import routesPlans from './routes/plans';
var cors = require('cors')
class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
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
    this.app.use('/videos', routesVideos); 
    this.app.use('/plans', routesPlans); 
  }

  middlewares() {
    // paseBody
    this.app.use(express.json())
    this.app.use(morgan("dev"))
    this.app.use(cors())
  }

  async dbConnect() {
    try {
      await db.sync({force:false});
      console.log('Base de datos conectada');
    } catch (error) {
      console.log(error);
      console.log('Error al conectar la base de datos2');
    }
  }
}

export default Server;