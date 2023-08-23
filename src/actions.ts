"use server";

import { db } from "./lib/db";
import { JobSchemaType, jobSchema } from "./lib/validations/jobValidation";
import { revalidatePath } from "next/cache";

/**
 * ! redirect didnt work
 * @param data comes from jobform
 * @returns { success: boolean }
 */
export const createJob = async (
  data: JobSchemaType
): Promise<{ success: boolean }> => {
  const validate = jobSchema.safeParse(data);

  if (validate.success) {
    try {
      await db.jobListing.create({
        data: data,
      });
      revalidatePath("/");

      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  return { success: false };
};
