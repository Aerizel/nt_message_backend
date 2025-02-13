import { Request, Response } from 'express';
import { Login } from '../services/login';

export const userLogin = [
    async (req: Request, res: Response): Promise<void> => {
        const username = req.body.username;
        const password = req.body.password;

        if (!username || !password) {
            res.status(400).json({ message: 'Username and password are required' });
        } else {
            try {
                const token: string = await Login(username, password);
                if (token != '') {
                    res.status(200).json({ message: 'User logged in successfully', token: token});
                } else {
                    res.status(400).json({ message: 'Username or passwrod is incorrect' })
                }
            } catch (err) {
                res.status(500).json({ message: 'Error occured while checking user' });
            }
        }
    }
];
