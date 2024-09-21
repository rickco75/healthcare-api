import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router: Router = Router();
const userController = new UserController();

/**
 * User Routes
 */
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;