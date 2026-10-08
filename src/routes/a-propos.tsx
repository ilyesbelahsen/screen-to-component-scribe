import { createFileRoute } from "@tanstack/react-router";
import keys from "@/assets/keys.jpg";
import { seo } from "@/lib/seo";
import { company } from "@/data/company";
import { Container, PageHero, Section } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta, ValuesSection } from "@/components/site/sections";

export const Route = createFileRoute("/a-propos")({
  head: () => seo("À propos de notre conciergerie", "Une conciergerie locale, humaine et exigeante, inspirée des codes de l'hôtellerie haut de gamme."),
  component: () => (
    <>
      <PageHero eyebrow="À propos" title={<>L'hospitalité comme <em className="text-accent">métier</em>.</>} intro={`${company.name} est née d'une conviction : un logement bien tenu et un accueil sincère font toute la différence, pour les voyageurs comme pour les propriétaires.`} />
      <Section tone="sand" className="py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal><img src={keys} alt="Remise des clés" loading="lazy" width={1600} height={1104} className="aspect-[4/3] w-full object-cover" /></Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="font-display text-3xl leading-snug text-foreground">[Votre histoire à personnaliser] Une équipe locale issue de l'hôtellerie et de l'immobilier.</p>
            <p>Nous accompagnons des propriétaires qui veulent profiter de la location courte durée sans en subir les contraintes. Chaque logement est suivi par un interlocuteur dédié qui le connaît dans ses moindres détails.</p>
            <p>Notre approche associe le soin du détail de l'hôtellerie haut de gamme à une gestion rigoureuse, guidée par les données, pour des résultats durables.</p>
          </Reveal>
        </Container>
      </Section>
      <ValuesSection />
      <FinalCta />
    </>
  ),
});
