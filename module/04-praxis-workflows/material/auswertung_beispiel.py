"""Referenzskript für Modul 4: Auswertung der Feedback-CSV ohne externe Abhängigkeiten."""

import csv
from collections import defaultdict
from pathlib import Path
from typing import Any


def werte_feedback_aus(csv_pfad: Path) -> dict[str, Any]:
    """Liest eine Feedback-CSV ein und berechnet Kennzahlen pro Modul und gesamt."""
    gruppen: dict[str, list[tuple[int, int]]] = defaultdict(list)

    with csv_pfad.open("r", encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        for zeile in reader:
            modul = zeile["modul"].strip()
            bewertung = int(zeile["bewertung_1_bis_5"])
            zeit = int(zeile["zeitaufwand_min"])
            gruppen[modul].append((bewertung, zeit))

    module_ergebnis: dict[str, dict[str, float | int]] = {}
    alle_bewertungen: list[int] = []
    alle_zeiten: list[int] = []

    for modul, eintraege in sorted(gruppen.items()):
        bewertungen = [b for b, _ in eintraege]
        zeiten = [z for _, z in eintraege]
        alle_bewertungen.extend(bewertungen)
        alle_zeiten.extend(zeiten)

        module_ergebnis[modul] = {
            "anzahl": len(eintraege),
            "durchschnitt_bewertung": round(sum(bewertungen) / len(bewertungen), 2),
            "durchschnitt_zeit_min": round(sum(zeiten) / len(zeiten), 1),
        }

    gesamt_anzahl = len(alle_bewertungen)
    return {
        "gesamt_eintraege": gesamt_anzahl,
        "gesamt_durchschnitt_bewertung": (
            round(sum(alle_bewertungen) / gesamt_anzahl, 2) if gesamt_anzahl else 0.0
        ),
        "gesamt_durchschnitt_zeit_min": (
            round(sum(alle_zeiten) / gesamt_anzahl, 1) if gesamt_anzahl else 0.0
        ),
        "module": module_ergebnis,
    }


if __name__ == "__main__":
    standard_csv = Path(__file__).parent / "beispiel-daten.csv"
    ergebnis = werte_feedback_aus(standard_csv)
    print(f"Gesamt-Einträge: {ergebnis['gesamt_eintraege']}")
    print(f"Gesamt-Bewertung: {ergebnis['gesamt_durchschnitt_bewertung']} / 5")
    for modul, werte in ergebnis["module"].items():
        print(
            f"- {modul}: {werte['durchschnitt_bewertung']} / 5 "
            f"({werte['anzahl']} Rückmeldungen, Ø {werte['durchschnitt_zeit_min']} Min.)"
        )
