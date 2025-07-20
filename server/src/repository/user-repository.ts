import { eq } from "drizzle-orm";
import { db } from "../db-index";
import { usersTable, profileTable } from "../db/schema";
import { TRoles, NewUsers, User, NewProfile } from "../types/user/user-types";

export class UserRepository {
    db: typeof db;
    constructor () {
        this.db = db;
    }

    async createUser (userData: NewUsers) {
        return await this.db.insert(usersTable).values(userData).returning();
    }
    async findUserByEmail (email: string) {
        return await this.db.select().from(usersTable).where(eq(usersTable.email, email))
    }

    async createUserProfile (profileData: NewProfile, id: number) {

        console.log(profileData, id)
        return await this.db.insert(profileTable).values({ ...profileData, userId: id })
    }
    async getUserProfile (id: number) {
        const userProfile = this.db.select().from(usersTable).where(eq(usersTable.id, id))
        return userProfile
    }
    async deleteUser (id: number) {
        return this.db.delete(usersTable).where(eq(usersTable.id, id))
    }
    async updateUserProfile (id: number, profileData: any) {
        return this.db.update(profileTable).set(profileData).where(eq(profileTable.userId, id))
    }
    async updateUserRole (id: number, newRole: TRoles) {
        return this.db.update(usersTable).set({ roles: newRole }).where(eq(usersTable.id, id))
    }
}