<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PPWR Navigator — Company A Europe</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  :root {
    --ink: #0d1117;
    --paper: #f5f3ee;
    --cream: #ede9e0;
    --sg-red: #e63329;
    --sg-dark: #1a1a2e;
    --amber: #f59e0b;
    --green: #16a34a;
    --blue: #1d6fa4;
    --light-blue: #e8f4fd;
    --warn: #dc2626;
    --muted: #6b7280;
    --border: #d4cfc4;
    --card: #ffffff;
    --shadow: 0 2px 16px rgba(13,17,23,0.08);
    --shadow-lg: 0 8px 40px rgba(13,17,23,0.14);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
    font-size: 15px;
    line-height: 1.6;
  }

  /* ── HEADER ── */
  header {
    background: var(--sg-dark);
    color: white;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .logo-mark {
    width: 36px; height: 36px;
    background: var(--sg-red);
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 13px;
    letter-spacing: -0.5px;
  }
  .logo-text {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: -0.3px;
  }
  .logo-sub {
    font-size: 11px;
    font-weight: 300;
    opacity: 0.6;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: -2px;
  }
  .header-badge {
    background: rgba(230,51,41,0.2);
    border: 1px solid rgba(230,51,41,0.4);
    color: #ff8a84;
    font-size: 11px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 20px;
    letter-spacing: 0.5px;
  }

  /* ── APP SHELL: sidebar layout ── */
  .app-shell {
    display: flex;
    min-height: calc(100vh - 64px);
  }

  /* ── LEFT SIDEBAR NAV ── */
  nav {
    width: 210px;
    flex-shrink: 0;
    background: white;
    border-right: 2px solid var(--border);
    position: sticky;
    top: 64px;
    height: calc(100vh - 64px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0 28px;
    z-index: 99;
  }
  nav::-webkit-scrollbar { width: 0; }

  .nav-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: var(--border);
    padding: 16px 18px 5px;
    pointer-events: none;
  }

  .nav-btn {
    background: none;
    border: none;
    border-left: 3px solid transparent;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--muted);
    padding: 9px 18px;
    cursor: pointer;
    white-space: nowrap;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    transition: all 0.15s;
    letter-spacing: 0.1px;
  }
  .nav-btn:hover {
    color: var(--ink);
    background: var(--paper);
  }
  .nav-btn.active {
    color: var(--sg-red);
    border-left-color: var(--sg-red);
    background: #fff5f5;
    font-weight: 600;
  }

  /* ── MAIN CONTENT AREA ── */
  .main-content {
    flex: 1;
    min-width: 0;
    overflow-x: hidden;
  }

  /* ── SECTIONS ── */
  .section { display: none; padding: 36px 36px 60px; max-width: 1060px; }
  .section.active { display: block; }

  /* ── CARDS ── */
  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    box-shadow: var(--shadow);
  }
  .card-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 16px;
    letter-spacing: -0.3px;
  }

  /* ── OVERVIEW ── */
  .hero-banner {
    background: linear-gradient(135deg, var(--sg-dark) 0%, #2d2d5e 60%, #1d3a6b 100%);
    color: white;
    border-radius: 16px;
    padding: 40px 44px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
  }
  .hero-banner::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 260px; height: 260px;
    background: rgba(230,51,41,0.15);
    border-radius: 50%;
  }
  .hero-banner::after {
    content: '';
    position: absolute;
    bottom: -40px; left: 200px;
    width: 160px; height: 160px;
    background: rgba(255,255,255,0.04);
    border-radius: 50%;
  }
  .hero-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.6;
    margin-bottom: 12px;
  }
  .hero-title {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 36px;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 14px;
  }
  .hero-title span { color: #ff6b63; }
  .hero-desc {
    max-width: 640px;
    opacity: 0.8;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 28px;
  }
  .hero-stats {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }
  .hero-stat { }
  .hero-stat-num {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 28px;
    color: #ff6b63;
    line-height: 1;
  }
  .hero-stat-label {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 3px;
  }

  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 24px; }
  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 24px; }
  @media(max-width: 780px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }

  .pillar-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid var(--border);
    border-top: 4px solid var(--sg-red);
    box-shadow: var(--shadow);
  }
  .pillar-num {
    font-family: 'Syne', sans-serif;
    font-size: 40px;
    font-weight: 800;
    color: var(--border);
    line-height: 1;
    margin-bottom: 8px;
  }
  .pillar-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 10px;
  }

  .timeline-bar {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 24px;
    box-shadow: var(--shadow);
  }
  .timeline-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 24px;
  }
  .timeline-track {
    position: relative;
    padding-bottom: 8px;
  }
  .timeline-line {
    position: absolute;
    top: 18px;
    left: 0; right: 0;
    height: 3px;
    background: var(--border);
    z-index: 0;
  }
  .timeline-items {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .tl-item { text-align: center; flex: 1; }
  .tl-dot {
    width: 36px; height: 36px;
    border-radius: 50%;
    margin: 0 auto 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700;
    border: 3px solid white;
    box-shadow: 0 0 0 2px var(--border);
  }
  .tl-dot.past { background: var(--green); color: white; }
  .tl-dot.near { background: var(--amber); color: white; }
  .tl-dot.future { background: var(--border); color: var(--muted); }
  .tl-dot.critical { background: var(--sg-red); color: white; }
  .tl-year { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; }
  .tl-label { font-size: 11px; color: var(--muted); margin-top: 4px; max-width: 90px; margin-left: auto; margin-right: auto; line-height: 1.4; }

  /* ── COUNTRY MAP ── */
  .country-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  @media(max-width: 900px) { .country-grid { grid-template-columns: repeat(2,1fr); } }
  .country-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
  }
  .country-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
  .country-card.selected { border-color: var(--sg-red); box-shadow: 0 0 0 3px rgba(230,51,41,0.15); }
  .country-flag { font-size: 32px; margin-bottom: 10px; }
  .country-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; margin-bottom: 6px; }
  .country-status {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  .status-active { background: #dcfce7; color: #15803d; }
  .status-transition { background: #fef3c7; color: #d97706; }
  .status-pending { background: #e0f2fe; color: #0369a1; }
  .country-detail { display: none; font-size: 13px; color: var(--muted); line-height: 1.6; }
  .country-card.selected .country-detail { display: block; }
  .country-eprs { margin-top: 10px; }
  .epr-tag {
    display: inline-block;
    background: var(--cream);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 2px 7px;
    font-size: 11px;
    margin: 2px;
  }

  /* ── FLOW SIMULATOR ── */
  .flow-builder {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 24px;
    box-shadow: var(--shadow);
  }
  .step-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
    align-items: end;
  }
  @media(max-width: 800px) { .step-row { grid-template-columns: 1fr 1fr; } }
  .form-group { display: flex; flex-direction: column; gap: 6px; }
  .form-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  select, input[type=number] {
    border: 1.5px solid var(--border);
    border-radius: 8px;
    padding: 10px 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    background: var(--paper);
    color: var(--ink);
    outline: none;
    transition: border-color 0.2s;
    cursor: pointer;
  }
  select:focus, input:focus { border-color: var(--sg-red); background: white; }

  .simulate-btn {
    background: var(--sg-red);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 28px;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.3px;
  }
  .simulate-btn:hover { background: #c0271e; transform: translateY(-1px); }

  .result-panel {
    background: var(--light-blue);
    border: 1.5px solid #93c5fd;
    border-radius: 12px;
    padding: 24px;
    margin-top: 20px;
    display: none;
  }
  .result-panel.visible { display: block; }
  .result-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
    color: var(--blue);
  }
  .obligation-list { list-style: none; }
  .obligation-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(147,197,253,0.4);
    font-size: 14px;
  }
  .obligation-item:last-child { border-bottom: none; }
  .ob-icon {
    width: 22px; height: 22px;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px;
    margin-top: 1px;
  }
  .ob-high { background: #fee2e2; color: #dc2626; }
  .ob-med { background: #fef3c7; color: #d97706; }
  .ob-low { background: #dcfce7; color: #16a34a; }
  .ob-text strong { display: block; font-weight: 600; font-size: 14px; }
  .ob-text span { color: var(--muted); font-size: 12px; }

  /* Flow diagram */
  .flow-diagram {
    display: flex;
    align-items: center;
    gap: 0;
    margin: 20px 0;
    overflow-x: auto;
    padding: 8px 0;
  }
  .flow-node {
    flex-shrink: 0;
    background: white;
    border: 2px solid var(--border);
    border-radius: 10px;
    padding: 12px 16px;
    text-align: center;
    min-width: 110px;
    transition: all 0.3s;
  }
  .flow-node.active-node { border-color: var(--sg-red); background: #fff5f5; }
  .flow-node-icon { font-size: 22px; margin-bottom: 4px; }
  .flow-node-label { font-size: 11px; font-weight: 600; color: var(--muted); }
  .flow-arrow {
    color: var(--border);
    font-size: 20px;
    padding: 0 4px;
    flex-shrink: 0;
  }
  .flow-arrow.active-arrow { color: var(--sg-red); }

  /* ── PENALTIES ── */
  .penalty-selector {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  .penalty-chip {
    background: white;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  .penalty-chip:hover { border-color: var(--sg-red); color: var(--sg-red); }
  .penalty-chip.active { background: var(--sg-red); color: white; border-color: var(--sg-red); }

  .fine-calc {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    box-shadow: var(--shadow);
  }
  .fine-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }
  @media(max-width: 700px) { .fine-inputs { grid-template-columns: 1fr; } }

  .fine-result {
    background: linear-gradient(135deg, #1a1a2e, #2d1515);
    color: white;
    border-radius: 12px;
    padding: 28px;
    margin-top: 20px;
    display: none;
  }
  .fine-result.visible { display: block; }
  .fine-amount {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 48px;
    color: #ff6b63;
    line-height: 1;
    margin-bottom: 6px;
  }
  .fine-breakdown { margin-top: 16px; }
  .fine-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    font-size: 14px;
  }
  .fine-row:last-child { border-bottom: none; }
  .fine-row-label { opacity: 0.7; }
  .fine-row-val { font-weight: 600; }
  .fine-row-val.danger { color: #ff6b63; }

  /* ── GLOSSARY ── */
  .glossary-search {
    position: relative;
    margin-bottom: 24px;
  }
  .glossary-search input {
    width: 100%;
    padding: 14px 44px 14px 18px;
    font-size: 15px;
    border-radius: 10px;
    border: 1.5px solid var(--border);
    background: white;
    font-family: 'DM Sans', sans-serif;
  }
  .search-icon {
    position: absolute;
    right: 16px; top: 50%;
    transform: translateY(-50%);
    color: var(--muted);
    font-size: 16px;
  }
  .term-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 18px 22px;
    margin-bottom: 10px;
    transition: box-shadow 0.2s;
    box-shadow: var(--shadow);
  }
  .term-card:hover { box-shadow: var(--shadow-lg); }
  .term-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .term-tag {
    background: var(--cream);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--muted);
  }
  .term-def { font-size: 14px; color: var(--muted); line-height: 1.6; }
  .term-sg { margin-top: 8px; font-size: 13px; color: var(--blue); font-style: italic; }

  /* ── ROLES ── */
  .role-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
  @media(max-width: 750px) { .role-cards { grid-template-columns: 1fr; } }
  .role-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    box-shadow: var(--shadow);
    transition: transform 0.2s;
  }
  .role-card:hover { transform: translateY(-2px); }
  .role-icon { font-size: 32px; margin-bottom: 12px; }
  .role-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 16px; margin-bottom: 8px; }
  .role-tasks { list-style: none; margin-top: 12px; }
  .role-task {
    font-size: 13px;
    color: var(--muted);
    padding: 5px 0;
    border-bottom: 1px solid var(--cream);
    display: flex;
    gap: 8px;
    align-items: flex-start;
  }
  .role-task::before { content: '→'; color: var(--sg-red); flex-shrink: 0; }

  /* Alerts */
  .alert {
    border-radius: 10px;
    padding: 14px 18px;
    margin-bottom: 16px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 14px;
  }
  .alert-warn { background: #fef3c7; border: 1px solid #fcd34d; }
  .alert-info { background: #e0f2fe; border: 1px solid #7dd3fc; }
  .alert-danger { background: #fee2e2; border: 1px solid #fca5a5; }
  .alert-icon { font-size: 18px; flex-shrink: 0; }

  /* Section headings */
  .section-heading {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }
  .section-sub {
    color: var(--muted);
    font-size: 15px;
    margin-bottom: 32px;
  }

  /* Progress bars */
  .progress-wrap { margin-bottom: 12px; }
  .progress-label { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 13px; }
  .progress-track { height: 8px; background: var(--cream); border-radius: 99px; overflow: hidden; }
  .progress-fill { height: 100%; border-radius: 99px; transition: width 1s ease; }

  /* Tag pills */
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: var(--cream);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
    margin: 3px;
  }

  /* Tooltip */
  .tooltip-wrap { position: relative; display: inline-block; }
  .tooltip-tip {
    display: none;
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--ink);
    color: white;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 6px;
    white-space: nowrap;
    z-index: 200;
    pointer-events: none;
  }
  .tooltip-wrap:hover .tooltip-tip { display: block; }

  /* Animate in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .section.active { animation: fadeUp 0.3s ease; }

  /* Scenario cards */
  .scenario-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  @media(max-width: 700px) { .scenario-grid { grid-template-columns: 1fr; } }
  .scenario-card {
    background: white;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: var(--shadow);
  }
  .scenario-card:hover { border-color: var(--sg-red); transform: translateY(-2px); }
  .scenario-card.selected { border-color: var(--sg-red); border-width: 3px; background: #fbbcbc; box-shadow: 0 0 0 4px rgba(230,51,41,0.3); }
  .sc-icon { font-size: 28px; margin-bottom: 8px; }
  .sc-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 14px; margin-bottom: 6px; }
  .sc-desc { font-size: 12px; color: var(--muted); line-height: 1.5; }
  .sc-badge {
    display: inline-block;
    margin-top: 8px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 4px;
  }
  .sc-high { background: #fee2e2; color: #dc2626; }
  .sc-med { background: #fef3c7; color: #d97706; }
  .sc-low { background: #dcfce7; color: #16a34a; }

  /* Recycled content meter */
  .meter-row { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
  .meter-label { min-width: 160px; font-size: 13px; }
  .meter-bar { flex: 1; height: 12px; background: var(--cream); border-radius: 99px; overflow: hidden; }
  .meter-fill { height: 100%; border-radius: 99px; }
  .meter-ok { background: var(--green); }
  .meter-warn { background: var(--amber); }
  .meter-fail { background: var(--warn); }
  .meter-pct { min-width: 48px; font-size: 13px; font-weight: 600; text-align: right; }
  .meter-target { min-width: 80px; font-size: 11px; color: var(--muted); }

</style>
</head>
<body>

<header>
  <div class="logo">
    <div class="logo-mark">CA</div>
    <div>
      <div class="logo-text">PPWR Navigator</div>
      <div class="logo-sub">European PPWR RegTech — Company A</div>
    </div>
  </div>
  <div class="header-badge">📋 Reg. (EU) 2025/40 · March 2026</div>
</header>

<div class="app-shell">
<nav>
  <div class="nav-label">Learn</div>
  <button class="nav-btn active" onclick="showSection('overview',this)"><span>📋</span> Overview</button>
  <button class="nav-btn" onclick="showSection('countries',this)"><span>🗺️</span> Country Guide</button>
  <button class="nav-btn" onclick="showSection('packaging',this)"><span>📦</span> Packaging Types</button>
  <button class="nav-btn" onclick="showSection('targets',this)"><span>🎯</span> Targets &amp; Content</button>
  <div class="nav-label">Simulate</div>
  <button class="nav-btn" onclick="showSection('flows',this)"><span>🔄</span> Flow Simulator</button>
  <button class="nav-btn" onclick="showSection('penalties',this)"><span>⚠️</span> Penalties</button>
  <div class="nav-label">Reference</div>
  <button class="nav-btn" onclick="showSection('scope',this)"><span>🔍</span> Scope &amp; Exemptions</button>
  <button class="nav-btn" onclick="showSection('glossary',this)"><span>📖</span> Glossary</button>
  <button class="nav-btn" onclick="showSection('roles',this)"><span>👥</span> Who Does What</button>
</nav>
<div class="main-content">

<!-- ════════════════════════════════════════════ OVERVIEW ════════════════════════════════════════ -->
<div id="overview" class="section active">

  <!-- LEGAL BASIS CARD -->
  <div style="background:var(--sg-dark);color:white;border-radius:12px;padding:22px 28px;margin-bottom:24px;border-left:5px solid var(--sg-red)">
    <div style="display:flex;align-items:flex-start;gap:14px">
      <div style="font-size:22px;flex-shrink:0">⚖️</div>
      <div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:#ff8a84;margin-bottom:8px">Legal Basis &amp; Training Disclaimer</div>
        <p style="font-size:13px;opacity:0.9;line-height:1.7;margin-bottom:8px">
          <strong>This is a training and scenario tool — it is not legal advice.</strong> Always consult qualified legal counsel for compliance decisions specific to your business.
        </p>
        <p style="font-size:13px;opacity:0.85;line-height:1.7;margin-bottom:8px">
          This tool reflects <strong>Regulation (EU) 2025/40</strong> (PPWR) plus selected delegated and implementing acts available as of <strong>March 2026</strong>. PPWR is a <strong>Regulation</strong> — it is directly applicable in all EU Member States without national transposition. Member States designate competent authorities, operate EPR (Extended Producer Responsibility) schemes, and set penalty scales within the framework the Regulation establishes. Norway applies PPWR through EEA Agreement incorporation (typically 12–18 months after EU entry into force).
        </p>
        <p style="font-size:13px;opacity:0.75;line-height:1.7">
          ⚠️ Many delegated acts under PPWR — including final recyclability grading criteria, recycled-content calculation methods, and digital product passport specifications — are still being drafted by the European Commission. This tool will require updating as those acts are adopted. Check EUR-Lex for the current text: <a href="https://eur-lex.europa.eu" target="_blank" style="color:#7dd3fc">eur-lex.europa.eu</a>
        </p>
      </div>
    </div>
  </div>

  <div class="hero-banner">
    <div class="hero-eyebrow">PPWR — Packaging and Packaging Waste Regulation (EU) 2025/40 — Directly applicable in all EU Member States</div>
    <div class="hero-title">Packaging &amp; Packaging<br><span>Waste Regulation</span></div>
    <div class="hero-desc">PPWR (Packaging and Packaging Waste Regulation) is a <strong>Regulation</strong>, not a Directive — it applies directly across all EU markets with no national transposition required. It entered into force 11 February 2025 and its core provisions apply from <strong>12 August 2026</strong>. It replaces Directive 94/62/EC and introduces binding targets for recycled content, reuse, and recyclability across all EU Member States and EEA countries.</div>
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-num">2030</div>
        <div class="hero-stat-label">All packaging must be<br>reusable or recyclable</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">D+E</div>
        <div class="hero-stat-label">Recyclability grades<br>banned from 2030</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">27+</div>
        <div class="hero-stat-label">EU Member States<br>+ EEA countries covered</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">€9M</div>
        <div class="hero-stat-label">Approx. max fine — systemic<br>Grade D/E violation (SE)</div>
      </div>
    </div>
  </div>

  <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:12px 18px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;box-shadow:var(--shadow)">
    <div style="display:flex;align-items:center;gap:10px">
      <span style="font-size:16px">📋</span>
      <div>
        <div style="font-size:12px;font-weight:700;color:var(--ink)">Regulation (EU) 2025/40 — Tool last updated: <strong>March 2026</strong></div>
        <div style="font-size:11px;color:var(--muted)">Several implementing/delegated acts remain under development. The Regulation applies from 12 August 2026. <button onclick="showSection('scope')" style="background:none;border:none;color:var(--blue);font-size:11px;cursor:pointer;text-decoration:underline;padding:0">View delegated acts tracker →</button></div>
      </div>
    </div>
    <span style="padding:4px 12px;background:#fef3c7;color:#d97706;border-radius:20px;font-size:11px;font-weight:700">⏳ 5 acts under development · 1 adopted</span>
  </div>

  <div class="alert alert-warn">
    <div class="alert-icon">⚠️</div>
    <div><strong>Company A Exposure — Six Distinct Flow Types:</strong> Company A Europe operates across six different supply chain configurations, each triggering a different set of PPWR obligations. The most comprehensive obligations fall on <em>own manufactured products</em> — where Company A is the packer/filler and therefore the <strong>primary producer</strong> under PPWR, carrying full design, recycled content, recyclability, labelling, and EPR registration duties from day one of placing product on the market.</div>
  </div>

  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px">
    <div style="background:white;border:1.5px solid var(--sg-red);border-radius:10px;padding:14px 16px;font-size:13px">
      <div style="font-weight:700;margin-bottom:4px;color:var(--sg-red)">🏗️ Own Manufacture</div>
      <div style="color:var(--muted)">CA packs &amp; labels — <strong>Primary Producer.</strong> Full PPWR obligations: design, recycled content, recyclability grade, labelling, EPR in every country sold.</div>
    </div>
    <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:14px 16px;font-size:13px">
      <div style="font-weight:700;margin-bottom:4px">📥 Sister Company Import</div>
      <div style="color:var(--muted)">CA is importer-producer in destination country. Packaging obligations follow the importer.</div>
    </div>
    <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:14px 16px;font-size:13px">
      <div style="font-weight:700;margin-bottom:4px">🇪🇺→🇪🇺 Cross-Border</div>
      <div style="color:var(--muted)">EPR obligations shift to the receiving country entity. Each country runs its own EPR scheme — registration, fees and reporting differ.</div>
    </div>
    <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:14px 16px;font-size:13px">
      <div style="font-weight:700;margin-bottom:4px">🌏→📦 3rd Party Direct Ship</div>
      <div style="color:var(--muted)">CA is EU importer. Packaging non-compliance from supplier becomes CA's liability.</div>
    </div>
    <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:14px 16px;font-size:13px">
      <div style="font-weight:700;margin-bottom:4px">🌏→🏭 3rd Party Warehoused</div>
      <div style="color:var(--muted)">EPR triggered when goods leave CA warehouse into each local market. Multiple registrations likely.</div>
    </div>
    <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:14px 16px;font-size:13px">
      <div style="font-weight:700;margin-bottom:4px">📤 Export Outside Cluster</div>
      <div style="color:var(--muted)">EPR obligations pass to buyer in destination country (subject to Incoterms). Lower CA exposure.</div>
    </div>
    <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:14px 16px;font-size:13px">
      <div style="font-weight:700;margin-bottom:4px">🔁 B2B Transport Packaging Return</div>
      <div style="color:var(--muted)">Reusable pallets, crates and corner boards moving between CA and customers. 40% reuse target by 2030 — requires tracking system and customer return agreements.</div>
    </div>
  </div>

  <h2 class="section-heading">The Five Pillars of PPWR</h2>
  <p class="section-sub">PPWR is structured around five core obligations. All five apply to Company A to varying degrees.</p>

  <div class="grid-3">
    <div class="pillar-card">
      <div class="pillar-num">01</div>
      <div class="pillar-title">♻️ Recycled Content</div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6">Mandatory minimum % of recycled material in plastic packaging. Targets escalate from 2030 → 2035 → 2040. Applies to packaging you <em>place on the market</em> — so if you import packaged goods, this obligation follows the importer.</p>
    </div>
    <div class="pillar-card">
      <div class="pillar-num">02</div>
      <div class="pillar-title">🔁 Reusability &amp; Refill</div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6">Mandatory reuse targets for transport packaging (e.g. pallets, strapping, corner protectors). By 2030, 40% of transport packaging must be reusable. By 2040, 70%. Key for your inbound logistics from sister companies.</p>
    </div>
    <div class="pillar-card">
      <div class="pillar-num">03</div>
      <div class="pillar-title">✅ Recyclability</div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6">By 2030, all packaging on the EU market must be reusable or recyclable. Recyclability is graded A–E. <strong>Both Grade D and Grade E are banned from 2030</strong> (Article 6). Grade C is permitted initially but subject to phase-out under delegated acts. Affects all packaging CA places on the market.</p>
    </div>
    <div class="pillar-card">
      <div class="pillar-num">04</div>
      <div class="pillar-title">🏷️ Labelling &amp; QR Codes</div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6">Mandatory harmonised sorting labels across the EU from 2028. Digital product passport (QR code) required from 2030 for packaging. Critical for your own branded/private label products sold across all EU markets.</p>
    </div>
    <div class="pillar-card">
      <div class="pillar-num">05</div>
      <div class="pillar-title">💶 EPR &amp; Fees</div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6">Extended Producer Responsibility fees modulated by recyclability grade. The "polluter pays" principle — less recyclable packaging = higher EPR fee. Applies to all packaging you place on the market in each country, including cross-border flows within the EU.</p>
    </div>
    <div class="pillar-card" style="border-top-color: var(--amber)">
      <div class="pillar-num" style="color:#fcd34d">⚡</div>
      <div class="pillar-title">🚫 Prohibited Packaging</div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6">From 2030: ban on unnecessary packaging, single-use plastic in specific formats, and packaging with certain inks/additives that impede recyclability. Affects packaging received from 3rd party suppliers — liability may sit with you as importer.</p>
    </div>
  </div>

  <div class="timeline-bar">
    <div class="timeline-title">🗓️ PPWR Key Milestone Timeline</div>
    <div class="timeline-track">
      <div class="timeline-line"></div>
      <div class="timeline-items">
        <div class="tl-item">
          <div class="tl-dot past">✓</div>
          <div class="tl-year">2025</div>
          <div class="tl-label">PPWR enters into force</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot critical">★</div>
          <div class="tl-year">Aug 2026</div>
          <div class="tl-label">PPWR general application date — most provisions apply. EPR registration opens. Member States must have competent authorities &amp; EPR schemes in place.</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot near">!</div>
          <div class="tl-year">2027</div>
          <div class="tl-label">Extended producer responsibility schemes fully operational; penalty frameworks in effect in all Member States</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot near">!</div>
          <div class="tl-year">2028</div>
          <div class="tl-label">Mandatory harmonised labelling</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot critical">★</div>
          <div class="tl-year">2030</div>
          <div class="tl-label">Grades D &amp; E banned. 30%+ recycled content (non-contact plastic). 40% reuse (transport). Digital passports.</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot future">◯</div>
          <div class="tl-year">2035</div>
          <div class="tl-label">Escalated recycled content targets (40–50%)</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot future">◯</div>
          <div class="tl-year">2040</div>
          <div class="tl-label">Maximum targets (55–65%), 70% reuse transport</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-title">🏭 Who is a "Producer" under PPWR?</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:12px">PPWR defines producer broadly. For Company A Europe, you are a producer when you:</p>
      <ul style="list-style:none">
        <li style="padding:7px 6px;border-bottom:1px solid var(--cream);font-size:14px;background:#fff5f5;border-radius:4px">🏗️ <strong>Manufacture and pack your own products</strong> — you are the <em>primary producer</em> (packer/filler). Highest obligation tier: you control packaging design, must hit recycled content targets, achieve recyclability grade, apply mandatory labelling, and register for EPR in every country you sell into.</li>
        <li style="padding:6px 0;border-bottom:1px solid var(--cream);font-size:14px">📥 <strong>Import packaged goods</strong> from sister companies (you become the importer-producer in the destination country)</li>
        <li style="padding:6px 0;border-bottom:1px solid var(--cream);font-size:14px">🛒 <strong>Buy and resell</strong> 3rd party supplier goods — if supplier is non-EU, you take the producer role</li>
        <li style="padding:6px 0;border-bottom:1px solid var(--cream);font-size:14px">🏷️ <strong>Brand/re-label products</strong> under Company A name — re-labelling makes you the producer, even if manufactured by a 3rd party</li>
        <li style="padding:6px 0;font-size:14px">🚢 <strong>Direct ship to customers</strong> — EPR triggered in customer's country regardless of who packs the goods</li>
      </ul>
    </div>
    <div class="card">
      <div class="card-title">🔍 Regulation (EU) 2025/40 vs. Directive 94/62/EC — What Changed</div>
      <div style="font-size:14px">
        <div style="padding:8px 0;border-bottom:1px solid var(--cream)"><span style="color:var(--warn)">Directive 94/62/EC:</span> Required national transposition — each Member State passed its own law, creating variation across markets<br><span style="color:var(--green)">Regulation (EU) 2025/40:</span> <strong>Directly applicable</strong> in all EU Member States from entry into force — no transposition, identical rules everywhere</div>
        <div style="padding:8px 0;border-bottom:1px solid var(--cream)"><span style="color:var(--warn)">Old:</span> Targets set at member state level, wide variation in ambition and enforcement<br><span style="color:var(--green)">New:</span> <strong>Binding EU-wide minimum targets</strong> differentiated by packaging type and material</div>
        <div style="padding:8px 0;border-bottom:1px solid var(--cream)"><span style="color:var(--warn)">Old:</span> No reuse obligation<br><span style="color:var(--green)">New:</span> <strong>Mandatory reuse targets</strong> for transport packaging — 40% by 2030, 70% by 2040</div>
        <div style="padding:8px 0;border-bottom:1px solid var(--cream)"><span style="color:var(--warn)">Old:</span> Recyclability was aspirational, no formal grading system<br><span style="color:var(--green)">New:</span> <strong>Grades A–E with mandatory bans</strong> — both Grade D and Grade E prohibited from 2030; Grade C subject to later phase-out under delegated acts</div>
        <div style="padding:8px 0"><span style="color:var(--warn)">Old:</span> Limited labelling requirements<br><span style="color:var(--green)">New:</span> <strong>Harmonised sorting labels by 2028</strong> and digital product passports / QR codes mandatory from 2030</div>
      </div>
    </div>
  </div>

</div>

<!-- ════════════════════════════════════════════ COUNTRIES ════════════════════════════════════════ -->
<div id="countries" class="section">

  <h2 class="section-heading">Country-by-Country Guide</h2>
  <p class="section-sub">Click any country card to expand its full profile. Cards highlight automatically when you run a scenario in the Flow Simulator.</p>

  <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap">
    <div style="position:relative;flex:1;min-width:180px;max-width:320px">
      <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:13px;color:var(--muted)">🔍</span>
      <input id="country-search" type="text" placeholder="Search country…" oninput="filterCountryCards()"
        style="width:100%;padding:8px 10px 8px 30px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;background:white;color:var(--ink);outline:none;box-sizing:border-box">
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <button onclick="filterCountryCards('all')" id="cf-all" class="cf-btn cf-active"
        style="padding:6px 12px;border-radius:20px;border:1px solid var(--border);background:var(--ink);color:white;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">All (28)</button>
      <button onclick="filterCountryCards('high')" id="cf-high"
        style="padding:6px 12px;border-radius:20px;border:1px solid #dc2626;background:white;color:#dc2626;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">🔴 High</button>
      <button onclick="filterCountryCards('medium')" id="cf-med"
        style="padding:6px 12px;border-radius:20px;border:1px solid #d97706;background:white;color:#d97706;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">🟡 Medium</button>
      <button onclick="filterCountryCards('low')" id="cf-low"
        style="padding:6px 12px;border-radius:20px;border:1px solid #0369a1;background:white;color:#0369a1;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">🟢 Low</button>
      <button onclick="filterCountryCards('deposit')" id="cf-dep"
        style="padding:6px 12px;border-radius:20px;border:1px solid var(--border);background:white;color:var(--ink);font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">💰 Has DRS</button>
    </div>
    <span id="country-count" style="font-size:12px;color:var(--muted);white-space:nowrap">28 countries</span>
  </div>

  <div class="alert alert-info" id="countries-alert">
    <div class="alert-icon">ℹ️</div>
    <div><strong>PPWR is a Regulation — directly applicable in all 27 EU Member States</strong> from <strong>12 August 2026</strong>, with no national transposition required. Each Member State must have a designated competent authority, operational EPR scheme, and penalty framework in place by that date. <strong>Norway (EEA)</strong> incorporates PPWR through the EEA Agreement — expected 2026–2027, with substance equivalent to the EU Regulation.
      <div style="margin-top:8px;padding:8px 12px;background:rgba(29,111,164,.1);border-radius:6px;border-left:3px solid var(--blue);font-size:12px">
        <strong>📦 EPR registration is triggered by sale to a customer — not by moving goods to a warehouse.</strong> A Company A warehouse in Finland serving customers in Finland, Estonia and Latvia requires three separate EPR registrations. Each is triggered at the moment of first sale in that country, not when goods arrive in the warehouse.
      </div>
    </div>
  </div>

  <!-- Simulation context banner — shown when a simulation result is active -->
  <div id="sim-context-banner" style="display:none;background:#e8f4fd;border:1px solid #93c5fd;border-radius:10px;padding:12px 16px;margin-bottom:16px;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"></div>

  <div class="country-grid" id="country-grid-dynamic"></div>

  <!-- Compare panel — shown when 2+ countries are selected -->
  <div id="compare-panel" style="display:none;background:white;border:2px solid #7c3aed;border-radius:12px;padding:16px 20px;margin-bottom:24px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px">
      <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:#7c3aed">⚖️ Country Comparison</div>
      <div style="display:flex;gap:8px">
        <button onclick="renderCompare()" style="padding:6px 14px;border-radius:8px;border:1px solid #7c3aed;background:#7c3aed;color:white;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">Compare selected</button>
        <button onclick="clearCompare()" style="padding:6px 12px;border-radius:8px;border:1px solid var(--border);background:white;color:var(--muted);font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif">Clear</button>
      </div>
    </div>
    <div id="compare-chips" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px"></div>
    <div id="compare-table" style="overflow-x:auto"></div>
  </div>

    <div class="card">
    <div class="card-title">🔗 Cross-Border Complexity Matrix</div>
    <p style="font-size:14px;color:var(--muted);margin-bottom:16px">When packaging crosses borders within the EU, EPR obligations follow the <em>country of placement on the market</em> — not the country of origin.</p>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--cream)">
            <th style="padding:10px 14px;text-align:left;font-weight:600;border:1px solid var(--border)">Flow Type</th>
            <th style="padding:10px 14px;text-align:left;font-weight:600;border:1px solid var(--border)">EPR Liability Sits With</th>
            <th style="padding:10px 14px;text-align:left;font-weight:600;border:1px solid var(--border)">Country</th>
            <th style="padding:10px 14px;text-align:left;font-weight:600;border:1px solid var(--border)">Risk Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px 14px;border:1px solid var(--border);background:#fff5f5"><strong>🏗️ CA manufactures in EU country → sells domestically</strong></td>
            <td style="padding:10px 14px;border:1px solid var(--border);background:#fff5f5">CA manufacturing entity (primary producer)</td>
            <td style="padding:10px 14px;border:1px solid var(--border);background:#fff5f5">🇩🇪🇫🇷🇵🇱 etc. — market of sale</td>
            <td style="padding:10px 14px;border:1px solid var(--border);background:#fff5f5"><span style="color:var(--sg-red);font-weight:600">HIGHEST — Full obligations</span></td>
          </tr>
          <tr style="background:#fef9f5">
            <td style="padding:10px 14px;border:1px solid var(--border)"><strong>🏗️ CA manufactures in EU country → exports to other EU countries</strong></td>
            <td style="padding:10px 14px;border:1px solid var(--border)">CA mfg entity (export packaging) + receiving entity (EPR in destination)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">Both origin + destination countries</td>
            <td style="padding:10px 14px;border:1px solid var(--border)"><span style="color:var(--warn);font-weight:600">HIGH — Dual obligations</span></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid var(--border)">Sister company (France) → CA Sweden → End customer</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">CA Sweden (importer-producer)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">🇸🇪 Sweden</td>
            <td style="padding:10px 14px;border:1px solid var(--border)"><span style="color:var(--warn);font-weight:600">HIGH</span></td>
          </tr>
          <tr style="background:var(--cream)">
            <td style="padding:10px 14px;border:1px solid var(--border)">CA Sweden → CA Norway (cross-border)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">CA Norway (Norwegian importer)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">🇳🇴 Norway</td>
            <td style="padding:10px 14px;border:1px solid var(--border)"><span style="color:var(--amber);font-weight:600">MEDIUM</span></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid var(--border)">3rd party supplier (China) → direct ship to DK customer</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">CA Denmark (importer into EU)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">🇩🇰 Denmark</td>
            <td style="padding:10px 14px;border:1px solid var(--border)"><span style="color:var(--warn);font-weight:600">HIGH</span></td>
          </tr>
          <tr style="background:var(--cream)">
            <td style="padding:10px 14px;border:1px solid var(--border)">CA Finland warehouse → sold to FI + EE + LV customers</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">CA Finland (FI); CA EE/LV entity (EE, LV)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">🇫🇮🇪🇪🇱🇻 Multi</td>
            <td style="padding:10px 14px;border:1px solid var(--border)"><span style="color:var(--warn);font-weight:600">HIGH</span></td>
          </tr>
          <tr>
            <td style="padding:10px 14px;border:1px solid var(--border)">CA entity sells to customer outside the EU (e.g. UK, Switzerland)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">Non-EU importer / customer (not CA)</td>
            <td style="padding:10px 14px;border:1px solid var(--border)">🌍 Non-EU country</td>
            <td style="padding:10px 14px;border:1px solid var(--border)"><span style="color:var(--green);font-weight:600">LOW</span> (if EXW/DAP terms)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<!-- ════════════════════════════════════════════ FLOW SIMULATOR ════════════════════════════════════════ -->


</div>

<div id="flows" class="section">

  <h2 class="section-heading">Business Flow Simulator</h2>
  <p class="section-sub">Select your supply chain scenario to see which PPWR obligations are triggered, for which entity, and in which country.</p>

  <div class="alert alert-info" style="margin-bottom:20px">
    <div class="alert-icon">💡</div>
    <div>
      <strong>How to use this simulator:</strong> Choose the scenario that matches your supply chain flow, configure the details, then click <em>Run Simulation</em>. The results show every PPWR obligation triggered for that flow, ranked by urgency.
      <div style="margin-top:10px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;font-size:13px">
        <span style="display:flex;align-items:center;gap:7px"><span style="background:#fee2e2;color:#dc2626;padding:3px 10px;border-radius:4px;font-weight:700;font-size:11px">!</span> <strong>Act now</strong> — legal obligation, non-compliance risk is immediate or near-term</span>
        <span style="display:flex;align-items:center;gap:7px"><span style="background:#fef3c7;color:#d97706;padding:3px 10px;border-radius:4px;font-weight:700;font-size:11px">~</span> <strong>Plan for it</strong> — obligation applies but deadline allows preparation time</span>
        <span style="display:flex;align-items:center;gap:7px"><span style="background:#dcfce7;color:#16a34a;padding:3px 10px;border-radius:4px;font-weight:700;font-size:11px">✓</span> <strong>Awareness only</strong> — lower risk or obligation sits with another party</span>
      </div>
    </div>
  </div>

  <div style="margin-bottom:24px">
    <p style="font-size:14px;font-weight:600;margin-bottom:12px">Step 1 — Choose a scenario that matches your flow:</p>
    <div class="scenario-grid">
      <div class="scenario-card" id="sc-own" onclick="selectScenario('own')" style="border-color:var(--sg-red);border-width:2px">
        <div class="sc-icon">🏗️</div>
        <div class="sc-title" style="color:var(--sg-red)">Own Manufactured Products ★</div>
        <div class="sc-desc">Company A manufactures and packs products in an EU/EEA country, then sells domestically or cross-border. You are the primary producer — the highest PPWR obligation tier.</div>
        <span class="sc-badge sc-high">Primary Producer — Maximum Obligations</span>
      </div>
      <div class="scenario-card selected" id="sc-0" onclick="selectScenario(0)">
        <div class="sc-icon">🏭→🇸🇪</div>
        <div class="sc-title">Import from Sister Company</div>
        <div class="sc-desc">CA affiliate in another EU country ships packaged goods to a CA entity in the destination country for warehousing and resale.</div>
        <span class="sc-badge sc-high">High EPR Exposure</span>
      </div>
      <div class="scenario-card" id="sc-1" onclick="selectScenario(1)">
        <div class="sc-icon">🇪🇺→🇪🇺</div>
        <div class="sc-title">Cross-Border Transfer</div>
        <div class="sc-desc">CA entity in one EU country sells and ships packaged goods to CA entity or customer in another EU country.</div>
        <span class="sc-badge sc-med">Medium EPR Exposure</span>
      </div>
      <div class="scenario-card" id="sc-2" onclick="selectScenario(2)">
        <div class="sc-icon">🌏→📦→🏠</div>
        <div class="sc-title">3rd Party Direct Ship</div>
        <div class="sc-desc">CA orders from 3rd party supplier (e.g. Asia). Supplier ships directly to end customer in an EU country. No CA warehouse.</div>
        <span class="sc-badge sc-high">High EPR Exposure</span>
      </div>
      <div class="scenario-card" id="sc-3" onclick="selectScenario(3)">
        <div class="sc-icon">🌏→🏭→🏠</div>
        <div class="sc-title">3rd Party via CA Warehouse</div>
        <div class="sc-desc">CA orders 3rd party goods, warehouses in an EU country, then sells to local customers. Multiple obligation touch points.</div>
        <span class="sc-badge sc-high">Highest Complexity</span>
      </div>
      <div class="scenario-card" id="sc-4" onclick="selectScenario(4)">
        <div class="sc-icon">🇸🇪→🌍</div>
        <div class="sc-title">Export Outside Cluster</div>
        <div class="sc-desc">CA entity sells and ships packaged goods to a customer outside the EU or to a non-EU/EEA country.</div>
        <span class="sc-badge sc-low">Lower EPR Exposure</span>
      </div>
      <div class="scenario-card" id="sc-5" onclick="selectScenario(5)">
        <div class="sc-icon">🏭⇄🏭</div>
        <div class="sc-title">B2B — Transport Packaging Return</div>
        <div class="sc-desc">Reusable transport packaging (pallets, crates, corner boards) flows between CA entities or between CA and customers.</div>
        <span class="sc-badge sc-med">Reuse Target Focus</span>
      </div>
    </div>
  </div>

  <!-- Warehouse vs Sale explainer -->
  <div style="background:white;border:1px solid var(--border);border-radius:12px;padding:18px 22px;margin-bottom:18px;box-shadow:var(--shadow)">
    <div style="display:flex;align-items:flex-start;gap:12px">
      <span style="font-size:20px;flex-shrink:0">💡</span>
      <div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:14px;margin-bottom:10px">When does EPR registration trigger? — Warehouse vs Sale</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;font-size:12px">
          <div style="background:#dcfce7;border-radius:8px;padding:10px;border:1px solid #86efac">
            <div style="font-weight:700;color:#15803d;margin-bottom:4px">✅ NOT a trigger</div>
            <div style="color:#166534">Moving goods to <strong>your own warehouse</strong> in another country. This is an internal transfer — no EPR obligation arises in the warehouse country at this point.</div>
          </div>
          <div style="background:#fee2e2;border-radius:8px;padding:10px;border:1px solid #fca5a5">
            <div style="font-weight:700;color:#dc2626;margin-bottom:4px">🔴 IS a trigger</div>
            <div style="color:#7f1d1d">Selling from that warehouse to a <strong>customer in that country</strong>. EPR is triggered in the country of sale — registration must be in place before the first sale.</div>
          </div>
          <div style="background:#fee2e2;border-radius:8px;padding:10px;border:1px solid #fca5a5">
            <div style="font-weight:700;color:#dc2626;margin-bottom:4px">🔴 IS a trigger</div>
            <div style="color:#7f1d1d">Shipping from your warehouse to a <strong>customer in a different country</strong>. EPR triggers in the <em>customer's</em> country — not the warehouse country.</div>
          </div>
        </div>
        <div style="margin-top:10px;font-size:11px;color:var(--muted);padding:8px 12px;background:var(--paper);border-radius:6px;border-left:3px solid var(--blue)">
          <strong>Own-manufactured products:</strong> EPR triggers when finished packaged goods first leave the factory for distribution — even if the first stop is your own warehouse — because the act of packaging already places the product into the commercial chain.
        </div>
      </div>
    </div>
  </div>

  <!-- Step 2: dynamic form, rebuilt by buildStep2() on scenario select -->
  <div id="step2-container" style="background:white;border:1px solid var(--border);border-radius:12px;padding:28px;box-shadow:var(--shadow);margin-bottom:0">
    <div id="step2-inner">
      <p style="color:var(--muted);font-size:14px">← Select a scenario above to configure your flow.</p>
    </div>
  </div>

  <div id="sim-country-impact" style="margin-top:18px;display:none">
    <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:10px">Countries Impacted by This Scenario:</div>
    <div id="sim-country-cards" style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-bottom:4px"></div>
  </div>

  <div class="result-panel" id="sim-results">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:14px">
      <div class="result-title" id="sim-result-title" style="margin-bottom:0">Rule Engine Output</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:11px;align-items:center">
        <span style="font-size:10px;color:var(--muted);margin-right:2px">Filter:</span>
        <button onclick="toggleSevFilter('critical')" id="sev-btn-critical" style="padding:3px 8px;border-radius:4px;background:#fee2e2;color:#dc2626;font-weight:700;border:2px solid transparent;cursor:pointer;font-size:11px;font-family:'DM Sans',sans-serif;transition:all .15s">🔴 Critical</button>
        <button onclick="toggleSevFilter('high')"     id="sev-btn-high"     style="padding:3px 8px;border-radius:4px;background:#fef3c7;color:#d97706;font-weight:700;border:2px solid transparent;cursor:pointer;font-size:11px;font-family:'DM Sans',sans-serif;transition:all .15s">🟡 Act now</button>
        <button onclick="toggleSevFilter('medium')"   id="sev-btn-medium"   style="padding:3px 8px;border-radius:4px;background:#e0f2fe;color:#0369a1;font-weight:700;border:2px solid transparent;cursor:pointer;font-size:11px;font-family:'DM Sans',sans-serif;transition:all .15s">🔵 Plan for it</button>
        <button onclick="toggleSevFilter('low')"      id="sev-btn-low"      style="padding:3px 8px;border-radius:4px;background:#f0fdf4;color:#16a34a;font-weight:700;border:2px solid transparent;cursor:pointer;font-size:11px;font-family:'DM Sans',sans-serif;transition:all .15s">🟢 Awareness</button>
        <button onclick="toggleSevFilter(null)"       id="sev-btn-all"      style="padding:3px 8px;border-radius:4px;background:var(--cream);color:var(--muted);font-weight:700;border:2px solid var(--border);cursor:pointer;font-size:11px;font-family:'DM Sans',sans-serif;display:none">✕ Clear</button>
      </div>
    </div>

    <!-- Roles assigned -->
    <div style="margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:6px">Roles assigned to Company A:</div>
      <div id="re-roles" style="display:flex;flex-wrap:wrap;gap:4px"></div>
    </div>

    <!-- Role assignment trace -->
    <details style="margin-bottom:16px">
      <summary style="font-size:12px;font-weight:700;color:var(--blue);cursor:pointer;padding:8px 12px;background:#e8f4fd;border-radius:8px;list-style:none">
        🔍 Why these roles were assigned — click to expand audit trace
      </summary>
      <div id="re-trace" style="margin-top:8px;padding:4px 0"></div>
    </details>

    <!-- Obligations -->
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:10px">Obligations (by severity then deadline):</div>
    <div id="obligation-list"></div>
    
  </div>

</div>

<!-- ════════════════════════════════════════════ PACKAGING TYPES ════════════════════════════════════════ -->
<div id="packaging" class="section">

  <h2 class="section-heading">Packaging Types &amp; Compliance Checker</h2>
  <p class="section-sub">Understand which packaging formats Company A uses, their current PPWR compliance status, and the impact of switching to alternatives.</p>

  <div class="alert alert-danger">
    <div class="alert-icon">🚨</div>
    <div><strong>Grades D and E are banned from 2030 (PPWR Art. 6).</strong> All packaging placed on the EU market from 2030 must achieve at least Grade C. Grade C is permitted initially but subject to phase-out under delegated acts. Any Company A product line using Grade D or E packaging must be redesigned before the ban takes effect.</div>
  </div>

  <!-- ── THREE TIERS ── -->
  <div class="grid-3" style="margin-bottom:28px">
    <div class="card" style="border-top:4px solid var(--sg-red)">
      <div style="font-size:32px;margin-bottom:10px">🏷️</div>
      <div class="card-title">Sales Packaging<br><small style="font-size:12px;color:var(--muted);font-weight:400">(Primary / Consumer)</small></div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:12px">The packaging the end customer receives — the box, bag, bucket or bottle containing the product. Company A relevance: HDPE buckets for mortars/sealants, cardboard cartons, laminate bags for construction chemicals.</p>
      <div style="font-size:13px">
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Recyclability grade required: <strong>A–C from 2030</strong></div>
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Recycled content target: <strong>Yes — 30% non-contact plastic by 2030</strong></div>
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Sorting labels: <strong>Mandatory 2028</strong></div>
        <div style="padding:5px 0">Digital passport: <strong>Mandatory 2030</strong></div>
      </div>
    </div>
    <div class="card" style="border-top:4px solid var(--blue)">
      <div style="font-size:32px;margin-bottom:10px">📦</div>
      <div class="card-title">Grouped Packaging<br><small style="font-size:12px;color:var(--muted);font-weight:400">(Secondary / Grouped)</small></div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:12px">Groups multiple sales units together — shrink wrap over cartons, cardboard outers, multi-pack banding. Company A relevance: shrink-wrapped product bundles, cardboard display outers.</p>
      <div style="font-size:13px">
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Recyclability grade required: <strong>A–C from 2030</strong></div>
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Recycled content target: <strong>Yes — plastic elements</strong></div>
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Sorting labels: <strong>Mandatory 2028</strong></div>
        <div style="padding:5px 0">Digital passport: <strong>Mandatory 2030</strong></div>
      </div>
    </div>
    <div class="card" style="border-top:4px solid var(--green)">
      <div style="font-size:32px;margin-bottom:10px">🚛</div>
      <div class="card-title">Transport Packaging<br><small style="font-size:12px;color:var(--muted);font-weight:400">(Tertiary / Logistics)</small></div>
      <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:12px">Protects and moves goods in the supply chain — pallets, stretch wrap, corner boards, strapping. Company A relevance: outbound pallet wrap, corner boards, banding, pooled pallets. Highest reuse obligation.</p>
      <div style="font-size:13px">
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Recyclability grade required: <strong>A–C from 2030</strong></div>
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Reuse target: <strong style="color:var(--warn)">40% by 2030 — 70% by 2040</strong></div>
        <div style="padding:5px 0;border-bottom:1px solid var(--cream)">Recycled content: <strong>Plastic elements only</strong></div>
        <div style="padding:5px 0">Sorting labels: <strong>B2B exemptions apply</strong></div>
      </div>
    </div>
  </div>

  <!-- ── PACKAGING COMPLIANCE CHECKER ── -->
  <div class="card" style="margin-bottom:24px">
    <div class="card-title">🔍 Packaging Compliance Checker</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Select a packaging format and compliance year to see recyclability grade, PPWR status, EPR fee direction, recycled content target, and Company A context.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
      <div class="form-group">
        <label class="form-label">Packaging Format</label>
        <select id="pkg-material-select" onchange="renderPackagingChecker()"></select>
      </div>
      <div class="form-group">
        <label class="form-label">Compliance Year</label>
        <select id="pkg-year-select" onchange="renderPackagingChecker()">
          <option value="2025">2025 — Now</option>
          <option value="2028">2028 — Labelling deadline</option>
          <option value="2030" selected>2030 — Main targets ★</option>
          <option value="2035">2035 — Escalated targets</option>
          <option value="2040">2040 — Final targets</option>
        </select>
      </div>
    </div>
    <p style="font-size:12px;color:var(--muted);margin-bottom:16px">⚡ Results update automatically when you change either selection.</p>
    <div id="pkg-checker-output" style="min-height:60px">
      <p style="color:var(--muted);font-size:14px">Select a packaging format above to see its compliance profile.</p>
    </div>
  </div>

  <!-- ── TRADE-OFF COMPARATOR ── -->
  <div class="card" style="margin-bottom:24px">
    <div class="card-title">⚖️ Trade-off Comparator — Switch Analysis</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Compare your current packaging format against an alternative. See the impact on recyclability grade, compliance status, EPR fee direction, and reuse target contribution side by side.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
      <div class="form-group">
        <label class="form-label">Current Format</label>
        <select id="tradeoff-from"></select>
      </div>
      <div class="form-group">
        <label class="form-label">Alternative Format</label>
        <select id="tradeoff-to"></select>
      </div>
    </div>
    <div style="display:flex;align-items:flex-end;gap:14px;margin-bottom:20px;flex-wrap:wrap">
      <div class="form-group" style="min-width:180px">
        <label class="form-label">Compare in Year</label>
        <select id="tradeoff-year">
          <option value="2025">2025 — Now</option>
          <option value="2028">2028</option>
          <option value="2030" selected>2030 ★</option>
          <option value="2035">2035</option>
          <option value="2040">2040</option>
        </select>
      </div>
      <button class="simulate-btn" onclick="renderTradeoff()">Compare</button>
    </div>
    <div id="tradeoff-output" style="min-height:60px">
      <p style="color:var(--muted);font-size:14px">Select two formats above to compare them.</p>
    </div>
  </div>

  <!-- ── GRADE REFERENCE TABLE ── -->
  <div class="card" style="margin-bottom:24px">
    <div class="card-title">📊 Recyclability Grade Reference (PPWR Article 6)</div>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--cream)">
            <th style="padding:10px;text-align:left;border:1px solid var(--border)">Grade</th>
            <th style="padding:10px;text-align:left;border:1px solid var(--border)">Description</th>
            <th style="padding:10px;text-align:left;border:1px solid var(--border)">EPR Fee</th>
            <th style="padding:10px;text-align:left;border:1px solid var(--border)">Status 2025</th>
            <th style="padding:10px;text-align:left;border:1px solid var(--border)">Status 2028</th>
            <th style="padding:10px;text-align:left;border:1px solid var(--border)">Status 2030+</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:9px;border:1px solid var(--border)"><strong style="color:#15803d">A</strong></td><td style="padding:9px;border:1px solid var(--border)">Easily recyclable at scale</td><td style="padding:9px;border:1px solid var(--border)">Lowest ↓↓</td><td style="padding:9px;border:1px solid var(--border)">✅</td><td style="padding:9px;border:1px solid var(--border)">✅</td><td style="padding:9px;border:1px solid var(--border)">✅ Permitted</td></tr>
          <tr style="background:var(--cream)"><td style="padding:9px;border:1px solid var(--border)"><strong style="color:#16a34a">B</strong></td><td style="padding:9px;border:1px solid var(--border)">Recyclable with minor limitations</td><td style="padding:9px;border:1px solid var(--border)">Low ↓</td><td style="padding:9px;border:1px solid var(--border)">✅</td><td style="padding:9px;border:1px solid var(--border)">✅</td><td style="padding:9px;border:1px solid var(--border)">✅ Permitted</td></tr>
          <tr><td style="padding:9px;border:1px solid var(--border)"><strong style="color:#d97706">C</strong></td><td style="padding:9px;border:1px solid var(--border)">Recyclable with significant limitations</td><td style="padding:9px;border:1px solid var(--border)">Medium →↑</td><td style="padding:9px;border:1px solid var(--border)">✅</td><td style="padding:9px;border:1px solid var(--border)">✅</td><td style="padding:9px;border:1px solid var(--border)">✅ 2030, ⚠️ phase-out review 2035</td></tr>
          <tr style="background:#fff3e0"><td style="padding:9px;border:1px solid var(--border)"><strong style="color:#dc2626">D</strong></td><td style="padding:9px;border:1px solid var(--border)">Recyclable only in specific conditions</td><td style="padding:9px;border:1px solid var(--border)">Very high ↑↑</td><td style="padding:9px;border:1px solid var(--border)">✅ (high fee)</td><td style="padding:9px;border:1px solid var(--border)">⚠️ Very high fee</td><td style="padding:9px;border:1px solid var(--border)"><strong style="color:#dc2626">🚫 BANNED</strong></td></tr>
          <tr style="background:#fee2e2"><td style="padding:9px;border:1px solid var(--border)"><strong style="color:#9b1c1c">E</strong></td><td style="padding:9px;border:1px solid var(--border)">Non-recyclable / impedes recycling</td><td style="padding:9px;border:1px solid var(--border)">Highest 🚫</td><td style="padding:9px;border:1px solid var(--border)">✅ (highest fee)</td><td style="padding:9px;border:1px solid var(--border)">⚠️ Highest fee</td><td style="padding:9px;border:1px solid var(--border)"><strong style="color:#dc2626">🚫 BANNED</strong></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ── PROHIBITED FORMATS ── -->
  <div class="card">
    <div class="card-title">🚫 Prohibited Packaging (PPWR Annex V)</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:14px">These formats are prohibited outright — separate from the grade ban. Some apply now; others from 2030.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">
      <div>
        <div style="padding:7px 0;border-bottom:1px solid var(--cream);font-size:13px;display:flex;gap:8px"><span style="color:var(--warn);flex-shrink:0">❌</span><span><strong>Now:</strong> Oxo-degradable / oxo-fragmentable plastic — any format, any tier</span></div>
        <div style="padding:7px 0;border-bottom:1px solid var(--cream);font-size:13px;display:flex;gap:8px"><span style="color:var(--warn);flex-shrink:0">❌</span><span><strong>Now:</strong> Packaging with PFAS above threshold levels</span></div>
        <div style="padding:7px 0;border-bottom:1px solid var(--cream);font-size:13px;display:flex;gap:8px"><span style="color:var(--amber);flex-shrink:0">❌</span><span><strong>2030:</strong> Grade D and E packaging — all formats, all tiers</span></div>
        <div style="padding:7px 0;font-size:13px;display:flex;gap:8px"><span style="color:var(--amber);flex-shrink:0">❌</span><span><strong>2030:</strong> Inks, adhesives or additives that impede recyclability</span></div>
      </div>
      <div style="padding-left:20px">
        <div style="padding:7px 0;border-bottom:1px solid var(--cream);font-size:13px;display:flex;gap:8px"><span style="color:var(--amber);flex-shrink:0">❌</span><span><strong>2030:</strong> Unnecessary packaging — void fill exceeding functional need</span></div>
        <div style="padding:7px 0;border-bottom:1px solid var(--cream);font-size:13px;display:flex;gap:8px"><span style="color:var(--amber);flex-shrink:0">❌</span><span><strong>2030:</strong> Single-use packaging for food/beverage consumed on-premises</span></div>
        <div style="padding:7px 0;font-size:13px;display:flex;gap:8px"><span style="color:var(--muted);flex-shrink:0">ℹ</span><span>Dangerous goods packaging has specific exemptions — check with legal for hazmat product lines</span></div>
      </div>
    </div>
  </div>

</div>

<!-- ════════════════════════════════════════════ PENALTIES ════════════════════════════════════════ -->
<div id="penalties" class="section">

  <h2 class="section-heading">Penalties &amp; Enforcement Model</h2>
  <p class="section-sub">PPWR Article 62 requires each Member State to establish effective, proportionate and dissuasive penalties. This section models enforcement risk by country and violation type.</p>

  <div class="alert alert-danger">
    <div class="alert-icon">🚨</div>
    <div>
      <strong>Training estimates only — not legal advice.</strong> Penalty ranges below are indicative figures for scenario planning, derived from existing national packaging enforcement precedents and published regulatory guidance. Exact penalties are set by national law and enforcement practice and will change as Member States implement PPWR penalty frameworks. Always consult qualified legal counsel before making compliance decisions.
    </div>
  </div>

  <!-- ── COUNTRY ENFORCEMENT PROFILES ── -->
  <h3 style="font-family:'Syne',sans-serif;font-weight:700;font-size:17px;margin-bottom:6px">Country Enforcement Profiles</h3>
  <p style="font-size:13px;color:var(--muted);margin-bottom:10px">Enforcement strictness varies significantly across EU Member States. Click a country to expand its profile.</p>
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">
    <div style="position:relative;flex:1;min-width:160px;max-width:260px">
      <span style="position:absolute;left:9px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--muted)">🔍</span>
      <input id="enf-search" type="text" placeholder="Filter country…" oninput="filterEnfProfiles()"
        style="width:100%;padding:7px 9px 7px 28px;border:1px solid var(--border);border-radius:8px;font-size:12px;font-family:'DM Sans',sans-serif;background:white;color:var(--ink);outline:none;box-sizing:border-box">
    </div>
    <div style="display:flex;gap:5px;flex-wrap:wrap">
      <button onclick="filterEnfProfiles('all')" id="ef-all"
        style="padding:5px 10px;border-radius:20px;border:1px solid var(--border);background:var(--ink);color:white;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">All</button>
      <button onclick="filterEnfProfiles('high')" id="ef-high"
        style="padding:5px 10px;border-radius:20px;border:1px solid #dc2626;background:white;color:#dc2626;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">🔴 High</button>
      <button onclick="filterEnfProfiles('medium')" id="ef-med"
        style="padding:5px 10px;border-radius:20px;border:1px solid #d97706;background:white;color:#d97706;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">🟡 Medium</button>
      <button onclick="filterEnfProfiles('low')" id="ef-low"
        style="padding:5px 10px;border-radius:20px;border:1px solid #0369a1;background:white;color:#0369a1;font-size:11px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">🟢 Low</button>
    </div>
  </div>
  <div id="enforcement-profiles" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:22px"></div>

  <!-- ── VIOLATION REFERENCE TABLE ── -->
  <h3 style="font-family:'Syne',sans-serif;font-weight:700;font-size:17px;margin-bottom:6px">Penalty Reference Table</h3>
  <p style="font-size:13px;color:var(--muted);margin-bottom:12px">Filter by violation type. Ranges reflect existing national packaging law precedents — PPWR-specific penalty scales are still being set by Member States.</p>

  <div class="penalty-selector" id="penalty-filter-btns">
    <button class="penalty-chip active" onclick="filterPenaltyTable('all',this)">All Violations</button>
    <button class="penalty-chip" onclick="filterPenaltyTable('epr-missing',this)">EPR Non-Registration</button>
    <button class="penalty-chip" onclick="filterPenaltyTable('recycled-content',this)">Recycled Content</button>
    <button class="penalty-chip" onclick="filterPenaltyTable('labelling',this)">Labelling / DPP</button>
    <button class="penalty-chip" onclick="filterPenaltyTable('reuse-target',this)">Reuse Target</button>
    <button class="penalty-chip" onclick="filterPenaltyTable('prohibited-pkg',this)">Prohibited Packaging</button>
    <button class="penalty-chip" onclick="filterPenaltyTable('grade-de',this)">Grade D/E Marketing</button>
  </div>

  <div style="border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow);margin-bottom:28px">
    <div style="overflow-y:auto;overflow-x:auto;max-height:420px">
      <table style="width:100%;border-collapse:collapse;font-size:13px;background:white;min-width:820px">
        <thead>
          <tr style="background:var(--sg-dark);color:white;position:sticky;top:0;z-index:2">
            <th style="padding:11px 14px;text-align:left;font-weight:600">Country</th>
            <th style="padding:11px 14px;text-align:left;font-weight:600">Enforcement</th>
            <th style="padding:11px 14px;text-align:left;font-weight:600">Violation</th>
            <th style="padding:11px 14px;text-align:left;font-weight:600">Indicative Range</th>
            <th style="padding:11px 14px;text-align:left;font-weight:600">Band</th>
            <th style="padding:11px 14px;text-align:left;font-weight:600">Non-Monetary Risk</th>
          </tr>
        </thead>
        <tbody id="penalty-tbody"></tbody>
      </table>
    </div>
    <div style="padding:7px 14px;background:var(--cream);border-top:1px solid var(--border);font-size:11px;color:var(--muted);display:flex;align-items:center;gap:6px">
      <span>↕</span> Scroll to see all rows · Use filters above to narrow results
    </div>
  </div>

  <!-- ── PENALTY BAND ESTIMATOR ── -->
  <div class="fine-calc">
    <div class="card-title">🧮 Penalty Band Estimator</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:6px">Select country, violation type, and scale of incident. The estimator outputs a <strong>qualitative band</strong> with an indicative range — not a precise fine amount.</p>
    <div class="alert alert-warn" style="margin-bottom:16px">
      <div class="alert-icon">⚠️</div>
      <div style="font-size:12px"><strong>These are training estimates only.</strong> Actual fines are determined by national enforcement authorities applying national law. Ranges are illustrative for training and scenario planning purposes only.</div>
    </div>

    <div class="fine-inputs">
      <div class="form-group">
        <label class="form-label">Country</label>
        <select id="fc-country" onchange="clearFineResult()">
          <option value="AT">🇦🇹 Austria</option>
          <option value="BE">🇧🇪 Belgium</option>
          <option value="BG">🇧🇬 Bulgaria</option>
          <option value="HR">🇭🇷 Croatia</option>
          <option value="CY">🇨🇾 Cyprus</option>
          <option value="CZ">🇨🇿 Czech Republic</option>
          <option value="DK">🇩🇰 Denmark</option>
          <option value="EE">🇪🇪 Estonia</option>
          <option value="FI">🇫🇮 Finland</option>
          <option value="FR">🇫🇷 France</option>
          <option value="DE">🇩🇪 Germany</option>
          <option value="GR">🇬🇷 Greece</option>
          <option value="HU">🇭🇺 Hungary</option>
          <option value="IE">🇮🇪 Ireland</option>
          <option value="IT">🇮🇹 Italy</option>
          <option value="LV">🇱🇻 Latvia</option>
          <option value="LT">🇱🇹 Lithuania</option>
          <option value="LU">🇱🇺 Luxembourg</option>
          <option value="MT">🇲🇹 Malta</option>
          <option value="NL">🇳🇱 Netherlands</option>
          <option value="NO">🇳🇴 Norway (EEA)</option>
          <option value="PL">🇵🇱 Poland</option>
          <option value="PT">🇵🇹 Portugal</option>
          <option value="RO">🇷🇴 Romania</option>
          <option value="SK">🇸🇰 Slovakia</option>
          <option value="SI">🇸🇮 Slovenia</option>
          <option value="ES">🇪🇸 Spain</option>
          <option value="SE">🇸🇪 Sweden</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Violation Type</label>
        <select id="fc-violation" onchange="clearFineResult()">
          <option value="epr-missing">EPR non-registration</option>
          <option value="epr-underreport">EPR under-reporting</option>
          <option value="recycled-content">Recycled content non-compliance</option>
          <option value="labelling">Labelling / DPP missing</option>
          <option value="reuse-target">Reuse target failure</option>
          <option value="prohibited-pkg">Placing prohibited packaging</option>
          <option value="grade-de">Marketing Grade D/E after 2030</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Scale of Incident</label>
        <select id="fc-scale" onchange="clearFineResult()">
          <option value="isolated">Isolated — first-time, self-reported or minor</option>
          <option value="persistent">Persistent — repeated or known to authority</option>
          <option value="systemic">Systemic — deliberate, large-scale, or concealed</option>
        </select>
      </div>
    </div>
    <button class="simulate-btn" style="margin-bottom:0" onclick="calculateBandedFine()">▶ Estimate Penalty Band</button>

    <div id="fine-result-panel" style="display:none;margin-top:20px;background:linear-gradient(135deg,#1a1a2e,#2d1515);color:white;border-radius:12px;padding:26px"></div>
  </div>

</div>

<!-- ════════════════════════════════════════════ TARGETS ════════════════════════════════════════ -->
<div id="targets" class="section">

  <h2 class="section-heading">Recycled Content &amp; Reuse Targets</h2>
  <p class="section-sub">PPWR sets binding minimum recycled content targets for plastic packaging. Use this section to see where Company A's current packaging profiles likely stand vs. 2030 targets.</p>

  <div class="card" style="margin-bottom:24px">
    <div class="card-title">♻️ Recycled Content Targets — Plastic Packaging (PPWR Article 7)</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:8px">PPWR sets <strong>different recycled content targets for different packaging categories</strong> — a single percentage does not apply to all plastic packaging. Targets are mandatory minimums, not aspirational goals. The categories and thresholds below reflect Regulation (EU) 2025/40 Annex II of Regulation (EU) 2025/40; recycled content calculation methodology implementing act expected mid-2026.</p>
    <div class="alert alert-info" style="margin-bottom:16px;margin-top:8px">
      <div class="alert-icon">ℹ️</div>
      <div style="font-size:13px">The "30% by 2030" headline figure that appears in media reporting refers to <strong>non-contact-sensitive plastic packaging only</strong>. Contact-sensitive packaging (food, medical) has a lower threshold (10% by 2030) because of food safety constraints on recycled material. Make sure you apply the right target to the right packaging category.</div>
    </div>

    <div style="margin-bottom:20px">
      <h4 style="font-size:14px;font-weight:600;margin-bottom:14px;color:var(--muted)">CONTACT-SENSITIVE (Food / Medical)</h4>
      <div class="meter-row">
        <div class="meter-label">By 2030</div>
        <div class="meter-bar"><div class="meter-fill meter-warn" style="width:10%"></div></div>
        <div class="meter-pct">10%</div>
        <div class="meter-target">Target: 10%</div>
      </div>
      <div class="meter-row">
        <div class="meter-label">By 2040</div>
        <div class="meter-bar"><div class="meter-fill meter-ok" style="width:50%"></div></div>
        <div class="meter-pct">50%</div>
        <div class="meter-target">Target: 50%</div>
      </div>
    </div>

    <div style="margin-bottom:20px">
      <h4 style="font-size:14px;font-weight:600;margin-bottom:14px;color:var(--muted)">SINGLE-USE BEVERAGE BOTTLES (PET)</h4>
      <div class="meter-row">
        <div class="meter-label">By 2025 (Existing)</div>
        <div class="meter-bar"><div class="meter-fill meter-ok" style="width:25%"></div></div>
        <div class="meter-pct">25%</div>
        <div class="meter-target">Target: 25%</div>
      </div>
      <div class="meter-row">
        <div class="meter-label">By 2030</div>
        <div class="meter-bar"><div class="meter-fill meter-warn" style="width:30%"></div></div>
        <div class="meter-pct">30%</div>
        <div class="meter-target">Target: 30%</div>
      </div>
    </div>

    <div style="margin-bottom:20px">
      <h4 style="font-size:14px;font-weight:600;margin-bottom:14px;color:var(--muted)">OTHER PLASTIC PACKAGING (Most Company A Products)</h4>
      <div class="meter-row">
        <div class="meter-label">By 2030</div>
        <div class="meter-bar"><div class="meter-fill meter-warn" style="width:30%"></div></div>
        <div class="meter-pct">30%</div>
        <div class="meter-target">Target: 30%</div>
      </div>
      <div class="meter-row">
        <div class="meter-label">By 2035</div>
        <div class="meter-bar"><div class="meter-fill meter-warn" style="width:40%"></div></div>
        <div class="meter-pct">40%</div>
        <div class="meter-target">Target: 40%</div>
      </div>
      <div class="meter-row">
        <div class="meter-label">By 2040</div>
        <div class="meter-bar"><div class="meter-fill meter-ok" style="width:55%"></div></div>
        <div class="meter-pct">55%</div>
        <div class="meter-target">Target: 55%</div>
      </div>
    </div>
  </div>

  <div class="card" style="margin-bottom:24px">
    <div class="card-title">🔁 Reuse Targets — Transport Packaging</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Binding reuse targets apply to transport packaging placed on the market. Critical for Company A's inbound and outbound logistics flows.</p>
    <div class="meter-row">
      <div class="meter-label">By 2030 — minimum reusable</div>
      <div class="meter-bar"><div class="meter-fill meter-warn" style="width:40%"></div></div>
      <div class="meter-pct">40%</div>
      <div class="meter-target">Target: 40%</div>
    </div>
    <div class="meter-row">
      <div class="meter-label">By 2040 — minimum reusable</div>
      <div class="meter-bar"><div class="meter-fill meter-ok" style="width:70%"></div></div>
      <div class="meter-pct">70%</div>
      <div class="meter-target">Target: 70%</div>
    </div>
    <div class="alert alert-warn" style="margin-top:16px">
      <div class="alert-icon">⚠️</div>
      <div>For <strong>own manufactured products</strong>, Company A controls the outbound transport packaging specification — this means you have the ability (and obligation) to shift to reusable pallets, returnable crates, and refillable containers. This is a direct cost and operational planning item for the supply chain team.</div>
    </div>
  </div>
</div>

<!-- ════════════════════════════════════════ GLOSSARY ════════════════════════════════════ -->
<!-- ════════════════════════════════════════════ SCOPE ════════════════════════════════════════ -->
<div id="scope" class="section">

  <h2 class="section-heading">Scope, Exemptions &amp; Delegated Acts</h2>
  <p class="section-sub">What counts as packaging under PPWR, what is excluded, Company A-specific exemptions, and which rules are still being finalised by the European Commission.</p>

  <!-- ── IN / OUT OF SCOPE ── -->
  <div class="grid-2" style="margin-bottom:24px">
    <div class="card">
      <div class="card-title">✅ What Counts as Packaging (PPWR Article 3 + Annex I)</div>
      <p style="font-size:12px;color:var(--muted);margin-bottom:12px">All items below are subject to PPWR obligations when placed on the market.</p>
      <div id="scope-in-list"></div>
    </div>
    <div class="card">
      <div class="card-title">❌ What is Excluded from PPWR Scope</div>
      <p style="font-size:12px;color:var(--muted);margin-bottom:12px">These items are not packaging under PPWR — no obligations apply to them as packaging.</p>
      <div id="scope-out-list"></div>
    </div>
  </div>

  <!-- ── CA EXEMPTIONS ── -->
  <h3 style="font-family:'Syne',sans-serif;font-weight:700;font-size:17px;margin-bottom:6px">⚡ Company A — High-Relevance Exemptions &amp; Special Cases</h3>
  <p style="font-size:13px;color:var(--muted);margin-bottom:16px">These situations may modify Company A's obligations under PPWR. Each requires specific legal assessment — this is a guide to where to look, not a definitive ruling.</p>
  <div id="ca-exemptions-list"></div>

  <!-- ── DELEGATED ACTS TRACKER ── -->
  <div class="card" style="margin-top:8px">
    <div class="card-title">📋 Delegated &amp; Implementing Acts Tracker</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:6px">PPWR grants the European Commission power to adopt delegated and implementing acts that will fill in the technical detail. Many are still pending. Rules marked <strong>pending</strong> in this tool reflect the Regulation's framework only — final criteria will be confirmed when these acts are adopted.</p>
    <div class="alert alert-warn" style="margin-bottom:16px">
      <div class="alert-icon">⚠️</div>
      <div style="font-size:13px">This tracker reflects the status as of <strong>March 2026</strong>. PPWR general application: 12 August 2026. The legal/compliance team should update the <code>DELEGATED_ACTS</code> config in the app's admin section when new acts are adopted. See the update instructions at the top of the script block.</div>
    </div>
    <div id="delegated-acts-list"></div>
  </div>

</div>

<div id="glossary" class="section">
  <h2 class="section-heading">Glossary</h2>
  <p class="section-sub">Key PPWR terms explained in plain English, with Company A context.</p>
  <div class="glossary-search">
    <input type="text" id="gloss-input" placeholder="Search terms... e.g. EPR, producer, recyclability" oninput="filterGlossary()">
    <span class="search-icon">🔍</span>
  </div>
  <div id="glossary-list"></div>
</div>

<!-- ════════════════════════════════════════ ROLES ════════════════════════════════════ -->
<div id="roles" class="section">
  <h2 class="section-heading">Who Does What</h2>
  <p class="section-sub">PPWR touches multiple functions across Company A Europe. Here is who owns what.</p>
  <div class="role-cards">
    <div class="role-card">
      <div class="role-icon">🚛</div>
      <div class="role-title">Supply Chain / Logistics</div>
      <ul class="role-tasks">
        <li class="role-task">Track packaging types &amp; weights across all inbound/outbound flows</li>
        <li class="role-task">Manage transport packaging reuse programmes (pallets, crates)</li>
        <li class="role-task">Coordinate with 3rd party suppliers on packaging specifications</li>
        <li class="role-task">Ensure warehouse flows trigger correct EPR registration per country</li>
        <li class="role-task">For own-manufactured products: specify compliant transport packaging</li>
      </ul>
    </div>
    <div class="role-card">
      <div class="role-icon">⚖️</div>
      <div class="role-title">Legal / Compliance</div>
      <ul class="role-tasks">
        <li class="role-task">Register with EPR systems in all EU/EEA markets where packaging is placed</li>
        <li class="role-task">Monitor EPR scheme updates and penalty rule changes in each market where CA operates</li>
        <li class="role-task">Review Incoterms in contracts to confirm EPR liability allocation</li>
        <li class="role-task">Ensure own-manufactured product packaging is legally compliant by 2028/2030</li>
        <li class="role-task">Manage penalty risk and enforcement correspondence</li>
      </ul>
    </div>
    <div class="role-card">
      <div class="role-icon">🏗️</div>
      <div class="role-title">Manufacturing / R&amp;D</div>
      <ul class="role-tasks">
        <li class="role-task">Redesign own-product packaging to achieve recyclability Grade A or B</li>
        <li class="role-task">Source packaging materials with minimum recycled content (30% by 2030)</li>
        <li class="role-task">Eliminate Grade E and prohibited materials from packaging specs</li>
        <li class="role-task">Implement QR code / digital passport on product packaging by 2030</li>
        <li class="role-task">Conduct packaging minimisation review (no unnecessary packaging)</li>
      </ul>
    </div>
    <div class="role-card">
      <div class="role-icon">💰</div>
      <div class="role-title">Finance / Controlling</div>
      <ul class="role-tasks">
        <li class="role-task">Model EPR fee increases as packaging recyclability grades improve</li>
        <li class="role-task">Budget for packaging redesign capex (own manufactured products)</li>
        <li class="role-task">Quantify fine exposure by country using the Penalties calculator</li>
        <li class="role-task">Track EPR fee modulation savings from upgrading packaging grades</li>
      </ul>
    </div>
    <div class="role-card">
      <div class="role-icon">🛒</div>
      <div class="role-title">Procurement</div>
      <ul class="role-tasks">
        <li class="role-task">Audit 3rd party supplier packaging for PPWR compliance</li>
        <li class="role-task">Insert PPWR packaging clauses into supplier contracts</li>
        <li class="role-task">Source recycled-content packaging materials for own production</li>
        <li class="role-task">Negotiate packaging specification changes with sister company suppliers</li>
      </ul>
    </div>
    <div class="role-card">
      <div class="role-icon">📊</div>
      <div class="role-title">Marketing / Product Management</div>
      <ul class="role-tasks">
        <li class="role-task">Own the harmonised sorting label design for own-brand products</li>
        <li class="role-task">Coordinate digital passport / QR code programme by 2030</li>
        <li class="role-task">Ensure product catalogue accurately reflects packaging grades</li>
        <li class="role-task">Communicate packaging sustainability credentials to customers</li>
      </ul>
    </div>
  </div>
</div>

<script>


// ═══════════════════════════════════════════════════════════════════════════
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║          PPWR COMPLIANCE CONFIG — ADMIN UPDATE SECTION                 ║
// ║  Update this block when new delegated/implementing acts are adopted.    ║
// ║  Do NOT modify application logic below the divider line.               ║
// ╚══════════════════════════════════════════════════════════════════════════╝
//
// HOW TO UPDATE:
//   1. Change target values in RC_TARGETS or REUSE_TARGETS when new acts set them
//   2. Add rows to BANNED_FORMATS_LIST when new bans are confirmed
//   3. Update DELEGATED_ACTS status from 'pending' → 'adopted' and add effectiveFrom
//   4. Update PPWR_VERSION.lastUpdated to today's date
//   5. Update the 'source_act' field on any OBLIGATION_DB rows that change
//
// ═══════════════════════════════════════════════════════════════════════════

const PPWR_VERSION = {
  regulation: 'Regulation (EU) 2025/40',
  lastUpdated: '2026-03-01',
  reflectsText: 'Official Journal text as published February 2025',
  disclaimer: 'Many delegated and implementing acts remain pending. Rules marked "pending act" reflect the Regulation\'s framework obligations only — final criteria will be set by delegated acts.',
};

// ── DELEGATED & IMPLEMENTING ACTS TRACKER ────────────────────────────────
// status: 'adopted' | 'pending' | 'in-progress'
const DELEGATED_ACTS = [
  {
    id: 'recyclability-criteria',
    title: 'Delegated Regulation — Recyclability Assessment Criteria (Art. 6(4))',
    status: 'pending',
    effectiveFrom: null,
    expectedBy: '2026',
    notes: 'Will define the final methodology for assigning grades A–E to packaging. Current grades in this tool are based on the Regulation\'s framework criteria and publicly available Commission guidance — they will be confirmed or revised when this act is adopted.',
    affects: ['OBLIGATION_DB:recyclability-grade', 'PACKAGING_MATERIALS:all grades'],
  },
  {
    id: 'recycled-content-calc',
    title: 'Implementing Regulation — Recycled Content Calculation Method (Art. 7(8))',
    status: 'pending',
    effectiveFrom: null,
    expectedBy: '2026',
    notes: 'Will define exactly how recycled content percentage is calculated and verified. Certificates of conformity requirements will be specified. Targets in RC_TARGETS are correct per Annex II — only the calculation methodology is pending.',
    affects: ['RC_TARGETS', 'OBLIGATION_DB:rc-non-contact-2030', 'OBLIGATION_DB:rc-contact-2030'],
  },
  {
    id: 'dpp-specs',
    title: 'Delegated Regulation — Digital Product Passport Specifications (Art. 13(7))',
    status: 'pending',
    effectiveFrom: null,
    expectedBy: '2027',
    notes: 'Will define the exact data fields required in the digital product passport, the technical format for the QR code, and the hosting/accessibility requirements. The 2030 deadline is confirmed — the technical specification is pending.',
    affects: ['OBLIGATION_DB:dpp-2030'],
  },
  {
    id: 'reuse-formats',
    title: 'Delegated Regulation — Reusable Packaging Design Requirements (Art. 11(4))',
    status: 'pending',
    effectiveFrom: null,
    expectedBy: '2026',
    notes: 'Will define the minimum design requirements that transport and sales packaging must meet to qualify as "reusable" for the purposes of the reuse targets. Key for determining which formats count towards the 40% (2030) target.',
    affects: ['OBLIGATION_DB:reuse-transport-2030', 'PACKAGING_MATERIALS:reusable flag'],
  },
  {
    id: 'grade-c-phaseout',
    title: 'Delegated Act — Grade C Phase-out Timeline (Art. 6(5))',
    status: 'pending',
    effectiveFrom: null,
    expectedBy: '2028',
    notes: 'Will confirm whether and when Grade C packaging faces mandatory phase-out after 2030. Until adopted, Grade C remains permitted post-2030.',
    affects: ['GRADE_STATUS:C', 'OBLIGATION_DB:recyclability-grade'],
  },
  {
    id: 'epr-modulation',
    title: 'Implementing Act — EPR Fee Modulation Criteria (Art. 45(6))',
    status: 'pending',
    effectiveFrom: null,
    expectedBy: '2026',
    notes: 'Will define the exact criteria by which EPR fees must be modulated by recyclability grade. Current fee direction indicators in this tool are qualitative — precise modulation factors will be set by this act.',
    affects: ['COUNTRY_ENFORCEMENT:ranges', 'EPR_FEE_LABELS'],
  },
];

// ── BANNED FORMATS LIST (admin-maintainable) ──────────────────────────────
// Add new entries here when bans are confirmed by delegated acts.
// banType: 'current' (applies now) | '2030' (applies from 2030)
const BANNED_FORMATS_LIST = [
  {
    id: 'oxo-degradable',
    label: 'Oxo-degradable / oxo-fragmentable plastic packaging',
    banType: 'current',
    effectiveFrom: '2025-02-11',
    article: 'Annex V, point 1',
    source_act: 'Regulation (EU) 2025/40',
    notes: 'Applies to all packaging tiers. Any supplier using this material is in current violation.',
  },
  {
    id: 'pfas-above-threshold',
    label: 'Packaging containing PFAS above threshold levels',
    banType: 'current',
    effectiveFrom: '2025-02-11',
    article: 'Art. 5(1)(c)',
    source_act: 'Regulation (EU) 2025/40',
    notes: 'Threshold levels to be confirmed by implementing act — precautionary approach recommended.',
  },
  {
    id: 'grade-d-e',
    label: 'Grade D and E packaging (all formats)',
    banType: '2030',
    effectiveFrom: '2030-01-01',
    article: 'Art. 6(1)',
    source_act: 'Regulation (EU) 2025/40',
    notes: 'Both Grade D and Grade E banned from 2030. Final grade criteria subject to delegated act.',
  },
  {
    id: 'disruptive-inks',
    label: 'Packaging with inks, adhesives or additives that impede recyclability',
    banType: '2030',
    effectiveFrom: '2030-01-01',
    article: 'Art. 5(1)(b)',
    source_act: 'Regulation (EU) 2025/40',
    notes: 'Specific prohibited substances to be defined by implementing act.',
  },
  {
    id: 'unnecessary-packaging',
    label: 'Unnecessary packaging (void fill exceeding functional need)',
    banType: '2030',
    effectiveFrom: '2030-01-01',
    article: 'Art. 9',
    source_act: 'Regulation (EU) 2025/40',
    notes: 'Exact minimisation criteria to be set by delegated act.',
  },
];

// ── SCOPE DATA (admin-maintainable) ──────────────────────────────────────
const SCOPE_DATA = {
  inScope: [
    { item: 'Cardboard boxes and cartons', article: 'Annex I', notes: 'All sizes, all tiers' },
    { item: 'Plastic bags, film and wrapping', article: 'Annex I', notes: 'Including stretch wrap and shrink film' },
    { item: 'Glass bottles and jars', article: 'Annex I', notes: 'Including closures and caps' },
    { item: 'Metal tins and cans', article: 'Annex I', notes: 'Steel and aluminium' },
    { item: 'Wooden pallets and crates', article: 'Annex I', notes: 'Transport tier — reuse targets apply' },
    { item: 'Plastic buckets, tubs and containers', article: 'Annex I', notes: 'Including lids if sold with container' },
    { item: 'Composite packaging (Tetra Pak type)', article: 'Annex I', notes: 'Multi-material — recyclability assessment required' },
    { item: 'Protective wrapping around products', article: 'Annex I', notes: 'e.g. bubble wrap, foam inserts around glass' },
    { item: 'Labels, tapes and seals on packaging', article: 'Annex I', notes: 'Must not impede recyclability of host packaging' },
    { item: 'Bags used for construction chemicals', article: 'Annex I', notes: 'Paper valve sacks, PE bags, laminate bags — all in scope' },
    { item: 'Corner boards, edge protectors', article: 'Annex I', notes: 'Transport tier' },
    { item: 'Strapping and banding', article: 'Annex I', notes: 'Steel, plastic, paper — all in scope' },
  ],
  outOfScope: [
    { item: 'Fixed/permanent parts of a product (e.g. printer cartridge body)', article: 'Annex I Note 1', notes: 'Integral to the product, not separable' },
    { item: 'Flower pots sold containing a plant', article: 'Annex I Note 2', notes: 'Pot is part of the product, not packaging' },
    { item: 'Paint tins sold as the product itself', article: 'Annex I Note 2', notes: 'Container is the product' },
    { item: 'Tea bags and coffee pods (product-integral)', article: 'Annex I Note 3', notes: 'Functional part of the product consumed in use' },
    { item: 'Wax around cheese (consumed with product)', article: 'Annex I Note 3', notes: 'Forms part of the food — not packaging' },
    { item: 'Tape reel cores and CD jewel cases', article: 'Annex I Note 1', notes: 'Integral to the product' },
    { item: 'Graveyard decoration pots', article: 'Art. 3(1)', notes: 'Not sold for commercial packaging purpose' },
  ],
  caRelevant: [
    {
      item: 'Dangerous goods packaging (ADR/IMDG compliant)',
      status: 'modified-obligations',
      article: 'Art. 5(3)',
      detail: 'Packaging required to comply with the European Agreement on the International Carriage of Dangerous Goods (ADR) or the IMDG Code may have modified recyclability and labelling obligations where PPWR requirements would conflict with safety requirements. Company A product lines with hazmat classification (sealants, adhesives, construction chemicals) should seek specific legal advice on interaction between PPWR and dangerous goods regulations.',
      urgency: 'high',
    },
    {
      item: 'Contact-sensitive packaging (food/pharmaceutical direct contact)',
      status: 'lower-rc-threshold',
      article: 'Art. 7(3), Annex II',
      detail: 'Packaging in direct contact with food or pharmaceutical products qualifies for the lower recycled content threshold: 10% by 2030 (not 30%). This applies because food safety regulations restrict the use of recycled materials in food-contact applications. If any Company A product is classified as food-contact (e.g. food-grade sealants), confirm the correct threshold applies.',
      urgency: 'medium',
    },
    {
      item: 'Packaging for medical devices (Class II/III)',
      status: 'labelling-exemption',
      article: 'Art. 12(6)',
      detail: 'Packaging for Class II and III medical devices under EU MDR 2017/745 has specific exemptions from some harmonised sorting label requirements where medical device labelling rules take precedence. Not a primary concern for construction products but relevant if any CA product lines touch medical or safety-critical applications.',
      urgency: 'low',
    },
    {
      item: 'Reusable transport packaging in closed-loop B2B systems',
      status: 'modified-epr',
      article: 'Art. 44(3)',
      detail: 'Transport packaging used exclusively in a closed-loop system (i.e. CA-to-CA entity only, never placed on the market for a third party) may qualify for modified EPR registration treatment. This is relevant for intercompany flows between EU entities. Seek legal confirmation of the closed-loop definition in each national EPR scheme.',
      urgency: 'medium',
    },
    {
      item: 'Packaging for products exported outside the EU',
      status: 'epr-exclusion',
      article: 'Art. 44(2)',
      detail: 'Packaging on products exported from the EU can be excluded from EPR reporting in the exporting Member State. Documentary evidence of export is required (customs declarations, shipping documents). Ensure your ERP captures destination country per shipment.',
      urgency: 'medium',
    },
  ],
};

// ── RENDER SCOPE SECTION ──────────────────────────────────────────────────
function renderScopeSection() {
  renderScopeInOut();
  renderCAExemptions();
  renderDelegatedActsTracker();
}

function renderScopeInOut() {
  const inList = document.getElementById('scope-in-list');
  const outList = document.getElementById('scope-out-list');
  if (!inList || !outList) return;

  inList.innerHTML = SCOPE_DATA.inScope.map((r,i) => `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;padding:8px 0;border-bottom:1px solid var(--cream);gap:10px;font-size:13px${i%2===0?'':';background:transparent'}">
      <div style="flex:1">
        <span style="font-weight:600">${r.item}</span>
        <span style="display:block;font-size:11px;color:var(--muted)">${r.notes}</span>
      </div>
      <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
        <span style="padding:2px 7px;background:#dcfce7;color:#15803d;border-radius:4px;font-size:10px;font-weight:700">IN SCOPE</span>
        <span style="font-size:10px;color:var(--muted)">${r.article}</span>
      </div>
    </div>`).join('');

  outList.innerHTML = SCOPE_DATA.outOfScope.map((r,i) => `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;padding:8px 0;border-bottom:1px solid var(--cream);gap:10px;font-size:13px">
      <div style="flex:1">
        <span style="font-weight:600">${r.item}</span>
        <span style="display:block;font-size:11px;color:var(--muted)">${r.notes}</span>
      </div>
      <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
        <span style="padding:2px 7px;background:#fee2e2;color:#dc2626;border-radius:4px;font-size:10px;font-weight:700">OUT</span>
        <span style="font-size:10px;color:var(--muted)">${r.article}</span>
      </div>
    </div>`).join('');
}

function renderCAExemptions() {
  const container = document.getElementById('ca-exemptions-list');
  if (!container) return;

  const urgencyStyle = {
    high:   { bg:'#fee2e2', color:'#dc2626', label:'High priority' },
    medium: { bg:'#fef3c7', color:'#d97706', label:'Medium priority' },
    low:    { bg:'#e0f2fe', color:'#0369a1', label:'Awareness' },
  };
  const statusLabel = {
    'modified-obligations': 'Modified obligations',
    'lower-rc-threshold':   'Lower RC threshold',
    'labelling-exemption':  'Labelling exemption',
    'modified-epr':         'Modified EPR treatment',
    'epr-exclusion':        'EPR exclusion available',
  };

  container.innerHTML = SCOPE_DATA.caRelevant.map(r => {
    const u = urgencyStyle[r.urgency];
    const s = statusLabel[r.status] || r.status;
    return `
    <div style="background:white;border:1px solid var(--border);border-radius:10px;padding:18px;margin-bottom:12px;box-shadow:var(--shadow)">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:10px;flex-wrap:wrap">
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:14px;flex:1">${r.item}</div>
        <div style="display:flex;gap:6px;flex-shrink:0;flex-wrap:wrap">
          <span style="padding:3px 9px;border-radius:4px;background:${u.bg};color:${u.color};font-size:10px;font-weight:700;text-transform:uppercase">${u.label}</span>
          <span style="padding:3px 9px;border-radius:4px;background:var(--cream);color:var(--muted);font-size:10px;font-weight:600">${s}</span>
          <span style="padding:3px 9px;border-radius:4px;background:var(--light-blue);color:var(--blue);font-size:10px;font-weight:600">${r.article}</span>
        </div>
      </div>
      <p style="font-size:13px;color:var(--muted);line-height:1.7">${r.detail}</p>
    </div>`;
  }).join('');
}

function renderDelegatedActsTracker() {
  const container = document.getElementById('delegated-acts-list');
  if (!container) return;

  const statusStyle = {
    adopted:     { bg:'#dcfce7', color:'#15803d', label:'Adopted', icon:'✅' },
    pending:     { bg:'#fef3c7', color:'#d97706', label:'Pending',  icon:'⏳' },
    'in-progress': { bg:'#e0f2fe', color:'#0369a1', label:'In progress', icon:'🔄' },
  };

  container.innerHTML = DELEGATED_ACTS.map(act => {
    const s = statusStyle[act.status];
    return `
    <div style="display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-bottom:1px solid var(--border)">
      <div style="flex-shrink:0;padding:4px 10px;border-radius:20px;background:${s.bg};color:${s.color};font-size:11px;font-weight:700;white-space:nowrap">${s.icon} ${s.label}</div>
      <div style="flex:1">
        <div style="font-weight:600;font-size:13px;margin-bottom:3px">${act.title}</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.6;margin-bottom:4px">${act.notes}</div>
        ${act.effectiveFrom ? `<div style="font-size:11px;color:var(--green);font-weight:600">In force: ${act.effectiveFrom}</div>` :
          act.expectedBy ? `<div style="font-size:11px;color:var(--amber)">Expected: ${act.expectedBy}</div>` : ''}
        <div style="font-size:10px;color:var(--muted);margin-top:3px">Affects: ${act.affects.join(' · ')}</div>
      </div>
    </div>`;
  }).join('');
}


// ── NAVIGATION ──
function showSectionByName(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  // Activate the matching nav button
  document.querySelectorAll('.nav-btn').forEach(b => {
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + id + "'")) {
      b.classList.add('active');
    }
  });
  if (id === 'countries') renderCountryCards();
  if (id === 'glossary') renderGlossary();
  if (id === 'penalties') { renderEnforcementProfiles(); renderPenaltyTable('all'); }
  if (id === 'scope') renderScopeSection();
  if (id === 'packaging') { populateMaterialSelects(); setTimeout(renderPackagingChecker, 50); }
}

function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  // Activate nav button - use passed btn, or find matching one
  if (btn) {
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.nav-btn').forEach(b => {
      if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + id + "'")) {
        b.classList.add('active');
      }
    });
  }
  renderSection(id);
}

function renderSection(id) {
  if (id === 'glossary') renderGlossary();
  if (id === 'penalties') { renderEnforcementProfiles(); renderPenaltyTable('all'); }
  if (id === 'packaging') { populateMaterialSelects(); setTimeout(renderPackagingChecker, 50); }
  if (id === 'scope') renderScopeSection();
  if (id === 'countries') renderCountryCards();
  if (id === 'roles') renderRoleCards();
}

// ── COUNTRY TOGGLE ──
function toggleCountry(code) {
  const lcode = code.toLowerCase();
  const card = document.getElementById('cc-' + lcode);
  if (!card) return;
  const wasSelected = card.classList.contains('selected');
  // Close all cards and reset all chevrons
  document.querySelectorAll('.country-card').forEach(c => c.classList.remove('selected'));
  ['no','se','dk','fi','ee','lv','lt'].forEach(c => {
    const ch = document.getElementById('cc-chevron-' + c);
    if (ch) ch.style.transform = 'rotate(0deg)';
  });
  // Open this card if it was closed
  if (!wasSelected) {
    card.classList.add('selected');
    const chevron = document.getElementById('cc-chevron-' + lcode);
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// PPWR RULE ENGINE v1.0
// Three layers: (1) Role Resolution, (2) Obligation Mapping, (3) Rendering
// Structured so legal/compliance can update OBLIGATION_DB rows without
// touching the engine logic.
// ═══════════════════════════════════════════════════════════════════════════

// ── LAYER 0: COUNTRY DATA ──────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════
// COUNTRY CONFIG — single source of truth for all 28 EU/EEA countries
// Update fields here; country cards, rule engine and simulator all read from this.
// ═══════════════════════════════════════════════════════════════════════════
const COUNTRY_CONFIG = {
  NO: {
    code: 'NO',
    name: 'Norway',
    flag: '🇳🇴',
    membership: 'EEA',          // 'EU' | 'EEA'
    eeaLag: true,
    eeaLagNote: 'PPWR will apply after formal EEA Agreement incorporation — estimated mid-2026 to early 2027. Until then, Norwegian national packaging rules and penalties apply under the existing Packaging Regulation.',
    eprSchemes: ['Grønt Punkt Norge', 'Pant (beverage deposit system)'],
    eprSchemeUrl: 'https://www.grontpunkt.no',
    regulator: 'Miljødirektoratet',
    regulatorUrl: 'https://www.miljodirektoratet.no',
    ppwrStatus: 'eea-pending',
    ppwrStatusLabel: 'EEA — Pending Incorporation',
    ppwrStatusNote: 'EEA member — PPWR adoption via EEA Agreement, ~12–18 month lag after EU entry into force',
    registrationThreshold: 'Register with Grønt Punkt Norge — no minimum tonnage threshold for most categories',
    languages: ['no'],
    languageLabel: 'Norwegian (Bokmål / Nynorsk)',
    depositSystem: true,
    depositNote: 'Pant deposit system covers beverage containers — these are largely outside the standard EPR fee structure',
    notableFeatures: ['Advanced existing EPR framework', 'Pant deposit return system', 'EEA adoption lag vs EU dates'],
    caAction: 'Register with Grønt Punkt Norge for all packaging placed on the Norwegian market. Monitor EEA Joint Committee process for PPWR incorporation date. Transport packaging reuse requirements will apply once PPWR is incorporated.',
    enforcement: 'high',
  },
  SE: {
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    membership: 'EU',
    eeaLag: false,
    eeaLagNote: null,
    eprSchemes: ['FTI Förpackningsinsamlingen', 'Repa Register'],
    eprSchemeUrl: 'https://www.ftiab.se',
    regulator: 'Naturvårdsverket',
    regulatorUrl: 'https://www.naturvardsverket.se',
    ppwrStatus: 'directly-applicable',
    ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; EPR scheme being updated to meet Aug 2026 operational deadline',
    registrationThreshold: 'Register if placing >1 tonne packaging on Swedish market per year',
    languages: ['sv'],
    languageLabel: 'Swedish',
    depositSystem: true,
    depositNote: 'Pantbanken / Returpack deposit systems for cans and bottles — separate from packaging EPR',
    notableFeatures: ['Among strictest enforcement in EU', 'Daily accruing penalties possible', 'Public naming of non-compliant operators', 'Criminal referral for serious cases'],
    caAction: 'Maintain FTI registration. Prepare for modulated EPR fee structure under PPWR — recyclability grades will directly affect costs. Priority: audit all packaging grades for Swedish market-placed products.',
    enforcement: 'high',
  },
  DK: {
    code: 'DK',
    name: 'Denmark',
    flag: '🇩🇰',
    membership: 'EU',
    eeaLag: false,
    eeaLagNote: null,
    eprSchemes: ['DPA-System'],
    eprSchemeUrl: 'https://www.dpa-system.dk',
    regulator: 'Miljøstyrelsen',
    regulatorUrl: 'https://www.mst.dk',
    ppwrStatus: 'directly-applicable',
    ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable; new EPR rules introduced 2025',
    registrationThreshold: 'Register with DPA-System — applies to all producers placing packaging on Danish market',
    languages: ['da'],
    languageLabel: 'Danish',
    depositSystem: true,
    depositNote: 'Dansk Retursystem — deposit return for beverages; separate from packaging EPR',
    notableFeatures: ['New EPR rules from 2025', 'Increased audit activity', 'Criminal referral track record', 'B2B packaging reporting focus'],
    caAction: 'Confirm DPA-System registration is current under 2025 rules. New Danish EPR rules may require re-assessment of compliance basis. Audit all direct shipments to Danish customers.',
    enforcement: 'high',
  },
  FI: {
    code: 'FI',
    name: 'Finland',
    flag: '🇫🇮',
    membership: 'EU',
    eeaLag: false,
    eeaLagNote: null,
    eprSchemes: ['Suomen Pakkauskierrätys RINKI'],
    eprSchemeUrl: 'https://rinkiin.fi',
    regulator: 'Syke (Finnish Environment Institute)',
    regulatorUrl: 'https://www.syke.fi',
    ppwrStatus: 'directly-applicable',
    ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; RINKI scheme updating for Aug 2026 operational deadline',
    registrationThreshold: 'Register with RINKI if placing >1 tonne packaging on Finnish market per year',
    languages: ['fi', 'sv'],
    languageLabel: 'Finnish (Swedish as second official language)',
    depositSystem: true,
    depositNote: 'PALPA deposit system for beverage containers — separate from RINKI EPR',
    notableFeatures: ['1 tonne threshold for registration', 'Systematic enforcement approach', 'Strong data quality focus in reporting'],
    caAction: 'Maintain RINKI registration. If goods are warehoused in Finland before sale to EE/LV/LT customers, Finnish EPR applies to Finnish placements only — separate registrations needed for other markets.',
    enforcement: 'high',
  },
  EE: {
    code: 'EE',
    name: 'Estonia',
    flag: '🇪🇪',
    membership: 'EU',
    eeaLag: false,
    eeaLagNote: null,
    eprSchemes: ['Eesti Pandipakend', 'ETT (Eesti Taaskasutusorganisatsioon)'],
    eprSchemeUrl: 'https://www.ett.ee',
    regulator: 'Keskkonnaamet (Environmental Board)',
    regulatorUrl: 'https://www.keskkonnaamet.ee',
    ppwrStatus: 'building',
    ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; competent authority and EPR scheme must be established by Aug 2026',
    registrationThreshold: 'Register with ETT — threshold and exact requirements being updated under PPWR framework',
    languages: ['et'],
    languageLabel: 'Estonian',
    depositSystem: true,
    depositNote: 'Eesti Pandipakend — strong deposit return system for beverages',
    notableFeatures: ['Strong beverage deposit system', 'Industrial packaging EPR still developing', 'Enforcement capacity building'],
    caAction: 'Register proactively with ETT even though enforcement capacity is building. EU Commission infringement proceedings against member states create downstream risk for operators. Do not assume low enforcement = no risk.',
    enforcement: 'medium',
  },
  LV: {
    code: 'LV',
    name: 'Latvia',
    flag: '🇱🇻',
    membership: 'EU',
    eeaLag: false,
    eeaLagNote: null,
    eprSchemes: ['Latvijas Zaļais punkts (LZP)'],
    eprSchemeUrl: 'https://www.zalais.lv',
    regulator: 'VSIA LVĢMC',
    regulatorUrl: 'https://www.lvgmc.lv',
    ppwrStatus: 'building',
    ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; LZP updating EPR fee structure for Aug 2026 deadline',
    registrationThreshold: 'Register with LZP — fee increases expected as PPWR modulation is implemented',
    languages: ['lv'],
    languageLabel: 'Latvian',
    depositSystem: false,
    depositNote: null,
    notableFeatures: ['Green Dot system (LZP)', 'Fee increases expected under PPWR', 'B2B under-registration a known gap'],
    caAction: 'Model EPR fee increases for Latvian operations. Cross-border flows from other EU countries into LV mean the Latvian entity bears EPR liability. Clarify legal entity responsibility in cross-border supply contracts.',
    enforcement: 'medium',
  },
  AT: {
    code: 'AT', name: 'Austria', flag: '🇦🇹', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['ARA (Austria Recycling)'], eprSchemeUrl: 'https://www.ara.at',
    regulator: 'BMK (Bundesministerium für Klimaschutz)', regulatorUrl: 'https://www.bmk.gv.at',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; ARA scheme updating for PPWR requirements.',
    registrationThreshold: 'Register with ARA for all packaging placed on the Austrian market.',
    languages: ['de'], languageLabel: 'German',
    depositSystem: false, depositNote: 'Voluntary return for some bottle formats; no national mandatory DRS.',
    notableFeatures: ['ARA scheme covers most producers', 'Modulated fees based on recyclability under PPWR', 'Federal structure — BMK coordinates nationally'],
    caAction: 'Maintain ARA registration. Prepare for modulated EPR fee structure under PPWR — recyclability grades will directly affect fees.',
    enforcement: 'medium',
  },
  BE: {
    code: 'BE', name: 'Belgium', flag: '🇧🇪', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Fost Plus (household)', 'Val-I-Pac (industrial/B2B)'], eprSchemeUrl: 'https://www.fostplus.be',
    regulator: 'OVAM (Flanders) / SPW (Wallonia) / Bruxelles Environnement', regulatorUrl: 'https://www.ovam.be',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Belgium has separate household and industrial EPR streams.',
    registrationThreshold: 'All producers must register with Fost Plus (B2C) and/or Val-I-Pac (B2B) depending on packaging end-use.',
    languages: ['nl', 'fr', 'de'], languageLabel: 'Dutch (Flemish), French (Walloon), German',
    depositSystem: false, depositNote: 'No national DRS; Belgium relies on kerbside collection.',
    notableFeatures: ['Separate household (Fost Plus) and industrial (Val-I-Pac) EPR streams', 'Tri-regional regulatory structure', 'Fees modulated by recyclability'],
    caAction: 'Register with both Fost Plus and Val-I-Pac if placing both consumer and B2B packaging on the Belgian market.',
    enforcement: 'medium',
  },
  BG: {
    code: 'BG', name: 'Bulgaria', flag: '🇧🇬', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Ecobulpack', 'Ecopack Bulgaria'], eprSchemeUrl: 'https://www.ecobulpack.com',
    regulator: 'MOEW (Ministry of Environment and Water)', regulatorUrl: 'https://www.moew.government.bg',
    ppwrStatus: 'building', ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; EPR enforcement capacity developing; MOEW updating framework.',
    registrationThreshold: 'Register with approved EPR organisation — threshold being updated under PPWR.',
    languages: ['bg'], languageLabel: 'Bulgarian',
    depositSystem: false, depositNote: null,
    notableFeatures: ['EPR enforcement capacity building', 'Fees expected to increase under PPWR', 'EU Commission monitoring for implementation adequacy'],
    caAction: 'Register proactively — EU Commission monitoring creates downstream risk for operators even where national enforcement is developing.',
    enforcement: 'low',
  },
  CY: {
    code: 'CY', name: 'Cyprus', flag: '🇨🇾', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Green Dot Cyprus (GreenDotCy)'], eprSchemeUrl: 'https://www.greendot.com.cy',
    regulator: 'Department of Environment', regulatorUrl: 'https://www.environment.gov.cy',
    ppwrStatus: 'building', ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; small market; EPR framework being updated.',
    registrationThreshold: 'Register with Green Dot Cyprus — all producers placing packaging on Cypriot market.',
    languages: ['el', 'tr'], languageLabel: 'Greek, Turkish',
    depositSystem: false, depositNote: null,
    notableFeatures: ['Small market', 'Green Dot scheme covers most categories', 'Limited enforcement history'],
    caAction: 'Register with Green Dot Cyprus if selling to Cypriot market. Monitor for PPWR-specific fee updates.',
    enforcement: 'low',
  },
  CZ: {
    code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['EKO-KOM'], eprSchemeUrl: 'https://www.ekokom.cz',
    regulator: 'Czech Environmental Inspectorate (ČEI) / CENIA', regulatorUrl: 'https://www.cizp.cz',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; EKO-KOM well-established; DRS under discussion.',
    registrationThreshold: 'Register with EKO-KOM — applies to producers placing packaging on Czech market.',
    languages: ['cs'], languageLabel: 'Czech',
    depositSystem: false, depositNote: 'DRS under discussion; not yet implemented.',
    notableFeatures: ['EKO-KOM is well-established', 'ČEI has history of active EPR enforcement', 'Proposed DRS legislation pending'],
    caAction: 'Maintain EKO-KOM registration. Fees will be modulated under PPWR. Monitor DRS legislation for potential deposit obligations.',
    enforcement: 'medium',
  },
  DE: {
    code: 'DE', name: 'Germany', flag: '🇩🇪', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Duales System / LUCID (Central Registry)'], eprSchemeUrl: 'https://www.verpackungsregister.org',
    regulator: 'Zentrale Stelle Verpackungsregister (ZSVR) / UBA', regulatorUrl: 'https://www.verpackungsregister.org',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Germany has the most strictly-enforced EPR system in the EU.',
    registrationThreshold: 'ALL producers placing packaging on the German market must register in LUCID — no minimum threshold.',
    languages: ['de'], languageLabel: 'German',
    depositSystem: true, depositNote: 'Pfand system — comprehensive deposit scheme covering plastic and glass bottles, cans. Separate from packaging EPR.',
    notableFeatures: ['LUCID registration mandatory — no threshold', 'Most actively enforced EPR in EU', 'Criminal prosecution possible', 'Pfand DRS runs separately', 'Market surveillance coordinated with customs'],
    caAction: 'Register in LUCID immediately if not done. Select a licensed dual system. Germany is the highest-risk EU market for EPR non-compliance — ZSVR actively coordinates with customs.',
    enforcement: 'high',
  },
  FR: {
    code: 'FR', name: 'France', flag: '🇫🇷', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['CITEO (household/retail)', 'Adelphe (wines/spirits)'], eprSchemeUrl: 'https://www.citeo.com',
    regulator: "ADEME / Direction régionale de l'environnement", regulatorUrl: 'https://www.ademe.fr',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; France has one of the most developed EPR systems in Europe.',
    registrationThreshold: 'Register with CITEO (or Adelphe for wine/spirits) — all producers placing household packaging on French market.',
    languages: ['fr'], languageLabel: 'French',
    depositSystem: false, depositNote: "No national DRS; France has rejected deposit return in favour of kerbside collection.",
    notableFeatures: ['CITEO runs highly modulated fee scheme — Grade A packaging pays significantly less', 'France leads EU in EPR fee modulation by recyclability', 'AGEC law reinforces PPWR requirements nationally'],
    caAction: "Maintain CITEO registration. France's existing modulated fee structure means recyclability grades already have significant financial impact.",
    enforcement: 'medium',
  },
  GR: {
    code: 'GR', name: 'Greece', flag: '🇬🇷', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['EOAN (Ελληνικός Οργανισμός Ανακύκλωσης)'], eprSchemeUrl: 'https://www.eoan.gr',
    regulator: 'EOAN (Hellenic Recycling Agency)', regulatorUrl: 'https://www.eoan.gr',
    ppwrStatus: 'building', ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; Greece has faced EU infringement proceedings historically; EOAN strengthening.',
    registrationThreshold: 'Register with EOAN — all producers placing packaging on Greek market.',
    languages: ['el'], languageLabel: 'Greek',
    depositSystem: false, depositNote: null,
    notableFeatures: ['History of EU infringement proceedings for packaging directive', 'EOAN capacity increasing', 'Seasonal tourism economy creates demand variation'],
    caAction: 'Register with EOAN proactively. EU Commission monitoring creates downstream risk for non-registered operators even where national enforcement is developing.',
    enforcement: 'low',
  },
  HU: {
    code: 'HU', name: 'Hungary', flag: '🇭🇺', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['MOHU (Mohu Recycling Hungary)'], eprSchemeUrl: 'https://www.mohu.hu',
    regulator: 'Ministry of Energy / MOHU', regulatorUrl: 'https://www.mohu.hu',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable; Hungary reformed EPR system with MOHU monopoly concession from 2023.',
    registrationThreshold: 'Register with MOHU — Hungary operates a single mandatory EPR concessionaire system.',
    languages: ['hu'], languageLabel: 'Hungarian',
    depositSystem: false, depositNote: 'DRS under consideration.',
    notableFeatures: ['MOHU is the sole licensed EPR operator — no choice of scheme', 'Fees set by MOHU/government', 'New registration requirements since 2023 reform'],
    caAction: 'Ensure MOHU registration is current. MOHU is the only accepted EPR scheme — no alternative schemes are available in Hungary.',
    enforcement: 'medium',
  },
  IT: {
    code: 'IT', name: 'Italy', flag: '🇮🇹', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['CONAI (Consorzio Nazionale Imballaggi)'], eprSchemeUrl: 'https://www.conai.org',
    regulator: "MASE (Ministero dell'Ambiente) / ISPRA", regulatorUrl: 'https://www.mase.gov.it',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: "EU Member — PPWR directly applicable from 12 Aug 2026; Italy's CONAI consortium covers all packaging materials.",
    registrationThreshold: 'Register with CONAI — all producers importing or placing packaging on Italian market.',
    languages: ['it'], languageLabel: 'Italian',
    depositSystem: false, depositNote: 'No national DRS; CONAI covers all packaging streams.',
    notableFeatures: ['CONAI covers 6 material-specific consortia (paper, plastic, glass, metal, wood, composites)', 'Large market with active enforcement', 'MASE coordinating PPWR requirements'],
    caAction: 'Maintain CONAI membership and declare correctly by material type — each material feeds into a specific sub-consortium.',
    enforcement: 'medium',
  },
  LU: {
    code: 'LU', name: 'Luxembourg', flag: '🇱🇺', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Valorlux', 'SuperDrecksKëscht'], eprSchemeUrl: 'https://www.valorlux.lu',
    regulator: "Administration de l'environnement (AE)", regulatorUrl: 'https://environnement.public.lu',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; small market; well-organised EPR through Valorlux.',
    registrationThreshold: 'Register with Valorlux for household packaging; SuperDrecksKëscht for hazardous/industrial.',
    languages: ['fr', 'de', 'lb'], languageLabel: 'French, German, Luxembourgish',
    depositSystem: false, depositNote: null,
    notableFeatures: ['Very small market — often de minimis for many producers', 'Well-organised scheme', 'High per-capita income'],
    caAction: 'Register with Valorlux if placing packaging on Luxembourg market. Small volumes may qualify for simplified reporting.',
    enforcement: 'low',
  },
  MT: {
    code: 'MT', name: 'Malta', flag: '🇲🇹', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['GreenPak', 'WasteServ Malta'], eprSchemeUrl: 'https://www.greenpakmalta.org',
    regulator: 'ERA (Environment and Resources Authority)', regulatorUrl: 'https://era.org.mt',
    ppwrStatus: 'building', ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; Malta has limited infrastructure but ERA is developing PPWR framework.',
    registrationThreshold: 'Register with GreenPak — ERA-approved scheme for Malta.',
    languages: ['mt', 'en'], languageLabel: 'Maltese, English',
    depositSystem: false, depositNote: null,
    notableFeatures: ['Small island market', 'Limited recycling infrastructure vs continental EU', 'ERA capacity building', 'English as official language'],
    caAction: 'Register with GreenPak if placing packaging on Maltese market. English-language labelling is acceptable.',
    enforcement: 'low',
  },
  PL: {
    code: 'PL', name: 'Poland', flag: '🇵🇱', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['BDO (Baza Danych Odpadowych — national waste register)'], eprSchemeUrl: 'https://www.bdo.mos.gov.pl',
    regulator: 'GIOŚ (Chief Inspectorate for Environmental Protection)', regulatorUrl: 'https://www.gios.gov.pl',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Poland is one of the largest EU packaging markets; BDO registry is mandatory.',
    registrationThreshold: 'Register in BDO — all producers importing or manufacturing packaging; low threshold.',
    languages: ['pl'], languageLabel: 'Polish',
    depositSystem: false, depositNote: 'DRS planned — Polish deposit scheme legislation in progress.',
    notableFeatures: ['BDO is mandatory national register — not optional scheme membership', 'One of largest EU packaging markets by volume', 'GIOŚ enforcement increasing', 'DRS legislation in progress'],
    caAction: "Register in BDO and submit annual reports. Poland's registry is state-run — non-registration is a direct statutory violation. Monitor DRS legislation.",
    enforcement: 'medium',
  },
  PT: {
    code: 'PT', name: 'Portugal', flag: '🇵🇹', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Sociedade Ponto Verde (SPV)'], eprSchemeUrl: 'https://www.pontoverde.pt',
    regulator: 'APA (Agência Portuguesa do Ambiente)', regulatorUrl: 'https://www.apambiente.pt',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; SPV is the established EPR scheme; APA updating for PPWR.',
    registrationThreshold: 'Register with SPV — all producers placing packaging on Portuguese market.',
    languages: ['pt'], languageLabel: 'Portuguese',
    depositSystem: false, depositNote: null,
    notableFeatures: ['SPV is the single authorised scheme', 'APA is the environmental regulator', 'PPWR fee modulation being implemented'],
    caAction: 'Maintain SPV membership. Prepare for fee modulation under PPWR — recyclability grades will affect costs.',
    enforcement: 'medium',
  },
  RO: {
    code: 'RO', name: 'Romania', flag: '🇷🇴', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['RetuRO (DRS operator)', 'ARAM (Asociația Română pentru Ambalaje și Mediu)'], eprSchemeUrl: 'https://www.returo.ro',
    regulator: 'ANPM (Agenția Națională pentru Protecția Mediului)', regulatorUrl: 'https://www.anpm.ro',
    ppwrStatus: 'building', ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; Romania launched DRS (RetuRO) in 2023; broader EPR framework building.',
    registrationThreshold: 'Register with ARAM and in national waste register; threshold being updated.',
    languages: ['ro'], languageLabel: 'Romanian',
    depositSystem: true, depositNote: 'RetuRO DRS launched November 2023 — covers PET, glass and metal beverage containers.',
    notableFeatures: ['RetuRO DRS launched 2023 — still scaling', 'ANPM enforcement capacity building', 'EU structural funds supporting recycling infrastructure'],
    caAction: 'Register with ARAM for EPR obligations. Beverage containers are subject to RetuRO deposit scheme — ensure compliance.',
    enforcement: 'low',
  },
  SK: {
    code: 'SK', name: 'Slovakia', flag: '🇸🇰', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['NATUR-PACK', 'RecyKLub'], eprSchemeUrl: 'https://www.naturpack.sk',
    regulator: 'SIŽP (Slovenská inšpekcia životného prostredia)', regulatorUrl: 'https://www.sizp.sk',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Slovakia has established EPR schemes; SIŽP is the enforcement body.',
    registrationThreshold: 'Register with NATUR-PACK or another approved EPR organisation.',
    languages: ['sk'], languageLabel: 'Slovak',
    depositSystem: false, depositNote: null,
    notableFeatures: ['NATUR-PACK and RecyKLub are both approved schemes', 'SIŽP enforcement track record for environmental violations', 'PPWR fee modulation expected to increase scheme costs'],
    caAction: 'Maintain registration with NATUR-PACK or equivalent. Audit packaging grades for Slovak market.',
    enforcement: 'medium',
  },
  SI: {
    code: 'SI', name: 'Slovenia', flag: '🇸🇮', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Slopak'], eprSchemeUrl: 'https://www.slopak.si',
    regulator: 'ARSO (Agencija RS za okolje)', regulatorUrl: 'https://www.arso.gov.si',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Slopak is the established EPR scheme; ARSO is the regulator.',
    registrationThreshold: 'Register with Slopak — all producers placing packaging on Slovenian market.',
    languages: ['sl'], languageLabel: 'Slovenian',
    depositSystem: false, depositNote: null,
    notableFeatures: ['Slopak is the single approved scheme', 'ARSO is an active environmental regulator', 'Small but well-organised market'],
    caAction: 'Maintain Slopak registration. Small market but obligations are the same as larger EU states.',
    enforcement: 'medium',
  },
  NL: {
    code: 'NL', name: 'Netherlands', flag: '🇳🇱', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Afvalfonds Verpakkingen'], eprSchemeUrl: 'https://www.afvalfondsverpakkingen.nl',
    regulator: 'ILT (Inspectie Leefomgeving en Transport) / NVWA', regulatorUrl: 'https://www.ilent.nl',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Netherlands has an advanced EPR and deposit system.',
    registrationThreshold: 'Register with Afvalfonds Verpakkingen — all producers placing packaging on Dutch market.',
    languages: ['nl'], languageLabel: 'Dutch',
    depositSystem: true, depositNote: 'Statiegeld — Dutch deposit return system covers plastic bottles and cans. Separate from EPR.',
    notableFeatures: ['Statiegeld deposit system — active and expanding', 'ILT is an active market surveillance authority', 'High recycling infrastructure maturity', 'Fees modulated by recyclability'],
    caAction: 'Register with Afvalfonds Verpakkingen. Ensure goods subject to Statiegeld (plastic bottles, cans) comply with deposit scheme requirements.',
    enforcement: 'medium',
  },
  IE: {
    code: 'IE', name: 'Ireland', flag: '🇮🇪', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Repak'], eprSchemeUrl: 'https://www.repak.ie',
    regulator: 'EPA (Environmental Protection Agency)', regulatorUrl: 'https://www.epa.ie',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Deposit Return Scheme launched 2024; Repak updating for PPWR.',
    registrationThreshold: 'Register with Repak if placing ≥10 tonnes packaging on Irish market per year, or turnover >€1M.',
    languages: ['en', 'ga'], languageLabel: 'English, Irish (Gaeilge)',
    depositSystem: true, depositNote: 'Irish DRS (Deposit Return Scheme) launched 2024 — covers PET bottles and cans. Separate from Repak EPR.',
    notableFeatures: ['Repak is well-established EPR scheme', 'Irish DRS launched 2024 — separate from EPR', 'English language market', 'EPA is active regulator'],
    caAction: 'Maintain Repak membership. Ensure goods subject to Irish DRS (PET bottles, cans) are registered with the DRS operator.',
    enforcement: 'medium',
  },
  ES: {
    code: 'ES', name: 'Spain', flag: '🇪🇸', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['Ecoembes (SDDR Punto Verde)'], eprSchemeUrl: 'https://www.ecoembes.com',
    regulator: 'MITECO (Ministerio para la Transición Ecológica)', regulatorUrl: 'https://www.miteco.gob.es',
    ppwrStatus: 'directly-applicable', ppwrStatusLabel: 'Active EPR',
    ppwrStatusNote: 'EU Member — PPWR directly applicable from 12 Aug 2026; Spain updating packaging law to align with PPWR.',
    registrationThreshold: 'Register with Ecoembes — all producers placing packaging on Spanish market.',
    languages: ['es'], languageLabel: 'Spanish (Castilian)',
    depositSystem: false, depositNote: 'DRS proposed — pending final legislation.',
    notableFeatures: ['Large market with significant enforcement', 'Proposed DRS legislation in progress', 'Regional complexity (autonomous communities)', 'Fees modulated under PPWR'],
    caAction: 'Maintain Ecoembes registration. Monitor DRS legislation. Regional regulators in Catalonia and Basque Country sometimes take independent enforcement action.',
    enforcement: 'medium',
  },
  HR: {
    code: 'HR', name: 'Croatia', flag: '🇭🇷', membership: 'EU', eeaLag: false, eeaLagNote: null,
    eprSchemes: ['HAOP (Hrvatska agencija za okoliš i prirodu)'], eprSchemeUrl: 'https://www.haop.hr',
    regulator: 'HAOP (Croatian Environment and Nature Agency)', regulatorUrl: 'https://www.haop.hr',
    ppwrStatus: 'building', ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; Croatia has a beverage deposit system; broader packaging EPR developing.',
    registrationThreshold: 'Register with HAOP — producer obligations under review for PPWR implementation.',
    languages: ['hr'], languageLabel: 'Croatian',
    depositSystem: true, depositNote: 'Povratna naknada — Croatian deposit return scheme covers beverage containers.',
    notableFeatures: ['Functioning beverage DRS (Povratna naknada)', 'Industrial packaging EPR developing', 'HAOP is both scheme operator and regulator'],
    caAction: 'Register with HAOP for all packaging placed on the Croatian market. Beverage containers subject to deposit system rules.',
    enforcement: 'low',
  },
  LT: {
    code: 'LT',
    name: 'Lithuania',
    flag: '🇱🇹',
    membership: 'EU',
    eeaLag: false,
    eeaLagNote: null,
    eprSchemes: ['Žaliasis taškas (Green Dot Lithuania)'],
    eprSchemeUrl: 'https://www.zaaliasistaskas.lt',
    regulator: 'Aplinkos apsaugos agentūra (AAA)',
    regulatorUrl: 'https://www.aaa.am.lt',
    ppwrStatus: 'building',
    ppwrStatusLabel: 'Building Capacity',
    ppwrStatusNote: 'EU Member — PPWR applies from 12 Aug 2026; AAA increasing enforcement activity; national packaging act being updated',
    registrationThreshold: 'Register with Žaliasis taškas — B2B packaging reporting under active scrutiny',
    languages: ['lt'],
    languageLabel: 'Lithuanian',
    depositSystem: false,
    depositNote: null,
    notableFeatures: ['Most enforcement-active Baltic state', 'AAA has flagged B2B under-reporting as audit priority', 'Enforcement increasing since 2023'],
    caAction: 'Review B2B packaging reporting immediately — AAA has flagged this as an audit priority. Ensure all packaging weights and types are captured in EPR reporting for all cross-border and 3rd party flows.',
    enforcement: 'medium',
  },
};

// Ordered list for rendering (alphabetical by country name)
const COUNTRY_ORDER = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE'];

// Status badge styles
const PPWR_STATUS_STYLE = {
  'directly-applicable': { bg:'#dcfce7', color:'#15803d', icon:'✅' },
  'eea-pending':         { bg:'#fef3c7', color:'#d97706', icon:'⚡' },
  'building':            { bg:'#e0f2fe', color:'#0369a1', icon:'🔵' },
};

// Simulation highlight state — written by runSimulation(), read by renderCountryCards()
let simHighlights = {};  // { SE: 'required', NO: 'check', DK: null }

// ── RENDER COUNTRY CARDS ──────────────────────────────────────────────────
function renderCountryCards() {
  const grid = document.getElementById('country-grid-dynamic');
  if (!grid) return;

  grid.innerHTML = COUNTRY_ORDER.map(code => {
    const c = COUNTRY_CONFIG[code];
    const st = PPWR_STATUS_STYLE[c.ppwrStatus];
    const highlight = simHighlights[code];

    // Highlight badge if simulation result exists
    const hlBadge = highlight === 'required'
      ? `<div style="position:absolute;top:8px;right:8px;padding:3px 8px;background:#fee2e2;color:#dc2626;border-radius:4px;font-size:10px;font-weight:700">🔴 EPR Required</div>`
      : highlight === 'check'
      ? `<div style="position:absolute;top:8px;right:8px;padding:3px 8px;background:#fef3c7;color:#d97706;border-radius:4px;font-size:10px;font-weight:700">🟡 Verify</div>`
      : '';

    // EEA lag warning strip
    const eeaStrip = c.eeaLag
      ? `<div style="background:#fef3c7;border-radius:6px;padding:8px 10px;margin-bottom:8px;font-size:11px;color:#92400e;border:1px solid #fcd34d">
           <strong>⚡ EEA — Not EU:</strong> PPWR applies after EEA Agreement incorporation (~mid-2026 to early 2027). Until then, Norwegian national packaging rules apply.
         </div>`
      : '';

    // Detail content
    const detail = `
      <hr style="margin:10px 0;border-color:var(--border)">
      ${eeaStrip}
      <div style="font-size:12px;line-height:1.8">
        <div style="margin-bottom:4px"><strong>EPR Scheme:</strong> ${c.eprSchemes.join(', ')}</div>
        <div style="margin-bottom:4px"><strong>Regulator:</strong> ${c.regulator}</div>
        <div style="margin-bottom:4px"><strong>PPWR Status:</strong> ${c.ppwrStatusNote}</div>
        <div style="margin-bottom:4px"><strong>Registration:</strong> ${c.registrationThreshold}</div>
        <div style="margin-bottom:4px"><strong>Language:</strong> ${c.languageLabel}</div>
        ${c.depositSystem ? `<div style="margin-bottom:8px"><strong>Deposit System:</strong> ${c.depositNote}</div>` : ''}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px">
        ${c.notableFeatures.map(f => `<span style="background:var(--cream);border:1px solid var(--border);border-radius:4px;padding:2px 7px;font-size:10px">${f}</span>`).join('')}
      </div>
      <div style="background:#fff5f5;border-radius:8px;padding:10px;font-size:12px;border:1px solid #fecaca">
        <strong style="color:var(--sg-red)">Company A Action:</strong> ${c.caAction}
      </div>`;

    const inCompare = compareSet.has(code);
    return `
      <div class="country-card" id="cc-${code.toLowerCase()}" onclick="toggleCountry('${code.toLowerCase()}')"
           style="position:relative${highlight === 'required' ? ';border-color:#dc2626;box-shadow:0 0 0 2px rgba(220,38,38,.15)' : highlight === 'check' ? ';border-color:#d97706' : inCompare ? ';border-color:#7c3aed;box-shadow:0 0 0 2px rgba(124,58,237,.15)' : ''}">
        ${hlBadge}
        <button onclick="event.stopPropagation();toggleCompare('${code}')" title="${inCompare ? 'Remove from compare' : 'Add to compare'}"
          style="position:absolute;top:8px;right:8px;width:22px;height:22px;border-radius:50%;border:1.5px solid ${inCompare ? '#7c3aed' : 'var(--border)'};background:${inCompare ? '#7c3aed' : 'white'};color:${inCompare ? 'white' : 'var(--muted)'};font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;font-family:'DM Sans',sans-serif;font-weight:700;line-height:1">+</button>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;padding-right:28px">
          <div>
            <div class="country-flag">${c.flag}</div>
            <div class="country-name">${c.name}</div>
          </div>
          <span id="cc-chevron-${code.toLowerCase()}" style="font-size:13px;color:var(--muted);transition:transform .25s;display:inline-block;margin-top:4px;flex-shrink:0">▼</span>
        </div>
        <div class="country-status" style="background:${st.bg};color:${st.color}">${st.icon} ${c.ppwrStatusLabel}</div>
        <div style="font-size:12px;color:var(--muted)">${c.ppwrStatusNote.split(';')[0]}</div>
        <div class="country-detail">${detail}</div>
      </div>`;
  }).join('');
}

// ── HIGHLIGHT COUNTRIES FROM SIMULATION ──────────────────────────────────
function highlightCountriesForScenario(primaryMarket, additionalMarkets, roles) {
  // Reset all
  simHighlights = {};

  const allMarkets = [primaryMarket, ...(additionalMarkets || [])].filter(Boolean);
  const needsEPR = roles.includes('PRODUCER_EPR') || roles.includes('MANUFACTURER') || roles.includes('IMPORTER');

  allMarkets.forEach(market => {
    if (COUNTRY_ORDER.includes(market)) {
      simHighlights[market] = needsEPR ? 'required' : 'check';
    }
  });

  // Re-render cards if on countries tab
  if (document.getElementById('country-grid-dynamic')) {
    renderCountryCards();
  }

  // Update the simulation context banner
  const banner = document.getElementById('sim-context-banner');
  if (banner && allMarkets.length > 0) {
    const marketNames = allMarkets.map(m => COUNTRY_CONFIG[m] ? `${COUNTRY_CONFIG[m].flag} ${COUNTRY_CONFIG[m].name}` : m).join(', ');
    banner.style.display = 'flex';
    banner.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <span style="font-size:16px">⚙️</span>
        <div>
          <div style="font-size:12px;font-weight:700">Showing results from your last simulation</div>
          <div style="font-size:11px;color:var(--muted)">Countries with EPR obligations highlighted: ${marketNames}</div>
        </div>
      </div>
      <button onclick="clearSimHighlights()" style="background:none;border:1px solid var(--border);border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer;color:var(--muted);font-family:'DM Sans',sans-serif">Clear</button>`;
  }
}

function clearSimHighlights() {
  simHighlights = {};
  renderCountryCards();
  const banner = document.getElementById('sim-context-banner');
  if (banner) banner.style.display = 'none';
}

// ── COUNTRY COMPARISON ────────────────────────────────────────────────────
let compareSet = new Set();

function toggleCompare(code) {
  if (compareSet.has(code)) { compareSet.delete(code); } else { compareSet.add(code); }
  renderCountryCards();
  updateComparePanel();
}

function clearCompare() {
  compareSet.clear();
  renderCountryCards();
  updateComparePanel();
}

function updateComparePanel() {
  const panel = document.getElementById('compare-panel');
  const chips = document.getElementById('compare-chips');
  const table = document.getElementById('compare-table');
  if (!panel) return;
  const codes = [...compareSet];
  panel.style.display = codes.length >= 1 ? 'block' : 'none';
  if (chips) chips.innerHTML = codes.map(code => {
    const c = COUNTRY_CONFIG[code];
    return `<span style="display:inline-flex;align-items:center;gap:5px;padding:3px 10px;background:#ede9fe;border-radius:20px;font-size:12px;font-weight:600;color:#7c3aed">
      ${c.flag} ${c.name}
      <button onclick="toggleCompare('${code}')" style="background:none;border:none;cursor:pointer;color:#7c3aed;font-size:14px;padding:0;line-height:1">×</button>
    </span>`;
  }).join('');
  if (table) table.innerHTML = '';
}

function renderCompare() {
  const codes = [...compareSet];
  if (codes.length < 2) { alert('Select at least 2 countries to compare.'); return; }
  const table = document.getElementById('compare-table');
  if (!table) return;
  const rows = [
    ['', ...codes.map(c => `<strong>${COUNTRY_CONFIG[c].flag} ${COUNTRY_CONFIG[c].name}</strong>`)],
    ['Membership', ...codes.map(c => COUNTRY_CONFIG[c].membership === 'EEA' ? '<span style="color:#d97706">EEA (Norway)</span>' : '🇪🇺 EU Member')],
    ['PPWR Status', ...codes.map(c => `<span style="font-size:11px">${COUNTRY_CONFIG[c].ppwrStatusLabel}</span>`)],
    ['EPR Scheme', ...codes.map(c => COUNTRY_CONFIG[c].eprSchemes.join('<br>'))],
    ['Regulator', ...codes.map(c => COUNTRY_CONFIG[c].regulator)],
    ['Enforcement', ...codes.map(c => {
      const lvl = COUNTRY_CONFIG[c].enforcement;
      const col = lvl === 'high' ? '#dc2626' : lvl === 'medium' ? '#d97706' : '#0369a1';
      return `<span style="font-weight:700;color:${col}">${lvl.toUpperCase()}</span>`;
    })],
    ['Deposit System', ...codes.map(c => COUNTRY_CONFIG[c].depositSystem ? '✅ Yes' : '—')],
    ['Language(s)', ...codes.map(c => COUNTRY_CONFIG[c].languageLabel)],
    ['Registration', ...codes.map(c => `<span style="font-size:11px">${COUNTRY_CONFIG[c].registrationThreshold}</span>`)],
  ];
  const colW = `${Math.floor(80 / codes.length)}%`;
  table.innerHTML = `<table style="width:100%;border-collapse:collapse;font-size:12px">` +
    rows.map((row, i) => `<tr style="background:${i % 2 === 0 ? 'var(--cream)' : 'white'}">` +
      row.map((cell, j) => `<td style="padding:8px 10px;border:1px solid var(--border);${j === 0 ? 'font-weight:600;width:18%;white-space:nowrap' : `width:${colW}`}">${cell}</td>`).join('') +
    '</tr>').join('') + '</table>';
}

let _cfActive = 'all';
function filterCountryCards(enforcement) {
  if (enforcement !== undefined) _cfActive = enforcement;
  const query = (document.getElementById('country-search')?.value || '').toLowerCase();
  const grid = document.getElementById('country-grid-dynamic');
  if (!grid) return;
  let visible = 0;
  COUNTRY_ORDER.forEach(code => {
    const card = document.getElementById('cc-' + code.toLowerCase());
    if (!card) return;
    const c = COUNTRY_CONFIG[code];
    const matchesSearch = !query ||
      c.name.toLowerCase().includes(query) ||
      (c.eprSchemes || []).join(' ').toLowerCase().includes(query) ||
      c.regulator.toLowerCase().includes(query);
    const matchesFilter =
      _cfActive === 'all' ||
      (_cfActive === 'deposit' ? c.depositSystem : c.enforcement === _cfActive);
    const show = matchesSearch && matchesFilter;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  const countEl = document.getElementById('country-count');
  if (countEl) countEl.textContent = visible + ' countr' + (visible === 1 ? 'y' : 'ies');
  ['all','high','medium','low','deposit'].forEach(k => {
    const btn = document.getElementById('cf-' + (k === 'medium' ? 'med' : k === 'deposit' ? 'dep' : k));
    if (!btn) return;
    const active = _cfActive === k;
    btn.style.background = active ? 'var(--ink)' : 'white';
    btn.style.color = active ? 'white' :
      k === 'high' ? '#dc2626' : k === 'medium' ? '#d97706' :
      k === 'low' ? '#0369a1' : 'var(--ink)';
  });
}


const COUNTRY_DATA = {
  AT: { name:'Austria',        flag:'🇦🇹', epr:'ARA (Austria Recycling)',      regulator:'BMK',                    enforcement:'medium',  eea:false, eu:true  },
  BE: { name:'Belgium',        flag:'🇧🇪', epr:'Fost Plus / Val-I-Pac',        regulator:'OVAM / SPW',             enforcement:'medium',  eea:false, eu:true  },
  BG: { name:'Bulgaria',       flag:'🇧🇬', epr:'Ecobulpack',                   regulator:'MOEW',                   enforcement:'low',     eea:false, eu:true  },
  HR: { name:'Croatia',        flag:'🇭🇷', epr:'HAOP',                         regulator:'HAOP',                   enforcement:'low',     eea:false, eu:true  },
  CY: { name:'Cyprus',         flag:'🇨🇾', epr:'Green Dot Cyprus',             regulator:'Dept of Environment',    enforcement:'low',     eea:false, eu:true  },
  CZ: { name:'Czech Republic', flag:'🇨🇿', epr:'EKO-KOM',                      regulator:'ČEI',                    enforcement:'medium',  eea:false, eu:true  },
  DK: { name:'Denmark',        flag:'🇩🇰', epr:'DPA-System',                   regulator:'Miljøstyrelsen',         enforcement:'high',    eea:false, eu:true  },
  EE: { name:'Estonia',        flag:'🇪🇪', epr:'Eesti Pandipakend / ETT',      regulator:'Keskkonnaamet',          enforcement:'medium',  eea:false, eu:true  },
  FI: { name:'Finland',        flag:'🇫🇮', epr:'RINKI',                        regulator:'Syke',                   enforcement:'high',    eea:false, eu:true  },
  FR: { name:'France',         flag:'🇫🇷', epr:'CITEO',                        regulator:'ADEME',                  enforcement:'medium',  eea:false, eu:true  },
  DE: { name:'Germany',        flag:'🇩🇪', epr:'Dual System / LUCID',          regulator:'ZSVR / UBA',             enforcement:'high',    eea:false, eu:true  },
  GR: { name:'Greece',         flag:'🇬🇷', epr:'EOAN',                         regulator:'EOAN',                   enforcement:'low',     eea:false, eu:true  },
  HU: { name:'Hungary',        flag:'🇭🇺', epr:'MOHU',                         regulator:'Ministry of Energy',     enforcement:'medium',  eea:false, eu:true  },
  IE: { name:'Ireland',        flag:'🇮🇪', epr:'Repak',                        regulator:'EPA',                    enforcement:'medium',  eea:false, eu:true  },
  IT: { name:'Italy',          flag:'🇮🇹', epr:'CONAI',                        regulator:'MASE / ISPRA',           enforcement:'medium',  eea:false, eu:true  },
  LV: { name:'Latvia',         flag:'🇱🇻', epr:'Latvijas Zaļais punkts',       regulator:'VSIA LVĢMC',             enforcement:'medium',  eea:false, eu:true  },
  LT: { name:'Lithuania',      flag:'🇱🇹', epr:'Žaliasis taškas',              regulator:'AAA',                    enforcement:'medium',  eea:false, eu:true  },
  LU: { name:'Luxembourg',     flag:'🇱🇺', epr:'Valorlux',                     regulator:"Admin. de l'env.",       enforcement:'low',     eea:false, eu:true  },
  MT: { name:'Malta',          flag:'🇲🇹', epr:'GreenPak',                     regulator:'ERA',                    enforcement:'low',     eea:false, eu:true  },
  NL: { name:'Netherlands',    flag:'🇳🇱', epr:'Afvalfonds Verpakkingen',      regulator:'ILT / NVWA',             enforcement:'medium',  eea:false, eu:true  },
  NO: { name:'Norway',         flag:'🇳🇴', epr:'Grønt Punkt Norge',            regulator:'Miljødirektoratet',      enforcement:'high',    eea:true,  eu:false },
  PL: { name:'Poland',         flag:'🇵🇱', epr:'BDO',                          regulator:'GIOŚ',                   enforcement:'medium',  eea:false, eu:true  },
  PT: { name:'Portugal',       flag:'🇵🇹', epr:'Sociedade Ponto Verde',        regulator:'APA',                    enforcement:'medium',  eea:false, eu:true  },
  RO: { name:'Romania',        flag:'🇷🇴', epr:'ARAM / RetuRO',                regulator:'ANPM',                   enforcement:'low',     eea:false, eu:true  },
  SK: { name:'Slovakia',       flag:'🇸🇰', epr:'NATUR-PACK',                   regulator:'SIŽP',                   enforcement:'medium',  eea:false, eu:true  },
  SI: { name:'Slovenia',       flag:'🇸🇮', epr:'Slopak',                       regulator:'ARSO',                   enforcement:'medium',  eea:false, eu:true  },
  ES: { name:'Spain',          flag:'🇪🇸', epr:'Ecoembes',                     regulator:'MITECO',                 enforcement:'medium',  eea:false, eu:true  },
  SE: { name:'Sweden',         flag:'🇸🇪', epr:'FTI Förpackningsinsamlingen',  regulator:'Naturvårdsverket',       enforcement:'high',    eea:false, eu:true  },
  'NON-EU': { name:'Non-EU country', flag:'🌍', epr:'N/A', regulator:'N/A', enforcement:'n/a', eea:false, eu:false },
};
const CLUSTER = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE'];

// ── LAYER 1: ROLE RESOLUTION ───────────────────────────────────────────────
// Rules evaluated top-to-bottom; first matching rule wins per role type.
// Each rule: { conditions:{}, roles:[], trace:'' }
//
// Role codes:
//   PACKER      = packer/filler — first contact between product and packaging
//   MANUFACTURER= Art.3(11): places own name/trademark on product
//   IMPORTER    = first EU entity placing goods from outside EU on market
//   DISTRIBUTOR = downstream supply chain, no own name, no modification
//   PRODUCER_EPR= registers + pays EPR fees in country of placement on market
//   AUTHORIZED_REP = Art.3(14): non-EU producer's EU representative

const ROLE_RULES = [

  // ── OWN MANUFACTURE ──────────────────────────────────────────────────────
  {
    id: 'own-packer',
    condition: s => s.source === 'sg-mfg',
    roles: ['PACKER','MANUFACTURER','PRODUCER_EPR'],
    trace: (s,c) => `CA operates a manufacturing site in ${c} and applies the packaging itself — this makes CA the <strong>Packer/Filler</strong> and <strong>Manufacturer</strong> under PPWR Art. 3(11). As the entity first placing packaged goods on the market, CA is also the <strong>EPR Producer</strong> in every country of sale.`
  },

  // ── SISTER COMPANY — CA BRAND or RELABELLING ─────────────────────────────
  {
    id: 'sister-sg-brand',
    condition: s => s.source === 'sg-sister' && (s.brand === 'sg-brand' || s.relabel === 'relabel' || s.relabel === 'repack' || s.relabel === 'modify'),
    roles: ['MANUFACTURER','IMPORTER','PRODUCER_EPR'],
    trace: (s,c) => {
      const reasons = [];
      if (s.brand === 'sg-brand') reasons.push('product is sold under the CA brand name');
      if (s.relabel === 'relabel') reasons.push('CA re-labels the packaging');
      if (s.relabel === 'repack') reasons.push('CA re-packs into new packaging');
      if (s.relabel === 'modify') reasons.push('CA modifies the packaging');
      return `CA is classified as <strong>Manufacturer</strong> under PPWR Art. 3(11) because ${reasons.join(' and ')} — even though physical production is by a sister company. As the entity placing goods under its own name on the ${c} market, CA is also the <strong>EPR Producer</strong> in ${c}. CA is the <strong>Importer</strong> because goods originate from outside ${c}.`;
    }
  },

  // ── SISTER COMPANY — SUPPLIER BRAND, NO MODIFICATION ────────────────────
  {
    id: 'sister-supplier-brand',
    condition: s => s.source === 'sg-sister' && s.brand === 'supplier-brand' && s.relabel === 'no',
    roles: ['DISTRIBUTOR','PRODUCER_EPR'],
    trace: (s,c) => `CA does not place its own name on the product and does not modify the packaging — CA is a <strong>Distributor</strong> under PPWR Art. 3(13). However, CA is still the <strong>EPR Producer</strong> in ${c} because it is the entity placing the packaging on the ${c} market. Note: the sister company (as manufacturer) retains the primary design and recycled-content obligations — but CA must verify compliance before placing goods on the market.`
  },

  // ── SISTER COMPANY — CUSTOMER BRAND ─────────────────────────────────────
  {
    id: 'sister-customer-brand',
    condition: s => s.source === 'sg-sister' && s.brand === 'customer-brand',
    roles: ['DISTRIBUTOR','PRODUCER_EPR'],
    trace: (s,c) => `The product carries the customer's brand — CA acts as a <strong>Distributor</strong>. CA is still the <strong>EPR Producer</strong> in ${c} as the entity placing the packaged goods on the market. The customer (brand owner) bears the design and recycled-content obligations for their branded packaging under Art. 3(11).`
  },

  // ── NON-EU 3RD PARTY — ANY BRAND ─────────────────────────────────────────
  {
    id: '3p-non-eu-importer',
    condition: s => s.source === '3p-non-eu',
    roles: ['IMPORTER','PRODUCER_EPR'],
    trace: (s,c) => {
      let base = `The supplier is outside the EU — CA is the <strong>Importer</strong> of record and therefore the <strong>EPR Producer</strong> in ${c} under PPWR Art. 3(12). CA bears full packaging compliance responsibility: if the supplier's packaging is non-compliant (wrong grade, missing recycled content, PFAS inks), enforcement falls on CA as importer — not the supplier.`;
      if (s.brand === 'sg-brand' || s.relabel !== 'no') base += ` CA also qualifies as <strong>Manufacturer</strong> under Art. 3(11) because it ${s.brand === 'sg-brand' ? 'places the product under its own brand' : 'modifies or re-labels the packaging'}.`;
      return base;
    }
  },

  // ── EU 3RD PARTY — CA BRAND or RELABELLING ───────────────────────────────
  {
    id: '3p-eu-sg-brand',
    condition: s => s.source === '3p-eu' && (s.brand === 'sg-brand' || s.relabel !== 'no'),
    roles: ['MANUFACTURER','PRODUCER_EPR'],
    trace: (s,c) => `The supplier is EU-based and retains Manufacturer status for their own packaging. However, CA ${s.brand === 'sg-brand' ? 'places the product under its own brand name' : 're-labels or modifies the packaging'} — this triggers <strong>Manufacturer</strong> status for CA under Art. 3(11). CA is also the <strong>EPR Producer</strong> in ${c}.`
  },

  // ── EU 3RD PARTY — SUPPLIER BRAND, NO MODIFICATION ───────────────────────
  {
    id: '3p-eu-pass-through',
    condition: s => s.source === '3p-eu' && s.brand !== 'sg-brand' && s.relabel === 'no',
    roles: ['DISTRIBUTOR','PRODUCER_EPR'],
    trace: (s,c) => `The EU supplier retains Manufacturer status. CA neither brands nor modifies the packaging — CA is a <strong>Distributor</strong> under Art. 3(13). CA is still the <strong>EPR Producer</strong> in ${c}. The EU supplier's design and recycled-content obligations remain with them — CA must contractually verify compliance.`
  },
];

// ── LAYER 2: OBLIGATION DATABASE ───────────────────────────────────────────
// Fields: id, roles[], pkgTypes[], deadline, severity, title, detail, article
// roles: which PPWR roles trigger this obligation
// pkgTypes: 'sales','grouped','transport','all'
// deadline: year as number (2025=active now, 2028, 2030, 2035, 2040)
// severity: 'critical','high','medium','low'


// ── TARGET_LOOKUP ─────────────────────────────────────────────────────────
const TARGET_LOOKUP = {
  rc: {
    // Non-contact plastic (sales, grouped, transport) — Annex II, row 1
    'non-contact': { 2030: 30, 2035: 40, 2040: 55 },
    // Contact-sensitive plastic (food, pharma) — Annex II, row 2
    'contact': { 2030: 10, 2035: 25, 2040: 50 },
    // Plastic beverage bottles (PET, HDPE) — Annex II, row 3
    'beverage': { 2025: 25, 2030: 30, 2035: 40, 2040: 65 },
    // Non-plastic materials — no RC target under PPWR
    'non-plastic': { 2030: null, 2035: null, 2040: null },
  },
  recyclability: {
    // Minimum grade by year — grades below are prohibited
    2030: 'C',   // D and E banned from 2030
    2035: 'C',   // C still permitted, subject to delegated act review
    2040: 'B',   // current expectation based on Art. 6(5) trajectory
  },
  reuse: {
    transport: { 2030: 40, 2040: 70 }, // % of transport packaging that must be reusable
  },
};;

// ── EPR_SCHEME_INFO ───────────────────────────────────────────────────────
const EPR_SCHEME_INFO = {
  AT: { scheme: 'ARA (Austria Recycling)', regulator: 'BMK', threshold: 'All producers', deadline: '12 Aug 2026' },
  BE: { scheme: 'Fost Plus (B2C) / Val-I-Pac (B2B)', regulator: 'OVAM / SPW', threshold: 'All producers', deadline: '12 Aug 2026' },
  BG: { scheme: 'Ecobulpack', regulator: 'MOEW', threshold: 'Register proactively', deadline: '12 Aug 2026' },
  HR: { scheme: 'HAOP', regulator: 'HAOP', threshold: 'All producers', deadline: '12 Aug 2026' },
  CY: { scheme: 'Green Dot Cyprus', regulator: 'Department of Environment', threshold: 'All producers', deadline: '12 Aug 2026' },
  CZ: { scheme: 'EKO-KOM', regulator: 'Czech Environmental Inspectorate (ČEI)', threshold: 'All producers', deadline: '12 Aug 2026' },
  DK: { scheme: 'DPA-System', regulator: 'Miljøstyrelsen', threshold: 'All producers', deadline: '12 Aug 2026' },
  EE: { scheme: 'ETT (Eesti Taaskasutusorganisatsioon)', regulator: 'Keskkonnaamet', threshold: 'Register proactively', deadline: '12 Aug 2026' },
  FI: { scheme: 'RINKI (Suomen Pakkauskierrätys)', regulator: 'Syke', threshold: '> 1 tonne/yr', deadline: '12 Aug 2026' },
  FR: { scheme: 'CITEO', regulator: 'ADEME / DREAL', threshold: 'All producers', deadline: '12 Aug 2026' },
  DE: { scheme: 'Duales System / LUCID', regulator: 'ZSVR / UBA', threshold: 'No minimum — mandatory for all', deadline: '12 Aug 2026' },
  GR: { scheme: 'EOAN', regulator: 'EOAN', threshold: 'All producers', deadline: '12 Aug 2026' },
  HU: { scheme: 'MOHU', regulator: 'Ministry of Energy', threshold: 'All producers', deadline: '12 Aug 2026' },
  IE: { scheme: 'Repak', regulator: 'EPA', threshold: '≥ 10 tonnes/yr or turnover > €1M', deadline: '12 Aug 2026' },
  IT: { scheme: 'CONAI', regulator: 'MASE / ISPRA', threshold: 'All producers', deadline: '12 Aug 2026' },
  LV: { scheme: 'Latvijas Zaļais punkts (LZP)', regulator: 'VSIA LVĢMC', threshold: 'All producers', deadline: '12 Aug 2026' },
  LT: { scheme: 'Žaliasis taškas', regulator: 'AAA (Aplinkos apsaugos agentūra)', threshold: 'All producers', deadline: '12 Aug 2026' },
  LU: { scheme: 'Valorlux / SuperDrecksKëscht', regulator: "Administration de l'environnement", threshold: 'All producers', deadline: '12 Aug 2026' },
  MT: { scheme: 'GreenPak', regulator: 'ERA', threshold: 'All producers', deadline: '12 Aug 2026' },
  NL: { scheme: 'Afvalfonds Verpakkingen', regulator: 'ILT / NVWA', threshold: 'Low threshold', deadline: '12 Aug 2026' },
  NO: { scheme: 'Grønt Punkt Norge', regulator: 'Miljødirektoratet', threshold: 'No minimum threshold', deadline: 'After EEA incorporation (~2026–2027)' },
  PL: { scheme: 'BDO (national register)', regulator: 'GIOŚ', threshold: 'Mandatory registration', deadline: '12 Aug 2026' },
  PT: { scheme: 'Sociedade Ponto Verde (SPV)', regulator: 'APA', threshold: 'All producers', deadline: '12 Aug 2026' },
  RO: { scheme: 'ARAM / RetuRO', regulator: 'ANPM', threshold: 'Register proactively', deadline: '12 Aug 2026' },
  SK: { scheme: 'NATUR-PACK / RecyKLub', regulator: 'SIŽP', threshold: 'All producers', deadline: '12 Aug 2026' },
  SI: { scheme: 'Slopak', regulator: 'ARSO', threshold: 'All producers', deadline: '12 Aug 2026' },
  ES: { scheme: 'Ecoembes', regulator: 'MITECO', threshold: 'All producers', deadline: '12 Aug 2026' },
  SE: { scheme: 'FTI Förpackningsinsamlingen', regulator: 'Naturvårdsverket', threshold: '> 1 tonne/yr', deadline: '12 Aug 2026' },
};;

// ── Target helper functions ───────────────────────────────────────────────
function getRCTarget(pkgType, year) {
  const cat = pkgType === 'transport' ? 'non-contact' : 'non-contact'; // default; contact/beverage shown separately
  const targets = TARGET_LOOKUP.rc[cat];
  // Find the next milestone at or after the given year
  const milestones = [2025, 2030, 2035, 2040];
  for (const m of milestones) {
    if (m >= year && targets[m] != null) return { year: m, pct: targets[m], cat };
  }
  return null;
}

function getGradeBanMessage(grade, year) {
  const bans = { D: 2030, E: 2030 };
  if (bans[grade] && year >= bans[grade]) {
    return `⛔ Grade ${grade} packaging is BANNED from ${bans[grade]} under PPWR Art. 6. This format must be replaced before ${bans[grade]}.`;
  }
  return null;
}

const OBLIGATION_DB = [

  // ══ EPR REGISTRATION & REPORTING ════════════════════════════════════════
  {
    id: 'epr-register',
    roles: ['PRODUCER_EPR','MANUFACTURER','IMPORTER'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'critical',
    title: 'EPR Registration — required in each country where you place packaging on the market',
    detail: 'PPWR Art. 44: register with the competent authority or approved EPR scheme in every Member State where you make your first sale. Registration must be in place before the first sale — not at year-end. Most EU Member States require registration by 12 August 2026 at the latest. Non-registration is the highest-penalty violation across EU markets. Use EPR_SCHEME_INFO for per-country scheme names and contacts.',
    article: 'Art. 44',
    injectCountry: true,  // flag: runSimulation will append country-specific rows
  },
  {
    id: 'epr-report',
    roles: ['PRODUCER_EPR','MANUFACTURER','IMPORTER'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'critical',
    title: 'EPR Annual Reporting — weights by packaging tier and material, per country of sale',
    detail: 'Report annually to each national EPR scheme: total weight of packaging placed on the market broken down by tier (sales / grouped / transport) and material (plastic, paper/cardboard, glass, metal, wood, composite). Reporting format and deadline varies by country. Capture destination country per shipment in your ERP from day one — reconstructing data at year-end is extremely difficult and a common source of under-reporting penalties.',
    article: 'Art. 44–46',
  },
  {
    id: 'epr-fees',
    roles: ['PRODUCER_EPR'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'high',
    title: 'EPR Fees — modulated by recyclability grade (Grade A = lowest, Grade E = highest)',
    detail: 'PPWR Art. 45: EPR fees must be modulated by recyclability grade. Switching from Grade D to Grade A packaging reduces your EPR fee exposure. Grade D and E packaging attracts the highest fee band until banned in 2030. Fee modulation implementing act expected mid-2026 — until then, national schemes apply their own structures within the PPWR framework. Finance should model fee savings from packaging grade improvements.',
    article: 'Art. 45',
  },

  // ══ DESIGN & RECYCLABILITY ══════════════════════════════════════════════
  {
    id: 'recyclability-grade',
    roles: ['MANUFACTURER','PACKER'],
    pkgTypes: ['all'],
    deadline: 2030,
    severity: 'critical',
    title: 'Recyclability: minimum Grade C required from 2030 — Grades D and E banned',
    detail: 'PPWR Art. 6: from 2030, all packaging placed on the EU market must achieve at least Grade C. Grades D and E are prohibited — any packaging currently at Grade D or E must be redesigned or replaced before 2030. Grade C is permitted from 2030 but subject to phase-out review by 2028 under Art. 6(5) delegated act. Design target: Grade A or B. Recyclability assessment must be based on the Commission\'s methodology (delegated act expected late 2026). Obtain grade certificates from packaging suppliers now.',
    article: 'Art. 6',
    threshold: { minGrade: 'C', banYear: 2030, banGrades: ['D','E'] },
  },
  {
    id: 'recyclability-verify',
    roles: ['IMPORTER','DISTRIBUTOR'],
    pkgTypes: ['all'],
    deadline: 2030,
    severity: 'high',
    title: 'Verify all supplier packaging achieves Grade C or better before importing',
    detail: 'PPWR Art. 6 + Art. 41: as importer or distributor, CA cannot place non-compliant packaging on the market. Require recyclability grade certificates from all suppliers. Insert PPWR compliance warranties and audit rights into supply contracts. If a supplier\'s packaging fails the grade test and CA places it on the market anyway, enforcement falls on CA — not the supplier.',
    article: 'Art. 6, Art. 41',
  },
  {
    id: 'no-pfas',
    roles: ['MANUFACTURER','PACKER','IMPORTER'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'high',
    title: 'Prohibited substances — no PFAS, oxo-degradable plastics, or recyclability-disrupting inks',
    detail: 'PPWR Art. 5 + Annex V (applies now): packaging must not contain PFAS above threshold levels, any oxo-degradable or oxo-fragmentable plastic, or inks/adhesives/additives that prevent recycling. Oxo-degradable film is banned immediately — if any supplier uses it, this is a current violation. Require declarations of conformity from all packaging material suppliers.',
    article: 'Art. 5, Annex V',
  },
  {
    id: 'minimisation',
    roles: ['MANUFACTURER','PACKER'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'medium',
    title: 'Packaging minimisation — no unnecessary packaging or excess void fill',
    detail: 'PPWR Art. 9 (applies from 12 Aug 2026): packaging must not exceed what is functionally required. Over-boxing, excessive void fill, and decorative secondary packaging without structural purpose may be challenged. Document the functional justification for each packaging element. Delegated act on minimisation criteria expected 2026.',
    article: 'Art. 9',
  },

  // ══ RECYCLED CONTENT ════════════════════════════════════════════════════
  {
    id: 'rc-non-contact-2030',
    roles: ['MANUFACTURER','PACKER'],
    pkgTypes: ['sales','grouped','transport'],
    deadline: 2030,
    severity: 'high',
    title: 'Recycled content: ≥30% in non-contact plastic packaging by 2030 (→40% by 2035, →55% by 2040)',
    detail: 'PPWR Art. 7 + Annex II: plastic packaging not in direct food/pharma contact must contain at least 30% recycled plastic by weight from 2030. This rises to 40% by 2035 and 55% by 2040. This applies to CA\'s own-manufactured and own-branded products. Certificates of conformity from packaging material suppliers are required. Recycled content calculation methodology implementing act expected mid-2026 — begin supplier data collection now.',
    article: 'Art. 7, Annex II',
    threshold: { pct: 30, year: 2030, category: 'non-contact plastic', escalates: [{year:2035,pct:40},{year:2040,pct:55}] },
  },
  {
    id: 'rc-contact-2030',
    roles: ['MANUFACTURER','PACKER'],
    pkgTypes: ['sales'],
    deadline: 2030,
    severity: 'medium',
    title: 'Recycled content: ≥10% in contact-sensitive plastic packaging by 2030 (→50% by 2040)',
    detail: 'PPWR Art. 7 + Annex II: plastic packaging in direct contact with food, pharmaceuticals or medical products has a lower threshold — 10% by 2030, rising to 25% by 2035 and 50% by 2040 — due to food safety constraints on recycled materials. Apply the correct threshold to the correct packaging category. If in doubt about contact classification, seek legal confirmation.',
    article: 'Art. 7, Annex II',
    threshold: { pct: 10, year: 2030, category: 'contact-sensitive plastic', escalates: [{year:2035,pct:25},{year:2040,pct:50}] },
  },
  {
    id: 'rc-beverage-2025',
    roles: ['MANUFACTURER','PACKER'],
    pkgTypes: ['sales'],
    deadline: 2025,
    severity: 'high',
    title: 'Recycled content: ≥25% in plastic beverage bottles NOW (→30% 2030, →65% 2040)',
    detail: 'PPWR Annex II: PET and HDPE plastic bottles for beverages must already contain 25% recycled plastic (this target was set under earlier EU legislation and is carried forward in PPWR). From 2030, this rises to 30%; from 2035 to 40%; from 2040 to 65%. Deposit return systems exist in several EU/EEA countries (e.g. Norway, Germany, Ireland, Denmark, Estonia, Croatia, Romania) and typically cover these formats.',
    article: 'Art. 7, Annex II',
    threshold: { pct: 25, year: 2025, category: 'beverage plastic bottles', escalates: [{year:2030,pct:30},{year:2035,pct:40},{year:2040,pct:65}] },
  },
  {
    id: 'rc-verify-import',
    roles: ['IMPORTER'],
    pkgTypes: ['sales','grouped'],
    deadline: 2030,
    severity: 'high',
    title: 'Verify recycled content certificates from all plastic packaging suppliers before import',
    detail: 'As importer, CA is responsible for ensuring plastic packaging placed on the EU market meets the applicable recycled content threshold (30% non-contact, 10% contact-sensitive, by 2030). Require certificates of conformity specifying recycled content % by material stream. Insert as a contractual requirement with audit rights. Do not rely on supplier self-declaration alone.',
    article: 'Art. 7, Art. 41',
  },

  // ══ REUSE — TRANSPORT PACKAGING ════════════════════════════════════════
  {
    id: 'reuse-transport-2030',
    roles: ['PRODUCER_EPR','MANUFACTURER','PACKER'],
    pkgTypes: ['transport'],
    deadline: 2030,
    severity: 'high',
    title: 'Reuse target: ≥40% of transport packaging must be reusable by 2030 (→70% by 2040)',
    detail: 'PPWR Art. 26 + Annex VI: by 2030, at least 40% of transport packaging placed on the market must be reusable (pooled pallets, returnable crates, reusable corner boards). One-way stretch wrap and single-trip corner boards do not count. By 2040, the threshold rises to 70%. Reusable packaging design criteria delegated act is expected late 2026 — begin transitioning to pooled pallet systems now. Document trip counts and return rates per packaging unit.',
    article: 'Art. 26, Annex VI',
    threshold: { pct: 40, year: 2030, escalates: [{year:2040,pct:70}] },
  },
  {
    id: 'reuse-tracking',
    roles: ['PRODUCER_EPR','MANUFACTURER','PACKER'],
    pkgTypes: ['transport'],
    deadline: 2030,
    severity: 'high',
    title: 'Reuse documentation — documented trip counts and return rates required',
    detail: 'Using euro-pallets is not sufficient to claim reuse target compliance. PPWR requires documented evidence of actual reuse — trip frequency, return rates, lifecycle data per packaging unit. Pool provider data (CHEP, LPR etc.) or RFID/barcode tracking integrated with your WMS is the standard approach. Without a tracking system, you cannot demonstrate compliance and cannot exclude reusable packaging from EPR volume calculations.',
    article: 'Art. 26',
  },
  {
    id: 'reuse-customer-contracts',
    roles: ['PRODUCER_EPR','MANUFACTURER','PACKER'],
    pkgTypes: ['transport'],
    deadline: 2030,
    severity: 'medium',
    title: 'Update B2B contracts to include reusable packaging return obligations',
    detail: 'Without contractual return obligations, customers will dispose of reusable transport packaging rather than returning it — collapsing your reuse ratio. Update B2B terms to include explicit return schedules, deposit structures where appropriate, and consequences for non-return. This is a joint task for Supply Chain, Legal and Sales. Without it, the 40% reuse target cannot be met in practice.',
    article: 'Art. 26',
  },

  // ══ LABELLING & DIGITAL PRODUCT PASSPORT ════════════════════════════════
  {
    id: 'sorting-labels-2028',
    roles: ['MANUFACTURER','PACKER'],
    pkgTypes: ['sales','grouped'],
    deadline: 2028,
    severity: 'high',
    title: 'Harmonised sorting labels — mandatory on all sales and grouped packaging by 2028',
    detail: 'PPWR Art. 12: from 2028, all sales and grouped packaging must carry harmonised EU sorting labels showing the packaging material and disposal route. Labels must be in the official language(s) of the country of sale — a label in one language is not valid in a country with a different official language (e.g. English labels are insufficient for French, German, or Polish markets). For own-manufactured products, this requires label redesign across the entire product range with per-market language variants. Start the label programme now — 2028 is close.',
    article: 'Art. 12',
  },
  {
    id: 'dpp-2030',
    roles: ['MANUFACTURER','PACKER'],
    pkgTypes: ['sales','grouped'],
    deadline: 2030,
    severity: 'high',
    title: 'Digital Product Passport (QR code) — mandatory on sales and grouped packaging from 2030',
    detail: 'PPWR Art. 13: from 2030, a machine-readable data carrier (typically QR code) linking to a digital product passport must appear on all sales and grouped packaging. The passport must contain: packaging composition by material, recyclability grade, recycled content %, and sorting instructions. Technical specifications delegated act expected 2027 — begin IT scoping now. This is a multi-year IT programme.',
    article: 'Art. 13',
  },
  {
    id: 'sorting-labels-import',
    roles: ['IMPORTER','DISTRIBUTOR'],
    pkgTypes: ['sales','grouped'],
    deadline: 2028,
    severity: 'high',
    title: 'Verify sorting labels are correct for each destination country language before import',
    detail: 'As importer or distributor, CA cannot place packaging with missing or wrong-language sorting labels on the market. Labels must match the official language of the country of sale. For goods from sister companies or 3rd-party suppliers, require pre-shipment label verification per destination market. Make language-correct labelling a contractual requirement.',
    article: 'Art. 12, Art. 41',
  },

  // ══ EXPORT / DISTRIBUTOR SPECIFIC ════════════════════════════════════════
  {
    id: 'export-epr-exclusion',
    roles: ['PRODUCER_EPR'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'low',
    title: 'Exported packaging: exclude from domestic EPR report if documented as export',
    detail: 'PPWR Art. 44: packaging on goods exported outside your domestic market can be excluded from your EPR report in the exporting country — but only with proper documentary evidence (shipping documentation, customs export declarations). Ensure your ERP captures destination country on every outbound shipment. Under EXW/FCA terms, the buyer is typically the importer and EPR producer in the destination country — document this clearly.',
    article: 'Art. 44',
  },
  {
    id: 'distributor-verify',
    roles: ['DISTRIBUTOR'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'high',
    title: 'Distributor due diligence — verify upstream packaging compliance before placing on market',
    detail: 'PPWR Art. 41: distributors must not place non-compliant packaging on the market if they have reason to believe it is non-compliant. This creates a positive obligation: request compliance documentation from manufacturers, verify recyclability grades, check recycled content certificates, and confirm labelling. Ignorance is not a defence — if CA places non-compliant packaging on the market as distributor, enforcement can fall on CA.',
    article: 'Art. 41',
  },

  // ══ NORWAY / EEA SPECIFIC ════════════════════════════════════════════════
  {
    id: 'norway-eea-lag',
    roles: ['PRODUCER_EPR','MANUFACTURER','IMPORTER'],
    pkgTypes: ['all'],
    deadline: 2025,
    severity: 'medium',
    title: 'Norway (EEA): PPWR expected to apply from late 2026 / early 2027 — prepare now',
    detail: 'Norway is an EEA member, not an EU Member State. PPWR applies in Norway only after formal EEA Agreement incorporation — current expectation is late 2026 to early 2027. Until then, Norwegian national packaging rules apply under the existing Packaging Regulation. Begin PPWR compliance preparations for Norway now given the proximity of expected adoption. Register with Grønt Punkt Norge under current rules immediately if not already done.',
    article: 'EEA Agreement Art. 102',
    norwayOnly: true,
  },
];;

// ── LAYER 1: ROLE RESOLVER FUNCTION ───────────────────────────────────────
function resolveRoles(inputs, country) {
  const cd = COUNTRY_DATA[country] || {};
  const result = { roles: new Set(), traces: [] };

  for (const rule of ROLE_RULES) {
    if (rule.condition(inputs)) {
      rule.roles.forEach(r => result.roles.add(r));
      result.traces.push({
        ruleId: rule.id,
        roles: rule.roles,
        text: rule.trace(inputs, cd.name || country)
      });
      break; // first matching rule wins
    }
  }

  // PPWR 2026 principle: the entity that first places packaging on the market
  // in a given Member State is always the EPR Producer in that country,
  // regardless of who manufactured the packaging.
  if (!result.roles.has('PRODUCER_EPR')) {
    result.roles.add('PRODUCER_EPR');
    result.traces.push({
      ruleId: 'ppwr-placement-rule',
      roles: ['PRODUCER_EPR'],
      text: `Under PPWR Art. 3(11)–(13) and Art. 44, the entity that first places packaging on the ${cd.name || country} market is the <strong>EPR Producer</strong> in that country. CA is placing packaging on the ${cd.name || country} market in this scenario — EPR Producer status applies.`
    });
  }

  // Internal warehouse move — NOT a placement on market trigger
  // (Only applies if scenario explicitly marks it as internal transfer)
  if (inputs.internalTransferOnly) {
    result.roles.clear();
    result.traces = [{
      ruleId: 'internal-transfer',
      roles: [],
      text: `This is an internal transfer to CA's own warehouse in ${cd.name || country} — <strong>not a placement on the market</strong>. No EPR obligation is triggered in ${cd.name || country} at this point. EPR will be triggered when goods are sold from this warehouse to a customer in ${cd.name || country} or another country.`
    }];
    return { roles: [], traces: result.traces };
  }

  return { roles: Array.from(result.roles), traces: result.traces };
}

// ── LAYER 2: OBLIGATION RESOLVER FUNCTION ─────────────────────────────────
function resolveObligations(roles, pkgType, country, yearFilter) {
  const cd = COUNTRY_DATA[country] || {};
  const maxYear = yearFilter || 2040;
  const eprInfo = EPR_SCHEME_INFO[country] || null;

  const base = OBLIGATION_DB.filter(ob => {
    const roleMatch = ob.roles.some(r => roles.includes(r));
    const pkgMatch = ob.pkgTypes.includes('all') || ob.pkgTypes.includes(pkgType) || pkgType === 'all';
    const yearMatch = ob.deadline <= maxYear;
    const notNorwayExclusion = ob.norwayOnly ? country === 'NO' : true;
    return roleMatch && pkgMatch && yearMatch && notNorwayExclusion;
  }).sort((a, b) => {
    const sev = { critical:0, high:1, medium:2, low:3 };
    if (sev[a.severity] !== sev[b.severity]) return sev[a.severity] - sev[b.severity];
    return a.deadline - b.deadline;
  });

  // Enrich EPR registration obligation with country-specific details
  return base.map(ob => {
    if (ob.id === 'epr-register' && eprInfo) {
      return {
        ...ob,
        title: `EPR Registration — register with ${eprInfo.scheme} in ${cd.name || country}`,
        detail: `${ob.detail}\n\n📍 ${cd.name || country} specifically: Register with <strong>${eprInfo.scheme}</strong>, overseen by <strong>${eprInfo.regulator}</strong>. Registration threshold: ${eprInfo.threshold}. Deadline: <strong>${eprInfo.deadline}</strong>. Report annually by packaging tier (sales/grouped/transport) and material (plastic, paper, glass, metal, wood) — frequency: annual, typically calendar year.`,
      };
    }
    // Inject threshold detail into RC obligations
    if (ob.threshold && ob.deadline <= maxYear) {
      const escalation = (ob.threshold.escalates || [])
        .filter(e => e.year <= maxYear)
        .map(e => `${e.pct}% by ${e.year}`)
        .join(', ');
      const extra = escalation ? ` Escalates to: ${escalation}.` : '';
      return {
        ...ob,
        detail: ob.detail + extra,
      };
    }
    return ob;
  });
}

// ── ALL EU/EEA COUNTRY OPTIONS (shared across scenario dropdowns) ──────────
const EU_COUNTRY_OPTIONS = [
  {v:'AT',l:'🇦🇹 Austria'},    {v:'BE',l:'🇧🇪 Belgium'},     {v:'BG',l:'🇧🇬 Bulgaria'},
  {v:'HR',l:'🇭🇷 Croatia'},    {v:'CY',l:'🇨🇾 Cyprus'},      {v:'CZ',l:'🇨🇿 Czech Republic'},
  {v:'DK',l:'🇩🇰 Denmark'},    {v:'EE',l:'🇪🇪 Estonia'},     {v:'FI',l:'🇫🇮 Finland'},
  {v:'FR',l:'🇫🇷 France'},     {v:'DE',l:'🇩🇪 Germany'},     {v:'GR',l:'🇬🇷 Greece'},
  {v:'HU',l:'🇭🇺 Hungary'},    {v:'IE',l:'🇮🇪 Ireland'},     {v:'IT',l:'🇮🇹 Italy'},
  {v:'LV',l:'🇱🇻 Latvia'},     {v:'LT',l:'🇱🇹 Lithuania'},   {v:'LU',l:'🇱🇺 Luxembourg'},
  {v:'MT',l:'🇲🇹 Malta'},      {v:'NL',l:'🇳🇱 Netherlands'}, {v:'NO',l:'🇳🇴 Norway (EEA)'},
  {v:'PL',l:'🇵🇱 Poland'},     {v:'PT',l:'🇵🇹 Portugal'},    {v:'RO',l:'🇷🇴 Romania'},
  {v:'SK',l:'🇸🇰 Slovakia'},   {v:'SI',l:'🇸🇮 Slovenia'},    {v:'ES',l:'🇪🇸 Spain'},
  {v:'SE',l:'🇸🇪 Sweden'},
];

// ── SCENARIO CONFIG: Step 2 form fields per scenario ──────────────────────
const SCENARIO_FIELDS = {
  'own': {
    heading: 'Step 2 — Configure your manufacturing flow:',
    fields: [
      { id:'own-mfgcountry', label:'Manufacturing Country', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'own-sellto', label:'Where do you sell?', type:'select', options:[
        {v:'same',l:'Same country as manufacturing'},{v:'other-cluster',l:'Other EU/EEA countries'},
        {v:'both',l:'Both — domestic + other EU/EEA countries'}
      ]},
      { id:'own-pkgtype', label:'Packaging Type', type:'select', options:[
        {v:'sales',l:'Sales / Consumer'},{v:'grouped',l:'Grouped / Secondary'},
        {v:'transport',l:'Transport / Tertiary'},{v:'all',l:'All three types'}
      ]},
      { id:'own-yearfilter', label:'Show obligations by', type:'select', options:[
        {v:'2025',l:'Active now (2025)'},{v:'2028',l:'By 2028'},{v:'2030',l:'By 2030 ★'},{v:'2040',l:'Full picture (to 2040)'}
      ]}
    ],
    toInputs: () => ({
      source: 'sg-mfg',
      brand: 'sg-brand',
      relabel: 'no',
      market: document.getElementById('own-mfgcountry')?.value || 'SE',
      pkgType: document.getElementById('own-pkgtype')?.value || 'all',
      yearFilter: parseInt(document.getElementById('own-yearfilter')?.value || '2030'),
      additionalMarkets: document.getElementById('own-sellto')?.value === 'both' ? CLUSTER.filter(c => c !== (document.getElementById('own-mfgcountry')?.value||'SE')) :
                         document.getElementById('own-sellto')?.value === 'other-cluster' ? CLUSTER.filter(c => c !== (document.getElementById('own-mfgcountry')?.value||'SE')) : []
    })
  },

  0: {
    heading: 'Step 2 — Configure the import from sister company:',
    fields: [
      { id:'imp-origin', label:'Sister Company Country', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'imp-dest', label:'Receiving Country', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'imp-brand', label:'Brand on packaging', type:'select', options:[
        {v:'sg-brand',l:'CA brand'},{v:'supplier-brand',l:"Sister company's brand"},
        {v:'customer-brand',l:"Customer's brand"},{v:'white-label',l:'White label / no brand'}
      ]},
      { id:'imp-relabel', label:'Does CA modify or re-label?', type:'select', options:[
        {v:'no',l:'No — unchanged'},{v:'relabel',l:'Re-labels packaging'},
        {v:'repack',l:'Re-packs into new packaging'},{v:'modify',l:'Modifies packaging'}
      ]},
      { id:'imp-pkgtype', label:'Packaging Type', type:'select', options:[
        {v:'sales',l:'Sales / Consumer'},{v:'grouped',l:'Grouped / Secondary'},
        {v:'transport',l:'Transport / Tertiary'},{v:'all',l:'All three types'}
      ]},
      { id:'imp-yearfilter', label:'Show obligations by', type:'select', options:[
        {v:'2025',l:'Active now'},{v:'2028',l:'By 2028'},{v:'2030',l:'By 2030 ★'},{v:'2040',l:'Full picture'}
      ]}
    ],
    toInputs: () => ({
      source: 'sg-sister',
      brand: document.getElementById('imp-brand')?.value || 'sg-brand',
      relabel: document.getElementById('imp-relabel')?.value || 'no',
      market: document.getElementById('imp-dest')?.value || 'SE',
      pkgType: document.getElementById('imp-pkgtype')?.value || 'all',
      yearFilter: parseInt(document.getElementById('imp-yearfilter')?.value || '2030'),
      additionalMarkets: []
    })
  },

  1: {
    heading: 'Step 2 — Configure the cross-border transfer:',
    fields: [
      { id:'ic-origin', label:'Sending Country', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'ic-dest', label:'Receiving Country', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'ic-brand', label:'Brand on packaging', type:'select', options:[
        {v:'sg-brand',l:'CA brand'},{v:'supplier-brand',l:'Original supplier brand'},
        {v:'customer-brand',l:"Customer's brand"}
      ]},
      { id:'ic-relabel', label:'Does CA modify or re-label?', type:'select', options:[
        {v:'no',l:'No — unchanged'},{v:'relabel',l:'Re-labels packaging'},
        {v:'modify',l:'Modifies packaging'}
      ]},
      { id:'ic-pkgtype', label:'Packaging Type', type:'select', options:[
        {v:'sales',l:'Sales / Consumer'},{v:'grouped',l:'Grouped / Secondary'},
        {v:'transport',l:'Transport / Tertiary'},{v:'all',l:'All three types'}
      ]},
      { id:'ic-yearfilter', label:'Show obligations by', type:'select', options:[
        {v:'2025',l:'Active now'},{v:'2028',l:'By 2028'},{v:'2030',l:'By 2030 ★'},{v:'2040',l:'Full picture'}
      ]}
    ],
    toInputs: () => ({
      source: 'sg-sister',
      brand: document.getElementById('ic-brand')?.value || 'sg-brand',
      relabel: document.getElementById('ic-relabel')?.value || 'no',
      market: document.getElementById('ic-dest')?.value || 'NO',
      pkgType: document.getElementById('ic-pkgtype')?.value || 'all',
      yearFilter: parseInt(document.getElementById('ic-yearfilter')?.value || '2030'),
      additionalMarkets: []
    })
  },

  2: {
    heading: 'Step 2 — Configure the 3rd party direct ship:',
    fields: [
      { id:'ds-supplier', label:'Supplier Location', type:'select', options:[
        {v:'3p-non-eu',l:'Non-EU (China, Turkey, India…)'},{v:'3p-eu',l:'EU supplier'}
      ]},
      { id:'ds-dest', label:"Customer's Country", type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'ds-brand', label:'Brand on packaging', type:'select', options:[
        {v:'sg-brand',l:'CA brand'},{v:'supplier-brand',l:"Supplier's brand"},
        {v:'customer-brand',l:"Customer's brand"},{v:'white-label',l:'White label'}
      ]},
      { id:'ds-relabel', label:'Does CA modify or re-label?', type:'select', options:[
        {v:'no',l:'No — unchanged from supplier'},{v:'relabel',l:'Re-labels packaging'},
        {v:'repack',l:'Re-packs into new packaging'}
      ]},
      { id:'ds-pkgtype', label:'Packaging Type', type:'select', options:[
        {v:'sales',l:'Sales / Consumer'},{v:'grouped',l:'Grouped / Secondary'},
        {v:'transport',l:'Transport / Tertiary'},{v:'all',l:'All three types'}
      ]},
      { id:'ds-yearfilter', label:'Show obligations by', type:'select', options:[
        {v:'2025',l:'Active now'},{v:'2028',l:'By 2028'},{v:'2030',l:'By 2030 ★'},{v:'2040',l:'Full picture'}
      ]}
    ],
    toInputs: () => ({
      source: document.getElementById('ds-supplier')?.value || '3p-non-eu',
      brand: document.getElementById('ds-brand')?.value || 'sg-brand',
      relabel: document.getElementById('ds-relabel')?.value || 'no',
      market: document.getElementById('ds-dest')?.value || 'SE',
      pkgType: document.getElementById('ds-pkgtype')?.value || 'all',
      yearFilter: parseInt(document.getElementById('ds-yearfilter')?.value || '2030'),
      additionalMarkets: []
    })
  },

  3: {
    heading: 'Step 2 — Configure the 3rd party via CA warehouse:',
    fields: [
      { id:'wh-supplier', label:'Supplier Location', type:'select', options:[
        {v:'3p-non-eu',l:'Non-EU (China, Turkey, India…)'},{v:'3p-eu',l:'EU supplier'}
      ]},
      { id:'wh-country', label:'CA Warehouse Country', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'wh-brand', label:'Brand on packaging', type:'select', options:[
        {v:'sg-brand',l:'CA brand'},{v:'supplier-brand',l:"Supplier's brand"},
        {v:'white-label',l:'White label'}
      ]},
      { id:'wh-relabel', label:'Does CA modify or re-label?', type:'select', options:[
        {v:'no',l:'No — unchanged'},{v:'relabel',l:'Re-labels in warehouse'},
        {v:'repack',l:'Re-packs in warehouse'}
      ]},
      { id:'wh-sellto', label:'Markets served from warehouse', type:'select', options:[
        {v:'same',l:'Same country only'},{v:'multi',l:'Multiple EU/EEA countries'},
        {v:'outside',l:'Non-EU countries as well'}
      ]},
      { id:'wh-pkgtype', label:'Packaging Type', type:'select', options:[
        {v:'sales',l:'Sales / Consumer'},{v:'grouped',l:'Grouped / Secondary'},
        {v:'transport',l:'Transport / Tertiary'},{v:'all',l:'All three types'}
      ]},
      { id:'wh-yearfilter', label:'Show obligations by', type:'select', options:[
        {v:'2025',l:'Active now'},{v:'2028',l:'By 2028'},{v:'2030',l:'By 2030 ★'},{v:'2040',l:'Full picture'}
      ]}
    ],
    toInputs: () => {
      const whCountry = document.getElementById('wh-country')?.value || 'SE';
      const sellTo = document.getElementById('wh-sellto')?.value || 'same';
      return {
        source: document.getElementById('wh-supplier')?.value || '3p-non-eu',
        brand: document.getElementById('wh-brand')?.value || 'sg-brand',
        relabel: document.getElementById('wh-relabel')?.value || 'no',
        market: whCountry,
        pkgType: document.getElementById('wh-pkgtype')?.value || 'all',
        yearFilter: parseInt(document.getElementById('wh-yearfilter')?.value || '2030'),
        additionalMarkets: sellTo === 'multi' ? CLUSTER.filter(c => c !== whCountry) :
                           sellTo === 'outside' ? CLUSTER.filter(c => c !== whCountry) : []
      };
    }
  },

  4: {
    heading: 'Step 2 — Configure the export outside the EU/EEA:',
    fields: [
      { id:'ex-origin', label:'Exporting Country', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'ex-dest', label:'Destination', type:'select', options:[
        {v:'NON-EU',l:'Non-EU country (UK, Switzerland, USA…)'}
      ]},
      { id:'ex-incoterms', label:'Incoterms', type:'select', options:[
        {v:'exw-fca',l:'EXW / FCA — buyer collects'},{v:'dap',l:'DAP — delivered, buyer clears'},
        {v:'ddp',l:'DDP — CA delivers fully duty-paid'}
      ]},
      { id:'ex-pkgtype', label:'Packaging Type', type:'select', options:[
        {v:'sales',l:'Sales / Consumer'},{v:'grouped',l:'Grouped / Secondary'},
        {v:'transport',l:'Transport / Tertiary'},{v:'all',l:'All three types'}
      ]},
      { id:'ex-yearfilter', label:'Show obligations by', type:'select', options:[
        {v:'2025',l:'Active now'},{v:'2028',l:'By 2028'},{v:'2030',l:'By 2030 ★'},{v:'2040',l:'Full picture'}
      ]}
    ],
    toInputs: () => ({
      source: 'sg-sister', // exporting own stock
      brand: 'sg-brand',
      relabel: 'no',
      market: document.getElementById('ex-origin')?.value || 'SE',
      pkgType: document.getElementById('ex-pkgtype')?.value || 'all',
      yearFilter: parseInt(document.getElementById('ex-yearfilter')?.value || '2030'),
      additionalMarkets: [],
      exportDest: document.getElementById('ex-dest')?.value || 'NON-EU',
      incoterms: document.getElementById('ex-incoterms')?.value || 'exw-fca'
    })
  },

  5: {
    heading: 'Step 2 — Configure the transport packaging return flow:',
    fields: [
      { id:'tp-country', label:'Country of Operation', type:'select', options: EU_COUNTRY_OPTIONS },
      { id:'tp-current', label:'Current packaging mix', type:'select', options:[
        {v:'one-way',l:'One-way only (all single-trip)'},{v:'mixed',l:'Mix of one-way and reusable'},
        {v:'mostly-reusable',l:'Mostly reusable (pooled pallets etc.)'}
      ]},
      { id:'tp-crossborder', label:'Cross-border flows?', type:'select', options:[
        {v:'domestic',l:'Domestic only'},{v:'cross-cluster',l:'Cross-border EU/EEA (multiple countries)'},
        {v:'outside',l:'Into / out of EU as well'}
      ]},
      { id:'tp-yearfilter', label:'Show obligations by', type:'select', options:[
        {v:'2025',l:'Active now'},{v:'2028',l:'By 2028'},{v:'2030',l:'By 2030 ★'},{v:'2040',l:'Full picture'}
      ]}
    ],
    toInputs: () => ({
      source: 'sg-mfg',
      brand: 'sg-brand',
      relabel: 'no',
      market: document.getElementById('tp-country')?.value || 'SE',
      pkgType: 'transport',
      yearFilter: parseInt(document.getElementById('tp-yearfilter')?.value || '2030'),
      additionalMarkets: document.getElementById('tp-crossborder')?.value === 'cross-cluster' ?
        CLUSTER.filter(c => c !== (document.getElementById('tp-country')?.value||'SE')) : [],
      tpCurrent: document.getElementById('tp-current')?.value || 'mixed'
    })
  }
};

// ── STEP 2 BUILDER ────────────────────────────────────────────────────────
function buildStep2(scenario) {
  const config = SCENARIO_FIELDS[scenario];
  if (!config) return;
  const container = document.getElementById('step2-inner');
  const cols = Math.min(config.fields.length, 4);
  const fieldsHTML = config.fields.map(f => {
    const opts = f.options.map(o => `<option value="${o.v}">${o.l}</option>`).join('');
    return `<div class="form-group"><label class="form-label">${f.label}</label><select id="${f.id}">${opts}</select></div>`;
  }).join('');
  container.innerHTML = `
    <p style="font-size:14px;font-weight:600;margin-bottom:16px">${config.heading}</p>
    <div class="step-row" style="grid-template-columns:repeat(${cols},1fr)">${fieldsHTML}</div>
    <button class="simulate-btn" onclick="runSimulation()">▶ Run Simulation</button>`;
}

// ── SCENARIO SELECTOR ────────────────────────────────────────────────────
let currentScenario = null;
function selectScenario(id) {
  document.querySelectorAll('.scenario-card').forEach(c => c.classList.remove('selected'));
  const el = id === 'own' ? document.getElementById('sc-own') : document.getElementById('sc-' + id);
  if (el) el.classList.add('selected');
  currentScenario = id;
  document.getElementById('sim-results').classList.remove('visible');
  const simImpact = document.getElementById('sim-country-impact');
  if (simImpact) simImpact.style.display = 'none';
  buildStep2(id);
}

// ── ROLE CHIP HTML ────────────────────────────────────────────────────────
const ROLE_META = {
  PACKER:        { label:'Packer / Filler',    color:'#9b1c1c', bg:'#fee2e2', desc:'First contact between product and packaging — primary design obligations' },
  MANUFACTURER:  { label:'Manufacturer',        color:'#92400e', bg:'#fef3c7', desc:'Places own name/trademark on product — Art. 3(11) PPWR' },
  IMPORTER:      { label:'Importer',            color:'#1e3a8a', bg:'#dbeafe', desc:'First EU entity placing goods from outside EU on the market' },
  DISTRIBUTOR:   { label:'Distributor',         color:'#065f46', bg:'#d1fae5', desc:'Downstream supply chain — no own name, no modification' },
  PRODUCER_EPR:  { label:'EPR Producer',        color:'#4c1d95', bg:'#ede9fe', desc:'Registers and pays EPR fees in country of placement on market' },
};

function roleChipHTML(role) {
  const m = ROLE_META[role] || { label:role, color:'#374151', bg:'#f3f4f6', desc:'' };
  return `<span style="display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:8px;background:${m.bg};color:${m.color};font-size:12px;font-weight:600;border:1.5px solid ${m.color}30;cursor:help;margin:3px" title="${m.desc}">${m.label}</span>`;
}

const SEV_META = {
  critical: { label:'Critical', bg:'#fee2e2', color:'#dc2626', icon:'🔴' },
  high:     { label:'Act now',  bg:'#fef3c7', color:'#d97706', icon:'🟡' },
  medium:   { label:'Plan for it', bg:'#e0f2fe', color:'#0369a1', icon:'🔵' },
  low:      { label:'Awareness', bg:'#f0fdf4', color:'#16a34a', icon:'🟢' },
};


// ── SEVERITY FILTER ───────────────────────────────────────────────────────
let activeSevFilter = null;

function toggleSevFilter(sev) {
  activeSevFilter = (activeSevFilter === sev) ? null : sev;
  applyObligationFilter();

  // Update button styles
  ['critical','high','medium','low'].forEach(s => {
    const btn = document.getElementById('sev-btn-' + s);
    if (!btn) return;
    if (activeSevFilter === s) {
      btn.style.border = '2px solid currentColor';
      btn.style.opacity = '1';
      btn.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.15)';
    } else {
      btn.style.border = '2px solid transparent';
      btn.style.opacity = activeSevFilter ? '0.45' : '1';
      btn.style.boxShadow = 'none';
    }
  });

  const clearBtn = document.getElementById('sev-btn-all');
  if (clearBtn) clearBtn.style.display = activeSevFilter ? 'inline-block' : 'none';
}

function applyObligationFilter() {
  const items = document.querySelectorAll('.obligation-item');
  items.forEach(item => {
    if (!activeSevFilter) {
      item.style.display = '';
    } else {
      const sevSpan = item.querySelector('span[data-sev]');
      const itemSev = sevSpan ? sevSpan.getAttribute('data-sev') : null;
      item.style.display = (itemSev === activeSevFilter) ? '' : 'none';
    }
  });

  // Show/hide empty state message
  const list = document.getElementById('obligation-list');
  if (!list) return;
  const visible = [...items].filter(i => i.style.display !== 'none').length;
  let emptyMsg = document.getElementById('sev-filter-empty');
  if (visible === 0 && activeSevFilter) {
    if (!emptyMsg) {
      emptyMsg = document.createElement('div');
      emptyMsg.id = 'sev-filter-empty';
      emptyMsg.style.cssText = 'padding:16px;text-align:center;color:var(--muted);font-size:13px';
      emptyMsg.textContent = 'No obligations at this severity level for this scenario.';
      list.appendChild(emptyMsg);
    }
    emptyMsg.style.display = '';
  } else if (emptyMsg) {
    emptyMsg.style.display = 'none';
  }
}

// ── MAIN SIMULATION RUNNER ────────────────────────────────────────────────
function runSimulation() {
  const config = SCENARIO_FIELDS[currentScenario];
  if (!config || !config.toInputs) return;

  const inputs = config.toInputs();
  const primaryCountry = inputs.market;
  const allCountries = [primaryCountry, ...(inputs.additionalMarkets || [])].filter((v,i,a) => a.indexOf(v)===i);

  // Resolve roles for primary country
  const { roles, traces } = resolveRoles(inputs, primaryCountry);

  // Get obligations
  const obligations = resolveObligations(roles, inputs.pkgType, primaryCountry, inputs.yearFilter);

  // Add export-specific override if scenario 4
  if (currentScenario === 4 && inputs.incoterms) {
    obligations.unshift({
      id: 'export-incoterms',
      severity: inputs.incoterms === 'ddp' ? 'critical' : inputs.incoterms === 'dap' ? 'high' : 'medium',
      deadline: 2025,
      title: `Incoterms: ${inputs.incoterms.toUpperCase()} — ${inputs.incoterms === 'ddp' ? 'CA retains importer-of-record status in destination country' : inputs.incoterms === 'dap' ? 'Verify whether CA is importer of record in destination' : 'EPR obligation passes to buyer at point of collection'}`,
      detail: inputs.incoterms === 'ddp'
        ? `Under DDP, CA remains the importer of record in the destination country and carries EPR Producer obligations there. This requires EPR registration in the destination country — not just the exporting country.`
        : inputs.incoterms === 'dap'
        ? `Under DAP, CA delivers to the named place but customs clearance is done by the buyer. Whether CA is the importer of record depends on specific contractual and customs arrangements. Legal must confirm this for each destination country.`
        : `Under EXW/FCA, the buyer takes responsibility from the point of collection. EPR obligations in the destination country fall to the buyer/importer there. CA must document the export to exclude these volumes from its domestic EPR report.`,
      article: 'Art. 3(12), Art. 44',
    });
  }

  // ── RENDER ────────────────────────────────────────────────────────────
  const cd = COUNTRY_DATA[primaryCountry] || { name: primaryCountry, flag:'🌍' };
  const yearLabel = inputs.yearFilter <= 2025 ? 'Active now' : `By ${inputs.yearFilter}`;

  // Title
  document.getElementById('sim-result-title').innerHTML =
    `Obligations for <strong>${cd.flag} ${cd.name}</strong> — ${yearLabel}`;

  // Role chips
  document.getElementById('re-roles').innerHTML = roles.map(roleChipHTML).join('');

  // Multi-country note
  const multiNote = allCountries.length > 1
    ? `<div style="margin-bottom:14px;padding:10px 14px;background:#fef3c7;border-radius:8px;font-size:12px;border:1px solid #fcd34d">
        <strong>⚠️ Multi-country flow detected.</strong> EPR registration and reporting obligations apply separately in each country where packaging is placed on the market:
        ${allCountries.map(c => { const d = COUNTRY_DATA[c]; return d ? `${d.flag} ${d.name} (${d.epr})` : c; }).join(' · ')}
       </div>` : '';

  // Trace
  document.getElementById('re-trace').innerHTML = traces.map(t =>
    `<div style="padding:6px 0;padding-left:14px;position:relative;font-size:12px;color:var(--muted);border-bottom:1px solid var(--cream)">
      <span style="position:absolute;left:0;color:var(--sg-red)">→</span>
      ${t.text}
    </div>`
  ).join('');

  // Obligations
  const obHTML = obligations.map(ob => {
    const s = SEV_META[ob.severity] || SEV_META.low;
    const deadlineTag = ob.deadline > 2025
      ? `<span style="font-size:10px;background:#e0f2fe;color:#0369a1;padding:2px 7px;border-radius:4px;margin-left:6px;font-weight:600">By ${ob.deadline}</span>` : '';
    const articleTag = ob.article
      ? `<span style="font-size:10px;color:var(--blue);font-style:italic;display:block;margin-top:4px">${ob.article}</span>` : '';
    return `<li class="obligation-item">
      <span data-sev="${ob.severity}" style="flex-shrink:0;padding:3px 8px;border-radius:4px;font-size:10px;font-weight:700;text-transform:uppercase;background:${s.bg};color:${s.color};margin-top:2px">${s.label}</span>
      <div>
        <strong style="font-size:13px">${ob.title}${deadlineTag}</strong>
        <span style="display:block;font-size:12px;color:var(--muted);line-height:1.6;margin-top:3px">${ob.detail}</span>
        ${articleTag}
      </div>
    </li>`;
  }).join('');

  document.getElementById('obligation-list').innerHTML = multiNote + `<ul class="obligation-list" style="list-style:none">${obHTML}</ul>`;

  // Reset severity filter on each new run
  activeSevFilter = null;
  toggleSevFilter(null);
  document.getElementById('sim-results').classList.add('visible');

  // Highlight country cards and show prompt
  highlightCountriesForScenario(inputs.market, inputs.additionalMarkets, roles);
  renderCountryCards();

  // Show the Country Guide prompt with affected country names
  // Render inline country impact cards
  renderSimCountryCards(inputs.market, inputs.additionalMarkets, roles, inputs.incoterms || null);
}

// ── PENALTY MODEL ─────────────────────────────────────────────────────────
// Three data structures:
//   COUNTRY_ENFORCEMENT  — per-country config: strictness, approach, priorities
//   VIOLATION_PROFILES   — per-violation: base severity, non-monetary consequences
//   PENALTY_BANDS        — strictness × severity × scale → band + range

const COUNTRY_ENFORCEMENT = {
  AT: {
    name: 'Austria', flag: '🇦🇹', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'BMK / Landesbehörden',
    approach: 'Moderate. Austria enforces packaging EPR through a mix of federal (BMK) and state (Länder) authorities. Enforcement has historically focused on registration and reporting compliance rather than aggressive penalties. PPWR implementation is expected to increase regulatory activity.',
    priorities: ['ARA registration', 'Accurate tonnage reporting', 'Recyclability grade documentation'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–150k'  },
      'epr-underreport':  { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–100k'  },
      'recycled-content': { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
      'labelling':        { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–80k'   },
      'reuse-target':     { iso:'€1k–10k',    per:'€10k–60k',   sys:'€60k–250k'  },
      'prohibited-pkg':   { iso:'€2k–15k',    per:'€15k–80k',   sys:'€80k–300k'  },
      'grade-de':         { iso:'€2k–15k',    per:'€15k–80k',   sys:'€80k–300k'  },
    }
  },
  BE: {
    name: 'Belgium', flag: '🇧🇪', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'OVAM / SPW / Bruxelles Environnement',
    approach: 'Active. Belgium has a tri-regional enforcement structure (Flanders: OVAM; Wallonia: SPW; Brussels: Bruxelles Environnement). EPR compliance is well-monitored through Fost Plus and Val-I-Pac data. Enforcement is process-oriented — penalties for systematic failures rather than isolated errors.',
    priorities: ['Correct stream classification (B2C vs B2B)', 'Fost Plus and Val-I-Pac registration', 'Reporting accuracy across packaging types'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€500–5k',    per:'€5k–40k',    sys:'€40k–200k'  },
      'epr-underreport':  { iso:'€300–3k',    per:'€3k–25k',    sys:'€25k–100k'  },
      'recycled-content': { iso:'€2k–15k',    per:'€15k–80k',   sys:'€80k–300k'  },
      'labelling':        { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–80k'   },
      'reuse-target':     { iso:'€1k–10k',    per:'€10k–60k',   sys:'€60k–250k'  },
      'prohibited-pkg':   { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–400k' },
      'grade-de':         { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–400k' },
    }
  },
  BG: {
    name: 'Bulgaria', flag: '🇧🇬', strictness: 'low', strictnessLabel: 'Low (developing)',
    body: 'MOEW / RIOSV regional inspectors',
    approach: "Developing. Bulgaria's enforcement of packaging EPR regulations has been limited historically. MOEW and regional RIOSV inspectors handle enforcement but capacity is constrained. EU Commission monitoring creates indirect pressure — operators should not rely on enforcement gaps.",
    priorities: ['EPR registration', 'Basic reporting compliance'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€100–1k',    per:'€1k–8k',     sys:'€8k–30k'    },
      'epr-underreport':  { iso:'€50–500',    per:'€500–5k',    sys:'€5k–20k'    },
      'recycled-content': { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–50k'   },
      'labelling':        { iso:'€50–500',    per:'€500–5k',    sys:'€5k–20k'    },
      'reuse-target':     { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'prohibited-pkg':   { iso:'€500–5k',    per:'€5k–25k',    sys:'€25k–80k'   },
      'grade-de':         { iso:'€500–5k',    per:'€5k–25k',    sys:'€25k–80k'   },
    }
  },
  HR: {
    name: 'Croatia', flag: '🇭🇷', strictness: 'low', strictnessLabel: 'Low (developing)',
    body: 'HAOP / Ministry of Economy',
    approach: "Developing. Croatia's packaging EPR enforcement is in early stages. HAOP manages both the scheme and regulatory oversight. Beverage deposit system (Povratna naknada) is well-enforced, but broader packaging EPR is less consistently monitored.",
    priorities: ['EPR registration with HAOP', 'Deposit system compliance for beverages'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€100–1k',    per:'€1k–8k',     sys:'€8k–30k'    },
      'epr-underreport':  { iso:'€50–500',    per:'€500–4k',    sys:'€4k–15k'    },
      'recycled-content': { iso:'€200–2k',    per:'€2k–12k',    sys:'€12k–50k'   },
      'labelling':        { iso:'€50–500',    per:'€500–4k',    sys:'€4k–15k'    },
      'reuse-target':     { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'prohibited-pkg':   { iso:'€500–5k',    per:'€5k–25k',    sys:'€25k–80k'   },
      'grade-de':         { iso:'€500–5k',    per:'€5k–25k',    sys:'€25k–80k'   },
    }
  },
  CY: {
    name: 'Cyprus', flag: '🇨🇾', strictness: 'low', strictnessLabel: 'Low (developing)',
    body: 'Department of Environment',
    approach: 'Developing. Cyprus is a small market with limited enforcement history on packaging EPR. The Department of Environment is responsible but capacity is constrained. Operators should register with Green Dot Cyprus and maintain basic compliance.',
    priorities: ['Green Dot Cyprus registration', 'Basic annual reporting'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€100–1k',    per:'€1k–5k',     sys:'€5k–20k'    },
      'epr-underreport':  { iso:'€50–500',    per:'€500–3k',    sys:'€3k–10k'    },
      'recycled-content': { iso:'€200–2k',    per:'€2k–10k',    sys:'€10k–30k'   },
      'labelling':        { iso:'€50–500',    per:'€500–3k',    sys:'€3k–10k'    },
      'reuse-target':     { iso:'€200–2k',    per:'€2k–10k',    sys:'€10k–40k'   },
      'prohibited-pkg':   { iso:'€300–3k',    per:'€3k–15k',    sys:'€15k–50k'   },
      'grade-de':         { iso:'€300–3k',    per:'€3k–15k',    sys:'€15k–50k'   },
    }
  },
  CZ: {
    name: 'Czech Republic', flag: '🇨🇿', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'Czech Environmental Inspectorate (ČEI)',
    approach: 'Active. ČEI has a track record of active inspection and penalty activity for packaging violations. EKO-KOM is well-established and ČEI cross-references registration data. Companies without valid EKO-KOM membership are regularly identified and fined.',
    priorities: ['EKO-KOM registration', 'Accurate annual declaration', 'Labelling compliance'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–150k'  },
      'epr-underreport':  { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–100k'  },
      'recycled-content': { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
      'labelling':        { iso:'€300–3k',    per:'€3k–15k',    sys:'€15k–60k'   },
      'reuse-target':     { iso:'€1k–10k',    per:'€10k–60k',   sys:'€60k–250k'  },
      'prohibited-pkg':   { iso:'€2k–15k',    per:'€15k–80k',   sys:'€80k–300k'  },
      'grade-de':         { iso:'€2k–15k',    per:'€15k–80k',   sys:'€80k–300k'  },
    }
  },
  DE: {
    name: 'Germany', flag: '🇩🇪', strictness: 'high', strictnessLabel: 'High',
    body: 'ZSVR / UBA / Landesbehörden',
    approach: 'Very strict. Germany is widely considered the most rigorously enforced EPR jurisdiction in the EU. The LUCID registry is cross-referenced by customs and market surveillance authorities. Non-registered producers can have goods seized at the border. The dual system is legally required — operating without it is a statutory violation regardless of whether complaints are received.',
    priorities: ['LUCID registration (zero tolerance for non-registration)', 'Dual system membership', 'Correct fee declaration by packaging type'],
    dailyPenalty: false, publicNaming: true, criminalReferral: true, eea: false,
    ranges: {
      'epr-missing':      { iso:'€1k–20k',    per:'€20k–200k',  sys:'€200k–2M'   },
      'epr-underreport':  { iso:'€1k–15k',    per:'€15k–100k',  sys:'€100k–1M'   },
      'recycled-content': { iso:'€5k–50k',    per:'€50k–300k',  sys:'€300k–2M'   },
      'labelling':        { iso:'€1k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'reuse-target':     { iso:'€5k–50k',    per:'€50k–300k',  sys:'€300k–2M'   },
      'prohibited-pkg':   { iso:'€10k–100k',  per:'€100k–500k', sys:'€500k–5M'   },
      'grade-de':         { iso:'€10k–100k',  per:'€100k–500k', sys:'€500k–5M'   },
    }
  },
  ES: {
    name: 'Spain', flag: '🇪🇸', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'MITECO / CCAA (Autonomous Communities)',
    approach: "Moderate with regional variation. Spain's packaging enforcement operates through a combination of national MITECO oversight and regional autonomous community (CCAA) implementation. Ecoembes monitors membership compliance. Active enforcement varies significantly by region — Catalonia and Basque Country tend to be more proactive.",
    priorities: ['Ecoembes registration', 'Correct tonnage declaration', 'Labelling for Spanish market'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€500–6k',    per:'€6k–40k',    sys:'€40k–200k'  },
      'epr-underreport':  { iso:'€300–4k',    per:'€4k–25k',    sys:'€25k–100k'  },
      'recycled-content': { iso:'€1k–15k',    per:'€15k–80k',   sys:'€80k–400k'  },
      'labelling':        { iso:'€300–4k',    per:'€4k–25k',    sys:'€25k–100k'  },
      'reuse-target':     { iso:'€1k–15k',    per:'€15k–80k',   sys:'€80k–400k'  },
      'prohibited-pkg':   { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'grade-de':         { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
    }
  },
  RO: {
    name: 'Romania', flag: '🇷🇴', strictness: 'low', strictnessLabel: 'Low (building)',
    body: 'ANPM / Garda de Mediu',
    approach: "Building. Romania's EPR enforcement is developing. ANPM and the Environmental Guard (Garda de Mediu) handle inspections. The RetuRO DRS launched in 2023 and is actively enforced for beverage containers, but broader packaging EPR enforcement is less consistent. Expect increasing activity as PPWR implementation proceeds.",
    priorities: ['ARAM registration', 'RetuRO compliance for beverage packaging', 'National register entry'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€100–1k',    per:'€1k–10k',    sys:'€10k–40k'   },
      'epr-underreport':  { iso:'€50–500',    per:'€500–5k',    sys:'€5k–20k'    },
      'recycled-content': { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'labelling':        { iso:'€50–500',    per:'€500–5k',    sys:'€5k–20k'    },
      'reuse-target':     { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'prohibited-pkg':   { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–100k'  },
      'grade-de':         { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–100k'  },
    }
  },
  SK: {
    name: 'Slovakia', flag: '🇸🇰', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'SIŽP (Slovenská inšpekcia životného prostredia)',
    approach: "Moderate. Slovakia's SIŽP has a track record of enforcement activity for environmental violations. EPR compliance is monitored through NATUR-PACK and RecyKLub data. Enforcement is systematic for obvious non-compliance. Operators with valid scheme membership are unlikely to face significant action without egregious violations.",
    priorities: ['NATUR-PACK or equivalent registration', 'Annual declaration accuracy', 'Labelling for Slovak market'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€300–4k',    per:'€4k–25k',    sys:'€25k–100k'  },
      'epr-underreport':  { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'recycled-content': { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'labelling':        { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–50k'   },
      'reuse-target':     { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'prohibited-pkg':   { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
      'grade-de':         { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
    }
  },
  SI: {
    name: 'Slovenia', flag: '🇸🇮', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'ARSO (Agencija RS za okolje)',
    approach: "Moderate. Slovenia's ARSO monitors packaging compliance through Slopak data. Enforcement is systematic but proportionate — focused on registration and reporting rather than aggressive penalty pursuit. PPWR expected to increase both scheme activity and regulatory scrutiny.",
    priorities: ['Slopak registration', 'Annual reporting', 'Labelling for Slovenian market'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€300–4k',    per:'€4k–25k',    sys:'€25k–100k'  },
      'epr-underreport':  { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'recycled-content': { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'labelling':        { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–50k'   },
      'reuse-target':     { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'prohibited-pkg':   { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
      'grade-de':         { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
    }
  },
  LU: {
    name: 'Luxembourg', flag: '🇱🇺', strictness: 'low', strictnessLabel: 'Low',
    body: "Administration de l'environnement",
    approach: "Low enforcement activity. Luxembourg is a very small market. The Administration de l'environnement manages EPR through Valorlux. Enforcement actions are rare due to small market size — but the legal obligation to register and report is the same as in larger member states.",
    priorities: ['Valorlux registration', 'Annual reporting'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€100–1k',    per:'€1k–5k',     sys:'€5k–20k'    },
      'epr-underreport':  { iso:'€50–500',    per:'€500–3k',    sys:'€3k–10k'    },
      'recycled-content': { iso:'€200–2k',    per:'€2k–10k',    sys:'€10k–40k'   },
      'labelling':        { iso:'€50–500',    per:'€500–3k',    sys:'€3k–10k'    },
      'reuse-target':     { iso:'€200–2k',    per:'€2k–10k',    sys:'€10k–40k'   },
      'prohibited-pkg':   { iso:'€300–3k',    per:'€3k–15k',    sys:'€15k–50k'   },
      'grade-de':         { iso:'€300–3k',    per:'€3k–15k',    sys:'€15k–50k'   },
    }
  },
  MT: {
    name: 'Malta', flag: '🇲🇹', strictness: 'low', strictnessLabel: 'Low (developing)',
    body: 'ERA (Environment and Resources Authority)',
    approach: 'Developing. Malta is the smallest EU member state with limited enforcement history on packaging EPR. ERA is developing its PPWR implementation capacity. Operators should register with GreenPak and maintain basic compliance.',
    priorities: ['GreenPak registration', 'Annual reporting'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€100–1k',    per:'€1k–5k',     sys:'€5k–20k'    },
      'epr-underreport':  { iso:'€50–300',    per:'€300–2k',    sys:'€2k–8k'     },
      'recycled-content': { iso:'€200–2k',    per:'€2k–8k',     sys:'€8k–30k'    },
      'labelling':        { iso:'€50–300',    per:'€300–2k',    sys:'€2k–8k'     },
      'reuse-target':     { iso:'€200–2k',    per:'€2k–8k',     sys:'€8k–30k'    },
      'prohibited-pkg':   { iso:'€300–3k',    per:'€3k–12k',    sys:'€12k–40k'   },
      'grade-de':         { iso:'€300–3k',    per:'€3k–12k',    sys:'€12k–40k'   },
    }
  },
  NL: {
    name: 'Netherlands', flag: '🇳🇱', strictness: 'medium', strictnessLabel: 'Moderate–High',
    body: 'ILT (Inspectie Leefomgeving en Transport)',
    approach: 'Active. The Netherlands has an advanced EPR system with Afvalfonds Verpakkingen and active ILT market surveillance. ILT enforces through a risk-based inspection approach and cross-references Afvalfonds data. Notable for proactive customs integration — non-registered producers importing goods can face market access issues.',
    priorities: ['Afvalfonds Verpakkingen registration', 'Statiegeld compliance for in-scope containers', 'Accurate material stream declaration'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€1k–15k',    per:'€15k–80k',   sys:'€80k–400k'  },
      'epr-underreport':  { iso:'€500–8k',    per:'€8k–50k',    sys:'€50k–200k'  },
      'recycled-content': { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'labelling':        { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'reuse-target':     { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'prohibited-pkg':   { iso:'€3k–30k',    per:'€30k–150k',  sys:'€150k–800k' },
      'grade-de':         { iso:'€3k–30k',    per:'€30k–150k',  sys:'€150k–800k' },
    }
  },
  PL: {
    name: 'Poland', flag: '🇵🇱', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'GIOŚ / BDO',
    approach: "Active. Poland's BDO registry is a state-run system and registration is a direct statutory requirement. GIOŚ (Chief Environmental Inspectorate) conducts regular inspections. Poland is a large market where enforcement capacity is significant. Non-registration in BDO is treated as a direct violation.",
    priorities: ['BDO registration (mandatory statutory register)', 'Annual EPR declaration', 'Product register accuracy'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€500–8k',    per:'€8k–50k',    sys:'€50k–250k'  },
      'epr-underreport':  { iso:'€300–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'recycled-content': { iso:'€1k–15k',    per:'€15k–80k',   sys:'€80k–400k'  },
      'labelling':        { iso:'€300–4k',    per:'€4k–25k',    sys:'€25k–100k'  },
      'reuse-target':     { iso:'€1k–15k',    per:'€15k–80k',   sys:'€80k–400k'  },
      'prohibited-pkg':   { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'grade-de':         { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
    }
  },
  PT: {
    name: 'Portugal', flag: '🇵🇹', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'APA / IGAMAOT',
    approach: 'Moderate. Portugal enforces EPR through APA (national environment agency) and IGAMAOT (inspection body). SPV is the single authorised scheme and feeds compliance data to regulators. Enforcement has increased over recent years — APA actively pursues producers identified as not reporting.',
    priorities: ['SPV membership', 'Accurate tonnage reporting', 'Labelling for Portuguese market'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€300–5k',    per:'€5k–30k',    sys:'€30k–150k'  },
      'epr-underreport':  { iso:'€200–3k',    per:'€3k–20k',    sys:'€20k–80k'   },
      'recycled-content': { iso:'€500–8k',    per:'€8k–50k',    sys:'€50k–200k'  },
      'labelling':        { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'reuse-target':     { iso:'€500–8k',    per:'€8k–50k',    sys:'€50k–200k'  },
      'prohibited-pkg':   { iso:'€1k–10k',    per:'€10k–60k',   sys:'€60k–250k'  },
      'grade-de':         { iso:'€1k–10k',    per:'€10k–60k',   sys:'€60k–250k'  },
    }
  },
  GR: {
    name: 'Greece', flag: '🇬🇷', strictness: 'low', strictnessLabel: 'Low (developing)',
    body: 'EOAN / Regional Authorities',
    approach: 'Developing. Greece has historically been subject to EU infringement proceedings for packaging directive compliance. EOAN is strengthening its enforcement capacity under PPWR. Current enforcement is largely reactive. Operators should not rely on limited enforcement — EU Commission scrutiny applies indirectly.',
    priorities: ['EOAN registration', 'Basic annual reporting'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€100–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'epr-underreport':  { iso:'€100–1k',    per:'€1k–8k',     sys:'€8k–30k'    },
      'recycled-content': { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–80k'   },
      'labelling':        { iso:'€100–1k',    per:'€1k–8k',     sys:'€8k–30k'    },
      'reuse-target':     { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–80k'   },
      'prohibited-pkg':   { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'grade-de':         { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
    }
  },
  HU: {
    name: 'Hungary', flag: '🇭🇺', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'MOHU / Environmental Authority',
    approach: 'Moderate. Hungary reformed its EPR system in 2023 with MOHU as the sole concessionaire. MOHU actively enforces registration requirements as it has a financial interest in coverage. Administrative penalties apply for non-registration and under-reporting.',
    priorities: ['MOHU registration (sole scheme)', 'Accurate volume declaration', 'Producer registration maintenance'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€300–4k',    per:'€4k–25k',    sys:'€25k–100k'  },
      'epr-underreport':  { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–60k'   },
      'recycled-content': { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'labelling':        { iso:'€200–2k',    per:'€2k–15k',    sys:'€15k–50k'   },
      'reuse-target':     { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–120k'  },
      'prohibited-pkg':   { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
      'grade-de':         { iso:'€1k–10k',    per:'€10k–50k',   sys:'€50k–200k'  },
    }
  },
  IE: {
    name: 'Ireland', flag: '🇮🇪', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'EPA (Environmental Protection Agency)',
    approach: "Moderate. Ireland's EPA monitors Repak membership and compliance through data-sharing with Repak. Enforcement has been process-oriented — the EPA issues improvement notices and escalates to administrative sanctions for systemic non-compliance. Criminal prosecution is available for serious cases.",
    priorities: ['Repak membership', 'Accurate material tonnage reporting', 'DRS compliance for in-scope packaging'],
    dailyPenalty: false, publicNaming: false, criminalReferral: true, eea: false,
    ranges: {
      'epr-missing':      { iso:'€500–8k',    per:'€8k–50k',    sys:'€50k–300k'  },
      'epr-underreport':  { iso:'€300–5k',    per:'€5k–30k',    sys:'€30k–150k'  },
      'recycled-content': { iso:'€1k–10k',    per:'€10k–60k',   sys:'€60k–300k'  },
      'labelling':        { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–80k'   },
      'reuse-target':     { iso:'€1k–10k',    per:'€10k–60k',   sys:'€60k–300k'  },
      'prohibited-pkg':   { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'grade-de':         { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
    }
  },
  IT: {
    name: 'Italy', flag: '🇮🇹', strictness: 'medium', strictnessLabel: 'Moderate',
    body: 'MASE / ISPRA / CONAI',
    approach: "Moderate. Italy's CONAI system is the backbone of packaging EPR with 6 material-specific sub-consortia. ISPRA and regional environmental agencies (ARPA) monitor compliance. CONAI actively pursues non-members and under-declarants through regular audits. Italy is a large market with significant enforcement activity for major non-compliance.",
    priorities: ['CONAI membership and correct material classification', 'Accurate declaration per material type', 'Customs compliance for imports'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€500–8k',    per:'€8k–60k',    sys:'€60k–300k'  },
      'epr-underreport':  { iso:'€300–5k',    per:'€5k–30k',    sys:'€30k–150k'  },
      'recycled-content': { iso:'€1k–15k',    per:'€15k–80k',   sys:'€80k–400k'  },
      'labelling':        { iso:'€300–3k',    per:'€3k–20k',    sys:'€20k–80k'   },
      'reuse-target':     { iso:'€1k–15k',    per:'€15k–80k',   sys:'€80k–400k'  },
      'prohibited-pkg':   { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'grade-de':         { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
    }
  },
  FR: {
    name: 'France', flag: '🇫🇷', strictness: 'medium', strictnessLabel: 'Moderate–High',
    body: 'DREAL / ADEME',
    approach: 'Active. France has a sophisticated EPR enforcement infrastructure with CITEO feeding compliance data to DREAL inspectors. French EPR enforcement tends to be process-driven — systematic non-compliance triggers escalating administrative sanctions. AGEC law reinforces obligations nationally. France is a significant market where non-compliance is actively detected.',
    priorities: ['CITEO registration', 'Accurate declaration by material stream', 'Eco-modulated fee compliance'],
    dailyPenalty: false, publicNaming: false, criminalReferral: false, eea: false,
    ranges: {
      'epr-missing':      { iso:'€1k–15k',    per:'€15k–100k',  sys:'€100k–500k' },
      'epr-underreport':  { iso:'€500–8k',    per:'€8k–50k',    sys:'€50k–250k'  },
      'recycled-content': { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'labelling':        { iso:'€500–5k',    per:'€5k–30k',    sys:'€30k–150k'  },
      'reuse-target':     { iso:'€2k–20k',    per:'€20k–100k',  sys:'€100k–500k' },
      'prohibited-pkg':   { iso:'€3k–30k',    per:'€30k–150k',  sys:'€150k–1M'   },
      'grade-de':         { iso:'€3k–30k',    per:'€30k–150k',  sys:'€150k–1M'   },
    }
  },
  SE: {
    name: 'Sweden', flag: '🇸🇪',
    strictness: 'high',
    strictnessLabel: 'High',
    body: 'Naturvårdsverket',
    approach: 'Proactive. Sweden has one of the most active EPR enforcement regimes in the EU. Regular audits, public reporting of non-compliant operators, and willingness to refer serious cases for criminal prosecution.',
    priorities: ['EPR registration completeness', 'Accurate tonnage reporting', 'Producer responsibility scheme compliance'],
    dailyPenalty: true,
    publicNaming: true,
    criminalReferral: true,
    eea: false,
    ranges: {
      'epr-missing':      { iso:'SEK 5k–100k',    per:'SEK 100k–1M',    sys:'SEK 1M–10M'   },
      'epr-underreport':  { iso:'SEK 5k–50k',     per:'SEK 50k–500k',   sys:'SEK 500k–5M'  },
      'recycled-content': { iso:'SEK 50k–200k',   per:'SEK 200k–2M',    sys:'SEK 2M–20M'   },
      'labelling':        { iso:'SEK 10k–100k',   per:'SEK 100k–500k',  sys:'SEK 500k–5M'  },
      'reuse-target':     { iso:'SEK 100k–500k',  per:'SEK 500k–5M',    sys:'SEK 5M–50M'   },
      'prohibited-pkg':   { iso:'SEK 200k–1M',    per:'SEK 1M–10M',     sys:'SEK 10M–50M'  },
      'grade-de':         { iso:'SEK 200k–1M',    per:'SEK 1M–10M',     sys:'SEK 10M–100M' },
    }
  },
  NO: {
    name: 'Norway', flag: '🇳🇴',
    strictness: 'high',
    strictnessLabel: 'High (EEA)',
    body: 'Miljødirektoratet',
    approach: 'Proactive. Norway\'s existing packaging enforcement is well-established through Grønt Punkt Norge. PPWR will apply via EEA incorporation (est. mid-2026 to early 2027) — until then, Norwegian national packaging rules apply. Expect enforcement to ramp up quickly after incorporation given Norway\'s strong environmental regulatory culture.',
    priorities: ['EPR registration with Grønt Punkt Norge', 'Beverage container deposit compliance', 'Transport packaging documentation'],
    dailyPenalty: true,
    publicNaming: true,
    criminalReferral: false,
    eea: true,
    ranges: {
      'epr-missing':      { iso:'NOK 50k–200k',   per:'NOK 200k–1M',    sys:'NOK 1M–5M'    },
      'epr-underreport':  { iso:'NOK 20k–100k',   per:'NOK 100k–500k',  sys:'NOK 500k–3M'  },
      'recycled-content': { iso:'NOK 100k–500k',  per:'NOK 500k–2M',    sys:'NOK 2M–10M'   },
      'labelling':        { iso:'NOK 20k–100k',   per:'NOK 100k–500k',  sys:'NOK 500k–3M'  },
      'reuse-target':     { iso:'NOK 50k–300k',   per:'NOK 300k–2M',    sys:'NOK 2M–10M'   },
      'prohibited-pkg':   { iso:'NOK 100k–500k',  per:'NOK 500k–3M',    sys:'NOK 3M–15M'   },
      'grade-de':         { iso:'NOK 100k–500k',  per:'NOK 500k–3M',    sys:'NOK 3M–15M'   },
    }
  },
  DK: {
    name: 'Denmark', flag: '🇩🇰',
    strictness: 'high',
    strictnessLabel: 'High',
    body: 'Miljøstyrelsen',
    approach: 'Active. Denmark introduced new EPR rules in 2025 and Miljøstyrelsen has increased audit activity. Denmark has a track record of criminal referrals for serious environmental violations. New PPWR penalty framework expected to be among the stricter in the EU.',
    priorities: ['EPR registration with DPA-System', 'B2B packaging reporting accuracy', 'Labelling for Danish market'],
    dailyPenalty: false,
    publicNaming: true,
    criminalReferral: true,
    eea: false,
    ranges: {
      'epr-missing':      { iso:'DKK 5k–50k',     per:'DKK 50k–500k',   sys:'DKK 500k–5M'  },
      'epr-underreport':  { iso:'DKK 5k–30k',     per:'DKK 30k–300k',   sys:'DKK 300k–3M'  },
      'recycled-content': { iso:'DKK 10k–100k',   per:'DKK 100k–1M',    sys:'DKK 1M–10M'   },
      'labelling':        { iso:'DKK 2k–20k',     per:'DKK 20k–200k',   sys:'DKK 200k–2M'  },
      'reuse-target':     { iso:'DKK 50k–300k',   per:'DKK 300k–2M',    sys:'DKK 2M–15M'   },
      'prohibited-pkg':   { iso:'DKK 100k–500k',  per:'DKK 500k–5M',    sys:'DKK 5M–20M'   },
      'grade-de':         { iso:'DKK 100k–500k',  per:'DKK 500k–5M',    sys:'DKK 5M–20M'   },
    }
  },
  FI: {
    name: 'Finland', flag: '🇫🇮',
    strictness: 'high',
    strictnessLabel: 'High',
    body: 'Syke / Kesely',
    approach: 'Systematic. Finland operates RINKI and enforces through Syke (Finnish Environment Institute). Enforcement is methodical rather than aggressive — but Finland has a low tolerance for repeated non-compliance and will escalate. Strong focus on data quality in EPR reporting.',
    priorities: ['RINKI registration (>1 tonne threshold)', 'Accurate material-type reporting', 'Packaging waste collection obligations'],
    dailyPenalty: false,
    publicNaming: false,
    criminalReferral: false,
    eea: false,
    ranges: {
      'epr-missing':      { iso:'€1k–10k',        per:'€10k–100k',      sys:'€100k–500k'   },
      'epr-underreport':  { iso:'€500–5k',        per:'€5k–50k',        sys:'€50k–250k'    },
      'recycled-content': { iso:'€5k–30k',        per:'€30k–150k',      sys:'€150k–500k'   },
      'labelling':        { iso:'€500–5k',        per:'€5k–50k',        sys:'€50k–200k'    },
      'reuse-target':     { iso:'€5k–30k',        per:'€30k–200k',      sys:'€200k–1M'     },
      'prohibited-pkg':   { iso:'€10k–50k',       per:'€50k–250k',      sys:'€250k–1M'     },
      'grade-de':         { iso:'€10k–50k',       per:'€50k–250k',      sys:'€250k–1M'     },
    }
  },
  EE: {
    name: 'Estonia', flag: '🇪🇪',
    strictness: 'medium',
    strictnessLabel: 'Medium (building)',
    body: 'Keskkonnaamet',
    approach: 'Building capacity. Estonia has a strong deposit system for beverages but industrial/transport packaging enforcement is less developed. Keskkonnaamet is expanding its PPWR implementation capacity. Enforcement is currently reactive — complaints-driven rather than proactive audit. Expect significant increase in activity as PPWR beds in.',
    priorities: ['EPR registration for industrial packaging', 'Cross-border flow documentation', 'Beverage deposit system compliance'],
    dailyPenalty: false,
    publicNaming: false,
    criminalReferral: false,
    eea: false,
    ranges: {
      'epr-missing':      { iso:'€200–2k',        per:'€2k–20k',        sys:'€20k–80k'     },
      'epr-underreport':  { iso:'€100–1k',        per:'€1k–10k',        sys:'€10k–50k'     },
      'recycled-content': { iso:'€500–5k',        per:'€5k–30k',        sys:'€30k–100k'    },
      'labelling':        { iso:'€100–1k',        per:'€1k–10k',        sys:'€10k–50k'     },
      'reuse-target':     { iso:'€500–5k',        per:'€5k–30k',        sys:'€30k–120k'    },
      'prohibited-pkg':   { iso:'€1k–10k',        per:'€10k–50k',       sys:'€50k–150k'    },
      'grade-de':         { iso:'€1k–10k',        per:'€10k–50k',       sys:'€50k–150k'    },
    }
  },
  LV: {
    name: 'Latvia', flag: '🇱🇻',
    strictness: 'medium',
    strictnessLabel: 'Medium (building)',
    body: 'VSIA LVĢMC',
    approach: 'Developing. Latvia operates Latvijas Zaļais punkts (Green Dot) with moderate enforcement activity. Administrative fines have historically been low but are expected to increase significantly under PPWR. The regulator has signalled increased focus on B2B packaging compliance. Under-registration is a known gap that authorities are beginning to address.',
    priorities: ['LZP registration', 'B2B packaging under-registration', 'Import flow documentation'],
    dailyPenalty: false,
    publicNaming: false,
    criminalReferral: false,
    eea: false,
    ranges: {
      'epr-missing':      { iso:'€280–2k',        per:'€2k–15k',        sys:'€15k–60k'     },
      'epr-underreport':  { iso:'€150–1k',        per:'€1k–10k',        sys:'€10k–40k'     },
      'recycled-content': { iso:'€500–4k',        per:'€4k–25k',        sys:'€25k–80k'     },
      'labelling':        { iso:'€150–1k',        per:'€1k–8k',         sys:'€8k–40k'      },
      'reuse-target':     { iso:'€500–4k',        per:'€4k–25k',        sys:'€25k–100k'    },
      'prohibited-pkg':   { iso:'€700–5k',        per:'€5k–35k',        sys:'€35k–120k'    },
      'grade-de':         { iso:'€700–5k',        per:'€5k–35k',        sys:'€35k–120k'    },
    }
  },
  LT: {
    name: 'Lithuania', flag: '🇱🇹',
    strictness: 'medium',
    strictnessLabel: 'Medium (active)',
    body: 'Aplinkos apsaugos agentūra (AAA)',
    approach: 'Active and increasing. Lithuania\'s AAA has meaningfully increased enforcement activity since 2023 and has specifically flagged B2B packaging under-reporting as an audit priority. Lithuania is considered more enforcement-active than its Baltic peers. Expect continued escalation as PPWR implementation proceeds.',
    priorities: ['B2B packaging EPR reporting (explicit audit priority)', 'Žaliasis taškas registration', 'Cross-border import documentation'],
    dailyPenalty: false,
    publicNaming: false,
    criminalReferral: false,
    eea: false,
    ranges: {
      'epr-missing':      { iso:'€300–3k',        per:'€3k–20k',        sys:'€20k–80k'     },
      'epr-underreport':  { iso:'€200–2k',        per:'€2k–15k',        sys:'€15k–60k'     },
      'recycled-content': { iso:'€500–5k',        per:'€5k–30k',        sys:'€30k–100k'    },
      'labelling':        { iso:'€200–2k',        per:'€2k–15k',        sys:'€15k–60k'     },
      'reuse-target':     { iso:'€500–5k',        per:'€5k–30k',        sys:'€30k–120k'    },
      'prohibited-pkg':   { iso:'€1k–8k',         per:'€8k–50k',        sys:'€50k–150k'    },
      'grade-de':         { iso:'€1k–8k',         per:'€8k–50k',        sys:'€50k–150k'    },
    }
  }
};

// ── VIOLATION PROFILES ─────────────────────────────────────────────────────
const VIOLATION_PROFILES = {
  'epr-missing': {
    label: 'EPR Non-Registration',
    baseSeverity: 'high',
    description: 'Failure to register with the national EPR scheme before placing packaging on the market. Typically the first violation authorities check for.',
    nonMonetary: {
      isolated:   ['Corrective order — register within defined period', 'Warning letter on file'],
      persistent: ['Sales ban on affected product lines', 'Public register entry in some countries', 'Retrospective EPR fee assessment'],
      systemic:   ['Full market withdrawal order', 'Public naming and shaming', 'Criminal referral (SE, DK)', 'Customs flagging for future shipments'],
    }
  },
  'epr-underreport': {
    label: 'EPR Under-Reporting',
    baseSeverity: 'medium',
    description: 'Reporting materially less packaging weight than actually placed on the market — whether deliberate or through poor data systems.',
    nonMonetary: {
      isolated:   ['Corrective assessment and top-up payment', 'Enhanced reporting obligation for following year'],
      persistent: ['Mandatory third-party audit of packaging data', 'Public register entry', 'Retrospective penalty + interest'],
      systemic:   ['Sales ban pending corrective compliance programme', 'Public naming', 'Criminal referral for deliberate under-reporting'],
    }
  },
  'recycled-content': {
    label: 'Recycled Content Non-Compliance',
    baseSeverity: 'high',
    description: 'Plastic packaging placed on the market does not meet the mandatory minimum recycled content thresholds (30% non-contact by 2030).',
    nonMonetary: {
      isolated:   ['Corrective order — bring into compliance within set period', 'Documentary evidence of remediation required'],
      persistent: ['Mandatory product recall of non-compliant batches', 'Public notice of non-compliance'],
      systemic:   ['Full market withdrawal', 'Public naming', 'Sales ban until compliance demonstrated', 'Criminal referral (SE)'],
    }
  },
  'labelling': {
    label: 'Labelling / DPP Missing',
    baseSeverity: 'medium',
    description: 'Missing, incorrect, or wrong-language harmonised sorting labels (from 2028) or absent digital product passport QR code (from 2030).',
    nonMonetary: {
      isolated:   ['Corrective order — re-label before next placement on market', 'Grace period typically granted for first instance'],
      persistent: ['Product hold at border / customs', 'Mandatory re-labelling at importer\'s cost before release'],
      systemic:   ['Market withdrawal', 'Public notice', 'Customs block on all shipments from same source'],
    }
  },
  'reuse-target': {
    label: 'Reuse Target Failure',
    baseSeverity: 'high',
    description: 'Transport packaging placed on the market does not meet the 40% reusable threshold (2030) or 70% threshold (2040). Includes failure to maintain documented reuse records.',
    nonMonetary: {
      isolated:   ['Compliance notice — submit reuse improvement plan within 90 days', 'Monitoring period imposed'],
      persistent: ['Daily penalty until compliance achieved (SE)', 'Mandatory public compliance programme', 'Enhanced monitoring for 3 years'],
      systemic:   ['Sales ban on products using non-compliant transport packaging', 'Public naming', 'Mandatory third-party compliance audit'],
    }
  },
  'prohibited-pkg': {
    label: 'Placing Prohibited Packaging',
    baseSeverity: 'critical',
    description: 'Marketing or selling products in packaging formats prohibited under PPWR Annex V (e.g. PFAS-containing packaging, oxo-degradable plastic, prohibited single-use formats).',
    nonMonetary: {
      isolated:   ['Immediate corrective order', 'Mandatory withdrawal of affected stock within defined period'],
      persistent: ['Full market withdrawal order', 'Public naming and shaming', 'Customs hold on future shipments from same supplier'],
      systemic:   ['Immediate sales ban', 'Mandatory public product recall', 'Criminal referral (SE, DK)', 'Customs flagging across all ports'],
    }
  },
  'grade-de': {
    label: 'Marketing Grade D/E Packaging post-2030',
    baseSeverity: 'critical',
    description: 'Placing packaging graded D or E on the EU market after 2030, when both grades are banned under PPWR Article 6.',
    nonMonetary: {
      isolated:   ['Immediate corrective order', 'Mandatory withdrawal and replacement within set period'],
      persistent: ['Full market withdrawal', 'Mandatory compliance programme with third-party verification'],
      systemic:   ['Immediate sales ban', 'Public naming', 'Criminal referral (SE, DK)', 'Mandatory product recall at producer\'s cost'],
    }
  },
};

// ── BAND LOGIC ─────────────────────────────────────────────────────────────
// strictness × baseSeverity × scale → band label
const BAND_MATRIX = {
  high: {
    critical: { isolated:'HIGH',     persistent:'CRITICAL', systemic:'CRITICAL' },
    high:     { isolated:'MEDIUM',   persistent:'HIGH',     systemic:'CRITICAL' },
    medium:   { isolated:'LOW',      persistent:'MEDIUM',   systemic:'HIGH'     },
  },
  medium: {
    critical: { isolated:'MEDIUM',   persistent:'HIGH',     systemic:'HIGH'     },
    high:     { isolated:'LOW',      persistent:'MEDIUM',   systemic:'HIGH'     },
    medium:   { isolated:'LOW',      persistent:'LOW',      systemic:'MEDIUM'   },
  },
};
const BAND_STYLE = {
  CRITICAL: { bg:'#dc2626', label:'CRITICAL',   icon:'🔴', desc:'Highest enforcement risk. Immediate action required.' },
  HIGH:     { bg:'#d97706', label:'HIGH',        icon:'🟠', desc:'Significant enforcement risk. Legal counsel recommended.' },
  MEDIUM:   { bg:'#0369a1', label:'MEDIUM',      icon:'🟡', desc:'Moderate risk. Compliance programme needed.' },
  LOW:      { bg:'#16a34a', label:'LOW',          icon:'🟢', desc:'Lower risk in this jurisdiction. Monitor and document.' },
};

// ── RENDER ENFORCEMENT PROFILES ────────────────────────────────────────────
function renderEnforcementProfiles() {
  const container = document.getElementById('enforcement-profiles');
  if (!container) return;
  container.innerHTML = Object.entries(COUNTRY_ENFORCEMENT).map(([code, c]) => {
    const strictColor = c.strictness === 'high' ? '#dc2626' : c.strictness === 'medium' ? '#d97706' : '#0369a1';
    const strictBg = c.strictness === 'high' ? '#fee2e2' : c.strictness === 'medium' ? '#fef3c7' : '#e0f2fe';
    return `<div onclick="toggleEnfProfile('${code}')" style="background:white;border:1px solid var(--border);border-radius:10px;padding:11px 13px;cursor:pointer;transition:all .2s;box-shadow:var(--shadow)" id="enf-${code}">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:20px">${c.flag}</span>
          <div>
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:13px;line-height:1.2">${c.name}</div>
            <div style="font-size:10px;color:var(--muted)">${c.body}</div>
          </div>
        </div>
        <span id="enf-chevron-${code}" style="font-size:13px;color:var(--muted);transition:transform .25s;display:inline-block">▼</span>
      </div>
      <div style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:20px;background:${strictBg};color:${strictColor};font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">${c.strictnessLabel}</div>
      <div id="enf-detail-${code}" style="display:none;margin-top:10px;font-size:12px;color:var(--ink);line-height:1.6;border-top:1px solid var(--border);padding-top:10px">
        <p style="margin-bottom:8px">${c.approach}</p>
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:4px">Enforcement priorities:</div>
        ${c.priorities.map(p => `<div style="padding:3px 0;display:flex;gap:6px"><span style="color:var(--sg-red)">→</span>${p}</div>`).join('')}
        ${c.dailyPenalty ? '<div style="margin-top:6px;padding:4px 8px;background:#fee2e2;border-radius:4px;font-size:10px;font-weight:600;color:#dc2626">⚠ Daily accruing penalties possible</div>' : ''}
        ${c.publicNaming ? '<div style="margin-top:4px;padding:4px 8px;background:#fef3c7;border-radius:4px;font-size:10px;font-weight:600;color:#92400e">⚠ Public naming of non-compliant operators</div>' : ''}
        ${c.criminalReferral ? '<div style="margin-top:4px;padding:4px 8px;background:#fee2e2;border-radius:4px;font-size:10px;font-weight:600;color:#dc2626">⚠ Criminal referral possible for serious cases</div>' : ''}
        ${c.eea ? '<div style="margin-top:4px;padding:4px 8px;background:#e0f2fe;border-radius:4px;font-size:10px;font-weight:600;color:#0369a1">ℹ EEA: PPWR applies after incorporation (est. mid-2026)</div>' : ''}
      </div>
    </div>`;
  }).join('');
}

function toggleEnfProfile(code) {
  const detail = document.getElementById('enf-detail-' + code);
  const card = document.getElementById('enf-' + code);
  const chevron = document.getElementById('enf-chevron-' + code);
  if (!detail) return;
  const isOpen = detail.style.display !== 'none';
  detail.style.display = isOpen ? 'none' : 'block';
  card.style.borderColor = isOpen ? 'var(--border)' : 'var(--sg-red)';
  if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

let _efActive = 'all';
function filterEnfProfiles(strictness) {
  if (strictness !== undefined) _efActive = strictness;
  const query = (document.getElementById('enf-search')?.value || '').toLowerCase();
  Object.keys(COUNTRY_ENFORCEMENT).forEach(code => {
    const card = document.getElementById('enf-' + code);
    if (!card) return;
    const c = COUNTRY_ENFORCEMENT[code];
    const matchesSearch = !query ||
      c.name.toLowerCase().includes(query) ||
      c.body.toLowerCase().includes(query);
    const matchesFilter = _efActive === 'all' || c.strictness === _efActive;
    card.style.display = matchesSearch && matchesFilter ? '' : 'none';
  });
  ['all','high','medium','low'].forEach(k => {
    const btn = document.getElementById('ef-' + (k === 'medium' ? 'med' : k));
    if (!btn) return;
    const active = _efActive === k;
    btn.style.background = active ? 'var(--ink)' : 'white';
    btn.style.color = active ? 'white' :
      k === 'high' ? '#dc2626' : k === 'medium' ? '#d97706' :
      k === 'low' ? '#0369a1' : 'var(--ink)';
  });
}

// ── RENDER PENALTY TABLE ────────────────────────────────────────────────────
function filterPenaltyTable(violationType, btn) {
  document.querySelectorAll('#penalty-filter-btns .penalty-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPenaltyTable(violationType);
}

function renderPenaltyTable(filter) {
  const tbody = document.getElementById('penalty-tbody');
  if (!tbody) return;

  const rows = [];
  Object.entries(COUNTRY_ENFORCEMENT).forEach(([code, c]) => {
    Object.entries(VIOLATION_PROFILES).forEach(([vtype, v]) => {
      if (filter !== 'all' && filter !== vtype) return;
      const ranges = c.ranges[vtype];
      if (!ranges) return;
      const strictColor = c.strictness === 'high' ? '#dc2626' : c.strictness === 'medium' ? '#d97706' : '#0369a1';
      const strictBg = c.strictness === 'high' ? '#fee2e2' : c.strictness === 'medium' ? '#fef3c7' : '#e0f2fe';
      const sevColor = v.baseSeverity === 'critical' ? '#dc2626' : v.baseSeverity === 'high' ? '#d97706' : '#0369a1';
      const sevBg = v.baseSeverity === 'critical' ? '#fee2e2' : v.baseSeverity === 'high' ? '#fef3c7' : '#e0f2fe';
      // Show the persistent range as the main reference
      rows.push(`<tr style="border-bottom:1px solid var(--border)">
        <td style="padding:9px 12px;font-weight:600;white-space:nowrap;width:110px">${c.flag} ${c.name}</td>
        <td style="padding:9px 10px;width:90px"><span style="padding:2px 7px;border-radius:4px;background:${strictBg};color:${strictColor};font-size:9px;font-weight:700;white-space:nowrap">${c.strictnessLabel}</span></td>
        <td style="padding:9px 12px;font-size:12px;width:160px">${v.label}</td>
        <td style="padding:9px 12px;font-size:12px;width:220px;min-width:220px">
          <div style="white-space:nowrap"><span style="color:var(--muted);font-size:10px;display:inline-block;width:62px">Isolated:</span> ${ranges.iso}</div>
          <div style="white-space:nowrap"><span style="color:var(--amber);font-size:10px;display:inline-block;width:62px">Persistent:</span> ${ranges.per}</div>
          <div style="white-space:nowrap"><span style="color:var(--warn);font-size:10px;display:inline-block;width:62px">Systemic:</span> ${ranges.sys}</div>
        </td>
        <td style="padding:10px 14px"><span style="padding:3px 8px;border-radius:4px;background:${sevBg};color:${sevColor};font-size:10px;font-weight:700;text-transform:uppercase">${v.baseSeverity}</span></td>
        <td style="padding:10px 14px;font-size:11px;color:var(--muted)">${v.nonMonetary.persistent.slice(0,2).join(' · ')}</td>
      </tr>`);
    });
  });

  tbody.innerHTML = rows.join('') || '<tr><td colspan="6" style="padding:20px;text-align:center;color:var(--muted)">No data for this filter</td></tr>';
}

// ── BANDED FINE ESTIMATOR ──────────────────────────────────────────────────
function clearFineResult() {
  const panel = document.getElementById('fine-result-panel');
  if (panel) panel.style.display = 'none';
}

function calculateBandedFine() {
  const country = document.getElementById('fc-country')?.value || 'SE';
  const violation = document.getElementById('fc-violation')?.value || 'epr-missing';
  const scale = document.getElementById('fc-scale')?.value || 'isolated';

  const c = COUNTRY_ENFORCEMENT[country];
  const v = VIOLATION_PROFILES[violation];
  if (!c || !v) return;

  // Determine band
  const matrix = BAND_MATRIX[c.strictness] || BAND_MATRIX.medium;
  const severityRow = matrix[v.baseSeverity] || matrix.medium;
  const bandKey = severityRow[scale] || 'MEDIUM';
  const band = BAND_STYLE[bandKey];

  // Get range
  const rangeKey = scale === 'isolated' ? 'iso' : scale === 'persistent' ? 'per' : 'sys';
  const range = c.ranges[violation]?.[rangeKey] || 'Not available';

  // Non-monetary consequences
  const consequences = v.nonMonetary[scale] || [];

  // Scale label
  const scaleLabels = { isolated:'Isolated / first-time', persistent:'Persistent / repeated', systemic:'Systemic / deliberate' };

  const panel = document.getElementById('fine-result-panel');
  panel.style.display = 'block';
  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div style="font-size:32px">${band.icon}</div>
      <div>
        <div style="font-size:11px;opacity:.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px">Penalty Band</div>
        <div style="display:inline-flex;align-items:center;padding:6px 18px;border-radius:8px;background:${band.bg};color:white;font-family:'Syne',sans-serif;font-weight:800;font-size:22px;letter-spacing:1px">${band.label}</div>
        <div style="font-size:12px;opacity:.7;margin-top:4px">${band.desc}</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px">
      <div style="background:rgba(255,255,255,.08);border-radius:8px;padding:12px">
        <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Country</div>
        <div style="font-weight:600">${c.flag} ${c.name}</div>
        <div style="font-size:11px;opacity:.7">${c.body}</div>
      </div>
      <div style="background:rgba(255,255,255,.08);border-radius:8px;padding:12px">
        <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Violation</div>
        <div style="font-weight:600">${v.label}</div>
        <div style="font-size:11px;opacity:.7">${scaleLabels[scale]}</div>
      </div>
    </div>

    <div style="background:rgba(255,255,255,.08);border-radius:8px;padding:14px;margin-bottom:16px">
      <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Indicative Fine Range</div>
      <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:28px;color:#ff6b63">${range}</div>
      <div style="font-size:11px;opacity:.6;margin-top:4px">Training estimate only — based on existing national packaging enforcement precedents</div>
    </div>

    <div style="margin-bottom:16px">
      <div style="font-size:10px;opacity:.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Non-Monetary Consequences — ${scaleLabels[scale]}</div>
      ${consequences.map(c => `<div style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:13px"><span style="color:#fcd34d;flex-shrink:0">⚠</span>${c}</div>`).join('')}
    </div>

    ${c.dailyPenalty && (scale === 'persistent' || scale === 'systemic') ? `<div style="background:rgba(220,38,38,.3);border-radius:8px;padding:10px;margin-bottom:10px;font-size:12px"><strong>⚠ Daily accruing penalties:</strong> ${c.name} can impose fines that accrue daily until the violation is remedied. The range above represents the initial fine — total exposure grows with time.</div>` : ''}
    ${c.publicNaming && scale === 'systemic' ? `<div style="background:rgba(245,158,11,.3);border-radius:8px;padding:10px;margin-bottom:10px;font-size:12px"><strong>⚠ Public naming:</strong> ${c.name}'s enforcement authority may publish non-compliant operators publicly. Reputational risk should be factored into the total exposure assessment.</div>` : ''}
    ${c.criminalReferral && scale === 'systemic' ? `<div style="background:rgba(220,38,38,.4);border-radius:8px;padding:10px;margin-bottom:10px;font-size:12px"><strong>🚨 Criminal referral risk:</strong> ${c.name} has a track record of referring serious environmental violations for criminal investigation. This applies to deliberate or large-scale non-compliance.</div>` : ''}
    ${c.eea ? `<div style="background:rgba(3,105,161,.3);border-radius:8px;padding:10px;font-size:12px"><strong>ℹ EEA note:</strong> Norway applies PPWR after EEA incorporation (estimated mid-2026 to early 2027). Until then, Norwegian national packaging rules and penalties apply. Plan for PPWR penalties to become active before end of 2027.</div>` : ''}

    <div style="margin-top:16px;padding:12px;background:rgba(255,255,255,.06);border-radius:8px;border:1px solid rgba(255,255,255,.15);font-size:11px;opacity:.8;line-height:1.6">
      <strong>⚖️ Disclaimer:</strong> These are training estimates only, derived from existing national packaging enforcement precedents. Exact PPWR penalty scales are set by national law and enforcement practice and have not yet been fully established in all Member States. Figures will change as PPWR is implemented. This tool does not constitute legal advice.
    </div>
  `;
}


// ═══════════════════════════════════════════════════════════════════════════
// PACKAGING MATERIALS DATABASE
// Each record = a specific packaging format relevant to Company A
// Fields:
//   id, label, tier (sales/grouped/transport), material, grade (A-E),
//   gradeRationale, issues[], ppwrBan (bool), banReason, banYear,
//   rcCategory (contact-sensitive/non-contact/beverage/none),
//   reusable (bool), reusableNotes, eprFeeDirection, sgRelevance
// ═══════════════════════════════════════════════════════════════════════════
const PACKAGING_MATERIALS = [

  // ── SALES / CONSUMER PACKAGING ──────────────────────────────────────────
  {
    id: 'cardboard-mono',
    label: 'Cardboard carton (single-material)',
    tier: 'sales',
    material: 'Paper/cardboard',
    grade: 'A',
    gradeRationale: 'Single-material corrugated or folded cardboard with no barrier coatings — easily recyclable in paper stream at scale.',
    issues: [],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'none',
    reusable: false,
    reusableNotes: 'Single-use by design. Does not contribute to transport reuse target.',
    eprFeeDirection: 'lowest',
    sgRelevance: 'Standard outer carton for many Company A product lines. Grade A status is a strong position — maintain single-material spec.',
  },
  {
    id: 'plastic-bag-ldpe',
    label: 'Plastic bag / film wrap (LDPE)',
    tier: 'sales',
    material: 'LDPE plastic',
    grade: 'C',
    gradeRationale: 'LDPE film is technically recyclable but collection infrastructure is limited in most markets. Grades C under current criteria due to scale of recycling availability.',
    issues: ['Limited collection infrastructure in many EU markets', 'Often contaminated in mixed waste streams', 'Thin-gauge film difficult to sort mechanically'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'medium-rising',
    sgRelevance: 'Used for weather protection on some product lines. Grade C is permitted to 2030 but faces phase-out pressure. Plan transition to paper-based alternatives or Grade A film.',
  },
  {
    id: 'multilayer-laminate',
    label: 'Multi-layer laminate bag (plastic + foil/paper)',
    tier: 'sales',
    material: 'Mixed polymer laminate',
    grade: 'E',
    gradeRationale: 'Combination of incompatible materials (plastic film + aluminium foil or paper) creates a composite that cannot be separated for recycling. No viable recycling stream at scale.',
    issues: ['No viable separation process at scale', 'Contaminates both paper and plastic recycling streams', 'Common in construction chemical packaging (mortars, adhesives)'],
    ppwrBan: true,
    banReason: 'Grade E packaging banned from 2030 (PPWR Art. 6). Multi-layer laminates that impede recyclability also potentially caught by Art. 5 restrictions on packaging composition.',
    banYear: 2030,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'highest-banned',
    sgRelevance: 'HIGH PRIORITY. If used for mortars, adhesives or construction chemicals, this format must be replaced before 2030. Alternatives: mono-material PE bags, paper valve sacks with PE liner (if liner is separable), or rigid containers.',
  },
  {
    id: 'pet-blister',
    label: 'PET blister / clamshell pack',
    tier: 'sales',
    material: 'PET plastic',
    grade: 'B',
    gradeRationale: 'Clear PET is well-established in recycling streams. Blister format is recyclable where collection exists. Minor limitations due to heat-bonded card backing in some formats.',
    issues: ['Card-backed blisters require separation — check format', 'PVC blister (different material) is Grade E — confirm polymer type'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'low',
    sgRelevance: 'Acceptable format. Confirm all blisters are PET not PVC — PVC is Grade E and banned from 2030. Recycled content target: 30% by 2030.',
  },
  {
    id: 'plastic-bucket-hdpe',
    label: 'Rigid HDPE bucket / tub',
    tier: 'sales',
    material: 'HDPE plastic',
    grade: 'A',
    gradeRationale: 'HDPE is one of the most recyclable plastics with well-established collection and reprocessing at scale across EU markets.',
    issues: ['Lids may be different polymer — check and specify mono-material lid'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: 'Can be designed for reuse (refillable) — potential opportunity for some product lines.',
    eprFeeDirection: 'lowest',
    sgRelevance: 'Strong position. Used for mortars, sealants, coatings. Ensure lid is same polymer or separately recyclable. Recycled content target: 30% by 2030.',
  },
  {
    id: 'glass-bottle',
    label: 'Glass bottle / jar',
    tier: 'sales',
    material: 'Glass',
    grade: 'A',
    gradeRationale: 'Glass is infinitely recyclable with no quality degradation. Well-established collection across EU markets, particularly through deposit systems in Norway, Germany, Ireland, and several other EU/EEA countries.',
    issues: ['Heavy — higher transport emissions', 'Ceramic or crystal glass contaminates container glass stream'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'none',
    reusable: true,
    reusableNotes: 'Deposit-return schemes in various EU/EEA countries (NO, DE, IE, EE, HR, RO, etc.) mean glass bottles are often reused multiple times before recycling.',
    eprFeeDirection: 'lowest',
    sgRelevance: 'Not typical for construction products but relevant if any liquid product lines use glass. Grade A, no recycled content target (not plastic).',
  },

  // ── GROUPED / SECONDARY PACKAGING ───────────────────────────────────────
  {
    id: 'shrink-wrap-grouped',
    label: 'Shrink wrap over grouped cartons (PE film)',
    tier: 'grouped',
    material: 'PE plastic film',
    grade: 'C',
    gradeRationale: 'PE film is recyclable in dedicated film streams but grouped packaging shrink wrap is often removed and discarded at retail or customer site — collection rate is low.',
    issues: ['Rarely collected separately at B2B customer sites', 'Often contaminated with labels, print, and adhesive residue', 'Collection infrastructure varies across EU markets'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'medium-rising',
    sgRelevance: 'Common for grouped product shipments. Grade C — permitted to 2030 but under review. Consider paperboard banding or cardboard overwrap as higher-grade alternatives.',
  },
  {
    id: 'cardboard-outer',
    label: 'Cardboard outer / display box (grouped)',
    tier: 'grouped',
    material: 'Paper/cardboard',
    grade: 'A',
    gradeRationale: 'Single-material cardboard outer — fully recyclable in paper stream. Standard grouped packaging format with excellent recyclability profile.',
    issues: ['Laminated or foil-printed outers reduce grade — check finish'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'none',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'lowest',
    sgRelevance: 'Preferred format for grouped packaging. Maintain single-material spec — avoid lamination or foil embossing which can reduce recyclability grade.',
  },

  // ── TRANSPORT / TERTIARY PACKAGING ──────────────────────────────────────
  {
    id: 'stretch-wrap-pallet',
    label: 'Stretch wrap (LLDPE film) — one-way pallet wrap',
    tier: 'transport',
    material: 'LLDPE plastic film',
    grade: 'D',
    gradeRationale: 'LLDPE stretch film is technically recyclable but one-way pallet stretch wrap is almost never collected from B2B customer sites. Practical recycling rate near zero. Grades D under current criteria.',
    issues: ['Near-zero actual collection rate at B2B delivery points', 'Contamination from tape, labels and product residue', 'No viable collection system across most EU markets for B2B use'],
    ppwrBan: true,
    banReason: 'Grade D banned from 2030 (PPWR Art. 6). As the most common one-way transport packaging format, this is one of the highest-impact PPWR compliance issues for Company A logistics.',
    banYear: 2030,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: 'Zero contribution to reuse target. Replacement with reusable alternatives (crates, nets, reusable pallet hood) is required.',
    eprFeeDirection: 'highest-banned',
    sgRelevance: 'CRITICAL. Stretch wrap on outbound pallets is almost certainly Company A\'s highest-volume Grade D packaging. Must be replaced before 2030. Options: reusable pallet hoods (Grade A, contributes to reuse target), cardboard angle boards + banding, or honeycomb paper wrap.',
  },
  {
    id: 'wooden-pallet-oneuse',
    label: 'Wooden pallet — one-way / non-pooled',
    tier: 'transport',
    material: 'Wood',
    grade: 'B',
    gradeRationale: 'Wood is recyclable (biomass/energy recovery or chipping) but one-way pallets have limited actual recycling in practice. Grade B reflects good material but one-way use model.',
    issues: ['One-way use means does not contribute to reuse target', 'Treatment chemicals (ISPM15 heat treatment) must be documented'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'none',
    reusable: false,
    reusableNotes: 'One-way by design. Does NOT contribute to the 40% reuse target.',
    eprFeeDirection: 'low',
    sgRelevance: 'Used for inbound shipments from some suppliers. Does not contribute to reuse target — only pooled/returnable pallets do. Switching to euro-pallet pool (CHEP/LPR) converts this to a reuse-contributing asset.',
  },
  {
    id: 'euro-pallet-pooled',
    label: 'Euro-pallet — pooled / returnable (CHEP / LPR)',
    tier: 'transport',
    material: 'Wood',
    grade: 'A',
    gradeRationale: 'Pooled pallets are designed for repeated use (50+ trips). High-quality wood, maintained and repaired. Grade A reflects both material quality and reuse design.',
    issues: ['Must document trip count and return rate to evidence reuse compliance', 'Pool provider data needed for PPWR reuse reporting'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'none',
    reusable: true,
    reusableNotes: 'Directly contributes to the 40% (2030) and 70% (2040) transport packaging reuse targets. Trip data from pool provider (CHEP, LPR etc.) serves as reuse documentation.',
    eprFeeDirection: 'lowest',
    sgRelevance: 'Best-in-class transport packaging for PPWR. Switching from one-way to pooled pallets is the single most impactful action for reuse target compliance. Pool provider supplies trip data for PPWR reporting.',
  },
  {
    id: 'plastic-corner-boards',
    label: 'Plastic corner boards / edge protectors — one-way',
    tier: 'transport',
    material: 'PP/PE plastic',
    grade: 'C',
    gradeRationale: 'PP and PE corner boards are technically recyclable but rarely collected from delivery sites. Grade C reflects material recyclability offset by poor collection practice.',
    issues: ['Contaminated with tape and stretch film adhesive residue', 'Mixed with other transport waste at delivery — not separately collected'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: 'One-way. Reusable plastic or cardboard corner boards exist as alternatives.',
    eprFeeDirection: 'medium-rising',
    sgRelevance: 'Grade C — under pressure. Alternatives: cardboard corner boards (Grade A, no plastic RC target), reusable plastic corner boards with return programme (contributes to reuse target).',
  },
  {
    id: 'reusable-plastic-crate',
    label: 'Reusable plastic crate / tote — pooled',
    tier: 'transport',
    material: 'HDPE/PP plastic',
    grade: 'A',
    gradeRationale: 'Designed for 100+ trips. Durable, uniform material, reprocessed at end of life. Grade A for both material and design.',
    issues: ['Requires return logistics infrastructure', 'Customer agreements needed for return'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'non-contact',
    reusable: true,
    reusableNotes: 'Fully contributes to reuse target. Each verified trip adds to your reuse ratio. RFID or barcode tracking enables PPWR reuse documentation.',
    eprFeeDirection: 'lowest',
    sgRelevance: 'Ideal alternative to one-way transport packaging for appropriate product lines. Higher upfront cost offset by EPR fee savings and reuse target compliance.',
  },
  {
    id: 'cardboard-corner-boards',
    label: 'Cardboard corner boards / edge protectors',
    tier: 'transport',
    material: 'Paper/cardboard',
    grade: 'A',
    gradeRationale: 'Single-material cardboard — fully recyclable in paper stream. Commonly collected with general cardboard waste at delivery sites.',
    issues: [],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'none',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'lowest',
    sgRelevance: 'Drop-in replacement for plastic corner boards. Grade A, no plastic recycled content target. Simple switch with immediate grade improvement.',
  },
  {
    id: 'steel-strapping',
    label: 'Steel strapping / banding',
    tier: 'transport',
    material: 'Steel',
    grade: 'A',
    gradeRationale: 'Steel is fully recyclable with well-established scrap metal collection. High recycled content already in new steel strapping.',
    issues: ['Injury risk during removal — not a PPWR issue but operational consideration'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'none',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'lowest',
    sgRelevance: 'Grade A. No plastic recycled content target. Good position for PPWR.',
  },
  {
    id: 'plastic-strapping',
    label: 'Plastic strapping / banding (PP/PET)',
    tier: 'transport',
    material: 'PP or PET plastic',
    grade: 'C',
    gradeRationale: 'PP and PET strapping is technically recyclable but rarely collected from delivery sites in usable condition.',
    issues: ['Mixed with other waste streams at delivery', 'Tension-damaged strapping contaminates recycling bales'],
    ppwrBan: false,
    banReason: null,
    banYear: null,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'medium-rising',
    sgRelevance: 'Grade C — consider switching to steel strapping (Grade A, no RC target) or paper strapping (Grade A) for lower EPR fees and better long-term compliance.',
  },
  {
    id: 'oxo-degradable-film',
    label: 'Oxo-degradable / oxo-fragmentable plastic film',
    tier: 'transport',
    material: 'Oxo-degradable plastic',
    grade: 'E',
    gradeRationale: 'Oxo-degradable plastics fragment into microplastics rather than biodegrading. Explicitly prohibited under PPWR Annex V regardless of format.',
    issues: ['Contaminates recycling streams', 'Generates microplastic pollution', 'Marketed misleadingly as biodegradable'],
    ppwrBan: true,
    banReason: 'Explicitly prohibited under PPWR Annex V — ban applies now, not from 2030. Any oxo-degradable packaging must be removed from use immediately.',
    banYear: 2025,
    rcCategory: 'non-contact',
    reusable: false,
    reusableNotes: null,
    eprFeeDirection: 'highest-banned',
    sgRelevance: 'IMMEDIATE ACTION REQUIRED. If any supplier uses oxo-degradable film, this is a current violation under PPWR. Audit all 3rd party suppliers for this material type.',
  },
];

// ── RECYCLED CONTENT TARGETS BY CATEGORY + YEAR ───────────────────────────
const RC_TARGETS = {
  'non-contact': {
    2025: null,
    2030: 30,
    2035: 40,
    2040: 55,
  },
  'contact-sensitive': {
    2025: null,
    2030: 10,
    2035: 25,
    2040: 50,
  },
  'beverage': {
    2025: 25,
    2030: 30,
    2035: 40,
    2040: 65,
  },
  'none': {
    2025: null, 2030: null, 2035: null, 2040: null,
  }
};

// ── GRADE COMPLIANCE STATUS BY YEAR ───────────────────────────────────────
const GRADE_STATUS = {
  A: { 2025:'permitted', 2028:'permitted', 2030:'permitted', 2035:'permitted', 2040:'permitted' },
  B: { 2025:'permitted', 2028:'permitted', 2030:'permitted', 2035:'permitted', 2040:'permitted' },
  C: { 2025:'permitted', 2028:'permitted', 2030:'permitted', 2035:'under-review', 2040:'phase-out' },
  D: { 2025:'permitted', 2028:'high-fee',  2030:'banned',    2035:'banned',     2040:'banned'    },
  E: { 2025:'permitted', 2028:'high-fee',  2030:'banned',    2035:'banned',     2040:'banned'    },
};

const GRADE_STATUS_LABEL = {
  permitted:    { label:'Permitted ✅',      color:'#16a34a', bg:'#dcfce7' },
  'high-fee':   { label:'Permitted — high EPR fee ⚠️', color:'#d97706', bg:'#fef3c7' },
  'under-review':{ label:'Permitted — phase-out review 🔄', color:'#d97706', bg:'#fef3c7' },
  'phase-out':  { label:'Phase-out likely ⚠️', color:'#dc2626', bg:'#fee2e2' },
  banned:       { label:'BANNED 🚫',        color:'#dc2626', bg:'#fee2e2' },
};

const EPR_FEE_LABELS = {
  lowest:        { label:'Lowest fee band',            icon:'↓↓', color:'#16a34a', bg:'#dcfce7' },
  low:           { label:'Low fee band',               icon:'↓',  color:'#16a34a', bg:'#dcfce7' },
  'medium-rising':{ label:'Medium — rising with phase-out', icon:'→↑', color:'#d97706', bg:'#fef3c7' },
  highest:       { label:'Highest fee band',           icon:'↑↑', color:'#dc2626', bg:'#fee2e2' },
  'highest-banned':{ label:'Highest band → banned 2030', icon:'🚫', color:'#dc2626', bg:'#fee2e2' },
};

// ── PACKAGING COMPLIANCE CHECKER ──────────────────────────────────────────
function renderPackagingChecker() {
  const matSelect = document.getElementById('pkg-material-select');
  const yearSelect = document.getElementById('pkg-year-select');
  if (!matSelect || !yearSelect) return;
  if (!matSelect.options.length) { populateMaterialSelects(); }

  const matId = matSelect.value;
  const year = parseInt(yearSelect.value) || 2030;
  if (!matId) {
    document.getElementById('pkg-checker-output').innerHTML = '<p style="color:var(--muted);font-size:14px">Select a packaging format above to see its compliance profile.</p>';
    return;
  }
  const mat = PACKAGING_MATERIALS.find(m => m.id === matId);
  if (!mat) return;

  const gradeStatus = GRADE_STATUS[mat.grade]?.[year] || 'permitted';
  const gradeStyle = GRADE_STATUS_LABEL[gradeStatus];
  const eprStyle = EPR_FEE_LABELS[mat.eprFeeDirection] || EPR_FEE_LABELS.low;
  const rcTarget = RC_TARGETS[mat.rcCategory]?.[year];
  const isBanned = mat.ppwrBan && mat.banYear && year >= mat.banYear;

  const gradeColors = { A:'#15803d', B:'#16a34a', C:'#d97706', D:'#dc2626', E:'#9b1c1c' };
  const gradeBgs    = { A:'#dcfce7', B:'#d1fae5', C:'#fef3c7', D:'#fee2e2', E:'#fee2e2' };

  const html = `
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:16px">

      <div style="background:var(--paper);border-radius:10px;padding:14px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:8px">Recyclability Grade</div>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:44px;height:44px;border-radius:10px;background:${gradeBgs[mat.grade]};color:${gradeColors[mat.grade]};display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:22px">${mat.grade}</div>
          <div>
            <div style="font-size:13px;font-weight:600">${mat.material}</div>
            <div style="font-size:11px;color:var(--muted);margin-top:2px">${mat.gradeRationale.substring(0,70)}…</div>
          </div>
        </div>
      </div>

      <div style="background:${gradeStyle.bg};border-radius:10px;padding:14px;border:1.5px solid ${gradeStyle.color}30">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:6px">Status in ${year}</div>
        <div style="font-size:14px;font-weight:700;color:${gradeStyle.color}">${gradeStyle.label}</div>
        ${isBanned ? `<div style="font-size:11px;color:#dc2626;margin-top:4px;font-weight:600">Banned from ${mat.banYear} — replacement required</div>` : ''}
      </div>

      <div style="background:${eprStyle.bg};border-radius:10px;padding:14px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:6px">EPR Fee Direction</div>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:20px">${eprStyle.icon}</span>
          <div style="font-size:13px;font-weight:600;color:${eprStyle.color}">${eprStyle.label}</div>
        </div>
      </div>

      <div style="background:var(--paper);border-radius:10px;padding:14px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:6px">Recycled Content Target</div>
        ${rcTarget ? `<div style="font-size:22px;font-weight:800;font-family:'Syne',sans-serif;color:var(--blue)">${rcTarget}%</div><div style="font-size:11px;color:var(--muted);margin-top:2px">min. recycled content by ${year} (${mat.rcCategory})</div>` :
          mat.rcCategory === 'none' ? `<div style="font-size:13px;color:var(--muted)">No plastic RC target<br><span style="font-size:11px">(non-plastic material)</span></div>` :
          `<div style="font-size:13px;color:var(--muted)">No target yet for ${year}<br><span style="font-size:11px">Target applies from 2030</span></div>`}
      </div>

    </div>

    ${mat.issues.length > 0 ? `
    <div style="background:#fef3c7;border-radius:8px;padding:12px;margin-bottom:12px;border:1px solid #fcd34d">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;color:#92400e">⚠ Known Issues</div>
      ${mat.issues.map(i => `<div style="font-size:12px;color:#78350f;padding:3px 0;display:flex;gap:7px"><span style="color:#d97706">→</span>${i}</div>`).join('')}
    </div>` : ''}

    ${mat.ppwrBan ? `
    <div style="background:#fee2e2;border-radius:8px;padding:12px;margin-bottom:12px;border:1px solid #fca5a5">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;color:#9b1c1c">🚫 PPWR Ban / Restriction</div>
      <div style="font-size:12px;color:#7f1d1d">${mat.banReason}</div>
    </div>` : ''}

    ${mat.reusable ? `
    <div style="background:#dcfce7;border-radius:8px;padding:12px;margin-bottom:12px;border:1px solid #86efac">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;color:#14532d">♻ Contributes to Reuse Target</div>
      <div style="font-size:12px;color:#166534">${mat.reusableNotes}</div>
    </div>` : mat.reusableNotes ? `
    <div style="background:var(--cream);border-radius:8px;padding:10px;margin-bottom:12px;border:1px solid var(--border)">
      <div style="font-size:12px;color:var(--muted)">${mat.reusableNotes}</div>
    </div>` : ''}

    <div style="background:var(--light-blue);border-radius:8px;padding:12px;border:1px solid #93c5fd">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;color:var(--blue)">Company A Context</div>
      <div style="font-size:12px;color:#1e3a5f;line-height:1.6">${mat.sgRelevance}</div>
    </div>
  `;

  document.getElementById('pkg-checker-output').innerHTML = html;
}

// ── TRADE-OFF COMPARATOR ──────────────────────────────────────────────────
function renderTradeoff() {
  const fromId = document.getElementById('tradeoff-from')?.value;
  const toId = document.getElementById('tradeoff-to')?.value;
  const year = parseInt(document.getElementById('tradeoff-year')?.value || '2030');

  const from = PACKAGING_MATERIALS.find(m => m.id === fromId);
  const to = PACKAGING_MATERIALS.find(m => m.id === toId);
  if (!from || !to) return;

  const fromStatus = GRADE_STATUS[from.grade]?.[year];
  const toStatus = GRADE_STATUS[to.grade]?.[year];
  const fromStatusStyle = GRADE_STATUS_LABEL[fromStatus];
  const toStatusStyle = GRADE_STATUS_LABEL[toStatus];
  const fromEpr = EPR_FEE_LABELS[from.eprFeeDirection];
  const toEpr = EPR_FEE_LABELS[to.eprFeeDirection];
  const gradeColors = { A:'#15803d', B:'#16a34a', C:'#d97706', D:'#dc2626', E:'#9b1c1c' };
  const gradeBgs = { A:'#dcfce7', B:'#d1fae5', C:'#fef3c7', D:'#fee2e2', E:'#fee2e2' };

  const row = (label, fromVal, toVal, fromStyle, toStyle) => `
    <tr style="border-bottom:1px solid var(--border)">
      <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--muted);width:160px">${label}</td>
      <td style="padding:10px 14px;font-size:13px" ${fromStyle ? `style="padding:10px 14px"` : ''}>${fromVal}</td>
      <td style="padding:10px 14px;font-size:13px">${toVal}</td>
      <td style="padding:10px 14px;font-size:18px;text-align:center">${fromStyle || ''}</td>
    </tr>`;

  const gradeCell = (mat) => `<span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:7px;background:${gradeBgs[mat.grade]};color:${gradeColors[mat.grade]};font-family:'Syne',sans-serif;font-weight:800;font-size:16px">${mat.grade}</span>`;

  const statusCell = (s) => `<span style="padding:3px 9px;border-radius:4px;background:${s.bg};color:${s.color};font-size:11px;font-weight:700">${s.label}</span>`;
  const eprCell = (e) => `<span style="font-size:13px;font-weight:600;color:${e.color}">${e.icon} ${e.label}</span>`;
  const reusableCell = (mat) => mat.reusable ? '<span style="color:#16a34a;font-weight:600">✅ Yes — contributes to target</span>' : '<span style="color:#dc2626">❌ No</span>';
  const rcCell = (mat, yr) => { const t = RC_TARGETS[mat.rcCategory]?.[yr]; return t ? `<span style="font-weight:600;color:var(--blue)">${t}% by ${yr}</span>` : mat.rcCategory === 'none' ? '<span style="color:var(--muted)">No target (non-plastic)</span>' : '<span style="color:var(--muted)">No target yet</span>'; };
  const bannedCell = (mat, yr) => mat.ppwrBan && mat.banYear && yr >= mat.banYear ? `<span style="color:#dc2626;font-weight:700">🚫 Banned from ${mat.banYear}</span>` : '<span style="color:#16a34a">Not prohibited</span>';

  // Change indicator
  const gradeOrder = ['E','D','C','B','A'];
  const gradeImproved = gradeOrder.indexOf(to.grade) > gradeOrder.indexOf(from.grade);
  const gradeSame = from.grade === to.grade;
  const changeIcon = gradeImproved ? '✅ Improvement' : gradeSame ? '→ No change' : '⚠️ Downgrade';

  document.getElementById('tradeoff-output').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;margin-bottom:18px">
      <div style="background:var(--paper);border-radius:10px;padding:14px;text-align:center">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:6px">Current Format</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:14px;margin-bottom:4px">${from.label}</div>
        <div style="font-size:11px;color:var(--muted)">${from.material}</div>
      </div>
      <div style="text-align:center;font-size:24px">→</div>
      <div style="background:var(--paper);border-radius:10px;padding:14px;text-align:center">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted);margin-bottom:6px">Alternative Format</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:14px;margin-bottom:4px">${to.label}</div>
        <div style="font-size:11px;color:var(--muted)">${to.material}</div>
      </div>
    </div>

    <div style="overflow-x:auto;border-radius:10px;border:1px solid var(--border);margin-bottom:14px">
      <table style="width:100%;border-collapse:collapse;font-size:13px;background:white">
        <thead><tr style="background:var(--sg-dark);color:white">
          <th style="padding:10px 14px;text-align:left;font-size:11px">Dimension</th>
          <th style="padding:10px 14px;text-align:left;font-size:11px">Current</th>
          <th style="padding:10px 14px;text-align:left;font-size:11px">Alternative</th>
          <th style="padding:10px 14px;text-align:center;font-size:11px">Change</th>
        </tr></thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border)">
            <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--muted)">Recyclability Grade</td>
            <td style="padding:10px 14px">${gradeCell(from)}</td>
            <td style="padding:10px 14px">${gradeCell(to)}</td>
            <td style="padding:10px 14px;text-align:center;font-size:12px;font-weight:600">${changeIcon}</td>
          </tr>
          <tr style="background:var(--cream);border-bottom:1px solid var(--border)">
            <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--muted)">Status in ${year}</td>
            <td style="padding:10px 14px">${statusCell(fromStatusStyle)}</td>
            <td style="padding:10px 14px">${statusCell(toStatusStyle)}</td>
            <td style="padding:10px 14px;text-align:center;font-size:12px">${fromStatus === 'banned' && toStatus === 'permitted' ? '✅ Resolves ban' : fromStatus === toStatus ? '→' : '↑'}</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border)">
            <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--muted)">EPR Fee Direction</td>
            <td style="padding:10px 14px">${eprCell(fromEpr)}</td>
            <td style="padding:10px 14px">${eprCell(toEpr)}</td>
            <td style="padding:10px 14px;text-align:center;font-size:12px">${from.eprFeeDirection === to.eprFeeDirection ? '→' : toEpr.icon}</td>
          </tr>
          <tr style="background:var(--cream);border-bottom:1px solid var(--border)">
            <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--muted)">Reuse Target</td>
            <td style="padding:10px 14px">${reusableCell(from)}</td>
            <td style="padding:10px 14px">${reusableCell(to)}</td>
            <td style="padding:10px 14px;text-align:center;font-size:12px">${!from.reusable && to.reusable ? '✅ Gains reuse credit' : from.reusable && !to.reusable ? '⚠️ Loses reuse credit' : '→'}</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border)">
            <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--muted)">Plastic RC Target</td>
            <td style="padding:10px 14px">${rcCell(from, year)}</td>
            <td style="padding:10px 14px">${rcCell(to, year)}</td>
            <td style="padding:10px 14px;text-align:center;font-size:12px">—</td>
          </tr>
          <tr style="background:var(--cream)">
            <td style="padding:10px 14px;font-size:12px;font-weight:600;color:var(--muted)">PPWR Ban</td>
            <td style="padding:10px 14px">${bannedCell(from, year)}</td>
            <td style="padding:10px 14px">${bannedCell(to, year)}</td>
            <td style="padding:10px 14px;text-align:center;font-size:12px">${from.ppwrBan && !to.ppwrBan ? '✅ Removes ban risk' : ''}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div style="background:var(--paper);border-radius:8px;padding:12px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--muted);margin-bottom:5px">CA Context — Current</div>
        <div style="font-size:12px;color:var(--ink);line-height:1.6">${from.sgRelevance.substring(0,180)}${from.sgRelevance.length > 180 ? '…' : ''}</div>
      </div>
      <div style="background:#e8f4fd;border-radius:8px;padding:12px;border:1px solid #93c5fd">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--muted);margin-bottom:5px">CA Context — Alternative</div>
        <div style="font-size:12px;color:var(--ink);line-height:1.6">${to.sgRelevance.substring(0,180)}${to.sgRelevance.length > 180 ? '…' : ''}</div>
      </div>
    </div>
  `;
}

// populate material dropdowns filtering by tier
function populateMaterialSelects() {
  const allMats = PACKAGING_MATERIALS;
  const opts = allMats.map(m => `<option value="${m.id}">${m.label} (${m.tier})</option>`).join('');
  const fromSel = document.getElementById('tradeoff-from');
  const toSel = document.getElementById('tradeoff-to');
  const pkgSel = document.getElementById('pkg-material-select');
  if (fromSel) fromSel.innerHTML = opts;
  if (toSel) {
    toSel.innerHTML = opts;
    // default to a different option
    if (toSel.options.length > 1) toSel.selectedIndex = 1;
  }
  if (pkgSel) pkgSel.innerHTML = opts;
}


// ── GLOSSARY ──
const terms = [
  { term:'Producer', tag:'Core Concept', def:'Under PPWR, any person or entity that places packaging or packaged goods on the market for the first time. Includes manufacturers, importers, brand owners, and re-labellers. Company A is a producer in multiple roles — as manufacturer of own products, as importer of sister company goods, and as the EU importer of 3rd party non-EU goods.', sg:'Being a primary producer (own manufacture) carries the fullest set of PPWR obligations.' },
  { term:'EPR — Extended Producer Responsibility', tag:'Regulation', def:'A policy framework making producers financially responsible for the end-of-life management of the packaging they place on the market. Under PPWR, EPR fees are modulated by recyclability grade — the less recyclable your packaging, the higher your fee.', sg:'CA must register with EPR systems in all EU/EEA markets for all packaging flows.' },
  { term:'Packer/Filler', tag:'Legal Role', def:'The entity that physically fills or packs a product into packaging. Under PPWR, the packer/filler is the primary producer — the highest obligation tier. If Company A manufactures and packs its own products, it is the packer/filler and bears the fullest PPWR responsibilities.', sg:'CA\'s own manufacturing sites make CA a packer/filler for those product lines — the highest PPWR obligation tier.' },
  { term:'Importer-Producer', tag:'Legal Role', def:'When a company imports packaged goods into an EU country from outside that country, it becomes the "importer-producer" — taking on full producer obligations for the packaging in the importing country, even if obligations were already met elsewhere.', sg:'Every time CA buys from a sister company in another country, CA becomes the importer-producer in the destination market.' },
  { term:'Recyclability Grade (A–E)', tag:'Compliance', def:'PPWR requires all packaging to be assessed against a five-grade recyclability scale. Grade A = easily recyclable at scale. Grade E = non-recyclable, banned from 2030. Grades directly determine EPR fee levels. Packaging manufacturers must publish recyclability grades.', sg:'CA must know the recyclability grade of all packaging it places on the market — including packaging received from suppliers.' },
  { term:'Recycled Content', tag:'Targets', def:'The minimum percentage of recycled material that must be present in plastic packaging. Mandatory minimum of 30% for most plastic packaging by 2030, escalating to 55% by 2040. Applies per packaging category. Compliance requires certificates of conformity from packaging material suppliers.', sg:'CA\'s own manufactured products require compliant packaging material sourcing. For imported goods, CA must verify supplier compliance.' },
  { term:'Digital Product Passport', tag:'Labelling', def:'A mandatory QR-code-accessible data record attached to packaging from 2030, containing packaging composition, recyclability grade, recycled content percentage, and sorting instructions. Must be accessible to consumers, waste collectors, and regulators.', sg:'CA must implement a digital passport programme for all own-manufactured products sold across EU markets.' },
  { term:'Placement on the Market', tag:'Trigger Point',
    def:"The legal trigger for PPWR EPR obligations. Placing on the market means making packaging available in a country for distribution or use — when supplied to another person. Key distinction: (1) Moving goods to your own warehouse in another country is NOT placing on the market. (2) Selling from that warehouse to a local customer IS placing on the market in that country. (3) Shipping from your warehouse to a customer abroad IS placing on the market in the customer's country. For own-manufactured products, placement occurs when goods first leave the factory for distribution.",
    sg:"A Finnish warehouse serving FI, EE and LV customers requires three separate EPR registrations, each triggered at the first sale in that country — not when goods arrive in the warehouse." },
  { term:'Incoterms', tag:'Commercial', def:'International commercial terms defining the transfer of risk and responsibility between buyer and seller. Under PPWR, Incoterms determine who is the importer of record and therefore who bears the importer-producer EPR obligation. EXW/FCA terms generally shift EPR to the buyer; DDP terms retain it with the seller.', sg:'CA\'s commercial team must review and standardise Incoterms for all cross-border flows to ensure EPR liability is correctly allocated.' },
  { term:'Modulated EPR Fee', tag:'Finance', def:'PPWR requires EPR fees to be differentiated by recyclability grade — more recyclable packaging attracts lower fees. This creates a direct financial incentive to improve packaging recyclability. The fee modulation structure must be published by each national EPR scheme.', sg:'Finance should model EPR fee savings from upgrading packaging grades as part of packaging redesign business cases.' },
  { term:'Reusable Packaging', tag:'Targets', def:'Packaging designed and marketed for multiple trips or rotations. Must meet specific design criteria under PPWR (durability, return system, cleaning requirements). By 2030, 40% of transport packaging placed on the market must be reusable.', sg:'Pallet pools, returnable crates, and refillable containers count. One-way stretch wrap and single-trip corner boards do not.' },
  { term:'Unnecessary Packaging', tag:'Prohibited', def:'PPWR prohibits packaging that exceeds what is functionally necessary to protect, contain, or transport the product. Over-packaging, excessive void fill, and decorative secondary packaging without function may be challenged by enforcement authorities.', sg:'CA should conduct a packaging minimisation review, particularly for own-manufactured products where CA controls the specification.' },
];

function renderGlossary(filter='') {
  const list = document.getElementById('glossary-list');
  const filtered = filter ? terms.filter(t => t.term.toLowerCase().includes(filter) || t.def.toLowerCase().includes(filter) || t.tag.toLowerCase().includes(filter)) : terms;
  list.innerHTML = filtered.map(t => `
    <div class="term-card">
      <div class="term-title">${t.term} <span class="term-tag">${t.tag}</span></div>
      <div class="term-def">${t.def}</div>
      ${t.sg ? `<div class="term-sg">→ CA Context: ${t.sg}</div>` : ''}
    </div>`).join('');
}

function filterGlossary() {
  renderGlossary(document.getElementById('gloss-input').value.toLowerCase());
}


function renderRoleCards() {
  const container = document.getElementById('role-cards-dynamic');
  if (!container) return;
  container.innerHTML = ROLE_CARDS_DATA.map(r => `
    <div class="role-card">
      <div class="role-icon">${r.icon}</div>
      <div class="role-title">${r.title}</div>
      <ul class="role-tasks">
        ${r.tasks.map(t => `<li class="role-task">${t}</li>`).join('')}
      </ul>
    </div>`).join('');
}

function renderSimCountryCards(primaryMarket, additionalMarkets, roles, exportIncoterms) {
  const container = document.getElementById('sim-country-impact');
  const grid = document.getElementById('sim-country-cards');
  if (!container || !grid) return;

  const allMarkets = [primaryMarket, ...(additionalMarkets || [])].filter(Boolean);
  const needsEPR = roles.includes('PRODUCER_EPR') || roles.includes('MANUFACTURER') || roles.includes('IMPORTER');

  // 'Verify' is only shown when obligation is genuinely conditional —
  // specifically export scenarios where Incoterms determine who bears EPR.
  // All other affected markets where EPR is needed get 'EPR Required'.
  const isExportUncertain = exportIncoterms === 'dap';
  const isExportBuyerEPR  = exportIncoterms === 'exw-fca';

  grid.innerHTML = COUNTRY_ORDER.map(code => {
    const c = COUNTRY_CONFIG[code];
    const isAffected = allMarkets.includes(code);

    let borderColor, bgColor, badge, badgeStyle;

    if (isAffected && needsEPR) {
      if (isExportUncertain) {
        // DAP export — genuinely uncertain, show Verify
        borderColor = '#d97706';
        bgColor = '#fffbeb';
        badge = '🟡 Verify';
        badgeStyle = 'background:#fef3c7;color:#d97706';
      } else if (isExportBuyerEPR) {
        // EXW/FCA export — EPR passes to buyer
        borderColor = 'var(--green)';
        bgColor = '#f0fdf4';
        badge = '✅ Buyer bears EPR';
        badgeStyle = 'background:#dcfce7;color:#15803d';
      } else {
        // All other scenarios — EPR Required for all affected markets
        borderColor = '#dc2626';
        bgColor = '#fff5f5';
        badge = '🔴 EPR Required';
        badgeStyle = 'background:#fee2e2;color:#dc2626';
      }
    } else {
      borderColor = 'var(--border)';
      bgColor = 'white';
      badge = null;
      badgeStyle = '';
    }

    return `<div style="background:${bgColor};border:1.5px solid ${borderColor};border-radius:10px;padding:10px 8px;text-align:center;transition:all .2s">
      <div style="font-size:20px;margin-bottom:4px">${c.flag}</div>
      <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:11px;margin-bottom:4px">${c.name}</div>
      ${c.eeaLag ? `<div style="font-size:9px;padding:1px 5px;border-radius:3px;background:#fef3c7;color:#d97706;font-weight:700;margin-bottom:4px">EEA</div>` : ''}
      ${badge
        ? `<div style="font-size:9px;padding:2px 5px;border-radius:3px;font-weight:700;${badgeStyle}">${badge}</div>`
        : `<div style="font-size:9px;color:var(--muted)">Not in scope</div>`}
    </div>`;
  }).join('');

  container.style.display = 'block';
}


// ── INIT — render all sections on page load ─────────────────────────────
renderGlossary();
renderPenaltyTable('all');
renderEnforcementProfiles();
renderCountryCards();
renderRoleCards();
renderScopeSection();
populateMaterialSelects();
setTimeout(renderPackagingChecker, 150);



</script>
</div><!-- /main-content -->
</div><!-- /app-shell -->
</body>
</html>
