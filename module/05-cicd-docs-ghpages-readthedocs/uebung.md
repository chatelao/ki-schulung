# Übung zu Modul 5: Docs-CI/CD verstehen, deployen & debuggen

Nutze die Beispiel-Workflows in [`examples/ci-cd-docs/`](../../examples/ci-cd-docs/README.md) sowie die vorbereitete Debugging-Datei [`material/fehler-uebung-pages.yml`](./material/fehler-uebung-pages.yml).

---

## Teil A: Basis-Übung (für alle)

### Aufgabe 1: Pipeline erklären lassen & verstehen
Öffne [`examples/ci-cd-docs/github-actions-pages.yml`](../../examples/ci-cd-docs/github-actions-pages.yml) und [`examples/ci-cd-docs/readthedocs.yaml`](../../examples/ci-cd-docs/readthedocs.yaml).  
Lasse dir von Antigravity Schritt für Schritt erklären:
1. Wann wird der Workflow ausgelöst?
2. Warum braucht der GitHub-Pages-Workflow `permissions` (`pages: write`, `id-token: write`)?
3. Was ist der Unterschied zwischen dem Build-Job und dem Deploy-Job?

### Aufgabe 2: Fehleranalyse mit Antigravity (Debugging-Training)
In [`material/fehler-uebung-pages.yml`](./material/fehler-uebung-pages.yml) sind **3 typische CI/CD-Fehler** eingebaut.  
Beauftrage Antigravity:
> „Analysiere `module/05-cicd-docs-ghpages-readthedocs/material/fehler-uebung-pages.yml`. Finde alle Fehler, erkläre ihre Auswirkungen in verständlicher Sprache und schlage die korrigierte Version vor.“

Vergleiche das Ergebnis anschließend mit [`material/loesung-fehler-uebung.md`](./material/loesung-fehler-uebung.md).

---

## Teil B: Technischer Ausblick (optional für Fortgeschrittene)

1. **GitHub Pages aktivieren:** Kopiere `examples/ci-cd-docs/github-actions-pages.yml` in deinem eigenen Repository nach `.github/workflows/pages.yml`, stelle in GitHub unter **Settings → Pages** die Quelle auf **GitHub Actions** und löse einen Lauf auf `main` aus.
2. **Qualitäts-Gate + Read the Docs:** Aktiviere zusätzlich [`examples/ci-cd-docs/github-actions-docs-ci-rtd.yml`](../../examples/ci-cd-docs/github-actions-docs-ci-rtd.yml) als `.github/workflows/docs-ci.yml` und binde `.readthedocs.yaml` über [app.readthedocs.org](https://app.readthedocs.org/) an, um PR-Previews und versionierte Docs zu testen.
