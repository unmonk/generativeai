"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  Video,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FreeCounter } from "@/components/free-counter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-red-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-sky-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-emerald-500",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-indigo-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-orange-400",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-purple-600",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPremium: boolean;
}

const Sidebar = ({ apiLimitCount, isPremium = false }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Mercs" src="/images/secondary.png" sizes="33vw" />
          </div>
          <h1 className={cn("text-xl font-bold", montserrat.className)}>
            Mercs Generate
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-black/10 dark:hover:bg-white/10 hover:rounded-xl transition",
                pathname === route.href &&
                  "dark:bg-white/10 bg-black/10 rounded-xl"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-6 h-6 mr-4", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPremium={isPremium} />
    </div>
  );
};

export default Sidebar;
