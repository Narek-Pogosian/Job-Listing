import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonList = () => {
  const arr = new Array(6).fill(0);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {arr.map((_, i) => (
        <Card key={i}>
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
      ))}
    </div>
  );
};

export default SkeletonList;
