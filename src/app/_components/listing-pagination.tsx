"use client";

import { setNextPage, setPreviousPage } from "@/lib/helpers/search-params";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number | string;
};

const ListingPagination = ({ hasNext, hasPrevious, currentPage }: Props) => {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 mt-auto pt-6">
      <Button
        variant="ghost"
        disabled={!hasPrevious}
        onClick={() => router.push(setPreviousPage())}
      >
        Previous
      </Button>
      <span className="inline-flex items-center px-4 border rounded">
        {currentPage}
      </span>
      <Button
        variant="ghost"
        disabled={!hasNext}
        onClick={() => router.push(setNextPage())}
      >
        Next
      </Button>
    </div>
  );
};

export default ListingPagination;
