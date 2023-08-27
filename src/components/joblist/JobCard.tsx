import { JobListing } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { convertEnumString } from "@/lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CalendarDays, CircleDollarSign, GraduationCap } from "lucide-react";

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
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="outline">
            <CircleDollarSign className="w-4 h-4 mr-1" /> {job.salary}
          </Badge>
          <Badge variant="outline">
            <CalendarDays className="w-4 h-4 mr-1" />
            {convertEnumString(job.jobType)}
          </Badge>
          <Badge variant="outline">
            <GraduationCap className="w-4 h-4 mr-1" />
            {convertEnumString(job.experienceLevel)}
          </Badge>
        </div>
        <Button size="sm">Read more</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;