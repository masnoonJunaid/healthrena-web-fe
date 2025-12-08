import { title } from "@/components/primitives";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

export default function ContactPage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="text-center max-w-4xl px-6">
                <h1 className={title({ size: "lg" })}>Ready to transform your hospital?</h1>
                <p className="mt-6 text-lg text-default-600">
                    Get in touch with our team to learn how HealthRena can help streamline your operations
                    and improve patient care.
                </p>
                <div className="mt-8">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                            size: "lg"
                        })}
                        href="mailto:contact@healthrena.com"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
