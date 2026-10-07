import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Container, PageHero } from "@/components/site/ui";
import { FaqList, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () => seo("Questions fréquentes", "Commission, engagement, linge, réglementation : toutes les réponses sur notre conciergerie de location courte durée."),
  component: () => (
    <>
      <PageHero eyebrow="FAQ" title="Vos questions, nos réponses." intro="Vous ne trouvez pas votre réponse ? Contactez-nous, nous vous répondons rapidement." />
      <section className="py-24"><Container className="max-w-4xl"><FaqList /></Container></section>
      <FinalCta />
    </>
  ),
});
