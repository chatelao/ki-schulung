"""Unit-Tests für das Referenzskript in Modul 4."""

import unittest
from pathlib import Path

from auswertung_beispiel import werte_feedback_aus


class TestAuswertungBeispiel(unittest.TestCase):
    def test_beispieldaten_kennzahlen(self) -> None:
        csv_pfad = Path(__file__).parent / "beispiel-daten.csv"
        ergebnis = werte_feedback_aus(csv_pfad)

        self.assertEqual(ergebnis["gesamt_eintraege"], 12)
        self.assertAlmostEqual(ergebnis["gesamt_durchschnitt_bewertung"], 4.42, places=2)
        self.assertIn("Modul 1", ergebnis["module"])
        self.assertEqual(ergebnis["module"]["Modul 1"]["anzahl"], 3)
        self.assertAlmostEqual(
            ergebnis["module"]["Modul 1"]["durchschnitt_bewertung"], 4.67, places=2
        )


if __name__ == "__main__":
    unittest.main()
