import * as Yup from 'yup';
import User from '../models/User';
import Avatar from '../models/Avatar';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      username: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed for STORE USER' });
    }

    // check if email is taken
    const mailExists = await User.findOne({
      where: { email: req.body.email },
    });
    if (mailExists) {
      return res.status(400).json({ error: 'This mail is already in use' });
    }

    // check if username is taken
    const usernameExists = await User.findOne({
      where: { username: req.body.username },
    });
    if (usernameExists) {
      return res.status(400).json({ error: 'This username is already in use' });
    }

    const { username } = await User.create({
      ...req.body,
      role: 'user',
      active: true,
    });

    const user = await User.findOne({
      where: { username },
      attributes: ['id', 'name', 'username', 'email', 'role', 'active'],
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
    return res.status(201).json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      username: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
      role: Yup.string(),
      active: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed for UPDATE USER' });
    }

    let user;
    const { targetId } = req.params;
    // eslint-disable-next-line eqeqeq
    if (targetId && targetId != req.userId) {
      user = await User.findByPk(targetId);
    } else {
      user = await User.findByPk(req.userId);
      req.body.active = user.active;
      req.body.role = user.role;
    }

    const { email, username, oldPassword } = req.body;

    if (email && email !== user.email) {
      const emailExists = await User.findOne({ where: { email } });

      if (emailExists) {
        return res.status(400).json({ error: 'New mail is aready in use' });
      }
    }

    if (username && username !== user.username) {
      const userExists = await User.findOne({ where: { username } });

      if (userExists) {
        return res.status(400).json({ error: 'New username is aready in use' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      res.status(401).json({ error: 'Password does not match.' });
    }

    const userUpdated = await user.update(req.body);

    return res.json(userUpdated);
  }

  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'username', 'email', 'role', 'active'],
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
      order: [
        ['active', 'DESC'],
        ['name', 'ASC'],
      ],
    });
    return res.json(users);
  }

  async delete(req, res) {
    const { targetId } = req.params;
    // eslint-disable-next-line eqeqeq
    if (targetId != req.userId) {
      await User.destroy({
        where: { id: targetId },
      });
      return res.json({ message: 'success' });
    }
    return res.status(401).json({ error: 'You can not delete yourself' });
  }
}

export default new UserController();
