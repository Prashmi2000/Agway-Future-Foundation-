import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    await resend.emails.send({
      from: "AGWAY Website <onboarding@resend.dev>",
      to: "agwayfuture@gmail.com",
      subject: `New Contact Message: ${subject || "Website Contact"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}