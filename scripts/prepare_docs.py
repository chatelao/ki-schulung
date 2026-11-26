"""Bereitet das temporäre docs/-Verzeichnis für MkDocs aus den bestehenden Repo-Dateien vor."""

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"


def main() -> None:
    if DOCS.exists():
        shutil.rmtree(DOCS)
    DOCS.mkdir(parents=True)

    # Startseite und Lernplan kopieren
    shutil.copy2(ROOT / "README.md", DOCS / "index.md")
    shutil.copy2(ROOT / "lernplan.md", DOCS / "lernplan.md")

    # Module, Vorlagen und Beispiele kopieren
    for folder in ("module", "vorlagen", "examples"):
        src = ROOT / folder
        if src.exists():
            shutil.copytree(src, DOCS / folder)


if __name__ == "__main__":
    main()
    print(f"Docs vorbereitet unter: {DOCS}")
