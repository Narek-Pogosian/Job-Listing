import JobList from "@/app/listings/_components/job-list";
import JobSearchForm from "@/app/listings/_components/job-search-form";
import SkeletonList from "@/app/listings/_components/job-skeleton-list";
import { Suspense } from "react";
import { searchSchema } from "@/lib/validations/search-validition";
import { type SearchParams } from "@/lib/helpers/search-params";

export const dynamic = "force-dynamic";

const ListingsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { success } = searchSchema.safeParse(searchParams);

  if (!success) {
    throw new Error("Invalid search params");
  }

  return (
    <div className="h-full flex flex-col">
      <JobSearchForm
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

export default ListingsPage;