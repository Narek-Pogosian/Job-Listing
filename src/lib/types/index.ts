export interface SearchParams {
  city?: string;
  salary?: string;
  jobType?: "FULL_TIME" | "PART_TIME" | "INTERNSHIP";
  experienceLevel?: "JUNIOR" | "MID_LEVEL" | "SENIOR";
  page?: string;
}
