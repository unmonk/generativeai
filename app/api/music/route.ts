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
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    );
    if (!isPremium) {
      await increaseApiLimitCount();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log("[MUSIC ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
