import { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';

export default async function(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { isStaff } = request.user;

  if (isStaff) return next();
  throw new AppError('Insuficient permission', 403);
}
