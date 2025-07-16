import { userEnum } from "../../db/schema";

export type TRoles = typeof userEnum.enumValues[ number ]

export interface User {
    email: string;
    username: string;
    password: string;
    roles?: TRoles,
}