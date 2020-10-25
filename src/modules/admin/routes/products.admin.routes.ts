import { Router } from 'express';
import multer from 'multer';

import AdminProductController from '../controllers/AdminProductController';
import AdminProductImageController from '../controllers/AdminProductImageController';
import AdminDefaultProductImageController from '../controllers/AdminDefaultProductImageController';

import uploadConfig from '@config/upload';

const routes = Router();
const images = multer(uploadConfig);

routes.get('/', AdminProductController.index);
routes.get('/:id', AdminProductController.show);
routes.post('/', AdminProductController.store);
routes.put('/:id', AdminProductController.update);
routes.delete('/:id', AdminProductController.delete);

routes.get('/:id/images', AdminProductImageController.index);
routes.post(
  '/:id/images',
  images.single('image'),
  AdminProductImageController.store,
);
routes.delete('/:id/images/:targetId', AdminProductImageController.delete);
routes.post(
  '/:id/defaultimage/:targetId',
  AdminDefaultProductImageController.store,
);

export default routes;
