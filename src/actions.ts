"use server";

import { db } from "./lib/db";
import { JobSchemaType, jobSchema } from "./lib/validations/job-validation";
import { revalidatePath } from "next/cache";
import { JobSearchParams } from "./lib/validations/search-validition";

export const createJob = async (
  data: JobSchemaType
): Promise<{ success: boolean }> => {
  const validate = jobSchema.safeParse(data);

  if (validate.success) {
    try {
      await db.jobListing.create({
        data,
      });
      revalidatePath("/");

      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  return { success: false };
};

export const getJobs = async (searchParams: JobSearchParams) => {
  const jobs = await db.jobListing.findMany({
    where: {
      city: searchParams.city,
      jobType: searchParams.jobType,
      experienceLevel: searchParams.experienceLevel,
      salary: { gte: searchParams.salary ? parseInt(searchParams.salary) : 0 },
    },
    take: 6,
    skip: searchParams.page ? (Number(searchParams.page) - 1) * 6 : 0,
  });

  return jobs;
};
