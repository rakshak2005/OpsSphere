import jwt from "jsonwebtoken";
import { config } from "../config";

interface TokenPayload {
  id: string;
  role: string;
}

/**
 * Sign a new stateless JWT token with user metadata.
 */
export const signToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn as any,
  });
};

/**
 * Verify and decode an incoming JWT token.
 */
export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, config.jwtSecret) as TokenPayload;
};
