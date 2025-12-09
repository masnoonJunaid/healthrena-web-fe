import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full overflow-x-hidden">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 text-center max-w-5xl mx-auto">
        <h1 className={title({ class: "leading-tight text-center break-normal !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl block w-full" })}>
          <span className="inline">Less </span>
          <span className={title({ color: "violet", class: "inline" })}>paperwork </span>
          <span className="inline">and </span>
          <span className="inline">administrative burden, </span>
          <span className="inline">more </span>
          <span className={title({ color: "violet", class: "inline" })}>patient care </span>
          <span className="inline">and clinical </span>
          <span className={title({ color: "violet", class: "inline" })}>efficiency.</span>
        </h1>
        <div className={subtitle({ class: "mt-6 text-base sm:text-lg leading-relaxed text-center break-normal" })}>
          Software built for doctors, by people who understand healthcare operations.
          We know your time is valuable - every minute spent on administrative tasks is a minute away from patient care.
          HealthRena improves your workflows, integrates with your existing systems, and helps your team focus on what matters most.
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center px-4">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/contact"
        >
          Get Started
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/features"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
