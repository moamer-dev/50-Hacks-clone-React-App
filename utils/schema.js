import { serial, pgTable, varchar, integer, timestamp, pgSchema } from "drizzle-orm/pg-core";


export const hacks = pgTable("hacks", {
    id: serial('id').primaryKey(),
    content: varchar('content').notNull(),
    username: varchar('username').notNull(),
    vote: integer('vote').default(0),
    created_at: varchar('created_at').notNull(),
});