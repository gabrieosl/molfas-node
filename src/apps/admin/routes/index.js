import { Router } from 'express';

import SessionController from '../controllers/SessionController';
import ordersRouter from './orders.routes';
import productsRouter from './products.routes';
import machinesRouter from './machines.routes';
import subproductsRouter from './subproducts.routes';
import rawmaterialsRouter from './rawmaterials.routes';
import moldsRouter from './molds.routes';
import usersRouter from './users.routes';

import authMiddleware from '../middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.use('/orders', ordersRouter);
routes.use('/products', productsRouter);
routes.use('/machines', machinesRouter);
routes.use('/subproducts', subproductsRouter);
routes.use('/rawmaterials', rawmaterialsRouter);
routes.use('/molds', moldsRouter);
routes.use('/users', usersRouter);

export default routes;
