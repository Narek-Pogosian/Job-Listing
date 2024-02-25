import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      <Button asChild>
        <Link href="/listings">Listings</Link>
      </Button>
    </div>
  );
}

export default HomePage;
