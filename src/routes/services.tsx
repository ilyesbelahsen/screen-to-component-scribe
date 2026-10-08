import { createFileRoute } from "@tanstack/react-router";
import kitchen from "@/assets/kitchen.jpg";
import { seo } from "@/lib/seo";
import { Container, PageHero } from "@/components/site/ui";
import { FinalCta, ServicesList, StepsSection } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => seo("Nos services de conciergerie", "Annonces, photographie, réservations, accueil, ménage, maintenance et tarification dynamique pour votre location courte durée."),
  component: () => (
    <>
      <PageHero eyebrow="Services" title={<>Tout ce qu'il faut, <em className="text-accent">rien de superflu</em>.</>} intro="Chaque service est pensé pour une seule chose : que votre logement soit rentable et que vos voyageurs aient envie de revenir." image={kitchen} />
      <section className="py-24 md:py-32"><Container><ServicesList detailed /></Container></section>
      <StepsSection />
      <FinalCta />
    </>
  ),
});
