import { ExperienceLevel } from "@prisma/client";

type Option = {
  label: string;
  value: ExperienceLevel;
};

export const experienceOptions: Array<Option> = [
  {
    value: "JUNIOR",
    label: "Junior",
  },
  {
    value: "MID_LEVEL",
    label: "Mid Level",
  },
  {
    value: "SENIOR",
    label: "Senior",
  },
];
