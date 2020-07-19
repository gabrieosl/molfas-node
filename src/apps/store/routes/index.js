import { Router } from 'express';

import StoreSessionController from '../controllers/SessionController';
import StoreProductController from '../controllers/ProductController';
import CustomerController from '../controllers/CustomerController';
import OrderController from '../controllers/OrderController';

import authMiddleware from '../middlewares/auth';

const routes = new Router();

routes.post('/session', StoreSessionController.store);
routes.post('/register', CustomerController.store);
routes.get('/products', StoreProductController.index);
routes.get('/products/:name', StoreProductController.index);

routes.use(authMiddleware);

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);

export default routes;
