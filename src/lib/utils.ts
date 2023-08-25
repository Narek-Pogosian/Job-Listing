import { ExperienceLevel, JobType } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SearchSchemaType } from "./validations/searchValiditions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertEnumString(str: JobType | ExperienceLevel) {
  return str.replace("_", " ");
}

export function setSearchQueries(values: SearchSchemaType) {
  const searchParams = new URLSearchParams(window.location.search);

  if (values.city) {
    searchParams.set("city", values.city);
  } else {
    searchParams.delete("city");
  }

  if (values.experienceLevel) {
    searchParams.set("experienceLevel", values.experienceLevel);
  } else {
    searchParams.delete("experienceLevel");
  }

  if (values.jobType) {
    searchParams.set("jobType", values.jobType);
  } else {
    searchParams.delete("jobType");
  }

  if (values.salary) {
    searchParams.set("salary", values.salary.toString());
  } else {
    searchParams.delete("salary");
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
}
