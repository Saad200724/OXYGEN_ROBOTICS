import { pgTable, text, serial, integer, doublePrecision, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const chapters = pgTable("chapters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  lat: doublePrecision("lat").notNull(),
  lng: doublePrecision("lng").notNull(),
  executiveLead: text("executive_lead").notNull(),
  memberCount: integer("member_count").notNull().default(0),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(), // 'R&D' or 'Completed'
  teamMembers: text("team_members").notNull(),
  isLive: boolean("is_live").notNull().default(false),
});

export const insertMessageSchema = createInsertSchema(messages);
export const insertChapterSchema = createInsertSchema(chapters);
export const insertProjectSchema = createInsertSchema(projects);

export type InsertMessage = typeof messages.$inferInsert;
export type Message = typeof messages.$inferSelect;
export type InsertChapter = typeof chapters.$inferInsert;
export type Chapter = typeof chapters.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;
export type Project = typeof projects.$inferSelect;
