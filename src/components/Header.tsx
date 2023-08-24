import { ToggleTheme } from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b shadow">
      <header className="container flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-semibold md:text-2xl">
          Job Listings
        </Link>
        <div className="flex gap-2">
          <ToggleTheme />
          <Button asChild>
            <Link href="/new">Create Listing</Link>
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
