import { ExperienceLevel, JobType } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertEnumToString(str: JobType | ExperienceLevel) {
  return str.replace("_", " ");
}
