import { JWT_EXPIRES_TIME, JWT_SECRET_KEY } from "../config/jwt_config";
import { FindUserAndPwdDB } from "../db/user_table";
import { userDbModel } from "../models/user_model/user_model";
import jwt from "jsonwebtoken";

export function Login(username: string, password: string): Promise<string> {

    return FindUserAndPwdDB(username, password).then(data => {
        const userData = data as userDbModel[];

        if (userData.length > 0) {
            const token = jwt.sign(
                {
                    username: userData[0].username,
                    name: userData[0].name,
                    surname: userData[0].surname,
                    role: userData[0].role
                },
                JWT_SECRET_KEY,
                { expiresIn: JWT_EXPIRES_TIME }
            );

            //VERIFY JWT 
            // try {
            //     const verified = jwt.verify(token, JWT_SECRET_KEY);
            //     console.log("Verified Token:", verified);
            // } catch (error) {
            //     console.error("Invalid Token:");
            // }

            return token;
        } else {
            return '';
        }
    }).catch(err => {
        console.log(err);
        return '';
    });
}