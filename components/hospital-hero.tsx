"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@heroui/card';
import { Chip } from '@heroui/chip';

// Minimal SVG Icons to avoid library bloat
const Icons = {
  Doctor: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="m3.34 19 1.4-1.4"/><path d="M5.8 22.6c1.2-1.2 2.6-2 4.2-2.3"/><path d="M2 10V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M7 7h.01"/><path d="M22 10v11a2 2 0 0 1-2 2H11"/><path d="M22 10a2 2 0 0 0-2-2h-7"/></svg>
  ),
  Patient: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Staff: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
  )
};

const HospitalVisualizer = () => {
  return (
    <div className="relative w-full h-[500px] bg-background overflow-hidden rounded-3xl border-medium border-divider">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Hospital "Zones" using HeroUI styling */}
      <div className="absolute top-[10%] left-[10%] p-4 border-2 border-dashed border-default-200 rounded-2xl">
        <Chip variant="flat" color="warning" size="sm">Administration</Chip>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-primary-200 rounded-full flex items-center justify-center">
        <Chip color="primary" variant="shadow">Patient Care</Chip>
      </div>

      <div className="absolute bottom-[10%] right-[10%] p-4 border-2 border-dashed border-default-200 rounded-2xl">
        <Chip variant="flat" color="success" size="sm">Diagnostics</Chip>
      </div>

      {/* Animated Agents */}
      <MovingAgent role="Doctor" color="text-primary" icon={<Icons.Doctor />} delay={0} />
      <MovingAgent role="Nurse" color="text-success" icon={<Icons.Doctor />} delay={4} />
      <MovingAgent role="Staff" color="text-secondary" icon={<Icons.Staff />} delay={8} />
      <MovingAgent role="Patient" color="text-default-400" icon={<Icons.Patient />} delay={2} />
    </div>
  );
};

const MovingAgent = ({ icon, color, delay, role }: any) => {
  const path = [
    { left: '15%', top: '20%' }, // Admin
    { left: '50%', top: '50%' }, // Patient Care
    { left: '85%', top: '80%' }, // Diagnostics
    { left: '50%', top: '50%' }, // Patient Care
    { left: '15%', top: '20%' }, // Loop
  ];

  return (
    <motion.div
      initial={path[0]}
      animate={{
        left: path.map(p => p.left),
        top: path.map(p => p.top),
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className="absolute z-10"
    >
      <Card className="flex flex-row items-center gap-2 p-2 px-3 shadow-lg border-none" isBlurred>
        <div className={color}>{icon}</div>
        <span className="text-[10px] font-bold uppercase text-default-500">{role}</span>
      </Card>
    </motion.div>
  );
};

export default HospitalVisualizer;
