"use client";
import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import {
    FaUserMd,
    FaBullhorn,
    FaCogs,
    FaProcedures,
    FaPlug,
    FaTasks,
    FaVideo,
    FaPills,
    FaMicroscope,
    FaFileInvoiceDollar,
    FaBrain,
    FaChartLine,
    FaAmbulance,
    FaMobileAlt
} from "react-icons/fa";

// Icon mapping for each feature
const featureIcons: Record<string, any> = {
    "Patient Management": FaUserMd,
    "Outreach & Marketing": FaBullhorn,
    "Internal Operations": FaCogs,
    "OT Management": FaProcedures,
    "Machine Integrations": FaPlug,
    "Task Tracking": FaTasks,
    "Telemedicine & Virtual Care": FaVideo,
    "Pharmacy & Inventory": FaPills,
    "Laboratory Information System": FaMicroscope,
    "Billing & Insurance": FaFileInvoiceDollar,
    "AI-Powered EHR": FaBrain,
    "Analytics & BI": FaChartLine,
    "Emergency Response": FaAmbulance,
    "Patient Mobile Portal": FaMobileAlt,
};

// Color mapping for each feature
const featureColors: Record<string, string> = {
    "Patient Management": "primary",
    "Outreach & Marketing": "secondary",
    "Internal Operations": "success",
    "OT Management": "warning",
    "Machine Integrations": "danger",
    "Task Tracking": "primary",
    "Telemedicine & Virtual Care": "secondary",
    "Pharmacy & Inventory": "success",
    "Laboratory Information System": "warning",
    "Billing & Insurance": "danger",
    "AI-Powered EHR": "primary",
    "Analytics & BI": "secondary",
    "Emergency Response": "danger",
    "Patient Mobile Portal": "success",
};

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

export default function FeaturesPage() {
    return (
        <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-hidden">
            {/* Global Background Pattern - Medical Grid */}
            <div
                className="fixed inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Hero Section with Healthcare-Themed Geometric Shapes */}
            <div className="relative w-full max-w-7xl px-6 py-12 md:py-16 overflow-hidden">
                {/* Animated Background Glows - Medical Colors */}
                <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Floating Medical-Themed Geometric Shapes */}

                {/* Medical Cross - Top Left */}
                <motion.div
                    className="absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 text-red-500/30"
                    animate={{
                        rotate: [0, 360],
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <MedicalCross className="w-full h-full" />
                </motion.div>

                {/* Pill Shape - Top Right */}
                <motion.div
                    className="absolute top-12 right-12 w-10 h-10 md:w-14 md:h-14 text-purple-500/30"
                    animate={{
                        rotate: [0, 180, 360],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <PillShape className="w-full h-full" />
                </motion.div>

                {/* DNA Helix - Left Side */}
                <motion.div
                    className="absolute top-1/3 left-4 w-14 h-14 md:w-20 md:h-20 text-blue-500/30"
                    animate={{
                        rotate: [0, -360],
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <DNAHelix className="w-full h-full" />
                </motion.div>

                {/* Heartbeat Line - Bottom Left */}
                <motion.div
                    className="absolute bottom-16 left-16 w-16 h-16 md:w-24 md:h-24 text-pink-500/30"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
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
                    className="absolute top-1/4 right-8 w-12 h-12 md:w-16 md:h-16 text-cyan-500/30"
                    animate={{
                        rotate: [45, 90, 45],
                        x: [0, -10, 0]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Syringe className="w-full h-full" />
                </motion.div>

                {/* Stethoscope - Bottom Right */}
                <motion.div
                    className="absolute bottom-20 right-20 w-14 h-14 md:w-20 md:h-20 text-teal-500/30"
                    animate={{
                        rotate: [0, 15, -15, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Stethoscope className="w-full h-full" />
                </motion.div>

                {/* Medical Shield - Center Top */}
                <motion.div
                    className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 text-emerald-500/30"
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <MedicalShield className="w-full h-full" />
                </motion.div>

                {/* Additional Medical Cross - Bottom Center */}
                <motion.div
                    className="absolute bottom-8 left-1/3 w-8 h-8 md:w-12 md:h-12 text-orange-500/30"
                    animate={{
                        rotate: [0, -360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <MedicalCross className="w-full h-full" />
                </motion.div>

                {/* Small Pills Floating - Right Bottom */}
                <motion.div
                    className="absolute bottom-32 right-8 w-8 h-8 md:w-10 md:h-10 text-indigo-500/30"
                    animate={{
                        rotate: [0, 360],
                        y: [0, 15, 0],
                        x: [0, -5, 0]
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <PillShape className="w-full h-full" />
                </motion.div>

                {/* Central Content */}
                <div className="relative text-center max-w-4xl mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={title({ size: "lg" })}>Our Features</h1>
                        <p className="mt-4 text-lg text-default-600 max-w-3xl mx-auto">
                            HealthRena provides comprehensive tools to manage every aspect of your healthcare facility.
                        </p>
                    </motion.div>

                    {/* Decorative Heartbeat Line around title */}
                    <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-8 text-primary/40"
                        animate={{
                            scaleX: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <HeartbeatLine className="w-full h-full" />
                    </motion.div>
                </div>
            </div>

            {/* Features Grid with Medical Theme */}
            <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl px-6 pb-16">
                {/* Background decorative medical shapes for the grid */}
                <motion.div
                    className="absolute -top-10 -right-10 w-24 h-24 text-primary/10"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <MedicalCross className="w-full h-full" />
                </motion.div>

                <motion.div
                    className="absolute top-1/3 -left-12 w-20 h-20 text-secondary/10"
                    animate={{
                        rotate: [0, -360],
                        y: [0, 30, 0]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <DNAHelix className="w-full h-full" />
                </motion.div>

                <motion.div
                    className="absolute bottom-20 right-10 w-16 h-16 text-success/10"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <Stethoscope className="w-full h-full" />
                </motion.div>

                <FeatureCard
                    title="Patient Management"
                    description="Streamline patient records, appointments, and history with our intuitive system."
                    index={0}
                />
                <FeatureCard
                    title="Outreach & Marketing"
                    description="Engage with patients and grow your reach through targeted marketing campaigns."
                    index={1}
                />
                <FeatureCard
                    title="Internal Operations"
                    description="Optimize staff workflows, inventory, and resource allocation efficiently."
                    index={2}
                />
                <FeatureCard
                    title="OT Management"
                    description="Seamlessly schedule and manage Operation Theatres for maximum utilization."
                    index={3}
                />
                <FeatureCard
                    title="Machine Integrations"
                    description="Connect with medical devices for real-time data and automated reporting."
                    index={4}
                />
                <FeatureCard
                    title="Task Tracking"
                    description="Assign and track tasks across departments to ensure nothing falls through the cracks."
                    index={5}
                />
                <FeatureCard
                    title="Telemedicine & Virtual Care"
                    description="Integrated video consultations and remote monitoring for seamless patient care."
                    index={6}
                />
                <FeatureCard
                    title="Pharmacy & Inventory"
                    description="Smart stock management, expiry alerts, and automated reordering."
                    index={7}
                />
                <FeatureCard
                    title="Laboratory Information System"
                    description="Sample tracking, machine interfacing, and auto-report generation."
                    index={8}
                />
                <FeatureCard
                    title="Billing & Insurance"
                    description="Automated claims processing, TPA management, and transparent billing."
                    index={9}
                />
                <FeatureCard
                    title="AI-Powered EHR"
                    description="Voice-to-text clinical notes, predictive diagnosis support, and longitudinal records."
                    index={10}
                />
                <FeatureCard
                    title="Analytics & BI"
                    description="Real-time dashboards for hospital occupancy, revenue, and operational efficiency."
                    index={11}
                />
                <FeatureCard
                    title="Emergency Response"
                    description="Ambulance tracking and emergency room triage management."
                    index={12}
                />
                <FeatureCard
                    title="Patient Mobile Portal"
                    description="App for appointments, reports, and medication reminders."
                    index={13}
                />
            </div>
        </section>
    );
}

function FeatureCard({ title, description, index }: { title: string; description: string; index: number }) {
    const Icon = featureIcons[title];
    const colorClass = featureColors[title];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.2 }
            }}
            className="group relative"
        >
            {/* Glow effect on hover */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-${colorClass} to-${colorClass}/50 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300`} />

            {/* Card content */}
            <div className="relative p-6 border border-default-200 dark:border-default-100 rounded-xl 
                          bg-white/70 dark:bg-background/60 backdrop-blur-md
                          hover:border-primary/50 dark:hover:border-primary/30
                          transition-all duration-300 h-full
                          shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-primary/5">

                {/* Icon with animated background */}
                <motion.div
                    className={`inline-flex p-3 rounded-lg bg-${colorClass}/10 dark:bg-${colorClass}/5 mb-4 relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className={`absolute inset-0 bg-${colorClass}/20`}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                    />
                    <Icon className={`text-${colorClass} text-2xl relative z-10`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-default-600 dark:text-default-500 leading-relaxed">
                    {description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-default-200/50 dark:border-default-100/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </motion.div>
    );
}
