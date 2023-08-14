import {
  pgTable,
  varchar,
  serial,
  integer,
  jsonb,
  text,
  json,
} from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

// export const cartTable = pgTable("cart", {
//   id: serial("id").primaryKey(),
//   product_id: varchar("product_id", {
//     length: 255,
//   }).notNull(),
//   quantity: integer("quantity").notNull(),
//   user_id: varchar("product_id", {
//     length: 255,
//   }).notNull(),
//   name: varchar("name", {
//     length: 255,
//   }).notNull(),
//   description: varchar("description", {
//     length: 255,
//   }),
//   price: text("price").notNull(),
//   gender: varchar("gender", {length: 255}).notNull(),
//   category: varchar("category", {length: 255}),
//   imageUrl: json("imageurl").notNull(),
//   previews: json("previews").array(),
// });

// --- Version 2 --- //
// export const cartTable = pgTable("cart", {
//   id: serial("id").primaryKey(),
//   product_id: varchar("product_id", {
//     length: 255,
//   }).notNull(),
//   user_id: varchar("user_id", {
//     length: 255,
//   }).notNull(),
// });

// --- Version 3 --- //
export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", {
    length: 255,
  }).notNull(),
  cartDetails: json("product_details")
    .array()
    .notNull(),
  totalPrice: integer("total_price").notNull(),
  cartCount: integer("cart_count").notNull(),
});

export const dbClient = drizzle(sql);
