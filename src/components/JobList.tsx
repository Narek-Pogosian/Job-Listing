import { db } from "@/lib/db";
import JobCard from "./JobCard";
import { SearchParams } from "@/lib/types";

const JobList = async ({ searchParams }: { searchParams: SearchParams }) => {
  const jobs = await db.jobListing.findMany({
    where: {
      city: searchParams.city,
      jobType: searchParams.jobType,
      experienceLevel: searchParams.experienceLevel,
      salary: { gte: searchParams.salary ? parseInt(searchParams.salary) : 0 },
    },
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
