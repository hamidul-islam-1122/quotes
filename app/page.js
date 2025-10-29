import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>

      <section>
        <div className="hero-section container mx-auto ">
          <div className="main flex items-center justify-center flex-col h-90  gap-5">
            <p className="font-bold text-5xl">
              <span className="font-bold">&quot;</span>Your Own Quotes web
              <span className="font-bold">&quot;</span>
            </p>
            <p className="font-bold text-5xl">Publish/Read</p>

            <div className="p2 text-lg">
              <p>No Login needed. Just Get Your Quotes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section2 flex items-center justify-center">

        <button type="button" className="text-white bg-gradient-to-r w-sm from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read the quotes</button>

      </section>
    </>
  );
}
