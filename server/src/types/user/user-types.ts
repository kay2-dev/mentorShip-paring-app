import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { profileTable, requestStatusEnum, requestTable, userEnum, usersTable } from "../../db/schema";

export type TRoles = typeof userEnum.enumValues[ number ]
export type TRequestStatus = typeof requestStatusEnum.enumValues[ number ]

export interface UserPayload {
    id: number
}

export type TRequestBody = {
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

export type UpdateUser = Partial<Users>
export type UpdateUserProfile = Partial<Profile>


//Moving this type to its own file

export type NewRequest = InferInsertModel<typeof requestTable>

export type UpdateRequest = Partial<NewRequest>