import express, {Application, Request, Response} from 'express';
import routesUsers from '../routes/User'

class Server {
  private app: Application;
  private port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.listen();
    this.middlewares();
    this.routes();
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
  }
}

export default Server;