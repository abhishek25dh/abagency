"use server";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  service: z.enum(["Video Editing", "Web Design", "Both"], {
    errorMap: () => ({ message: "Please select a service." }),
  }),
  description: z.string().min(10, { message: "Please provide a brief description (min. 10 characters)." }),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: "Invalid form data." };
  }

  // Here you would integrate with an email service like Resend, SendGrid, etc.
  // For now, we'll just log the data to the server console.
  console.log("New contact form submission:", result.data);

  // You can return a success or error message.
  return { success: true, message: "Thank you for your message! We'll be in touch soon." };
}
