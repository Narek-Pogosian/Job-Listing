import "server-only";

import { db } from "@/lib/db";
import { JobSearchParams } from "@/lib/validations/search-validition";

const pageSize = 6;

export const getJobs = async (searchParams: JobSearchParams) => {
  const where = {
    city: searchParams.city,
    jobType: searchParams.jobType,
    experienceLevel: searchParams.experienceLevel,
    salary: { gte: searchParams.salary ? parseInt(searchParams.salary) : 0 },
  };

  const [jobs, count] = await Promise.all([
    db.jobListing.findMany({
      where,
      take: pageSize,
      skip: searchParams.page ? (Number(searchParams.page) - 1) * pageSize : 0,
    }),
    db.jobListing.count({
      where,
    }),
  ]);

  const pageCount = Math.ceil(count / pageSize);

  return { jobs, pageCount };
};
