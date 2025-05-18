import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  text: string;
}

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

const Logo = () => (
  <div className="flex items-center">
    <span className="text-2xl font-bold italic text-[#d3ae33]">
      <span className="text-[#1B1B1D]">Saoraja </span>Cafe & Resto
    </span>
  </div>
);

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <Link
    href={text === "Menu" ? "/Landing/Menu" : "#"}
    className="px-4 py-2 text-[#1B1B1D] hover:text-gray-600 transition-colors"
  >
    {text}
  </Link>
);

const Button: React.FC<ButtonProps> = ({ primary, children }) => (
  <button
    className={`px-6 py-3 font-medium rounded-full transition-colors ${
      primary
        ? "bg-black text-white hover:bg-gray-800"
        : "bg-white text-black border border-gray-300 hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-4 flex items-center justify-between">
      <Logo />

      {/* Center the nav items */}
      <div className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
        <NavItem text="Menu" />
        <NavItem text="Tentang Kami" />
        <NavItem text="Temukan" />
        <NavItem text="Alowishus Catering" />
      </div>

      <div className="flex items-center space-x-4">
        <a href="/Pages/Menu" className="p-2">
          <ShoppingBag size={24} className="text-[#1B1B1D]" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
