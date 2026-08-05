import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, amount, message } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "agwayfuture@gmail.com",
      subject: "New Donation Request - AGWAY Future Foundation",
      html: `
        <h2>New Donation Details</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Amount:</b> ${amount}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Donation details sent successfully",
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}