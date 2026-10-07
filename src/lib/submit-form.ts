import { webhookUrl } from "@/data/company";

/**
 * Envoie un formulaire vers le webhook n8n s'il est configuré.
 * Sans URL configurée, la soumission est simulée (frontend uniquement).
 */
export async function submitForm(formType: string, data: Record<string, string>) {
  const payload = { formType, submittedAt: new Date().toISOString(), ...data };
  if (!webhookUrl) {
    console.info("[formulaire] webhook non configuré, envoi simulé :", payload);
    await new Promise((r) => setTimeout(r, 700));
    return;
  }
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Erreur ${res.status}`);
}
