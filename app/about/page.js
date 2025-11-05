"use client"; 
import { ToastContainer, toast, Bounce } from "react-toastify";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
toast.success('Now your in About section', {
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

  return (
    <main className="p-6">
      
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

<section className="flex  gap-8 justify-between max-sm:flex-col ">
  <div className="section1-for-first-content w-1/2 max-sm:w-full  ">

  <h2 className="text-xl  font-semibold mt-4">About Us</h2>
  <p className="mt-2">
    This is the about section of the homepage. Here you can find more information about our website and its purpose.
  </p>
  </div>
  <div className="w-1/2 max-sm:w-full">
  <h2  className="text-xl font-semibold mt-4">Purpose</h2>  
    <p className="mt-2">Most Website want login  or they Don't give quotes so we made this to help You all </p>
     </div>
</section>

<br />
<hr className="text-gray-400" />
<section className="flex gap-8 justify-between max-sm:flex-col">
  <div className="section2-for-first-content w-1/2 max-sm:w-full">

  <h2 className="text-xl font-semibold mt-4">What we have</h2>
  <p className="mt-2">
    We have a huge collection of quotes from  categories like motivational, Daily, Random . You can easily browse and find quotes that you want.
  </p>
  </div>
  <div className="w-1/2 max-sm:w-full">
  <h2  className="text-xl font-semibold mt-4">Back-end</h2>  
    <p className="mt-2">When you fetch any quotes that will be stored in Your local storage. No external online database is used.  </p>
     </div>
</section>

    </main>
  );
}
