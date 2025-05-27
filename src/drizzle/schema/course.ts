import { relations } from "drizzle-orm";
import { pgTable,  text, timestamp, uuid } from "drizzle-orm/pg-core";
import { id, createdAt, updatedAt } from "../schemaHelpers";
import { CourseProductTable } from "./courseProduct";
import { UserCourseAccessTable } from "./userCourseAccess";
import { CourseSectionTable } from "./courseSection";

export const CourseTable = pgTable("course", {
    id,
    name: text().notNull(),
    description: text().notNull(),
    createdAt,
    updatedAt
})

export const CourceRelationships = relations(CourseTable, 
    ({ many }) => ({
        courseProducts: many(CourseProductTable),
        userCourseAccesses: many(UserCourseAccessTable),
        courseSections: many(CourseSectionTable),
}))
