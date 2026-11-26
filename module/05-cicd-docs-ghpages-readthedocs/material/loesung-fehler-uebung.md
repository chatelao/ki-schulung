# Lösungshinweise zur Debugging-Übung (Modul 5)

Die Datei [`fehler-uebung-pages.yml`](./fehler-uebung-pages.yml) enthält drei typische Praxisprobleme:

1. **Trigger-Branch stimmt nicht (`branches: ["master-nicht-vorhanden"]`):**
   - *Auswirkung:* Der Workflow startet bei Pushes auf `main` überhaupt nicht.
   - *Fix:* `branches: ["main"]` (passend zum Standard-Branch des Repositories).

2. **Fehlende `permissions` (`pages: write`, `id-token: write`):**
   - *Auswirkung:* Der `deploy`-Job schlägt bei `actions/deploy-pages@v4` mit einem Berechtigungsfehler fehl, weil das Workflow-Token nicht auf GitHub Pages schreiben darf.
   - *Fix:* Im `permissions`-Block `pages: write` und `id-token: write` ergänzen.

3. **Falscher Artefakt-Pfad (`path: "build_output_falsch"`):**
   - *Auswirkung:* Der Build schreibt nach `_site`, aber `upload-pages-artifact` sucht in `build_output_falsch` und findet nichts (oder lädt ein leeres Verzeichnis hoch).
   - *Fix:* `path: "_site"` verwenden.
