window.KI_MOCK_EXAM = {
  durationMinutes: 45,
  passPercent: 70,
  targetPercent: 80,
  questions: [
    {
      id: "MQ01",
      domain: "M1",
      prompt: "Was beschreibt das „Kontextfenster“ eines Sprachmodells korrekt?",
      options: [
        "Die maximale Menge an Tokens (Eingabe + Ausgabe), die das Modell gleichzeitig berücksichtigen kann.",
        "Die Anzahl der Browser-Tabs, die gleichzeitig geöffnet sind.",
        "Die Dauer, wie lange ein Chat im Verlauf gespeichert bleibt.",
        "Die Festplattengröße des lokalen Rechners."
      ],
      correct: [0],
      explanation: "Das Kontextfenster umfasst Input- und Output-Tokens einer Anfrage gemeinsam."
    },
    {
      id: "MQ02",
      domain: "M1",
      prompt: "Wofür eignet sich Gemini Flash besonders im Vergleich zu Gemini Pro?",
      options: [
        "Für schnelle Entwürfe, Zusammenfassungen und wiederkehrende Klassifikationen mit geringer Latenz.",
        "Ausschließlich für Offline-Berechnungen ohne Internet.",
        "Um Passwörter im Klartext zu speichern.",
        "Flash kann keine Textdokumente verarbeiten."
      ],
      correct: [0],
      explanation: "Flash ist auf Geschwindigkeit und Effizienz optimiert; Pro auf tiefes Schlussfolgern."
    },
    {
      id: "MQ03",
      domain: "M1",
      prompt: "Welche Aussage zu Halluzinationen ist richtig?",
      options: [
        "Sie entstehen durch Wahrscheinlichkeitsvorhersage bei Wissenslücken und erfordern Faktenchecks.",
        "Sie treten nur bei englischen Texten auf.",
        "Sie bedeuten, dass das Modell mit dem Internet verbunden ist.",
        "Sie lassen sich durch größere Schriftart verhindern."
      ],
      correct: [0],
      explanation: "LLMs erzeugen plausible Sprache; Fakten müssen gegen Primärquellen geprüft werden."
    },
    {
      id: "MQ04",
      domain: "M1",
      prompt: "Was gehört zur Multimodalität von Gemini?",
      options: [
        "Gemeinsame Verarbeitung von Text, Bildern/Screenshots, PDFs, Audio, Video und Code.",
        "Nur die Umwandlung von Text in Großbuchstaben.",
        "Ausschließlich das Ausführen von SQL-Abfragen.",
        "Nur die Anzeige von GitHub-Badges."
      ],
      correct: [0],
      explanation: "Multimodale Modelle verstehen mehrere Medienarten kombiniert in einem Kontext."
    },
    {
      id: "MQ05",
      domain: "M1",
      prompt: "Welche Maßnahme schützt sensible Daten beim Prompting am zuverlässigsten?",
      options: [
        "Secrets, API-Keys und echte Personendaten vorab entfernen oder durch Platzhalter ersetzen.",
        "Das Passwort in Anführungszeichen setzen.",
        "Den Prompt zweimal hintereinander absenden.",
        "Eine kleinere Schriftgröße wählen."
      ],
      correct: [0],
      explanation: "Nur was nicht gesendet wird, kann auch nicht unbeabsichtigt verarbeitet werden."
    },
    {
      id: "MQ06",
      domain: "M2",
      prompt: "Welche zwei Elemente gehören zur empfohlenen 5-teiligen Prompt-Anatomie? (Wähle 2)",
      multi: true,
      options: [
        "Rolle & Kontext",
        "Aufgabe, Format & Einschränkungen",
        "IP-Adresse des Servers",
        "Git-Commit-Hash"
      ],
      correct: [0, 1],
      explanation: "Die 5 Bausteine sind Rolle, Kontext, Aufgabe, Format und Einschränkungen."
    },
    {
      id: "MQ07",
      domain: "M2",
      prompt: "Wann ist Few-Shot Prompting besonders wirksam?",
      options: [
        "Wenn ein ganz bestimmter Schreibstil oder ein festes Ausgabeformat eingehalten werden soll.",
        "Wenn man gar kein Ziel hat.",
        "Wenn man Dateien auf GitHub löschen möchte.",
        "Als Ersatz für Unit-Tests."
      ],
      correct: [0],
      explanation: "1–2 konkrete Beispiele zeigen dem Modell exakt das gewünschte Muster."
    },
    {
      id: "MQ08",
      domain: "M2",
      prompt: "Was bewirkt die Anweisung „Markiere fehlende Angaben mit [OFFEN]“?",
      options: [
        "Sie verhindert, dass das Modell fehlende Namen oder Fristen frei erfindet.",
        "Sie löscht die gesamte Tabelle.",
        "Sie wandelt Markdown in PDF um.",
        "Sie aktiviert automatisch GitHub Pages."
      ],
      correct: [0],
      explanation: "Explizite Fallback-Marker machen Informationslücken sichtbar statt sie zu überdecken."
    },
    {
      id: "MQ09",
      domain: "M2",
      prompt: "Wie läuft eine effektive 3-Schritte-Iteration ab?",
      options: [
        "Entwurf anfordern -> mit Kritiker-Prompt Schwachstellen finden -> gezielt überarbeiten lassen.",
        "Dreimal denselben unveränderten Prompt kopieren.",
        "Alle Einschränkungen im letzten Schritt entfernen.",
        "Prompt ohne Kontext absenden."
      ],
      correct: [0],
      explanation: "Entwurf -> Kritik -> Feinschliff nutzt Stärken und fängt Lücken früh ab."
    },
    {
      id: "MQ10",
      domain: "M2",
      prompt: "Welches Ausgabeformat eignet sich am besten für Prozesse oder Entscheidungsflüsse in Markdown?",
      options: [
        "Ein Mermaid-Diagramm (`flowchart` / `sequenceDiagram`).",
        "Ein unformatierter 800-Wörter-Absatz.",
        "Eine binäre ZIP-Datei.",
        "Ein Screenshot ohne Alt-Text."
      ],
      correct: [0],
      explanation: "Mermaid-Diagramme sind textbasiert, diffbar und werden direkt auf GitHub & MkDocs gerendert."
    },
    {
      id: "MQ11",
      domain: "M3",
      prompt: "Was beschreibt die Rolle des Menschen beim agentischen Arbeiten mit Antigravity?",
      options: [
        "Ziele und Akzeptanzkriterien definieren, Diffs/Tests prüfen und bei Bedarf nachsteuern.",
        "Jede einzelne Codezeile ohne Werkzeuge selbst tippen.",
        "Änderungen grundsätzlich unbesehen übernehmen.",
        "Keine Dateien im Repository speichern."
      ],
      correct: [0],
      explanation: "Human-in-the-Loop bedeutet klare Steuerung und verantwortliches Review."
    },
    {
      id: "MQ12",
      domain: "M3",
      prompt: "Welcher Ablauf beschreibt einen typischen Antigravity-Arbeitszyklus korrekt?",
      options: [
        "Kontext lesen -> Planen -> Dateien bearbeiten -> per Terminal/Test verifizieren.",
        "Sofort raten -> Dateien löschen -> ohne Prüfung pushen.",
        "Nur chatten ohne Dateizugriff.",
        "Ausschließlich Bilder generieren."
      ],
      correct: [0],
      explanation: "Agenten schließen den Kreis aus Lesen, Handeln und Verifizieren."
    },
    {
      id: "MQ13",
      domain: "M3",
      prompt: "Warum sind Akzeptanzkriterien im Agenten-Briefing so wichtig?",
      options: [
        "Sie machen eindeutig prüfbar, wann die Aufgabe vollständig und korrekt erledigt ist.",
        "Sie verlängern nur die Ladezeit.",
        "Sie ersetzen die Git-Versionskontrolle.",
        "Sie verhindern das Ausführen von Python."
      ],
      correct: [0],
      explanation: "Klare Abnahmekriterien lenken Planung und Selbstprüfung des Agenten."
    },
    {
      id: "MQ14",
      domain: "M3",
      prompt: "Worauf solltest du beim Review eines Agenten-Diffs achten? (Wähle 2)",
      multi: true,
      options: [
        "Wurden nur relevante Dateien geändert und keine Inhalte versehentlich gelöscht?",
        "Sind alle geforderten Checks/Tests tatsächlich gelaufen?",
        "Hat der Monitor die richtige Helligkeit?",
        "Wurde das Browser-Theme auf Neonpink gestellt?"
      ],
      correct: [0, 1],
      explanation: "Scope-Prüfung und reale Verifikation sind Kern des Human-in-the-Loop Reviews."
    },
    {
      id: "MQ15",
      domain: "M3",
      prompt: "Wozu dienen Artefakte in Antigravity?",
      options: [
        "Um Pläne, Berichte oder interaktive Vorschauen strukturiert festzuhalten.",
        "Um temporäre Passwörter öffentlich zu teilen.",
        "Als Ersatz für Git-Branches.",
        "Um den Terminal-Verlauf zu löschen."
      ],
      correct: [0],
      explanation: "Artefakte bündeln strukturierte Ergebnisse für Review und Weiterarbeit."
    },
    {
      id: "MQ16",
      domain: "M4",
      prompt: "Was ist nach einer automatisierten CSV-Auswertung durch KI Pflicht?",
      options: [
        "Eine Stichprobe manuell gegenrechnen und Randfälle (z. B. leere Zeilen) prüfen.",
        "Die Original-CSV sofort löschen.",
        "Alle Kommazahlen auf ganze Hunderter runden.",
        "Keine Dokumentation schreiben."
      ],
      correct: [0],
      explanation: "Plausibilitätsprüfung deckt Spaltenverwechslungen oder Rundungsfehler sofort auf."
    },
    {
      id: "MQ17",
      domain: "M4",
      prompt: "Welchen Vorteil bietet `unittest` in Python für kleine Automatisierungsskripte?",
      options: [
        "Es ist in der Python-Standardbibliothek enthalten und benötigt keine externen Pakete.",
        "Es funktioniert nur mit bezahlten Cloud-APIs.",
        "Es erstellt automatisch GitHub-Pages-Websites.",
        "Es übersetzt Markdown nach Word."
      ],
      correct: [0],
      explanation: "Python `unittest` funktioniert out-of-the-box in jeder Python-3-Umgebung."
    },
    {
      id: "MQ18",
      domain: "M4",
      prompt: "Wie können multimodale Eingaben in Modul 4 genutzt werden?",
      options: [
        "Screenshots oder Handskizzen als Vorlage für HTML-Prototypen oder Bugfixes übergeben.",
        "Ausschließlich als ZIP-Archiv ohne Beschreibung.",
        "Nur für Audio-Musikproduktion.",
        "Multimodalität funktioniert nur in YAML-Dateien."
      ],
      correct: [0],
      explanation: "Visuelle Inputs beschleunigen UI-Entwürfe und Fehlerdiagnosen erheblich."
    },
    {
      id: "MQ19",
      domain: "M4",
      prompt: "Warum vermeidet man bei HTML-Prototypen ungefiltertes `innerHTML` für Nutzereingaben?",
      options: [
        "Um Cross-Site-Scripting (XSS) durch eingeschleusten HTML-/JS-Code zu verhindern.",
        "Weil `innerHTML` in Chrome nicht existiert.",
        "Weil CSS dann nicht mehr lädt.",
        "Weil GitHub Pages kein JavaScript erlaubt."
      ],
      correct: [0],
      explanation: "`textContent` oder `escapeHtml()` schützt vor unbeabsichtigter Code-Ausführung."
    },
    {
      id: "MQ20",
      domain: "M4",
      prompt: "Was prüft ein Smoke-Test?",
      options: [
        "Ob ein Skript oder Build grundsätzlich ohne Absturz durchläuft und plausible Grundwerte liefert.",
        "Ob die CPU-Temperatur unter 20 Grad liegt.",
        "Ob alle Mitarbeiter Urlaub eingetragen haben.",
        "Ob Read the Docs offline ist."
      ],
      correct: [0],
      explanation: "Smoke-Tests sichern schnell die Grundfunktion gegen grobe Regressionen ab."
    },
    {
      id: "MQ21",
      domain: "M5",
      prompt: "Was beschreibt „Docs-as-Code“ am treffendsten?",
      options: [
        "Dokumentation in Git versionieren, per CI automatisch prüfen und per CD veröffentlichen.",
        "Dokumentation ausschließlich als PDF per E-Mail verschicken.",
        "Code ohne Kommentare in Word kopieren.",
        "Auf jegliche Versionskontrolle verzichten."
      ],
      correct: [0],
      explanation: "Docs-as-Code überträgt bewährte Software-Qualitätsprozesse auf Dokumentation."
    },
    {
      id: "MQ22",
      domain: "M5",
      prompt: "Welche Berechtigungen braucht ein GitHub-Actions-Workflow für `actions/deploy-pages@v4`?",
      options: [
        "`contents: read`, `pages: write`, `id-token: write`",
        "`admin: org`, `delete_repo: write`",
        "Gar keine Permissions",
        "Nur `issues: write`"
      ],
      correct: [0],
      explanation: "Ohne `pages: write` und `id-token: write` lehnt GitHub das Pages-Deployment ab."
    },
    {
      id: "MQ23",
      domain: "M5",
      prompt: "Wann ist Read the Docs im Vergleich zu reinem GitHub Pages besonders stark?",
      options: [
        "Bei versionierter technischer Dokumentation (`latest`/`stable`), PR-Previews und eingebauter Volltextsuche.",
        "Wenn man ausschließlich ein privates Excel-Makro hosten will.",
        "Wenn kein Git-Repository existiert.",
        "Wenn man Backend-Datenbanken betreiben will."
      ],
      correct: [0],
      explanation: "Read the Docs ist spezialisiert auf versionierte Doku inkl. Suche und PR-Vorschauen."
    },
    {
      id: "MQ24",
      domain: "M5",
      prompt: "Wohin muss ein benutzerdefinierter `commands`-Build in `.readthedocs.yaml` (v2) seine HTML-Dateien schreiben?",
      options: [
        "`$READTHEDOCS_OUTPUT/html`",
        "`_site_gh_pages/`",
        "`/etc/nginx/html`",
        "`.git/objects/`"
      ],
      correct: [0],
      explanation: "Read the Docs erwartet die gebaute HTML-Ausgabe unter `$READTHEDOCS_OUTPUT/html`."
    },
    {
      id: "MQ25",
      domain: "M5",
      prompt: "Was bewirkt `mkdocs build --strict` in einer CI-Pipeline?",
      options: [
        "Warnungen (wie fehlende interne Links) führen zum Build-Abbruch und fallen sofort im PR auf.",
        "Alle Bilder werden gelöscht.",
        "Die Seite wird automatisch auf Read the Docs gelöscht.",
        "Python-Tests werden übersprungen."
      ],
      correct: [0],
      explanation: "`--strict` verhindert, dass kaputte Links unbemerkt live gehen."
    },
    {
      id: "MQ26",
      domain: "M5",
      prompt: "Warum liegen im `ki-schulung`-Setup das Lernstudio auf GitHub Pages und das Handbuch auf Read the Docs?",
      options: [
        "Beide Plattformen spielen ihre Stärken aus: interaktive Web-App auf GitHub Pages, versioniertes MkDocs-Handbuch auf RTD.",
        "Weil GitHub Pages kein HTML darstellen kann.",
        "Weil Read the Docs keine Markdown-Dateien unterstützt.",
        "Aus Versehen ohne Zusammenhang."
      ],
      correct: [0],
      explanation: "Die Aufgabenteilung vermeidet Duplikate und nutzt beide Plattformen optimal."
    },
    {
      id: "MQ27",
      domain: "M6",
      prompt: "Warum hilft eine gepflegte `README.md` KI-Agenten bei größeren Projekten?",
      options: [
        "Sie liefert Architektur, Konventionen und Standardbefehle direkt beim Einstieg in den Workspace.",
        "Sie ersetzt alle Tests.",
        "Sie macht Git-Commits überflüssig.",
        "Sie verhindert jede Rückfrage beim Menschen."
      ],
      correct: [0],
      explanation: "Gutes Kontext-Design reduziert Fehlannahmen und Nacharbeit deutlich."
    },
    {
      id: "MQ28",
      domain: "M6",
      prompt: "Wann ist ein vorgeschalteter Klärungs- oder Planungs-Workflow (`/grill-me`, `/plan`) besonders sinnvoll?",
      options: [
        "Bei komplexen, mehrstufigen Vorhaben mit offenen Designentscheidungen.",
        "Bei einem einzelnen Tippfehler in einer Überschrift.",
        "Wenn man gar nichts umsetzen möchte.",
        "Nur nach Abschluss des Projekts."
      ],
      correct: [0],
      explanation: "Vorherige Klärung spart bei großen Aufgaben viele Korrekturschleifen."
    },
    {
      id: "MQ29",
      domain: "M6",
      prompt: "Wann lohnt sich die Aufteilung in spezialisierte Subagenten?",
      options: [
        "Wenn Recherche, Implementierung und Prüfung unabhängig und sauber getrennt ablaufen sollen.",
        "Für das Ändern eines einzelnen Wortes.",
        "Um API-Keys im Repo zu speichern.",
        "Um Tests zu deaktivieren."
      ],
      correct: [0],
      explanation: "Getrennte Rollen halten den Kontext fokussiert und erhöhen die Qualität."
    },
    {
      id: "MQ30",
      domain: "M6",
      prompt: "Was gehört zum sauberen Abschluss eines Capstone-Projekts in Modul 6?",
      options: [
        "Abnahme gegen eigene Akzeptanzkriterien, Dokumentation, kurzer Testlauf und Reflexion.",
        "Nur eine mündliche Idee ohne Ergebnis.",
        "Deaktivieren aller CI-Checks.",
        "Löschen der Projekt-README."
      ],
      correct: [0],
      explanation: "Ein vollständiges Capstone-Projekt verbindet Umsetzung, Verifikation und Transfer."
    }
  ]
};
