import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar/Page";

// TypeScript interfaces
interface NavItemProps {
  text: string;
}

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

interface StarRatingProps {
  rating: number;
  maxRating: number;
}

// Komponen yang telah diperbarui
const Logo = () => (
  <div className="flex items-center">
    <span className="text-xl md:text-2xl font-bold italic text-[#d3ae33]">
      <span className="text-[#1B1B1D]">Saoraja </span>Cafe & Resto
    </span>
  </div>
);

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <a
    href="#"
    className="px-2 md:px-4 py-1 md:py-2 text-[#1B1B1D] hover:text-gray-600 transition-colors"
  >
    {text}
  </a>
);

const Button: React.FC<ButtonProps> = ({ primary, children }) => (
  <button
    className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
      primary
        ? "bg-black text-white hover:bg-gray-800"
        : "bg-white text-black border border-gray-300 hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

const YearBadge = () => (
  <div className="flex flex-col items-center">
    <div className="absolute w-12 h-12 md:w-16 md:h-16 border-2 border-amber-700 rounded-full -z-10 animate-pulse"></div>
    <div className="absolute w-16 h-16 md:w-20 md:h-20 border border-amber-700 rounded-full -z-20"></div>
  </div>
);

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating }) => {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 md:w-6 md:h-6 text-black"
          fill={i < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  );
};

const CoffeeCup = () => (
  <div className="relative w-full max-w-xs md:max-w-md mx-auto">
    <div className="bg-white rounded-2xl p-2 shadow-lg transition-transform duration-500 hover:rotate-3">
      <div className="w-full h-full relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-16 md:w-20 h-3 md:h-4 bg-white rounded-t-lg"></div>
        <div className="w-full h-full border-2 border-gray-200 rounded-xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
            <span className="text-lg md:text-xl italic">A</span>
          </div>

          {/* Decorative leaf elements with animation */}
          <div className="absolute top-1/4 left-1/4 w-1 md:w-2 h-3 md:h-4 bg-black rounded-full transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 md:w-2 h-3 md:h-4 bg-black rounded-full transform -rotate-12 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 md:w-2 h-3 md:h-4 bg-green-400 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 md:w-2 h-3 md:h-4 bg-green-400 rounded-full transform -rotate-45 animate-pulse"></div>
        </div>
      </div>
    </div>

    {/* Decorative curved line */}
    <div className="absolute -right-8 md:-right-12 top-1/2 w-24 md:w-32 h-24 md:h-32 border-2 border-gray-300 rounded-full border-l-0 border-t-0"></div>
  </div>
);

// Komponen untuk animasi teks
const AnimatedText = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

// Komponen untuk text typing effect
const TypedText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Main App Component
const SaorajaLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 py-8 md:py-16 lg:py-24 max-w-6xl mx-auto flex items-center justify-center min-h-[calc(100vh-76px)]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <AnimatedText delay={300}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 text-[#1B1B1D]">
                <span className="block mb-2">Saoraja</span>
                <TypedText text="Cafe & Resto" />
              </h1>
            </AnimatedText>

            <AnimatedText delay={600}>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-[#1B1B1D]">
                Tempat makan dan nongkrong dengan suasana hangat, nyaman, dan
                instagramable, cocok untuk keluarga, teman, maupun acara
                komunitas.
              </p>  
            </AnimatedText>

            <AnimatedText delay={900}>
              <div className="mb-4 md:mb-6">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <StarRating rating={5} maxRating={5} />
                </div>
                <p className="text-xs md:text-sm text-[#1B1B1D]">
                  5 out of 5 Overall Star Rating for All Local Business.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={1200}>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                <Link href="/Landing/Menu">
                  <Button primary>List Menu</Button>
                </Link>
              </div>
            </AnimatedText>
          </div>

          <AnimatedText delay={600}>
            <div className="relative mt-6 md:mt-0">
              <CoffeeCup />
              <div className="absolute top-0 right-0">
                <YearBadge />
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default SaorajaLandingPage;
