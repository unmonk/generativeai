"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversational AI",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Create Something
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          AI generative creation, powered by MercsClan
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer rounded-xl"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 rounded-full", tool.bgColor)}>
                <tool.icon size={32} className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-8 h-8" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
