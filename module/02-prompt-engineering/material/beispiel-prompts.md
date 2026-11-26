# Beispiel-Prompts: Schwach vs. Strukturiert

## Beispiel 1: Meeting-Zusammenfassung

### Schwacher Prompt
> „Fasse dieses Meeting zusammen.“

*Problem:* Unklar, für wen, wie lang und ob Aufgaben extrahiert werden sollen.

### Strukturierter Prompt
> **Rolle:** Du bist Projektassistenz.  
> **Kontext:** Unten stehen rohe Stichpunkte aus unserem wöchentlichen Team-Sync.  
> **Aufgabe:** Erstelle eine strukturierte Zusammenfassung.  
> **Format:**  
> 1. Entscheidungen (max. 3 Bullet-Points)  
> 2. Aufgaben als Markdown-Tabelle (`Aufgabe | Verantwortlich | Frist`)  
> 3. Offene Fragen  
> **Einschränkungen:** Wenn ein Verantwortlicher oder eine Frist fehlt, schreibe `[OFFEN]` – erfinde keine Namen oder Daten.

---

## Beispiel 2: Kritiker-Prompt (Review)
> „Prüfe den folgenden Konzeptentwurf als kritischer Reviewer. Liste zuerst die 3 stärksten Punkte auf, danach maximal 5 konkrete Schwachstellen oder fehlende Annahmen und schlage jeweils eine kurze Verbesserung vor.“
