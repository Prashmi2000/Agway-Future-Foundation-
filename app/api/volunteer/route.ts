import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      city,
      area,
      message,
    } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "agwayfuture@gmail.com",
      subject: "New Volunteer Application - AGWAY Future Foundation",
      html: `
        <h2>New Volunteer Details</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Area of Interest:</b> ${area}</p>
        <p><b>Message:</b> ${message}</p>

      `,
    });

    return NextResponse.json({
      success: true,
      message: "Volunteer application sent successfully",
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}