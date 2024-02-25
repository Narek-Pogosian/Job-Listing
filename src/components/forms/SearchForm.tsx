"use client";

import {
  SearchParams,
  SearchSchemaType,
  searchSchema,
} from "@/lib/validations/search-validition";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { experienceOptions } from "@/lib/constants/experience-options";
import { jobTypeOptions } from "@/lib/constants/job-type-options";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { setSearchQueries } from "@/lib/utils";

const SearchForm = ({ searchParams }: { searchParams: SearchParams }) => {
  const form = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      city: searchParams.city ?? "",
      salary: searchParams.salary ? parseInt(searchParams.salary) : 0,
      experienceLevel: searchParams.experienceLevel,
      jobType: searchParams.jobType,
    },
  });

  const router = useRouter();
  const onSubmit = (values: SearchSchemaType) => {
    router.push(setSearchQueries(values));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid pb-6 mb-6 border-b gap-x-6 gap-y-3 md:grid-cols-2 xl:grid-cols-3"
      >
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="@sm:col-span-2">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a job type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={""} key={1}>
                    All
                  </SelectItem>
                  {jobTypeOptions.map((option) => (
                    <SelectItem value={option.value} key={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experienceLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={""} key={1}>
                    All
                  </SelectItem>
                  {experienceOptions.map((option) => (
                    <SelectItem value={option.value} key={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem className="@sm:col-span-2">
              <FormLabel>Minimum monthly salary</FormLabel>
              <FormControl>
                <Input placeholder="Salary" type="number" {...field} min={0} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-end gap-4">
          <Button type="submit">Search</Button>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;
