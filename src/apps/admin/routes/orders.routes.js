import { Router } from 'express';

import OrderController from '../controllers/OrderController';

const routes = new Router();

routes.get('/', OrderController.index);
routes.get('/:id', OrderController.index);
routes.post('/', OrderController.store);
routes.put('/:id', OrderController.update);

export default routes;
