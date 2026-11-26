# Beispiel-Workflows: CI/CD für Dokumentation (GitHub Pages & Read the Docs)

Dieser Ordner enthält tool-agnostische Beispiel-Konfigurationen für **Modul 5** ([`module/05-cicd-docs-ghpages-readthedocs/README.md`](../../module/05-cicd-docs-ghpages-readthedocs/README.md)).  
Sie liegen bewusst als Vorlagen unter `examples/ci-cd-docs/`, damit sie nicht automatisch laufen, bevor GitHub Pages oder Read the Docs im eigenen Projekt eingerichtet sind.

## Enthaltene Beispiele

| Datei | Zweck | Zielort im eigenen Projekt |
| --- | --- | --- |
| [`github-actions-pages.yml`](./github-actions-pages.yml) | Baut die Doku und veröffentlicht sie automatisch auf **GitHub Pages** | `.github/workflows/pages.yml` |
| [`readthedocs.yaml`](./readthedocs.yaml) | Konfiguriert den automatischen Build auf **Read the Docs** (Version 2) | `.readthedocs.yaml` (im Repo-Root) |
| [`github-actions-docs-ci-rtd.yml`](./github-actions-docs-ci-rtd.yml) | Führt bei Pull Requests Qualitäts-/Link-Checks aus und zeigt optional einen API-Trigger für **Read the Docs** | `.github/workflows/docs-ci.yml` |

## Schnellstart zur Aktivierung

1. **GitHub Pages:**
   - `github-actions-pages.yml` nach `.github/workflows/pages.yml` kopieren und den Build-Schritt an das gewünschte Docs-Tool (plain HTML, MkDocs, Sphinx, Docusaurus …) anpassen.
   - In GitHub unter **Settings → Pages → Build and deployment** die Quelle auf **GitHub Actions** umstellen.
2. **Read the Docs:**
   - `readthedocs.yaml` als `.readthedocs.yaml` ins Repository-Wurzelverzeichnis kopieren und den Build-Abschnitt an das gewünschte Docs-Tool anpassen.
   - Repository auf [app.readthedocs.org](https://app.readthedocs.org/) importieren (richtet automatisch den GitHub-Webhook für Builds und PR-Previews ein).
