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

    // Brief branded intro; kept short to avoid hurting LCP/INP
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Unlock scrolling
    }, 600); // Reduced load time for better UX

    // Binary animation update
    const interval = setInterval(() => {
      if (loading) {
        setBinaryMatrix(
          Array.from({ length: 8 }, () => generateBinaryString(24))
        );
      }
    }, 120);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [loading]);

  if (!loading) return null; // Hide when done loading

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#030014e6] backdrop-blur-sm z-[100]"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="text-green-400 font-mono text-xs leading-3 md:text-sm md:leading-4 max-h-[60vh] overflow-hidden px-4" aria-hidden="true">
        {binaryMatrix.slice(0, 8).map((line, index) => (
          <p key={index} className="animate-flicker">{line}</p>
        ))}
      </div>
      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 0.9; }
          50% { opacity: 0.5; }
          100% { opacity: 0.9; }
        }
        .animate-flicker {
          animation: flicker 0.8s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
