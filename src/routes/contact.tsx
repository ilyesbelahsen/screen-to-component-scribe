import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { company } from "@/data/company";
import { Container, Section } from "@/components/site/ui";
import { ContactForm } from "@/components/site/forms";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contactez votre conciergerie à Tanger", "Parlons de votre appartement ou maison à Tanger et de votre projet de location courte durée. Contact et demande d'accompagnement personnalisé."),
  component: () => (
    <Section tone="sand" className="pb-24 pt-40 md:pb-32 lg:pt-48">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Contact · Tanger</p>
          <h1 className="text-5xl leading-[1.02] md:text-7xl">Parlons de <em className="text-accent">votre logement</em>.</h1>
          <dl className="mt-12 space-y-6 border-t border-border-strong pt-8">
            {[["Zone d'activité", company.city], ["Email", company.email || "À renseigner"], ["Téléphone", company.phone || "À renseigner"], ["Adresse", company.address || "À renseigner"], ["Horaires", company.hours || "À confirmer"]].map(([k, v]) => (
              <div key={k}><dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{k}</dt><dd className="mt-1 text-lg">{v}</dd></div>
            ))}
          </dl>
        </div>
        <div className="border border-border-strong bg-card p-6 md:p-12 lg:col-span-7"><ContactForm /></div>
      </Container>
    </Section>
  ),
});
