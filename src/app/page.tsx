import { ToggleTheme } from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const jobs = await db.jobListing.findMany();

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold md:text-4xl">Job Listings</h1>
        <div className="flex gap-2">
          <ToggleTheme />
          <Button asChild>
            <Link href="/new">Create Listing</Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle className="md:text-lg">{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt architecto, optio id sequi corporis consequatur unde
                accusantium quod provident assumenda.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Page;
