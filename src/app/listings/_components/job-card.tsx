import { JobListing } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convertEnumToString } from "@/lib/utils";
import { CalendarDays, CircleDollarSign, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Props = {
  job: JobListing;
};

const JobCard = ({ job }: Props) => {
  return (
    <Card key={job.id}>
      <CardHeader>
        <CardTitle className="md:text-lg">{job.title}</CardTitle>
        <div className="flex">
          <p className="mr-2 font-semibold">{job.company}</p>
          <p className="capitalize">{job.city}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-8">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">
            <CircleDollarSign className="w-3 h-3 mr-1" /> {job.salary}
          </Badge>
          <Badge variant="outline">
            <CalendarDays className="w-3 h-3 mr-1" />
            {convertEnumToString(job.jobType)}
          </Badge>
          <Badge variant="outline">
            <GraduationCap className="w-4 h-4 mr-1" />
            {convertEnumToString(job.experienceLevel)}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
