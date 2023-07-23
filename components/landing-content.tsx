"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tools } from "@/constants";
import { cn } from "@/lib/utils";

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl font-extrabold mb-10">Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {tools.map((item) => (
          <Card
            key={item.label}
            className={cn("bg-accent border-none", item.bgColor)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.label}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 flex justify-center">
                <item.icon className="h-10 w-10" />
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
