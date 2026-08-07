import { CookiePreferencesButton } from "./CookieConsent";
import {
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Facebook,
  Hammer,
  Instagram,
  KeyRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  absoluteUrl,
  emailHref,
  leadHref,
  leadFormAction,
  siteConfig,
  whatsappHref,
} from "./site-config";

const homepageTeam = [
  {
    name: "Martijn",
    role: "Relatiemanager",
    image: "/martijn-verhuurbeheer-marbella.webp",
    alt: "Martijn, relatiemanager van Verhuurbeheer Spanje aan de Costa del Sol",
  },
  {
    name: "Geert",
    role: "Manager Bouw",
    image: "/geert-vastgoedbeheer-marbella.webp",
    alt: "Geert, manager bouw en vastgoedbeheer bij Verhuurbeheer Spanje",
  },
  {
    name: "Sophie",
    role: "Backoffice",
    image: "/sophie-marbella.webp",
    alt: "Sophie, Nederlandstalig aanspreekpunt bij Verhuurbeheer Spanje",
  },
  {
    name: "Päivi",
    role: "Administratie",
    image: "/paivi-administratie-verhuurbeheer.webp",
    alt: "Päivi van de administratie van Verhuurbeheer Spanje",
  },
];

const services = [
  {
    title: "Vakantieverhuur",
    slug: "vakantieverhuur-marbella",
    price: siteConfig.pricing.holidayRental,
    icon: BedDouble,
    text: "Complete vakantieverhuur voor appartementen en woningen in Marbella Centro, Golden Mile en omliggende wijken: presentatie, boekingen, prijzen, gastencontact en lokale uitvoering.",
  },
  {
    title: "Seizoens- en midtermverhuur",
    slug: "midterm-verhuur-marbella",
    price: siteConfig.pricing.midterm,
    icon: CalendarDays,
    text: "Gerichte verhuur voor tijdelijke verblijven, inclusief presentatie, huurdersselectie, afspraken en overdracht.",
  },
  {
    title: "Langetermijnverhuur",
    slug: "langetermijnverhuur-marbella",
    price: siteConfig.pricing.longterm,
    icon: KeyRound,
    text: "Van woningpresentatie en bezichtigingen tot selectie, overeenkomst en een verzorgde sleuteloverdracht.",
  },
  {
    title: "Vastgoedbeheer",
    slug: "vastgoedbeheer-marbella",
    price: "Maatwerk",
    icon: ShieldCheck,
    text: "Woningcontroles, sleutelbeheer en praktische opvolging in Marbella, ook wanneer je zelf langere tijd niet aan de Costa del Sol bent.",
  },
  {
    title: "Schoonmaak & onderhoud",
    slug: "schoonmaak-onderhoud-marbella",
    price: "Na woningcheck",
    icon: Sparkles,
    text: "Wisselschoonmaak, linnen, inspecties en coördinatie van onderhoud door lokale partners rond Marbella.",
  },
  {
    title: "Renovatie & inrichting",
    slug: "renovatie-inrichting-marbella",
    price: "Offerte op maat",
    icon: Hammer,
    text: "Praktische verbetering, inrichting en renovatie met verhuurbaarheid, duurzaamheid en uitstraling als uitgangspunt.",
  },
];

const faqs = [
  [
    "Wat kost vakantieverhuurbeheer in Marbella?",
    "Onze fullservice beheervergoeding voor vakantieverhuur begint vanaf 18% van de gerealiseerde huurinkomsten. De exacte vergoeding hangt af van de woning, ligging en gewenste dienstverlening.",
  ],
  [
    "Wat kost midterm- of langetermijnverhuur?",
    "Voor het vinden en plaatsen van een passende huurder rekenen we eenmalig een fee ter hoogte van één maand huur.",
  ],
  [
    "Worden schoonmaakkosten van de huuropbrengst afgetrokken?",
    "Bij vakantieverhuur worden de reguliere schoonmaak- en waskosten aan de huurder doorberekend. Uitzonderlijk werk, deep cleaning, herstel of onderhoud valt daar niet automatisch onder.",
  ],
  [
    "Kan ik mijn woning zelf blijven gebruiken?",
    "Ja. Bij vakantieverhuur kunnen eigen verblijven vooraf in de kalender worden geblokkeerd. We bespreken bij de start hoe je de woning zelf wilt blijven gebruiken.",
  ],
  [
    "Op welke verhuurplatforms wordt mijn woning aangeboden?",
    "Afhankelijk van de woning en strategie werken we met relevante kanalen zoals Airbnb, Booking.com en andere geschikte boekingsplatforms. Beschikbaarheid wordt centraal beheerd.",
  ],
  [
    "Verzorgen jullie ook alleen vastgoedbeheer?",
    "Ja. Ook zonder verhuur kunnen we periodieke woningcontroles, sleutelbeheer, toegang en praktische onderhoudscoördinatie verzorgen.",
  ],
  [
    "In welke delen van Marbella zijn jullie actief?",
    "We ondersteunen eigenaren in Marbella Centro, Golden Mile, Nueva Andalucía, Puerto Banús, Sierra Blanca, Elviria en Los Monteros. De mogelijkheden bekijken we altijd per woning.",
  ],
  [
    "Heb ik een verhuurlicentie nodig voor vakantieverhuur in Marbella?",
    "Voor toeristische verhuur moet de woning aan de actuele regionale, gemeentelijke en registratievoorwaarden voldoen. Laat de situatie controleren voordat de woning op boekingsplatforms wordt gepubliceerd.",
  ],
];

export default function Home() {
  const homeFaqs = faqs.slice(0, 5);
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    description:
      "Nederlandstalig fullservice verhuurbeheer, vakantieverhuurbeheer en vastgoedbeheer voor woningeigenaren in Marbella.",
    parentOrganization: {
      "@type": "Organization",
      name: "Verhuurbeheer Spanje",
      url: "https://www.verhuurbeheerspanje.nl/",
    },
    areaServed: [
      { "@type": "City", name: "Marbella" },
      { "@type": "Place", name: "Marbella Centro" },
      { "@type": "Place", name: "Golden Mile" },
      { "@type": "Place", name: "Nueva Andalucía" },
      { "@type": "Place", name: "Puerto Banús" },
      { "@type": "Place", name: "Sierra Blanca" },
      { "@type": "Place", name: "Elviria" },
      { "@type": "Place", name: "Los Monteros" },
    ],
    email: siteConfig.contact.email,
    url: absoluteUrl(),
    logo: absoluteUrl("/vbs-logo-marbella.webp"),
    image: absoluteUrl("/luxe-woning-marbella-zeezicht.webp"),
    sameAs: [
      siteConfig.brand.parentUrl,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    knowsLanguage: ["nl", "en", "es"],
    knowsAbout: [
      "Verhuurbeheer Marbella",
      "Vakantieverhuurbeheer",
      "Vastgoedbeheer",
      "Woningbeheer",
      "Midterm verhuur",
      "Langetermijnverhuur",
      "Sleutelbeheer",
      "Schoonmaak en onderhoud",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: absoluteUrl(),
    name: siteConfig.brand.name,
    inLanguage: "nl-NL",
    publisher: { "@id": `${siteConfig.domain}/#organization` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="site-header">
        <a
          className="logo-lockup"
          href="/"
          aria-label="Verhuurbeheer Marbella – naar Home"
        >
          <img
            src="/vbs-logo-marbella.webp"
            alt="Logo Verhuurbeheer Marbella"
            width="54"
            height="54"
          />
        </a>
        <nav>
          <a href="/">Home</a>
          <details className="services-menu">
            <summary>Diensten</summary>
            <div>
              <a href="/vakantieverhuur-marbella/">Vakantieverhuur</a>
              <a href="/midterm-verhuur-marbella/">
                Seizoens- en midtermverhuur
              </a>
              <a href="/langetermijnverhuur-marbella/">Langetermijnverhuur</a>
              <a href="/vastgoedbeheer-marbella/">Vastgoedbeheer</a>
              <a href="/schoonmaak-onderhoud-marbella/">
                Schoonmaak & onderhoud
              </a>
              <a href="/renovatie-inrichting-marbella/">
                Renovatie & inrichting
              </a>
              <a href="/verhuurlicentie-marbella/">Verhuurlicentie</a>
            </div>
          </details>
          <a href="/werkwijze/">Werkwijze</a>
          <a href="/over-ons/">Over ons</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
        </nav>
          <a className="btn btn-small header-cta" href={leadHref}>
          Woning aanmelden
        </a>
        <details className="mobile-menu">
          <summary aria-label="Menu openen">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div>
            <a href="/">Home</a>
            <b>Diensten</b>
            <a href="/vakantieverhuur-marbella/">Vakantieverhuur</a>
            <a href="/midterm-verhuur-marbella/">Seizoens- en midtermverhuur</a>
            <a href="/langetermijnverhuur-marbella/">Langetermijnverhuur</a>
            <a href="/vastgoedbeheer-marbella/">Vastgoedbeheer</a>
            <a href="/schoonmaak-onderhoud-marbella/">Schoonmaak & onderhoud</a>
            <a href="/renovatie-inrichting-marbella/">Renovatie & inrichting</a>
            <a href="/verhuurlicentie-marbella/">Verhuurlicentie</a>
            <b>Bedrijf</b>
            <a href="/werkwijze/">Werkwijze</a>
            <a href="/over-ons/">Over ons</a>
            <a href="/blog/">Blog & kennisbank</a>
            <a href="/contact/">Contact</a>
            <a href="/woning-aanmelden/">Woning aanmelden</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <p className="kicker">
            Voor Nederlandse woningeigenaren aan de Costa del Sol
          </p>
          <h1>Geniet van je tweede huis in Marbella, wij regelen de rest.</h1>
          <p>
            Wij verzorgen het complete beheer van je vakantiewoning of woning
            voor lange termijn: van marketing en reserveringen tot
            gastcommunicatie, schoonmaak, onderhoud en woninginspecties.
          </p>
          <div className="actions">
            <a className="btn hero-cta" href={leadHref}>
              Meld je woning aan
            </a>
            <a className="link-light" href="#diensten">
              Bekijk alle diensten →
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Airbnb &amp; Booking</b> professioneel beheerd
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Vast Nederlandstalig</b> contactpersoon
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>5-sterren beheer</b> voor maximale verhuurinkomsten
          </span>
        </div>
      </section>

      <section
        className="property-showcase"
        aria-label="Mediterrane woningen en sfeer in Marbella"
      >
        <figure className="showcase-wide">
          <img
            src="/vastgoed-aan-zee-marbella.webp"
            alt="Witte mediterrane woningen aan zee in Marbella"
            width="1200"
            height="800"
            loading="eager"
          />
          <figcaption>Leven en verhuren aan de Costa del Sol</figcaption>
        </figure>
        <figure className="showcase-pool">
          <img
            src="/villa-zwembad-marbella.webp"
            alt="Zwembad met palmen en mediterrane tuin bij een villa in Marbella"
            width="1800"
            height="1118"
            loading="lazy"
          />
          <figcaption>Palmen, zon en buitenleven</figcaption>
        </figure>
        <figure className="showcase-sunset">
          <img
            src="/terras-zonsondergang-marbella.webp"
            alt="Mediterraan terras bij zonsondergang aan de Costa del Sol"
            width="1600"
            height="1200"
            loading="lazy"
          />
          <figcaption>Avonden onder de Spaanse zon</figcaption>
        </figure>
        <figure className="showcase-garden">
          <img
            src="/urbanisatie-zwembad-marbella.webp"
            alt="Witte urbanisatie met groene tuin en zwembad in Marbella"
            width="1600"
            height="1067"
            loading="lazy"
          />
        </figure>
        <figure className="showcase-terrace">
          <img
            src="/zonnig-terras-zeezicht-marbella.webp"
            alt="Zonnig terras met zeezicht in Marbella"
            width="1600"
            height="1067"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="services" id="diensten">
        <div className="section-head">
          <p className="kicker orange">Onze diensten</p>
          <h2>Alles voor je woning in Marbella</h2>
          <p>
            Van verhuur tot lokale woningzorg. Je kiest wat nodig is; wij regelen
            de uitvoering vanuit één vast aanspreekpunt.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <a className="service-card" href={`/${s.slug}/`} key={s.slug}>
              <div className="service-card-top">
                <span className="service-icon">
                  <s.icon aria-hidden="true" />
                </span>
                <span className="number">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <strong>{s.price}</strong>
              <em>Bekijk dienst →</em>
            </a>
          ))}
        </div>
      </section>

      <aside className="license-note">
        <ShieldCheck aria-hidden="true" />
        <div>
          <b>Vakantieverhuur? Controleer tijdig de verhuurvoorwaarden.</b>
          <p>
            Bekijk welke registratie- en vergunningspunten voor je woning
            relevant kunnen zijn.
          </p>
        </div>
        <a href="/verhuurlicentie-marbella/">Lees over de verhuurlicentie →</a>
      </aside>

      <section className="rental-band">
        <div>
          <p className="kicker">Welke verhuurvorm past?</p>
          <h2>Verhuren op een manier die bij je past.</h2>
          <p>
            We vergelijken eigen gebruik, gewenste opbrengst en zekerheid en
            adviseren welke verhuurvorm bij je woning past.
          </p>
        </div>
        <div className="rental-options">
          <a href="/vakantieverhuur-marbella/">
            <small>Korte verblijven</small>
            <b>Vakantieverhuur</b>
            <span>Vanaf 18% →</span>
          </a>
          <a href="/midterm-verhuur-marbella/">
            <small>Tijdelijk verblijf</small>
            <b>Midterm</b>
            <span>1 maand huur →</span>
          </a>
          <a href="/langetermijnverhuur-marbella/">
            <small>Vaste huurder</small>
            <b>Langetermijn</b>
            <span>1 maand huur →</span>
          </a>
        </div>
      </section>

      <section className="process" id="werkwijze">
        <div className="section-head left">
          <p className="kicker orange">Onze werkwijze</p>
          <h2>Van eerste gesprek tot dagelijks beheer</h2>
        </div>
        <ol>
          <li>
            <b>01</b>
            <div>
              <h3>Kennismaking</h3>
              <p>
                We bespreken je woning, doelen, eigen gebruik en gewenste
                verhuurvorm.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Woningcheck en voorstel</h3>
              <p>
                We bekijken wat nodig is, bepalen de dienstverlening en maken de
                kosten transparant.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Voorbereiding</h3>
              <p>
                Presentatie, kanalen, informatie, toegang en lokale teams worden
                ingericht.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Start en opvolging</h3>
              <p>
                Wij verzorgen de dagelijkse uitvoering en houden je op de hoogte
                van relevante zaken.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="owner-experience" aria-label="De beleving van professioneel woningbeheer">
        <div className="owner-experience-copy">
          <p className="kicker orange">Je woning, onze aandacht</p>
          <h2>Meer rust. Meer grip. Een woning die er altijd goed bij staat.</h2>
          <p>
            Van de eerste indruk van je advertentie tot de controle na vertrek:
            we bewaken de uitstraling én de praktische details die het verschil
            maken voor gasten en eigenaren.
          </p>
          <a className="dark-link" href="/woning-aanmelden/">
            Bespreek je woning met ons →
          </a>
        </div>
        <figure className="owner-experience-main">
          <img
            src="/woning-marbella-zeezicht.webp"
            alt="Verzorgde woning in Marbella met uitzicht op zee"
            width="1200"
            height="800"
            loading="lazy"
          />
        </figure>
        <figure className="owner-experience-detail">
          <img
            src="/woning-interieur-marbella.webp"
            alt="Licht en verzorgd interieur van een woning in Marbella"
            width="1200"
            height="800"
            loading="lazy"
          />
          <figcaption>Presentatie, controle en lokale opvolging</figcaption>
        </figure>
      </section>

      <section className="regions compact-regions" id="regios">
        <div className="section-head">
          <p className="kicker orange">Lokaal werkgebied</p>
          <h2>Lokaal actief in Marbella Centro en Golden Mile</h2>
          <p>
            Van Marbella Centro en Nueva Andalucía tot Puerto Banús, Sierra Blanca, Elviria
            en Golden Mile.
          </p>
        </div>
        <div className="area-list" aria-label="Werkgebieden rond Marbella">
          <b>Marbella Centro</b>
          <b>Golden Mile</b>
          <b>Nueva Andalucía</b>
          <b>Puerto Banús</b>
          <b>Sierra Blanca</b>
          <b>Elviria</b>
          <b>Los Monteros</b>
        </div>
      </section>

      <section className="home-team">
        <div className="home-team-copy">
          <p className="kicker orange">Ons team</p>
          <h2>Nederlandstalig contact, lokale uitvoering.</h2>
          <p>
            Je spreekt met echte mensen die je woning en de Costa del Sol kennen.
            Samen verzorgen we verhuur, administratie, vastgoedbeheer en
            praktische opvolging ter plaatse.
          </p>
          <a className="dark-link" href="/over-ons/">
            Maak kennis met het volledige team →
          </a>
        </div>
        <div className="home-team-grid">
          {homepageTeam.map((person) => (
            <article key={person.name}>
              <img src={person.image} alt={person.alt} width="640" height="640" loading="lazy" />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge compact-knowledge" id="kennisbank">
        <div className="section-head">
          <p className="kicker orange">Blogs &amp; advies</p>
          <h2>Praktische blogs voor woningeigenaren</h2>
          <p>
            Heldere uitleg over kosten, verhuurstrategie, regelgeving en
            vastgoedbeheer in Marbella.
          </p>
        </div>
        <div className="knowledge-grid">
          <a href="/kosten-verhuurbeheer-marbella/">
            <small>Kosten</small>
            <h3>Wat kost verhuurbeheer?</h3>
            <span>Lees blog →</span>
          </a>
          <a href="/dynamische-prijzen-vakantiewoning/">
            <small>Opbrengst</small>
            <h3>Dynamische prijsstelling</h3>
            <span>Lees blog →</span>
          </a>
          <a href="/zelf-verhuren-of-verhuurbeheer/">
            <small>Keuzehulp</small>
            <h3>Zelf verhuren of uitbesteden?</h3>
            <span>Lees blog →</span>
          </a>
        </div>
        <a className="knowledge-all" href="/blog/">
          Bekijk alle blogs en artikelen →
        </a>
      </section>

      <section className="faq">
        <div>
          <p className="kicker orange">Veelgestelde vragen</p>
          <h2>Direct een duidelijk antwoord</h2>
          <p>
            De belangrijkste vragen over onze diensten en tarieven in Marbella.
          </p>
        </div>
        <div>
          {homeFaqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-owner-cta" id="woning-aanmelden">
        <div className="home-owner-cta-image" role="img" aria-label="Zonnig terras met uitzicht op zee in Marbella" />
        <div className="home-owner-cta-copy">
          <p className="kicker orange">Vrijblijvend kennismaken</p>
          <h2>Klaar om meer uit je woning in Marbella te halen?</h2>
          <p>
            Meld je woning aan voor verhuurbeheer of lokale woningzorg. Binnen
            twee werkdagen bespreken we persoonlijk je wensen en de mogelijkheden.
          </p>
          <ul>
            <li>Vrijblijvend en zonder verplichtingen</li>
            <li>Persoonlijk Nederlandstalig contact</li>
            <li>Duidelijk advies passend bij je woning</li>
          </ul>
          <a className="btn" href={leadHref}>Meld je woning aan →</a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-brand">
          <a className="logo-lockup" href="/" aria-label="Naar Home">
            <img
              src="/vbs-logo-marbella.webp"
              alt="Verhuurbeheer Marbella"
              width={640}
              height={640}
              sizes="54px"
            />
            <span>
              Verhuurbeheer <b>Marbella</b>
            </span>
          </a>
          <p>
            Verhuurbeheer Marbella is onderdeel van{" "}
            <a href="https://www.verhuurbeheerspanje.nl/">
              Verhuurbeheer Spanje
            </a>
            .
          </p>
          <div className="social-links">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Instagram"
            >
              <Instagram aria-hidden="true" /> Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Facebook"
            >
              <Facebook aria-hidden="true" /> Facebook
            </a>
          </div>
        </div>
        <div>
          <b>Diensten</b>
          <a href="/vakantieverhuur-marbella/">Vakantieverhuur</a>
          <a href="/midterm-verhuur-marbella/">Seizoens- en midtermverhuur</a>
          <a href="/langetermijnverhuur-marbella/">Langetermijnverhuur</a>
          <a href="/vastgoedbeheer-marbella/">Vastgoedbeheer</a>
          <a href="/verhuurlicentie-marbella/">Verhuurlicentie</a>
        </div>
        <div>
          <b>Meer</b>
          <a href="/werkwijze/">Werkwijze</a>
          <a href="/over-ons/">Over ons</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
          <a href="/privacyverklaring/">Privacyverklaring</a>
          <a href="/cookieverklaring/">Cookieverklaring</a>
          <CookiePreferencesButton />
        </div>
        <div>
          <b>Contact</b>
          <a href={whatsappHref()}>
            WhatsApp
          </a>
          <a href={emailHref}>E-mail</a>
          <small>© 2026 · Marbella · Costa del Sol</small>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappHref()}
        aria-label="Contact via WhatsApp"
      >
        WhatsApp
      </a>
      <a className="to-top" href="#top" aria-label="Terug naar boven">
        ↑
      </a>
    </main>
  );
}
