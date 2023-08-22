"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  const handleClick = () => {
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set("page", "2");
    searchParams.set("filter", "we");
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return <Button onClick={handleClick}>Search</Button>;
};

export default Search;
