import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        src={user?.profileImageUrl}
        alt={user?.username || "Avatar"}
      />
      <AvatarFallback>
        {user?.firstName?.charAt(0).toUpperCase()}
        {user?.lastName?.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/images/secondary.png" alt="Merc Chan" />
      <AvatarFallback>MC</AvatarFallback>
    </Avatar>
  );
};
