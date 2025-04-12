"use client";  
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Research = () => {

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
<div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Research & Publications
            {" "}
          </span>
          
        </motion.div>
      </div>



</div>
    

    </div>

  );
};

export default Research;