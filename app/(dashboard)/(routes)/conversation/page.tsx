"use client";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { ChatCompletionRequestMessage } from "openai";

import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import Heading from "@/components/heading";
import { BotAvatar, UserAvatar } from "@/components/user-avatar";

const CoversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: data.prompt,
      };
      const newMessages = [...messages, userMessage];
      const res = await fetch("/api/conversation", {
        method: "POST",
        body: JSON.stringify({ messages: newMessages }),
      });
      const json = await res.json();
      setMessages((current) => [...current, userMessage, json]);
      form.reset();
    } catch (err: any) {
      //todo pro modal
      console.log(err);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversational AI"
        description="Chat with OpenAI's ChatGPT 3.5 Turbo."
        Icon={MessageSquare}
        iconColor="text-sky-600"
        bgColor="bg-sky-500/10"
      />
      {/* Input Area */}
      <div className="px-4 lg:px-8 mt-4">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        {...field}
                        placeholder="What is the capital of Japan?"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent rounded-lg placeholder:opacity-50 h-full w-full p-1"
                        disabled={isLoading}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
                type="submit"
              >
                Chat
              </Button>
            </form>
          </Form>
        </div>
        {/* Response Area */}
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          <div className="flex flex-col-reverse gap-y-4 flex-1">
            {messages.length === 0 && !isLoading && (
              <Empty label="No Coversation Started" />
            )}
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? " border border-black" : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoversationPage;
