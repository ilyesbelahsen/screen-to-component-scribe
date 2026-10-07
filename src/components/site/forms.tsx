import { useState, type FormEvent, type ReactNode } from "react";
import { submitForm } from "@/lib/submit-form";
import { cn } from "@/lib/utils";

const fieldCls = "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-accent";

function Field({ label, name, type = "text", required, className, children, placeholder }: { label: string; name: string; type?: string; required?: boolean; className?: string; children?: ReactNode; placeholder?: string }) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}{required && " *"}</span>
      {children ?? <input name={name} type={type} required={required} placeholder={placeholder} className={fieldCls} />}
    </label>
  );
}

function useSubmit(formType: string) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setState("sending");
    try {
      await submitForm(formType, data);
      setState("done");
    } catch {
      setState("error");
    }
  };
  return { state, onSubmit };
}

function Success({ title, text }: { title: string; text: string }) {
  return (
    <div role="status" className="border border-border bg-card p-10">
      <p className="eyebrow">Merci</p>
      <h3 className="mt-4 text-4xl">{title}</h3>
      <p className="mt-4 text-muted-foreground">{text}</p>
    </div>
  );
}

function Submit({ state, label }: { state: string; label: string }) {
  return (
    <div className="sm:col-span-2">
      <button type="submit" disabled={state === "sending"} className="bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60">
        {state === "sending" ? "Envoi…" : label}
      </button>
      {state === "error" && <p className="mt-4 text-sm text-destructive">L'envoi a échoué. Merci de réessayer ou de nous écrire directement.</p>}
    </div>
  );
}

export function EstimateForm() {
  const { state, onSubmit } = useSubmit("estimation");
  if (state === "done") return <Success title="Votre demande est bien reçue." text="Nous revenons vers vous sous 48h avec une estimation personnalisée." />;
  return (
    <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
      <Field label="Prénom" name="prenom" required />
      <Field label="Nom" name="nom" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Téléphone" name="telephone" type="tel" required />
      <Field label="Ville" name="ville" required />
      <Field label="Type de logement" name="type">
        <select name="type" className={fieldCls} defaultValue="Appartement">
          <option>Studio</option><option>Appartement</option><option>Maison</option><option>Autre</option>
        </select>
      </Field>
      <Field label="Chambres" name="chambres">
        <input name="chambres" type="number" min={0} className={fieldCls} />
      </Field>
      <Field label="Surface (m²)" name="surface">
        <input name="surface" type="number" min={0} className={fieldCls} />
      </Field>
      <Field label="Lien Airbnb / Booking (optionnel)" name="lien" type="url" className="sm:col-span-2" placeholder="https://" />
      <Field label="Message" name="message" className="sm:col-span-2">
        <textarea name="message" rows={4} className={cn(fieldCls, "resize-none")} />
      </Field>
      <Submit state={state} label="Recevoir mon estimation" />
    </form>
  );
}

export function ContactForm() {
  const { state, onSubmit } = useSubmit("contact");
  if (state === "done") return <Success title="Message envoyé." text="Nous vous répondons dans les plus brefs délais." />;
  return (
    <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
      <Field label="Nom complet" name="nom" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Téléphone" name="telephone" type="tel" className="sm:col-span-2" />
      <Field label="Message" name="message" className="sm:col-span-2">
        <textarea name="message" rows={5} required className={cn(fieldCls, "resize-none")} />
      </Field>
      <Submit state={state} label="Envoyer" />
    </form>
  );
}
