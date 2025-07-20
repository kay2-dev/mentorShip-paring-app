import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { profileTable, userEnum, usersTable } from "../../db/schema";

export type TRoles = typeof userEnum.enumValues[ number ]

export interface UserPayload {
    id: number
}

export interface User {
    email: string;
    username: string;
    password: string;
    roles?: TRoles,
}

export type NewUsers = InferInsertModel<typeof usersTable>
export type Users = InferSelectModel<typeof usersTable>

export type NewProfile = InferInsertModel<typeof profileTable>
export type Profile = InferSelectModel<typeof profileTable>
