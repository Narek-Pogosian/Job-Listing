"use client";

import { setNextPage, setPreviousPage } from "@/lib/helpers/search-params";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number | string;
};

const Pagination = ({ hasNext, hasPrevious, currentPage }: Props) => {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 mt-auto pt-6">
      <Button
        variant="outline"
        disabled={!hasPrevious}
        onClick={() => router.push(setPreviousPage())}
      >
        Previous
      </Button>
      <span className="inline-flex items-center px-4 border rounded">
        {currentPage}
      </span>
      <Button
        variant="outline"
        disabled={!hasNext}
        onClick={() => router.push(setNextPage())}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
