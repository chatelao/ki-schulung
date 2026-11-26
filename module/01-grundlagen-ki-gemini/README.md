# Modul 1: Grundlagen der Generativen KI & Gemini

- **Zeitbedarf:** ca. 3 Std. (Woche 1)
- **Zielgruppe:** Alle (Einsteiger-Basis + optionaler technischer Ausblick)
- **Übung:** [`uebung.md`](./uebung.md) | **Material:** [`material/beispiel-richtlinie.md`](./material/beispiel-richtlinie.md)

---

## Lernziele
- Verstehen, wie Large Language Models (LLMs) arbeiten (Token, Kontextfenster, Wahrscheinlichkeiten).
- Wissen, wann **Gemini Flash** und wann **Gemini Pro** sinnvoll ist.
- Multimodale Stärken (Text, Bild, PDF, Audio, Video, Code) gezielt nutzen.
- Typische Risiken (Halluzinationen, Datenschutz, Bias, Urheberrecht) erkennen und sicher damit umgehen.

---

## 1. Wie funktionieren LLMs?
Große Sprachmodelle sind keine klassischen Datenbanken, die Fakten nachschlagen, sondern **Wahrscheinlichkeitsmodelle für Sprache**:
- **Token:** Texte werden in kleine Wort- oder Silbenbausteine zerlegt (ca. 3–4 Zeichen pro Token im Deutschen).
- **Vorhersage statt Wissen:** Das Modell berechnet Schritt für Schritt das wahrscheinlichste nächste Token auf Basis seines Trainings und des aktuellen Gesprächs.
- **Kontextfenster:** Die maximale Menge an Text (Input + Output), die das Modell gleichzeitig „im Blick“ behalten kann. Gemini bietet hier besonders große Kontextfenster für lange Dokumente oder ganze Codebasen.
- **Warum Halluzinationen entstehen:** Weil das Modell immer eine plausible Antwort formulieren möchte, kann es bei Wissenslücken oder unklaren Fragen überzeugend klingende, aber falsche Fakten erfinden.

## 2. Die Gemini-Modellfamilie & Multimodalität
| Modell-Typ | Stärke | Typischer Einsatz |
| --- | --- | --- |
| **Gemini Flash** | Sehr schnell, kosteneffizient | Zusammenfassungen, Entwürfe, Klassifikation, schnelle Rückfragen |
| **Gemini Pro** | Tieferes Schlussfolgern, komplexe Analysen | Architekturfragen, kniffliges Debugging, mehrstufige Konzepte |

**Multimodalität:** Gemini verarbeitet nicht nur Text, sondern auch **Screenshots, Fotos, PDFs, Audio, Video und Quellcode** direkt gemeinsam in einem Prompt.

## 3. Sicherheit, Datenschutz & Verantwortung
- **Datenschutz-Regel:** Keine Passwörter, API-Tokens, geheimen Verträge oder unanonymisierten Personendaten in öffentliche/ungeschützte KI-Chats kopieren.
- **Faktencheck:** Zahlen, Gesetzesbezüge, Zitate und technische Befehle immer gegen Primärquellen prüfen.
- **Bias & Ton:** KI-Antworten spiegeln Muster aus Trainingsdaten wider – kritisch lesen und an den eigenen Kontext anpassen.

---

## Checkliste
- [ ] Unterschied zwischen Suchmaschine und generativer KI verstanden
- [ ] Datenschutz-Grundregeln für den eigenen Alltag notiert
- [ ] Übung in [`uebung.md`](./uebung.md) abgeschlossen
