"""Quality-Gate-Prüfung für das interaktive KI-Lernstudio."""

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INTERACTIVE = ROOT / "interactive"


def load_studio_counts() -> dict:
    script = """
    const fs = require('fs');
    const vm = require('vm');
    const ctx = { window: {} };
    vm.createContext(ctx);
    for (const f of [
      'interactive/js/data-curriculum.js',
      'interactive/js/data-checkpoints.js',
      'interactive/js/data-labs.js',
      'interactive/js/data-flashcards.js',
      'interactive/js/data-mock.js',
    ]) {
      vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
    }
    const lessons = ctx.window.KI_CURRICULUM.modules.flatMap((m) => m.lessons);
    const out = {
      modules: ctx.window.KI_CURRICULUM.modules.length,
      lessons: lessons.length,
      rtdPaths: [
        ...ctx.window.KI_CURRICULUM.modules.map((m) => m.rtdPath),
        ...lessons.map((l) => l.rtdPath),
      ],
      cpSlots: ctx.window.KI_CHECKPOINTS.slots.length,
      cpQuestions: ctx.window.KI_CHECKPOINTS.questions.length,
      cpRubrics: ctx.window.KI_CHECKPOINTS.rubrics.length,
      reviewerDrills: ctx.window.KI_LABS.reviewerDrills.length,
      flashcards: ctx.window.KI_FLASHCARDS.length,
      mockQuestions: ctx.window.KI_MOCK_EXAM.questions.length,
    };
    console.log(JSON.stringify(out));
    """
    res = subprocess.run(
        ["node", "-e", script],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    return json.loads(res.stdout)


def main() -> int:
    required_files = [
        INTERACTIVE / "index.html",
        INTERACTIVE / "styles.css",
        INTERACTIVE / "js" / "app.js",
    ]
    for path in required_files:
        if not path.is_file():
            print(f"FEHLER: Datei fehlt: {path}")
            return 1

    counts = load_studio_counts()
    expected = {
        "modules": 6,
        "lessons": 24,
        "cpSlots": 4,
        "cpQuestions": 15,
        "cpRubrics": 3,
        "reviewerDrills": 24,
        "flashcards": 36,
        "mockQuestions": 30,
    }
    for key, exp in expected.items():
        if counts.get(key) != exp:
            print(f"FEHLER: Erwartet {key}={exp}, gefunden {counts.get(key)}")
            return 1

    # Prüfe, ob alle referenzierten RTD-Pfade realen Markdown-Dateien entsprechen
    for rtd_path in sorted(set(counts["rtdPaths"])):
        clean = rtd_path.strip("/")
        md_candidate_1 = ROOT / f"{clean}.md"
        md_candidate_2 = ROOT / clean / "README.md"
        if not (md_candidate_1.is_file() or md_candidate_2.is_file()):
            print(f"FEHLER: RTD-Deep-Link hat keine Quelldatei im Repo: {rtd_path}")
            return 1

    print("check_studio.py: Alle Studio-Daten, Zähler und RTD-Deep-Links sind gültig.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
