import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { DarkToggle } from "./darktoggle";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPremium = false;

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} isPremium={isPremium} />
      <div className="flex w-full justify-end">
        <div className="flex items-center gap-x-4">
          <UserButton afterSignOutUrl="/" />
          <DarkToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
