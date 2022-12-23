import React from "react";
import Layout from "../components/Layout";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { FaNode } from "@react-icons/all-files/fa/FaNode";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { HeadFC } from "gatsby";

export default function skills() {
   return (
      <Layout>
         <h1 className="text-center text-3xl underline my-5">Skills</h1>
         <div className="flex flex-wrap justify-center items-center h-full">
            <div className="border rounded m-3 p-2">
               <FaHtml5 size={100} />
            </div>
            <div className="border rounded m-3 p-2">
               <FaCss3 size={100} />
            </div>
            <div className="border rounded m-3 p-2">
               <DiJavascript1 size={100} />
            </div>
            <div className="border rounded m-3 p-2">
               <SiTypescript size={100} />
            </div>
            <div className="border rounded m-3 p-2">
               <FaReact size={100} />
            </div>
            <div className="border rounded m-3 p-2">
               <FaNode size={100} />
            </div>
            <div className="border rounded m-3 p-2">
               <SiMysql size={100} />
            </div>
         </div>
      </Layout>
   );
}

export const Head: HeadFC = () => <title>Skills</title>;
