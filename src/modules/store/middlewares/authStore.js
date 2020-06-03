import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/authStore';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {
    const [, token] = authHeader.split(' ');
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.customerId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid customer Token' });
  }
};
