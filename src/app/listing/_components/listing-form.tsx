"use client";

import { JobSchemaType, jobSchema } from "@/lib/validations/job-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobListing } from "@prisma/client";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { jobTypeOptions } from "@/lib/constants/job-type-options";
import { experienceOptions } from "@/lib/constants/experience-options";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import type { ReactNode } from "react";

type Props = {
  initialData?: JobListing;
  onSubmit: (data: JobSchemaType) => void;
  children: ReactNode; // Action buttons
};

const ListingForm = ({ initialData, children, onSubmit }: Props) => {
  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          details: initialData.details ? initialData.details : "", // null not allowed
        }
      : {
          title: "",
          city: "",
          company: "",
          details: "",
          experienceLevel: undefined,
          jobType: undefined,
          salary: 0,
        },
  });

  return (
    <Form {...form}>
      <div className="@container">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid @sm:grid-cols-2 grid-cols-1 gap-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="@sm:col-span-2">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem className="@sm:col-span-2">
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Details"
                    rows={4}
                    {...field}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="@sm:col-span-2">
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly salary</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Salary"
                    type="number"
                    {...field}
                    min={0}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a job type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobTypeOptions.map((option) => (
                      <SelectItem value={option.value} key={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {experienceOptions.map((option) => (
                      <SelectItem value={option.value} key={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end @sm:col-span-2 gap-4 mt-4">
            {children}
          </div>
        </form>
      </div>
    </Form>
  );
};

export default ListingForm;
