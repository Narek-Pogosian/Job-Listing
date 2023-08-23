import { JobType } from "@prisma/client";

type Option = {
  label: string;
  value: JobType;
};

export const jobTypeOptions: Array<Option> = [
  {
    value: "FULL_TIME",
    label: "Full Time",
  },
  {
    value: "PART_TIME",
    label: "Part Time",
  },
  {
    value: "INTERNSHIP",
    label: "Internship",
  },
];
