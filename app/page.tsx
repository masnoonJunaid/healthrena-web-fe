import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="pl-28 pr-28 text-center justify-center">
        <span className={title()}>Less&nbsp;</span>
        <span className={title({ color: "violet" })}>paperwork&nbsp;</span>
        <span className={title()}>and&nbsp;</span>
        <span className={title({ color: "violet" })}>administrative burden,&nbsp;</span>
        <span className={title()}>more&nbsp;</span>
        <span className={title({ color: "violet" })}>patient care&nbsp;</span>
        <br />
        <span className={title()}>and&nbsp;</span>
        <span className={title({ color: "violet" })}>clinical efficiency.&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}>
          Software built for doctors, by people who understand healthcare operations.
          We know your time is valuable - every minute spent on administrative tasks is a minute away from patient care.
          HealthRena improves your workflows, integrates with your existing systems, and helps your team focus on what matters most.
        </div>
      </div>

      <div className="flex gap-3">
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
