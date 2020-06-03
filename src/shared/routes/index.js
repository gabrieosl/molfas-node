import { Router } from 'express';
import AdminRouter from '../../modules/admin/routes';
import StoreRouter from '../../modules/store/routes';

const routes = new Router();

routes.use('/admin', AdminRouter);
routes.use('/store', StoreRouter);

export default routes;
