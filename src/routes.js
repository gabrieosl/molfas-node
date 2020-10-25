import { Router } from 'express';
import adminRoutes from './apps/admin/routes';
import storeRoutes from './apps/store/routes';

const routes = new Router();

routes.use('/store', storeRoutes);
routes.use('/api', adminRoutes);

export default routes;
