import { userDbModel } from "../models/user_model/user_model";
import { SelectQuery } from "../utils/db_query_utils";

export function FindUserAndPwdDB(username: string, password: string) {
    const sqlCommand = "SELECT USERNAME,NAME,SURNAME,ROLE FROM USER WHERE USERNAME=? AND PASSWORD=?;";
    return SelectQuery<userDbModel[]>(sqlCommand, [username, password]);
};