import { Router } from 'express';

import StoreSessionController from '../app/controllers/store/SessionController';
import StoreProductController from '../app/controllers/store/ProductController';
import CustomerController from '../app/controllers/store/CustomerController';
import OrderController from '../app/controllers/store/OrderController';

import authStoreMiddleware from '../app/middlewares/authStore';

const routes = new Router();

routes.post('/session', StoreSessionController.store);
routes.post('/register', CustomerController.store);
routes.get('/products', StoreProductController.index);
routes.get('/products/:name', StoreProductController.index);

routes.use(authStoreMiddleware);

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);

export default routes;
