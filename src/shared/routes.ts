import { Router } from 'express';

import productsRouter from '@modules/products/routes/products.routes';
import ordersRouter from '@modules/orders/routes/orders.routes';
import adminRouter from '@modules/admin/routes/admin.routes';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordsRouter from '@modules/users/infra/http/routes/passwords.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);
routes.use('/admin', adminRouter);

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordsRouter);
routes.use('/profile', profileRouter);

export default routes;
