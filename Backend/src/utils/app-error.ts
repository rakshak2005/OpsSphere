/**
 * Custom Error class for operational errors.
 * Operational errors are expected errors (e.g., validation failed, record not found).
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly errors: any[];

  constructor(message: string, statusCode: number, errors: any[] = []) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.errors = errors;

    // Capture the call stack and omit this constructor from it
    Error.captureStackTrace(this, this.constructor);
  }
}
