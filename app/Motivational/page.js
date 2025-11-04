"use client";
import React, { useState , useEffect } from "react";

export default function Page() {
  
  const [Quotes2, setQuotes2] = useState([]);
  const [loading, setLoading] = useState(false)
   useEffect(() => {
    const rendereddata = localStorage.getItem("Quotes2");
    if (rendereddata) {
      setQuotes2(JSON.parse(rendereddata));
    }
  }, []);


  const fetchQuotes2 = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/route2", { method: "POST" });
      const data = await res.json();
      const updatedQuotes2 = [...Quotes2, data];
      
      localStorage.setItem("Quotes2", JSON.stringify(updatedQuotes2));

      setQuotes2((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error fetching quote:", err);
    } finally {
      setLoading(false);
    }

  };

  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="font-bold text-3xl mb-4">Motivational Quotes</h1>
    
      <button onClick={fetchQuotes2}
        disabled={loading} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{loading ? "loading ..." : "Fetch Quote"}</button>
{
Quotes2.length === 0 && !loading ? (
  <p className="mt-4">No Quotes2 available. Click "Fetch Quote" to get started!</p>
) : null
}
      {Quotes2.map((q, i) => (
        <div key={i} className="bg-gray-100 px-10 mt-4 rounded-2xl ">
          <p className=" mb-2 font-semibold text-lg ">"{q.content}"</p>
          <p>— {q.author}</p>
        </div>
      ))}
    </main>
  );
}
