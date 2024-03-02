import ListingPagination from "./listing-pagination";
import { JobListing } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convertEnumToString } from "@/lib/utils";
import { CalendarDays, CircleDollarSign, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { JobSearchParams } from "@/lib/validations/search-validition";
import { getJobs } from "@/data-access/listing/get-listings";

const JobList = async ({ searchParams }: { searchParams: JobSearchParams }) => {
  const { jobs, pageCount } = await getJobs(searchParams);

  const hasNext = () => {
    if (searchParams.page) {
      return Number(searchParams.page) < pageCount;
    } else {
      return pageCount > 1 ? true : false;
    }
  };

  return (
    <>
      {jobs.length === 0 ? (
        <p className="text-4xl font-semibold pt-14 text-center">
          No jobs found
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      <ListingPagination
        hasNext={hasNext()}
        hasPrevious={Number(searchParams.page) > 1}
        currentPage={searchParams.page ? searchParams.page : 1}
      />
    </>
  );
};

export default JobList;

const JobCard = ({ job }: { job: JobListing }) => {
  return (
    <Card key={job.id}>
      <CardHeader>
        <CardTitle className="md:text-lg">{job.title}</CardTitle>
        <div className="flex">
          <p className="mr-2 font-semibold">{job.company}</p>
          <p className="capitalize">{job.city}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-8">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">
            <CircleDollarSign className="w-3 h-3 mr-1" /> {job.salary}
          </Badge>
          <Badge variant="outline">
            <CalendarDays className="w-3 h-3 mr-1" />
            {convertEnumToString(job.jobType)}
          </Badge>
          <Badge variant="outline">
            <GraduationCap className="w-4 h-4 mr-1" />
            {convertEnumToString(job.experienceLevel)}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
