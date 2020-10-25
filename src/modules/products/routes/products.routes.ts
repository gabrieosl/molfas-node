import { Router } from 'express';

import ProductController from '../controllers/ProductController';

const routes = Router();

routes.get('/', ProductController.index);
routes.get('/:name', ProductController.show);

export default routes;
