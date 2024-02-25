"use server";

import { db } from "./lib/db";
import { JobSchemaType, jobSchema } from "./lib/validations/job-validation";
import { revalidatePath } from "next/cache";

export const createJob = async (
  data: JobSchemaType
): Promise<{ success: boolean }> => {
  const validate = jobSchema.safeParse(data);

  if (validate.success) {
    try {
      await db.jobListing.create({
        data,
      });
      revalidatePath("/");

      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  return { success: false };
};
