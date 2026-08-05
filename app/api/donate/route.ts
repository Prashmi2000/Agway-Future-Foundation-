import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "agwayfuture@gmail.com",
      subject: "New Donation Details - AGWAY Future Foundation",
      html: `
        <h2>Donation Details</h2>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Amount: ${data.amount}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}