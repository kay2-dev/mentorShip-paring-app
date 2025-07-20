import { usersTable } from "../db/schema";
import { UserRepository } from "./user-repository";
import { eq } from "drizzle-orm";


// i want the uSerRepository to represent the base class of this menbtorship Repository
export class MentorShipRepository extends UserRepository {
    constructor () {
        super()
    }

    async getAllMentors () {
        const mentors = await this.db.select().from(usersTable).where(eq(usersTable.roles, 'mentor'))
        return mentors.map(mentor => this.getUser(mentor.id))
    }

}