import {
  ArrowDown,
  BadgeCheck,
  BarChart3,
  Boxes,
  Calculator,
  ChartNoAxesColumnIncreasing,
  Check,
  ChevronRight,
  CloudOff,
  Database,
  FileJson,
  FileText,
  Gauge,
  GitCompare,
  KeyRound,
  Laptop,
  Lock,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";

const checkoutUrl = "#license";

const features = [
  {
    icon: Calculator,
    title: "Monte-Carlo-Simulationen durchführen",
    text: "Unsichere Annahmen in belastbare Ergebnisräume übersetzen.",
  },
  {
    icon: ShieldCheck,
    title: "Risiken modellieren",
    text: "Risiken, Unsicherheiten und Eintrittswahrscheinlichkeiten strukturiert erfassen.",
  },
  {
    icon: SlidersHorizontal,
    title: "Verteilungen definieren",
    text: "Eingangsgrößen mit passenden Wahrscheinlichkeitsverteilungen beschreiben.",
  },
  {
    icon: GitCompare,
    title: "Szenarien vergleichen",
    text: "Varianten, Annahmen und Risikoprofile nachvollziehbar gegenüberstellen.",
  },
  {
    icon: Gauge,
    title: "Kennzahlen anzeigen",
    text: "Ergebniswerte, Bandbreiten und Risikokennzahlen klar auswerten.",
  },
  {
    icon: BarChart3,
    title: "Histogramme visualisieren",
    text: "Verteilungen, Häufigkeiten und Ergebnisstreuung schnell erfassen.",
  },
  {
    icon: TrendingUp,
    title: "Sensitivitäten auswerten",
    text: "Erkennen, welche Faktoren das Ergebnis besonders stark beeinflussen.",
  },
  {
    icon: FileText,
    title: "Berichte vorbereiten",
    text: "Analysen und Ergebnisse für Abstimmungen und Entscheidungen aufbereiten.",
  },
  {
    icon: Database,
    title: "Projektstammdaten verwalten",
    text: "Projektkontext, Annahmen und Simulationsdaten geordnet halten.",
  },
  {
    icon: FileJson,
    title: "JSON Export / Import",
    text: "Daten sichern, übertragen oder für spätere Analysen wieder laden.",
  },
  {
    icon: Boxes,
    title: "Demo-Daten laden",
    text: "Mit Beispielmodellen schneller in Struktur und Auswertung einsteigen.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Strukturierte Ergebnisanalyse",
    text: "Simulationsergebnisse verständlich prüfen, erklären und dokumentieren.",
  },
];

const audiences = [
  "Projektmanager",
  "Bau- und Immobilienprofis",
  "Risikomanager",
  "Controller",
  "Consultants",
  "Projektsteuerer",
  "Investoren",
  "Selbstständige",
  "kleine Teams ohne Cloud-Zwang",
  "Menschen, die Risiken nachvollziehbar simulieren und erklären möchten",
];

const faqs = [
  {
    question: "Läuft die App lokal?",
    answer:
      "Ja. SMART RISK Monte-Carlo-Simulation ist als lokale Desktop-App konzipiert und läuft direkt auf dem Rechner.",
  },
  {
    question: "Werden Daten in der Cloud gespeichert?",
    answer:
      "Nein. Die App ist auf lokale Nutzung ausgelegt. Vertrauliche Projekt- und Risikodaten bleiben beim Anwender.",
  },
  {
    question: "Gibt es eine Windows-Version?",
    answer:
      "Die Landingpage ist so vorbereitet, dass eine Windows-Version ausgewiesen werden kann, sobald das Installationspaket bereitsteht.",
  },
  {
    question: "Wie funktioniert die Lizenz?",
    answer:
      "Die App wird über eine kostenpflichtige Jahreslizenz für 599 Euro zzgl. 19% MwSt. lizenziert. Die Laufzeit beträgt 12 Monate und verlängert sich automatisch um weitere 12 Monate.",
  },
  {
    question: "Kann ich Daten exportieren?",
    answer:
      "Ja. Über JSON Export und Import können Projektdaten gesichert, übertragen und wieder eingelesen werden.",
  },
  {
    question: "Brauche ich ein Nutzerkonto?",
    answer:
      "Für die lokale Arbeit ist kein SaaS-Konto vorgesehen. Die Lizenz gilt für die lokale Nutzung der App.",
  },
  {
    question: "Für welche Anwendungsfälle eignet sich die App?",
    answer:
      "Für Projekt-, Kosten-, Termin-, Investitions- und Entscheidungsrisiken, bei denen Unsicherheiten quantitativ sichtbar gemacht werden sollen.",
  },
  {
    question: "Kann ich eigene Szenarien anlegen?",
    answer:
      "Ja. Eigene Szenarien, Annahmen und Modellvarianten können angelegt und miteinander verglichen werden.",
  },
  {
    question: "Ist die App ein SaaS-Produkt?",
    answer:
      "Nein. SMART RISK ist bewusst kein komplexes SaaS-System, sondern eine schlanke lokale Desktop-App.",
  },
];

function App() {
  return (
    <main className="bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#hero" className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-paper">
              SR
            </span>
            <span>SMART RISK</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-graphite md:flex">
            <a className="hover:text-ink" href="#features">
              Funktionen
            </a>
            <a className="hover:text-ink" href="#local">
              Lokal
            </a>
            <a className="hover:text-ink" href="#license">
              Lizenz
            </a>
            <a className="hover:text-ink" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href="#license"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-paper shadow-sm transition hover:bg-graphite"
          >
            Lizenz sichern
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section id="hero" className="subtle-grid overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-sm text-graphite shadow-sm">
              <Lock size={15} aria-hidden="true" />
              Lokale Desktop-App für quantitative Risikoanalyse
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              SMART RISK Monte-Carlo-Simulation
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
              Risiken, Unsicherheiten und Szenarien systematisch modellieren,
              simulieren und verständlich auswerten. Lokal, schnell und
              konzentriert auf belastbare Entscheidungen.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#license"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-base font-semibold text-paper shadow-panel transition hover:-translate-y-0.5 hover:bg-graphite"
              >
                Jetzt kaufen / Lizenz sichern
                <KeyRound size={18} aria-hidden="true" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink/15 bg-white/70 px-6 py-3 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white"
              >
                Funktionen ansehen
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
              Problem und Nutzen
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Risiken werden besser verstanden, wenn sie nicht nur beschrieben,
              sondern simuliert werden.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Bauchgefühl reicht selten aus, um Projekt-, Kosten- oder Terminrisiken realistisch zu beurteilen.",
              "Klassische Tabellen zeigen oft nur Einzelwerte, aber nicht die Bandbreite möglicher Ergebnisse.",
              "Monte-Carlo-Simulationen machen Unsicherheit sichtbar und helfen, Entscheidungen nachvollziehbar zu begründen.",
              "SMART RISK bündelt Modellierung, Simulation und Analyse in einem ruhigen lokalen Werkzeug.",
            ].map((item) => (
              <div
                className="rounded-lg border border-ink/10 bg-paper p-5 text-graphite"
                key={item}
              >
                <Check className="mb-4 text-moss" size={21} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
            Funktionen
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            Vom Risikomodell bis zur verständlichen Ergebnisanalyse.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
              key={feature.title}
            >
              <feature.icon className="text-ocean" size={24} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-graphite">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="local" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mist">
              Lokale Datenspeicherung
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Für vertrauliche Projekt- und Risikodaten bewusst lokal gedacht.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/72">
              SMART RISK läuft auf dem Rechner des Anwenders. Es gibt keine
              Cloud-Pflicht, keine Teamfunktionen und kein komplexes
              SaaS-System. Die Daten bleiben dort, wo sie hingehören.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Laptop, label: "Läuft lokal auf dem Rechner" },
              { icon: CloudOff, label: "Keine Cloud-Pflicht" },
              { icon: Database, label: "Daten bleiben beim Anwender" },
              { icon: Lock, label: "Geeignet für vertrauliche Risikodaten" },
            ].map((item) => (
              <div
                className="rounded-lg border border-white/12 bg-white/7 p-6 glass-line"
                key={item.label}
              >
                <item.icon className="text-mist" size={26} aria-hidden="true" />
                <p className="mt-5 text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="license" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
              Lizenzmodell
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Eine klare Jahreslizenz für die lokale Nutzung der App.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite">
              Die Lizenz richtet sich an professionelle Anwender, die
              Risikoanalysen lokal und nachvollziehbar durchführen möchten.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-panel sm:p-8">
            <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-7 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-semibold">Jahreslizenz</h3>
                <p className="mt-2 text-graphite">599 Euro zzgl. 19% MwSt.</p>
              </div>
              <a
                href={checkoutUrl}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 font-semibold text-paper transition hover:bg-graphite"
              >
                Lizenz sichern
                <BadgeCheck size={18} aria-hidden="true" />
              </a>
            </div>
            <ul className="mt-7 grid gap-4 text-graphite">
              {[
                "Jahreslizenz für 599 Euro zzgl. 19% MwSt.",
                "Laufzeit 12 Monate",
                "Automatische Verlängerung um weitere 12 Monate",
                "Kündigungsfrist: 1 Monat vor Ablauf",
                "Lizenz für lokale Nutzung der App",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <Check className="mt-0.5 shrink-0 text-moss" size={20} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
              Zielgruppe
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Für Menschen, die Risiken nachvollziehbar simulieren und erklären
              müssen.
            </h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-ink/10 bg-paper px-5 py-4 font-medium"
                key={audience}
              >
                <Search className="text-ocean" size={19} aria-hidden="true" />
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            Kurze Antworten vor dem Kauf.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white">
          {faqs.map((faq) => (
            <details className="group p-6" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {faq.question}
                <ChevronRight
                  className="shrink-0 transition group-open:rotate-90"
                  size={20}
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-graphite">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-graphite sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SMART RISK Monte-Carlo-Simulation</p>
          <div className="flex flex-wrap gap-5">
            <a className="hover:text-ink" href="/impressum">
              Impressum
            </a>
            <a className="hover:text-ink" href="/datenschutz">
              Datenschutz
            </a>
            <a className="hover:text-ink" href="/agb">
              AGB
            </a>
            <a className="hover:text-ink" href="/widerruf">
              Widerrufsbelehrung
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="rounded-[20px] border border-ink/10 bg-ink p-2 shadow-panel">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#f8f6f1]">
          <div className="flex items-center justify-between border-b border-ink/10 bg-white px-4 py-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#d96a56]" />
              <span className="h-3 w-3 rounded-full bg-[#d6aa43]" />
              <span className="h-3 w-3 rounded-full bg-[#5e9d73]" />
            </div>
            <div className="rounded-md border border-ink/10 bg-paper px-3 py-1 text-xs text-graphite">
              Risikoanalyse lokal
            </div>
          </div>
          <div className="grid min-h-[470px] grid-cols-[145px_1fr] sm:grid-cols-[190px_1fr]">
            <aside className="border-r border-ink/10 bg-[#ebe4d9] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite">
                Projekte
              </p>
              <div className="mt-5 space-y-2">
                {["Kosten", "Termine", "Szenarien", "Berichte"].map((item, index) => (
                  <div
                    className={`rounded-md px-3 py-2 text-sm ${
                      index === 0 ? "bg-ink text-paper" : "text-graphite"
                    }`}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-ink/10 bg-white/55 p-3">
                <p className="text-xs font-semibold text-graphite">Simulation</p>
                <div className="mt-3 h-2 rounded-full bg-moss" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-ocean" />
              </div>
            </aside>
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                    Szenario
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">Baukosten 2026</h3>
                </div>
                <div className="rounded-md border border-ink/10 bg-white px-3 py-2 text-xs text-graphite">
                  P90: 4,82 Mio. €
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold">Ergebnisverteilung</span>
                    <span className="rounded-md bg-mist px-2 py-1 text-xs text-graphite">
                      10.000 Läufe
                    </span>
                  </div>
                  <div className="flex h-32 items-end gap-1.5">
                    {[22, 34, 48, 67, 86, 104, 91, 72, 54, 39, 25, 17].map(
                      (height, index) => (
                        <span
                          className="flex-1 rounded-t-sm bg-ocean"
                          style={{ height }}
                          key={`${height}-${index}`}
                        />
                      ),
                    )}
                  </div>
                </div>
                <div className="rounded-lg border border-ink/10 bg-white p-4">
                  <p className="text-sm font-semibold">Kennzahlen</p>
                  <div className="mt-4 space-y-3 text-sm text-graphite">
                    <Metric label="P50" value="4,31 Mio. €" />
                    <Metric label="P80" value="4,66 Mio. €" />
                    <Metric label="P95" value="5,08 Mio. €" />
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-ink/10 bg-white p-4">
                  <p className="text-sm font-semibold">Sensitivität</p>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded-full bg-ink/75" />
                    <div className="h-2 w-4/5 rounded-full bg-ocean" />
                    <div className="h-2 w-3/5 rounded-full bg-copper" />
                  </div>
                </div>
                <div className="rounded-lg border border-ink/10 bg-white p-4">
                  <p className="text-sm font-semibold">Export</p>
                  <div className="mt-4 rounded-md bg-ink px-3 py-2 font-mono text-xs text-paper">
                    risikoanalyse.json
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-ink/10 bg-[#111418] p-4 font-mono text-xs leading-6 text-[#dce8d8]">
                <span className="text-[#9ab7c1]">model</span> = {"{"}
                <br />
                &nbsp;&nbsp;scenario: "base-case",
                <br />
                &nbsp;&nbsp;runs: 10000,
                <br />
                &nbsp;&nbsp;storage: "local"
                <br />
                {"}"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span>{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

export default App;
