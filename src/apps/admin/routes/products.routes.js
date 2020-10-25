import { Router } from 'express';
import multer from 'multer';

import ProductController from '../controllers/ProductController';
import RecipeController from '../controllers/RecipeController';
import ProductImageController from '../controllers/ProductImageController';
import ProductImageDefaultController from '../controllers/ProductImageDefaultController';

import multerConfig from '../../../config/multer';

const routes = new Router();
const images = multer(multerConfig);

routes.get('/', ProductController.index);
routes.post('/', ProductController.store);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.delete);

routes.get('/:productId/subproducts', RecipeController.index);
routes.post('/:productId/subproducts', RecipeController.store);
routes.delete('/:productId/subproducts/:targetId', RecipeController.delete);

routes.get('/:productId/pictures', ProductImageController.index);
routes.post(
  '/:productId/pictures',
  images.single('file'),
  ProductImageController.store
);
routes.delete('/:id/pictures/:targetId', ProductImageController.delete);

routes.post(
  '/:productId/defaultpicture/:imageId',
  ProductImageDefaultController.store
);

export default routes;
