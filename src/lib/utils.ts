import { ExperienceLevel, JobType } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param str
 * @returns
 */
export function convertEnumString(str: JobType | ExperienceLevel) {
  return str.replace("_", " ").toLowerCase();
}
