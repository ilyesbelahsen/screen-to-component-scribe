import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { company, nav } from "@/data/company";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        overHero
          ? "text-ink-foreground"
          : "border-b border-border bg-background/95 text-foreground backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
        <Link to="/" className="font-display text-2xl tracking-wide">
          {company.name}
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.8rem] tracking-wide opacity-80 transition-opacity hover:opacity-100"
              activeProps={{
                className: "opacity-100 underline underline-offset-8 decoration-accent",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={cn(
              "hidden px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors sm:inline-flex",
              overHero
                ? "bg-background text-foreground hover:bg-sand"
                : "bg-primary text-primary-foreground hover:bg-accent",
            )}
          >
            Nous contacter
          </Link>
          <button
            className="p-2 xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="size-6" strokeWidth={1.25} />
            ) : (
              <Menu className="size-6" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-border bg-background px-6 pb-10 pt-6 xl:hidden"
        >
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="block py-3 font-display text-3xl">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
