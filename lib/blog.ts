import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "hausmittel-gegen-kopfschmerzen",
    title: "5 Hausmittel gegen Kopfschmerzen, die wirklich helfen",
    excerpt:
      "Nicht jeder Kopfschmerz braucht sofort eine Tablette. Diese fünf einfachen Maßnahmen lindern viele Beschwerden schon deutlich.",
    categorySlug: "kopfschmerzen",
    readTimeMinutes: 4,
    publishedAt: "2026-08-03",
    author: "Mag. pharm. Julia Berger",
    authorRole: "Apothekerin",
    content: [
      {
        type: "paragraph",
        text: "Kopfschmerzen gehören zu den häufigsten Beschwerden, mit denen Kundinnen und Kunden zu uns in die Apotheke kommen. Oft lässt sich bei leichten, gelegentlichen Kopfschmerzen schon mit einfachen Mitteln gegensteuern, bevor überhaupt eine Tablette nötig wird.",
      },
      { type: "heading", text: "1. Ausreichend trinken" },
      {
        type: "paragraph",
        text: "Flüssigkeitsmangel ist einer der häufigsten Auslöser für Spannungskopfschmerz. Ein großes Glas Wasser wirkt manchmal schneller als gedacht.",
      },
      { type: "heading", text: "2. Frische Luft und Bewegung" },
      {
        type: "paragraph",
        text: "Ein kurzer Spaziergang an der frischen Luft verbessert die Durchblutung und kann muskulär bedingte Kopfschmerzen lindern, die z. B. durch langes Sitzen am Schreibtisch entstehen.",
      },
      { type: "heading", text: "3. Kühlung oder Wärme – je nach Ursache" },
      {
        type: "paragraph",
        text: "Bei Spannungskopfschmerz hilft oft Wärme im Nacken, bei pulsierenden Schmerzen eher eine kühle Kompresse auf der Stirn. Unser Kühlender Roll-On mit Pfefferminzöl ist dafür eine praktische Option unterwegs.",
      },
      { type: "heading", text: "4. Auf den Bildschirm-Abstand achten" },
      {
        type: "paragraph",
        text: "Augenbelastung durch Bildschirmarbeit ist ein unterschätzter Auslöser. Regelmäßige Pausen nach der 20-20-20-Regel – alle 20 Minuten für 20 Sekunden auf etwas 20 Fuß (ca. 6 m) Entferntes schauen – entlasten die Augen.",
      },
      { type: "heading", text: "5. Pflanzliche Unterstützung" },
      {
        type: "paragraph",
        text: "Weidenrinde wird traditionell bei leichten Schmerzen eingesetzt und ist eine sanfte Option für alle, die zunächst auf pflanzliche Präparate setzen möchten.",
      },
      {
        type: "quote",
        text: "Halten Kopfschmerzen länger als drei Tage an oder treten sie plötzlich und sehr stark auf, sollten Sie das ärztlich abklären lassen – wir beraten Sie dazu gerne in der Apotheke.",
        attribution: "Mag. pharm. Julia Berger",
      },
    ],
  },
  {
    slug: "immunsystem-staerken-erkaeltungszeit",
    title: "Erkältungszeit: So stärken Sie Ihr Immunsystem",
    excerpt:
      "Mit ein paar einfachen Gewohnheiten kommen Sie deutlich besser durch die Erkältungssaison. Unsere Apothekerin verrät ihre Tipps.",
    categorySlug: "erkaeltung",
    readTimeMinutes: 5,
    publishedAt: "2026-07-22",
    author: "Mag. pharm. Thomas Egger",
    authorRole: "Apotheker",
    content: [
      {
        type: "paragraph",
        text: "Sobald die Tage kürzer werden, häufen sich in der Apotheke die Fragen nach Erkältungsschutz. Die gute Nachricht: Ein starkes Immunsystem lässt sich mit einfachen Mitteln unterstützen.",
      },
      { type: "heading", text: "Schlaf ist die Basis" },
      {
        type: "paragraph",
        text: "Chronischer Schlafmangel schwächt die Immunabwehr nachweislich. Sieben bis acht Stunden Schlaf sind für die meisten Erwachsenen ideal.",
      },
      { type: "heading", text: "Vitamin D nicht vergessen" },
      {
        type: "paragraph",
        text: "In den sonnenarmen Monaten produziert unser Körper deutlich weniger Vitamin D. Eine gezielte Nahrungsergänzung, etwa mit Vitamin D3 Tropfen, kann sinnvoll sein – am besten in Absprache mit Ihrer Apotheke.",
      },
      { type: "heading", text: "Erste Anzeichen ernst nehmen" },
      {
        type: "paragraph",
        text: "Kratzen im Hals oder ein leichter Schnupfen sind gute Zeitpunkte, um gegenzusteuern: warme Getränke, ausreichend Ruhe und bei Bedarf Halstabletten mit Salbei und Honig lindern die ersten Beschwerden.",
      },
      { type: "heading", text: "Hände waschen bleibt wirksam" },
      {
        type: "paragraph",
        text: "Auch wenn es simpel klingt: Regelmäßiges Händewaschen reduziert die Übertragung von Erkältungsviren nachweislich um ein Vielfaches.",
      },
      {
        type: "list",
        items: [
          "Ausreichend schlafen (7–8 Stunden)",
          "Auf Vitamin D und Vitamin C achten",
          "Bei ersten Symptomen früh reagieren",
          "Regelmäßig Hände waschen",
          "Bei Fieber über 38,5 °C oder länger als 3 Tage: Arzt aufsuchen",
        ],
      },
    ],
  },
  {
    slug: "vitamin-d-im-winter",
    title: "Vitamin D im Winter: Was Sie wissen sollten",
    excerpt:
      "Warum der Vitamin-D-Spiegel in Österreich im Winter oft zu niedrig ist – und wie Sie sinnvoll gegensteuern.",
    categorySlug: "vitamine",
    readTimeMinutes: 4,
    publishedAt: "2026-06-11",
    author: "Mag. pharm. Julia Berger",
    authorRole: "Apothekerin",
    content: [
      {
        type: "paragraph",
        text: "Rund 90 % des Vitamin-D-Bedarfs deckt der Körper eigentlich über die Haut, wenn Sonnenlicht auf sie trifft. In den Wintermonaten reicht die Sonneneinstrahlung in Österreich dafür aber meist nicht aus.",
      },
      { type: "heading", text: "Warum Vitamin D wichtig ist" },
      {
        type: "paragraph",
        text: "Vitamin D trägt zu einer normalen Funktion des Immunsystems, zur Erhaltung normaler Knochen und zu einer normalen Muskelfunktion bei.",
      },
      { type: "heading", text: "Wer besonders betroffen ist" },
      {
        type: "list",
        items: [
          "Menschen, die viel Zeit drinnen verbringen",
          "Ältere Personen",
          "Menschen mit dunklerem Hautton",
          "Personen, die konsequent Sonnenschutz verwenden",
        ],
      },
      { type: "heading", text: "Sinnvolle Nahrungsergänzung" },
      {
        type: "paragraph",
        text: "Vitamin-D3-Tropfen lassen sich individuell dosieren und sind eine praktische Möglichkeit, den Wintermonaten vorzubeugen. Sprechen Sie uns gerne an – wir beraten Sie zur passenden Dosierung.",
      },
    ],
  },
  {
    slug: "babypflege-empfindliche-haut",
    title: "Babypflege: Die richtige Routine für empfindliche Haut",
    excerpt:
      "Babyhaut ist dünner und empfindlicher als die von Erwachsenen. Diese einfache Pflegeroutine schützt sie zuverlässig.",
    categorySlug: "baby-kind",
    readTimeMinutes: 3,
    publishedAt: "2026-05-28",
    author: "Mag. pharm. Thomas Egger",
    authorRole: "Apotheker",
    content: [
      {
        type: "paragraph",
        text: "Die Haut von Babys ist deutlich dünner als die von Erwachsenen und verliert schneller Feuchtigkeit. Eine einfache, konsequente Routine reicht meist völlig aus.",
      },
      { type: "heading", text: "Weniger ist mehr" },
      {
        type: "paragraph",
        text: "Häufiges Baden mit stark schäumenden Produkten kann den natürlichen Schutzfilm der Babyhaut angreifen. Zwei bis drei Bäder pro Woche mit milden, seifenfreien Produkten reichen in der Regel aus.",
      },
      { type: "heading", text: "Windelbereich besonders schützen" },
      {
        type: "paragraph",
        text: "Bei jedem Windelwechsel sollte die Haut sanft gereinigt und anschließend mit einer Wundschutzcreme mit Zinkoxid geschützt werden, um wunde Stellen zu vermeiden.",
      },
      { type: "heading", text: "Auf Duftstoffe verzichten" },
      {
        type: "paragraph",
        text: "Parfümierte Pflegeprodukte können die empfindliche Babyhaut reizen. Achten Sie auf duftstofffreie, dermatologisch getestete Produkte – gerne beraten wir Sie dazu direkt in der Apotheke.",
      },
    ],
  },
  {
    slug: "hautpflege-routine-alltag",
    title: "Die richtige Hautpflege-Routine für den Alltag",
    excerpt:
      "Eine gute Hautpflege muss nicht kompliziert sein. Diese drei Schritte reichen für die meisten Hauttypen völlig aus.",
    categorySlug: "hautpflege",
    readTimeMinutes: 4,
    publishedAt: "2026-04-15",
    author: "Mag. pharm. Julia Berger",
    authorRole: "Apothekerin",
    content: [
      {
        type: "paragraph",
        text: "In der Beratung erleben wir oft, dass Kundinnen und Kunden mit einer viel zu komplizierten Pflegeroutine überfordert sind. Dabei reichen für die meisten Hauttypen drei einfache Schritte.",
      },
      { type: "heading", text: "1. Reinigen" },
      {
        type: "paragraph",
        text: "Eine milde, seifenfreie Reinigung morgens und abends entfernt Talg und Umweltbelastungen, ohne die Hautbarriere anzugreifen.",
      },
      { type: "heading", text: "2. Pflegen" },
      {
        type: "paragraph",
        text: "Eine auf den Hauttyp abgestimmte Creme – etwa mit Ringelblumenextrakt bei trockener, strapazierter Haut – unterstützt die natürliche Regeneration.",
      },
      { type: "heading", text: "3. Schützen" },
      {
        type: "paragraph",
        text: "Sonnenschutz ist das ganze Jahr über sinnvoll, nicht nur im Sommer. Ein mineralischer Filter eignet sich besonders gut für empfindliche Haut.",
      },
      {
        type: "quote",
        text: "Konsequenz schlägt Komplexität: Eine einfache Routine, die Sie täglich anwenden, bringt langfristig mehr als ein aufwendiges Programm, das Sie nach zwei Wochen wieder aufgeben.",
        attribution: "Mag. pharm. Julia Berger",
      },
    ],
  },
  {
    slug: "wann-zum-arzt-statt-selbstmedikation",
    title: "Wann Sie besser zum Arzt statt zur Selbstmedikation greifen",
    excerpt:
      "Rezeptfreie Produkte helfen bei vielen leichten Beschwerden – aber nicht bei allen. Diese Warnzeichen sollten Sie kennen.",
    categorySlug: "kopfschmerzen",
    readTimeMinutes: 3,
    publishedAt: "2026-03-09",
    author: "Mag. pharm. Thomas Egger",
    authorRole: "Apotheker",
    content: [
      {
        type: "paragraph",
        text: "Als Apotheke ist es uns wichtig, nicht nur Produkte zu verkaufen, sondern auch ehrlich zu beraten. Selbstmedikation mit freiverkäuflichen Produkten ist bei vielen leichten, vorübergehenden Beschwerden eine gute Option – aber sie hat Grenzen.",
      },
      { type: "heading", text: "Diese Anzeichen sollten Sie ernst nehmen" },
      {
        type: "list",
        items: [
          "Symptome, die trotz Selbstbehandlung länger als 3 Tage anhalten",
          "Hohes Fieber über 38,5 °C, besonders bei Kindern und Säuglingen",
          "Plötzlich auftretende, sehr starke Schmerzen",
          "Wiederkehrende Beschwerden, die immer wieder auftreten",
          "Wechselwirkungen mit bestehender Dauermedikation",
        ],
      },
      {
        type: "paragraph",
        text: "In der Apotheke am Stadtpark beraten wir Sie gerne dazu, ob ein freiverkäufliches Produkt für Ihre Situation geeignet ist oder ob ein Arztbesuch sinnvoller ist. Rezeptpflichtige Medikamente bieten wir bewusst nicht online an – dafür ist eine persönliche ärztliche Verschreibung notwendig.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestBlogPosts(count = 3) {
  return [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, count);
}

export function getRelatedBlogPosts(post: BlogPost, count = 2) {
  return blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
    .slice(0, count);
}
