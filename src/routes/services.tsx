import { createFileRoute } from "@tanstack/react-router";
import kitchen from "@/assets/kitchen.jpg";
import { seo } from "@/lib/seo";
import { Container, PageHero, Section } from "@/components/site/ui";
import { FinalCta, ServicesList, StepsSection } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => seo("Services de conciergerie à Tanger", "À Tanger : annonces Airbnb et Booking, photographie, réservations, accueil, ménage, maintenance et tarification pour votre location courte durée."),
  component: () => (
    <>
      <PageHero eyebrow="Nos services à Tanger" title={<>Tout ce qu'il faut, <em className="text-accent">rien de superflu</em>.</>} intro="De votre annonce à l'accueil sur place, nous prenons soin de votre logement à Tanger et de chaque séjour, pour que vos voyageurs aient envie de revenir." image={kitchen} />
      <Section tone="sand" className="py-24 md:py-32"><Container><ServicesList detailed /></Container></Section>
      <StepsSection />
      <FinalCta />
    </>
  ),
});
