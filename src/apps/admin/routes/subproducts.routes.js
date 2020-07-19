import { Router } from 'express';

import SubProductController from '../controllers/SubProductController';

const routes = new Router();

routes.get('/', SubProductController.index);
routes.post('/', SubProductController.store);
routes.put('/:id', SubProductController.update);
routes.delete('/:id', SubProductController.delete);

export default routes;
