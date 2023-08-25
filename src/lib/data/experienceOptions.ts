import { ExperienceLevel } from "@prisma/client";

type Option = {
  label: string;
  value: ExperienceLevel;
};

export const experienceOptions: Array<Option> = [
  {
    value: "junior",
    label: "Junior",
  },
  {
    value: "mid_level",
    label: "Mid Level",
  },
  {
    value: "senior",
    label: "Senior",
  },
];
