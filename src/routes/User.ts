import { Router } from 'express';
import { getUser, getUsers, deleteUser, createUser, updateUser } from '../controllers/User';

const router = Router();

router
    .get('/', getUsers)
    .post('/', createUser)
    .get('/:id', getUser)
    .put('/id', updateUser)
    .delete('/:id', deleteUser)

export default router;