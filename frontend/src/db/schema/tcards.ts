import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const cardProperty = pgEnum("card_property", ["normal", "counter", "continious"])

export const tCards = table(
  "t_cards",
    {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: t.varchar().notNull(),
    effectText: t.text().notNull(),
    properties: cardProperty().default("normal"),
    imageUrl: t.varchar("image_url"),
    }
); 