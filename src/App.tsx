import {
  ArrowDown,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronRight,
  FileJson,
  FileText,
  Gauge,
  KeyRound,
  Laptop,
  LineChart,
  LockKeyhole,
  Mail,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import { useState } from "react";
import heroScreenshot from "./assets/smart-risk-dashboard-hero.png";
import workspaceDashboard from "./assets/smart-risk-workspace-dashboard.png";
import appIcon from "./assets/smart-risk-icon.jpeg";

const appName = "SMART RISK Monte-Carlo-Simulation";
const appUrl = "https://bm1964-25.github.io/SMART-RISK-Monte-Carlo-Simulation/";
const preorderMail =
  "mailto:info@built-smart-hub.com?subject=Vorbestellung%20SMART%20RISK%20Monte-Carlo-Simulation";

const benefits = [
  "Risiken probabilistisch bewerten",
  "KI-Interpretation mit eigenem API-Key",
  "Lokal im Browser arbeiten",
];

const features = [
  {
    icon: SlidersHorizontal,
    title: "Unsicherheiten modellieren",
    text: "Bandbreitenparameter, Ereignisbausteine und Verteilungen wie Dreieck, Gleichverteilung, Normalverteilung und Beta-PERT strukturieren.",
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
];

const aiFeatures = [
  "KI-gestützte Ergebnisinterpretation",
  "Management-Zusammenfassung und Bericht",
  "Risiko-Treiber erklären lassen",
  "Szenario-Empfehlungen ableiten",
  "Maßnahmen zur Gegensteuerung vorschlagen",
  "Projekt- und Risikodaten plausibilisieren",
];

const audiences = [
  "Projektverantwortliche",
  "Bauherren und Investoren",
  "Projektsteuerer",
  "Bau- und Immobilienprofis",
  "Risikomanager",
  "Controller und Consultants",
  "Entscheider mit Kosten-, Termin- oder CAPEX-Risiken",
  "Teams, die nachvollziehbare Managementaussagen brauchen",
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
      "Ja. Für die KI-Funktionen ist ein eigener API-Key erforderlich. Die Monte-Carlo-Grundfunktionen, Modellierung und Auswertung bleiben als browserbasierter Arbeitsbereich strukturiert nutzbar.",
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <img src={appIcon} alt="" className="h-10 w-10 rounded-lg" />
            <span className="truncate font-serif text-xl font-semibold">
              SMART RISK
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-graphite md:flex">
            <a className="hover:text-ink" href="#features">
              Funktionen
            </a>
            <a className="hover:text-ink" href="#workspace">
              Konto
            </a>
            <a className="hover:text-ink" href="#license">
              Lizenz
            </a>
            <a className="hover:text-ink" href="#faq">
              FAQ
            </a>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-[#130d09] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-ink"
          >
            Lizenz sichern
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </nav>
      </header>

      <section
        id="hero"
        className="relative min-h-[640px] overflow-hidden bg-ink lg:min-h-[690px]"
      >
        <img
          src={heroScreenshot}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-[#05070c]/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,3,8,0.99) 0%, rgba(2,3,8,0.98) 24%, rgba(8,12,22,0.82) 48%, rgba(12,18,30,0.34) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070c]/42 via-transparent to-[#05070c]/30" />
        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-12 sm:px-8 lg:min-h-[690px] lg:py-16">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Decision Support Tool für Risiko- und Szenarioanalyse
            </p>
            <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur">
              <Sparkles size={16} aria-hidden="true" />
              Probabilistische Analyse mit KI-gestützter Interpretation
            </div>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] drop-shadow-[0_12px_34px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
              {appName}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Kosten-, Termin-, CAPEX- und Projektrisiken systematisch
              modellieren, simulieren und als klare Managementaussage
              aufbereiten. Browserbasiert, lokal speichernd und mit
              KI-Funktionen über eigenen API-Key.
            </p>
            <div className="mt-9 grid max-w-4xl gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex min-h-[64px] items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#111827] shadow-[0_22px_54px_rgba(0,0,0,0.32)] transition hover:-translate-y-0.5 hover:bg-white/92"
              >
                Jetzt kaufen
                <ChevronRight size={22} strokeWidth={2.6} aria-hidden="true" />
              </button>
              <a
                href="#features"
                className="inline-flex min-h-[64px] items-center justify-center gap-3 rounded-xl border border-white/38 bg-white/14 px-8 py-4 text-lg font-bold text-white shadow-[0_18px_44px_rgba(0,0,0,0.2)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/22"
              >
                Funktionen ansehen
                <ChevronRight size={22} strokeWidth={2.6} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-xl border border-white/20 bg-white/[0.16] px-5 py-6 text-center text-base font-bold leading-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_42px_rgba(0,0,0,0.2)] backdrop-blur-md"
                >
                  <Check
                    className="mx-auto mb-3 h-6 w-6 text-[#8fd2ae]"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  {benefit}
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
              "KI-Funktionen helfen, Ergebnisse, Treiber und Gegenmaßnahmen schneller zu erklären.",
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
            <img
              src={workspaceDashboard}
              alt="SMART RISK Dashboard mit Kennzahlen und Simulationsergebnissen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              KI-Funktionen
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Interpretation und Plausibilisierung mit eigenem API-Key.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite">
              Die KI-Funktionen benötigen einen eigenen API-Key. Sie ergänzen
              die Monte-Carlo-Methodik um verständliche Managementtexte,
              Treibererklärungen und Vorschläge zur Gegensteuerung.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {aiFeatures.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-md border border-ink/10 bg-white p-4"
              >
                <BrainCircuit className="mt-0.5 h-5 w-5 flex-none text-gold" />
                <span className="leading-7 text-graphite">{item}</span>
              </div>
            ))}
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
          <div className="rounded-lg border border-white/22 bg-white/12 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.04em] text-white/70">
                  Professional
                </p>
                <h3 className="mt-2 text-4xl font-extrabold tracking-normal text-white">
                  Jahreslizenz
                </h3>
              </div>
              <BadgeCheck className="h-14 w-14 flex-none text-[#9edbbf]" strokeWidth={2.4} />
            </div>
            <div className="mt-8">
              <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="text-8xl font-extrabold leading-none tracking-normal text-white">
                  599 €
                </span>
                <span className="pb-4 text-lg font-extrabold text-white/88">
                  pro Jahr zzgl. 19% MwSt.
                </span>
              </div>
              <p className="mt-4 text-base font-bold leading-7 text-white/78">
                712,81 € inkl. MwSt.
                <br />
                Entspricht 49,92 € netto / 59,40 € brutto pro Monat
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["12 Monate Laufzeit", "3 Tage testen", "1 Nutzerzugriff"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/18 bg-white/12 px-4 py-2 text-center text-base font-extrabold text-white/88"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Verlängerung", "Automatisch um 12 Monate"],
                ["Kündigung", "1 Monat vor Ablauf"],
                ["Zahlung", "Sichere Online-Zahlung"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md border border-white/14 bg-[#20324a]/72 p-5 text-center"
                >
                  <p className="text-sm font-extrabold uppercase text-[#9edbbf]">
                    {label}
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-white/90">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md border border-[#9edbbf]/20 bg-[#315068]/70 px-5 py-4 text-center">
              <p className="text-sm font-extrabold uppercase text-[#9edbbf]">
                KI-Nutzung
              </p>
              <p className="mt-1 text-lg font-semibold text-white/90">
                Eigener Anthropic API-Key erforderlich
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-8 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-lg font-extrabold text-ink shadow-[0_20px_48px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-white/92"
            >
              Lizenz sichern
              <ChevronRight size={24} strokeWidth={2.8} aria-hidden="true" />
            </button>
            <p className="mt-5 text-center text-base font-bold text-white/62">
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

      <footer className="border-t border-ink/10 bg-ivory">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 text-center sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="mx-auto flex max-w-none flex-col items-center gap-4 lg:mx-0 lg:items-start">
            <div className="flex items-center gap-3">
              <img src={appIcon} alt="" className="h-10 w-10 rounded-lg" />
              <span className="whitespace-nowrap font-serif text-xl font-semibold sm:text-2xl">
                {appName}
              </span>
            </div>
            <p className="whitespace-nowrap text-sm leading-7 text-graphite sm:text-base">
              Probabilistische Risiko- und Szenarioanalyse für belastbare Projektentscheidungen.
            </p>
          </div>
          <div className="text-sm text-graphite">
            <p className="font-medium text-ink">
              © 2026 SmartBuilt-AI · powered by BuiltSmart Hub - Bernhard
              Metzger
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-end">
              <a href="https://www.built-smart-hub.com/impressum">Impressum</a>
              <a href="https://www.built-smart-hub.com/datenschutz">
                Datenschutz
              </a>
              <a href="https://www.built-smart-hub.com/agb">AGB</a>
              <a href="https://www.built-smart-hub.com/widerrufsbelehrung">
                Widerrufsbelehrung
              </a>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen ? <PreorderModal onClose={() => setIsModalOpen(false)} /> : null}
    </main>
  );
}

function PreorderModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 px-5 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preorder-title"
    >
      <div className="w-full max-w-lg rounded-md bg-ivory p-7 shadow-panel">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Kaufbereich
            </p>
            <h2
              id="preorder-title"
              className="mt-2 font-serif text-3xl font-semibold"
            >
              {appName} ist in Vorbereitung.
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-md border border-ink/10 bg-white text-ink"
            aria-label="Schließen"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <p className="mt-5 leading-8 text-graphite">
          Der Kaufbereich wird derzeit vorbereitet. Bei Interesse kannst du eine
          Vorbestellung vormerken lassen.
        </p>
        <p className="mt-4 leading-8 text-graphite">
          Sobald Trial, Zahlung und Lizenzfreischaltung aktiv sind, führt der
          Kaufbutton direkt zur sicheren Online-Bestellung.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={preorderMail}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white transition hover:bg-[#130d09]"
          >
            <Mail size={18} aria-hidden="true" />
            Vorbestellung anfragen
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 font-semibold text-ink"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
