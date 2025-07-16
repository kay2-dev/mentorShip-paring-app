import { integer, pgEnum, pgTable, varchar, text, timestamp, uniqueIndex, foreignKey, date, serial } from "drizzle-orm/pg-core";

export const userEnum = pgEnum('user-roles', [ 'mentor', 'mentee', 'admin' ])



export const usersTable = pgTable("users", {
    id: serial('id').primaryKey().notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 100 }).notNull(),
    roles: userEnum('roles'),
    mentorId: integer('mentor_id'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()

}, (table) => ({
    mentorFk: foreignKey({
        columns: [ table.mentorId ],
        foreignColumns: [ table.id ],
        name: 'mento_fk',
    }).onDelete('set null'),
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
    date: date('date').notNull(),
    start: timestamp('start_time').notNull(),
    end: timestamp('end_time').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table) => ({
    mentorIdIndex: uniqueIndex('mentor_id_index').on(table.mentorId)
}))

export const session = pgTable("session", {
    id: serial('id').primaryKey().notNull(),
    mentorId: integer('mentor_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
    menteeId: integer('mentee_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
    date: timestamp('date').notNull(),
    feedBack: varchar('feed_back', { length: 255 }),
    rating: integer('rating').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
})

