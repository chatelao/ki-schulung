# Übung zu Modul 2: Prompt-Sammlung & Iteratives Verfeinern

Nutze die Vorlage [`vorlagen/prompt-template.md`](../../vorlagen/prompt-template.md) und die Beispiele in [`material/beispiel-prompts.md`](./material/beispiel-prompts.md).

---

## Teil A: Basis-Übung (für alle)

### Aufgabe 1: Persönliche Prompt-Sammlung (5 Vorlagen)
Erstelle für deinen Arbeitsalltag **5 wiederverwendbare Prompt-Vorlagen**, z. B. für:
1. Meeting-Notizen in Aufgaben & Entscheidungen umwandeln
2. Verständliche E-Mail oder Status-Update formulieren
3. Komplexes Thema für Einsteiger erklären
4. Dokument oder Konzept kritisch gegenlesen lassen
5. Entscheidungsmatrix (Optionen + Pro/Contra) erstellen

### Aufgabe 2: 3-Schritte-Iteration
Nimm ein reales Thema (z. B. Einführung eines neuen Tools im Team):
1. **Runde 1 (Entwurf):** Groben Konzept-Entwurf als Bullet-Points anfordern.
2. **Runde 2 (Kritik):** Gemini bitten: *„Nimm die Rolle eines skeptischen Teammitglieds ein und nenne die 5 größten Risiken oder Lücken in diesem Entwurf.“*
3. **Runde 3 (Feinschliff):** Entwurf unter Berücksichtigung der Kritikpunkte als saubere Markdown-Tabelle überarbeiten lassen.

---

## Teil B: Technischer Ausblick (optional für Fortgeschrittene)

1. **Prompt-Versionierung in Git:** Speichere deine Prompt-Vorlagen als Markdown-Dateien im Repository und versioniere Verbesserungen mit aussagekräftigen Commit-Messages.
2. **Reproduzierbare Testfälle:** Definiere für einen Prompt 2 feste Test-Inputs (z. B. einen sehr kurzen und einen sehr unstrukturierten Text) und prüfe, ob das gewünschte Ausgabeformat (z. B. JSON oder Tabelle) in beiden Fällen stabil bleibt.
