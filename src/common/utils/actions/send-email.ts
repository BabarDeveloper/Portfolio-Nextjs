"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/common/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    // Send email to your email address (babardeveloper2@gmail.com)
    await resend.emails.send({
      from: "babardeveloper2@gmail.com",
      to: ["babardeveloper2@gmail.com"], // Send to your email address
      subject: "Message from contact form | PORTFOLIO",
      replyTo: senderEmail,
      text: `Message: ${message}\nSender Email: ${senderEmail}`,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data: "Email sent successfully!",
  };
};
