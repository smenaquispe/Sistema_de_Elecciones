import { User } from "../models/User";

// /src/types/types.express.d.ts
declare namespace Express {
    export interface Request {
        user: User
    }
}