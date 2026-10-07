import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Container } from "@/components/site/ui";
import { EstimateForm } from "@/components/site/forms";

export const Route = createFileRoute("/estimation-revenus")({
  head: () => seo("Estimation gratuite de vos revenus", "Demandez une estimation gratuite et personnalisée des revenus locatifs de votre logement en courte durée."),
  component: () => (
    <section className="pb-24 pt-40 md:pb-32 lg:pt-48">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Estimation gratuite</p>
          <h1 className="text-5xl leading-[1.02] md:text-7xl">Ce que votre logement pourrait <em className="text-accent">vous rapporter</em>.</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">Quelques informations suffisent. Nous analysons votre bien et le marché local, puis revenons vers vous sous 48h — sans engagement.</p>
          <ol className="mt-12 space-y-4 border-t border-border pt-8 text-sm">
            <li><span className="text-accent">01 —</span> Vous remplissez le formulaire</li>
            <li><span className="text-accent">02 —</span> Nous étudions votre logement</li>
            <li><span className="text-accent">03 —</span> Vous recevez votre estimation détaillée</li>
          </ol>
        </div>
        <div className="border border-border bg-card p-6 md:p-12 lg:col-span-7">
          <EstimateForm />
        </div>
      </Container>
    </section>
  ),
});
