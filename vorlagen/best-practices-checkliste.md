# Persönliche KI-Best-Practices-Checkliste

Nutze diese Checkliste vor, während und nach der Arbeit mit **Gemini** und **Antigravity**.

## 1. Vor dem Start (Datenschutz & Zielklarheit)
- [ ] **Keine sensiblen Daten:** Keine Passwörter, API-Keys, privaten Schlüssel oder vertraulichen personenbezogenen Daten in Prompts einfügen.
- [ ] **Werkzeugwahl geprüft:** Brauche ich eine schnelle Antwort/Idee (**Gemini Chat**) oder Datei-/Code-/Systemarbeit (**Antigravity Agent**)?
- [ ] **Ziel & Format klar:** Ist definiert, was am Ende vorliegen soll (z. B. Tabelle, Checkliste, Skript, PR)?

## 2. Während der Zusammenarbeit (Prompting & Steuerung)
- [ ] **Kontext geliefert:** Zielgruppe, Randbedingungen und relevante Dateien angegeben.
- [ ] **Akzeptanzkriterien gesetzt:** Woran erkennt man ein gutes Ergebnis?
- [ ] **Iterativ gearbeitet:** Erst grobe Struktur/Plan prüfen, dann Details ausarbeiten lassen.

## 3. Nach der Generierung (Human-in-the-Loop)
- [ ] **Faktencheck:** Zahlen, Zitate, APIs, Befehle und URLs kritisch geprüft (Halluzinations-Check).
- [ ] **Diff & Logik geprüft:** Bei Datei-/Code-Änderungen jede Änderung nachvollzogen (keine blinde Übernahme).
- [ ] **Tests / Build ausgeführt:** Funktioniert das Ergebnis praktisch (z. B. Skript gestartet, Tests grün, YAML valide)?
