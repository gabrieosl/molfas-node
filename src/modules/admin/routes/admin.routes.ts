import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';
import ensureStaff from '../middlewares/ensureStaff';

import ProductsAdminRouter from './products.admin.routes';

const routes = Router();

routes.use(ensureAuthentication);
routes.use(ensureStaff);

routes.use('/products', ProductsAdminRouter);

export default routes;
