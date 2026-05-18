import {
  ArrowDown,
  BadgeCheck,
  Boxes,
  Braces,
  Check,
  ChevronRight,
  CloudOff,
  Code2,
  Database,
  FileJson,
  FolderKanban,
  Heart,
  KeyRound,
  Laptop,
  Lock,
  NotebookText,
  Search,
  Sparkles,
  Tags,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: NotebookText,
    title: "Prompts verwalten",
    text: "Sammeln, sortieren und wiederverwenden statt in Chatverläufen zu suchen.",
  },
  {
    icon: Code2,
    title: "Code-Snippets speichern",
    text: "Bewährte Bausteine mit Kontext, Sprache, Tags und Notizen ablegen.",
  },
  {
    icon: Workflow,
    title: "Workflows dokumentieren",
    text: "Einfache KI-Abläufe und wiederkehrende Arbeitsschritte nachvollziehbar machen.",
  },
  {
    icon: FolderKanban,
    title: "Notizen organisieren",
    text: "Ideen, Entscheidungen und Projekthinweise an einem lokalen Ort bündeln.",
  },
  {
    icon: Tags,
    title: "Tags und Kategorien",
    text: "Inhalte schnell wiederfinden, filtern und sauber voneinander trennen.",
  },
  {
    icon: Heart,
    title: "Favoriten",
    text: "Die wichtigsten Vorlagen und Snippets bleiben sofort griffbereit.",
  },
  {
    icon: Database,
    title: "Lokale Speicherung",
    text: "SQLite-Datenbank auf dem eigenen Rechner, ohne Cloud-Abhängigkeit.",
  },
  {
    icon: FileJson,
    title: "JSON Export/Import",
    text: "Daten portabel sichern, übertragen oder später wiederherstellen.",
  },
  {
    icon: Sparkles,
    title: "KI-Metadaten",
    text: "Titel, Beschreibungen und Metadaten schneller strukturieren.",
  },
  {
    icon: Braces,
    title: "Live-Preview",
    text: "HTML, CSS, JavaScript und Markdown direkt prüfen und iterieren.",
  },
];

const audiences = [
  "Entwickler",
  "KI-Nutzer",
  "Content-Ersteller",
  "Selbstständige",
  "kleine Teams ohne Cloud-Zwang",
  "Menschen, die Prompts und Snippets wiederverwenden möchten",
];

const faqs = [
  {
    question: "Läuft die App lokal?",
    answer:
      "Ja. SMART RISK Monte-Carlo-Simulation ist als lokale Desktop-App gedacht und arbeitet direkt auf dem Rechner.",
  },
  {
    question: "Werden Daten in der Cloud gespeichert?",
    answer:
      "Nein. Die Inhalte werden lokal gespeichert. Es gibt keine Cloud-Synchronisierung und kein verpflichtendes Team-System.",
  },
  {
    question: "Gibt es eine Windows-Version?",
    answer:
      "Die Landingpage kann eine Windows-Version ausweisen, sobald das Release-Paket bereitsteht. Der Abschnitt ist bereits neutral dafür formuliert.",
  },
  {
    question: "Wie funktioniert die Lizenz?",
    answer:
      "Die App wird als kostenpflichtige Jahreslizenz angeboten. Die Laufzeit beträgt 12 Monate und verlängert sich automatisch um weitere 12 Monate.",
  },
  {
    question: "Kann ich Daten exportieren?",
    answer:
      "Ja. Über JSON Export und Import bleiben Inhalte portabel und können gesichert oder übertragen werden.",
  },
  {
    question: "Gibt es KI-Funktionen?",
    answer:
      "Ja. Die App unterstützt bei Titeln und Metadaten, damit Inhalte schneller sauber beschrieben werden können.",
  },
  {
    question: "Brauche ich ein Nutzerkonto?",
    answer:
      "Für die lokale Nutzung ist kein klassisches Cloud-Konto vorgesehen. Der Kauf und die Zahlungsabwicklung laufen separat über den Lizenzprozess.",
  },
];

const checkoutUrl = "#license";

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
              Lokale Desktop-App fuer strukturierte KI-Arbeit
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              SMART RISK Monte-Carlo-Simulation
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
              Prompts, Code-Snippets, einfache KI-Workflows, Notizen und
              Vorlagen in einer schnellen, hochwertigen Desktop-App sammeln und
              jederzeit wiederverwenden.
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
              Gute KI-Arbeit entsteht nicht im Verlauf. Sie entsteht in einer
              gepflegten Bibliothek.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Prompts verschwinden in Chatfenstern, obwohl sie wiederkehrend wertvoll sind.",
              "Snippets liegen verstreut in Projekten, Notizen, Dokumenten und Browser-Tabs.",
              "Workflows werden verbessert, aber selten so dokumentiert, dass sie wiederholbar bleiben.",
              "Eine lokale Sammlung schafft Ordnung, Geschwindigkeit und mehr Kontrolle ueber eigene Arbeitsmuster.",
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
            Alles, was eine produktive Prompt- und Snippet-Bibliothek braucht.
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
              Kein komplexes SaaS-System. Kein Cloud-Zwang. Kein Umweg.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/72">
              SMART RISK speichert Inhalte lokal in SQLite auf dem eigenen
              Rechner. Die App ist fuer konzentrierte Einzelarbeit und kleine
              Teams gedacht, die bewusst ohne Cloud-Infrastruktur arbeiten
              moechten.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Database, label: "SQLite lokal auf dem Rechner" },
              { icon: CloudOff, label: "Keine Cloud-Speicherung" },
              { icon: Boxes, label: "Keine Team-Suite" },
              { icon: Laptop, label: "Schnelle Desktop-Nutzung" },
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
              Eine klare Jahreslizenz fuer professionelle Nutzung.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite">
              Der Kaufprozess kann spaeter direkt mit Lemon Squeezy verbunden
              werden. Die Zahlungsabwicklung erfolgt ueber Stripe.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-panel sm:p-8">
            <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-7 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-semibold">Jahreslizenz</h3>
                <p className="mt-2 text-graphite">12 Monate Nutzung</p>
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
                "Kostenpflichtige Jahreslizenz",
                "Laufzeit 12 Monate",
                "Automatische Verlaengerung um weitere 12 Monate",
                "Kuendigungsfrist: 1 Monat vor Ablauf",
                "Zahlungsabwicklung ueber Stripe",
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
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                Zielgruppe
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                Fuer Menschen, die ihre besten Arbeitsbausteine nicht verlieren
                wollen.
              </h2>
            </div>
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
              Lokale Bibliothek
            </div>
          </div>
          <div className="grid min-h-[470px] grid-cols-[145px_1fr] sm:grid-cols-[190px_1fr]">
            <aside className="border-r border-ink/10 bg-[#ebe4d9] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite">
                Sammlungen
              </p>
              <div className="mt-5 space-y-2">
                {["Prompts", "Snippets", "Workflows", "Notizen"].map((item, index) => (
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
                <p className="text-xs font-semibold text-graphite">SQLite</p>
                <div className="mt-3 h-2 rounded-full bg-moss" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-ocean" />
              </div>
            </aside>
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                    Favorit
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">Release-Check Prompt</h3>
                </div>
                <div className="rounded-md border border-ink/10 bg-white px-3 py-2 text-xs text-graphite">
                  #review #qa #desktop
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">Prompt</span>
                  <span className="rounded-md bg-mist px-2 py-1 text-xs text-graphite">
                    KI-Metadaten
                  </span>
                </div>
                <p className="leading-7 text-graphite">
                  Pruefe die Release-Notizen auf Klarheit, fehlende Risiken und
                  konkrete naechste Schritte.
                </p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-ink/10 bg-white p-4">
                  <p className="text-sm font-semibold">Live-Preview</p>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded-full bg-ink/75" />
                    <div className="h-2 w-4/5 rounded-full bg-ocean" />
                    <div className="h-2 w-3/5 rounded-full bg-copper" />
                  </div>
                </div>
                <div className="rounded-lg border border-ink/10 bg-white p-4">
                  <p className="text-sm font-semibold">Export</p>
                  <div className="mt-4 rounded-md bg-ink px-3 py-2 font-mono text-xs text-paper">
                    data.json
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-ink/10 bg-[#111418] p-4 font-mono text-xs leading-6 text-[#dce8d8]">
                <span className="text-[#9ab7c1]">const</span> snippet = {"{"}
                <br />
                &nbsp;&nbsp;type: "workflow",
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

export default App;
