import * as OTPAuth from "otpauth";
import dotenv from "dotenv";
import { DIGITS, OTP_EXPIRE_TIME } from "../config/otp_config";
dotenv.config();

const totp = new OTPAuth.TOTP({
    // Algorithm used for the HMAC function, possible values are:
    //   "SHA1", "SHA224", "SHA256", "SHA384", "SHA512",
    //   "SHA3-224", "SHA3-256", "SHA3-384" and "SHA3-512".
    algorithm: "SHA256",
    digits: DIGITS,
    period: OTP_EXPIRE_TIME,
    secret: process.env.OTP_SECRET ?? "",
});

export const generateOTP = (): string => {
    return totp.generate();
};
