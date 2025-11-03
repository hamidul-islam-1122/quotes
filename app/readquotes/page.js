"use client";
import React, { useState } from "react";

export default function Page() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const res = await fetch("/api", { method: "POST" });
    const data = await res.json();
    setQuotes((prev) => [...prev, data]);
  };

  return (
    <main className="p-6">
      <h1 className="font-bold text-3xl mb-4">Read Quotes</h1>
      <button
        onClick={fetchQuotes}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Quote
      </button>

      <p className="text-red-500"></p>

      {quotes.map((q, i) => (
        <div key={i} className="bg-gray-100 p-4 mt-4 rounded">
          <p className="italic mb-2">"{q.fact}"</p>
          <p>— {q.length}</p>
        </div>
      ))}
    </main>
  );
}
