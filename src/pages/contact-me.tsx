import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/reveal";
import Input from "@/components/input";
import { Mail, Send, User } from "lucide-react";
import { Textarea } from "@/components/textarea";
import { NButton } from "@/components/button";
import React from "react";
import { Toaster } from "@/components/toaster";
import { toast } from "@/hooks/use-toast";

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setResult("");
      toast({
        title: "Missing Information",
        description: "Please fill in all the fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    formData.append("access_key", "68d0c713-8baa-49b7-9005-ea0fb8cf61dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      ref={ref}
      className="relative snap-start h-screen bg-black px-60 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white flex justify-center items-center flex-col gap-7 h-full w-full"
      >
        <Reveal>
          <h1 className="text-5xl flex justify-center items-center font-bold">
            {"{ CONTACT ME }"}
          </h1>
        </Reveal>
        <div className="flex justify-center h-full w-[60rem]  items-center">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 h-[26.5rem] w-[29rem] px-12 py-8 justify-center"
          >
            <div className="w-full flex flex-col gap-5">
              <Input
                name="name"
                icon={
                  <User
                    style={{
                      stroke: "#fff",
                      strokeWidth: 2.5,
                      strokeDasharray: "4,4",
                    }}
                  />
                }
                placeholder="Name"
              />
              <Input
                name="email"
                type="email"
                icon={
                  <Mail
                    style={{
                      stroke: "#fff",
                      strokeWidth: 2.5,
                      strokeDasharray: "4,4",
                    }}
                  />
                }
                placeholder="Email"
              />
            </div>
            <div className="felx flex-col gap-[.3125rem]">
              <span className="font-bold">Message</span>
              <Textarea name="message" className="h-[9rem]" />
            </div>
            <NButton
              type="submit"
              className="bg-black text-white border-white shadow-shadow"
            >
              MESSAGE{" "}
              <Send
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  stroke: "#fff",
                  strokeWidth: 2.5,
                  strokeDasharray: "4,4",
                }}
              />
            </NButton>
          </form>
        </div>
      </motion.div>
      <Toaster />
    </section>
  );
};

export default ContactMe;
