import React from "react";
import Layout from "../components/Layout";

export default function contact() {
   return (
      <Layout>
         <h1 className="text-center text-3xl underline my-5">Contact</h1>
         <form className="flex flex-col justify-center items-center h-full">
            <input
               className="rounded w-96 p-2 text-black my-2"
               name="name"
               id="name"
               placeholder="Name"
               required
            />

            <input
               className="rounded w-96 p-2 text-black my-2"
               name="email"
               id="email"
               placeholder="Email"
               required
            />

            <textarea
               className="rounded w-96 p-2 text-black my-2"
               name="message"
               id="message"
               placeholder="Message"
               required
            />

            <div>
               <button
                  type="submit"
                  className="border rounded px-3 py-1 bg-blue-600 hover:bg-white hover:text-black my-3 "
               >
                  Submit
               </button>
            </div>
         </form>
      </Layout>
   );
}
