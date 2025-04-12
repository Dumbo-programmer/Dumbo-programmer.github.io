"use client";
import { motion } from "framer-motion";

const educationData = [
  { year: "2017", content: "Got selected at St. Joseph Higher Secondary School" },
  { year: "2023", content: "Completed CS50 and various bootcamps" },
  { year: "2025", content: "Finished Sophomore year with an unweighted CGPA 4" },
  { year: "2027", content: "Expected to graduate highschool" },
];

const EducationTimeline = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-20 relative">
      {/* Timeline line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20" />

      {educationData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`w-full md:w-1/2 px-6 py-4 relative z-10 ${
            index % 2 === 0 ? "ml-auto" : "mr-auto"
          }`}
        >
          <div className="bg-black text-white shadow-lg rounded-lg p-6 border border-[#2A0E61] flex flex-col bg-white/5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6] hover:scale-105">
            <h3 className="text-xl font-bold mb-2">{item.year}</h3>
            <p className="text-sm">{item.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationTimeline;
