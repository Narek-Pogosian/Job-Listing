import JobList from "@/components/JobList";
import SearchForm from "@/components/SearchForm";
import { SearchParams } from "@/lib/types";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <>
      <SearchForm searchParams={searchParams} />
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
