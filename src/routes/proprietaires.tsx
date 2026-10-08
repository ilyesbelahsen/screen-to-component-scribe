import { createFileRoute } from "@tanstack/react-router";
import bedroom from "@/assets/bedroom.jpg";
import { seo } from "@/lib/seo";
import { Container, PageHero, Section, SectionTitle } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { BenefitsSection, EstimateBand, FinalCta, TestimonialsSection } from "@/components/site/sections";

const included = ["Vous restez propriétaire de votre calendrier", "Un relevé mensuel clair et détaillé", "Un interlocuteur dédié joignable", "Aucun engagement de durée", "Aucun frais de mise en place caché", "Un logement entretenu aux standards hôteliers"];

export const Route = createFileRoute("/proprietaires")({
  head: () => seo("Propriétaires à Tanger : gestion de votre logement", "Vous possédez un logement à Tanger ? Confiez sa location courte durée à une conciergerie locale, que vous viviez sur place ou à l'étranger."),
  component: () => (
    <>
      <PageHero eyebrow="Propriétaires à Tanger" title={<>Votre bien à Tanger. <em className="text-accent">Votre tranquillité, partout.</em></>} intro="Vous vivez à Tanger, ailleurs au Maroc ou à l'étranger ? Nous prenons en main votre location courte durée, avec un suivi clair et une stratégie adaptée à votre logement." image={bedroom} />
      <BenefitsSection />
      <Section tone="ivory" className="py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal><SectionTitle eyebrow="Notre engagement" title="Une relation transparente, dès le premier jour." /></Reveal>
          <ul className="border-t border-foreground/20">
            {included.map((i) => (
              <li key={i} className="flex items-baseline gap-4 border-b border-foreground/20 py-5 text-lg"><span className="text-accent-deep">—</span>{i}</li>
            ))}
          </ul>
        </Container>
      </Section>
      <TestimonialsSection />
      <EstimateBand />
      <FinalCta />
    </>
  ),
});
