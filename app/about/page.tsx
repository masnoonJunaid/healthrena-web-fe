import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <>
      <h1 className={title({ size: "lg" })}>About HealthRena</h1>
      <p className="mt-6 text-lg text-default-600">
        HealthRena is a platform designed to modernize healthcare delivery.
        By integrating advanced AI, we help hospitals improve patient outcomes, operations, and drive growth.
        From small clinics to large multi-specialty hospitals, HealthRena scales with your needs.
      </p>
    </>
  );
}
