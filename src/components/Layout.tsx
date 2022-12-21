import React from "react";
import '../styles/global.css'
import { Slice } from "gatsby";

type LayoutProps = {
   children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
   return (
      <div style={{padding:"20px",height:"90vh"}}>
         <Slice alias="navbar" />
         {children}
         <Slice alias="footer"/>
      </div>
   );
}
