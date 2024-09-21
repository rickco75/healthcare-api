import { Request, Response, NextFunction } from 'express';

/**
 * Custom error handling middleware.
 * @param {Error} err - The error object.
 * @param {Request} req - The incoming request.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};