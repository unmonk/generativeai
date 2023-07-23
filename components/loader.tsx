import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full p-20 flex flex-col gap-y-4 items-center justify-center">
      <div className="animate-spin h-16 w-16 relative aspect-square">
        <Image fill alt="logo" src={"/images/secondary.png"} sizes="33vw" />
      </div>
      <p>Merc chan is thinking...</p>
    </div>
  );
};
