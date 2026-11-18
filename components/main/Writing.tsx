"use client";

import Image from "next/image";
import React from "react";

const recognitions = [
  {
    src: "/certis/qcwc.png",
    alt: "Queen’s Commonwealth Essay Competition Silver Award certificate",
    title: "Queen’s Commonwealth Essay Competition",
    detail: "Silver Award · 53,840 entries",
  },
  {
    src: "/certis/poet.png",
    alt: "Poetry Society recognition certificate for Tawhid Bin Omar",
    title: "Poetry Society Recognition",
    detail: "Recognised for poetry writing",
  },
];

const pieces = [
  {
    language: "English",
    title: "The Shape of a Question",
    className: "writing-serif",
    text: "A question is a small door. Behind it, the world is wider than the room we were told to sit in. I write to keep that door open — for the student who thinks in equations, for the friend who thinks in metaphors, and for anyone who has ever been told that curiosity is beside the point.",
  },
  {
    language: "Bangla",
    title: "প্রশ্নের আলো",
    className: "bangla",
    text: "একটি প্রশ্ন ছোট এক দরজার মতো। তার ওপাশে পৃথিবী অনেক বড়—যে ঘরে আমাদের বসতে বলা হয়, তার চেয়ে অনেক বড়। আমি লিখি সেই দরজা খোলা রাখার জন্য—যে শিক্ষার্থী সমীকরণে ভাবে, যে বন্ধু রূপকথায় ভাবে, এবং যে কখনো শুনেছে কৌতূহল অপ্রয়োজনীয়।",
  },
];

const Writing = () => {
  return (
    <section className="w-full py-10" id="writing" aria-labelledby="writing-heading">
      <div className="text-center mb-10">
        <h2
          id="writing-heading"
          className="text-[30px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Writing
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Recognition and selected pieces in English and Bangla.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {recognitions.map((item) => (
          <article
            key={item.title}
            className="flex items-center gap-5 rounded-xl border border-[#2A0E61] bg-white/5 backdrop-blur-md p-5"
          >
            <div className="relative w-24 h-28 shrink-0 rounded-lg overflow-hidden bg-black">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="96px"
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-purple-300 text-sm mt-1">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pieces.map((piece) => (
          <article
            key={piece.title}
            className="rounded-2xl border border-[#2A0E61] bg-white/[0.04] backdrop-blur-md p-6 sm:p-8"
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-full mb-4">
              {piece.language}
            </span>
            <h3 className={`text-2xl font-semibold text-white mb-4 ${piece.className}`}>
              {piece.title}
            </h3>
            <p className={`text-gray-300 leading-8 text-base ${piece.className}`}>
              {piece.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Writing;
