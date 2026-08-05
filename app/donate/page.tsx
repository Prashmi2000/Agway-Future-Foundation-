"use client";

import { useState } from "react";
import { DonateOptions } from "@/components/donate-options";

export default function DonatePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    amount: "",
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

      const res = await fetch("/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Thank you! Your donation request has been submitted.");

        setForm({
          name: "",
          email: "",
          phone: "",
          category: "",
          amount: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
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

        <div className="mt-10 rounded-3xl bg-white shadow-lg border p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Donor Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Full Name *"
              className="w-full border rounded-xl p-3"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-3"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Mobile Number *"
              className="w-full border rounded-xl p-3"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <select
              className="w-full border rounded-xl p-3"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            >
              <option value="">Select Donation Category *</option>
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
              className="w-full border rounded-xl p-3"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-700 hover:bg-blue-800 text-white py-3 font-semibold transition"
            >
              {loading ? "Processing..." : "Submit Donation"}
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}