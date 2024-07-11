// Assuming this file is located under components/Navbar.tsx
import React from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <div className="absolute top-0 flex justify-between items-center w-full bg-[#f3eeea] h-20">
      <div className="w-30 h-auto flex flex-wrap items-center m-4">
        {/* Reference the logo from the public directory */}
        <img
          src="/images/acm_logo.jpg"
          className="p-1 m-2 w-16 h-16"
          alt="ACM Logo"
        />
        <h1 className="text-xl">Ahmedabad University</h1>
      </div>
      <div className="p-2 m-4 text-lg">
        {/* Use Next.js Link component */}
        <Link href="/">
          <div className="p-2 m-2">Home</div>
        </Link>
        <Link href="/home">
          <div className="p-2 m-2">Home Page contents</div>
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar;
