import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { checkApiLimit, increaseApiLimitCount } from "@/lib/api-limit";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must only answer in markdown snippets. Use code comments to explain your code.",
};

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
    if (!freeTrial) {
      return new NextResponse("Free Trial Limit Reached", { status: 403 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    await increaseApiLimitCount();

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODE ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
