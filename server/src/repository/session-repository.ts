import { db } from "../db-index"
import { availability, session } from "../db/schema"
import { eq } from 'drizzle-orm'

export class SessionRepository {
    db: typeof db
    constructor () {
        this.db = db
    }

    // set weeklyAvliabilityBolck.
    async setAvailabiltBlock (avalibityBlock: any) {
        return await this.db.insert(availability).values(avalibityBlock)
    }
    async getAvailbility (mentorId: number) {
        return this.db.select().from(availability).where(eq(availability.mentorId, mentorId))
    }
    async getOneAvailbility (id: number) {
        return this.db.select().from(availability).where(eq(availability.id, id))
    }

    async createSession (session: any) {
        return await this.db.insert(session).values(session)
    }

    async getAllSession () {
        const [ allSessions ] = await this.db.select().from(session)
        return allSessions
    }

    async getOneSession (id: number) {
        const sessionOne = await this.db.select().from(session).where(eq(session.id, id))
        return sessionOne[ 0 ]
    }

    async updateSession (id: number, values: any) {
        return await this.db.update(session).set(values).where(eq(session.id, id))
    }

}