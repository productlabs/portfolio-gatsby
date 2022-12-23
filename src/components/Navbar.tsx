import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
   return (
      <nav className="flex justify-between">
         <div>
            <h2 className="text-2xl">Portfolio</h2>
         </div>
         <div>
            <Link to="/" className="hover:underline px-2">
               Home
            </Link>
            <Link to="/project" className="hover:underline px-2">
               Projects
            </Link>
            <Link to="/skills" className="hover:underline px-2">
               Skills
            </Link>
            <Link to="/contact" className="hover:underline px-2">
               Contact
            </Link>
         </div>
      </nav>
   );
}
