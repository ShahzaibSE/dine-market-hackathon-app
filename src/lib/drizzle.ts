import {
  pgTable,
  varchar,
  serial,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  product_id: varchar("product_id", {
    length: 255,
  }).notNull(),
  quantity: integer("quantity").notNull(),
  user_id: varchar("product_id", {
    length: 255,
  }).notNull(),
});

export const dbClient = drizzle(sql);
