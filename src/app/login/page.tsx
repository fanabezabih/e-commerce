"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "../shared-components/Footer";
import Header from "../shared-components/Header";
import Image from "next/image";

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-black text-white text-center py-2 text-xs">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
        <a href="#" className="underline ml-2">shopNow</a>
        <span className="float-right mr-8">English</span>
      </div>
      <Header />

      <main className="flex-1 flex flex-col justify-between">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-none md:shadow-lg mt-8 mb-8">
            <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100 md:rounded-l-lg">
              <Image
                src="/login-visual.png"
                alt="Shopping visual"
                width={384}
                height={288}
                className="w-96 h-auto object-contain p-8"
                priority
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center px-10 py-14">
              <h2 className="text-2xl font-bold mb-2">Log in to Exclusive</h2>
              <p className="text-sm text-gray-500 mb-8">Enter your details below</p>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    value={emailOrPhone}
                    onChange={e => setEmailOrPhone(e.target.value)}
                    placeholder="Email or Phone Number"
                    className="w-full border-b border-gray-300 bg-transparent py-2 px-0 focus:outline-none focus:border-black text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full border-b border-gray-300 bg-transparent py-2 px-0 focus:outline-none focus:border-black text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="flex items-center mb-8">
                  <button
                    type="submit"
                    className="bg-pink-600 text-white font-bold py-2 px-8 rounded hover:bg-pink-700 transition"
                  >
                    Log in
                  </button>
                  <Link href="#" className="ml-auto text-pink-600 text-sm hover:underline">
                    Forget Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}