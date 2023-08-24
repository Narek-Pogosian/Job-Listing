import JobCard from "@/components/JobCard";
import SearchForm from "@/components/SearchForm";

import { db } from "@/lib/db";
import React from "react";

const Page = async () => {
  const jobs = await db.jobListing.findMany();

  return (
    <>
      <SearchForm />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Page;
