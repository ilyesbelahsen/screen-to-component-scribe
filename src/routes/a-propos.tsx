import { createFileRoute } from "@tanstack/react-router";
import keys from "@/assets/keys.jpg";
import { seo } from "@/lib/seo";
import { company } from "@/data/company";
import { Container, PageHero, Section } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta, ValuesSection } from "@/components/site/sections";

export const Route = createFileRoute("/a-propos")({
  head: () => seo("Notre conciergerie à Tanger", "Découvrez notre approche de la conciergerie à Tanger : hospitalité, soin du logement et accompagnement des propriétaires, sur place ou à distance."),
  component: () => (
    <>
      <PageHero eyebrow="À propos · Tanger" title={<>Une entreprise familiale, <em className="text-accent">ancrée à Tanger</em>.</>} intro={`${company.name} est une entreprise familiale qui accompagne la location courte durée à Tanger avec une conviction : un logement soigné et un accueil attentionné font toute la différence.`} />
      <Section tone="sand" className="py-24 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal><img src={keys} alt="Remise des clés" loading="lazy" width={1600} height={1104} className="aspect-[4/3] w-full object-cover" /></Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="font-display text-3xl leading-snug text-foreground">Une entreprise familiale, c'est une relation de confiance qui se construit dans la durée.</p>
            <p>Entre la médina, la baie et les quartiers résidentiels, les voyageurs ne recherchent pas tous la même expérience. Notre approche met en valeur les atouts de votre logement et son environnement.</p>
            <p>En tant qu'entreprise familiale, nous accompagnons les propriétaires avec une attention personnelle et constante, qu'ils vivent au Maroc ou à l'étranger. L'objectif : un logement entretenu, des voyageurs bien accueillis et une gestion transparente.</p>
          </Reveal>
        </Container>
      </Section>
      <ValuesSection />
      <FinalCta />
    </>
  ),
});
