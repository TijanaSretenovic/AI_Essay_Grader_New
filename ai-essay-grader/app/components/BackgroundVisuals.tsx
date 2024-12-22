'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FloatingElement = ({ children, x, y, duration, delay = 0 }: { children: React.ReactNode, x: number, y: number, duration: number, delay?: number }) => (
  <motion.div
    className="absolute"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      x: [0, x],
      y: [0, y],
    }}
    transition={{
      opacity: { delay, duration: 1 },
      scale: { delay, duration: 1 },
      x: { delay, duration: duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
      y: { delay, duration: duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    }}
  >
    {children}
  </motion.div>
)

const GradientCircle = ({ size, color1, color2, top, left, opacity }: { size: number, color1: string, color2: string, top: string, left: string, opacity: number }) => (
  <div 
    className="rounded-full absolute blur-3xl"
    style={{
      width: size,
      height: size,
      background: `linear-gradient(45deg, ${color1}, ${color2})`,
      top,
      left,
      opacity,
    }}
  />
)

export const BackgroundVisuals = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <GradientCircle size={300} color1="#4299E1" color2="#9F7AEA" top="-5%" left="-5%" opacity={0.2} />
    <GradientCircle size={200} color1="#ED64A6" color2="#ECC94B" top="60%" left="80%" opacity={0.15} />
    <GradientCircle size={250} color1="#48BB78" color2="#38B2AC" top="40%" left="-10%" opacity={0.1} />
    
    <FloatingElement x={100} y={-50} duration={15} delay={0}>
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 opacity-80">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </FloatingElement>
    <FloatingElement x={-70} y={80} duration={18} delay={1}>
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500 opacity-70">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </FloatingElement>
    <FloatingElement x={60} y={60} duration={20} delay={2}>
      <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 opacity-75">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </FloatingElement>
    <FloatingElement x={-40} y={-30} duration={17} delay={3}>
      <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-500 opacity-65">
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </FloatingElement>
  </div>
)

