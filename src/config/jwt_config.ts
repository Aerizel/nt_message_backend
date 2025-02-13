//USE FOR LOCAL PURPOSES
import dotenv from "dotenv";
dotenv.config({ path: 'local.env' }); 

export const JWT_EXPIRES_TIME = '1h';
export const JWT_SECRET_KEY = process.env.SECRET_OTP_KEY as string;