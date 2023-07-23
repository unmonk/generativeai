import { DarkToggle } from "@/components/darktoggle";
import MercsLogo from "@/components/ui/mercslogo";
import MercsWordmark from "@/components/ui/mercswordmark";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { LandingNav } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

export default function LandingPage() {
  return (
    <div className="h-full">
      <LandingNav />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
