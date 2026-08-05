"use client";

import { useState } from "react";
import Script from "next/script";
import { DonateOptions } from "@/components/donate-options";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function DonatePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    amount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.category || !form.amount) {
      alert("Please fill all required fields.");
      return;
    }

    if (Number(form.amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    try {
      setLoading(true);

      // Create Razorpay Order
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(form.amount),
        }),
      });

      const order = await orderResponse.json();

      if (!order.id) {
        alert("Unable to create payment order.");
        return;
      }


      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: "INR",

        name: "AGWAY Future Foundation",

        description: form.category,

        order_id: order.id,


        handler: async function () {

          const donationResponse = await fetch("/api/donate", {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(form),
          });


          if (donationResponse.ok) {

            alert(
              "Thank you! Your donation has been received."
            );


            setForm({
              name: "",
              email: "",
              phone: "",
              category: "",
              amount: "",
              message: "",
            });

          } else {

            alert(
              "Payment successful but donation save failed."
            );

          }
        },


        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },


        notes: {
          category: form.category,
          message: form.message,
        },


        theme: {
          color: "#1d4ed8",
        },
      };


      const razorpay = new window.Razorpay(options);

      razorpay.open();


    } catch (error) {

      console.error(error);

      alert(
        "Payment failed. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
      />


      <main className="min-h-screen bg-gray-50 py-12">

        <div className="max-w-5xl mx-auto px-6">


          <h1 className="text-4xl font-bold text-center text-blue-900">
            Donate Now
          </h1>


          <p className="text-center text-gray-600 mt-3 mb-10">
            Your contribution helps us serve humanity through education,
            healthcare, food, marriage support and social welfare.
          </p>


          <DonateOptions />


          <div className="mt-10 rounded-3xl bg-white shadow-2xl border border-gray-200 p-8">


            <h2 className="text-2xl font-bold mb-6 text-blue-900">
              Donor Details
            </h2>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >


              <input
                type="text"
                placeholder="Full Name *"
                className="w-full rounded-xl p-3 bg-white border border-gray-300 text-gray-900"
                value={form.name}
                onChange={(e)=>
                  setForm({...form,name:e.target.value})
                }
              />


              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl p-3 bg-white border border-gray-300 text-gray-900"
                value={form.email}
                onChange={(e)=>
                  setForm({...form,email:e.target.value})
                }
              />


              <input
                type="tel"
                placeholder="Mobile Number *"
                className="w-full rounded-xl p-3 bg-gray-900 border border-gray-600 text-white"
                value={form.phone}
                onChange={(e)=>
                  setForm({...form,phone:e.target.value})
                }
              />


              <select
                className="w-full rounded-xl p-3 bg-white border border-gray-300 text-gray-900"
                value={form.category}
                onChange={(e)=>
                  setForm({...form,category:e.target.value})
                }
              >

                <option value="">
                  Select Donation Category *
                </option>

                <option>Langer</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>All Religion Marriage</option>
                <option>Elder Care</option>
                <option>General Donation</option>

              </select>



              <input
                type="number"
                min="1"
                placeholder="Donation Amount (₹) *"
                className="w-full rounded-xl p-3 bg-gray-900 border border-gray-600 text-white"
                value={form.amount}
                onChange={(e)=>
                  setForm({...form,amount:e.target.value})
                }
              />



              <textarea
                placeholder="Message (Optional)"
                className="w-full rounded-xl p-3 bg-gray-900 border border-gray-600 text-white"
                value={form.message}
                onChange={(e)=>
                  setForm({...form,message:e.target.value})
                }
              />



              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-700 hover:bg-blue-800 text-white py-3 font-bold"
              >

                {loading
                  ? "Processing..."
                  : "Proceed to Payment"
                }

              </button>


            </form>

          </div>

        </div>

      </main>
    </>
  );
}
