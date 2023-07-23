"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = ({
  apiLimitCount = 0,
  isPremium = false,
}: {
  apiLimitCount: number;
  isPremium: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Toggle Sidebar</span>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <Sidebar apiLimitCount={apiLimitCount} isPremium={isPremium} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
