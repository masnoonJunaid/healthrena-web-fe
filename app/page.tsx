"use client";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import HospitalHero from "@/components/hospital-hero";

// Medical Cross SVG Component
const MedicalCross = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M 35 0 L 65 0 L 65 35 L 100 35 L 100 65 L 65 65 L 65 100 L 35 100 L 35 65 L 0 65 L 0 35 L 35 35 Z" />
  </svg>
);

// Pill/Capsule SVG Component
const PillShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3">
    <rect x="20" y="10" width="60" height="80" rx="30" />
    <line x1="20" y1="50" x2="80" y2="50" />
  </svg>
);

// DNA Helix SVG Component
const DNAHelix = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 20 10 Q 35 30, 20 50 Q 5 70, 20 90" />
    <path d="M 80 10 Q 65 30, 80 50 Q 95 70, 80 90" />
    <line x1="20" y1="20" x2="80" y2="20" />
    <line x1="20" y1="35" x2="80" y2="35" />
    <line x1="20" y1="50" x2="80" y2="50" />
    <line x1="20" y1="65" x2="80" y2="65" />
    <line x1="20" y1="80" x2="80" y2="80" />
  </svg>
);

// Heartbeat/ECG SVG Component
const HeartbeatLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M 0 50 L 20 50 L 30 30 L 40 70 L 50 50 L 60 50 L 70 40 L 80 60 L 100 50" />
  </svg>
);

// Syringe SVG Component
const Syringe = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="10" y="40" width="60" height="20" rx="2" />
    <rect x="70" y="45" width="15" height="10" />
    <line x1="85" y1="50" x2="95" y2="50" />
    <line x1="20" y1="40" x2="20" y2="35" />
    <line x1="30" y1="40" x2="30" y2="35" />
    <line x1="40" y1="40" x2="40" y2="35" />
  </svg>
);

// Stethoscope SVG Component
const Stethoscope = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 30 20 Q 30 40, 50 50" />
    <path d="M 70 20 Q 70 40, 50 50" />
    <circle cx="50" cy="55" r="8" />
    <path d="M 50 63 L 50 80 Q 50 90, 60 90" />
    <circle cx="65" cy="90" r="5" />
    <circle cx="30" cy="20" r="8" />
    <circle cx="70" cy="20" r="8" />
  </svg>
);

// Medical Shield SVG Component
const MedicalShield = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 50 10 L 80 25 L 80 50 Q 80 80, 50 95 Q 20 80, 20 50 L 20 25 Z" />
    <path d="M 40 50 L 50 50 L 50 40 L 60 40 L 60 50 L 70 50 L 70 60 L 60 60 L 60 70 L 50 70 L 50 60 L 40 60 Z" fill="currentColor" />
  </svg>
);

// Heart SVG Component
const Heart = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M 50 85 C 20 65, 10 45, 10 30 C 10 15, 20 5, 30 5 C 40 5, 45 10, 50 20 C 55 10, 60 5, 70 5 C 80 5, 90 15, 90 30 C 90 45, 80 65, 50 85 Z" />
  </svg>
);

export default function Home() {
  return (
    <section className="relative w-full overflow-x-hidden min-h-screen">
      {/* Global Background Pattern - Medical Grid */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated Background Glows - Medical Colors */}
      <div className="fixed top-0 left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDelay: '1s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDelay: '2s' }} />

      {/* Floating Medical-Themed Geometric Shapes - Background Layer */}

      {/* Medical Cross - Top Left */}
      <motion.div
        className="fixed top-12 left-8 w-14 h-14 md:w-20 md:h-20 text-red-500/20 dark:text-red-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MedicalCross className="w-full h-full" />
      </motion.div>

      {/* Pill Shape - Top Right */}
      <motion.div
        className="fixed top-20 right-16 w-12 h-12 md:w-16 md:h-16 text-purple-500/20 dark:text-purple-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 180, 360],
          x: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <PillShape className="w-full h-full" />
      </motion.div>

      {/* DNA Helix - Left Side */}
      <motion.div
        className="fixed top-1/3 left-6 w-16 h-16 md:w-24 md:h-24 text-blue-500/20 dark:text-blue-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, -360],
          y: [0, 25, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <DNAHelix className="w-full h-full" />
      </motion.div>

      {/* Heartbeat Line - Bottom Left */}
      <motion.div
        className="fixed bottom-24 left-20 w-20 h-20 md:w-28 md:h-28 text-pink-500/20 dark:text-pink-500/15 pointer-events-none z-0"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <HeartbeatLine className="w-full h-full" />
      </motion.div>

      {/* Syringe - Right Side */}
      <motion.div
        className="fixed top-1/4 right-12 w-14 h-14 md:w-20 md:h-20 text-cyan-500/20 dark:text-cyan-500/15 pointer-events-none z-0"
        animate={{
          rotate: [45, 90, 45],
          x: [0, -15, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Syringe className="w-full h-full" />
      </motion.div>

      {/* Stethoscope - Bottom Right */}
      <motion.div
        className="fixed bottom-28 right-24 w-16 h-16 md:w-24 md:h-24 text-teal-500/20 dark:text-teal-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 20, -20, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Stethoscope className="w-full h-full" />
      </motion.div>

      {/* Medical Shield - Top Center */}
      <motion.div
        className="fixed top-8 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 text-emerald-500/20 dark:text-emerald-500/15 pointer-events-none z-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MedicalShield className="w-full h-full" />
      </motion.div>

      {/* Heart - Center Left */}
      <motion.div
        className="fixed top-1/2 left-12 w-10 h-10 md:w-14 md:h-14 text-rose-500/20 dark:text-rose-500/15 pointer-events-none z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart className="w-full h-full" />
      </motion.div>

      {/* Additional Medical Cross - Bottom Center */}
      <motion.div
        className="fixed bottom-12 left-1/3 w-10 h-10 md:w-14 md:h-14 text-orange-500/20 dark:text-orange-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <MedicalCross className="w-full h-full" />
      </motion.div>

      {/* Small Pills Floating - Right Bottom */}
      <motion.div
        className="fixed bottom-40 right-10 w-10 h-10 md:w-12 md:h-12 text-indigo-500/20 dark:text-indigo-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 360],
          y: [0, 20, 0],
          x: [0, -8, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <PillShape className="w-full h-full" />
      </motion.div>

      {/* DNA Helix - Right Side */}
      <motion.div
        className="fixed top-2/3 right-8 w-14 h-14 md:w-20 md:h-20 text-violet-500/20 dark:text-violet-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 360],
          y: [0, -18, 0]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <DNAHelix className="w-full h-full" />
      </motion.div>

      {/* Heartbeat - Top Right Corner */}
      <motion.div
        className="fixed top-16 right-1/4 w-16 h-16 md:w-20 md:h-20 text-fuchsia-500/20 dark:text-fuchsia-500/15 pointer-events-none z-0"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <HeartbeatLine className="w-full h-full" />
      </motion.div>

      {/* Main Content - Above all background elements */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 z-10">
        {/* Two-column responsive hero: text left, visualization right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className={title({
                class: "leading-tight text-left break-normal !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl block w-full",
              })}
            >
              <span className="inline">Less </span>
              <span className="inline">paperwork </span>
              <span className="inline">and </span>
              <span className="inline">administrative burden, </span>
              <span className="inline">more </span>
              <span className="inline">patient care and </span>
              <span className={title({ color: "violet", class: "inline" })}>Clinical Efficiency</span>
            </h1>

            <div className={subtitle({ class: "mt-6 text-base sm:text-lg leading-relaxed text-left" })}>
              HealthRena leverages AI to automate complex hospital workflows and solve operational bottlenecks,
              allowing clinical teams to focus entirely on patient care.
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="/contact"
              >
                Schedule a Demo
              </Link>
              <Link
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href="/features"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-full max-w-xl">
              <HospitalHero />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
