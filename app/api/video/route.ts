import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { checkApiLimit, increaseApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!replicate.auth) {
      return new NextResponse("Replicate Not Configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt Required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPremium = await checkSubscription();
    if (!freeTrial && !isPremium) {
      return new NextResponse("Free Trial Limit Reached", { status: 403 });
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt,
        },
      }
    );
    if (!isPremium) {
      await increaseApiLimitCount();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log("[VIDEO ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
