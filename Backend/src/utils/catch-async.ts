import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Wraps an asynchronous Express request handler to automatically catch
 * any errors and forward them to the global error handling middleware.
 */
export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
};
