# Modul 4: Praxis-Workflows, Automatisierung & Multimodalität

- **Zeitbedarf:** ca. 3–4 Std. (Woche 4)
- **Übung:** [`uebung.md`](./uebung.md)
- **Beispieldaten & Referenz-Skript:** [`material/beispiel-daten.csv`](./material/beispiel-daten.csv), [`material/auswertung_beispiel.py`](./material/auswertung_beispiel.py)

---

## Lernziele
- Wiederkehrende Aufgaben aus **Wissensarbeit, Dokumentation und Datenaufbereitung** mit Antigravity + Gemini automatisieren.
- Kleine Hilfstools und interaktive HTML-Prototypen bauen – auch ohne tiefe Programmierkenntnisse.
- **Multimodale Eingaben** (Screenshots, Handskizzen, Fehlermeldungen) direkt als Arbeitsgrundlage nutzen.
- Ergebnisse durch Plausibilitätschecks und einfache automatisierte Tests absichern.

---

## 1. Wissensarbeit & Visualisierung
Typische Einsatzfelder ohne Code-Tiefe:
- **Entscheidungsmatrizen & Vergleiche:** Optionen mit Kriterien gewichten und als Tabelle darstellen.
- **Ablauf- & Architekturdiagramme:** Mit **Mermaid** (`flowchart`, `sequenceDiagram`) komplexe Prozesse direkt in Markdown visualisieren.

## 2. Kleine Tools & Prototypen („Vibe Coding“ mit Kontrolle)
- **Datenaufbereitung:** CSV/JSON-Dateien bereinigen, zusammenfassen, Berichte generieren (siehe [`material/auswertung_beispiel.py`](./material/auswertung_beispiel.py)).
- **Interaktive HTML-Werkzeuge:** Checklisten, Rechner oder kleine Dashboards als einzelne HTML-Datei bauen lassen.

## 3. Multimodale Workflows
- **Screenshot → Verbesserung:** Screenshot einer unübersichtlichen Seite oder Fehlermeldung übergeben und gezielt Verbesserungen anfordern.
- **Skizze → Prototyp:** Foto eines Whiteboard-Entwurfs als Vorlage für eine HTML-Oberfläche oder ein Diagramm nutzen.

## 4. Qualitätssicherung & Debugging
- **Plausibilitätscheck:** Stimmen Summen, Einheiten und Randfälle (z. B. leere Zeilen)?
- **Reproduzierbare Tests:** Selbst kleine Hilfsskripte profitieren von 2–3 automatisierten Tests (siehe [`material/test_auswertung_beispiel.py`](./material/test_auswertung_beispiel.py)).

---

## Checkliste
- [ ] Mindestens ein reales Alltagsproblem mit Antigravity automatisiert oder prototypisch gelöst
- [ ] Plausibilität der Ausgabe anhand von Stichproben geprüft
- [ ] Übung in [`uebung.md`](./uebung.md) abgeschlossen
