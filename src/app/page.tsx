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
        // Using searchparams as key to remount on params change to update default values
      />
      <Suspense
        fallback={<SkeletonList />}
        key={Object.values(searchParams).join()}
        // Need key to show fallback when params change and new request is made
      >
        <JobList searchParams={searchParams} />
      </Suspense>
      <div className="flex gap-4 justify-center py-20">
        <Button>Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
};

export default Page;
