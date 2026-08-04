"use client";

import { useState } from "react";
import { DonateOptions } from "@/components/donate-options";

export default function DonatePage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Donation details sent successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        amount: "",
      });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-6">
          Donate Now
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Your contribution helps us serve people and create a better future.
        </p>

        <DonateOptions />

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">

          <input
            className="border p-3 w-full"
            placeholder="Your Name"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input
            className="border p-3 w-full"
            placeholder="Email"
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <input
            className="border p-3 w-full"
            placeholder="Phone"
            value={form.phone}
            onChange={(e)=>setForm({...form,phone:e.target.value})}
          />

          <input
            className="border p-3 w-full"
            placeholder="Donation Amount"
            value={form.amount}
            onChange={(e)=>setForm({...form,amount:e.target.value})}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Submit Donation
          </button>

        </form>

      </div>
    </main>
  );
}