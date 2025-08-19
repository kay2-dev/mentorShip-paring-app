import { table, timeStamp } from "console";
import { integer, pgEnum, pgTable, varchar, text, timestamp, uniqueIndex, foreignKey, date, serial, unique } from "drizzle-orm/pg-core";

export const userEnum = pgEnum('user-roles', [ 'mentor', 'mentee', 'admin' ])
export const requestStatusEnum = pgEnum('request-status', [ 'accepted', 'declined', 'pending' ])
export const sessionStatusEnum = pgEnum('session-status', [ 'scheduled', 'cancelled', 'completed', 'expired' ])


// Todo for better structure we would create a request table


export const requestTable = pgTable("requests", {
    id: serial('id').primaryKey().notNull(),
    mentorId: integer('mentor_id').references(() => usersTable.id).notNull(),
    menteeId: integer('mentee_id').references(() => usersTable.id).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    requestStatus: requestStatusEnum('request-status').notNull().default('pending')
}, ((table) => ({
    uniqueMentorShipParing: unique().on(table.menteeId, table.mentorId)
}))
)

export const mentorShipParingTable = pgTable("mentor-ship-paring-table", {
    id: serial('id').primaryKey().notNull(),
    mentorId: integer('mentor_id').references(() => usersTable.id, { onDelete: "cascade" }),
    menteeId: integer('mentee_id').references(() => usersTable.id, { onDelete: "cascade" }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, ((table) => ({
    uniquePair: unique().on(table.menteeId, table.mentorId)
})
))

export const usersTable = pgTable("users", {
    id: serial('id').primaryKey().notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 100 }).notNull(),
    roles: userEnum('roles').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table) => ({
    emailIndex: uniqueIndex('email_index').on(table.email)
}))


export const profileTable = pgTable("user_profiles", {
    id: serial('id').primaryKey().notNull(),
    bio: varchar('bio', { length: 255 }).notNull(),
    skills: text('skills').array().notNull(),
    goals: text('goals').array().notNull(),
    userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table) => ({
    userIdIndex: uniqueIndex('user_id_index').on(table.userId)
}))


export const availability = pgTable("availabilities", {
    id: serial('id').primaryKey().notNull(),
    mentorId: integer('mentor_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
    dateTime: date('date').notNull(),
    startTime: timestamp('start_time').notNull(),
    endTime: timestamp('end_time').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table) => ({
    mentorIdIndex: uniqueIndex('mentor_id_index').on(table.mentorId)
}))

export const session = pgTable("session", {
    id: serial('id').primaryKey().notNull(),
    mentorId: integer('mentor_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
    menteeId: integer('mentee_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
    startTime: timestamp('start_time').notNull(),
    endTime: timestamp('end_time').notNull(),
    joinLink: varchar('join_link').notNull(),
    platform: varchar('platform').notNull(),
    sessionStatus: sessionStatusEnum('session-status').notNull().default('scheduled'),
    feedBack: varchar('feed_back', { length: 255 }),
    rating: integer('rating'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
})

