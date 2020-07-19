import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Customer from '../models/Customer';

import authConfig from '../../../config/authStore';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed for STORE SESSION' });
    }

    const { email, password } = req.body;
    const customer = await Customer.findOne({
      where: {
        email,
      },
    });
    if (!customer) {
      return res.status(401).json({ error: 'Invalid customer' });
    }
    if (!(await customer.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, firstName, lastName } = customer;

    return res.status(201).json({
      customer: {
        id,
        firstName,
        lastName,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
