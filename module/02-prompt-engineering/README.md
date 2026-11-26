# Modul 2: Prompt Engineering & Strukturierte Zusammenarbeit

- **Zeitbedarf:** ca. 3 Std. (Woche 2)
- **Vorlage:** [`vorlagen/prompt-template.md`](../../vorlagen/prompt-template.md)
- **Übung:** [`uebung.md`](./uebung.md) | **Beispiele:** [`material/beispiel-prompts.md`](./material/beispiel-prompts.md)

---

## Lernziele
- Klare, reproduzierbare Prompts mit **Rolle, Kontext, Ziel, Format und Einschränkungen** formulieren.
- Bewährte Techniken (**Few-Shot**, **Schrittweises Zerlegen**, **Iteratives Verfeinern**, **Kritiker-Rolle**) sicher einsetzen.
- Ausgaben gezielt in weiterverwendbaren Formaten (Markdown-Tabellen, Checklisten, Mermaid-Diagramme, JSON) anfordern.

---

## 1. Anatomie eines starken Prompts
Ein verlässlicher Prompt beantwortet fünf Fragen:
1. **Rolle:** Aus welcher Perspektive soll Gemini antworten? *(z. B. Projektleiter, technischer Redakteur)*
2. **Kontext:** Was ist die Ausgangslage, wer ist die Zielgruppe?
3. **Aufgabe:** Was genau soll erstellt, geprüft oder umgewandelt werden?
4. **Format:** Wie soll das Ergebnis strukturiert sein? *(z. B. Tabelle, Checkliste, max. 150 Wörter)*
5. **Einschränkungen:** Was darf **nicht** passieren? *(z. B. „Erfinde keine Fakten, markiere Unklarheiten mit `[OFFEN]`“)*

## 2. Vier Techniken für deutlich bessere Ergebnisse
- **Few-Shot Prompting:** 1–2 kurze Beispiele für Stil oder Struktur mitgeben – wirkt oft stärker als lange Erklärungen.
- **Schrittweises Zerlegen:** Erst um eine Gliederung oder Analyse bitten, danach um die Ausarbeitung.
- **Iteratives Verfeinern:** Nicht auf den einen „Mega-Prompt“ hoffen, sondern in 2–3 kurzen Runden nachschärfen.
- **Kritiker-Rolle („Advocatus Diaboli“):** Gemini bitten, den eigenen Entwurf auf Lücken, Annahmen und Missverständnisse abzuklopfen.

---

## Checkliste
- [ ] Eigene Prompt-Sammlung mit mindestens 5 Vorlagen aufgebaut
- [ ] Mindestens eine Aufgabe in 3 Iterationen (Entwurf → Kritik → Feinschliff) gelöst
- [ ] Übung in [`uebung.md`](./uebung.md) abgeschlossen
