import { Router } from "express";
import { createOtp, verifyOtp } from "../controller/otp.controller";
import { userLogin } from "../controller/login.controller";

const router = Router();

//OTP ROUTES
router.get('/otp-service/generate', createOtp);
router.post('/otp-service/verify', verifyOtp);

//LOGIN ROUTES
router.get('/user-login', userLogin);

export default router;