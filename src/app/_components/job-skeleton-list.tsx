import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const JobSkeletonList = () => {
  const arr = new Array(6).fill(0);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {arr.map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-7 mb-1.5" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-44" />
              <Skeleton className="h-5 w-44" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mt-8">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobSkeletonList;
