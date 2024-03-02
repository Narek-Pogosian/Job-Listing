import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b">
      <header className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold md:text-2xl">
          <Image
            src="/job-listing-logo.svg"
            alt="Job Listing"
            width={140}
            height={40}
          />
        </Link>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/listing/create">Create Listing</Link>
          </Button>
          <ToggleTheme />
        </div>
      </header>
    </div>
  );
};

export default Header;
