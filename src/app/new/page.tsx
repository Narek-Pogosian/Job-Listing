"use client";

import { JobSchemaType } from "@/lib/validations/jobValidation";
import { createJob } from "@/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import JobForm from "@/components/forms/JobForm";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();

  const onSubmit = async (data: JobSchemaType) => {
    const { success } = await createJob(data);

    if (success) {
      router.push("/");
      // TODO Show toast success
    } else {
      // TODO Show toast error
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="mb-6 text-xl font-semibold md:text-2xl">
        Create new job listing
      </h1>
      <JobForm onSubmit={onSubmit}>
        <Button variant="outline" asChild>
          <Link href="/">Cancel</Link>
        </Button>
        <Button>Submit</Button>
      </JobForm>
    </div>
  );
};

export default Page;
