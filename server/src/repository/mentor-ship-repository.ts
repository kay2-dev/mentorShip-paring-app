import { mentorMenteeTable, requestTable, usersTable } from "../db/schema";
import { NewRequest, TRequestStatus, UpdateRequest } from "../types/user/user-types";
import { UserRepository } from "./user-repository";
import { eq } from "drizzle-orm";



// i want the uSerRepository to represent the base class of this menbtorship Repository
// Todo track the requests the mentee
// they should be a request list and every request list should belong to a mentor
// for us to get the mentor request list we would fetch all request where mentor id is = to id provided
export class MentorShipRepository extends UserRepository {
    constructor () {
        super()
    }

    async getAllMentors () {
        return await this.db.select().from(usersTable).where(eq(usersTable.roles, 'mentor'))
    }

    async createRequest (mentorId: number, menteeId: number) {
        return await this.db.insert(requestTable).values({ mentorId: mentorId, menteeId: menteeId })
    }

    async getAllRequestsSent (menteeId: number) {
        return await this.db.select().from(requestTable).where(eq(requestTable.menteeId, menteeId))
    }
    async getAllRequestsRecived (mentorId: number) {
        return await this.db.select().from(requestTable).where(eq(requestTable.mentorId, mentorId))
    }
    async updateRequestStatus (requestId: number, status: TRequestStatus) {
        await this.db.update(requestTable).set({ requestStatus: status }).where(eq(requestTable.id, requestId))
    }


    async addStatus (id: number) {
        const [ meenteesRequests ] = await this.db.select().from(requestTable).where(eq(requestTable.menteeId, id))
        await this.db.insert(mentorMenteeTable).values({ menteeId: meenteesRequests.menteeId, mentorId: meenteesRequests.mentorId })
    }
    // assuming its only the mentor can see this
    async deleteRequests (requestId: number) {
        await this.db.delete(requestTable).where(eq(requestTable.id, requestId))
    }
}