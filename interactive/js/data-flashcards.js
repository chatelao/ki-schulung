window.KI_FLASHCARDS = [
  { id: "FC01", domain: "M1", front: "Wie erzeugt ein LLM wie Gemini seine Antworten?", back: "Durch Wahrscheinlichkeitsvorhersage des nächsten Tokens — nicht durch Nachschlagen in einer Faktendatenbank." },
  { id: "FC02", domain: "M1", front: "Was ist ein Token?", back: "Ein kleiner Textbaustein (Wort, Silbe oder Zeichen), in den Eingabe und Ausgabe zerlegt werden (ca. 3–4 Zeichen im Deutschen)." },
  { id: "FC03", domain: "M1", front: "Was bedeutet das Kontextfenster?", back: "Die maximale Textmenge (Input + Output), die das Modell gleichzeitig verarbeiten kann." },
  { id: "FC04", domain: "M1", front: "Gemini Flash vs. Gemini Pro: Wann wählt man welches Modell?", back: "Flash für Geschwindigkeit & Effizienz (Entwürfe, Zusammenfassungen); Pro für tiefes Schlussfolgern, komplexe Analysen und Debugging." },
  { id: "FC05", domain: "M1", front: "Warum entstehen Halluzinationen?", back: "Weil das Modell bei Wissenslücken oder unklaren Vorgaben eine sprachlich plausible, aber faktisch unbelegte Antwort formuliert." },
  { id: "FC06", domain: "M1", front: "Welche Daten gehören niemals ungeschützt in einen KI-Prompt?", back: "Passwörter, API-Tokens, private Schlüssel, vertrauliche Verträge und unanonymisierte Personendaten." },

  { id: "FC07", domain: "M2", front: "Nenne die 5 Bausteine eines starken Prompts.", back: "1. Rolle\n2. Kontext\n3. Aufgabe\n4. Format\n5. Einschränkungen" },
  { id: "FC08", domain: "M2", front: "Was ist Few-Shot Prompting?", back: "Man gibt 1–2 konkrete Beispiele für Stil oder Struktur mit, um das Ausgabeformat zuverlässig zu steuern." },
  { id: "FC09", domain: "M2", front: "Warum ist iteratives Verfeinern besser als ein riesiger „Mega-Prompt“?", back: "Man prüft Zwischenergebnisse früh, korrigiert gezielt die Richtung und vermeidet komplexe Missverständnisse." },
  { id: "FC10", domain: "M2", front: "Wie setzt man die „Kritiker-Rolle“ (Advocatus Diaboli) ein?", back: "Man bittet Gemini, einen eigenen Entwurf auf Lücken, Risiken und falsche Annahmen zu überprüfen." },
  { id: "FC11", domain: "M2", front: "Wie verhindert man erfundene Namen oder Fristen in Tabellen?", back: "Durch explizite Einschränkung, z. B.: „Erfinde nichts; markiere fehlende Angaben mit [OFFEN].“" },
  { id: "FC12", domain: "M2", front: "Welche Vorteile haben strukturierte Ausgabeformate (Markdown-Tabelle, JSON, Mermaid)?", back: "Sie sind direkt weiterverwendbar, leichter prüfbar und reduzieren unklare Textwände." },

  { id: "FC13", domain: "M3", front: "Was unterscheidet Antigravity (Agent) von einem reinen Chatbot?", back: "Ein Agent plant Schritte, liest/schreibt Dateien, führt Terminal-Befehle & Tests aus und prüft Ergebnisse selbst." },
  { id: "FC14", domain: "M3", front: "Was bedeutet „Human-in-the-Loop“?", back: "Der Mensch setzt Ziele & Akzeptanzkriterien, prüft Diffs/Testergebnisse und steuert vor der Übernahme gezielt nach." },
  { id: "FC15", domain: "M3", front: "Was macht ein gutes Agenten-Briefing aus?", back: "Klares Ziel, relevanter Dateikontext und überprüfbare Akzeptanzkriterien statt kleinteiligem Mikromanagement." },
  { id: "FC16", domain: "M3", front: "Wofür dienen Artefakte in Antigravity?", back: "Für strukturierte Pläne, Berichte, Checklisten oder Vorschauen getrennt vom reinen Chat-Verlauf." },
  { id: "FC17", domain: "M3", front: "Was prüft man zuerst bei einem Git-Diff nach einer Agenten-Änderung?", back: "Wurden nur die gewünschten Dateien geändert, blieben bestehende Inhalte erhalten und sind alle Kriterien erfüllt?" },
  { id: "FC18", domain: "M3", front: "Warum sind kleine, abgegrenzte Arbeitspakete für Agenten besser?", back: "Sie halten Änderungen überschaubar, erleichtern das Review und senken das Fehlerrisiko." },

  { id: "FC19", domain: "M4", front: "Wozu nutzt man Mermaid in der Wissensarbeit?", back: "Um Ablauf-, Architektur- und Zustandsdiagramme direkt als versionierbaren Text in Markdown zu pflegen." },
  { id: "FC20", domain: "M4", front: "Was sollte man nach einer KI-gestützten CSV-Auswertung immer tun?", back: "Mindestens eine Gruppe oder Kennzahl manuell gegenrechnen (Plausibilitätscheck) und auf leere Zeilen achten." },
  { id: "FC21", domain: "M4", front: "Wie nutzt man Multimodalität in Praxis-Workflows?", back: "Screenshots, Whiteboard-Skizzen oder Fehlermeldungen als Eingabe nutzen, um Prototypen oder Fixes direkt umzusetzen." },
  { id: "FC22", domain: "M4", front: "Warum lohnen sich Unit-/Smoke-Tests auch für kleine Hilfsskripte?", back: "Sie erkennen Folgefehler sofort, wenn Daten oder Logik später angepasst werden." },
  { id: "FC23", domain: "M4", front: "Welcher Befehl startet alle Python-unittest-Dateien in einem Ordner?", back: "python3 -m unittest discover -s <ordner> -p \"test_*.py\"" },
  { id: "FC24", domain: "M4", front: "Warum sollte man Nutzereingaben im Browser nicht ungeprüft per innerHTML einfügen?", back: "Wegen XSS-Risiko (Cross-Site Scripting) — stattdessen textContent oder escapeHtml() verwenden." },

  { id: "FC25", domain: "M5", front: "Was bedeutet „Docs-as-Code“?", back: "Dokumentation wird wie Quellcode in Git versioniert, im Pull Request geprüft (CI) und automatisch veröffentlicht (CD)." },
  { id: "FC26", domain: "M5", front: "Worin unterscheiden sich CI und CD bei Dokumentation?", back: "CI prüft & baut bei jedem Push/PR (z. B. Link-Check, Strict-Build); CD veröffentlicht automatisch nach Merge auf main." },
  { id: "FC27", domain: "M5", front: "Welche `permissions` braucht ein GitHub-Pages-Deploy-Workflow?", back: "contents: read, pages: write und id-token: write." },
  { id: "FC28", domain: "M5", front: "Wann ist Read the Docs stärker als reines GitHub Pages?", back: "Bei versionierter technischer Doku (latest/stable), eingebauter Volltextsuche, PDF/ePub-Export und PR-Previews." },
  { id: "FC29", domain: "M5", front: "Wohin muss `.readthedocs.yaml` (v2) bei eigenen `commands` das HTML schreiben?", back: "In das Verzeichnis `$READTHEDOCS_OUTPUT/html`." },
  { id: "FC30", domain: "M5", front: "Was prüft `mkdocs build --strict`?", back: "Er bricht den Build mit Fehlercode ab, sobald Warnungen (z. B. defekte interne Links) auftreten." },

  { id: "FC31", domain: "M6", front: "Warum ist eine gute `README.md` wichtig für KI-Agenten?", back: "Sie liefert Projektziel, Ordnerstruktur und Build-/Testbefehle als stabiles Kontext-Fundament." },
  { id: "FC32", domain: "M6", front: "Wann nutzt man einen Klärungs-Workflow wie `/grill-me`?", back: "Wenn Anforderungen noch unscharf sind und Designentscheidungen vor der Umsetzung geklärt werden sollen." },
  { id: "FC33", domain: "M6", front: "Wozu dient `/plan` vor größeren Änderungen?", back: "Um Meilensteine, betroffene Dateien und Abnahmekriterien vorab verbindlich abzustimmen." },
  { id: "FC34", domain: "M6", front: "Wann sind wiederverwendbare Skills sinnvoll?", back: "Wenn Abläufe (z. B. Review-Checklisten, Setup-Schritte, Doku-Standards) regelmäßig identisch benötigt werden." },
  { id: "FC35", domain: "M6", front: "Wann lohnt sich Arbeitsteilung mit Subagenten?", back: "Bei größeren Projekten, um Recherche, Implementierung und unabhängige Prüfung sauber zu trennen." },
  { id: "FC36", domain: "M6", front: "Welche 4 Schritte durchläuft ein Capstone-Projekt?", back: "1. Problem & Steckbrief definieren\n2. Plan abstimmen\n3. Umsetzen & testen\n4. Dokumentieren & reflektieren." }
];
