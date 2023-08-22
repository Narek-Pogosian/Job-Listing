import Search from "@/components/Search";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold md:text-4xl">Job Listings</h1>
        <div className="flex gap-2">
          <ToggleTheme />
          <Button asChild variant="outline">
            <Link href="/new">Create Listing</Link>
          </Button>
        </div>
      </div>
      <Input />
      <Search />
    </>
  );
};

export default Page;
