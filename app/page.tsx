import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full overflow-x-hidden">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 text-center max-w-5xl mx-auto">
        <h1 className={title({ class: "leading-tight text-center break-words" })}>
          <span className="inline">Less&nbsp;</span>
          <span className={title({ color: "violet", class: "inline" })}>paperwork&nbsp;</span>
          <span className="inline">and&nbsp;</span>
          <span className={title({ color: "violet", class: "inline" })}>administrative burden,&nbsp;</span>
          <span className="inline">more&nbsp;</span>
          <span className={title({ color: "violet", class: "inline" })}>patient care&nbsp;</span>
          <span className="inline">and&nbsp;</span>
          <span className={title({ color: "violet", class: "inline" })}>clinical efficiency.</span>
        </h1>
        <div className={subtitle({ class: "mt-6 text-base sm:text-lg leading-relaxed text-center break-words" })}>
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
