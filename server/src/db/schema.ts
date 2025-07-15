import { integer, pgEnum, pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";

const rolesEnum = pgEnum('roles', [ 'mentee', 'mentor', 'admin' ])

export const usersTable = pgTable("users", {
    id: integer('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 100 }).notNull(),
    roles: rolesEnum('roles')
})

export const profileTable = pgTable("userprofile", {
    id: integer('id').primaryKey(),
    bio: varchar('bio', { length: 255 }).notNull(),
    skills: text('skills').array().notNull(),
    goals: text('goals').array().notNull(),
    userId: integer("user_id").notNull().references(() => usersTable.id)
})

export const availability = pgTable("avabilitiy", {
    id: integer('id').primaryKey().notNull(),
    mentorId: integer('mentor_id').notNull().references(() => usersTable.id),
    start: timestamp('start_time').notNull(),
    end: timestamp('end_time').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const session = pgTable("session", {
    id: integer('id').primaryKey().notNull(),
    mentorId: integer('mentor_id').notNull().references(() => usersTable.id),
    menteeId: integer('mentee_id').notNull().references(() => usersTable.id),
    date: timestamp('date').notNull(),
    feedBack: varchar('feed_back', { length: 255 }).notNull(),
    rating: integer('rating').notNull()
})