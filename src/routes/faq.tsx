import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Container, PageHero, Section } from "@/components/site/ui";
import { FaqList, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ : location courte durée à Tanger", "Les réponses à vos questions sur la conciergerie à Tanger : accompagnement à distance, types de biens, gestion des séjours et réglementation locale."),
  component: () => (
    <>
      <PageHero eyebrow="FAQ · Tanger" title="Vos questions, nos réponses." intro="Vous préparez la mise en location de votre logement à Tanger ? Parlons de votre projet et de vos questions." />
      <Section tone="sand" className="py-24"><Container className="max-w-4xl"><FaqList /></Container></Section>
      <FinalCta tone="ivory" />
    </>
  ),
});
