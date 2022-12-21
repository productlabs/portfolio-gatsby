import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
   return (
      <nav>
         <div>
            <h2>Portfolio</h2>
         </div>
         <div>
            <Link to="/">Home</Link>
            <Link to="/project">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
         </div>
      </nav>
   );
}
