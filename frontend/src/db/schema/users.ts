import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";
import z from "zod";

export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const users = table(
  "users",
  {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    username: t.varchar("user_name", { length: 256 }),
    email: t.varchar().notNull(),
    role: rolesEnum().default("guest"),},
  (table) => [
    t.uniqueIndex("email_idx").on(table.email)
  ]
);

export const userZ = createSelectSchema(users)
export const insertUserZ = createInsertSchema(users)
export type userT = z.infer<typeof userZ>