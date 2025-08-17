import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [language, setLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (lang: string) => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <>
   
      <div className="bg-black text-white text-center py-2 text-xs relative">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
        <a href="#" className="underline ml-2">shopNow</a>
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <button
            className="bg-black text-white px-2 py-1 rounded focus:outline-none"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {language} ▼
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow z-10">
              <button onClick={() => handleSelect("English")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                English
              </button>
              <button onClick={() => handleSelect("Swahili")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Swahili
              </button>
              <button onClick={() => handleSelect("French")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                French
              </button>
            </div>
          )}
        </div>
      </div>

    
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="font-extrabold text-2xl">Exclusive</div>
          <nav className="flex gap-8">
            <Link href="/" className="hover:text-pink-600 transition">Home</Link>
            <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
            <Link href="/about" className="hover:text-pink-600 transition">About</Link>
            <Link href="/signup" className="hover:text-pink-600 transition">Sign Up</Link>
          </nav>
          <div className="flex items-center gap-9">
            <div className="flex items-center border rounded px-2 py-1">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none text-sm w-40 md:w-56"
              />
              <button className="ml-6">
                <Image src="/images/search.png" alt="Search" width={20} height={20} className="h-5 w-5" />
              </button>
            </div>
            <button>
              <Image src="/images/cart.png" alt="Cart" width={40} height={20} className="h-5 w-5" />
            </button>
            <button>
              <Image src="/images/user.png" alt="User" width={20} height={20} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
