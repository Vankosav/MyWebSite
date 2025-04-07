// pages/index.js
"use client";

import { useState } from "react";

import Header from "../components/Header";
import Image from "next/image";
import Explanation from "../components/Explanation";
import Roles from "../components/Roles";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow w-full px-6" style={{ background: "linear-gradient(to bottom, #D1D5DB 80%, #000 20%)", height: "calc(100vh - 120px)" }}>
        <div className="relative w-full max-w-[550px] h-[550px] bg-yellow-400 p-8 mt-20">
          {/* Name in top-left */}
          <div className="absolute top-8 left-10">
            <div className="font-poppins text-5xl sm:text-6xl lg:text-8xl font-medium leading-tight" style={{ letterSpacing: '-0.05em' }}>
              Nedeljkov
            </div>
            <div className="font-poppins text-5xl sm:text-6xl lg:text-8xl font-medium leading-tight" style={{ letterSpacing: '-0.05em', marginTop: '-24px', marginleft: "4"}}>
              Ivana
            </div>
          </div>

          {/* Image in bottom-right */}
          <div className="absolute bottom-10 right-8 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] flex items-center justify-center rounded">
            <Image
              src="/vankasam.png"
              alt="author's photo"
              width={160}
              height={180}
              className="object-cover rounded"
            />
          </div>
        </div>
      </main>

      {/* Explanation component with black background */}
      <div className="w-full bg-black pt-8 pb-16">
        <Explanation />
      </div>
      <Roles />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
