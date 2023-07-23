import { MessageSquare, ImageIcon, Video, Music, Code } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
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
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];
