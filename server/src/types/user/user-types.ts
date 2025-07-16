import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { userEnum, usersTable } from "../../db/schema";

export type TRoles = typeof userEnum.enumValues[ number ]

export interface UserPayload {
    email: string
}

export interface User {
    email: string;
    username: string;
    password: string;
    roles?: TRoles,
}

export type NewUsers = InferInsertModel<typeof usersTable>
export type Users = InferSelectModel<typeof usersTable>
