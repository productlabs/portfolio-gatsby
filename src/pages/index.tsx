import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
   return (
      <Layout>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               flexDirection: "column",
               height: "100%",
            }}
         >
            <h1 style={{marginBottom:"5px"}}>Hello 👋 </h1>
            <h1 style={{marginBottom:"5px"}}>I am Akram Ansari</h1>
            <h1>I am a Fullstack Developer</h1>
         </div>
      </Layout>
   );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
