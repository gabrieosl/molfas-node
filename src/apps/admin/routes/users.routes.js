import { Router } from 'express';

import UserController from '../controllers/UserController';

const routes = new Router();

routes.put('/', UserController.update);

routes.post('/', UserController.store);
routes.get('/', UserController.index);
routes.put('/:targetId', UserController.update);
routes.delete('/:targetId', UserController.delete);

export default routes;
