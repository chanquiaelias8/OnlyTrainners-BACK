import { Router} from 'express';
import createUser from '../controllers/users/postUsers';
import getUsers from '../controllers/users/GetUsers';
import { changeFirstname } from '../controllers/users/editUsers';

const router = Router();

router.post('/createuser', createUser);


router.get("/getusers",getUsers)

router.patch("/changefistname",changeFirstname)


export default router;
