import { userDbModel } from "../models/user_model/user_model";
import { SelectQuery } from "../utils/db_query_utils";

export function FindUserAndPwdDB(username: string, password: string) {
    const sqlCommand = "SELECT username,name,surname,role FROM user WHERE USERNAME=? AND PASSWORD=?;";
    return SelectQuery<userDbModel[]>(sqlCommand, [username, password]);
};