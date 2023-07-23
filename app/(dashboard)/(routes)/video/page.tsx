"use client";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Video } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";

import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import toast from "react-hot-toast";
import { usePremiumModal } from "@/hooks/use-premium-modal";

const VideoPage = () => {
  const router = useRouter();
  const [video, setVideo] = useState<string>();
  const premiumModal = usePremiumModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);
      const res = await fetch("/api/video", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.status === 403) {
        premiumModal.onOpen();
        return;
      }
      const json = await res.json();
      setVideo(json[0]);
      form.reset();
    } catch (err: any) {
      toast.error(err.toString());
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video Generation"
        description="Turn your prompt into a video."
        Icon={Video}
        iconColor="text-indigo-600"
        bgColor="bg-indigo-500/10"
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
                        placeholder="Clown fish swimming in a coral reef"
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
                Generate
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
            {!video && !isLoading && (
              <Empty
                label="No Video Generated"
                image="/images/video_files.svg"
              />
            )}
            {video && (
              <video
                className="w-full aspect-video mt-8 rounded-lg border bg-black"
                controls
              >
                <source src={video} />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
