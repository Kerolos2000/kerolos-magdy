"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message is too short"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function HomeContactUsSection() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      setStatus("sending");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="home-contact-us-section" className="py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-transparent rounded-2xl p-6 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-400">
              Contact <span className="font-bold dark:text-white">Me</span>
            </h2>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-transparent outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-transparent outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                {...register("message")}
                className="w-full h-28 rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-transparent outline-none resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-emerald-500 text-center text-sm">
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center text-sm">
                Failed to send. Try again.
              </p>
            )}
          </form>
        </div>

        <div className="col-span-12 md:col-span-6"></div>
      </div>
    </section>
  );
}
