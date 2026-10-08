import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Container, Section } from "@/components/site/ui";
import { EstimateForm } from "@/components/site/forms";

export const Route = createFileRoute("/estimation-revenus")({
  head: () => seo("Estimation des revenus locatifs à Tanger", "Demandez une estimation gratuite de votre location courte durée à Tanger, adaptée à votre quartier, votre logement et la saisonnalité locale."),
  component: () => (
    <Section tone="sand" className="pb-24 pt-40 md:pb-32 lg:pt-48">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Estimation gratuite · Tanger</p>
          <h1 className="text-5xl leading-[1.02] md:text-7xl">Ce que votre logement pourrait <em className="text-accent">vous rapporter</em>.</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">Quelle est la valeur locative de votre logement à Tanger ? Votre quartier, la surface, les équipements et la saisonnalité nous permettent de préparer une estimation personnalisée — sans engagement.</p>
          <ol className="mt-12 space-y-4 border-t border-border-strong pt-8 text-sm">
            <li><span className="text-accent-deep">01 —</span> Vous remplissez le formulaire</li>
            <li><span className="text-accent-deep">02 —</span> Nous étudions votre logement</li>
            <li><span className="text-accent-deep">03 —</span> Vous recevez votre estimation détaillée</li>
          </ol>
        </div>
        <div className="border border-border-strong bg-card p-6 md:p-12 lg:col-span-7">
          <EstimateForm />
        </div>
      </Container>
    </Section>
  ),
});
