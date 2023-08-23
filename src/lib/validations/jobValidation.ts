import { ExperienceLevel, JobType } from "@prisma/client";
import * as z from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }).max(50),
  details: z.string().optional(),
  city: z.string().min(1, { message: "City is required." }),
  company: z.string().min(1, { message: "Company is required." }),
  salary: z.coerce.number().min(0),
  jobType: z.nativeEnum(JobType),
  experienceLevel: z.nativeEnum(ExperienceLevel),
});

export type JobSchemaType = z.infer<typeof jobSchema>;
