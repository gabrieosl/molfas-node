import { Router } from 'express';

import RawmaterialController from '../controllers/RawmaterialController';

const routes = new Router();

routes.get('/', RawmaterialController.index);
routes.post('/', RawmaterialController.store);
routes.put('/:id', RawmaterialController.update);
routes.delete('/:id', RawmaterialController.delete);

export default routes;
