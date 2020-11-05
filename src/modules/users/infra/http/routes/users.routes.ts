import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import UsersController from '../controller/UsersController';
import UsersAvatarController from '../controller/UserAvatarController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
