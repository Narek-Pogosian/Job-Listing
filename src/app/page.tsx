import JobList from "@/components/joblist/JobList";
import SearchForm from "@/components/forms/SearchForm";
import SkeletonList from "@/components/joblist/SkeletonList";
import { Suspense } from "react";
import { searchSchema } from "@/lib/validations/search-validition";
import { type SearchParams } from "@/lib/helpers/search-params";

export const dynamic = "force-dynamic";

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { success } = searchSchema.safeParse(searchParams);

  if (!success) {
    throw new Error("Invalid search params");
  }

  return (
    <div className="h-full flex flex-col">
      <SearchForm
        searchParams={searchParams}
        key={Object.values(searchParams).join() + "form"}
      />
      <Suspense
        fallback={<SkeletonList />}
        key={Object.values(searchParams).join()}
      >
        <JobList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Page;
