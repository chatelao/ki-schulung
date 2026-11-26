# Modul 3: Einstieg in Agentisches Arbeiten mit Antigravity

- **Zeitbedarf:** ca. 3–4 Std. (Woche 3)
- **Vorlage:** [`vorlagen/prompt-template.md`](../../vorlagen/prompt-template.md)
- **Übung:** [`uebung.md`](./uebung.md) | **Material:** [`material/beispiel-briefings.md`](./material/beispiel-briefings.md)

---

## Lernziele
- Den Unterschied zwischen einem **Chatbot** (Textantwort) und einem **KI-Agenten** (Planen, Handeln, Prüfen) verstehen.
- Aufgaben mit klaren **Zielen und Akzeptanzkriterien** an Antigravity delegieren.
- Ergebnisse über **Artefakte, Diffs und Terminal-Ausgaben** souverän prüfen (*Human-in-the-Loop*).

---

## 1. Chatbot vs. KI-Agent
| Aspekt | Klassischer KI-Chat (Gemini) | KI-Agent (Antigravity) |
| --- | --- | --- |
| **Arbeitsweise** | Reagiert auf einzelne Nachrichten | Plant mehrere Schritte selbstständig |
| **Werkzeuge** | Text/Multimodal-Eingabe & -Ausgabe | Liest/schreibt Dateien, führt Terminal-Befehle aus, nutzt Git & Tests |
| **Fehlerkorrektur** | Mensch kopiert Fehler zurück | Agent sieht Fehler selbst und korrigiert nach |
| **Deine Rolle** | Fragen stellen & Texte übernehmen | **Auftraggeber & Reviewer** (Ziele setzen, Ergebnisse prüfen) |

## 2. Die Antigravity-Arbeitsumgebung
- **Workspace & Repository:** Antigravity arbeitet direkt auf deinen Projektdateien (z. B. `ki-schulung`).
- **Artefakte:** Strukturierte Pläne, Berichte oder HTML-Vorschauen, die außerhalb des reinen Chat-Flusses entstehen.
- **Terminal & Checks:** Befehle (z. B. Tests, Linter, Skripte) werden direkt ausgeführt, um Ergebnisse zu verifizieren.

## 3. Effektives Briefing & Human-in-the-Loop
- **Ziele statt Mikromanagement:** Beschreibe *was* erreicht werden soll und *woran man Erfolg erkennt* (Akzeptanzkriterien).
- **Kleine Schritte:** Lieber ein klares Arbeitspaket pro Auftrag als 10 unzusammenhängende Wünsche auf einmal.
- **Review-Pflicht:** Prüfe geänderte Dateien (Diffs), bevor du sie übernimmst oder committest.

---

## Checkliste
- [ ] Unterschied zwischen Chat-Prompt und Agenten-Briefing verstanden
- [ ] Erste Datei-Aufgabe mit Antigravity erfolgreich umgesetzt und geprüft
- [ ] Übung in [`uebung.md`](./uebung.md) abgeschlossen
