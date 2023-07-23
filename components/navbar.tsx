import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { DarkToggle } from "./darktoggle";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
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
