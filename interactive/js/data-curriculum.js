window.KI_CURRICULUM = {
  rtdBaseUrl: "https://ki-schulung.readthedocs.io/de/latest/",
  tracks: {
    A: {
      id: "A",
      name: "Track A: Praxis-Basis (Alle, ohne Code-Tiefe)",
      description:
        "Fokus auf verständliche Konzepte, sofort einsetzbare Prompt-Vorlagen, visuelle Prototypen und sichere Qualitätskontrolle ohne Programmier-Voraussetzungen."
    },
    B: {
      id: "B",
      name: "Track B: Technischer Ausblick (Git, Python, Tests & CI/CD)",
      description:
        "Erweitert jedes Modul um Git-Workflows, strukturierte JSON-Outputs, Python-Automatisierung mit Unit-Tests sowie GitHub Actions & Read the Docs Pipelines."
    }
  },
  modules: [
    {
      id: "M1",
      title: "Modul 1 (Woche 1): Grundlagen der Generativen KI & Gemini",
      duration: "ca. 3 Std.",
      rtdPath: "module/01-grundlagen-ki-gemini/",
      lessons: [
        {
          id: "L01",
          title: "Wie LLMs arbeiten: Token, Kontextfenster & Wahrscheinlichkeiten",
          minutes: 45,
          goal: "Verstehen, dass Sprachmodelle Text anhand von Wahrscheinlichkeiten fortsetzen und keine Faktendatenbank sind.",
          trackA: "Teste im Token-Visualizer (Lab B), wie ein deutscher Absatz in Wortbausteine zerlegt wird.",
          trackB: "Vergleiche Token-Dichte zwischen deutschem Fließtext und strukturiertem YAML/JSON.",
          rtdPath: "module/01-grundlagen-ki-gemini/"
        },
        {
          id: "L02",
          title: "Gemini Flash vs. Pro & Multimodale Eingaben",
          minutes: 45,
          goal: "Zwischen schnellen Modellen (Flash) und tiefen Denkmodellen (Pro) wählen sowie PDFs, Bilder und Text kombinieren.",
          trackA: "Fasse beispiel-richtlinie.md für Management und neue Mitarbeitende unterschiedlich zusammen.",
          trackB: "Fordere ein valides JSON-Schema aus beispiel-richtlinie.md mit Flash und Pro im Vergleich an.",
          rtdPath: "module/01-grundlagen-ki-gemini/uebung/"
        },
        {
          id: "L03",
          title: "Halluzinationen erkennen & Faktencheck-Routinen",
          minutes: 45,
          goal: "Typische Halluzinationsmuster aufdecken und Antworten gezielt auf belegbare Quellen begrenzen.",
          trackA: "Stelle eine Fangfrage zum nicht bezifferten Bürostuhl-Budget in beispiel-richtlinie.md.",
          trackB: "Definiere strikte Fallback-Regeln ([NICHT_IM_TEXT]) für strukturierte Extraktionen.",
          rtdPath: "module/01-grundlagen-ki-gemini/uebung/"
        },
        {
          id: "L04",
          title: "Datenschutz, Secrets & verantwortungsvoller KI-Einsatz",
          minutes: 45,
          goal: "Sensible Daten (Passwörter, API-Keys, Personendaten) konsequent aus Prompts heraushalten.",
          trackA: "Nutze die Best-Practices-Checkliste vor der Eingabe interner Dokumente.",
          trackB: "Prüfe im Prompt-Builder (Lab A) die automatische Erkennung von Secret- und E-Mail-Mustern.",
          rtdPath: "vorlagen/best-practices-checkliste/"
        }
      ]
    },
    {
      id: "M2",
      title: "Modul 2 (Woche 2): Prompt Engineering & Strukturierte Zusammenarbeit",
      duration: "ca. 3 Std.",
      rtdPath: "module/02-prompt-engineering/",
      lessons: [
        {
          id: "L05",
          title: "Die 5 Bausteine eines starken Prompts",
          minutes: 45,
          goal: "Rolle, Kontext, Aufgabe, Format und Einschränkungen sauber trennen und formulieren.",
          trackA: "Baue deinen ersten Meeting-Prompt im Prompt-Builder (Lab A) auf Score >= 85.",
          trackB: "Erstelle wiederverwendbare Markdown-Templates mit Platzhaltern in Git.",
          rtdPath: "module/02-prompt-engineering/"
        },
        {
          id: "L06",
          title: "Few-Shot Prompting & schrittweises Zerlegen",
          minutes: 45,
          goal: "Mit 1–2 konkreten Beispielen den gewünschten Stil und das Ausgabeformat stabilisieren.",
          trackA: "Gib zwei kurze Beispielzeilen vor, um Status-Updates einheitlich zu formatieren.",
          trackB: "Teste Few-Shot-Beispiele gegen zwei Randfälle (sehr kurz vs. unstrukturiert).",
          rtdPath: "module/02-prompt-engineering/uebung/"
        },
        {
          id: "L07",
          title: "Iteratives Verfeinern & Kritiker-Rolle",
          minutes: 45,
          goal: "In 3 kurzen Runden (Entwurf -> Kritik -> Feinschliff) deutlich bessere Ergebnisse erzielen.",
          trackA: "Nutze den Kritiker-Prompt aus Modul 2, um 5 Risiken eines Konzeptentwurfs aufzudecken.",
          trackB: "Automatisiere eine zweistufige Review-Checkliste als wiederholbaren Prompt.",
          rtdPath: "module/02-prompt-engineering/uebung/"
        },
        {
          id: "L08",
          title: "Strukturierte Ausgaben: Tabellen, Checklisten & Mermaid",
          minutes: 45,
          goal: "Ergebnisse direkt in weiterverwendbaren Formaten statt reiner Textwände anfordern.",
          trackA: "Wandle Stichpunkte in eine Tabelle (Aufgabe | Verantwortlich | Frist) mit [OFFEN]-Markern um.",
          trackB: "Generiere Mermaid-Ablaufdiagramme und validiere die Syntax im MkDocs-Kontext.",
          rtdPath: "vorlagen/prompt-template/"
        }
      ]
    },
    {
      id: "M3",
      title: "Modul 3 (Woche 3): Agentisches Arbeiten mit Antigravity",
      duration: "ca. 3–4 Std.",
      rtdPath: "module/03-antigravity-einstieg/",
      lessons: [
        {
          id: "L09",
          title: "Chatbot vs. KI-Agent: Planen, Handeln, Prüfen",
          minutes: 45,
          goal: "Verstehen, warum Antigravity nicht nur textet, sondern Dateien bearbeitet, Befehle ausführt und Fehler selbst prüft.",
          trackA: "Vergleiche im Agent-Simulator (Lab C) einen Chat-Entwurf mit einem mehrstufigen Agent-Run.",
          trackB: "Analysiere den Werkzeug-Zyklus: Read -> Plan -> Edit -> Verify via Terminal.",
          rtdPath: "module/03-antigravity-einstieg/"
        },
        {
          id: "L10",
          title: "Antigravity-Arbeitsumgebung: Workspaces, Artefakte & Terminal",
          minutes: 45,
          goal: "Das Zusammenspiel aus Projektdateien, Artefakten (Pläne/Vorschauen) und Terminal-Checks überblicken.",
          trackA: "Erkunde die Struktur des Repositories ki-schulung und öffne erste Modul-Leitfäden.",
          trackB: "Prüfe Git-Status, Branch-Zustand und lokale Test-Runner direkt im Workspace.",
          rtdPath: "module/03-antigravity-einstieg/"
        },
        {
          id: "L11",
          title: "Effektive Agenten-Briefings mit Akzeptanzkriterien",
          minutes: 45,
          goal: "Klare Ziele, Dateipfade und überprüfbare Abnahmekriterien statt kleinteiligem Mikromanagement formulieren.",
          trackA: "Erstelle eine eigene Wissensseite mit max. 300 Wörtern und Mermaid-Diagramm als Briefing.",
          trackB: "Lege die Änderungen auf einem Feature-Branch an und prüfe das Git-Diff.",
          rtdPath: "module/03-antigravity-einstieg/uebung/"
        },
        {
          id: "L12",
          title: "Human-in-the-Loop: Diffs & Ergebnisse kritisch prüfen",
          minutes: 45,
          goal: "Keine Änderungen blind übernehmen, sondern Scope, Korrektheit und Nebenwirkungen gezielt reviewen.",
          trackA: "Übe eine gezielte Korrekturschleife: Kürze einen Abschnitt und ergänze ein Praxisbeispiel.",
          trackB: "Nutze die 4-Punkte-Review-Checkliste und verifiziere alle Links per Skript.",
          rtdPath: "module/03-antigravity-einstieg/uebung/"
        }
      ]
    },
    {
      id: "M4",
      title: "Modul 4 (Woche 4): Praxis-Workflows, Automatisierung & Multimodalität",
      duration: "ca. 3–4 Std.",
      rtdPath: "module/04-praxis-workflows/",
      lessons: [
        {
          id: "L13",
          title: "Wissensarbeit: Entscheidungsmatrizen & Prozessdiagramme",
          minutes: 45,
          goal: "Komplexe Optionen strukturiert bewerten und Prozesse visuell mit Mermaid dokumentieren.",
          trackA: "Erstelle eine gewichtete Entscheidungsmatrix für ein eigenes Team-Vorhaben.",
          trackB: "Integriere Diagramme sauber in Markdown-Dokumente ohne HTML-Sonderzeichenfehler.",
          rtdPath: "module/04-praxis-workflows/"
        },
        {
          id: "L14",
          title: "Datenaufbereitung & Auswertung (CSV/JSON) mit Kontrolle",
          minutes: 45,
          goal: "Wiederkehrende Tabellenauswertungen mit Antigravity automatisieren und per Stichprobe gegenrechnen.",
          trackA: "Lasse beispiel-daten.csv auswerten und rechne Modul 1 manuell gegen.",
          trackB: "Studiere auswertung_beispiel.py (ohne externe Abhängigkeiten) und erweitere um den Median.",
          rtdPath: "module/04-praxis-workflows/uebung/"
        },
        {
          id: "L15",
          title: "Interaktive HTML-Prototypen & Multimodale Eingaben",
          minutes: 45,
          goal: "Screenshots, Skizzen oder Daten in einzelne, sofort nutzbare HTML-Werkzeuge übersetzen.",
          trackA: "Generiere ein kompaktes Feedback-Dashboard als eigenständige HTML-Datei.",
          trackB: "Achte auf XSS-sicheres DOM-Rendering (escapeHtml) und saubere Responsivität.",
          rtdPath: "module/04-praxis-workflows/"
        },
        {
          id: "L16",
          title: "Qualitätssicherung: Plausibilitätschecks & Unit-Tests",
          minutes: 45,
          goal: "Ergebnisse durch automatisierte Smoke- oder Unit-Tests langfristig absichern.",
          trackA: "Prüfe Ausgaben systematisch auf leere Zeilen, Summen und Einheiten.",
          trackB: "Führe python3 -m unittest für test_auswertung_beispiel.py aus und ergänze einen Testfall.",
          rtdPath: "module/04-praxis-workflows/uebung/"
        }
      ]
    },
    {
      id: "M5",
      title: "Modul 5 (Woche 5): CI/CD für Dokumentation (GH Actions, GH Pages & Read the Docs)",
      duration: "ca. 4 Std.",
      rtdPath: "module/05-cicd-docs-ghpages-readthedocs/",
      lessons: [
        {
          id: "L17",
          title: "Docs-as-Code & Unterschied zwischen CI und CD",
          minutes: 45,
          goal: "Verstehen, warum Dokumentation wie Code versioniert, automatisch geprüft (CI) und veröffentlicht (CD) wird.",
          trackA: "Ordne Build-Checks, Link-Checks und automatisches Hosting in der Pipeline-Kette ein.",
          trackB: "Vergleiche Plain HTML, MkDocs, Sphinx und Docusaurus tool-agnostisch.",
          rtdPath: "module/05-cicd-docs-ghpages-readthedocs/"
        },
        {
          id: "L18",
          title: "GitHub Actions lesen: Trigger, Permissions, Jobs & Artefakte",
          minutes: 45,
          goal: "Den Aufbau einer Workflow-YAML sicher verstehen und minimale Berechtigungen (pages: write, id-token: write) erkennen.",
          trackA: "Lasse dir github-actions-pages.yml Schritt für Schritt im CI/CD-Generator (Lab E) erklären.",
          trackB: "Konfiguriere concurrency und workflow_dispatch für sichere Deployments.",
          rtdPath: "examples/ci-cd-docs/"
        },
        {
          id: "L19",
          title: "GitHub Pages vs. Read the Docs: Vergleich & Dual-Publishing",
          minutes: 45,
          goal: "Die Stärken beider Plattformen (flexibles Web-Hosting vs. versionierte Doku & PR-Previews) gezielt kombinieren.",
          trackA: "Erkläre, warum unser Lernstudio auf GitHub Pages und das Handbuch auf Read the Docs läuft.",
          trackB: "Analysiere .readthedocs.yaml (v2) mit $READTHEDOCS_OUTPUT/html und optionalem API-Trigger.",
          rtdPath: "module/05-cicd-docs-ghpages-readthedocs/"
        },
        {
          id: "L20",
          title: "CI/CD-Debugging mit Antigravity (Fehlerübung)",
          minutes: 45,
          goal: "Typische YAML- und Pipeline-Fehler (falscher Branch, fehlende Permissions, falscher Artefakt-Pfad) schnell finden.",
          trackA: "Analysiere fehler-uebung-pages.yml und prüfe alle 3 Fehler gegen loesung-fehler-uebung.md.",
          trackB: "Aktiviere PR-Link-Checks (lychee) und teste den Build lokal mit mkdocs build --strict.",
          rtdPath: "module/05-cicd-docs-ghpages-readthedocs/uebung/"
        }
      ]
    },
    {
      id: "M6",
      title: "Modul 6 (Woche 6): Fortgeschrittene Agenten-Techniken & Abschlussprojekt",
      duration: "ca. 4 Std.",
      rtdPath: "module/06-fortgeschrittene-agenten-abschlussprojekt/",
      lessons: [
        {
          id: "L21",
          title: "Kontext-Management: READMEs & Konventionen als Agenten-Gedächtnis",
          minutes: 45,
          goal: "Repositories so strukturieren, dass KI-Agenten konsistent und ohne Rückfragen arbeiten können.",
          trackA: "Prüfe deine Projekt-README auf Zielgruppe, Struktur und klare Einstiegslinks.",
          trackB: "Hinterlege verbindliche Build- und Testbefehle sowie Qualitätsregeln im Repository.",
          rtdPath: "module/06-fortgeschrittene-agenten-abschlussprojekt/"
        },
        {
          id: "L22",
          title: "Strukturierte Planung & Klärung vor der Umsetzung",
          minutes: 45,
          goal: "Offene Designfragen vor dem ersten Edit klären (/grill-me, /plan) und Akzeptanzkriterien festlegen.",
          trackA: "Fülle den Abschlussprojekt-Steckbrief (abschlussprojekt-vorlage.md) vollständig aus.",
          trackB: "Zerlege dein Capstone-Vorhaben in überprüfbare Phasen mit Quality Gates.",
          rtdPath: "vorlagen/abschlussprojekt-vorlage/"
        },
        {
          id: "L23",
          title: "Wiederverwendbare Skills & Arbeitsteilung mit Subagenten",
          minutes: 45,
          goal: "Wissen, wann Standards als Skills festgehalten und Recherche, Umsetzung & Prüfung getrennt werden.",
          trackA: "Definiere eine eigene 5-Punkte-Routine für wiederkehrende Teamaufgaben.",
          trackB: "Verstehe die Trennung von Read-Only-Recherche, Implementierung und Review-Checks.",
          rtdPath: "module/06-fortgeschrittene-agenten-abschlussprojekt/"
        },
        {
          id: "L24",
          title: "Capstone-Umsetzung, Qualitätscheck & Transfer in den Alltag",
          minutes: 45,
          goal: "Das eigene Abschlussprojekt abschließen, gegen Akzeptanzkriterien prüfen und kurz präsentieren.",
          trackA: "Prüfe dein Projekt mit best-practices-checkliste.md und halte deine Alltagserkenntnisse fest.",
          trackB: "Veröffentliche dein Ergebnis per GitHub Pages / Read the Docs inkl. grünem CI-Check.",
          rtdPath: "module/06-fortgeschrittene-agenten-abschlussprojekt/uebung/"
        }
      ]
    }
  ]
};
