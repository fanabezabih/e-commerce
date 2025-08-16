"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "../shared-components/Footer";
import Header from "../shared-components/Header";

export default function SignupPage() {
  const [name, setName] = useState("");
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

   
      <main className="flex-1 flex flex-col justify-between bg-white">
        <div className="flex flex-1 items-stretch">
          <div className="flex flex-row w-full max-w- overflow-hidden min-h-[480px] mx-auto mb-35 mt-10">
      
            <div className="w-3/5 min-h-[480px] flex-shrink-0 flex-grow-0 -ml10">
              <img
                src="/images/side-image.png"
                alt="Shopping visual"
                className="w-full h-full object-cover object-left"
                style={{ display: 'block', width: '900px', height: '700px' }}
              />
            </div>
       
            <div className="w-2/5 flex flex-col justify-center px-10 py-14">
              <div className="flex flex-col" style={{maxWidth: '390px'}}>
                <h2 className="text-2xl font-bold mb-2">Create an account</h2>
                <p className="text-sm text-gray-500 mb-8">Enter your details below</p>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full border-b border-gray-300 bg-transparent py-2 px-0 focus:outline-none focus:border-black text-gray-800 placeholder-gray-400"
                    />
                  </div>
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
                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white font-bold py-2 rounded hover:bg-pink-700 transition mb-4"
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center border border-gray-300 py-2 rounded mb-6 gap-2 hover:bg-gray-50"
                    style={{ minHeight: '44px' }}
                  >
                    <span className="flex items-center">
                      <img src="/images/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
                    </span>
                  </button>
                </form>
                <div className="text-center text-sm">
                  Already have account?{" "}
                  <Link href="/login" className="text-pink-600 hover:underline">
                    Log in
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