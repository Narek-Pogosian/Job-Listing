import ListingPagination from "./listing-pagination";
import JobCard from "./job-card";
import { JobSearchParams } from "@/lib/validations/search-validition";
import { getJobs } from "@/data-access/listing/get-listings";

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

      <ListingPagination
        hasNext={jobs.length === 6}
        hasPrevious={Number(searchParams.page) > 1}
        currentPage={searchParams.page ? searchParams.page : 1}
      />
    </>
  );
};

export default JobList;
