import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
   return (
      <Layout>
         <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl mb-2">Hello 👋 </h1>
            <h1 className="text-4xl mb-2">I am Akram Ansari</h1>
            <h1 className="text-4xl">I am a Fullstack Developer</h1>
         </div>
      </Layout>
   );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
