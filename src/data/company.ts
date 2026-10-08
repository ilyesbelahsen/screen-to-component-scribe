// Informations de l'entreprise — à remplacer par vos vraies coordonnées.
export const company = {
  name: "Maison Hôte",
  tagline: "Conciergerie de location courte durée à Tanger",
  city: "Tanger, Maroc",
  email: "",
  phone: "",
  address: "",
  hours: "",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
};

export const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/proprietaires", label: "Propriétaires" },
  { to: "/estimation-revenus", label: "Estimation revenus" },
  { to: "/a-propos", label: "À propos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

// URL du webhook n8n (laisser vide tant que non connecté).
// Peut aussi être défini via la variable VITE_N8N_WEBHOOK_URL.
export const webhookUrl: string = import.meta.env["VITE_N8N_WEBHOOK_URL"] ?? "";
