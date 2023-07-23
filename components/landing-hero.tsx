"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Generative AI toolkit for</h1>
        <div className="bg-gradient-to-r from-rose-500 via-primary to-rose-500 bg-clip-text text-transparent">
          <h1>Mercs</h1>
        </div>
      </div>
      <div className="text-black dark:text-zinc-400 text-sm md:text-xl font-light ">
        Create images, videos, music, code, and conversation with generative AI
        models.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-black dark:text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
