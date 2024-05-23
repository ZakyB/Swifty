import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Comment l'utiliser",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "2",
    title: "Un chatbot customiser",
    text: "Permet une aide efficace et rapide en tout temps avec une consistance des réponses pratique pour l'utilisateur.",
    date: "Janvier 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Intégration avec des API certifiés par Swifty",
    text: "Ces APIs vont permettre d'étendre les possibilités de customisation des utilisateurs à un tout autre niveau",
    date: "Juin 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Notre intelligence artificielle va vous proposer des plans appropriés à votre restaurant, des suggestions de menus selon l'affluence et énormement plus !";

export const collabContent = [
  {
    id: "0",
    title: "Integration simple",
    text: collabText,
  },
  {
    id: "1",
    title: "Une automatisation intelligente",
  },
  {
    id: "2",
    title: "Une sécurité au top",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basique",
    description:
      "Le logiciel de gestion du restaurant idéal pour vos opérations quotidiennes",
    price: "80",
    features: [
      "Logiciel",
      "Ensemble des fonctionnalités",
      "Reporting en temps réel",
    ],
  },
  {
    id: "1",
    title: "Standard",
    description: "Une solution qui s'adapte et évolue selon vos besoins.",
    price: "130",
    features: [
      "Logiciel",
      "Ensemble des fonctionnalités",
      "24/7 Support interne",
    ],
  },
  {
    id: "2",
    title: "Prenium",
    description:
      "Concevez un abonnement perosnnalisé pour propulser votre croissance.",
    price: null,
    features: [
      "Logiciel",
      "Ensemble des fonctionnalités",
      "24/7 Support interne",
      "Installation et formation prenium",
    ],
  },
];

export const pricing2 = [
  {
    id: "0",
    title: "Basique",
    description:
      "Le logiciel de gestion du restaurant idéal pour vos opérations quotidiennes",
    price: "90",
    features: ["Logiciel", "Ensemble des fonctionnalités", "coucou"],
  },
  {
    id: "1",
    title: "Standard",
    description: "Une solution qui s'adapte et évolue selon vos besoins.",
    price: "150",
    features: [
      "Logiciel",
      "Ensemble des fonctionnalités",
      "24/7 Support interne",
    ],
  },
  {
    id: "2",
    title: "Prenium",
    description:
      "Concevez un abonnement perosnnalisé pour propulser votre croissance.",
    price: null,
    features: [
      "Logiciel",
      "Ensemble des fonctionnalités",
      "24/7 Support interne",
      "Installation et formation prenium",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Gestion des commandes",
    text: "Swifty peut vous permet de gérer les commandes directement depuis l'application avec une très grande facilité.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Plannification et affectation du personnel",
    text: "L'application vous permet d'attribuer des rôles à vos employés et de directement créer/mettre à jour leur emploi du temps.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Suivi efficace des stocks et approvisionnements",
    text: "Swifty propose une gestion des stocks en temps réel et de l'ensemble des commandes passées par les gérants.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Des réponses extrêmement rapide",
    text: "Nous équipe est disponible 24h/24 7jours/7 pour toute demande ou problème ainsi que pour l'ensemble des formations de nous proposons.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Un service plus rapide",
    text: "Commandez directement sur votre smartphone ou avec un serveur possèdant une de nos tablette pour des commandes toujours plus rapides.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Sécurité et conformité",
    text: "Les informations sensibles seront gérés automatiquement en respectant l'ensemble des règles du RGPD. Les règlementations n'auront plus aucun secret pour vous !",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
