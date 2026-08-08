import { Request, Response, NextFunction, RequestHandler } from "express";
import { AnyZodObject, ZodError } from "zod";

/**
 * Express middleware to validate incoming request data (body, query, params)
 * against a Zod schema. If validation fails, it throws a formatted 400 error.
 */
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

      // Reassign parsed and cleaned data back to Express request properties
      req.body = parsed.body;
      req.query = parsed.query;
      req.params = parsed.params;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Format structural validation errors into a clean array
        const formattedErrors = error.errors.map((err) => ({
          field: err.path.slice(1).join("."), // removes "body", "query", or "params" prefix
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
