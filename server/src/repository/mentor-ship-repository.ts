import { requestTable, usersTable } from "../db/schema";
import { NewRequest, TRequestStatus, UpdateRequest } from "../types/user/user-types";
import { UserRepository } from "./user-repository";
import { eq } from "drizzle-orm";



// i want the uSerRepository to represent the base class of this menbtorship Repository
// Todo track the requests the mentee 
export class MentorShipRepository extends UserRepository {
    constructor () {
        super()
    }

    async getAllMentors () {
        return await this.db.select().from(usersTable).where(eq(usersTable.roles, 'mentor'))
    }

    async createRequest (id: number) {
        return await this.db.insert(requestTable).values({ userId: id })
    }

    async updateRequestStatus (requestId: number, status: TRequestStatus) {
        await this.db.update(requestTable).set({ requestStatus: status }).where(eq(requestTable.id, requestId))
    }

    async addMentees (id: number) {
        const [ meenteesRequests ] = await this.db.select().from(requestTable).where(eq(requestTable.userId, id))
        await this.db.update(usersTable).set({ menteeId: meenteesRequests.userId }).where(eq(usersTable.roles, 'mentee'))
    }
    // assuming its only the mentor can see this
    async deleteRequests (requestId: number) {
        await this.db.delete(requestTable).where(eq(requestTable.id, requestId))
    }
}