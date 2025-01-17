"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function submitContactForm(formData: FormData) {
  try {
    const validatedFields = formSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    await resend.emails.send({
      from: "contact@yourdomain.com",
      to: "your@email.com",
      subject: `Contact Form: ${validatedFields.subject}`,
      text: `
        Name: ${validatedFields.name}
        Email: ${validatedFields.email}
        Message: ${validatedFields.message}
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch {
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
}
