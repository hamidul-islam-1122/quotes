"use client";
import React, { useState } from "react";

export default function Page() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api", { method: "POST" });
      const data = await res.json();
      setQuotes((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error fetching quote:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="font-bold text-3xl mb-4">Read Quotes</h1>
    <button
    onClick={fetchQuotes}
        disabled={loading}
    type="button" className="text-white cursor-pointer bg-gradient-to-r  from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{loading ? "loading ..." : "Fetch Quote"}</button>
      <p className="text-red-500"></p>

      {quotes.map((q, i) => (
        <div key={i} className="bg-gray-100 px-10 mt-4 rounded ">
          <p className="italic mb-2">"{q.q}"</p>
          <p>— {q.a}</p>
        </div>
      ))}
    </main>
  );
}
