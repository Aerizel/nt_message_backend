import { ResultSetHeader } from "mysql2";
import pool from "../config/db_config";

//SELECT QUERY
export async function SelectQuery<T>(query: string, params?: any): Promise<Partial<T>> {
    const [result] = await pool.execute(query, params);
    return result as T;
};

//INSERT/UPDATE/DELETE QUERY
export async function ModifyQuerys(query: string): Promise<ResultSetHeader> {
    const [result] = await pool.execute(query);
    return result as ResultSetHeader;
};
   