import JobList from "@/components/JobList";
import SearchForm from "@/components/forms/SearchForm";
import { SearchParams } from "@/lib/validations/searchValiditions";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <>
      <SearchForm
        searchParams={searchParams}
        key={Object.values(searchParams).join() + "form"}
      />
      <Suspense
        fallback={<p>Loading...</p>}
        key={Object.values(searchParams).join()}
      >
        <JobList searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default Page;
