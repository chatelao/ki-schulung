# Übung zu Modul 1: Dokumentenanalyse & Faktencheck mit Gemini

## Ausgangsmaterial
Nutze das Beispieldokument [`material/beispiel-richtlinie.md`](./material/beispiel-richtlinie.md) (eine fiktive interne Richtlinie für mobiles Arbeiten und Dienstreisen).

---

## Teil A: Basis-Übung (für alle)

### Schritt 1: Zusammenfassung für unterschiedliche Zielgruppen
Lasse Gemini das Dokument auf zwei Arten zusammenfassen:
1. Als **3-Punkte-Management-Summary** (max. 80 Wörter).
2. Als **praktische Checkliste für neue Mitarbeitende**.

### Schritt 2: Lücken und Widersprüche finden
Stelle Gemini folgende Aufgabe:
> „Lies die Richtlinie kritisch durch. Welche Punkte sind unklar, widersprüchlich oder fehlen für die praktische Anwendung?“

### Schritt 3: Faktencheck & Halluzinations-Test
Stelle absichtlich eine Frage, die **nicht** im Dokument beantwortet wird (z. B. *„Wie hoch ist das Budget für ergonomische Bürostühle laut dieser Richtlinie?“*).
- Prüfe, ob das Modell sauber sagt „Steht nicht im Dokument“ oder ob es eine Zahl annimmt/erfindet.
- Notiere dir eine klare Regel, wie du künftig „antworte nur auf Basis des Textes“ formulierst.

---

## Teil B: Technischer Ausblick (optional für Fortgeschrittene)

1. **Strukturierter JSON-Output:** Lasse die wichtigsten Regeln aus `beispiel-richtlinie.md` als valides JSON mit den Feldern `thema`, `regel`, `grenzwert` und `ausnahme` extrahieren.
2. **Modellvergleich (*Flash* vs. *Pro*):** Führe Schritt 2 (Widersprüche finden) sowohl mit einem schnellen Modell (*Flash*) als auch mit einem tiefen Denkmodell (*Pro*) durch und vergleiche Detailtiefe, Antwortzeit und Präzision.
