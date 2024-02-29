import "server-only";

import { db } from "@/lib/db";
import { JobSearchParams } from "@/lib/validations/search-validition";

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
