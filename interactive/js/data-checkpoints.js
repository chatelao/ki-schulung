window.KI_CHECKPOINTS = {
  slots: [
    { id: "CP-0", label: "CP-0: Einstieg", subtitle: "Baseline vor Modul 1" },
    { id: "CP-1", label: "CP-1: Woche 2", subtitle: "Nach Modul 1 & 2 (Gemini + Prompting)" },
    { id: "CP-2", label: "CP-2: Woche 4", subtitle: "Nach Modul 3 & 4 (Antigravity + Praxis)" },
    { id: "CP-3", label: "CP-3: Abschluss", subtitle: "Nach Modul 5 & 6 (CI/CD + Capstone)" }
  ],
  domains: [
    { id: "M1", name: "M1: KI & Gemini Grundlagen" },
    { id: "M2", name: "M2: Prompt Engineering" },
    { id: "M3", name: "M3: Agentisches Arbeiten" },
    { id: "M4", name: "M4: Praxis & Qualitätssicherung" },
    { id: "M5", name: "M5: Docs-CI/CD (Pages & RTD)" },
    { id: "M6", name: "M6: Planung & Kontext-Design" }
  ],
  questions: [
    {
      id: "CPQ01",
      domain: "M1",
      prompt: "Warum können große Sprachmodelle (LLMs) überzeugend klingende, aber falsche Fakten („Halluzinationen“) erzeugen?",
      options: [
        "Weil sie Texte anhand von Wahrscheinlichkeiten vorhersagen statt Fakten in einer Datenbank nachzuschlagen.",
        "Weil ihr Speicherplatz nach 100 Wörtern voll ist und sie alte Sätze löschen.",
        "Weil sie nur englische Daten kennen und deutsche Wörter raten.",
        "Weil sie absichtlich veraltete Suchergebnisse ausgeben."
      ],
      correct: 0
    },
    {
      id: "CPQ02",
      domain: "M1",
      prompt: "Wann ist Gemini Pro gegenüber Gemini Flash typischerweise die bessere Wahl?",
      options: [
        "Bei komplexen, mehrstufigen Analysen, Architekturfragen oder kniffligem Debugging.",
        "Wenn nur ein einzelnes Wort übersetzt werden soll.",
        "Wenn man Passwörter sicher verschlüsseln möchte.",
        "Flash kann keine Bilder verarbeiten, nur Pro ist multimodal."
      ],
      correct: 0
    },
    {
      id: "CPQ03",
      domain: "M1",
      prompt: "Welche Angabe gehört NIEMALS ungeschützt in einen KI-Prompt?",
      options: [
        "Eine fiktive Beispiel-Richtlinie ohne Personendaten.",
        "Ein echter API-Token, ein Passwort oder vertrauliche personenbezogene Kundendaten.",
        "Eine gewünschte Tabellenstruktur mit Spaltennamen.",
        "Eine Fehlermeldung ohne Zugangsdaten."
      ],
      correct: 1
    },
    {
      id: "CPQ04",
      domain: "M2",
      prompt: "Welche 5 Bausteine bilden die vollständige Anatomie eines verlässlichen Prompts?",
      options: [
        "Rolle, Kontext, Aufgabe, Format, Einschränkungen",
        "Titel, Schriftart, Farbe, Dateigröße, Sprache",
        "Username, Passwort, Branch, Commit, Push",
        "Einleitung, Witz, Hauptteil, Fazit, Quellenliste"
      ],
      correct: 0
    },
    {
      id: "CPQ05",
      domain: "M2",
      prompt: "Was bewirkt „Few-Shot Prompting“?",
      options: [
        "Man gibt 1–2 konkrete Ein-/Ausgabe-Beispiele vor, um Stil und Struktur stabil zu steuern.",
        "Man beschränkt die Antwort auf maximal drei Wörter.",
        "Man schaltet das Kontextfenster komplett ab.",
        "Man lässt das Modell ohne Anweisung frei assoziieren."
      ],
      correct: 0
    },
    {
      id: "CPQ06",
      domain: "M2",
      prompt: "Wie nutzt man die „Kritiker-Rolle“ sinnvoll im Prompting?",
      options: [
        "Man bittet Gemini, einen eigenen Entwurf gezielt auf Lücken, Risiken und fehlende Annahmen zu prüfen.",
        "Man weist das Modell an, jede Anfrage grundsätzlich abzulehnen.",
        "Man verzichtet komplett auf eine menschliche Endkontrolle.",
        "Man löscht alle Einschränkungen aus dem Prompt."
      ],
      correct: 0
    },
    {
      id: "CPQ07",
      domain: "M3",
      prompt: "Was unterscheidet einen KI-Agenten (Antigravity) grundlegend von einem reinen Chatbot?",
      options: [
        "Ein Agent plant Schritte, liest/bearbeitet Dateien, führt Befehle/Tests aus und prüft Ergebnisse iterativ.",
        "Ein Agent antwortet immer nur mit Ja oder Nein.",
        "Ein Agent benötigt keine Ziele oder Akzeptanzkriterien.",
        "Ein Chatbot kann Code ausführen, ein Agent nur Text schreiben."
      ],
      correct: 0
    },
    {
      id: "CPQ08",
      domain: "M3",
      prompt: "Was bedeutet „Human-in-the-Loop“ bei der Arbeit mit Antigravity?",
      options: [
        "Der Mensch formuliert Ziele/Kriterien, prüft Diffs/Testergebnisse und gibt Feedback vor der Übernahme.",
        "Der Mensch tippt jeden Buchstaben des Codes selbst ab.",
        "Der Agent wartet nach jedem einzelnen Wort auf Bestätigung.",
        "Tests werden grundsätzlich deaktiviert."
      ],
      correct: 0
    },
    {
      id: "CPQ09",
      domain: "M4",
      prompt: "Warum sind kleine automatisierte Smoke- oder Unit-Tests (z. B. für ein CSV-Auswertungsskript) auch für Nicht-Entwickler wertvoll?",
      options: [
        "Sie prüfen reproduzierbar, ob Kennzahlen und Randfälle auch nach Änderungen noch stimmen.",
        "Sie ersetzen die Eingabedatei durch Zufallszahlen.",
        "Sie machen eine Plausibilitätsprüfung beim ersten Lauf überflüssig.",
        "Sie funktionieren nur auf GitHub Pages."
      ],
      correct: 0
    },
    {
      id: "CPQ10",
      domain: "M4",
      prompt: "Wofür eignet sich Mermaid in der Wissensarbeit besonders gut?",
      options: [
        "Um Ablauf-, Architektur- und Entscheidungsdiagramme direkt als wartbaren Text in Markdown zu pflegen.",
        "Um große CSV-Dateien im Browser zu komprimieren.",
        "Um API-Keys sicher zu speichern.",
        "Als Ersatz für GitHub Actions."
      ],
      correct: 0
    },
    {
      id: "CPQ11",
      domain: "M5",
      prompt: "Welchen Zweck erfüllen `pages: write` und `id-token: write` im `permissions`-Block eines GitHub-Pages-Workflows?",
      options: [
        "Sie erlauben `actions/deploy-pages`, das gebaute Artefakt sicher auf GitHub Pages zu veröffentlichen.",
        "Sie schalten Read the Docs automatisch ab.",
        "Sie geben jedem Internetnutzer Schreibrechte auf das Repository.",
        "Sie installieren Python 3.12 auf dem Runner."
      ],
      correct: 0
    },
    {
      id: "CPQ12",
      domain: "M5",
      prompt: "Welcher Vorteil spricht typischerweise für Read the Docs gegenüber reinem GitHub Pages?",
      options: [
        "Eingebaute Dokumentations-Versionierung (z. B. latest/stable), PR-Previews und Volltextsuche out-of-the-box.",
        "Read the Docs benötigt keine Konfigurationsdatei und kein Git-Repository.",
        "GitHub Pages kann kein HTML ausliefern.",
        "Read the Docs führt Python-Unit-Tests für Backend-APIs aus."
      ],
      correct: 0
    },
    {
      id: "CPQ13",
      domain: "M5",
      prompt: "In `.readthedocs.yaml` (Version 2) wird ein eigener Build-Befehl genutzt. Wohin muss das gebaute HTML geschrieben werden?",
      options: [
        "In `$READTHEDOCS_OUTPUT/html`",
        "In `/tmp/github-pages`",
        "In `node_modules/.cache`",
        "Direkt in `.git/hooks/`"
      ],
      correct: 0
    },
    {
      id: "CPQ14",
      domain: "M6",
      prompt: "Warum lohnt es sich bei größeren Vorhaben, vor der Umsetzung einen Planungs- oder Klärungs-Schritt (z. B. `/plan`, `/grill-me`) vorzuschalten?",
      options: [
        "Weil offene Designfragen und Akzeptanzkriterien geklärt werden, bevor viele Dateien geändert werden.",
        "Weil Agenten danach keine Tests mehr ausführen müssen.",
        "Weil dadurch die README.md überflüssig wird.",
        "Weil GitHub Actions sonst nicht startet."
      ],
      correct: 0
    },
    {
      id: "CPQ15",
      domain: "M6",
      prompt: "Was gehört in ein gutes Projekt-Kontext-Fundament (`README.md` / Konventionen) für KI-Agenten?",
      options: [
        "Projektziel, Ordnerstruktur, Zielgruppe, Build-/Testbefehle und Qualitätsstandards.",
        "Persönliche Passwörter der Projektmitglieder.",
        "Eine unsortierte Liste aller jemals gelöschten Dateien.",
        "Ausschließlich ein großes Bild ohne Alternativtext."
      ],
      correct: 0
    }
  ],
  rubrics: [
    {
      id: "CPR1",
      title: "Praxis-Szenario 1: Strukturierter Prompt (M2)",
      prompt: "Formuliere einen kurzen Prompt (Rolle, Kontext, Aufgabe, Format, Einschränkung), um aus einer unstrukturierten E-Mail eine Aufgabenliste zu erstellen.",
      criteria: "Alle 5 Bausteine vorhanden + explizite Regel gegen das Erfinden fehlender Fristen/Namen."
    },
    {
      id: "CPR2",
      title: "Praxis-Szenario 2: Agenten-Briefing (M3)",
      prompt: "Schreibe ein kurzes Briefing für Antigravity, um eine `README.md` inkl. Qualitätsprüfung zu erstellen.",
      criteria: "Klares Ziel, Dateipfad, mindestens 2 überprüfbare Akzeptanzkriterien."
    },
    {
      id: "CPR3",
      title: "Praxis-Szenario 3: Docs-CI/CD-Diagnose (M5)",
      prompt: "Ein GitHub-Pages-Build läuft grün, aber `deploy-pages` schlägt mit Berechtigungsfehler fehl oder findet keine Dateien. Was prüfst du zuerst?",
      criteria: "Prüfung von `permissions` (`pages: write`, `id-token: write`) und Übereinstimmung von Build-Ordner und `upload-pages-artifact` `path`."
    }
  ]
};
