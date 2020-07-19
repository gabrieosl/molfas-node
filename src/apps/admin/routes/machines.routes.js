import { Router } from 'express';

import MachineController from '../controllers/MachineController';

const routes = new Router();

routes.get('/', MachineController.index);
routes.post('/', MachineController.store);
routes.put('/:id', MachineController.update);
routes.delete('/:id', MachineController.delete);

export default routes;
