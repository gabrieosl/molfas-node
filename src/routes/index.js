import { Router } from 'express';
import adminRoutes from './adminRoutes';
import storeRoutes from './storeRoutes';

const routes = new Router();

routes.use('/api', adminRoutes);
routes.use('/store', storeRoutes);

export default routes;
