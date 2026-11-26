# Übung zu Modul 3: Erste Agenten-Aufgabe mit Antigravity

Nutze die Briefing-Vorlage in [`vorlagen/prompt-template.md`](../../vorlagen/prompt-template.md) und die Beispiele in [`material/beispiel-briefings.md`](./material/beispiel-briefings.md).

---

## Teil A: Basis-Übung (für alle)

### Schritt 1: Agenten-Briefing formulieren
Beauftrage Antigravity, in einem eigenen Übungsordner (z. B. `uebungen/mein-thema/`) eine kurze Wissensseite (`README.md`) zu einem Thema deiner Wahl anzulegen.  
Gib dabei explizit an:
- **Zielgruppe** (z. B. neue Kolleginnen und Kollegen)
- **Struktur** (Überblick, 3 Kernregeln, FAQ)
- **Akzeptanzkriterien** (z. B. max. 300 Wörter, ein Mermaid-Diagramm enthalten)

### Schritt 2: Human-in-the-Loop Review
Prüfe das Ergebnis von Antigravity:
- Stimmt die Struktur? Ist das Diagramm verständlich?
- Gib **ein konkretes Korrektur-Feedback** (z. B. *„Kürze Abschnitt 2 und ergänze ein konkretes Beispiel“*) und prüfe den zweiten Durchlauf.

---

## Teil B: Technischer Ausblick (optional für Fortgeschrittene)

1. **Branch & Pull Request:** Lasse Antigravity die Änderung auf einem neuen Feature-Branch (z. B. `docs/mein-thema`) erstellen, einen sauberen Commit schreiben und prüfe das Git-Diff (`git diff main..HEAD`).
2. **Akzeptanzkriterien automatisieren:** Ergänze einen kurzen Check (z. B. Wortzahl oder Vorhandensein aller Überschriften), den Antigravity per Terminal-Befehl direkt verifiziert.
