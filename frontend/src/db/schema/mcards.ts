import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const cardAttributes = pgEnum("card_attributes", ["earth", "fire", "water", "wind", "light", "dark", "divine"]);

export const mCards = table(
  "m_cards",
  {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: t.varchar().notNull(),
    effectText: t.text(),
    attribute: cardAttributes(),
    level: t.integer(),
    atk: t.integer(),
    def: t.integer(),
    properties: t.varchar().array(),
    imageUrl: t.varchar("image_url"),
  }
); 