import JobList from "@/components/joblist/JobList";
import SearchForm from "@/components/forms/SearchForm";
import { SearchParams } from "@/lib/validations/search-validition";
import { Suspense } from "react";
import SkeletonList from "@/components/joblist/SkeletonList";

export const dynamic = "force-dynamic";

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className="h-full flex flex-col">
      <SearchForm
        searchParams={searchParams}
        key={Object.values(searchParams).join() + "form"}
        // Using searchparams as key to remount on params change to update default values
      />
      <Suspense
        fallback={<SkeletonList />}
        key={Object.values(searchParams).join()}
        // Need key to show fallback when params change and new request is made
      >
        <JobList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Page;
