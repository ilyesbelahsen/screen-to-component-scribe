// Informations de l'entreprise — à remplacer par vos vraies coordonnées.
export const company = {
  name: "Maison Hôte",
  tagline: "Conciergerie de location courte durée",
  city: "Paris & alentours",
  email: "contact@maison-hote.fr",
  phone: "+33 1 00 00 00 00",
  address: "00 rue de l'Exemple, 75000 Paris",
  hours: "Lundi – samedi, 9h – 19h",
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
