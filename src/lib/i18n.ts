export type Lang = "en" | "es" | "pt-br" | "de" | "fr";

export const LANG_PATHS: Record<Lang, string> = {
  en: "/",
  es: "/es",
  "pt-br": "/pt-br",
  de: "/de",
  fr: "/fr",
};

export const LANG_OPTIONS: { value: string; label: string; lang: Lang }[] = [
  { value: "/", label: "English", lang: "en" },
  { value: "/es", label: "Espanol", lang: "es" },
  { value: "/pt-br", label: "Portugues", lang: "pt-br" },
  { value: "/de", label: "Deutsch", lang: "de" },
  { value: "/fr", label: "Francais", lang: "fr" },
];

export function langFromPath(pathname: string): Lang {
  const seg = pathname.split("/")[1];
  if (seg === "es" || seg === "pt-br" || seg === "de" || seg === "fr") return seg;
  return "en";
}

type Dict = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  placeholder: string;
  paste: string;
  download: string;
  processing: string;
  invalid: string;
  ready: string;
  howTitle: string;
  steps: [string, string][];
  featuresTitle: string;
  features: [string, string][];
  nav: { home: string; hot: string; new: string; blog: string; faq: string };
};

export const T: Record<Lang, Dict> = {
  en: {
    title: "GrabLink – Free Online Video & Media Downloader",
    description:
      "Paste any link and download videos, audio and images for free. Fast, secure, no sign-up and works on any device.",
    h1: "Download anything from a link",
    lead: "Paste a video, audio or image URL and save it in seconds. Free, fast and no sign-up.",
    placeholder: "Paste your link here…",
    paste: "Paste",
    download: "Download",
    processing: "Processing your link…",
    invalid: "Please enter a valid link starting with http:// or https://",
    ready: "Your link was analyzed. Choose a format below to start the download.",
    howTitle: "How to download in 3 steps",
    steps: [
      ["Copy the link", "Open the video or post you want and copy its URL from the address bar or the share button."],
      ["Paste it above", "Paste the link into the box at the top of this page and press Download."],
      ["Save the file", "Pick the quality and format you prefer and the file is saved to your device."],
    ],
    featuresTitle: "Why GrabLink",
    features: [
      ["Lightning fast", "Optimized servers process links in seconds."],
      ["100% free", "No limits, no hidden fees, no account needed."],
      ["Any device", "Works on phone, tablet and desktop browsers."],
      ["Private & safe", "We never store your files or browsing history."],
    ],
    nav: { home: "Home", hot: "Hot", new: "New", blog: "Blog", faq: "FAQ" },
  },
  es: {
    title: "GrabLink – Descargador de videos online gratis",
    description: "Pega cualquier enlace y descarga videos, audio e imágenes gratis. Rápido, seguro y sin registro.",
    h1: "Descarga cualquier cosa desde un enlace",
    lead: "Pega la URL de un video, audio o imagen y guárdalo en segundos. Gratis y sin registro.",
    placeholder: "Pega tu enlace aquí…",
    paste: "Pegar",
    download: "Descargar",
    processing: "Procesando tu enlace…",
    invalid: "Introduce un enlace válido que empiece por http:// o https://",
    ready: "Tu enlace fue analizado. Elige un formato para iniciar la descarga.",
    howTitle: "Cómo descargar en 3 pasos",
    steps: [
      ["Copia el enlace", "Abre el video o publicación y copia su URL desde la barra o el botón compartir."],
      ["Pégalo arriba", "Pega el enlace en la caja de arriba y pulsa Descargar."],
      ["Guarda el archivo", "Elige la calidad y el formato y el archivo se guarda en tu dispositivo."],
    ],
    featuresTitle: "Por qué GrabLink",
    features: [
      ["Ultrarrápido", "Servidores optimizados procesan enlaces en segundos."],
      ["100% gratis", "Sin límites, sin cargos ocultos, sin cuenta."],
      ["Cualquier dispositivo", "Funciona en móvil, tableta y ordenador."],
      ["Privado y seguro", "Nunca guardamos tus archivos ni tu historial."],
    ],
    nav: { home: "Inicio", hot: "Popular", new: "Nuevo", blog: "Blog", faq: "FAQ" },
  },
  "pt-br": {
    title: "GrabLink – Baixador de vídeos online grátis",
    description: "Cole qualquer link e baixe vídeos, áudios e imagens grátis. Rápido, seguro e sem cadastro.",
    h1: "Baixe qualquer coisa a partir de um link",
    lead: "Cole a URL de um vídeo, áudio ou imagem e salve em segundos. Grátis e sem cadastro.",
    placeholder: "Cole seu link aqui…",
    paste: "Colar",
    download: "Baixar",
    processing: "Processando seu link…",
    invalid: "Digite um link válido começando com http:// ou https://",
    ready: "Seu link foi analisado. Escolha um formato para iniciar o download.",
    howTitle: "Como baixar em 3 passos",
    steps: [
      ["Copie o link", "Abra o vídeo ou post e copie a URL na barra de endereço ou no botão compartilhar."],
      ["Cole acima", "Cole o link na caixa no topo da página e clique em Baixar."],
      ["Salve o arquivo", "Escolha a qualidade e o formato e o arquivo é salvo no seu aparelho."],
    ],
    featuresTitle: "Por que GrabLink",
    features: [
      ["Super rápido", "Servidores otimizados processam links em segundos."],
      ["100% grátis", "Sem limites, sem taxas escondidas, sem conta."],
      ["Qualquer aparelho", "Funciona no celular, tablet e computador."],
      ["Privado e seguro", "Nunca armazenamos seus arquivos ou histórico."],
    ],
    nav: { home: "Início", hot: "Em alta", new: "Novo", blog: "Blog", faq: "FAQ" },
  },
  de: {
    title: "GrabLink – Kostenloser Online-Video-Downloader",
    description: "Link einfügen und Videos, Audio und Bilder kostenlos herunterladen. Schnell, sicher, ohne Anmeldung.",
    h1: "Alles über einen Link herunterladen",
    lead: "Video-, Audio- oder Bild-URL einfügen und in Sekunden speichern. Kostenlos und ohne Anmeldung.",
    placeholder: "Link hier einfügen…",
    paste: "Einfügen",
    download: "Herunterladen",
    processing: "Link wird verarbeitet…",
    invalid: "Bitte gib einen gültigen Link mit http:// oder https:// ein",
    ready: "Dein Link wurde analysiert. Wähle ein Format, um den Download zu starten.",
    howTitle: "In 3 Schritten herunterladen",
    steps: [
      ["Link kopieren", "Öffne das Video oder den Beitrag und kopiere die URL."],
      ["Oben einfügen", "Füge den Link in das Feld oben ein und klicke auf Herunterladen."],
      ["Datei speichern", "Wähle Qualität und Format – die Datei wird auf deinem Gerät gespeichert."],
    ],
    featuresTitle: "Warum GrabLink",
    features: [
      ["Blitzschnell", "Optimierte Server verarbeiten Links in Sekunden."],
      ["100% kostenlos", "Keine Limits, keine versteckten Kosten, kein Konto."],
      ["Jedes Gerät", "Funktioniert auf Handy, Tablet und Desktop."],
      ["Privat & sicher", "Wir speichern weder Dateien noch Verlauf."],
    ],
    nav: { home: "Start", hot: "Beliebt", new: "Neu", blog: "Blog", faq: "FAQ" },
  },
  fr: {
    title: "GrabLink – Téléchargeur de vidéos en ligne gratuit",
    description: "Collez un lien et téléchargez vidéos, audio et images gratuitement. Rapide, sûr, sans inscription.",
    h1: "Téléchargez tout depuis un lien",
    lead: "Collez l'URL d'une vidéo, d'un audio ou d'une image et enregistrez-la en quelques secondes.",
    placeholder: "Collez votre lien ici…",
    paste: "Coller",
    download: "Télécharger",
    processing: "Traitement de votre lien…",
    invalid: "Entrez un lien valide commençant par http:// ou https://",
    ready: "Votre lien a été analysé. Choisissez un format pour lancer le téléchargement.",
    howTitle: "Télécharger en 3 étapes",
    steps: [
      ["Copiez le lien", "Ouvrez la vidéo ou la publication et copiez son URL."],
      ["Collez-le en haut", "Collez le lien dans la zone en haut de la page et cliquez sur Télécharger."],
      ["Enregistrez", "Choisissez la qualité et le format, le fichier est enregistré sur votre appareil."],
    ],
    featuresTitle: "Pourquoi GrabLink",
    features: [
      ["Ultra rapide", "Des serveurs optimisés traitent les liens en secondes."],
      ["100% gratuit", "Sans limite, sans frais cachés, sans compte."],
      ["Tout appareil", "Fonctionne sur mobile, tablette et ordinateur."],
      ["Privé et sûr", "Nous ne stockons jamais vos fichiers ni votre historique."],
    ],
    nav: { home: "Accueil", hot: "Populaire", new: "Nouveau", blog: "Blog", faq: "FAQ" },
  },
};

export function homeHead(lang: Lang) {
  const t = T[lang];
  return {
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang === "pt-br" ? "pt_BR" : lang },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t.title },
      { name: "twitter:description", content: t.description },
    ],
    links: [
      { rel: "canonical", href: LANG_PATHS[lang] },
      ...LANG_OPTIONS.map((o) => ({ rel: "alternate", hrefLang: o.lang, href: o.value })),
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebApplication", name: "GrabLink", applicationCategory: "MultimediaApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, description: t.description, inLanguage: lang },
            { "@type": "HowTo", name: t.howTitle, step: t.steps.map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })) },
          ],
        }),
      },
    ],
  };
}
