window.KI_LABS = {
  promptPresets: {
    meeting: {
      role: "Du bist eine strukturierte Projektassistenz.",
      context: "Unten stehen rohe Stichpunkte aus unserem wöchentlichen Team-Sync.",
      task: "Extrahiere getroffene Entscheidungen, konkrete Aufgaben und offene Fragen.",
      format: "1. Entscheidungen (max. 3 Bullet-Points)\n2. Markdown-Tabelle: Aufgabe | Verantwortlich | Frist\n3. Offene Fragen",
      constraints: "Erfinde keine Namen oder Fristen. Markiere fehlende Angaben mit [OFFEN]."
    },
    policy: {
      role: "Du bist ein kritischer Compliance- und HR-Reviewer.",
      context: "Dir liegt unsere interne Richtlinie zu mobilem Arbeiten und Dienstreisen vor.",
      task: "Prüfe den Text auf Widersprüche, fehlende Grenzwerte und unklare Ausnahmen.",
      format: "Markdown-Tabelle (Abschnitt | Befund | Konkrete Rückfrage)",
      constraints: "Antworte ausschließlich auf Basis des bereitgestellten Textes. Wenn etwas fehlt, schreibe [NICHT_IM_TEXT]."
    },
    review: {
      role: "Du bist ein skeptisches, erfahrenes Teammitglied (Advocatus Diaboli).",
      context: "Wir planen die Einführung eines neuen KI-Workflows für unser 12-köpfiges Team.",
      task: "Nenne die 3 stärksten Punkte und maximal 5 konkrete Risiken oder blinde Flecken des Entwurfs.",
      format: "Nummerierte Liste mit je einem kurzen Verbesserungsvorschlag pro Risiko.",
      constraints: "Bleibe konstruktiv, konkret und vermeide allgemeine Floskeln."
    }
  },
  tokenPresets: {
    richtlinie:
      "Mitarbeitende können bis zu 3 Tage pro Woche mobil arbeiten. Die Kernarbeitszeit liegt zwischen 10:00 und 15:00 Uhr. Mobiles Arbeiten aus dem Ausland (Workation) bedarf mindestens 4 Wochen vorher der schriftlichen Genehmigung.",
    yaml:
      "name: Build and Deploy Docs\non:\n  push:\n    branches: [\"main\"]\npermissions:\n  contents: read\n  pages: write\n  id-token: write",
    prompt:
      "Rolle: Technischer Redakteur. Aufgabe: Fasse Modul 5 für Einsteiger zusammen. Format: 3 Bullet-Points + Mermaid-Diagramm. Einschränkung: Maximal 120 Wörter."
  },
  agentPresets: {
    docs: {
      goal: "Erstelle unter docs/onboarding.md eine kompakte Einsteiger-Übersicht für neue Teammitglieder.",
      criteria: "- Checkliste für Tag 1, Woche 1, Monat 1\n- Ein einfaches Mermaid-Ablaufdiagramm\n- Keine Platzhalter-Passwörter oder defekte Links",
      steps: [
        "[PLAN] Ziel analysiert: docs/onboarding.md für Einsteiger anlegen.",
        "[READ] Prüfe README.md und vorhandene Ordnerstruktur im Workspace.",
        "[EDIT] Erstelle docs/onboarding.md (Tag-1/Woche-1/Monat-1 Checkliste + Mermaid flowchart).",
        "[DIFF] +42 Zeilen in docs/onboarding.md (keine bestehenden Dateien überschrieben).",
        "[VERIFY] Link-Check und Markdown-Strukturprüfung: 0 Fehler."
      ]
    },
    csv: {
      goal: "Werte module/04-praxis-workflows/material/beispiel-daten.csv aus und ergänze einen Unit-Test.",
      criteria: "- Durchschnitt pro Modul und gesamt berechnen\n- Modul 1 rechnerisch gegenprüfen\n- Unit-Test läuft mit Exit-Code 0",
      steps: [
        "[PLAN] CSV-Spalten prüfen, Auswertungsfunktion und unittest-Fall definieren.",
        "[READ] Lese beispiel-daten.csv (12 Einträge, 4 Module).",
        "[EDIT] Aktualisiere auswertung_beispiel.py und test_auswertung_beispiel.py.",
        "[RUN] python3 -m unittest discover -s module/04-praxis-workflows/material -p \"test_*.py\" -v",
        "[VERIFY] Ran 1 test in 0.001s -> OK (Modul 1: 4.67 / 5, Gesamt: 4.42 / 5)."
      ]
    },
    cicd: {
      goal: "Analysiere fehler-uebung-pages.yml und behebe die 3 Fehler für GitHub Pages.",
      criteria: "- Trigger zeigt auf main\n- Permissions enthalten pages: write und id-token: write\n- upload-pages-artifact path passt zu _site",
      steps: [
        "[PLAN] Workflow-YAML auf Trigger, Permissions und Artefakt-Pfade prüfen.",
        "[READ] Lese module/05-cicd-docs-ghpages-readthedocs/material/fehler-uebung-pages.yml.",
        "[DIAGNOSE] 3 Fehler gefunden: branches=['master-nicht-vorhanden'], fehlende pages/id-token permissions, path='build_output_falsch'.",
        "[DIFF] Korrigiere branches -> ['main'], ergänze permissions, setze path -> '_site'.",
        "[VERIFY] YAML-Syntax & Dry-Check gegen GitHub Pages Vorgaben: bestanden."
      ]
    }
  },
  reviewerDrills: [
    {
      id: "R01",
      category: "hallucination",
      title: "Richtlinien-Budget (Modul 1)",
      snippet: "Prompt: Wie hoch ist das Budget für ergonomische Bürostühle?\nAntwort: Laut Abschnitt 2 beträgt das Budget 500 EUR pro Mitarbeitendem.",
      expected: "risk",
      explanation: "Halluzination: In beispiel-richtlinie.md steht ausdrücklich, dass kein konkretes Budget beziffert ist."
    },
    {
      id: "R02",
      category: "hallucination",
      title: "Reisekosten-Frist (Modul 1)",
      snippet: "Prompt: Bis wann müssen Reisekosten eingereicht werden?\nAntwort: Innerhalb von 30 Tagen nach Reiseende (Abschnitt 3).",
      expected: "ok",
      explanation: "Korrekt und direkt durch Abschnitt 3 der Richtlinie belegt."
    },
    {
      id: "R03",
      category: "hallucination",
      title: "Hotel-Richtwert Großstadt",
      snippet: "Antwort: In Großstädten wie München oder Berlin gilt ein Hotel-Richtwert von 170 EUR pro Nacht inkl. Frühstück.",
      expected: "ok",
      explanation: "Korrekt: Abschnitt 3 nennt 140 EUR Standard und 170 EUR für Großstädte."
    },
    {
      id: "R04",
      category: "hallucination",
      title: "Erfundene Quelle im Report",
      snippet: "Gemini-Output: 'Gemäß DIN-ISO 99999-KI (2025) müssen alle Prompts 42 Wörter lang sein.'",
      expected: "risk",
      explanation: "Halluzinations-Warnsignal: Erfundene Normnummer und pauschale Behauptung — immer gegen Primärquelle prüfen."
    },
    {
      id: "R05",
      category: "hallucination",
      title: "Saubere Unsicherheits-Markierung",
      snippet: "Tabelle: | Meeting-Raum buchen | [OFFEN] | Freitag 14:00 |",
      expected: "ok",
      explanation: "Vorbildlich: Fehlende Zuständigkeit wird als [OFFEN] markiert statt erraten."
    },
    {
      id: "R06",
      category: "hallucination",
      title: "Widerspruch im Onboarding",
      snippet: "Hinweis: Abschnitt 1 erlaubt 3 Tage Home-Office, während der Onboarding-Kalender 3 Monate Präsenz empfiehlt.",
      expected: "ok",
      explanation: "Korrekte Analyse des bewusst eingebauten Widerspruchs in beispiel-richtlinie.md."
    },
    {
      id: "R07",
      category: "privacy",
      title: "API-Key im Debug-Prompt",
      snippet: "Prompt: 'Warum schlägt mein Skript fehl? Hier ist mein Token: ghp_9xK2mP7qR4tV8wZ1aB3cD5eF6gH7jK8lM9nO'",
      expected: "risk",
      explanation: "Datenschutz-/Sicherheitsrisiko: Echte Tokens und API-Keys dürfen niemals in Prompts kopiert werden."
    },
    {
      id: "R08",
      category: "privacy",
      title: "Anonymisierte CSV-Struktur",
      snippet: "Prompt: 'Werte diese anonymisierte CSV aus (Spalten: modul, teilnehmer_id=T01, bewertung_1_bis_5, zeitaufwand_min).'",
      expected: "ok",
      explanation: "Sicher: Pseudonymisierte IDs (T01) ohne Klarnamen, E-Mails oder vertrauliche Daten."
    },
    {
      id: "R09",
      category: "privacy",
      title: "Kundendaten im öffentlichen Chat",
      snippet: "Prompt: 'Formuliere eine Mahnung an Max Mustermann, IBAN DE89370400440532013000, Rechnungsbetrag 4.200 EUR.'",
      expected: "risk",
      explanation: "Datenschutzrisiko: Personenbezogene Daten und Bankverbindungsdaten vor der Eingabe mit Platzhaltern ([KUNDE], [IBAN]) anonymisieren."
    },
    {
      id: "R10",
      category: "privacy",
      title: "Platzhalter-Prompt",
      snippet: "Prompt: 'Schreibe eine freundliche Zahlungserinnerung an [KUNDE_NAME] über [BETRAG] mit Frist [DATUM].'",
      expected: "ok",
      explanation: "Sicher und wiederverwendbar: Platzhalter schützen reale Personendaten."
    },
    {
      id: "R11",
      category: "privacy",
      title: "Passwort in .env mitgepostet",
      snippet: "Prompt: 'Prüfe meine Konfiguration: DB_PASS=Sommer2026! ADMIN_SECRET=prod-9912'",
      expected: "risk",
      explanation: "Kritisches Risiko: Zugangsdaten und Secrets vor dem Teilen immer durch <REDACTED> ersetzen."
    },
    {
      id: "R12",
      category: "privacy",
      title: "Fehlermeldung ohne Secrets",
      snippet: "Prompt: 'Ich bekomme HTTP 403 bei actions/deploy-pages. Hier ist der bereinigte Workflow-Header.'",
      expected: "ok",
      explanation: "Sicher: Technische Fehlermeldungen ohne Tokens oder interne Host-Secrets sind unbedenklich."
    },
    {
      id: "R13",
      category: "agent",
      title: "Agent löscht ungefragt Dateien",
      snippet: "Diff: - README.md (gelöscht), - lernplan.md (gelöscht), + neu.md",
      expected: "risk",
      explanation: "Unzulässige Nebenwirkung: Im Review sofort stoppen, wenn bestehende Dateien außerhalb des Auftrags gelöscht wurden."
    },
    {
      id: "R14",
      category: "agent",
      title: "Test-Ergebnis verifiziert",
      snippet: "Terminal: python3 -m unittest discover ... -> Ran 1 test in 0.001s -> OK",
      expected: "ok",
      explanation: "Gutes Zeichen: Der Agent hat die Änderung durch einen echten Testlauf verifiziert."
    },
    {
      id: "R15",
      category: "agent",
      title: "Division durch Null nicht abgefangen",
      snippet: "Python: durchschnitt = sum(werte) / len(werte)  # ohne Prüfung auf len(werte) == 0",
      expected: "error",
      explanation: "Logik-/Laufzeitfehler bei leerer Eingabe: Führt zu ZeroDivisionError, wenn keine Einträge vorhanden sind."
    },
    {
      id: "R16",
      category: "agent",
      title: "XSS-sicheres DOM-Rendering",
      snippet: "JS: el.textContent = userInput; // statt innerHTML",
      expected: "ok",
      explanation: "Sicher: textContent (oder konsequentes escapeHtml) verhindert HTML-Injection im Browser."
    },
    {
      id: "R17",
      category: "agent",
      title: "Ungeprüftes innerHTML mit Nutzereingabe",
      snippet: "JS: container.innerHTML = '<div>' + userPromptText + '</div>';",
      expected: "risk",
      explanation: "Sicherheitsrisiko (XSS): Unmaskierte Nutzereingaben in innerHTML können Skripte ausführen."
    },
    {
      id: "R18",
      category: "agent",
      title: "Sauberes Briefing mit Abnahmekriterien",
      snippet: "Briefing: 'Aktualisiere README.md, prüfe alle internen Links per Skript und committe erst nach erfolgreichem Check.'",
      expected: "ok",
      explanation: "Klares Ziel, definierter Scope und überprüfbares Akzeptanzkriterium."
    },
    {
      id: "R19",
      category: "cicd",
      title: "Fehlende Pages-Permissions",
      snippet: "permissions:\n  contents: read\n# pages: write und id-token: write fehlen\nsteps:\n  - uses: actions/deploy-pages@v4",
      expected: "error",
      explanation: "Pipeline-Fehler (Fehler 2 aus Modul 5): Ohne pages: write und id-token: write schlägt deploy-pages fehl."
    },
    {
      id: "R20",
      category: "cicd",
      title: "Falscher Artefakt-Pfad",
      snippet: "run: mkdocs build -d _site\n...\nuses: actions/upload-pages-artifact@v3\nwith:\n  path: \"build_output_falsch\"",
      expected: "error",
      explanation: "Pipeline-Fehler (Fehler 3 aus Modul 5): Build schreibt nach _site, aber upload-pages-artifact sucht woanders."
    },
    {
      id: "R21",
      category: "cicd",
      title: "Nicht existierender Trigger-Branch",
      snippet: "on:\n  push:\n    branches: [\"master-nicht-vorhanden\"]",
      expected: "error",
      explanation: "Pipeline-Fehler (Fehler 1 aus Modul 5): Bei Pushes auf main läuft der Workflow nie an."
    },
    {
      id: "R22",
      category: "cicd",
      title: "Korrekte .readthedocs.yaml v2",
      snippet: "version: 2\nbuild:\n  os: ubuntu-24.04\n  tools:\n    python: \"3.12\"\n  commands:\n    - mkdocs build --strict -d \"$READTHEDOCS_OUTPUT/html\"",
      expected: "ok",
      explanation: "Korrekt: Nutzt Version 2, Ubuntu 24.04, Python 3.12 und schreibt sauber nach $READTHEDOCS_OUTPUT/html."
    },
    {
      id: "R23",
      category: "cicd",
      title: "Korrekter GitHub Pages Workflow",
      snippet: "permissions:\n  contents: read\n  pages: write\n  id-token: write\n...\nuses: actions/upload-pages-artifact@v3\nwith:\n  path: \"_site\"",
      expected: "ok",
      explanation: "Korrekt: Minimale Rechte gesetzt und Artefakt-Pfad stimmt mit dem Build-Ordner überein."
    },
    {
      id: "R24",
      category: "cicd",
      title: "Fehlende Version in .readthedocs.yaml",
      snippet: "build:\n  os: ubuntu-24.04\n# version: 2 fehlt komplett",
      expected: "error",
      explanation: "Konfigurationsfehler: Read the Docs verlangt zwingend `version: 2` auf oberster Ebene."
    }
  ]
};
