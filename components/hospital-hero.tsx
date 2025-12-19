"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Tooltip } from '@heroui/tooltip';

import { FaUserNurse, FaUserMd, FaPills, FaXRay, FaHospitalSymbol, FaUserPlus, FaUser, FaDesktop } from 'react-icons/fa';
import { GiMicroscope } from 'react-icons/gi';
import { MdEmergency } from 'react-icons/md';

// Refined Icons using react-icons library
const Icons = {
  Doctor: () => <FaUserMd size={20} />,
  Nurse: () => <FaUserNurse size={20} />,
  Patient: () => <FaUser size={20} />,
  Pharmacy: () => <FaPills size={20} />,
  Radiology: () => <FaXRay size={20} />,
  ER: () => <MdEmergency size={20} />,
  Lab: () => <GiMicroscope size={20} />,
  Receptionist: () => <FaDesktop size={18} />
};

const DepartmentNode = ({ label, color, position, icon: Icon }: any) => (
  <motion.div
    className="absolute z-0"
    style={{ ...position }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
  >
    <Tooltip content={`${label} Department`}>
      <Card className="min-w-[130px] p-3 flex flex-col items-center gap-2 backdrop-blur-md transition-all duration-300
                      border-[0.5px] border-primary/10 bg-white/70 shadow-md hover:shadow-lg hover:border-primary/30
                      dark:border-2 dark:border-dashed dark:border-default-200 dark:bg-background/60 dark:shadow-sm">
        <div className={`p-2 rounded-full bg-${color}/10 text-${color} shadow-inner`}>
          <Icon />
        </div>
        <Chip variant="flat" color={color as any} size="sm" className="font-semibold">{label}</Chip>
      </Card>
    </Tooltip>
  </motion.div>
);

const HospitalVisualizer = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] bg-sky-50/50 dark:bg-background overflow-hidden rounded-3xl border-[0.4px] border-divider shadow-2xl transition-colors duration-500">
      {/* Background Decor - Refined Grid adapts to theme */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--tw-prose-invert, #0ea5e9) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Background Glows adapted for Light Mode */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-success/10 dark:bg-success/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Hospital Departments (Nodes) - Hidden on mobile, visible on md+ */}
      <div className="hidden md:block">
        <DepartmentNode label="OPD" color="primary" position={{ top: "12%", left: "12%" }} icon={Icons.Doctor} />
        <DepartmentNode label="Front Desk" color="default" position={{ top: "45%", left: "8%" }} icon={Icons.Receptionist} />
        <DepartmentNode label="Radiology" color="warning" position={{ top: "78%", left: "12%" }} icon={Icons.Radiology} />

        <DepartmentNode label="Pharmacy" color="secondary" position={{ top: "12%", right: "12%" }} icon={Icons.Pharmacy} />
        <DepartmentNode label="Emergency" color="danger" position={{ top: "45%", right: "8%" }} icon={Icons.ER} />
        <DepartmentNode label="Diagnostic Lab" color="success" position={{ top: "78%", right: "12%" }} icon={Icons.Lab} />
      </div>

      {/* Central Hub - Responsive sizing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center bg-primary/5 backdrop-blur-sm"
        >
          <div className="text-center">
            <p className="text-[8px] md:text-[10px] font-bold text-primary/60 uppercase tracking-widest">Core</p>
            <Chip color="primary" variant="shadow" className="font-bold text-xs md:text-sm">Patient Care</Chip>
          </div>
        </motion.div>
      </div>

      {/* Connection Lines (Visual Decor) - Hidden on mobile, visible on md+ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-all duration-500 hidden md:block">
        {/* Left Side Connectors */}
        <line x1="35%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-primary transition-all duration-700" />
        <line x1="32%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-default-400 transition-all duration-700" />
        <line x1="35%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-warning transition-all duration-700" />
        {/* Right Side Connectors */}
        <line x1="65%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-secondary transition-all duration-700" />
        <line x1="68%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-danger transition-all duration-700" />
        <line x1="65%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-success transition-all duration-700" />
      </svg>

      {/* Animated Agents with updated uniform paths */}
      <MovingAgent role="Receptionist" color="text-default-500" icon={<Icons.Receptionist />} delay={0}
        path={[
          { left: '8%', top: '45%' },  // Front Desk
          { left: '12%', top: '12%' }, // OPD
          { left: '8%', top: '45%' },  // Front Desk
          { left: '50%', top: '50%' }, // Core
        ]}
      />
      <MovingAgent role="Sr. Doctor" color="text-primary" icon={<Icons.Doctor />} delay={5}
        path={[
          { left: '12%', top: '12%' }, // OPD
          { left: '50%', top: '50%' }, // Core
          { left: '92%', top: '45%' }, // ER
          { left: '50%', top: '50%' }, // Core
        ]}
      />
      <MovingAgent role="Staff Nurse" color="text-success" icon={<Icons.Nurse />} delay={8}
        path={[
          { left: '50%', top: '50%' }, // Core
          { left: '92%', top: '45%' }, // ER
          { left: '12%', top: '12%' }, // OPD
          { left: '50%', top: '50%' }, // Core
        ]}
      />
      <MovingAgent role="Pharmacist" color="text-secondary" icon={<Icons.Pharmacy />} delay={12}
        path={[
          { left: '88%', top: '12%' }, // Pharmacy
          { left: '50%', top: '50%' }, // Core
          { left: '88%', top: '78%' }, // Lab (Right bottom)
          { left: '50%', top: '50%' }, // Core
        ]}
      />
      <MovingAgent role="Technician" color="text-warning" icon={<Icons.Radiology />} delay={18}
        path={[
          { left: '12%', top: '78%' }, // Radiology
          { left: '50%', top: '50%' }, // Core
          { left: '92%', top: '45%' }, // ER
          { left: '50%', top: '50%' }, // Core
        ]}
      />
      <MovingAgent role="Patient" color="text-default-400" icon={<Icons.Patient />} delay={2}
        path={[
          { left: '8%', top: '45%' },  // Front Desk
          { left: '12%', top: '12%' }, // OPD
          { left: '12%', top: '75%' }, // Radiology
          { left: '50%', top: '50%' }, // Core
          { left: '88%', top: '12%' }, // Pharmacy
        ]}
      />
    </div>
  );
};

const MovingAgent = ({ icon, color, delay, role, path }: any) => {
  return (
    <motion.div
      initial={path[0]}
      animate={{
        left: path.map((p: any) => p.left),
        top: path.map((p: any) => p.top),
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      className="absolute z-10"
    >
      <Card className="flex flex-row items-center gap-2 p-1.5 px-3 shadow-xl border-none bg-background/80 backdrop-blur-md" isBlurred>
        <div className={color}>{icon}</div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase text-default-500 leading-none">{role}</span>
          <span className="text-[7px] text-primary/60 font-medium">In Transit</span>
        </div>
      </Card>
      {/* Trace effect */}
      <motion.div
        className={`absolute inset-0 rounded-xl blur-md -z-10 ${color.replace('text-', 'bg-')}/20`}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default HospitalVisualizer;
