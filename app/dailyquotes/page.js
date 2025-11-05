"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
export default function Page() {

  useEffect(() => {
    toast.success('Now your in Daily Quotes section', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }, []);
  const [Quotes3, setQuotes3] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const rendereddata = localStorage.getItem("Quotes3");
    if (rendereddata) {
      setQuotes3(JSON.parse(rendereddata));
    }
  }, []);


  const fetchQuotes3 = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/route3", { method: "POST" });
      const data = await res.json();
      const updatedQuotes3 = [...Quotes3, data];

      localStorage.setItem("Quotes3", JSON.stringify(updatedQuotes3));

      setQuotes3((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error fetching quote:", err);
    } finally {
      setLoading(false);
    }

  };


  return (
    <main className="p-6 flex flex-col items-center">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <h1 className="font-bold text-3xl mb-4 max-sm:text-2xl">Daily quotes</h1>
      <button
        onClick={fetchQuotes3}
        disabled={loading}
        type="button"
        className="custom-gradient text-white cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
      >
        {loading ? 'loading...' : 'Fetch Quote'}
      </button>
      <p className="text-red-500"></p>
      {
        Quotes3.length === 0 && !loading ? (
          <p className="mt-4">No Quotes3 available. Click "Fetch Quote" to get started!</p>
        ) : null
      }
      {Quotes3.map((q, i) => (
        <div key={i} className="bg-gray-100 px-10 mt-4 rounded-2xl ">
          <p className=" mb-2 font-semibold text-lg ">&ldquo;{q.q}&rdquo;</p>
          <p>— {q.a}</p>
        </div>
      ))}
    </main>
  );
}
