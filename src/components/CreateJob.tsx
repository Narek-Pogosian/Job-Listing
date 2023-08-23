"use client";

import JobForm from "./JobForm";
import { Button } from "./ui/button";
import { JobSchemaType } from "@/lib/validations/jobValidation";
import { createJob } from "@/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateJob = () => {
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
    <JobForm onSubmit={onSubmit}>
      <Button variant="secondary" asChild>
        <Link href="/">Cancel</Link>
      </Button>
      <Button>Submit</Button>
    </JobForm>
  );
};

export default CreateJob;
