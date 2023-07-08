import { Router} from 'express';
import createUser from '../controllers/users/postUsers';
import getUsers from '../controllers/users/GetUsers';
import { changeEmail, changeFirstname, changeLastname, changePassword } from '../controllers/users/editUsers';

const router = Router();

router.post('/createuser', createUser);

router.get("/getusers",getUsers)

router.patch("/changefistname",changeFirstname)

router.patch("/changelastname", changeLastname)

router.patch("/changeEmail", changeEmail)

router.patch("/changepassword", changePassword)




export default router;
