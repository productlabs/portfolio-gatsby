import React from "react";
import Navbar from "./Navbar";
import '../styles/global.css'
import Footer from "./Footer";

type LayoutProps = {
   children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
   return (
      <div style={{padding:"20px",height:"90vh"}}>
         <Navbar />
         {children}
         <Footer/>
      </div>
   );
}
