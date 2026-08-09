import { Request, Response, NextFunction, RequestHandler } from "express";
import { AnyZodObject, ZodError } from "zod";


export const validate = (schema: AnyZodObject): RequestHandler => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const parsed = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      
      req.body = parsed.body;
      req.query = parsed.query;
      req.params = parsed.params;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        
        const formattedErrors = error.errors.map((err) => ({
          field: err.path.slice(1).join("."), 
          message: err.message,
        }));

        return next({
          statusCode: 400,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }
      next(error);
    }
  };
};
