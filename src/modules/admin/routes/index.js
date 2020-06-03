import { Router } from 'express';
import multer from 'multer';

import ProductController from '../app/controllers/admin/ProductController';
import RecipeController from '../app/controllers/admin/RecipeController';
import SubProductController from '../app/controllers/admin/SubProductController';
import ProductImageController from '../app/controllers/admin/ProductImageController';
import OrderController from '../app/controllers/admin/OrderController';
import ProductImageDefaultController from '../app/controllers/admin/ProductImageDefaultController';
import MachineController from '../app/controllers/admin/MachineController';
import MoldController from '../app/controllers/admin/MoldController';
import MoldSubProductController from '../app/controllers/admin/MoldSubProductController';
import RawmaterialController from '../app/controllers/admin/RawmaterialController';
import UserController from '../app/controllers/admin/UserController';
import AvatarController from '../app/controllers/admin/AvatarController';
import AdminSessionController from '../app/controllers/admin/SessionController';

import authAdminMiddleware from '../app/middlewares/authAdmin';

import multerConfig from '../config/multer';

const images = multer(multerConfig);

const routes = new Router();

routes.post('/session', AdminSessionController.store);

routes.use(authAdminMiddleware);

routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.get('/products/:productId/subproducts', RecipeController.index);
routes.post('/products/:productId/subproducts', RecipeController.store);
routes.delete(
  '/products/:productId/subproducts/:targetId',
  RecipeController.delete
);

routes.get('/products/:productId/pictures', ProductImageController.index);
routes.post(
  '/products/:productId/pictures',
  images.single('file'),
  ProductImageController.store
);
routes.delete(
  '/products/:id/pictures/:targetId',
  ProductImageController.delete
);
routes.post(
  '/products/:productId/defaultpicture/:imageId',
  ProductImageDefaultController.store
);

routes.get('/machines', MachineController.index);
routes.post('/machines', MachineController.store);
routes.put('/machines/:id', MachineController.update);
routes.delete('/machines/:id', MachineController.delete);

//

routes.get('/subproducts', SubProductController.index);
routes.post('/subproducts', SubProductController.store);
routes.put('/subproducts/:id', SubProductController.update);
routes.delete('/subproducts/:id', SubProductController.delete);

// routes.get('/orders', OrderController.index);
// routes.post('/orders', OrderController.store);
// routes.put('/orders/:id', OrderController.update);
// routes.delete('/orders/:targetId', OrderController.delete);

routes.get('/rawmaterials', RawmaterialController.index);
routes.post('/rawmaterials', RawmaterialController.store);
routes.put('/rawmaterials/:id', RawmaterialController.update);
routes.delete('/rawmaterials/:id', RawmaterialController.delete);

routes.get('/molds', MoldController.index);
routes.post('/molds', MoldController.store);
routes.put('/molds/:id', MoldController.update);
routes.delete('/molds/:targetId', MoldController.delete);

routes.get('/molds/:moldId/subproducts', MoldSubProductController.index);
routes.post(
  '/molds/:moldId/subproducts',

  MoldSubProductController.store
);
routes.put('/molds/:moldId/subproducts/:id', MoldSubProductController.update);
routes.delete(
  '/molds/:moldId/subproducts/:targetId',
  MoldSubProductController.delete
);

routes.put('/users', UserController.update);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:targetId', UserController.update);
routes.delete('/users/:targetId', UserController.delete);

// // not defined from here below
routes.post('/avatar', images.single('file'), AvatarController.store);

export default routes;
