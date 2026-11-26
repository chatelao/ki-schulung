# Übung zu Modul 4: Datenaufbereitung, Prototyp & Qualitätssicherung

Nutze die Beispieldatei [`material/beispiel-daten.csv`](./material/beispiel-daten.csv) (anonymisiertes Schulungs-Feedback aus 4 Modulen).

---

## Teil A: Basis-Übung (für alle)

### Aufgabe 1: Auswertung & Bericht erzeugen
Beauftrage Antigravity, die Datei `module/04-praxis-workflows/material/beispiel-daten.csv` auszuwerten und einen kurzen **Markdown-Bericht** zu erstellen mit:
- Durchschnittlicher Zufriedenheit (`bewertung_1_bis_5`) pro Modul
- Gesamtzahl der Teilnehmenden und durchschnittlichem Zeitaufwand (`zeitaufwand_min`)
- Einem kurzen Fazit, welches Modul die beste Bewertung hat und wo Nachbesserungsbedarf besteht

### Aufgabe 2: Plausibilitätsprüfung
Rechne mindestens **ein Modul manuell nach** (z. B. Modul 1), um sicherzustellen, dass das Ergebnis stimmt und keine Zeilen übersehen wurden.

*(Optional)* Lasse dir zusätzlich eine **einzelne interaktive HTML-Seite** als kleines Feedback-Dashboard aus den Daten generieren.

---

## Teil B: Technischer Ausblick (optional für Fortgeschrittene)

1. **Automatisierter Test:** Schaue dir das Referenzskript [`material/auswertung_beispiel.py`](./material/auswertung_beispiel.py) und die zugehörigen Tests in [`material/test_auswertung_beispiel.py`](./material/test_auswertung_beispiel.py) an.
2. **Test ausführen:** Starte die Tests im Terminal mit:
   ```bash
   python3 -m unittest discover -s module/04-praxis-workflows/material -p "test_*.py"
   ```
3. **Erweiterung:** Lasse Antigravity eine neue Kennzahl (z. B. Median oder Anteil der Bewertungen `>= 4`) inkl. neuem Unit-Test ergänzen.
