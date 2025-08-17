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
      <Header />
      <main className="flex-1 flex flex-col justify-between bg-white">
        <div className="flex flex-1 items-stretch">
          <div className="flex flex-row w-full max-w- mx-auto mb-35 mt-10">
        
            <div className="w-3/5 min-h-[500px] flex-shrink-0 flex-grow-0 -ml10 flex items-center">
              <Image
                src="/images/side-image.png"
                alt="Shopping visual"
                width={300}
                height={300}
                className="w-full h-auto object-cover object-left"
                style={{ display: 'block' }}
                priority
              />
            </div>
   
            <div className="w-3/5 flex flex-col justify-center px-10 py-14">
              <div className="flex flex-col" style={{ maxWidth: '390px' }}>
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
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="text-pink-600 hover:underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}



