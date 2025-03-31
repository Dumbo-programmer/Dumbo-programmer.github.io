"use client";

import React, { useEffect, useState } from "react";

const generateBinaryString = (length: number) =>
  Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join("");

const LoadingScreen = () => {
  const [binaryMatrix, setBinaryMatrix] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = "hidden";

    // Simulate a delay (e.g., fetching data)
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Unlock scrolling
    }, 3000); // Change time as needed

    // Binary animation update
    const interval = setInterval(() => {
      if (loading) {
        setBinaryMatrix(
          Array.from({ length: 10 }, () => generateBinaryString(30))
        );
      }
    }, 150);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [loading]);

  if (!loading) return null; // Hide when done loading

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#030014cc] backdrop-blur-md z-[100]">
      <div className="text-green-400 font-mono text-sm md:text-lg leading-5 md:leading-7">
        {binaryMatrix.map((line, index) => (
          <p key={index} className="animate-flicker">{line}</p>
        ))}
      </div>
      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 0.8; }
          50% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }
        .animate-flicker {
          animation: flicker 1s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
