import { eq } from "drizzle-orm";
import { db } from "../db-index";
import { usersTable, profileTable } from "../db/schema";
import { TRoles, NewUsers, NewProfile, Profile, Users, UpdateUserProfile, UpdateUser } from "../types/user/user-types";



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
        return await this.db.insert(profileTable).values({ ...profileData, userId: id })
    }

    async getUser (id: number) {
        const [ user ] = await this.db.select().from(usersTable).where(eq(usersTable.id, id))
        const [ userProfile ] = await this.db.select().from(profileTable).where(eq(profileTable.userId, id))
        return { ...user, ...userProfile }
    }
    async updateUserProfile (id: number, profileData: UpdateUserProfile) {
        console.log(id, 'hello')
        await this.db.update(profileTable).set(profileData).where(eq(profileTable.userId, id))
    }
    async updateUser (id: number, userData: UpdateUser) {
        console.log('hello')
        await this.db.update(usersTable).set(userData).where(eq(usersTable.id, id))
    }
    async updateUserRole (id: number, newRole: TRoles) {
        return this.db.update(usersTable).set({ roles: newRole }).where(eq(usersTable.id, id))
    }
    async deleteUser (id: number) {
        return this.db.delete(usersTable).where(eq(usersTable.id, id))
    }
}