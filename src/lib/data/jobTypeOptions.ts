import { JobType } from "@prisma/client";

type Option = {
  label: string;
  value: JobType;
};

export const jobTypeOptions: Array<Option> = [
  {
    value: "full_time",
    label: "Full Time",
  },
  {
    value: "part_time",
    label: "Part Time",
  },
  {
    value: "internship",
    label: "Internship",
  },
];
