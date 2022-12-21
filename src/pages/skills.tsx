import React from "react";
import Layout from "../components/Layout";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { FaNode } from "@react-icons/all-files/fa/FaNode";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";

export default function skills() {
   return (
      <Layout>
         <h1 className="center" style={{ margin: "10px 0" }}>
            Skills
         </h1>
         <div
            style={{
               display: "flex",
               flexWrap:"wrap",
               justifyContent: "center",
               alignItems:"center",
               height:"90%"
            }}
         >
            <div className="dib" style={{ margin: "10px 30px" }}>
               <FaHtml5 size={100} />
            </div>
            <div className="dib" style={{ margin: "10px 30px" }}>
               <FaCss3 size={100} />
            </div>
            <div className="dib" style={{ margin: "10px 30px" }}>
               <DiJavascript1 size={100} />
            </div>
            <div className="dib" style={{ margin: "10px 30px" }}>
               <SiTypescript size={100} />
            </div>
            <div className="dib" style={{ margin: "10px 30px" }}>
               <FaReact size={100} />
            </div>
            <div className="dib" style={{ margin: "10px 30px" }}>
               <FaNode size={100} />
            </div>
            <div className="dib" style={{ margin: "10px 30px" }}>
               <SiMysql size={100} />
            </div>
         </div>
      </Layout>
   );
}
