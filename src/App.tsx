import {
  ArrowDown,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronLeft,
  ChevronRight,
  FileJson,
  FileText,
  Gauge,
  KeyRound,
  Laptop,
  LineChart,
  LockKeyhole,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import heroScreenshot from "./assets/smart-risk-dashboard-hero.png";
import simulationSection from "./assets/smart-risk-simulation-section.png";
import workspaceDashboard from "./assets/smart-risk-workspace-dashboard.png";
import appIcon from "./assets/smart-risk-icon.jpeg";

const appName = "SMART RISK Monte-Carlo-Simulation";
const appUrl = "https://bm1964-25.github.io/SMART-RISK-Monte-Carlo-Simulation/";
const purchaseLink = "https://bm1964-25.github.io/Landing-Tafel-Kontakt/";

const benefits = [
  {
    titleLines: ["Budgetrisiken", "sichtbar machen"],
    textLines: ["Bandbreiten und Perzentile", "statt einzelner Planwerte", "für klare Entscheidungen."],
  },
  {
    titleLines: ["Entscheidungen", "fundiert vorbereiten"],
    textLines: ["Risikopuffer und Szenarien", "nachvollziehbar ableiten", "und sauber kommunizieren."],
  },
  {
    titleLines: ["Lokal im Browser", "sicher arbeiten"],
    textLines: ["Projektdaten selbst verwalten", "per Export mitnehmen", "und optional KI nutzen."],
  },
];

const features = [
  {
    icon: KeyRound,
    title: "Bewertungsmodelle strukturieren",
    text: "Fachliche Formelvorlagen nutzen, eigene Formeln erstellen, Parameter beziffern und Sofortergebnisse vor der Simulation prüfen.",
  },
  {
    icon: SlidersHorizontal,
    title: "Unsicherheiten modellieren",
    text: "Bandbreiten mit Mindestwert, wahrscheinlichstem Wert und Maximalwert sowie Verteilungen wie Dreieck, Gleichverteilung, Normalverteilung und Beta-PERT strukturieren.",
  },
  {
    icon: Gauge,
    title: "Monte-Carlo-Simulation durchführen",
    text: "1.000 bis 50.000 Läufe simulieren und Ergebnisräume mit P10, P50, P80, P90 und P95 belastbar sichtbar machen.",
  },
  {
    icon: BarChart3,
    title: "Ergebnisse analysieren",
    text: "Histogramm, kumulative Verteilung, Budgetüberschreitungswahrscheinlichkeit und Risikopuffer-Empfehlung auswerten.",
  },
  {
    icon: TrendingUp,
    title: "Sensitivität erkennen",
    text: "Treiber-Rangliste und Tornado-Diagramm zeigen, welche Eingangsgrößen das Ergebnis besonders stark beeinflussen.",
  },
  {
    icon: Route,
    title: "Szenarien vergleichen",
    text: "Basisszenario, optimistische Varianten, kritische Annahmen und eigene Szenarien für Managemententscheidungen gegenüberstellen.",
  },
  {
    icon: FileText,
    title: "Berichte vorbereiten",
    text: "Automatisch generierte Management-Zusammenfassungen mit Kennzahlen, Interpretation und Copy-Funktion nutzen.",
  },
  {
    icon: FileJson,
    title: "Daten verwalten",
    text: "Projektdaten per JSON importieren und exportieren, Simulationsergebnisse als CSV sichern und Datenvorlagen für Parameter und Risiken nutzen.",
  },
  {
    icon: BrainCircuit,
    title: "Optionale KI-Assistenz nutzen",
    text: "Formelvorschläge, Risikoideen, Szenarien, Ergebnisinterpretationen und Berichtstexte mit eigenem Anthropic API-Key vorbereiten.",
  },
];

const workspaceSlides = [
  {
    image: workspaceDashboard,
    title: "Dashboard",
    text: "Projektkennzahlen, Simulationsergebnisse und Managementhinweise auf einen Blick.",
  },
  {
    image: simulationSection,
    title: "Simulation",
    text: "Laufzahl, Zielbudget und Szenario steuern und die Monte-Carlo-Auswertung starten.",
  },
  {
    image: heroScreenshot,
    title: "Projektstart",
    text: "Arbeitsbereich mit Projektschritten, lokaler Speicherung und strukturiertem Einstieg.",
  },
];

const aiFeatures = [
  {
    title: "Formeln vorbereiten",
    text: "Aus einer fachlichen Beschreibung einen prüfbaren Formelvorschlag mit erlaubten Formelbausteinen ableiten.",
  },
  {
    title: "Risiken strukturieren",
    text: "Typische Unsicherheiten, Risikotreiber und Maßnahmen für das aktuelle Projekt als Denkanstoß vorschlagen.",
  },
  {
    title: "Ergebnisse erklären",
    text: "Perzentile, Zielabweichungen, Sensitivitäten und Handlungsempfehlungen in verständliche Managementsprache übersetzen.",
  },
  {
    title: "Szenarien schärfen",
    text: "Optimistische, realistische und kritische Varianten mit nachvollziehbaren Annahmen vorbereiten.",
  },
];

const audiences = [
  "Projektverantwortliche im Bau",
  "Bauherren und Investoren",
  "Projektsteuerer",
  "Immobilienentwickler",
  "Risikomanager",
  "Projektmanager",
  "Controller und Consultants",
  "Selbstständige und kleine Teams",
];

const faqs = [
  {
    question: "Ist die App browserbasiert?",
    answer:
      "Ja. SMART RISK wird über einen Link im Webbrowser geöffnet. Eine separate Desktop-Installation ist nicht erforderlich.",
  },
  {
    question: "Brauche ich einen API-Key?",
    answer:
      "Nur für die optionale KI-Assistenz. Die Simulation, Modellierung und Auswertung bleiben fachlich und rechnerisch lokal im Browser nutzbar. Wenn du KI-Unterstützung für Formulierungen, Strukturierung oder Ergebnisinterpretation verwenden möchtest, ist ein eigener Anthropic API-Key erforderlich.",
  },
  {
    question: "Werden Projektdaten automatisch in einer Cloud gespeichert?",
    answer:
      "Nein. Inhalte werden lokal im Browser gespeichert. Andere Nutzer haben keinen Zugriff auf lokale Projektdaten.",
  },
  {
    question: "Welche Daten kann ich exportieren?",
    answer:
      "Die App unterstützt JSON-Import und JSON-Export für Projektdaten sowie CSV-Export der Simulationsergebnisse. Zusätzlich gibt es Datenvorlagen und CSV-Importe für Parameter und Risiken.",
  },
  {
    question: "Kann ich eigene Formeln verwenden?",
    answer:
      "Ja. Eigene Formeln können erstellt, geprüft, gespeichert und wiederverwendet werden. Fachliche Formelvorlagen und eigene Bewertungslogik bleiben dabei klar getrennt.",
  },
  {
    question: "Gibt es Demo-Daten?",
    answer:
      "Ja. Demo-Daten können genutzt werden, um den Workflow von Bewertungsmodell über Unsicherheiten bis zur Ergebnisanalyse schnell zu verstehen.",
  },
  {
    question: "Was kostet die Lizenz?",
    answer:
      "Die Jahreslizenz kostet 599 Euro pro Jahr zzgl. 19 % MwSt. Die Laufzeit beträgt 12 Monate und verlängert sich automatisch um weitere 12 Monate, wenn sie nicht 1 Monat vor Ablauf gekündigt wird.",
  },
  {
    question: "Gibt es eine Testphase?",
    answer:
      "Ja. Es ist eine 3 Tage Testphase vorgesehen. Trial, Kauf und Lizenzprüfung können ein Nutzerkonto oder E-Mail/Magic-Link-Login erfordern.",
  },
  {
    question: "Ersetzt die Simulation eine Fachprüfung?",
    answer:
      "Nein. Die Ergebnisse sind eine Management- und Entscheidungshilfe. Fachliche, technische und vertragliche Plausibilisierung bleibt erforderlich.",
  },
  {
    question: "Gibt es gemeinsame Cloud-Arbeitsbereiche?",
    answer:
      "In dieser Version nicht. Der Fokus liegt auf einem persönlichen, browserbasierten Arbeitsbereich mit lokal gespeicherten Inhalten.",
  },
];

function App() {
  const [activeWorkspaceSlide, setActiveWorkspaceSlide] = useState(0);

  const currentWorkspaceSlide = workspaceSlides[activeWorkspaceSlide];

  const showPreviousWorkspaceSlide = () => {
    setActiveWorkspaceSlide((current) =>
      current === 0 ? workspaceSlides.length - 1 : current - 1,
    );
  };

  const showNextWorkspaceSlide = () => {
    setActiveWorkspaceSlide((current) =>
      current === workspaceSlides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main className="bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <img
              src={appIcon}
              alt="SMART RISK App-Icon"
              className="h-10 w-10 rounded-lg"
            />
            <span className="truncate font-serif text-xl font-semibold">
              {appName}
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-graphite md:flex">
            <a className="hover:text-ink" href="#features">
              Funktionen
            </a>
            <a className="hover:text-ink" href="#workspace">
              App
            </a>
            <a className="hover:text-ink" href="#license">
              Lizenz
            </a>
            <a className="hover:text-ink" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href={purchaseLink}
            className="inline-flex items-center gap-2 rounded-md bg-[#130d09] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-ink"
          >
            Lizenz sichern
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section
        id="hero"
        className="relative min-h-[690px] overflow-hidden bg-ink lg:min-h-[740px]"
      >
        <img
          src={heroScreenshot}
          alt="SMART RISK Dashboard mit Projektkennzahlen und Monte-Carlo-Simulation"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-[#05070c]/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,3,8,0.99) 0%, rgba(2,3,8,0.98) 26%, rgba(8,12,22,0.86) 52%, rgba(12,18,30,0.38) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070c]/34 via-transparent to-[#05070c]/42" />
        <div className="relative mx-auto flex min-h-[690px] max-w-7xl items-center px-5 py-14 sm:px-8 lg:min-h-[740px] lg:py-[4.5rem]">
          <div className="max-w-4xl text-white">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                Decision Support Tool für Risiko- und Szenarioanalyse
              </p>
              <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/78 backdrop-blur">
                Für Bau, Immobilien und Projektsteuerung
              </span>
            </div>
            <h1 className="mt-7 max-w-5xl font-serif text-5xl font-semibold leading-[1.02] drop-shadow-[0_12px_34px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
              <span className="block">SMART RISK</span>
              <span className="block whitespace-nowrap text-[2rem] sm:text-6xl lg:text-7xl">
                Monte-Carlo-Simulation
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)] sm:text-4xl">
              <span className="block">Projektrisiken simulieren.</span>
              <span className="block">Budgets besser entscheiden.</span>
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              Kosten-, Termin-, CAPEX- und Projektrisiken in Bau-, Immobilien-
              und Projektumfeldern systematisch modellieren, simulieren und als
              klare Managementaussage aufbereiten. Browserbasiert, lokal
              speichernd und mit optionaler KI-Unterstützung über eigenen
              API-Key.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/82">
              {["Monte-Carlo-Simulation", "599 € pro Jahr", "3 Tage testen"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/14 bg-white/10 px-4 py-2 backdrop-blur"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-9 grid max-w-5xl gap-4 sm:grid-cols-2">
              <a
                href={purchaseLink}
                className="inline-flex min-h-[66px] items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-extrabold text-[#111827] shadow-[0_22px_54px_rgba(0,0,0,0.34)] transition hover:-translate-y-0.5 hover:bg-white/92"
              >
                SMART RISK entdecken
                <ChevronRight size={22} strokeWidth={2.6} aria-hidden="true" />
              </a>
              <a
                href="#features"
                className="inline-flex min-h-[66px] items-center justify-center gap-3 rounded-xl border border-white/34 bg-white/12 px-8 py-4 text-lg font-extrabold text-white shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Funktionen ansehen
                <ChevronRight size={22} strokeWidth={2.6} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.titleLines.join(" ")}
                  className="flex min-h-[210px] flex-col items-center rounded-xl border border-white/18 bg-white/[0.14] px-5 py-5 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-md"
                >
                  <Check
                    className="mx-auto mb-4 h-6 w-6 text-[#9edbbf]"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  <h3 className="grid min-h-12 place-items-center text-lg font-extrabold leading-6">
                    <span>
                      {benefit.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </h3>
                  <p className="mt-3 grid min-h-[4.5rem] place-items-center text-sm font-semibold leading-6 text-white/74">
                    <span>
                      {benefit.textLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Problem und Nutzen
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Risiken brauchen mehr als Einzelwerte und Bauchgefühl.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Klassische Tabellen zeigen häufig nur Planwerte, aber nicht die Bandbreite möglicher Ergebnisse.",
              "Monte-Carlo-Simulationen machen Unsicherheit als Verteilung sichtbar und entscheidbar.",
              "P80, P90, Überschreitungswahrscheinlichkeiten und Sensitivitäten schaffen eine belastbare Managementsprache.",
              "Optionale KI-Assistenz hilft, Ergebnisse, Treiber und Gegenmaßnahmen schneller zu formulieren und zu strukturieren.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-md border border-ink/10 bg-white p-6 text-base leading-7 text-graphite shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Funktionen
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Vom Risikomodell bis zur Entscheidungsvorlage.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
              >
                <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-graphite">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Bewertungslogik vor der Simulation prüfen",
              text: "Fachliche Formelbibliothek, eigene Formeln, Formelgenerator und Formelprüfung helfen, die Logik nachvollziehbar aufzubauen, bevor Werte als Unsicherheiten in die Simulation übergehen.",
            },
            {
              icon: LineChart,
              title: "Demo-Daten für schnellen Einstieg",
              text: "Beispieldaten zeigen den Workflow vom Bewertungsmodell über Parameter und Szenarien bis zur Ergebnisanalyse. Das eignet sich für Produktdemo, Schulung und erste Orientierung.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-md border border-ink/10 bg-white p-7 shadow-sm"
            >
              <Icon className="h-8 w-8 text-sage" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-8 text-graphite">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workspace" className="border-y border-ink/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Nutzung / Eigener Arbeitsbereich
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Browserbasiert, lokal speichernd und projektorientiert.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: Laptop,
                  title: "Direkt im Webbrowser öffnen",
                  text: "Die App läuft über einen Link im Browser. Eine separate Desktop-Installation ist nicht erforderlich.",
                },
                {
                  icon: ShieldCheck,
                  title: "Lokale Inhalte",
                  text: "Projektdaten, Modelle und Simulationseinstellungen werden lokal im Browser gespeichert und nicht automatisch in einer Cloud-Datenbank geteilt.",
                },
                {
                  icon: FileJson,
                  title: "Export und Import",
                  text: "JSON-Import und JSON-Export sichern Projektdaten; CSV-Exporte und Vorlagen unterstützen Auswertung und Datenmanagement.",
                },
                {
                  icon: LockKeyhole,
                  title: "Konto und Lizenz",
                  text: "Trial, Kauf und Lizenzprüfung können ein Nutzerkonto oder E-Mail/Magic-Link-Login erfordern. Gemeinsame Cloud-Arbeitsbereiche sind nicht vorgesehen.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-md bg-white p-5">
                  <Icon className="mt-1 h-6 w-6 flex-none text-sage" />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 leading-7 text-graphite">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={appUrl}
              className="mt-7 inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink transition hover:bg-paper"
            >
              App öffnen
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-panel">
            <div className="flex items-center justify-between gap-4 border-b border-ink/10 bg-white px-4 py-3 sm:px-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Screenshot {activeWorkspaceSlide + 1} / {workspaceSlides.length}
                </p>
                <h3 className="mt-1 text-lg font-semibold">
                  {currentWorkspaceSlide.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-graphite">
                  {currentWorkspaceSlide.text}
                </p>
              </div>
              <div className="flex flex-none items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousWorkspaceSlide}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-paper text-ink transition hover:bg-mist"
                  aria-label="Vorheriger Screenshot"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextWorkspaceSlide}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-paper text-ink transition hover:bg-mist"
                  aria-label="Nächster Screenshot"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="relative bg-paper">
              <img
                src={currentWorkspaceSlide.image}
                alt={`SMART RISK ${currentWorkspaceSlide.title}`}
                className="aspect-[1.12/1] w-full object-cover object-left-top transition"
              />
            </div>
            <div className="flex items-center justify-center gap-2 border-t border-ink/10 bg-white px-5 py-4">
              {workspaceSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.title}
                  onClick={() => setActiveWorkspaceSlide(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeWorkspaceSlide
                      ? "w-8 bg-sage"
                      : "w-2.5 bg-mist hover:bg-graphite/35"
                  }`}
                  aria-label={`${slide.title} anzeigen`}
                  aria-current={index === activeWorkspaceSlide}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              KI-Assistenz
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Optionale API-Unterstützung für Formeln, Risikoideen, Szenarien und Berichtstexte.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite">
              Die Simulation bleibt fachlich und rechnerisch lokal. Die
              KI-Assistenz unterstützt dort, wo Formulierungen, Strukturierung
              und Interpretation Zeit sparen. Für diese optionale Nutzung ist
              ein eigener Anthropic API-Key erforderlich.
            </p>
          </div>
          <div className="mt-10 rounded-md border border-ink/10 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  Was die KI-Assistenz leistet
                </h3>
                <p className="mt-2 max-w-3xl text-base leading-7 text-graphite">
                  Die Simulation bleibt fachlich und rechnerisch lokal. Die KI
                  unterstützt dort, wo Formulierungen, Strukturierung und
                  Interpretation Zeit sparen.
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-ink/10 bg-paper px-4 py-1.5 text-sm font-semibold text-graphite">
                Optional
              </span>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {aiFeatures.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-md border border-ink/10 bg-paper p-4"
              >
                <BrainCircuit className="h-5 w-5 text-gold" />
                <h4 className="mt-3 font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-graphite">{text}</p>
              </div>
              ))}
            </div>
            <p className="mt-5 rounded-md bg-[#e8f0fa] px-5 py-4 leading-7 text-ink">
              Die KI bringt Mehrwert, wenn du schneller zu einem strukturierten
              Entwurf, einer besseren Ergebnisinterpretation oder klareren
              Berichtstexten kommen möchtest. Simulation, Plausibilisierung und
              fachliche Freigabe bleiben weiterhin bewusst beim Nutzer.
            </p>
          </div>
        </div>
      </section>

      <section id="license" className="bg-[#07182c] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-white/70">
              Lizenzmodell
            </p>
            <h2 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-normal text-white sm:text-6xl">
              Eine professionelle Jahreslizenz für belastbare Risikoentscheidungen.
            </h2>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/72">
              Für Anwender, die Projekt-, Kosten-, Termin- und CAPEX-Risiken
              regelmäßig simulieren und dabei Browser-Speicherung, Export und
              Import sauber nutzen möchten.
            </p>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/86">
              Pro Lizenz ist ein persönlicher Nutzerzugriff vorgesehen. Mehrere
              Lizenzen bedeuten mehrere getrennte Nutzerzugriffe, keinen
              gemeinsamen Cloud-Arbeitsbereich.
            </p>
          </div>
          <div className="w-full max-w-[620px] justify-self-end rounded-lg border border-white/22 bg-white/12 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-normal text-white/70">
                  Professional
                </p>
                <h3 className="mt-2 text-[2.45rem] font-extrabold leading-none tracking-normal text-white">
                  Jahreslizenz
                </h3>
              </div>
              <BadgeCheck className="mt-1 h-14 w-14 flex-none text-[#9edbbf]" strokeWidth={2.4} />
            </div>
            <div className="mt-9">
              <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
                <span className="text-[5.4rem] font-extrabold leading-[0.9] tracking-normal text-white sm:text-[6.25rem]">
                  599 €
                </span>
                <span className="pb-3 text-xl font-extrabold leading-7 text-white/88">
                  pro Jahr zzgl. 19% MwSt.
                </span>
              </div>
              <p className="mt-5 text-base font-bold leading-7 text-white/78">
                712,81 € inkl. MwSt.
                <br />
                Entspricht 49,92 € netto / 59,40 € brutto pro Monat
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["12 Monate", "Laufzeit"],
                ["3 Tage", "testen"],
                ["1", "Nutzerzugriff"],
              ].map(([lineOne, lineTwo]) => (
                  <div
                    key={`${lineOne}-${lineTwo}`}
                    className="flex min-h-[54px] flex-col items-center justify-center rounded-full border border-white/18 bg-white/12 px-4 py-2 text-center text-base font-extrabold leading-5 text-white/88"
                  >
                    <span>{lineOne}</span>
                    <span>{lineTwo}</span>
                  </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Verlängerung", "Automatisch um 12 Monate"],
                ["Kündigung", "1 Monat vor Ablauf"],
                ["Zahlung", "Sicherer Online-Zahlung"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex min-h-[110px] flex-col items-center justify-center rounded-md border border-white/14 bg-[#20324a]/72 p-4 text-center"
                >
                  <p className="text-sm font-extrabold uppercase tracking-normal text-[#9edbbf]">
                    {label}
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-white/90">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md border border-[#9edbbf]/20 bg-[#315068]/70 px-5 py-5 text-center">
              <p className="text-sm font-extrabold uppercase tracking-normal text-[#9edbbf]">
                Optionale KI-Nutzung
              </p>
              <p className="mt-1 text-lg font-semibold leading-7 text-white/90">
                Eigener Anthropic API-Key für optionale Assistenz
              </p>
            </div>
            <a
              href={purchaseLink}
              className="mt-9 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-lg font-extrabold text-ink shadow-[0_20px_48px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-white/92"
            >
              Lizenz sichern
              <ChevronRight size={24} strokeWidth={2.8} aria-hidden="true" />
            </a>
            <p className="mt-5 text-center text-base font-bold leading-7 text-white/62">
              Jahreslizenz | sichere Zahlung | persönlicher Nutzerzugriff
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Zielgruppe
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Für Projekte, bei denen Unsicherheit entscheidungsrelevant ist.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div
                key={item}
                className="rounded-md border border-ink/10 bg-white p-5 text-graphite"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-ink/10 bg-ivory">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Häufige Fragen
          </h2>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold">
                  {question}
                  <ChevronRight className="h-5 w-5 flex-none transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 max-w-3xl leading-8 text-graphite">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-ink/10 bg-ivory">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 text-center sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 lg:mx-0 lg:items-start">
            <div className="flex items-center gap-3">
              <img
                src={appIcon}
                alt="SMART RISK App-Icon"
                className="h-10 w-10 rounded-lg"
              />
              <span className="whitespace-nowrap font-serif text-xl font-semibold sm:text-2xl">
                {appName}
              </span>
            </div>
            <p className="max-w-xl text-sm leading-7 text-graphite sm:text-base">
              Monte-Carlo-gestützte Risiko- und Szenarioanalyse für belastbare
              Projekt- und Budgetentscheidungen.
            </p>
          </div>
          <div className="text-sm leading-7 text-graphite lg:text-right">
            <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-end">
              {["P50 / P80", "Budget & Termin", "Risiko-Puffer"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="font-medium text-ink">
              © 2026 SmartBuilt-AI · Powered by BuiltSmart Hub - Bernhard Metzger
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 lg:justify-end">
              <a href="https://www.built-smart-hub.com/impressum">Impressum</a>
              <span aria-hidden="true">|</span>
              <a href="https://www.built-smart-hub.com/datenschutz">
                Datenschutz
              </a>
              <span aria-hidden="true">|</span>
              <a href="https://www.built-smart-hub.com/agb">AGB</a>
              <span aria-hidden="true">|</span>
              <a href="https://www.built-smart-hub.com/widerrufsbelehrung">
                Widerrufsbelehrung
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
