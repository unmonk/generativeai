import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { checkApiLimit, increaseApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!config.apiKey) {
      return new NextResponse("OpenAI Not Configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages Required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPremium = await checkSubscription();
    if (!freeTrial && !isPremium) {
      return new NextResponse("Free Trial Limit Reached", { status: 403 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    if (!isPremium) {
      await increaseApiLimitCount();
    }

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
