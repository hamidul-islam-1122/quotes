"use client";
export default function Home() {
  const openreadquotes = () => {
    window.location.href = "/readquotes";
  }
  return (
      
    <>

      <section>
        <div className="hero-section container mx-auto ">
          <div className="main flex items-center justify-center flex-col h-90  gap-5 max-md:gap-3 max-md:h-40  ">
            <p className="font-bold text-5xl max-md:text-3xl max-sm:text-xl">
              <span className="font-bold">&quot;</span>Your Own Quotes web
              <span className="font-bold">&quot;</span>
            </p>
            <p className="font-bold text-5xl max-md:text-3xl max-sm:text-xl">Publish/Read</p>

            <div className="p2 text-lg max-md:text-lg max-sm:text-[20px]">
              <p>No Login needed. Just Get Your Quotes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section2 flex items-center justify-center">

        <button 
          onClick={openreadquotes} 
          type="button" 
          className="custom-gradient text-white cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 max-sm:w-[140px]">
          Read the quotes
        </button>

      </section>
    </>
  );
}
