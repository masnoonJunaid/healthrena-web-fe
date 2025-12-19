import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import HospitalHero from "@/components/hospital-hero";

export default function Home() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12">
        {/* Two-column responsive hero: text left, visualization right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
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

            <div className="mt-8 flex flex-wrap gap-3">
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
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-xl">
              <HospitalHero />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
