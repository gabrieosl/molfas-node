import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../../models/User';
import Avatar from '../../models/Avatar';

import authConfig from '../../../config/authAdmin';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      /* email: Yup.string()
        .email()
        .required()
        .when('username', (username, field) =>
          username ? field.notRequired() : field
        ), */
      username: Yup.string().required(),
      // .when('email', (email, field) => (email ? field.notRequired() : field)),
      password: Yup.string().min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed for STORE SESSION' });
    }

    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid user' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, name, email, role, avatar } = user;

    return res.status(201).json({
      user: {
        id,
        name,
        username,
        email,
        role,
        avatar,
      },
      token: jwt.sign({ id, role }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
