import { Router } from 'express';

import OrderController from '../controllers/OrderController';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';

const routes = Router();

routes.use(ensureAuthentication);

routes.get('/', OrderController.index);
routes.post('/', OrderController.store);

export default routes;
