"use client";

import { JobSchemaType } from "@/lib/validations/job-validation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ListingForm from "@/app/listing/_components/listing-form";
import { createJob } from "../_actions";

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
      <ListingForm onSubmit={onSubmit}>
        <Button variant="outline" asChild>
          <Link href="/">Cancel</Link>
        </Button>
        <Button>Submit</Button>
      </ListingForm>
    </div>
  );
};

export default Page;
