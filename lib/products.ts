import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "schmerztabletten-ibuprofen-400",
    name: "Schmerztabletten Ibuprofen 400 mg",
    categorySlug: "kopfschmerzen",
    price: 4.95,
    packSize: "20 Filmtabletten",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Ibuprofen",
    shortDescription: "Bewährter Wirkstoff bei Kopfschmerzen, Migräne und leichten Entzündungen.",
    description:
      "Ibuprofen 400 mg zählt zu den am häufigsten empfohlenen rezeptfreien Schmerzmitteln bei Kopfschmerzen, Regelschmerzen und leichten Entzündungen. Die Filmtabletten sind gut verträglich und für Erwachsene sowie Jugendliche ab 12 Jahren geeignet.",
    usage:
      "1 Tablette bei Bedarf mit ausreichend Flüssigkeit einnehmen, im Abstand von mindestens 6 Stunden. Nicht länger als 3 Tage ohne ärztliche Rücksprache anwenden.",
    freeOfPrescription: true,
    isFeatured: true,
  },
  {
    slug: "weidenrinden-kapseln",
    name: "Weidenrinden-Kapseln pflanzlich",
    categorySlug: "kopfschmerzen",
    price: 12.9,
    packSize: "60 Kapseln",
    brand: "NaturApo",
    activeIngredient: "Weidenrindenextrakt",
    shortDescription: "Pflanzliche Alternative bei leichten Kopf- und Gliederschmerzen.",
    description:
      "Weidenrinde wird traditionell zur Linderung leichter Schmerzen eingesetzt. Diese Kapseln eignen sich für alle, die bei gelegentlichen Kopfschmerzen zunächst eine pflanzliche Option bevorzugen.",
    usage: "2 Kapseln täglich zu einer Mahlzeit mit reichlich Flüssigkeit einnehmen.",
    freeOfPrescription: true,
  },
  {
    slug: "kuehl-roll-on-kopfschmerz",
    name: "Kühlender Roll-On bei Kopfschmerzen",
    categorySlug: "kopfschmerzen",
    price: 8.5,
    packSize: "10 ml Roll-On",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Pfefferminzöl",
    shortDescription: "Ätherisches Pfefferminzöl zum Auftragen auf Stirn und Schläfen.",
    description:
      "Der Roll-On mit hochwertigem Pfefferminzöl wird sanft auf Stirn und Schläfen aufgetragen und sorgt für ein angenehmes Kühlgefühl bei Anspannungskopfschmerz – ganz ohne Tablette.",
    usage: "Bei Bedarf dünn auf Stirn und Schläfen auftragen. Kontakt mit den Augen vermeiden.",
    freeOfPrescription: true,
    isNew: true,
  },
  {
    slug: "erkaeltungsbad-eukalyptus",
    name: "Erkältungsbad Eukalyptus & Thymian",
    categorySlug: "erkaeltung",
    price: 6.9,
    packSize: "200 ml",
    brand: "NaturApo",
    activeIngredient: "Eukalyptus- & Thymianöl",
    shortDescription: "Wohltuendes Vollbad zum Durchatmen bei beginnender Erkältung.",
    description:
      "Die Kombination aus Eukalyptus- und Thymianöl macht dieses Badezusatz zu einem wohltuenden Ritual an kalten Tagen. Ideal am Abend vor dem Schlafengehen bei den ersten Anzeichen einer Erkältung.",
    usage: "1–2 Kapseln des Konzentrats dem warmen Badewasser zugeben, 15–20 Minuten baden.",
    freeOfPrescription: true,
  },
  {
    slug: "halstabletten-salbei-honig",
    name: "Halstabletten Salbei-Honig",
    categorySlug: "erkaeltung",
    price: 5.4,
    packSize: "24 Lutschtabletten",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Salbeiextrakt & Honig",
    shortDescription: "Lindert Halskratzen und beruhigt gereizte Schleimhäute.",
    description:
      "Mit Salbeiextrakt und echtem Honig verbinden diese Lutschtabletten Wirksamkeit und angenehmen Geschmack. Sie eignen sich für die ganze Familie ab 6 Jahren.",
    usage: "Alle 2–3 Stunden 1 Tablette langsam im Mund zergehen lassen, max. 6 Stück täglich.",
    freeOfPrescription: true,
    isFeatured: true,
  },
  {
    slug: "nasenspray-meersalz",
    name: "Nasenspray Meersalz",
    categorySlug: "erkaeltung",
    price: 7.2,
    packSize: "20 ml, konservierungsmittelfrei",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Isotonische Meersalzlösung",
    shortDescription: "Befeuchtet und reinigt die Nasenschleimhaut – auch für Babys geeignet.",
    description:
      "Die isotonische Meersalzlösung befreit die Nase sanft von Schnupfensekret und hält die Schleimhäute feucht. Ohne Konservierungsmittel, daher auch für die tägliche Anwendung bei Kindern geeignet.",
    usage: "Je nach Bedarf mehrmals täglich 1–2 Sprühstöße in jedes Nasenloch.",
    freeOfPrescription: true,
  },
  {
    slug: "erkaeltungstee-bio",
    name: "Bio Erkältungstee",
    categorySlug: "erkaeltung",
    price: 4.6,
    packSize: "20 Beutel",
    brand: "NaturApo",
    activeIngredient: "Holunder, Lindenblüte, Ingwer",
    shortDescription: "Wärmender Bio-Tee mit Holunder, Lindenblüte und Ingwer.",
    description:
      "Eine wärmende Teemischung aus biologischem Anbau, die klassische Erkältungskräuter wie Holunder und Lindenblüte mit dem Wärmekick von Ingwer verbindet.",
    usage: "1 Beutel mit kochendem Wasser übergießen, 8–10 Minuten ziehen lassen. 2–3 Tassen täglich.",
    freeOfPrescription: true,
  },
  {
    slug: "vitamin-c-brausetabletten",
    name: "Vitamin C Brausetabletten",
    categorySlug: "vitamine",
    price: 6.5,
    packSize: "20 Brausetabletten",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Vitamin C (Ascorbinsäure) 1000 mg",
    shortDescription: "Trägt zu einer normalen Funktion des Immunsystems bei.",
    description:
      "Hochdosiertes Vitamin C in angenehm spritziger Brauseform. Ideal zur Unterstützung des Immunsystems in den Wintermonaten oder bei erhöhtem Bedarf.",
    usage: "1 Tablette täglich in einem Glas Wasser auflösen und trinken.",
    freeOfPrescription: true,
    isFeatured: true,
  },
  {
    slug: "vitamin-d3-tropfen",
    name: "Vitamin D3 Tropfen",
    categorySlug: "vitamine",
    price: 9.9,
    packSize: "20 ml (ca. 800 Tropfen)",
    brand: "NaturApo",
    activeIngredient: "Vitamin D3 (Cholecalciferol)",
    shortDescription: "Unterstützt Knochen, Muskelfunktion und Immunsystem – besonders im Winter wichtig.",
    description:
      "Da die körpereigene Vitamin-D-Produktion in den sonnenarmen Monaten stark zurückgeht, empfehlen wir eine gezielte Nahrungsergänzung. Die Tropfenform ermöglicht eine individuelle Dosierung.",
    usage: "Täglich 1–2 Tropfen einnehmen oder nach Empfehlung Ihres Apothekers.",
    freeOfPrescription: true,
    isNew: true,
  },
  {
    slug: "magnesium-kapseln",
    name: "Magnesium-Kapseln hochdosiert",
    categorySlug: "vitamine",
    price: 11.4,
    packSize: "90 Kapseln",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Magnesiumcitrat 375 mg",
    shortDescription: "Für Muskeln und Nerven – beliebt bei sportlich aktiven Menschen.",
    description:
      "Magnesium trägt zu einer normalen Muskelfunktion und einer Verringerung von Müdigkeit bei. Diese hochdosierten Kapseln sind besonders bei körperlich aktiven Kundinnen und Kunden beliebt.",
    usage: "Täglich 1 Kapsel zu einer Mahlzeit mit ausreichend Flüssigkeit einnehmen.",
    freeOfPrescription: true,
  },
  {
    slug: "baby-wundschutzcreme",
    name: "Wundschutzcreme für Babys",
    categorySlug: "baby-kind",
    price: 7.8,
    packSize: "75 ml",
    brand: "NaturApo Baby",
    activeIngredient: "Zinkoxid & Panthenol",
    shortDescription: "Schützt empfindliche Babyhaut bei jedem Windelwechsel.",
    description:
      "Diese reichhaltige Creme mit Zinkoxid und Panthenol bildet einen schützenden Film auf der empfindlichen Babyhaut und unterstützt die Regeneration bei wundem Windelbereich.",
    usage: "Bei jedem Windelwechsel dünn auf die gereinigte, trockene Haut auftragen.",
    freeOfPrescription: true,
  },
  {
    slug: "fieberzaepfchen-kinder",
    name: "Fieberzäpfchen für Kinder",
    categorySlug: "baby-kind",
    price: 5.6,
    packSize: "10 Zäpfchen à 125 mg",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Paracetamol",
    shortDescription: "Sanfte Fiebersenkung für Kinder, wenn Tabletten schwerfallen.",
    description:
      "Paracetamol-Zäpfchen sind eine bewährte Option zur Fiebersenkung bei Kindern, die noch keine Tabletten schlucken können. Die Dosierung richtet sich nach Alter und Körpergewicht.",
    usage:
      "Dosierung nach Alter und Gewicht laut Packungsbeilage. Bei anhaltendem Fieber über 3 Tage bitte einen Arzt konsultieren.",
    freeOfPrescription: true,
    isFeatured: true,
  },
  {
    slug: "handcreme-ringelblume",
    name: "Handcreme mit Ringelblume",
    categorySlug: "hautpflege",
    price: 6.2,
    packSize: "50 ml",
    brand: "NaturApo",
    activeIngredient: "Ringelblumenextrakt",
    shortDescription: "Reichhaltige Pflege für strapazierte, trockene Hände.",
    description:
      "Ringelblume ist bekannt für ihre beruhigende Wirkung auf strapazierte Haut. Diese Handcreme zieht schnell ein und hinterlässt keinen fettigen Film – ideal für den täglichen Gebrauch.",
    usage: "Mehrmals täglich in die Hände einmassieren, besonders nach dem Händewaschen.",
    freeOfPrescription: true,
  },
  {
    slug: "sonnencreme-lsf50-sensitiv",
    name: "Sonnencreme LSF 50 Sensitiv",
    categorySlug: "hautpflege",
    price: 13.9,
    packSize: "75 ml",
    brand: "Stadtpark Apotheke",
    activeIngredient: "Mineralischer UV-Filter",
    shortDescription: "Hoher Schutz für empfindliche Haut, mit mineralischem Filter.",
    description:
      "Mit mineralischem UV-Filter formuliert, eignet sich diese Sonnencreme besonders für empfindliche und zu Unreinheiten neigende Haut. Wasserfest und ohne Duftstoffe.",
    usage: "Reichlich und gleichmäßig auftragen, alle 2 Stunden sowie nach dem Baden erneuern.",
    freeOfPrescription: true,
    isNew: true,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.isFeatured);
}

export function getLatestProducts(count = 4) {
  const news = products.filter((p) => p.isNew);
  const rest = products.filter((p) => !p.isNew);
  return [...news, ...rest].slice(0, count);
}

export function getRelatedProducts(product: Product, count = 3) {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, count);
}
