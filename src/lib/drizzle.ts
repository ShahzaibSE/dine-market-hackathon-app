import {
  pgTable,
  varchar,
  serial,
  integer,
  jsonb
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
  name: varchar("name", {
    length: 255,
  }).notNull(),
  description: varchar("description", {
    length: 255,
  }),
  price: integer("price").notNull(),
  gender: varchar("gender", {length: 255}).notNull(),
  category: varchar("category", {length: 255}),
  imageUrl: jsonb("imageurl").notNull(),
  previews: jsonb("previews").array(), 
});

export const dbClient = drizzle(sql);
