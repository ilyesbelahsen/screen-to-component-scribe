import { Link } from "@tanstack/react-router";
import { company, nav } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-3xl">{company.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">{company.tagline} — {company.city}.</p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-70 transition-opacity hover:opacity-100">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <address className="space-y-2 text-sm not-italic opacity-80">
          <p>{company.city}</p>
          {company.email && <p><a href={`mailto:${company.email}`} className="hover:underline">{company.email}</a></p>}
          {company.phone && <p><a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:underline">{company.phone}</a></p>}
          {company.address && <p>{company.address}</p>}
          {company.hours && <p>{company.hours}</p>}
          <p><Link to="/contact" className="hover:underline">Parlons de votre logement</Link></p>
        </address>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs opacity-50 md:px-10">© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
