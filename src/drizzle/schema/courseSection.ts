import { relations } from "drizzle-orm";
import { pgTable,  text, integer, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";
import { id, createdAt, updatedAt } from "../schemaHelpers";
import { CourseTable } from "./course";
import { LessonTable } from "./lesson"

export const courseSectionStatuses = ["public", "private"] as const
export type CourseSectionStatus = (typeof courseSectionStatuses)[number]
export const courseSectionStatusEnum = pgEnum("product_status", courseSectionStatuses)

export const CourseSectionTable = pgTable("courseSections", {
    id,
    name: text().notNull(),
    status: courseSectionStatusEnum("status").notNull().default("private"),
    order: integer().notNull(),
    courseId: uuid().notNull().references(() => CourseTable.id, { onDelete: "cascade"}),
    createdAt,
    updatedAt
})

export const CourseSectionRelationships = relations(
    CourseSectionTable,
  ({ many, one }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.courseId],
      references: [CourseTable.id],
    }),
    lessons: many(LessonTable),
  })
)
