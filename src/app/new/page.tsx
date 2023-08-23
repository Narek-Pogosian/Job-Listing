import CreateJob from "@/components/CreateJob";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="mb-6 text-xl font-semibold md:text-2xl">
        Create new job listing
      </h1>
      <CreateJob />
    </div>
  );
};

export default Page;
