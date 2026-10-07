export type Service = { title: string; description: string; details: string[] };

export const services: Service[] = [
  { title: "Création & optimisation des annonces", description: "Des annonces rédigées avec soin et optimisées pour ressortir sur Airbnb, Booking et les plateformes premium.", details: ["Rédaction bilingue", "Optimisation du référencement", "Multi-diffusion"] },
  { title: "Photographie", description: "Un shooting professionnel qui révèle le caractère de votre logement et augmente le taux de clic.", details: ["Photographe dédié", "Mise en scène", "Retouches"] },
  { title: "Gestion des réservations", description: "Calendriers synchronisés, sélection des voyageurs et suivi de chaque séjour.", details: ["Calendrier unifié", "Vérification des voyageurs", "Suivi en temps réel"] },
  { title: "Communication voyageurs", description: "Une réponse rapide et attentionnée, avant, pendant et après le séjour, 7 jours sur 7.", details: ["Réponse 7j/7", "Guide d'accueil", "Recommandations locales"] },
  { title: "Check-in / check-out", description: "Un accueil personnalisé ou autonome, et un état des lieux rigoureux à chaque départ.", details: ["Accueil en personne", "Boîte à clés sécurisée", "État des lieux"] },
  { title: "Ménage & linge", description: "Un entretien de standard hôtelier, linge de lit et serviettes fournis et blanchis.", details: ["Ménage hôtelier", "Linge premium", "Consommables d'accueil"] },
  { title: "Maintenance", description: "Un réseau d'artisans de confiance pour intervenir rapidement en cas d'imprévu.", details: ["Petites réparations", "Artisans partenaires", "Contrôles réguliers"] },
  { title: "Tarification dynamique", description: "Des prix ajustés chaque jour selon la demande, les événements et la saisonnalité.", details: ["Analyse du marché", "Ajustement quotidien", "Rapport mensuel"] },
];

export const benefits = [
  { title: "Gagner du temps", text: "Plus de messages à 23h ni d'allers-retours pour remettre des clés. Nous gérons tout." },
  { title: "Optimiser vos revenus", text: "Tarification dynamique et annonces soignées pour viser le meilleur rendement." },
  { title: "Ne plus gérer les imprévus", text: "Fuite, clé oubliée, voyageur en retard : notre équipe intervient à votre place." },
  { title: "Une meilleure expérience voyageur", text: "Un accueil digne d'un hôtel qui se traduit en avis cinq étoiles." },
];

export const steps = [
  { title: "Échange", text: "Un premier appel pour comprendre votre bien, vos objectifs et vos contraintes." },
  { title: "Analyse du logement", text: "Visite, étude du marché local et estimation réaliste de vos revenus." },
  { title: "Mise en place", text: "Shooting, annonce, équipement et préparation du logement aux standards hôteliers." },
  { title: "Gestion quotidienne", text: "Nous gérons les séjours, vous suivez vos revenus en toute transparence." },
];

export const values = [
  { title: "Réactivité", text: "Une équipe locale joignable et des interventions rapides." },
  { title: "Transparence", text: "Des comptes clairs, un reporting mensuel, aucun frais caché." },
  { title: "Performance", text: "Des décisions guidées par les données pour maximiser votre rendement." },
  { title: "Sérénité", text: "Votre bien est entretenu et respecté comme s'il était le nôtre." },
];
