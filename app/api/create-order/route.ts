import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: "Amount required" },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `agway_${Date.now()}`,
    });

    return NextResponse.json(order);

  } catch (error) {
    console.error("Razorpay Error:", error);

    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}