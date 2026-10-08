import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { services, benefits, steps, values } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faq } from "@/data/faq";
import { stats } from "@/data/stats";
import { Reveal } from "./Reveal";
import { ButtonLink, Container, Section, SectionTitle } from "./ui";
import type { SectionTone } from "./ui";
import keys from "@/assets/keys.jpg";

export function StatsBand() {
  return (
    <Section ariaLabel="Chiffres clés" tone="ivory" className="border-b border-border">
      <Container className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="border-border py-12 pr-6 [&:not(:first-child)]:lg:border-l lg:pl-8">
            <p className="font-display text-5xl md:text-6xl">{s.value}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </Container>
    </Section>
  );
}

export function BenefitsSection() {
  return (
    <Section tone="sand" className="py-24 md:py-36">
      <Container className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionTitle eyebrow="Pour les propriétaires" title={<>Votre logement, <em className="text-accent">sans la charge</em>.</>} intro="Vous gardez la propriété et les revenus. Nous prenons tout le reste en main, avec l'exigence d'un hôtel." />
        </Reveal>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-7">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="bg-background p-8 md:p-10">
              <p className="font-display text-lg text-accent">0{i + 1}</p>
              <h3 className="mt-6 text-3xl">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ServicesList({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="border-t border-border-strong">
      {services.map((s, i) => (
        <li key={s.title}>
          <Reveal className="grid gap-4 border-b border-border-strong py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <span className="font-display text-lg text-accent md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-3xl md:col-span-5 md:text-4xl">{s.title}</h3>
            <div className="md:col-span-6">
              <p className="leading-relaxed text-muted-foreground">{s.description}</p>
              {detailed && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.details.map((d) => (
                    <li key={d} className="border border-border-strong px-3 py-1.5 text-xs tracking-wide">{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function StepsSection() {
  return (
    <Section tone="ivory" className="py-24 md:py-36">
      <Container>
        <Reveal><SectionTitle eyebrow="Comment ça marche" title="Quatre étapes, un seul interlocuteur." /></Reveal>
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <li className="border-t border-foreground/30 pt-6">
                <p className="eyebrow">Étape {i + 1}</p>
                <h3 className="mt-4 text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export function EstimateBand() {
  return (
    <Section tone="ink">
      <div className="grid lg:grid-cols-2">
        <img src={keys} alt="Remise des clés par un concierge" loading="lazy" width={1600} height={1104} className="h-72 w-full object-cover lg:h-full" />
        <Reveal className="px-6 py-20 md:px-16 lg:py-32">
          <p className="eyebrow mb-6">Estimation gratuite</p>
          <h2 className="text-4xl leading-tight md:text-6xl">Combien pourrait rapporter votre logement ?</h2>
          <p className="mt-6 max-w-md leading-relaxed opacity-75">Recevez sous 48h une estimation personnalisée, fondée sur votre bien et le marché local. Sans engagement.</p>
          <ButtonLink to="/estimation-revenus" variant="light" className="mt-10">Estimer mes revenus</ButtonLink>
        </Reveal>
      </div>
    </Section>
  );
}

export function ValuesSection() {
  return (
    <Section tone="ivory" className="py-24 md:py-36">
      <Container>
        <Reveal><SectionTitle eyebrow="Pourquoi nous" title="L'exigence de l'hôtellerie, la proximité d'un partenaire local." /></Reveal>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <h3 className="text-3xl italic">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section tone="sand" className="py-24 md:py-36">
      <Container>
        <Reveal><SectionTitle eyebrow="Avis propriétaires" title="Ils nous ont confié leur bien." /></Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure>
                <blockquote className="font-display text-2xl leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FaqList({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <div className="border-t border-border-strong">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-border-strong">
            <h3 className="font-sans">
              <button className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                {f.q}
                {isOpen ? <Minus className="size-4 shrink-0 text-accent" /> : <Plus className="size-4 shrink-0 text-accent" />}
              </button>
            </h3>
            {isOpen && <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function FinalCta({ tone = "sand" }: { tone?: SectionTone }) {
  return (
    <Section tone={tone} className="py-28 md:py-40">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl leading-[1.1] md:text-6xl lg:text-7xl">Et si vous arrêtiez de gérer votre location pour commencer à <em className="text-accent">en profiter</em> ?</h2>
          <ButtonLink to="/estimation-revenus" className="mt-12">Estimer mes revenus</ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}
