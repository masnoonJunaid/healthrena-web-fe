import { title } from "@/components/primitives";

export default function FeaturesPage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="text-center max-w-6xl px-6">
                <h1 className={title({ size: "lg" })}>Our Features</h1>
                <p className="mt-4 text-lg text-default-600 max-w-3xl mx-auto">
                    HealthRena provides comprehensive tools to manage every aspect of your healthcare facility.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
                <FeatureCard
                    title="Patient Management"
                    description="Streamline patient records, appointments, and history with our intuitive system."
                />
                <FeatureCard
                    title="Outreach & Marketing"
                    description="Engage with patients and grow your reach through targeted marketing campaigns."
                />
                <FeatureCard
                    title="Internal Operations"
                    description="Optimize staff workflows, inventory, and resource allocation efficiently."
                />
                <FeatureCard
                    title="OT Management"
                    description="Seamlessly schedule and manage Operation Theatres for maximum utilization."
                />
                <FeatureCard
                    title="Machine Integrations"
                    description="Connect with medical devices for real-time data and automated reporting."
                />
                <FeatureCard
                    title="Task Tracking"
                    description="Assign and track tasks across departments to ensure nothing falls through the cracks."
                />
                <FeatureCard
                    title="Telemedicine & Virtual Care"
                    description="Integrated video consultations and remote monitoring for seamless patient care."
                />
                <FeatureCard
                    title="Pharmacy & Inventory"
                    description="Smart stock management, expiry alerts, and automated reordering."
                />
                <FeatureCard
                    title="Laboratory Information System"
                    description="Sample tracking, machine interfacing, and auto-report generation."
                />
                <FeatureCard
                    title="Billing & Insurance"
                    description="Automated claims processing, TPA management, and transparent billing."
                />
                <FeatureCard
                    title="AI-Powered EHR"
                    description="Voice-to-text clinical notes, predictive diagnosis support, and longitudinal records."
                />
                <FeatureCard
                    title="Analytics & BI"
                    description="Real-time dashboards for hospital occupancy, revenue, and operational efficiency."
                />
                <FeatureCard
                    title="Emergency Response"
                    description="Ambulance tracking and emergency room triage management."
                />
                <FeatureCard
                    title="Patient Mobile Portal"
                    description="App for appointments, reports, and medication reminders."
                />
            </div>
        </section>
    );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-6 border border-default-200 rounded-xl hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-default-600">{description}</p>
        </div>
    );
}
