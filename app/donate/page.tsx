"use client";

import {DonateOptions} from "@/components/donate-options";

export default function DonatePage() {
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

      </div>
    </main>
  );
}