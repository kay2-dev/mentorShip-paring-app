
import { eq } from 'drizzle-orm'
import { db } from '../../../db-index'
import { availability, session } from '../../../db/schema'
import { TAvailability } from '../../../lib/zod-validations-schema'
import { NewAvaliability, NeWSessionPayload } from '../../../types/user/user-types'

export class SessionRepository {
    db: typeof db
    constructor () {
        this.db = db
    }

    // set weeklyAvliabilityBolck.
    async setAvailabiltBlock (data: NewAvaliability) {
        return await this.db.insert(availability).values({ ...data })
    }
    async getAvailbility (mentorId: number) {
        return this.db.select().from(availability).where(eq(availability.mentorId, mentorId))
    }
    async getOneAvailbility (id: number) {
        return this.db.select().from(availability).where(eq(availability.id, id))
    }

    async updateAvalibiity (id: number, data: Partial<NewAvaliability>) {
        return this.db.update(availability).set(data).where(eq(availability.id, id))
    }
    async createSession (sessionPayload: NeWSessionPayload) {
        return await this.db.insert(session).values(sessionPayload)
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