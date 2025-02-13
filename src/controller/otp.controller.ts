import { generateOTP } from "../utils/generate_otp";
import { Request, Response } from 'express';
import { nanoid } from 'nanoid'

const otpStore: { [key: string]: string } = {};

export const createOtp = [
    async (req: Request, res: Response): Promise<void> => {
        try {
            const otp = generateOTP();
            const secret = nanoid();
            otpStore[secret] = otp; // Store the OTP in memory
            console.log(otpStore[secret]);

            res.status(200).json({
                status: "OTP generated successfully.",
                otp,
                secret: secret,
            });
        } catch (error) {
            res.status(500).json({ status: "Error in generating OTP." });
            console.error(error);
        }
    }
];

export const verifyOtp = [
    async (req: Request, res: Response): Promise<void> => {
        try {
            const otp: string = req.body.otp;
            const secret: string = req.body.secret;

            if (otpStore[secret] && otpStore[secret] === otp) {
                res.status(200).json({ status: "OTP is valid." });
            } else {
                res.status(400).json({ status: "OTP is invalid or has expired." });
            }
        } catch (error) {
            res.status(500).json({ status: "Error in validating OTP." });
            console.error(error);
        }
    }
];