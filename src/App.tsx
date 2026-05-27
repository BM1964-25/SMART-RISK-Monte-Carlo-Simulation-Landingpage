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
    titleLines: ["Bewertungsmodelle", "strukturieren"],
    text: "Fachliche Formelvorlagen nutzen, eigene Formeln erstellen, Parameter beziffern und Sofortergebnisse vor der Simulation prüfen.",
    textLines: [
      "Fachliche Formelvorlagen nutzen",
      "eigene Formeln erstellen",
      "Parameter sauber beziffern",
      "und Sofortergebnisse prüfen.",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "Unsicherheiten modellieren",
    titleLines: ["Unsicherheiten", "modellieren"],
    text: "Bandbreiten mit Mindestwert, wahrscheinlichstem Wert und Maximalwert sowie Verteilungen wie Dreieck, Gleichverteilung, Normalverteilung und Beta-PERT strukturieren.",
    textLines: [
      "Bandbreiten realistisch erfassen",
      "Min, wahrscheinlich und Max",
      "mit passenden Verteilungen",
      "simulationsfähig strukturieren.",
    ],
  },
  {
    icon: Gauge,
    title: "Monte-Carlo-Simulation durchführen",
    titleLines: ["Monte-Carlo-Simulation", "durchführen"],
    text: "1.000 bis 50.000 Läufe simulieren und Ergebnisräume mit P10, P50, P80, P90 und P95 belastbar sichtbar machen.",
    textLines: [
      "1.000 bis 50.000 Läufe",
      "für belastbare Ergebnisräume",
      "mit P10, P50, P80 und P90",
      "sichtbar auswerten.",
    ],
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
  "Kostenplaner und Cost Manager",
  "Projektcontrolling und PMO",
  "Technische Due Diligence",
  "Asset- und Portfolio Manager",
  "Generalunternehmer und Bauunternehmen",
];

const audienceGroups = [
  {
    icon: Target,
    label: "Bau & Projektsteuerung",
    title: "Für Projekte mit belastbaren Budgetentscheidungen.",
    text: "Projektsteuerer, Bauherrenvertretungen und Projektleitungen bewerten Kosten-, Termin- und Risikobandbreiten strukturiert statt nur mit Einzelwerten.",
  },
  {
    icon: LineChart,
    label: "Immobilien & Investment",
    title: "Für Vorhaben mit CAPEX-, Ertrags- und Szenariorisiken.",
    text: "Immobilienentwickler, Investoren sowie Asset- und Portfolio Manager prüfen Annahmen, Zielbudgets und Risikopuffer für nachvollziehbare Freigabeentscheidungen.",
  },
  {
    icon: ShieldCheck,
    label: "Risikomanagement",
    title: "Für Teams, die Unsicherheit transparent machen.",
    text: "Risikomanager und Consultants übersetzen Eingangsannahmen in Perzentile, Sensitivitäten und Managementaussagen.",
  },
  {
    icon: FileText,
    label: "Controlling & Fachberatung",
    title: "Für Kostenplanung, PMO und Due-Diligence-Prüfung.",
    text: "Cost Manager, Projektcontroller und technische Berater prüfen Annahmen, dokumentieren Entscheidungsgrundlagen und sichern Export-Workflows.",
  },
];

const faqs = [
  {
    question: "Welchen Nutzen bietet SMART RISK Monte-Carlo-Simulation?",
    answer:
      "SMART RISK macht Projekt-, Kosten-, Termin-, CAPEX- und Szenariorisiken als Bandbreiten sichtbar. Statt nur mit Einzelwerten zu planen, kannst du Unsicherheiten modellieren, Monte-Carlo-Simulationen durchführen und Ergebnisse als verständliche Managementaussage mit Perzentilen, Risikopuffer und Zielbudgetbewertung vorbereiten.",
  },
  {
    question: "Wie wird die App geöffnet?",
    answer:
      "Die App wird nach dem Download über den mitgelieferten Starter geöffnet. Sie läuft lokal auf deinem Gerät und wird anschließend im Browser angezeigt.",
  },
  {
    question: "Gibt es eine Windows- und macOS-Version?",
    answer:
      "Ja. SMART RISK kann auf Windows und macOS lokal im Browser genutzt werden. Dafür gibt es passende Starter für das jeweilige System.",
  },
  {
    question: "Werden Daten in der Cloud gespeichert?",
    answer:
      "Nein. Deine Inhalte werden lokal auf deinem Gerät bzw. im lokalen Browser-Speicher gespeichert. Es gibt keine automatische zentrale Cloud-Datenbank und keine automatische Synchronisierung zwischen Nutzern.",
  },
  {
    question: "Kann ich Daten exportieren?",
    answer:
      "Ja. Du kannst lokale Arbeitsdaten als JSON exportieren und später wieder importieren, zum Beispiel zur Sicherung oder zur Übertragung auf ein anderes Gerät. Simulationsergebnisse können zusätzlich als CSV für Auswertung und Dokumentation genutzt werden.",
  },
  {
    question: "Gibt es KI-Funktionen?",
    answer:
      "Ja. Die optionale KI-Assistenz unterstützt bei Formelvorschlägen, Risikoideen, Szenarien, Ergebnisinterpretationen und Berichtstexten. Die Simulation, Plausibilisierung und fachliche Freigabe bleiben weiterhin beim Nutzer.",
  },
  {
    question: "Warum brauche ich einen Anthropic API-Key?",
    answer:
      "Die KI-Funktionen laufen über die Anthropic API. Dafür wird ein eigener Anthropic API-Key benötigt. Ein normales Claude-Abo, zum Beispiel Claude Pro, ist dafür nicht ausreichend. Für die API-Nutzung können zusätzliche Kosten nach Anthropic-Abrechnung entstehen. Inhalte werden nur für die jeweilige KI-Anfrage an den Anbieter übertragen.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer:
      "Ja, sofern dieses Modell aktiviert ist. SMART RISK kann dann für 3 Tage mit vollem Funktionsumfang getestet werden.",
  },
  {
    question: "Brauche ich ein Nutzerkonto?",
    answer:
      "Für Testphase, Kauf und Lizenzprüfung kann ein Nutzerkonto erforderlich sein. Die gespeicherten Inhalte der App bleiben davon getrennt lokal auf deinem Gerät.",
  },
  {
    question: "Wie funktioniert die Lizenz?",
    answer:
      "Du erhältst eine Jahreslizenz für 12 Monate. Sie verlängert sich automatisch um weitere 12 Monate, sofern sie nicht spätestens 1 Monat vor Ablauf gekündigt wird. Der Preis beträgt 599 Euro pro Jahr zzgl. 19 % MwSt. pro persönlichem Nutzerzugriff.",
  },
  {
    question: "Kann ich eigene Bewertungsmodelle und Formeln verwenden?",
    answer:
      "Ja. Du kannst fachliche Formelvorlagen nutzen, eigene Formeln erstellen, prüfen, speichern und wiederverwenden. Parameter lassen sich beziffern und vor der Simulation als Sofortergebnis plausibilisieren.",
  },
  {
    question: "Welche Ergebnisse liefert die Monte-Carlo-Simulation?",
    answer:
      "SMART RISK zeigt Ergebnisverteilungen, Perzentile wie P50, P80 und P90, Budgetüberschreitungswahrscheinlichkeiten, Risikopuffer, Sensitivitäten und Szenarienvergleiche. Daraus entstehen nachvollziehbare Grundlagen für Managemententscheidungen.",
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
              SMART RISK macht Kosten-, Termin-, CAPEX- und Projektrisiken als
              belastbare Szenarien sichtbar. Für Bau, Immobilien und
              Projektsteuerung: browserbasiert, lokal speichernd und optional
              mit KI-Assistenz über eigenen API-Key.
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
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-18 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:py-20">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Problem und Nutzen
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-[2.8rem]">
              Entscheidungen unter Unsicherheit brauchen mehr als einen Einzelwert.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-graphite">
              Projektbudgets werden oft mit festen Zahlen geplant. SMART RISK
              zeigt, wie stabil diese Annahmen wirklich sind und welche
              Bandbreiten für Budget, Risiko und Gegensteuerung relevant werden.
            </p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {["P50 / P80 / P90", "Risikopuffer", "Sensitivität"].map((item) => (
                <div
                  key={item}
                  className="grid min-h-[54px] place-items-center rounded-md border border-ink/10 bg-white px-4 py-3 text-center text-sm font-extrabold text-ink"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-4">
              {[
                {
                  label: "Ausgangslage",
                  title: "Planwerte allein reichen nicht",
                  text: "Feste Budgets verdecken, wie stark Kosten, Termine und Annahmen in der Praxis schwanken können.",
                },
                {
                  label: "Analyse",
                  title: "Unsicherheit wird messbar",
                  text: "Monte-Carlo-Simulationen übersetzen Bandbreiten in Verteilungen, Perzentile und Überschreitungswahrscheinlichkeiten.",
                },
                {
                  label: "Entscheidung",
                  title: "Managementaussagen werden belastbar",
                  text: "P80, P90, Sensitivitäten und Risikopuffer schaffen eine Sprache für Freigabe, Nachschärfung und Gegensteuerung.",
                },
              ].map(({ label, title, text }) => (
                <article
                  key={title}
                  className="grid gap-5 rounded-md border border-ink/10 bg-white p-5 shadow-sm sm:grid-cols-[8.5rem_1fr] sm:items-center"
                >
                  <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-sm font-bold text-sage ring-1 ring-ink/10">
                      {label === "Ausgangslage"
                        ? "1"
                        : label === "Analyse"
                          ? "2"
                          : "3"}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      {label}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-7">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-graphite">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid gap-5 rounded-md border border-sage/20 bg-[#e8f0fa] p-5 shadow-sm sm:grid-cols-[8.5rem_1fr] sm:items-center">
              <div className="flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-white">
                  <Target size={22} aria-hidden="true" />
                </div>
              </div>
              <p className="text-base font-semibold leading-7 text-ink">
                <span className="block">
                  Ergebnis: Aus Annahmen werden nachvollziehbare Entscheidungsvorlagen.
                </span>
                <span className="block">
                  Für Bau, Immobilien und Projektsteuerung.
                </span>
                <span className="block">
                  Ohne die fachliche Freigabe aus der Hand zu geben.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Funktionen
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                <span className="block">Vom Risikomodell</span>
                <span className="block">bis zur Entscheidungsvorlage.</span>
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-graphite">
              SMART RISK führt Bewertungslogik, Unsicherheiten, Simulation,
              Szenarien und Berichtsausgabe in einem nachvollziehbaren
              Arbeitsfluss zusammen.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {features.slice(0, 3).map(({ icon: Icon, title, text, titleLines, textLines }, index) => (
              <article
                key={title}
                className="rounded-md border border-ink/10 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between gap-5">
                  <Icon className="h-9 w-9 text-gold" aria-hidden="true" />
                  <span className="text-sm font-semibold text-graphite/60">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 min-h-16 text-2xl font-semibold leading-8">
                  {(titleLines ?? [title]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-4 min-h-32 leading-8 text-graphite">
                  {(textLines ?? [text]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-md border border-ink/10 bg-ivory p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold">
                Vertiefende Analyse- und Arbeitsfunktionen
              </h3>
              <span className="text-sm font-semibold text-graphite">
                Szenarien, Sensitivität, Bericht und Daten
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {features.slice(3).map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="flex gap-4 rounded-md border border-ink/10 bg-white p-5"
                >
                  <Icon className="mt-1 h-6 w-6 flex-none text-sage" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold leading-6">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-graphite">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07182c] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9edbbf]">
              Qualität vor Simulation
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              <span className="block">Erst prüfen.</span>
              <span className="block">Dann simulieren.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
              SMART RISK trennt Bewertungslogik, Beispielprojekt und Simulation
              bewusst. So entstehen nachvollziehbare Ergebnisse statt
              unkontrollierter Zahlenläufe.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                icon: Target,
                label: "01",
                title: "Bewertungslogik fachlich absichern",
                text: "Formelvorlagen, eigene Formeln, Parameter und Sofortergebnisse werden geprüft, bevor Werte als Unsicherheiten in die Simulation übergehen.",
              },
              {
                icon: LineChart,
                label: "02",
                title: "Mit Demo-Daten schneller verstehen",
                text: "Beispieldaten zeigen den kompletten Ablauf vom Bewertungsmodell über Szenarien bis zur Ergebnisanalyse. Ideal für Produktdemo, Schulung und Einstieg.",
              },
            ].map(({ icon: Icon, label, title, text }) => (
              <article
                key={title}
                className="grid gap-5 rounded-md border border-white/14 bg-white/[0.08] p-6 backdrop-blur sm:grid-cols-[auto_1fr_auto] sm:items-start"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#9edbbf] ring-1 ring-white/14">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-8">{title}</h3>
                  <p className="mt-3 max-w-3xl leading-8 text-white/72">
                    {text}
                  </p>
                </div>
                <span className="text-sm font-bold text-white/45">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workspace" className="border-y border-ink/10 bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Nutzung / Eigener Arbeitsbereich
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Ein persönlicher Arbeitsbereich für Risikoentscheidungen.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-graphite">
              SMART RISK läuft direkt im Browser, hält lokale Projektdaten
              kontrollierbar und verbindet Bewertungsmodell, Simulation,
              Szenarien und Ergebnisanalyse in einem fokussierten Workspace.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-md border border-ink/10 bg-white shadow-panel">
            <div className="flex items-center justify-between gap-4 border-b border-ink/10 bg-white px-4 py-4 sm:px-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Live-Einblick {activeWorkspaceSlide + 1} / {workspaceSlides.length}
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
            <div className="relative bg-[#edf3f8]">
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
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Laptop,
                title: "Direkt öffnen",
                text: "Im Webbrowser starten, ohne separate Desktop-Installation.",
              },
              {
                icon: ShieldCheck,
                title: "Daten kontrollieren",
                text: "Projekt- und Modelldaten lokal halten, ohne zentrale Cloud-Datenbank.",
              },
              {
                icon: FileJson,
                title: "Exportieren",
                text: "Projektdaten per JSON sichern und Ergebnisse per CSV weitergeben.",
              },
              {
                icon: LockKeyhole,
                title: "Persönlich lizenzieren",
                text: "Trial, Kauf und Lizenzprüfung über persönlichen Nutzerzugriff.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-md border border-ink/10 bg-white p-5"
              >
                <Icon className="h-6 w-6 text-sage" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-graphite">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {["Keine Desktop-Installation", "Lokaler Browser-Speicher", "JSON- und CSV-Workflows"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <a
              href={appUrl}
              className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink transition hover:bg-ivory"
            >
              App öffnen
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              KI-Assistenz
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              <span className="block">Optionale Unterstützung</span>
              <span className="block">für Struktur, Sprache</span>
              <span className="block">und Interpretation.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">
              Die Monte-Carlo-Simulation bleibt fachlich und rechnerisch lokal.
              Die KI-Assistenz greift dort, wo Entwürfe, Formulierungen und
              Erklärungen schneller belastbar vorbereitet werden sollen.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Optional nutzbar", "Eigener Anthropic API-Key"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-ink/10 bg-white px-4 py-3 text-center text-sm font-extrabold text-ink"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Assistenzfelder</h3>
                <p className="mt-2 text-base leading-7 text-graphite">
                  Für vorbereitende Arbeit, nicht als Ersatz für Prüfung und
                  Freigabe.
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-paper px-4 py-2 text-sm font-semibold text-graphite">
                Optional
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {aiFeatures.map(({ title, text }, index) => (
                <article
                  key={title}
                  className="grid gap-4 rounded-md border border-ink/10 bg-paper p-4 sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sage ring-1 ring-ink/10">
                    <BrainCircuit size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                      0{index + 1}
                    </p>
                    <h4 className="mt-2 font-semibold">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-graphite">{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 rounded-md border border-sage/20 bg-[#e8f0fa] px-5 py-4">
              <p className="text-base font-semibold leading-7 text-ink">
                Simulation, Plausibilisierung und fachliche Freigabe bleiben
                bewusst beim Nutzer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="license" className="bg-[#07182c] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9edbbf]">
              Lizenzmodell
            </p>
            <h2 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[1.04] tracking-normal text-white sm:text-6xl">
              Professionelle Risikoanalyse.
              <span className="block">Klar lizenziert.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/72">
              SMART RISK richtet sich an Anwender, die Kosten-, Termin-,
              CAPEX- und Projektrisiken regelmäßig als belastbare Szenarien
              bewerten und Ergebnisse nachvollziehbar weitergeben möchten.
            </p>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/86">
              Pro Lizenz ist ein persönlicher Nutzerzugriff vorgesehen. Mehrere
              Lizenzen bedeuten mehrere getrennte Nutzerzugriffe, keinen
              gemeinsamen Cloud-Arbeitsbereich.
            </p>
            <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-2">
              {[
                "Monte-Carlo-Simulation mit Perzentilen",
                "Bewertungsmodelle und eigene Formeln",
                "Szenarien, Sensitivität und Bericht",
                "JSON- und CSV-Workflows",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-md border border-white/12 bg-white/[0.06] p-4 text-sm font-bold leading-6 text-white/82"
                >
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[#9edbbf]" strokeWidth={2.6} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-[640px] justify-self-end rounded-lg border border-white/22 bg-white/13 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-white/70">
                  Professional
                </p>
                <h3 className="mt-2 text-[2.55rem] font-extrabold leading-none tracking-normal text-white">
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
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
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
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["Verlängerung", "Automatisch um 12 Monate"],
                ["Kündigung", "1 Monat vor Ablauf"],
                ["Zahlung", "Sicherer Online-Zahlungsprozess"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex min-h-[116px] flex-col items-center justify-center rounded-md border border-white/14 bg-[#20324a]/72 p-4 text-center"
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
            <div className="mt-7 grid gap-3 sm:grid-cols-[0.82fr_1.18fr]">
              <div className="rounded-md border border-[#9edbbf]/20 bg-[#315068]/70 px-5 py-5 text-center">
                <p className="text-sm font-extrabold uppercase tracking-normal text-[#9edbbf]">
                  KI-Nutzung
                </p>
                <p className="mt-1 text-base font-bold leading-7 text-white/90">
                  Optional
                </p>
              </div>
              <div className="rounded-md border border-[#9edbbf]/20 bg-[#315068]/70 px-5 py-5 text-center">
                <p className="text-sm font-extrabold uppercase tracking-normal text-[#9edbbf]">
                  API-Key
                </p>
                <p className="mt-1 text-base font-bold leading-7 text-white/90">
                  Eigener Anthropic API-Key erforderlich
                </p>
              </div>
            </div>
            <a
              href={purchaseLink}
              className="mt-9 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-lg font-extrabold text-ink shadow-[0_20px_48px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-white/92"
            >
              Lizenz sichern
              <ChevronRight size={24} strokeWidth={2.8} aria-hidden="true" />
            </a>
            <p className="mt-5 text-center text-base font-bold leading-7 text-white/64">
              Jahreslizenz | sicherer Online-Zahlungsprozess | persönlicher Nutzerzugriff
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Zielgruppe
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Für Entscheidungen, bei denen Unsicherheit nicht verdeckt
                bleiben darf.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-graphite">
              SMART RISK ist für professionelle Nutzer konzipiert, die
              Projektannahmen plausibilisieren, Risikoauswirkungen beziffern
              und Managemententscheidungen mit klaren Kennzahlen vorbereiten.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {audienceGroups.map(({ icon: Icon, label, title, text }) => (
              <article
                key={label}
                className="rounded-md border border-ink/10 bg-white p-7 shadow-[0_14px_36px_rgba(16,31,53,0.05)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sage/20 bg-[#e9f1f8] text-sage">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                    {label}
                  </p>
                </div>
                <h3 className="mt-7 max-w-xl text-2xl font-extrabold leading-8 text-ink">
                  {title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-graphite">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-md border border-ink/10 bg-ivory px-5 py-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Geeignet für
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {audiences.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-center text-sm font-bold leading-5 text-ink"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-ink/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Häufige Fragen zu Nutzung, Daten und Lizenz.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-graphite">
              Die wichtigsten Antworten zu lokaler Nutzung, Export,
              KI-Assistenz, API-Key und Jahreslizenz auf einen Blick.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["Lokal nutzbar", "Eigener API-Key", "599 € Jahreslizenz"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-ink/10 bg-white px-5 py-3 text-center text-sm font-bold text-ink"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-[0_18px_48px_rgba(16,31,53,0.06)] sm:p-6">
            <div className="divide-y divide-ink/10">
              {faqs.map(({ question, answer }, index) => (
                <details key={question} className="group py-5 first:pt-1 last:pb-1">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                    <span className="flex gap-4">
                      <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-sage/20 bg-[#e9f1f8] text-xs font-extrabold text-sage">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-extrabold leading-7 text-ink">
                        {question}
                      </span>
                    </span>
                    <ChevronRight className="mt-1 h-5 w-5 flex-none text-sage transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl pl-12 leading-8 text-graphite">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-ink/10 bg-ivory">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 text-center sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:text-left">
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
