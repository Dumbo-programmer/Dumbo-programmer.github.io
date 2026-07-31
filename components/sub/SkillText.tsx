"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">
Tools 
           </span>
        </motion.div>
        <motion.h2
        variants={slideInFromLeft(0.5)}
        id="skills-heading"
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
Tools I have worked with 
         </motion.h2>
        <motion.p
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
Learning is a journey meant to be pursued        </motion.p>
    </div>
  )
}

export default SkillText