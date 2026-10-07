import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type To = "/" | "/services" | "/proprietaires" | "/estimation-revenus" | "/a-propos" | "/faq" | "/contact";

export function ButtonLink({ to, children, variant = "dark", className }: { to: To; children: ReactNode; variant?: "dark" | "light" | "outline" | "accent"; className?: string }) {
  const styles = {
    dark: "bg-primary text-primary-foreground hover:bg-accent",
    accent: "bg-accent text-accent-foreground hover:bg-primary",
    light: "bg-background text-foreground hover:bg-sand",
    outline: "border border-current hover:bg-foreground/5",
  }[variant];
  return (
    <Link to={to} className={cn("inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300", styles, className)}>
      {children}
    </Link>
  );
}

export function SectionTitle({ eyebrow, title, intro, className, center }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; className?: string; center?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="text-4xl leading-[1.08] md:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: ReactNode; intro?: ReactNode; image?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-40 md:px-10 lg:grid-cols-12 lg:pb-28 lg:pt-48">
        <div className={image ? "lg:col-span-7" : "lg:col-span-10"}>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="text-5xl leading-[1.02] md:text-7xl">{title}</h1>
          {intro && <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <img src={image} alt="" width={1200} height={1500} className="aspect-[4/5] w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-7xl px-6 md:px-10", className)}>{children}</div>;
}
