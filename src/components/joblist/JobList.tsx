import { db } from "@/lib/db";
import JobCard from "./JobCard";
import { JobSearchParams } from "@/lib/validations/search-validition";
import Pagination from "./Pagination";
import { getJobs } from "@/actions";

const JobList = async ({ searchParams }: { searchParams: JobSearchParams }) => {
  const jobs = await getJobs(searchParams);

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
