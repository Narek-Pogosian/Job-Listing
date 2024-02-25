import { db } from "@/lib/db";
import JobCard from "./JobCard";
import { SearchParams } from "@/lib/validations/search-validition";
import Pagination from "./Pagination";

const JobList = async ({ searchParams }: { searchParams: SearchParams }) => {
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

  return (
    <>
      {jobs.length === 0 ? (
        <p className="text-2xl text-center">No jobs found</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      <Pagination
        hasNext={jobs.length === 6}
        hasPrevious={Number(searchParams.page) > 1}
        currentPage={searchParams.page ? searchParams.page : 1}
      />
    </>
  );
};

export default JobList;
