"use client";
import React, { useState , useEffect } from "react";

export default function Page() {
  
  const [Quotes4, setQuotes4] = useState([]);
  const [loading, setLoading] = useState(false)
   useEffect(() => {
    const rendereddata = localStorage.getItem("Quotes4");
    if (rendereddata) {
      setQuotes4(JSON.parse(rendereddata));
    }
  }, []);


  const fetchQuotes4 = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/route4", { method: "POST" });
      const data = await res.json();
      const updatedQuotes4 = [...Quotes4, data];
      
      localStorage.setItem("Quotes4", JSON.stringify(updatedQuotes4));

      setQuotes4((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error fetching quote:", err);
    } finally {
      setLoading(false);
    }

  };

  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="font-bold text-3xl mb-4">Random quotes</h1>
      <button
        onClick={fetchQuotes4}
        disabled={loading}
        type="button" className="text-white cursor-pointer bg-gradient-to-r  from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{loading ? "loading ..." : "Fetch Quote"}</button>
      <p className="text-red-500"></p>
{
Quotes4.length === 0 && !loading ? (
  <p className="mt-4">No Quotes4 available. Click "Fetch Quote" to get started!</p>
) : null
}
      {Quotes4.map((q, i) => (
        <div key={i} className="bg-gray-100 px-10 mt-4 rounded-2xl ">
          <p className=" mb-2 font-semibold text-lg ">"{q.content}"</p>
          <p>— {q.author}</p>
        </div>
      ))}
    </main>
  );
}
