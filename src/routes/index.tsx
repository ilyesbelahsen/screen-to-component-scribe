import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/tanger-living.jpg";
import bedroom from "@/assets/bedroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import { seo } from "@/lib/seo";
import { ButtonLink, Container, Section, SectionTitle } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import {
  BenefitsSection,
  FaqList,
  FinalCta,
  ServicesList,
  StatsBand,
  TestimonialsSection,
  ValuesSection,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Conciergerie Airbnb à Tanger",
      "Gestion de votre location courte durée à Tanger : annonces Airbnb et Booking, accueil des voyageurs, ménage et optimisation des revenus.",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <Section tone="ink" className="relative flex min-h-svh items-end overflow-hidden">
        <img
          src={hero}
          alt="Illustration d'un appartement d'inspiration tangéroise avec terrasse sur la mer"
          width={1920}
          height={1152}
          className="absolute inset-0 h-full w-full object-cover animate-in fade-in duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <Container className="relative w-full pb-20 pt-40 md:pb-28">
          <p className="eyebrow mb-6 !text-ink-foreground/80">
            Tanger, Maroc · Location courte durée
          </p>
          <h1 className="max-w-4xl text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
            Conciergerie à Tanger.
            <br />
            <em>L'art de recevoir.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-85">
            Votre logement à Tanger, géré de A à Z. Gagnez du temps, soignez l'expérience de vos
            voyageurs et optimisez vos revenus sur Airbnb et Booking — même à distance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink to="/contact" variant="light">
              Nous contacter
            </ButtonLink>
            <ButtonLink to="/services" variant="outline">
              Découvrir nos services
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <StatsBand />
      <BenefitsSection />

      <Section tone="ivory" className="pb-24 md:pb-36">
        <Container className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <img
              src={bedroom}
              alt="Chambre aux standards hôteliers"
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 md:mt-40">
            <img
              src={kitchen}
              alt="Plateau d'accueil pour les voyageurs"
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </Container>
      </Section>

      <Section tone="sand" className="py-24 md:py-36">
        <Container>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <SectionTitle
                eyebrow="Nos services"
                title="Un accompagnement complet, du premier shooting au dernier check-out."
              />
            </Reveal>
            <ButtonLink to="/services" variant="outline">
              Tous les services
            </ButtonLink>
          </div>
          <ServicesList />
        </Container>
      </Section>

      <ValuesSection />
      <TestimonialsSection />

      <Section tone="ivory" className="py-24 md:py-36">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
          </Reveal>
          <div className="lg:col-span-8">
            <FaqList limit={5} />
            <ButtonLink to="/faq" variant="outline" className="mt-10">
              Toutes les questions
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
