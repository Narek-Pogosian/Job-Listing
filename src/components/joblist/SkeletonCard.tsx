import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-5" />
        <div className="flex">
          <Skeleton className="h-4 mr-2 w-44" />
          <Skeleton className="h-4 w-44" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-8">
          <Skeleton className="h-4 w-44" />
          <Skeleton className="h-4 w-44" />
          <Skeleton className="h-4 w-44" />
        </div>
        <Skeleton className="h-7 w-44" />
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
