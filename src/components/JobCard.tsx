import { JobListing } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { convertEnumString } from "@/lib/utils";
import Badge from "@/components/Badge";

type Props = {
  job: JobListing;
};

const JobCard = ({ job }: Props) => {
  return (
    <Card key={job.id}>
      <CardHeader>
        <CardTitle className="md:text-lg">{job.title}</CardTitle>
        <CardDescription>
          <span className="mr-2 font-semibold">{job.company}</span>
          <span>{job.city}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{job.details}</p>
        <div className="flex gap-2 mt-auto">
          <Badge>{job.salary}</Badge>
          <Badge>{convertEnumString(job.jobType)}</Badge>
          <Badge>{convertEnumString(job.experienceLevel)}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
