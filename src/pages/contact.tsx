import React from "react";
import Layout from "../components/Layout";

export default function contact() {
   return (
      <Layout>
         <h1 className="center" style={{ margin: "10px 0" }}>
            Contact
         </h1>
         <form
            className="text-center"
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               flexDirection: "column",
               height: "90%",
            }}
         >
            <input
               style={{ width: "15rem", height: "2rem", margin: "5px 0", padding:"5px" }}
               name="name"
               id="name"
               placeholder="Name"
               required
            />
            <br />

            <input
               style={{ width: "15rem", height: "2rem", margin: "5px 0", padding:"5px" }}
               name="email"
               id="email"
               placeholder="Email"
               required
            />
            <br />

            <textarea
               style={{ width: "15rem", height: "5rem", margin: "5px 0", padding:"5px" }}
               name="message"
               id="message"
               placeholder="Message"
               required
            />

            <div>
               <button type="submit" style={{marginTop:"10px"}} >Submit</button>
            </div>
         </form>
      </Layout>
   );
}
