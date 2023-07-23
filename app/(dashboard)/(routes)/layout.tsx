import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="h-full relative">
      <Navbar />
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-300 md:w-72">
        <Sidebar apiLimitCount={apiLimitCount} isPremium={false} />
      </div>
      <main className="md:pl-72">{children}</main>
    </div>
  );
};

export default DashboardLayout;
