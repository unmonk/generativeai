"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";

export const SubscriptionButton = ({
  isPremium = false,
}: {
  isPremium: boolean;
}) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/stripe");
      const data = await response.json();
      const { url } = data;

      window.location.href = url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPremium ? "default" : "premium"}
      disabled={loading}
      onClick={onClick}
    >
      {isPremium ? "Manage Subscription" : "Upgrade"}
      {!isPremium && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
