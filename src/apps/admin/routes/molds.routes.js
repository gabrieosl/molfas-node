import { Router } from 'express';

import MoldController from '../controllers/MoldController';
import MoldSubProductController from '../controllers/MoldSubProductController';

const routes = new Router();

routes.get('/', MoldController.index);
routes.post('/', MoldController.store);
routes.put('/:id', MoldController.update);
routes.delete('/:targetId', MoldController.delete);

routes.get('/:moldId/subproducts', MoldSubProductController.index);
routes.post('/:moldId/subproducts', MoldSubProductController.store);
routes.put('/:moldId/subproducts/:id', MoldSubProductController.update);
routes.delete(
  '/:moldId/subproducts/:targetId',
  MoldSubProductController.delete
);

export default routes;
