"use client";
import { title } from "@/components/primitives";
import { motion } from "framer-motion";

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

export default function AboutPage() {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen pt-6 md:pt-24 overflow-hidden">
      {/* Global Background Pattern - Medical Grid */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated Background Glows - Medical Colors */}
      <div className="fixed top-10 left-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
      <div className="fixed bottom-10 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDelay: '1s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDelay: '2s' }} />

      {/* Floating Medical-Themed Geometric Shapes */}

      {/* Medical Cross - Top Left */}
      <motion.div
        className="fixed top-8 left-12 w-12 h-12 md:w-16 md:h-16 text-red-500/20 dark:text-red-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 360],
          y: [0, -18, 0],
          scale: [1, 1.12, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MedicalCross className="w-full h-full" />
      </motion.div>

      {/* DNA Helix - Top Right */}
      <motion.div
        className="fixed top-20 right-16 w-14 h-14 md:w-20 md:h-20 text-blue-500/20 dark:text-blue-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, -360],
          y: [0, 22, 0]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <DNAHelix className="w-full h-full" />
      </motion.div>

      {/* Stethoscope - Left Side */}
      <motion.div
        className="fixed top-1/3 left-8 w-14 h-14 md:w-20 md:h-20 text-teal-500/20 dark:text-teal-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 15, -15, 0],
          y: [0, -12, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Stethoscope className="w-full h-full" />
      </motion.div>

      {/* Heartbeat Line - Bottom Left */}
      <motion.div
        className="fixed bottom-24 left-20 w-18 h-18 md:w-24 md:h-24 text-pink-500/20 dark:text-pink-500/15 pointer-events-none z-0"
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.2, 0.38, 0.2]
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <HeartbeatLine className="w-full h-full" />
      </motion.div>

      {/* Pill Shape - Right Side */}
      <motion.div
        className="fixed top-1/4 right-12 w-12 h-12 md:w-16 md:h-16 text-purple-500/20 dark:text-purple-500/15 pointer-events-none z-0"
        animate={{
          rotate: [0, 180, 360],
          x: [0, 12, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <PillShape className="w-full h-full" />
      </motion.div>

      {/* Medical Shield - Bottom Right */}
      <motion.div
        className="fixed bottom-28 right-20 w-14 h-14 md:w-20 md:h-20 text-emerald-500/20 dark:text-emerald-500/15 pointer-events-none z-0"
        animate={{
          scale: [1, 1.18, 1],
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MedicalShield className="w-full h-full" />
      </motion.div>

      {/* Heart - Center Right */}
      <motion.div
        className="fixed top-1/2 right-16 w-10 h-10 md:w-14 md:h-14 text-rose-500/20 dark:text-rose-500/15 pointer-events-none z-0"
        animate={{
          scale: [1, 1.28, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart className="w-full h-full" />
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={title({ size: "lg" })}>About HealthRena</h1>

          <motion.p
            className="mt-4 text-lg text-default-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            HealthRena is a platform designed to modernize healthcare delivery.
            By integrating advanced AI, we help hospitals improve patient outcomes, operations, and drive growth.
            From small clinics to large multi-specialty hospitals, HealthRena scales with your needs.
          </motion.p>

          {/* Additional Content Sections */}
          {/* <motion.div
            className="mt-16 flex flex-row "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 rounded-xl border border-default-200 dark:border-default-100 bg-white/50 dark:bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-default-600 text-base leading-relaxed">
                Empower healthcare providers with AI-driven tools to deliver exceptional patient care.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-default-200 dark:border-default-100 bg-white/50 dark:bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-default-600 text-base leading-relaxed">
                Transform healthcare through intelligent automation and seamless integration.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-default-200 dark:border-default-100 bg-white/50 dark:bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Our Values</h3>
              <p className="text-default-600 text-base leading-relaxed">
                Innovation, reliability, and patient-first approach in everything we build.
              </p>
            </div>
          </motion.div> */}

        </motion.div>
      </div>
    </section>
  );
}
