import Heading from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
  const isPremium = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage your account."
        Icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm my-4">
          {isPremium
            ? "🎉 You are a premium user! 🎉"
            : "You are not a premium user"}
        </div>
        <SubscriptionButton isPremium={isPremium} />
      </div>
    </div>
  );
};

export default SettingsPage;
