import { ExperienceLevel, JobType } from "@prisma/client";
import * as z from "zod";

export const searchSchema = z.object({
  city: z
    .string()
    .optional()
    .transform((arg) => arg?.toLocaleLowerCase()),
  salary: z.coerce.number().min(0).optional(),
  jobType: z.union([z.nativeEnum(JobType), z.literal("")]).optional(),
  experienceLevel: z
    .union([z.nativeEnum(ExperienceLevel), z.literal("")])
    .optional(),
});

export type SearchSchemaType = z.infer<typeof searchSchema>;

// City will be stored as lowercase in db
export interface SearchParams {
  city?: string;
  salary?: string;
  jobType?: JobType;
  experienceLevel?: ExperienceLevel;
  page?: string;
}