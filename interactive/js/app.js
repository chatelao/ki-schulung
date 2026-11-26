(function () {
  "use strict";

  const STORAGE_KEY = "ki_schulung_studio_v1";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function defaultState() {
    return {
      version: 1,
      track: "A",
      beamer: false,
      doneLessons: {},
      activeCp: "CP-0",
      checkpoints: {
        "CP-0": { answers: {}, confidence: {}, rubrics: {} },
        "CP-1": { answers: {}, confidence: {}, rubrics: {} },
        "CP-2": { answers: {}, confidence: {}, rubrics: {} },
        "CP-3": { answers: {}, confidence: {}, rubrics: {} }
      },
      reviewerAnswers: {},
      fcKnown: {}
    };
  }

  function loadState() {
    const base = defaultState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return base;
      return {
        ...base,
        ...parsed,
        doneLessons: parsed.doneLessons && typeof parsed.doneLessons === "object" ? parsed.doneLessons : {},
        checkpoints: {
          ...base.checkpoints,
          ...(parsed.checkpoints && typeof parsed.checkpoints === "object" ? parsed.checkpoints : {})
        },
        reviewerAnswers: parsed.reviewerAnswers && typeof parsed.reviewerAnswers === "object" ? parsed.reviewerAnswers : {},
        fcKnown: parsed.fcKnown && typeof parsed.fcKnown === "object" ? parsed.fcKnown : {}
      };
    } catch (_err) {
      return base;
    }
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_err) {
      // Ignore storage quota errors gracefully
    }
  }

  function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function copyToClipboard(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (btn) {
          const orig = btn.textContent;
          btn.textContent = "Kopiert!";
          setTimeout(() => {
            btn.textContent = orig;
          }, 1200);
        }
      });
    }
  }

  // ---------------- NAVIGATION & BEAMER ----------------
  const navButtons = Array.from(document.querySelectorAll(".nav-btn"));
  const views = Array.from(document.querySelectorAll(".view"));
  const labTabButtons = Array.from(document.querySelectorAll(".lab-tab-btn"));
  const labPanes = Array.from(document.querySelectorAll(".lab-pane"));
  const permalinkEl = document.getElementById("global-permalink");

  let currentView = "curriculum";
  let currentLab = "prompt-builder";

  function activateView(viewName, labName) {
    currentView = views.some((v) => v.id === "view-" + viewName) ? viewName : "curriculum";
    navButtons.forEach((btn) => {
      const active = btn.dataset.view === currentView;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    views.forEach((v) => {
      v.classList.toggle("active", v.id === "view-" + currentView);
    });

    if (currentView === "labs" && labName) {
      activateLab(labName);
    }

    const hash = currentView === "labs" ? `#labs/${currentLab}` : `#${currentView}`;
    if (permalinkEl) permalinkEl.href = hash;
  }

  function activateLab(labName) {
    currentLab = labPanes.some((p) => p.id === "lab-" + labName) ? labName : "prompt-builder";
    labTabButtons.forEach((btn) => {
      const active = btn.dataset.lab === currentLab;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    labPanes.forEach((p) => {
      p.classList.toggle("active", p.id === "lab-" + currentLab);
    });
    if (permalinkEl && currentView === "labs") {
      permalinkEl.href = `#labs/${currentLab}`;
    }
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      window.location.hash = view === "labs" ? `#labs/${currentLab}` : `#${view}`;
    });
  });

  labTabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.hash = `#labs/${btn.dataset.lab}`;
    });
  });

  function syncFromHash() {
    const raw = window.location.hash.replace(/^#/, "");
    if (!raw) return activateView("curriculum");
    if (raw.startsWith("labs/")) {
      return activateView("labs", raw.slice(5));
    }
    return activateView(raw);
  }

  window.addEventListener("hashchange", syncFromHash);

  if (permalinkEl) {
    permalinkEl.addEventListener("click", (e) => {
      e.preventDefault();
      const targetUrl = window.location.origin + window.location.pathname + permalinkEl.getAttribute("href");
      copyToClipboard(targetUrl, permalinkEl);
    });
  }

  const beamerBtn = document.getElementById("beamer-toggle-btn");
  function applyBeamer() {
    document.body.classList.toggle("beamer-mode", !!state.beamer);
    beamerBtn.setAttribute("aria-pressed", state.beamer ? "true" : "false");
  }
  beamerBtn.addEventListener("click", () => {
    state.beamer = !state.beamer;
    saveState();
    applyBeamer();
  });
  applyBeamer();

  // ---------------- VIEW 1: CURRICULUM ----------------
  const moduleFilterEl = document.getElementById("module-filter");
  const lessonSearchEl = document.getElementById("lesson-search");
  const trackSelectEl = document.getElementById("track-select");
  const trackBannerEl = document.getElementById("track-banner");
  const modulesContainerEl = document.getElementById("modules-container");
  const doneCountEl = document.getElementById("lessons-done-count");
  const donePctEl = document.getElementById("lessons-done-pct");
  const progressBarEl = document.getElementById("lessons-progress-bar");

  function initCurriculumFilters() {
    moduleFilterEl.innerHTML = `<option value="ALL">Alle 6 Module (24 Lektionen)</option>`;
    window.KI_CURRICULUM.modules.forEach((m) => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.title;
      moduleFilterEl.appendChild(opt);
    });
    trackSelectEl.value = state.track || "A";
  }

  function renderCurriculum() {
    const trackInfo = window.KI_CURRICULUM.tracks[state.track] || window.KI_CURRICULUM.tracks.A;
    trackBannerEl.innerHTML = `<strong>${escapeHtml(trackInfo.name)}:</strong> ${escapeHtml(trackInfo.description)}`;

    const allLessons = window.KI_CURRICULUM.modules.flatMap((m) => m.lessons);
    const doneTotal = allLessons.filter((l) => !!state.doneLessons[l.id]).length;
    const pct = allLessons.length ? Math.round((doneTotal / allLessons.length) * 100) : 0;
    doneCountEl.textContent = `${doneTotal} / ${allLessons.length}`;
    donePctEl.textContent = `${pct}%`;
    progressBarEl.style.width = `${pct}%`;

    const modFilter = moduleFilterEl.value || "ALL";
    const query = (lessonSearchEl.value || "").trim().toLowerCase();

    modulesContainerEl.innerHTML = "";
    window.KI_CURRICULUM.modules.forEach((mod) => {
      if (modFilter !== "ALL" && mod.id !== modFilter) return;

      const filtered = mod.lessons.filter((l) => {
        if (!query) return true;
        const hay = `${l.id} ${l.title} ${l.goal} ${l.trackA} ${l.trackB}`.toLowerCase();
        return hay.includes(query);
      });
      if (!filtered.length) return;

      const doneInMod = mod.lessons.filter((l) => !!state.doneLessons[l.id]).length;
      const card = document.createElement("article");
      card.className = "phase-card";
      card.innerHTML = `
        <div class="phase-head">
          <div>
            <h2>${escapeHtml(mod.title)}</h2>
            <span class="phase-meta">${escapeHtml(mod.duration)} &middot; ${doneInMod} / ${mod.lessons.length} abgeschlossen</span>
          </div>
          <a class="docs-link" href="${escapeHtml(window.KI_CURRICULUM.rtdBaseUrl + mod.rtdPath)}" target="_blank" rel="noopener">Modul im Handbuch &nearr;</a>
        </div>
        <div class="lesson-list"></div>
      `;

      const listEl = card.querySelector(".lesson-list");
      filtered.forEach((lesson) => {
        const isDone = !!state.doneLessons[lesson.id];
        const trackNote = state.track === "B" ? lesson.trackB : lesson.trackA;
        const item = document.createElement("div");
        item.className = `lesson-card${isDone ? " done" : ""}`;
        item.innerHTML = `
          <div class="lesson-top">
            <label class="lesson-check-label">
              <input type="checkbox" data-lesson-id="${escapeHtml(lesson.id)}" ${isDone ? "checked" : ""} />
              <span>${escapeHtml(lesson.title)}</span>
            </label>
            <span class="lesson-code">${escapeHtml(lesson.id)}</span>
          </div>
          <p class="lesson-goal">${escapeHtml(lesson.goal)}</p>
          <p class="lesson-track-note"><strong>${state.track === "B" ? "Track B" : "Track A"}:</strong> ${escapeHtml(trackNote)}</p>
          <div class="lesson-foot">
            <span>${lesson.minutes} Min.</span>
            <a href="${escapeHtml(window.KI_CURRICULUM.rtdBaseUrl + lesson.rtdPath)}" target="_blank" rel="noopener">Handbuch-Kapitel &nearr;</a>
          </div>
        `;
        item.querySelector("input").addEventListener("change", (e) => {
          if (e.target.checked) {
            state.doneLessons[lesson.id] = true;
          } else {
            delete state.doneLessons[lesson.id];
          }
          saveState();
          renderCurriculum();
        });
        listEl.appendChild(item);
      });

      modulesContainerEl.appendChild(card);
    });

    if (!modulesContainerEl.children.length) {
      modulesContainerEl.innerHTML = `<div class="callout callout-warn">Keine Lektionen für diesen Filter gefunden.</div>`;
    }
  }

  moduleFilterEl.addEventListener("change", renderCurriculum);
  lessonSearchEl.addEventListener("input", renderCurriculum);
  trackSelectEl.addEventListener("change", () => {
    state.track = trackSelectEl.value;
    saveState();
    renderCurriculum();
  });

  document.getElementById("export-state-btn").addEventListener("click", () => {
    downloadFile("ki-schulung-lernstand.json", JSON.stringify(state, null, 2), "application/json");
  });

  const importFileEl = document.getElementById("import-state-file");
  document.getElementById("import-state-btn").addEventListener("click", () => importFileEl.click());
  importFileEl.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(String(reader.result || "{}"));
        if (!imported || typeof imported !== "object") throw new Error("Ungültiges Format");
        state = {
          ...defaultState(),
          ...imported
        };
        saveState();
        initCurriculumFilters();
        applyBeamer();
        renderCurriculum();
        renderCheckpoints();
        renderReviewerDrill();
        renderFlashcard();
      } catch (_err) {
        alert("Die ausgewählte JSON-Datei konnte nicht geladen werden.");
      }
    };
    reader.readAsText(file);
    importFileEl.value = "";
  });

  document.getElementById("reset-lessons-btn").addEventListener("click", () => {
    if (!confirm("Lektions-Fortschritt wirklich zurücksetzen?")) return;
    state.doneLessons = {};
    saveState();
    renderCurriculum();
  });

  // ---------------- VIEW 2: CHECKPOINTS ----------------
  const cpStripEl = document.getElementById("cp-selector-strip");
  const cpWorkspaceEl = document.getElementById("cp-workspace");
  const cpChartEl = document.getElementById("cp-chart-container");
  const cpMatrixEl = document.getElementById("cp-domain-matrix");

  function computeCpStats(cpId) {
    const cpData = (state.checkpoints && state.checkpoints[cpId]) || { answers: {}, confidence: {}, rubrics: {} };
    const qs = window.KI_CHECKPOINTS.questions;
    let answered = 0;
    let correct = 0;
    let confTotal = 0;
    let confCount = 0;
    const byDomain = {};

    window.KI_CHECKPOINTS.domains.forEach((d) => {
      byDomain[d.id] = { total: 0, correct: 0 };
    });

    qs.forEach((q) => {
      byDomain[q.domain].total += 1;
      const ans = cpData.answers[q.id];
      if (typeof ans === "number") {
        answered += 1;
        if (ans === q.correct) {
          correct += 1;
          byDomain[q.domain].correct += 1;
        }
      }
      const conf = cpData.confidence[q.id];
      if (typeof conf === "number") {
        confTotal += conf;
        confCount += 1;
      }
    });

    const pct = qs.length ? Math.round((correct / qs.length) * 100) : 0;
    const confPct = confCount ? Math.round((confTotal / (confCount * 2)) * 100) : 0;
    return { answered, total: qs.length, correct, pct, confPct, byDomain };
  }

  function renderCpChart() {
    const slots = window.KI_CHECKPOINTS.slots;
    const statsList = slots.map((s) => computeCpStats(s.id));
    const width = 300;
    const height = 140;
    const padX = 28;
    const padY = 18;
    const stepX = (width - padX * 2) / (slots.length - 1);

    const scorePts = statsList
      .map((st, idx) => {
        const x = padX + idx * stepX;
        const y = height - padY - (st.pct / 100) * (height - padY * 2);
        return `${x},${y}`;
      })
      .join(" ");

    const confPts = statsList
      .map((st, idx) => {
        const x = padX + idx * stepX;
        const y = height - padY - (st.confPct / 100) * (height - padY * 2);
        return `${x},${y}`;
      })
      .join(" ");

    const labels = slots
      .map((s, idx) => {
        const x = padX + idx * stepX;
        return `<text x="${x}" y="${height - 2}" text-anchor="middle" font-size="10" fill="#707c8c">${escapeHtml(s.id)}</text>`;
      })
      .join("");

    const dots = statsList
      .map((st, idx) => {
        const x = padX + idx * stepX;
        const y = height - padY - (st.pct / 100) * (height - padY * 2);
        return `<circle cx="${x}" cy="${y}" r="4" fill="#2563eb" /><text x="${x}" y="${y - 7}" text-anchor="middle" font-size="9" fill="#1a222d">${st.pct}%</text>`;
      })
      .join("");

    cpChartEl.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Lernverlauf CP-0 bis CP-3">
        <line x1="${padX}" y1="${height - padY}" x2="${width - padX}" y2="${height - padY}" stroke="#c8c0b2" />
        <polyline fill="none" stroke="#0f6e6e" stroke-width="1.8" stroke-dasharray="4 3" points="${confPts}" />
        <polyline fill="none" stroke="#2563eb" stroke-width="2.5" points="${scorePts}" />
        ${dots}
        ${labels}
      </svg>
      <div class="muted-sm" style="margin-top:0.35rem;">Blau: Score (%) &middot; Gestrichelt: Confidence (%)</div>
    `;
  }

  function renderCheckpoints() {
    const activeId = state.activeCp || "CP-0";
    if (!state.checkpoints[activeId]) {
      state.checkpoints[activeId] = { answers: {}, confidence: {}, rubrics: {} };
    }
    const cpData = state.checkpoints[activeId];

    cpStripEl.innerHTML = "";
    window.KI_CHECKPOINTS.slots.forEach((slot) => {
      const st = computeCpStats(slot.id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `cp-pill${slot.id === activeId ? " active" : ""}`;
      btn.innerHTML = `<strong>${escapeHtml(slot.label)}</strong><span>${escapeHtml(slot.subtitle)} &middot; ${st.pct}% (${st.answered}/${st.total})</span>`;
      btn.addEventListener("click", () => {
        state.activeCp = slot.id;
        saveState();
        renderCheckpoints();
      });
      cpStripEl.appendChild(btn);
    });

    const stats = computeCpStats(activeId);
    cpWorkspaceEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.85rem;">
        <div>
          <h2 style="margin:0;">${escapeHtml(activeId)} — Standard-Benchmark</h2>
          <span class="muted-sm">Beantwortet: ${stats.answered}/${stats.total} &middot; Richtig: ${stats.correct} (${stats.pct}%)</span>
        </div>
        <button class="btn btn-sm btn-secondary" id="cp-clear-btn" type="button">Nur ${escapeHtml(activeId)} leeren</button>
      </div>
      <div id="cp-questions-host"></div>
      <h2 style="margin-top:1.25rem;">3 Praxis-Szenarien (Selbstbewertung)</h2>
      <div id="cp-rubrics-host"></div>
    `;

    const qHost = cpWorkspaceEl.querySelector("#cp-questions-host");
    window.KI_CHECKPOINTS.questions.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "question-card";
      const selected = cpData.answers[q.id];
      const conf = cpData.confidence[q.id];
      card.innerHTML = `
        <h3>${idx + 1}. [${escapeHtml(q.domain)}] ${escapeHtml(q.prompt)}</h3>
        <div class="options-list"></div>
        <div class="confidence-bar">
          <span>Sicherheit:</span>
          <label><input type="radio" name="conf-${escapeHtml(q.id)}" value="0" ${conf === 0 ? "checked" : ""} /> Unsicher</label>
          <label><input type="radio" name="conf-${escapeHtml(q.id)}" value="1" ${conf === 1 ? "checked" : ""} /> Mittel</label>
          <label><input type="radio" name="conf-${escapeHtml(q.id)}" value="2" ${conf === 2 ? "checked" : ""} /> Sicher</label>
        </div>
      `;
      const optList = card.querySelector(".options-list");
      q.options.forEach((optText, oIdx) => {
        const row = document.createElement("label");
        row.className = "option-row";
        row.innerHTML = `<input type="radio" name="cpq-${escapeHtml(q.id)}" value="${oIdx}" ${selected === oIdx ? "checked" : ""} /> <span>${escapeHtml(optText)}</span>`;
        row.querySelector("input").addEventListener("change", () => {
          cpData.answers[q.id] = oIdx;
          saveState();
          renderCheckpoints();
        });
        optList.appendChild(row);
      });
      card.querySelectorAll(`input[name="conf-${q.id}"]`).forEach((r) => {
        r.addEventListener("change", () => {
          cpData.confidence[q.id] = Number(r.value);
          saveState();
          renderCpChart();
        });
      });
      qHost.appendChild(card);
    });

    const rHost = cpWorkspaceEl.querySelector("#cp-rubrics-host");
    window.KI_CHECKPOINTS.rubrics.forEach((rub) => {
      const cur = cpData.rubrics[rub.id] || { note: "", score: "0" };
      const box = document.createElement("div");
      box.className = "question-card";
      box.innerHTML = `
        <h3>${escapeHtml(rub.title)}</h3>
        <p class="muted-sm">${escapeHtml(rub.prompt)}</p>
        <p class="muted-sm"><strong>Rubrik:</strong> ${escapeHtml(rub.criteria)}</p>
        <textarea rows="2" placeholder="Eigene Kurzantwort / Notiz...">${escapeHtml(cur.note)}</textarea>
        <div class="confidence-bar">
          <label>Selbsteinschätzung:
            <select>
              <option value="0" ${cur.score === "0" ? "selected" : ""}>Noch offen (0/2)</option>
              <option value="1" ${cur.score === "1" ? "selected" : ""}>Teilweise erfüllt (1/2)</option>
              <option value="2" ${cur.score === "2" ? "selected" : ""}>Voll erfüllt (2/2)</option>
            </select>
          </label>
        </div>
      `;
      const ta = box.querySelector("textarea");
      const sel = box.querySelector("select");
      ta.addEventListener("input", () => {
        cpData.rubrics[rub.id] = { note: ta.value, score: sel.value };
        saveState();
      });
      sel.addEventListener("change", () => {
        cpData.rubrics[rub.id] = { note: ta.value, score: sel.value };
        saveState();
      });
      rHost.appendChild(box);
    });

    cpWorkspaceEl.querySelector("#cp-clear-btn").addEventListener("click", () => {
      state.checkpoints[activeId] = { answers: {}, confidence: {}, rubrics: {} };
      saveState();
      renderCheckpoints();
    });

    cpMatrixEl.innerHTML = "";
    window.KI_CHECKPOINTS.domains.forEach((d) => {
      const dm = stats.byDomain[d.id];
      const dpct = dm.total ? Math.round((dm.correct / dm.total) * 100) : 0;
      const row = document.createElement("div");
      row.className = "domain-row";
      row.innerHTML = `<span>${escapeHtml(d.name)}</span><strong>${dm.correct}/${dm.total} (${dpct}%)</strong>`;
      cpMatrixEl.appendChild(row);
    });

    renderCpChart();
  }

  document.getElementById("export-cp-json").addEventListener("click", () => {
    downloadFile("ki-schulung-checkpoints.json", JSON.stringify(state.checkpoints, null, 2), "application/json");
  });

  document.getElementById("export-cp-md").addEventListener("click", () => {
    const lines = ["# KI-Schulung Checkpoint-Bericht", ""];
    window.KI_CHECKPOINTS.slots.forEach((s) => {
      const st = computeCpStats(s.id);
      lines.push(`- **${s.label}** (${s.subtitle}): ${st.correct}/${st.total} (${st.pct}%), Confidence ${st.confPct}%`);
    });
    downloadFile("ki-schulung-checkpoints.md", lines.join("\n"), "text/markdown");
  });

  // ---------------- VIEW 3: LAB A (PROMPT BUILDER) ----------------
  const pbRole = document.getElementById("pb-role");
  const pbContext = document.getElementById("pb-context");
  const pbTask = document.getElementById("pb-task");
  const pbFormat = document.getElementById("pb-format");
  const pbConstraints = document.getElementById("pb-constraints");
  const pbScoreBadge = document.getElementById("pb-score-badge");
  const pbFeedback = document.getElementById("pb-feedback");
  const pbPrivacyWarn = document.getElementById("pb-privacy-warn");
  const pbOutput = document.getElementById("pb-output");

  function updatePromptBuilder() {
    const fields = [
      { label: "Rolle", val: pbRole.value.trim(), weight: 20 },
      { label: "Kontext", val: pbContext.value.trim(), weight: 20 },
      { label: "Aufgabe", val: pbTask.value.trim(), weight: 25 },
      { label: "Format", val: pbFormat.value.trim(), weight: 20 },
      { label: "Einschränkungen", val: pbConstraints.value.trim(), weight: 15 }
    ];

    let score = 0;
    const missing = [];
    fields.forEach((f) => {
      if (f.val.length >= 6) {
        score += f.weight;
      } else {
        missing.push(f.label);
      }
    });

    pbScoreBadge.textContent = `Qualitätsscore: ${score} / 100`;
    if (missing.length === 0) {
      pbFeedback.className = "callout callout-ok";
      pbFeedback.textContent = "Alle 5 Prompt-Bausteine sind sauber ausgefüllt.";
    } else {
      pbFeedback.className = "callout callout-info";
      pbFeedback.textContent = `Fehlend oder zu kurz: ${missing.join(", ")}.`;
    }

    const fullText = [
      `**Rolle:** ${pbRole.value.trim() || "[OFFEN]"}`,
      `**Kontext:** ${pbContext.value.trim() || "[OFFEN]"}`,
      `**Aufgabe:** ${pbTask.value.trim() || "[OFFEN]"}`,
      `**Format:** ${pbFormat.value.trim() || "[OFFEN]"}`,
      `**Einschränkungen:** ${pbConstraints.value.trim() || "[OFFEN]"}`
    ].join("\n\n");

    pbOutput.textContent = fullText;

    const secretPattern = /(ghp_[A-Za-z0-9]{10,}|AIza[0-9A-Za-z\-_]{10,}|sk-[A-Za-z0-9]{10,}|passwort\s*[:=]|password\s*[:=]|DE\d{20}|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/i;
    if (secretPattern.test(fullText)) {
      pbPrivacyWarn.hidden = false;
      pbPrivacyWarn.textContent =
        "Datenschutz-Hinweis: Eingabe enthält potenziell sensible Muster (E-Mail, IBAN, Passwort oder API-Key). Bitte vor dem Versand anonymisieren!";
    } else {
      pbPrivacyWarn.hidden = true;
    }
  }

  [pbRole, pbContext, pbTask, pbFormat, pbConstraints].forEach((el) => {
    el.addEventListener("input", updatePromptBuilder);
  });

  document.querySelectorAll("[data-prompt-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = window.KI_LABS.promptPresets[btn.dataset.promptPreset];
      if (!p) return;
      pbRole.value = p.role;
      pbContext.value = p.context;
      pbTask.value = p.task;
      pbFormat.value = p.format;
      pbConstraints.value = p.constraints;
      updatePromptBuilder();
    });
  });

  document.getElementById("pb-clear-btn").addEventListener("click", () => {
    [pbRole, pbContext, pbTask, pbFormat, pbConstraints].forEach((el) => {
      el.value = "";
    });
    updatePromptBuilder();
  });

  document.getElementById("pb-copy-btn").addEventListener("click", (e) => {
    copyToClipboard(pbOutput.textContent, e.currentTarget);
  });

  // Load initial preset in Lab A
  document.querySelector('[data-prompt-preset="meeting"]').click();

  // ---------------- VIEW 3: LAB B (TOKEN VISUALIZER) ----------------
  const tokInput = document.getElementById("tok-input");
  const tokStats = document.getElementById("tok-stats");
  const tokChips = document.getElementById("tok-chips");
  const tokAdvice = document.getElementById("tok-model-advice");
  const chipPalette = ["#eff6ff", "#eef7f7", "#fef7ec", "#effaf3", "#f3f4f6"];

  function tokenizeHeuristic(text) {
    if (!text) return [];
    const parts = text.match(/[\wäöüÄÖÜß]{1,5}|[^\s\wäöüÄÖÜß]|\s+/g) || [];
    return parts.filter((t) => !/^\s+$/.test(t));
  }

  function updateTokenVisualizer() {
    const text = tokInput.value;
    const tokens = tokenizeHeuristic(text);
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;

    tokStats.innerHTML = `<strong>Statistik:</strong> ${chars} Zeichen &middot; ${words} Wörter &middot; ca. <strong>${tokens.length}</strong> geschätzte Tokens`;

    tokChips.innerHTML = "";
    tokens.slice(0, 140).forEach((tok, idx) => {
      const span = document.createElement("span");
      span.className = "token-chip";
      span.style.backgroundColor = chipPalette[idx % chipPalette.length];
      span.textContent = tok;
      tokChips.appendChild(span);
    });
    if (tokens.length > 140) {
      const more = document.createElement("span");
      more.className = "muted-sm";
      more.textContent = `... (+${tokens.length - 140} weitere Tokens)`;
      tokChips.appendChild(more);
    }

    const isCodeOrYaml = /permissions:|branches:|def |function |\{/.test(text);
    tokAdvice.innerHTML = isCodeOrYaml
      ? "<strong>Modell-Empfehlung:</strong> Strukturierter Code/YAML erkannt. <em>Gemini Flash</em> reicht für schnelle Syntaxchecks; <em>Gemini Pro</em> empfiehlt sich bei kniffliger Fehlersuche."
      : "<strong>Modell-Empfehlung:</strong> Kurzer bis mittlerer Text. <em>Gemini Flash</em> eignet sich ideal für Zusammenfassungen; <em>Gemini Pro</em> für tiefgehende Widerspruchs- und Risikoanalysen.";
  }

  tokInput.addEventListener("input", updateTokenVisualizer);
  document.querySelectorAll("[data-token-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      tokInput.value = window.KI_LABS.tokenPresets[btn.dataset.tokenPreset] || "";
      updateTokenVisualizer();
    });
  });
  document.querySelector('[data-token-preset="richtlinie"]').click();

  // ---------------- VIEW 3: LAB C (AGENT SIMULATOR) ----------------
  const agentGoalEl = document.getElementById("agent-goal");
  const agentCriteriaEl = document.getElementById("agent-criteria");
  const agentHitlEl = document.getElementById("agent-hitl");
  const agentRunBtn = document.getElementById("agent-run-btn");
  const agentApproveBtn = document.getElementById("agent-approve-btn");
  const agentOutputEl = document.getElementById("agent-output");
  let activeAgentSteps = [];

  function loadAgentPreset(key) {
    const p = window.KI_LABS.agentPresets[key];
    if (!p) return;
    agentGoalEl.value = p.goal;
    agentCriteriaEl.value = p.criteria;
    activeAgentSteps = p.steps.slice();
    agentApproveBtn.hidden = true;
    agentOutputEl.textContent = "Bereit. Klicke auf 'Agent-Ablauf simulieren'.";
  }

  document.querySelectorAll("[data-agent-preset]").forEach((btn) => {
    btn.addEventListener("click", () => loadAgentPreset(btn.dataset.agentPreset));
  });

  agentRunBtn.addEventListener("click", () => {
    const hitl = agentHitlEl.checked;
    const header = [
      `> BRIEFING: ${agentGoalEl.value.trim()}`,
      `> AKZEPTANZKRITERIEN:\n${agentCriteriaEl.value.trim()}`,
      "--------------------------------------------------"
    ];
    if (hitl && activeAgentSteps.length > 3) {
      const partial = activeAgentSteps.slice(0, 3);
      agentOutputEl.textContent = [...header, ...partial, "", "[PAUSE] Human-in-the-Loop aktiv: Bitte Diff/Plan prüfen und freigeben."].join("\n");
      agentApproveBtn.hidden = false;
    } else {
      agentOutputEl.textContent = [...header, ...activeAgentSteps, "", "[DONE] Alle Akzeptanzkriterien verifiziert."].join("\n");
      agentApproveBtn.hidden = true;
    }
  });

  agentApproveBtn.addEventListener("click", () => {
    const rest = activeAgentSteps.slice(3);
    agentOutputEl.textContent += "\n\n[APPROVED] Freigabe durch Reviewer erteilt.\n" + rest.join("\n") + "\n\n[DONE] Vorgang sauber abgeschlossen.";
    agentApproveBtn.hidden = true;
  });

  loadAgentPreset("docs");

  // ---------------- VIEW 3: LAB D (HUMAN REVIEWER DRILL) ----------------
  const reviewerFilterEl = document.getElementById("reviewer-filter-select");
  const reviewerListEl = document.getElementById("reviewer-list");
  const reviewerScoreEl = document.getElementById("reviewer-score-val");

  function renderReviewerDrill() {
    const filter = reviewerFilterEl.value || "ALL";
    const allDrills = window.KI_LABS.reviewerDrills;
    const filtered = allDrills.filter((d) => filter === "ALL" || d.category === filter);

    let answered = 0;
    let correct = 0;
    allDrills.forEach((d) => {
      const picked = state.reviewerAnswers[d.id];
      if (picked) {
        answered += 1;
        if (picked === d.expected) correct += 1;
      }
    });
    reviewerScoreEl.textContent = `${correct} / ${answered} (gesamt ${allDrills.length})`;

    reviewerListEl.innerHTML = "";
    filtered.forEach((d) => {
      const picked = state.reviewerAnswers[d.id];
      const card = document.createElement("div");
      card.className = "drill-card";
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <strong>${escapeHtml(d.id)}: ${escapeHtml(d.title)}</strong>
          <span class="lesson-code">${escapeHtml(d.category)}</span>
        </div>
        <pre>${escapeHtml(d.snippet)}</pre>
        <div class="drill-actions">
          <button class="btn btn-sm" data-choice="ok" type="button">Korrekt / Sicher</button>
          <button class="btn btn-sm" data-choice="risk" type="button">Halluzination / Risiko</button>
          <button class="btn btn-sm" data-choice="error" type="button">Syntax- / Pipeline-Fehler</button>
        </div>
        <div class="drill-feedback" hidden></div>
      `;

      const fb = card.querySelector(".drill-feedback");
      function applyChoice(choice) {
        const isRight = choice === d.expected;
        fb.hidden = false;
        fb.className = `drill-feedback ${isRight ? "callout-ok" : "callout-danger"}`;
        fb.textContent = (isRight ? "Richtig! " : "Nicht ganz. ") + d.explanation;
      }
      if (picked) applyChoice(picked);

      card.querySelectorAll("[data-choice]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.reviewerAnswers[d.id] = btn.dataset.choice;
          saveState();
          renderReviewerDrill();
        });
      });

      reviewerListEl.appendChild(card);
    });
  }

  reviewerFilterEl.addEventListener("change", renderReviewerDrill);
  renderReviewerDrill();

  // ---------------- VIEW 3: LAB E (DOCS CI/CD GENERATOR) ----------------
  const cicdToolEl = document.getElementById("cicd-tool");
  const cicdTargetEl = document.getElementById("cicd-target");
  const cicdBranchEl = document.getElementById("cicd-branch");
  const cicdLycheeEl = document.getElementById("cicd-lychee");
  const cicdOut1 = document.getElementById("cicd-out-1");
  const cicdOut2 = document.getElementById("cicd-out-2");
  const cicdTitle1 = document.getElementById("cicd-primary-title");
  const cicdTitle2 = document.getElementById("cicd-secondary-title");

  function buildCicdSnippets() {
    const tool = cicdToolEl.value;
    const target = cicdTargetEl.value;
    const branch = (cicdBranchEl.value || "main").trim() || "main";
    const withLychee = cicdLycheeEl.checked;

    const buildStepMap = {
      mkdocs: `      - uses: actions/setup-python@v5\n        with:\n          python-version: "3.12"\n      - run: pip install mkdocs mkdocs-material\n      - run: mkdocs build --strict -d _site`,
      html: `      - name: Statische Dateien kopieren\n        run: |\n          mkdir -p _site\n          cp -r docs/* _site/`,
      sphinx: `      - uses: actions/setup-python@v5\n        with:\n          python-version: "3.12"\n      - run: pip install sphinx\n      - run: sphinx-build -b html docs _site`,
      docusaurus: `      - uses: actions/setup-node@v4\n        with:\n          node-version: "22"\n      - run: npm ci && npm run build\n      - run: mv build _site`
    };

    const lycheeStep = withLychee
      ? `\n      - name: Links in Markdown prüfen\n        uses: lycheeverse/lychee-action@v2\n        with:\n          args: --no-progress --offline "**/*.md"\n          fail: true`
      : "";

    const pagesYml = `name: Build and Deploy Docs to GitHub Pages

on:
  push:
    branches: ["${branch}"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
${buildStepMap[tool]}${lycheeStep}
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: "_site"

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4`;

    const rtdCmdMap = {
      mkdocs: `    - pip install --no-cache-dir mkdocs mkdocs-material\n    - mkdocs build --strict -d "$READTHEDOCS_OUTPUT/html"`,
      html: `    - mkdir -p "$READTHEDOCS_OUTPUT/html"\n    - cp -r docs/* "$READTHEDOCS_OUTPUT/html/"`,
      sphinx: `    - pip install --no-cache-dir sphinx\n    - sphinx-build -b html docs "$READTHEDOCS_OUTPUT/html"`,
      docusaurus: `    - npm ci && npm run build\n    - mkdir -p "$READTHEDOCS_OUTPUT/html"\n    - cp -r build/* "$READTHEDOCS_OUTPUT/html/"`
    };

    const rtdYaml = `version: 2

build:
  os: ubuntu-24.04
  tools:
    python: "3.12"${tool === "docusaurus" ? '\n    nodejs: "22"' : ""}
  commands:
${rtdCmdMap[tool]}`;

    if (target === "rtd") {
      cicdTitle1.textContent = ".readthedocs.yaml";
      cicdOut1.textContent = rtdYaml;
      cicdTitle2.textContent = ".github/workflows/docs-ci.yml (Optional CI)";
      cicdOut2.textContent = `name: Docs Quality CI\non:\n  pull_request:\n    branches: ["${branch}"]\npermissions:\n  contents: read\njobs:\n  check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n${buildStepMap[tool]}${lycheeStep}`;
    } else if (target === "ghp") {
      cicdTitle1.textContent = ".github/workflows/pages.yml";
      cicdOut1.textContent = pagesYml;
      cicdTitle2.textContent = "Hinweis (Nur GitHub Pages)";
      cicdOut2.textContent = "# Kein Read the Docs ausgewählt.\n# In GitHub unter Settings -> Pages -> Source auf 'GitHub Actions' stellen.";
    } else {
      cicdTitle1.textContent = ".github/workflows/pages.yml";
      cicdOut1.textContent = pagesYml;
      cicdTitle2.textContent = ".readthedocs.yaml";
      cicdOut2.textContent = rtdYaml;
    }
  }

  [cicdToolEl, cicdTargetEl, cicdBranchEl, cicdLycheeEl].forEach((el) => {
    el.addEventListener("input", buildCicdSnippets);
    el.addEventListener("change", buildCicdSnippets);
  });

  document.getElementById("cicd-copy-1").addEventListener("click", (e) => copyToClipboard(cicdOut1.textContent, e.currentTarget));
  document.getElementById("cicd-copy-2").addEventListener("click", (e) => copyToClipboard(cicdOut2.textContent, e.currentTarget));
  document.getElementById("cicd-dl-1").addEventListener("click", () => {
    const fn = cicdTitle1.textContent.includes("readthedocs") ? ".readthedocs.yaml" : "pages.yml";
    downloadFile(fn, cicdOut1.textContent, "text/yaml");
  });
  document.getElementById("cicd-dl-2").addEventListener("click", () => {
    const fn = cicdTitle2.textContent.includes("readthedocs") ? ".readthedocs.yaml" : "docs-ci.yml";
    downloadFile(fn, cicdOut2.textContent, "text/yaml");
  });
  buildCicdSnippets();

  // ---------------- VIEW 4: FLASHCARDS ----------------
  const fcFilterEl = document.getElementById("fc-domain-filter");
  const fcShuffleBtn = document.getElementById("fc-shuffle-btn");
  const fcCardEl = document.getElementById("flashcard-card");
  const fcDomainTagEl = document.getElementById("fc-domain-tag");
  const fcCounterEl = document.getElementById("fc-counter");
  const fcBodyEl = document.getElementById("fc-body");
  const fcKnownBtn = document.getElementById("fc-known-btn");

  let fcDeck = window.KI_FLASHCARDS.slice();
  let fcIndex = 0;
  let fcFlipped = false;

  function initFlashcardFilter() {
    fcFilterEl.innerHTML = `<option value="ALL">Alle Module (36 Karten)</option>`;
    window.KI_CHECKPOINTS.domains.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = d.name;
      fcFilterEl.appendChild(opt);
    });
  }

  function applyFlashcardFilter() {
    const dom = fcFilterEl.value || "ALL";
    fcDeck = window.KI_FLASHCARDS.filter((c) => dom === "ALL" || c.domain === dom);
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    if (!fcDeck.length) {
      fcBodyEl.textContent = "Keine Karten vorhanden.";
      return;
    }
    const card = fcDeck[fcIndex];
    const known = !!state.fcKnown[card.id];
    fcDomainTagEl.textContent = `${card.domain} · ${card.id}${known ? " (Gewusst)" : ""}`;
    fcCounterEl.textContent = `Karte ${fcIndex + 1} / ${fcDeck.length}`;
    fcBodyEl.textContent = fcFlipped ? `Antwort:\n${card.back}` : card.front;
    fcKnownBtn.textContent = known ? "Als offen markieren" : "Als gewusst markieren";
  }

  function flipCard() {
    fcFlipped = !fcFlipped;
    renderFlashcard();
  }

  function stepCard(delta) {
    if (!fcDeck.length) return;
    fcIndex = (fcIndex + delta + fcDeck.length) % fcDeck.length;
    fcFlipped = false;
    renderFlashcard();
  }

  fcCardEl.addEventListener("click", flipCard);
  fcCardEl.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      flipCard();
    } else if (e.code === "ArrowRight") {
      stepCard(1);
    } else if (e.code === "ArrowLeft") {
      stepCard(-1);
    }
  });
  document.getElementById("fc-flip-btn").addEventListener("click", flipCard);
  document.getElementById("fc-prev-btn").addEventListener("click", () => stepCard(-1));
  document.getElementById("fc-next-btn").addEventListener("click", () => stepCard(1));
  fcFilterEl.addEventListener("change", applyFlashcardFilter);
  fcShuffleBtn.addEventListener("click", () => {
    for (let i = fcDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fcDeck[i], fcDeck[j]] = [fcDeck[j], fcDeck[i]];
    }
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
  });
  fcKnownBtn.addEventListener("click", () => {
    const card = fcDeck[fcIndex];
    if (!card) return;
    if (state.fcKnown[card.id]) {
      delete state.fcKnown[card.id];
    } else {
      state.fcKnown[card.id] = true;
    }
    saveState();
    renderFlashcard();
  });

  // ---------------- VIEW 5: TIMED MOCK EXAM ----------------
  const mockRoot = document.getElementById("mock-root");
  let mockSession = null;
  let mockTimerHandle = null;

  function formatSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function startMock(questionsSubset) {
    if (mockTimerHandle) clearInterval(mockTimerHandle);
    const qs = (questionsSubset || window.KI_MOCK_EXAM.questions).slice();
    mockSession = {
      questions: qs,
      idx: 0,
      answers: {},
      remainingSec: window.KI_MOCK_EXAM.durationMinutes * 60,
      submitted: false
    };
    mockTimerHandle = setInterval(() => {
      if (!mockSession || mockSession.submitted) return;
      mockSession.remainingSec -= 1;
      const timerEl = document.getElementById("mock-timer-val");
      if (timerEl) timerEl.textContent = formatSeconds(Math.max(0, mockSession.remainingSec));
      if (mockSession.remainingSec <= 0) {
        submitMock();
      }
    }, 1000);
    renderMock();
  }

  function submitMock() {
    if (!mockSession) return;
    mockSession.submitted = true;
    if (mockTimerHandle) clearInterval(mockTimerHandle);
    renderMock();
  }

  function isQuestionCorrect(q, pickedArr) {
    const a = (pickedArr || []).slice().sort((x, y) => x - y);
    const b = q.correct.slice().sort((x, y) => x - y);
    return a.length === b.length && a.every((v, i) => v === b[i]);
  }

  function renderMock() {
    if (!mockSession) {
      mockRoot.innerHTML = `
        <div class="cp-panel">
          <h2>Bereit für den Praxis-Test?</h2>
          <p class="lead">30 Fragen über alle 6 Module (inkl. Prompting, Antigravity-Workflows und Docs-CI/CD). Zeitlimit: 45 Minuten.</p>
          <button class="btn btn-primary" id="mock-start-btn" type="button" style="margin-top:0.75rem;">Praxis-Test starten</button>
        </div>
      `;
      mockRoot.querySelector("#mock-start-btn").addEventListener("click", () => startMock());
      return;
    }

    if (mockSession.submitted) {
      let correctCount = 0;
      const wrongQs = [];
      const byDomain = {};
      window.KI_CHECKPOINTS.domains.forEach((d) => {
        byDomain[d.id] = { total: 0, correct: 0 };
      });

      mockSession.questions.forEach((q) => {
        if (byDomain[q.domain]) byDomain[q.domain].total += 1;
        if (isQuestionCorrect(q, mockSession.answers[q.id])) {
          correctCount += 1;
          if (byDomain[q.domain]) byDomain[q.domain].correct += 1;
        } else {
          wrongQs.push(q);
        }
      });

      const pct = Math.round((correctCount / mockSession.questions.length) * 100);
      const passed = pct >= window.KI_MOCK_EXAM.passPercent;

      mockRoot.innerHTML = `
        <div class="cp-panel">
          <div class="callout ${passed ? "callout-ok" : "callout-danger"}">
            <strong>${passed ? "Bestanden!" : "Noch nicht bestanden:"}</strong> ${correctCount} / ${mockSession.questions.length} richtig (${pct}%, Bestehensgrenze: ${window.KI_MOCK_EXAM.passPercent}%).
          </div>
          <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-bottom:1rem;">
            <button class="btn btn-primary" id="mock-restart-btn" type="button">Neuer Test (alle 30 Fragen)</button>
            ${wrongQs.length ? `<button class="btn btn-secondary" id="mock-retry-wrong-btn" type="button">Nur ${wrongQs.length} falsche Fragen wiederholen</button>` : ""}
          </div>
          <h3>Auswertung nach Modul</h3>
          <div id="mock-domain-summary" style="margin-bottom:1rem;"></div>
          <h3>Detail-Review</h3>
          <div id="mock-review-list"></div>
        </div>
      `;

      const domBox = mockRoot.querySelector("#mock-domain-summary");
      Object.entries(byDomain).forEach(([dom, val]) => {
        if (!val.total) return;
        const r = document.createElement("div");
        r.className = "domain-row";
        r.innerHTML = `<span>${escapeHtml(dom)}</span><strong>${val.correct} / ${val.total}</strong>`;
        domBox.appendChild(r);
      });

      const revList = mockRoot.querySelector("#mock-review-list");
      mockSession.questions.forEach((q, idx) => {
        const ok = isQuestionCorrect(q, mockSession.answers[q.id]);
        const box = document.createElement("div");
        box.className = "question-card";
        const correctLabels = q.correct.map((ci) => q.options[ci]).join(" | ");
        box.innerHTML = `
          <h3>${idx + 1}. [${escapeHtml(q.domain)}] ${escapeHtml(q.prompt)}</h3>
          <div class="callout ${ok ? "callout-ok" : "callout-danger"}" style="margin:0.4rem 0 0;">
            <strong>${ok ? "Richtig" : "Falsch"}</strong> &middot; Lösung: ${escapeHtml(correctLabels)}<br/>
            <span>${escapeHtml(q.explanation)}</span>
          </div>
        `;
        revList.appendChild(box);
      });

      mockRoot.querySelector("#mock-restart-btn").addEventListener("click", () => startMock());
      const retryBtn = mockRoot.querySelector("#mock-retry-wrong-btn");
      if (retryBtn) retryBtn.addEventListener("click", () => startMock(wrongQs));
      return;
    }

    const q = mockSession.questions[mockSession.idx];
    const picked = mockSession.answers[q.id] || [];

    mockRoot.innerHTML = `
      <div class="mock-topbar">
        <strong>Frage ${mockSession.idx + 1} / ${mockSession.questions.length} (${escapeHtml(q.domain)})</strong>
        <span>Restzeit: <strong id="mock-timer-val">${formatSeconds(mockSession.remainingSec)}</strong></span>
        <button class="btn btn-primary btn-sm" id="mock-submit-btn" type="button">Test auswerten</button>
      </div>
      <div class="mock-nav-dots" id="mock-dots"></div>
      <div class="cp-panel">
        <h2 style="margin-top:0;">${escapeHtml(q.prompt)}</h2>
        <div class="options-list" id="mock-options"></div>
        <div style="display:flex;justify-content:space-between;margin-top:1rem;">
          <button class="btn btn-secondary" id="mock-prev-btn" type="button">&larr; Zurück</button>
          <button class="btn btn-primary" id="mock-next-btn" type="button">Weiter &rarr;</button>
        </div>
      </div>
    `;

    const dotsHost = mockRoot.querySelector("#mock-dots");
    mockSession.questions.forEach((mq, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      const hasAns = (mockSession.answers[mq.id] || []).length > 0;
      dot.className = `mock-dot${hasAns ? " answered" : ""}${i === mockSession.idx ? " current" : ""}`;
      dot.textContent = String(i + 1);
      dot.addEventListener("click", () => {
        mockSession.idx = i;
        renderMock();
      });
      dotsHost.appendChild(dot);
    });

    const optHost = mockRoot.querySelector("#mock-options");
    q.options.forEach((optText, oIdx) => {
      const row = document.createElement("label");
      row.className = "option-row";
      const checked = picked.includes(oIdx);
      const inputType = q.multi ? "checkbox" : "radio";
      row.innerHTML = `<input type="${inputType}" name="mock-q" value="${oIdx}" ${checked ? "checked" : ""} /> <span>${escapeHtml(optText)}</span>`;
      row.querySelector("input").addEventListener("change", (e) => {
        if (q.multi) {
          const set = new Set(mockSession.answers[q.id] || []);
          if (e.target.checked) set.add(oIdx);
          else set.delete(oIdx);
          mockSession.answers[q.id] = Array.from(set);
        } else {
          mockSession.answers[q.id] = [oIdx];
        }
        renderMock();
      });
      optHost.appendChild(row);
    });

    mockRoot.querySelector("#mock-prev-btn").addEventListener("click", () => {
      mockSession.idx = Math.max(0, mockSession.idx - 1);
      renderMock();
    });
    mockRoot.querySelector("#mock-next-btn").addEventListener("click", () => {
      mockSession.idx = Math.min(mockSession.questions.length - 1, mockSession.idx + 1);
      renderMock();
    });
    mockRoot.querySelector("#mock-submit-btn").addEventListener("click", submitMock);
  }

  // ---------------- INIT ----------------
  initCurriculumFilters();
  renderCurriculum();
  renderCheckpoints();
  initFlashcardFilter();
  applyFlashcardFilter();
  renderMock();
  syncFromHash();
})();
