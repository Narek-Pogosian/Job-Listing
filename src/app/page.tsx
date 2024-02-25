import JobList from "@/components/joblist/JobList";
import SearchForm from "@/components/forms/SearchForm";
import { Suspense } from "react";
import SkeletonList from "@/components/joblist/SkeletonList";
import { Button } from "@/components/ui/button";
import { searchSchema } from "@/lib/validations/search-validition";

export const dynamic = "force-dynamic";

const Page = async ({ searchParams }: { searchParams: any }) => {
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
