"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { usePremiumModal } from "@/hooks/use-premium-modal";

interface FreeCounterProps {
  apiLimitCount: number;
  isPremium: boolean;
}

export const FreeCounter = ({
  apiLimitCount = 0,
  isPremium = false,
}: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);
  const premiumModal = usePremiumModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  if (isPremium) return null;

  return (
    <div className="px-3">
      <Card className="dark:bg-white/10 bg-black/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            variant="premium"
            className="w-full"
            onClick={premiumModal.onOpen}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
