(() => {
  "use strict";

  const palette = [
    "#f2241f",
    "#ff880f",
    "#ffe418",
    "#19bf33",
    "#21a6df",
    "#2a42ea",
    "#a431ec",
    "#f232b9",
  ];

  const scaleIntervals = {
    original: [0, 2, 4, 5, 7, 8, 9, 11],
    major: [0, 2, 4, 5, 7, 9, 11, 12],
    minor: [0, 2, 3, 5, 7, 8, 10, 12],
    pentatonic: [0, 2, 4, 7, 9, 12, 14, 16],
    chromatic: [0, 1, 2, 3, 4, 5, 6, 7],
  };

  const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  const TRANSLATIONS = {
    en: {
      'start-welcome': 'Welcome to Pixelsynth Paint.',
      'start-button': 'Click here to Start',
      'btn-settings': '<u>S</u>ettings',
      'btn-clear': '<u>C</u>lear',
      'btn-clear-polygon': 'Clear Poly<u>g</u>on',
      'btn-random': '<u>R</u>andom',
      'btn-auto-random': '<u>A</u>uto-Random',
      'btn-info': '<u>H</u>elp',
      'fullscreen-title': 'Full Screen',
      'tool-pencil': 'Pencil',
      'tool-bucket': 'Fill Bucket',
      'tool-line': 'Line',
      'tool-circle': 'Circle',
      'tool-polygon': 'Define Polygon Area',
      'tool-launch': 'Launch Ball',
      'tool-wanderer': 'Wanderer Bug',
      'tool-coward': 'Coward Bug',
      'tool-chameleon': 'Chameleon Bug',
      'settings-title': 'Settings',
      'legend-bugs': 'Bugs (AI)',
      'legend-grid': 'Grid & Physics',
      'legend-instruments': 'Instruments',
      'label-speed': 'Speed',
      'label-chameleon-shift': 'Chameleon shift (s)',
      'label-life': 'Life',
      'btn-clear-bugs': 'Clear Bugs',
      'bugs-note': 'Bugs have personality: Wanderer, Coward or Chameleon.',
      'label-grid-size': 'Grid size',
      'label-ball-speed': 'Ball speed',
      'label-ball-radius': 'Ball radius',
      'label-bounce': 'Bounce',
      'label-friction': 'Friction',
      'label-auto-random-interval': 'Auto-Random Interval (s)',
      'btn-add-ball': 'Add Ball',
      'status-cells': 'Cells:',
      'status-balls': 'Balls:',
      'status-bugs': 'Bugs:',
      'info-title': 'Help',
      'info-p1': '<strong>Pixelsynth Paint</strong>',
      'info-p2': 'This project is a faithful and creative adaptation of the original Max for Live idea, with the benefit of being fully accessible from any browser.',
      'info-p3': 'Project repository: <a href="https://github.com/vlasvlasvlas/pixelsynth" target="_blank" style="color: blue;">vlasvlasvlas/pixelsynth</a>',
      'info-p4': 'Thanks to the original Ableton version: <a href="https://github.com/little-scale/littlescale-max-patches/blob/master/little-scale.breakoutesque.amxd" target="_blank" style="color: blue;">little-scale.breakoutesque.amxd</a>',
      'info-p5': 'Draw on the grid, launch balls and create pixel-art bugs to generate music.',
      'info-p6': '<strong>Tools:</strong> Use pencil, bucket, line or circle.',
      'info-p7': '<strong>Bugs:</strong><br/>- Wanderers: Walk randomly.<br/>- Cowards: Flee from balls.<br/>- Chameleon: Changes color every N seconds and paints its trail.',
      'run-pause': 'Pause',
      'run-run': 'Run',
      'lang-switch': 'Español',
    },
    es: {
      'start-welcome': 'Bienvenido a Pixelsynth Paint.',
      'start-button': 'Haz clic aquí para Iniciar',
      'btn-settings': '<u>C</u>onfiguración',
      'btn-clear': '<u>L</u>impiar',
      'btn-clear-polygon': 'Limpiar Polí<u>g</u>ono',
      'btn-random': '<u>R</u>andom',
      'btn-auto-random': '<u>A</u>uto-Random',
      'btn-info': '<u>A</u>yuda',
      'fullscreen-title': 'Pantalla Completa',
      'tool-pencil': 'Lápiz (Pencil)',
      'tool-bucket': 'Balde (Fill)',
      'tool-line': 'Línea (Line)',
      'tool-circle': 'Círculo (Circle)',
      'tool-polygon': 'Definir Área Poligonal (Polygon Limits)',
      'tool-launch': 'Lanzar Pelota (Ball)',
      'tool-wanderer': 'Bicho Errante (Wanderer)',
      'tool-coward': 'Bicho Cobarde (Coward)',
      'tool-chameleon': 'Bicho Camaleón (Chameleon)',
      'settings-title': 'Configuración',
      'legend-bugs': 'Bichos (IA)',
      'legend-grid': 'Grid & Físicas',
      'legend-instruments': 'Instrumentos',
      'label-speed': 'Velocidad',
      'label-chameleon-shift': 'Camaleón cambio (s)',
      'label-life': 'Vida',
      'btn-clear-bugs': 'Limpiar Bichos',
      'bugs-note': 'Los bichos tienen personalidad: Errante, Cobarde o Glotón.',
      'label-grid-size': 'Tamaño de cuadrícula',
      'label-ball-speed': 'Velocidad de pelota',
      'label-ball-radius': 'Radio de pelota',
      'label-bounce': 'Rebote',
      'label-friction': 'Fricción',
      'label-auto-random-interval': 'Auto-Random Intervalo (s)',
      'btn-add-ball': 'Añadir Pelota',
      'status-cells': 'Celdas:',
      'status-balls': 'Pelotas:',
      'status-bugs': 'Bichos:',
      'info-title': 'Ayuda',
      'info-p1': '<strong>Pixelsynth Paint</strong>',
      'info-p2': 'El proyecto es una adaptación fiel y creativa de la idea original en Max for Live, con el beneficio de ser completamente accesible desde cualquier navegador.',
      'info-p3': 'Repositorio del proyecto: <a href="https://github.com/vlasvlasvlas/pixelsynth" target="_blank" style="color: blue;">vlasvlasvlas/pixelsynth</a>',
      'info-p4': 'Agradecimientos a la versión original de Ableton: <a href="https://github.com/little-scale/littlescale-max-patches/blob/master/little-scale.breakoutesque.amxd" target="_blank" style="color: blue;">little-scale.breakoutesque.amxd</a>',
      'info-p5': 'Dibuja en la cuadrícula, lanza pelotas y crea bichos pixel-art para generar música.',
      'info-p6': '<strong>Herramientas:</strong> Usa el lápiz, balde, línea o círculo.',
      'info-p7': '<strong>Bichos:</strong><br/>- Errantes: Caminan al azar.<br/>- Cobardes: Huyen de las pelotas.<br/>- Camaleón: Cambia color cada N segundos y pinta su rastro.',
      'run-pause': 'Pausar',
      'run-run': 'Correr',
      'lang-switch': 'English',
    },
  };

  let currentLang = localStorage.getItem('pixelsynth-lang') || 'en';

  const el = {
    canvas: document.querySelector("#stage"),
    startScreen: document.querySelector("#startScreen"),
    startButton: document.querySelector("#startButton"),
    palette: document.querySelector("#palette"),
    audioButton: document.querySelector("#audioButton"),
    runButton: document.querySelector("#runButton"),
    infoButton: document.querySelector("#infoButton"),
    closeInfoButton: document.querySelector("#closeInfoButton"),
    fullscreenButton: document.querySelector("#fullscreenButton"),
    settingsButton: document.querySelector("#settingsButton"),
    closeSettingsButton: document.querySelector("#closeSettingsButton"),
    settingsDrawer: document.querySelector("#settingsDrawer"),
    infoPanel: document.querySelector("#infoPanel"),
    backdrop: document.querySelector("#backdrop"),
    autoRandomButton: document.querySelector("#autoRandomButton"),
    randomButton: document.querySelector("#randomButton"),
    clearButton: document.querySelector("#clearButton"),
    clearPolygonButton: document.querySelector("#clearPolygonButton"),
    addBallButton: document.querySelector("#addBallButton"),
    gridSize: document.querySelector("#gridSize"),
    gridSizeValue: document.querySelector("#gridSizeValue"),
    launchPower: document.querySelector("#launchPower"),
    launchPowerValue: document.querySelector("#launchPowerValue"),
    autoRandomInterval: document.querySelector("#autoRandomInterval"),
    autoRandomIntervalValue: document.querySelector("#autoRandomIntervalValue"),
    ballRadius: document.querySelector("#ballRadius"),
    ballRadiusValue: document.querySelector("#ballRadiusValue"),
    bugSpeed: document.querySelector("#bugSpeed"),
    bugSpeedValue: document.querySelector("#bugSpeedValue"),
    chameleonShift: document.querySelector("#chameleonShift"),
    chameleonShiftValue: document.querySelector("#chameleonShiftValue"),
    bugLife: document.querySelector("#bugLife"),
    clearBugsButton: document.querySelector("#clearBugsButton"),
    bounciness: document.querySelector("#bounciness"),
    dragAmount: document.querySelector("#dragAmount"),
    substeps: document.querySelector("#substeps"),
    rootNote: document.querySelector("#rootNote"),
    octave: document.querySelector("#octave"),
    scaleMode: document.querySelector("#scaleMode"),
    instrumentPreset: document.querySelector("#instrumentPreset"),
    volume: document.querySelector("#volume"),
    volumeValue: document.querySelector("#volumeValue"),
    reverbAmount: document.querySelector("#reverbAmount"),
    reverbAmountValue: document.querySelector("#reverbAmountValue"),
    reverbSize: document.querySelector("#reverbSize"),
    reverbSizeValue: document.querySelector("#reverbSizeValue"),
    delayAmount: document.querySelector("#delayAmount"),
    delayAmountValue: document.querySelector("#delayAmountValue"),
    delayTime: document.querySelector("#delayTime"),
    delayTimeValue: document.querySelector("#delayTimeValue"),
    delayFeedback: document.querySelector("#delayFeedback"),
    delayFeedbackValue: document.querySelector("#delayFeedbackValue"),
    cellCount: document.querySelector("#cellCount"),
    ballCount: document.querySelector("#ballCount"),
    bugCount: document.querySelector("#bugCount"),
    modeButtons: Array.from(document.querySelectorAll("[data-mode]")),
    langButton: document.querySelector("#langButton"),
  };

  const ctx = el.canvas.getContext("2d", { alpha: false });

  const state = {
    N: 16,
    cols: 16,
    rows: 16,
    grid: [],
    selectedColor: 0,
    mode: "pencil",
    running: true,
    autoRandom: false,
    autoRandomInterval: 3.0,
    autoRandomTimer: 0,
    randomSilenceTimer: 0,
    launchPower: 1.25,
    radius: 0.48,
    bounciness: 1,
    drag: 0,
    substeps: 4,
    bugSpeed: 1,
    chameleonShift: 2.5,
    bugLife: 10,
    root: 0,
    octave: 4,
    scale: "original",
    instrument: "softPiano",
    volume: 0.7,
    tone: 0.58,
    reverb: 0.32,
    reverbSize: 1,
    delay: 0.14,
    delayTime: 1,
    delayFeedback: 0.34,
    usePolygonBounds: false,
    polygonPoints: [],
    balls: [],
    bugs: [],
    pointer: {
      active: false,
      painting: false,
      launching: false,
      launchStart: null,
      launchCurrent: null,
      shapeStart: null,
      shapeCurrent: null,
      polygonDrawing: false,
      polygonTempPoint: null,
      lastCell: null,
      strokeValue: 0,
    },
    metrics: {
      cellsDirty: true,
      cellCount: 0,
    },
  };

  const audio = {
    context: null,
    input: null,
    master: null,
    dry: null,
    convolver: null,
    reverbGain: null,
    delayNode: null,
    delayGain: null,
    feedback: null,
    compressor: null,
    monoOutput: null,
    impulseSize: null,
    enabled: false,
  };

  let stageRect = { width: 960, height: 960, scale: 1 };
  let lastFrame = performance.now();
  let instrumentPresets = getDefaultInstrumentPresets();

  function initGrid() {
    state.grid = new Int8Array(state.cols * state.rows);
    state.grid.fill(-1);
    markCellsDirty();
  }

  function gridIndex(row, col) {
    return row * state.cols + col;
  }

  function getCell(row, col) {
    return state.grid[gridIndex(row, col)];
  }

  function setCell(row, col, value) {
    if (row < 0 || row >= state.rows || col < 0 || col >= state.cols) {
      return false;
    }

    const next = clampInt(value, -1, palette.length - 1);
    if (getCell(row, col) === next) {
      return false;
    }

    state.grid[gridIndex(row, col)] = next;
    markCellsDirty();
    return true;
  }

  function markCellsDirty() {
    state.metrics.cellsDirty = true;
  }

  function countCells() {
    if (!state.metrics.cellsDirty) {
      return state.metrics.cellCount;
    }

    let count = 0;
    for (const value of state.grid) {
      if (value >= 0) {
        count += 1;
      }
    }

    state.metrics.cellCount = count;
    state.metrics.cellsDirty = false;
    return count;
  }

  function createPalette() {
    el.palette.replaceChildren();

    palette.forEach((color, index) => {
      const button = document.createElement("button");
      const label = document.createElement("span");
      button.className = "swatch-button";
      button.type = "button";
      button.style.background = color;
      button.dataset.color = String(index);
      button.title = `Color ${index + 1}`;
      label.textContent = noteNameForColor(index);
      button.append(label);
      button.addEventListener("click", () => {
        state.selectedColor = index;
        updatePalette();
      });
      el.palette.append(button);
    });

    updatePalette();
  }

  function updatePalette() {
    const buttons = Array.from(el.palette.querySelectorAll(".swatch-button"));
    buttons.forEach((button, index) => {
      button.classList.toggle("active", index === state.selectedColor);
      button.title = `${noteNameForColor(index)} / color ${index + 1}`;
      const span = button.querySelector("span");
      if (span) {
        span.textContent = noteNameForColor(index);
      }
    });
  }

  function resizeCanvas() {
    const container = el.canvas.parentElement;
    const rect = container.getBoundingClientRect();
    
    const newRows = state.N;
    const cssCellSize = Math.max(10, Math.floor((rect.height - 4) / newRows));
    const newCols = Math.max(state.N, Math.floor((rect.width - 4) / cssCellSize));
    
    const cssWidth = newCols * cssCellSize;
    const cssHeight = newRows * cssCellSize;

    const ratio = window.devicePixelRatio || 1;
    const pixelWidth = Math.round(cssWidth * ratio);
    const pixelHeight = Math.round(cssHeight * ratio);

    if (el.canvas.width !== pixelWidth || el.canvas.height !== pixelHeight) {
      el.canvas.width = pixelWidth;
      el.canvas.height = pixelHeight;
      el.canvas.style.width = `${cssWidth}px`;
      el.canvas.style.height = `${cssHeight}px`;
    }

    stageRect = {
      width: pixelWidth,
      height: pixelHeight,
      cssWidth: cssWidth,
      cssHeight: cssHeight,
      cell: pixelHeight / newRows,
    };
    
    if (state.cols !== newCols || state.rows !== newRows) {
       resizeGridData(newCols, newRows);
       state.cols = newCols;
       state.rows = newRows;
    }
  }

  function resizeGridData(newCols, newRows) {
     const newGrid = new Int8Array(newCols * newRows);
     newGrid.fill(-1);
     
     if (state.grid && state.grid.length > 0) {
        const oldCols = state.cols || state.N;
        const oldRows = state.rows || state.N;
        for (let r = 0; r < Math.min(oldRows, newRows); r++) {
           for (let c = 0; c < Math.min(oldCols, newCols); c++) {
              newGrid[r * newCols + c] = state.grid[r * oldCols + c];
           }
        }
     }
     state.grid = newGrid;
     markCellsDirty();
  }

  function draw() {
    resizeCanvas();

    const cell = stageRect.cell;
    const width = stageRect.width;
    const height = stageRect.height;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    for (let row = 0; row < state.rows; row += 1) {
      for (let col = 0; col < state.cols; col += 1) {
        const value = getCell(row, col);
        if (value >= 0) {
          ctx.fillStyle = palette[value];
          ctx.fillRect(col * cell, row * cell, Math.ceil(cell), Math.ceil(cell));
        }
      }
    }

    ctx.strokeStyle = "#c4c4c4";
    ctx.lineWidth = Math.max(1, stageRect.height / 1200);
    ctx.beginPath();
    for (let i = 1; i < state.cols; i += 1) {
      const p = Math.round(i * cell) + 0.5;
      ctx.moveTo(p, 0);
      ctx.lineTo(p, height);
    }
    for (let i = 1; i < state.rows; i += 1) {
      const p = Math.round(i * cell) + 0.5;
      ctx.moveTo(0, p);
      ctx.lineTo(width, p);
    }
    ctx.stroke();

    ctx.strokeStyle = "#111111";
    ctx.lineWidth = Math.max(4, stageRect.height / 220);
    ctx.strokeRect(0, 0, width, height);

    drawPolygon(cell);
    drawLaunch(cell);
    drawShapePreview(cell);
    drawBugs(cell);
    drawBalls(cell);

    el.cellCount.textContent = String(countCells());
    el.ballCount.textContent = String(state.balls.length);
    el.bugCount.textContent = String(state.bugs.length);
  }

  function drawBalls(cell) {
    ctx.fillStyle = "#000000";
    for (const ball of state.balls) {
      ctx.beginPath();
      ctx.arc(ball.x * cell, ball.y * cell, ball.radius * cell, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawPolygon(cell) {
    if (state.polygonPoints.length === 0) return;

    ctx.save();
    
    if (state.usePolygonBounds) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
      ctx.beginPath();
      ctx.rect(0, 0, el.canvas.width, el.canvas.height);
      const pts = state.polygonPoints;
      ctx.moveTo(pts[0].x * cell, pts[0].y * cell);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i].x * cell, pts[i].y * cell);
      }
      ctx.closePath();
      ctx.fill("evenodd");
    }

    ctx.strokeStyle = state.pointer.polygonDrawing ? "#21a6df" : "#f2241f";
    ctx.lineWidth = Math.max(3, stageRect.height / 240);
    ctx.lineJoin = "round";
    
    ctx.beginPath();
    const pts = state.polygonPoints;
    ctx.moveTo(pts[0].x * cell, pts[0].y * cell);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(pts[i].x * cell, pts[i].y * cell);
    }
    
    if (state.pointer.polygonDrawing && state.pointer.polygonTempPoint) {
      ctx.lineTo(state.pointer.polygonTempPoint.x * cell, state.pointer.polygonTempPoint.y * cell);
    } else if (state.usePolygonBounds) {
      ctx.closePath();
    }
    
    ctx.stroke();
    
    ctx.fillStyle = "#ffffff";
    for (const pt of pts) {
      ctx.beginPath();
      ctx.arc(pt.x * cell, pt.y * cell, cell * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    ctx.restore();
  }

  function drawBugs(cell) {
    const sprites = {
      wanderer: [
        "01110",
        "11111",
        "10101",
        "11111",
        "01010",
      ],
      coward: [
        "00100",
        "01110",
        "11111",
        "10001",
        "10001",
      ],
      chameleon: [
        "10001",
        "11011",
        "01110",
        "01010",
        "01110",
      ]
    };

    for (const bug of state.bugs) {
      const sprite = sprites[bug.aiType] || sprites.wanderer;
      const size = cell * 0.84;
      const pixel = size / sprite.length;
      const phase = bug.moveDuration > 0 ? clamp(1 - bug.stepClock / bug.moveDuration, 0, 1) : 1;
      const eased = phase * phase * (3 - 2 * phase);
      const drawX = lerp(bug.fromCol, bug.col, eased) + 0.5;
      const drawY = lerp(bug.fromRow, bug.row, eased) + 0.5;
      bug.x = drawX;
      bug.y = drawY;

      const x = drawX * cell - size * 0.5;
      const y = drawY * cell - size * 0.5;
      const alpha = 0.42 + 0.58 * (bug.hp / Math.max(1, bug.maxHp));

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = palette[bug.color];
      for (let row = 0; row < sprite.length; row += 1) {
        for (let col = 0; col < sprite[row].length; col += 1) {
          if (sprite[row][col] === "1") {
            ctx.fillRect(x + col * pixel, y + row * pixel, Math.ceil(pixel), Math.ceil(pixel));
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.fillStyle = "#111111";
      ctx.fillRect(x + pixel, y + pixel * 2, Math.max(1, pixel * 0.75), Math.max(1, pixel * 0.75));
      ctx.fillRect(x + pixel * 3, y + pixel * 2, Math.max(1, pixel * 0.75), Math.max(1, pixel * 0.75));
      ctx.restore();
    }
  }

  function drawLaunch(cell) {
    if (!state.pointer.launching || !state.pointer.launchStart || !state.pointer.launchCurrent) {
      return;
    }

    const start = state.pointer.launchStart;
    const current = state.pointer.launchCurrent;

    ctx.save();
    ctx.strokeStyle = "#111111";
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.lineWidth = Math.max(2, stageRect.width / 360);
    ctx.setLineDash([cell * 0.7, cell * 0.38]);
    ctx.beginPath();
    ctx.moveTo(start.x * cell, start.y * cell);
    ctx.lineTo(current.x * cell, current.y * cell);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(start.x * cell, start.y * cell, state.radius * cell, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawShapePreview(cell) {
    if (!state.pointer.shapeStart || !state.pointer.shapeCurrent) return;
    
    ctx.save();
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = Math.max(2, stageRect.width / 360);
    ctx.setLineDash([cell * 0.7, cell * 0.38]);
    
    const s = state.pointer.shapeStart;
    const e = state.pointer.shapeCurrent;
    
    if (state.mode === "line") {
      ctx.beginPath();
      ctx.moveTo((s.col + 0.5) * cell, (s.row + 0.5) * cell);
      ctx.lineTo((e.col + 0.5) * cell, (e.row + 0.5) * cell);
      ctx.stroke();
    } else if (state.mode === "circle") {
      ctx.beginPath();
      const radius = Math.hypot(e.col - s.col, e.row - s.row) * cell;
      ctx.arc((s.col + 0.5) * cell, (s.row + 0.5) * cell, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    ctx.restore();
  }

  function animationLoop(now) {
    const dt = Math.min(0.035, (now - lastFrame) / 1000 || 0);
    lastFrame = now;
    state.randomSilenceTimer = Math.max(0, state.randomSilenceTimer - dt);

    if (state.running) {
      if (state.autoRandom) {
        state.autoRandomTimer += dt;
        if (state.autoRandomTimer >= state.autoRandomInterval) {
          state.autoRandomTimer = 0;
          generateRandomDrawing({ resetBalls: false, resetBugs: false, spawnIfEmpty: false });
        }
      }
      updatePhysics(dt);
    }

    draw();
    requestAnimationFrame(animationLoop);
  }

  function updatePhysics(dt) {
    updateBugs(dt);

    if (state.balls.length === 0) {
      return;
    }

    const steps = Math.max(1, state.substeps);
    const stepDt = dt / steps;

    for (let step = 0; step < steps; step += 1) {
      for (const ball of state.balls) {
        ball.x += ball.vx * stepDt;
        ball.y += ball.vy * stepDt;
        collideWalls(ball);
        collideCells(ball);
        collideBugs(ball);
      }
    }

    if (state.drag > 0) {
      const dragFactor = Math.exp(-state.drag * dt);
      for (const ball of state.balls) {
        ball.vx *= dragFactor;
        ball.vy *= dragFactor;
      }
    }

    state.balls = state.balls.filter((ball) => speed(ball.vx, ball.vy) > 0.015);
  }

  function updateBugs(dt) {
    if (state.bugs.length === 0) {
      return;
    }

    const secondsPerStep = clamp(0.42 / Math.max(0.1, state.bugSpeed), 0.1, 1.2);

    for (const bug of state.bugs) {
      bug.hitCooldown = Math.max(0, bug.hitCooldown - dt);
      if (bug.aiType === "chameleon") {
        bug.colorShiftClock -= dt;
        if (bug.colorShiftClock <= 0) {
          let nextColor = bug.color;
          for (let i = 0; i < 6 && nextColor === bug.color; i += 1) {
            nextColor = randInt(0, palette.length - 1);
          }
          bug.color = nextColor;
          bug.colorShiftClock += Math.max(0.05, bug.colorShiftInterval);
        }
      }
      bug.stepClock -= dt;

      while (bug.stepClock <= 0) {
        stepBug(bug);
        bug.stepClock += secondsPerStep;
      }
    }
  }

  function stepBug(bug) {
    bug.fromCol = bug.col;
    bug.fromRow = bug.row;
    bug.moveDuration = clamp(0.42 / Math.max(0.1, state.bugSpeed), 0.1, 1.2);

    if (bug.aiType === "coward") {
      let nearestDist = Infinity;
      let nx = 0, ny = 0;
      for (const ball of state.balls) {
         const dx = bug.col - ball.x;
         const dy = bug.row - ball.y;
         const d = dx*dx + dy*dy;
         if (d < 64 && d < nearestDist) {
            nearestDist = d;
            nx = dx; ny = dy;
         }
      }
      if (nearestDist < 64) {
         bug.dx = nx > 0 ? 1 : (nx < 0 ? -1 : 0);
         bug.dy = ny > 0 ? 1 : (ny < 0 ? -1 : 0);
         if (bug.dx === 0 && bug.dy === 0) setBugDirection(bug);
      } else {
         if (Math.random() < 0.38) setBugDirection(bug);
      }
    } else {
      if (Math.random() < 0.38) setBugDirection(bug);
    }

    if (bug.aiType === "wanderer" && Math.random() < 0.08) {
      setCell(bug.row, bug.col, bug.color);
      return;
    }

    let nextCol = bug.col + bug.dx;
    let nextRow = bug.row + bug.dy;

    let isOutside = nextCol < 0 || nextCol >= state.cols || nextRow < 0 || nextRow >= state.rows;
    if (state.usePolygonBounds && state.polygonPoints.length > 2) {
      isOutside = isOutside || !isPointInPolygon(nextCol + 0.5, nextRow + 0.5, state.polygonPoints);
    }

    if (isOutside) {
      setBugDirection(bug);
      nextCol = bug.col;
      nextRow = bug.row;
    }

    bug.col = nextCol;
    bug.row = nextRow;
    bug.x = nextCol + 0.5;
    bug.y = nextRow + 0.5;
    
    setCell(nextRow, nextCol, bug.color);
    triggerColor(bug.color, nextCol, nextRow, 0.16);
  }

  function isPointInPolygon(x, y, pts) {
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const xi = pts[i].x, yi = pts[i].y;
      const xj = pts[j].x, yj = pts[j].y;
      const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }

  function circleSegmentCollision(cx, cy, cr, x1, y1, x2, y2) {
    const l2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    if (l2 === 0) return { hit: false };
    
    let t = ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    
    const closestX = x1 + t * (x2 - x1);
    const closestY = y1 + t * (y2 - y1);
    
    const dx = cx - closestX;
    const dy = cy - closestY;
    const d2 = dx * dx + dy * dy;
    
    if (d2 > cr * cr || d2 === 0) return { hit: false };
    
    const dist = Math.sqrt(d2);
    return { hit: true, nx: dx / dist, ny: dy / dist, penetration: cr - dist };
  }

  function collidePolygon(ball) {
    const pts = state.polygonPoints;
    let best = null;
    for (let i = 0; i < pts.length; i++) {
      const p1 = pts[i];
      const p2 = pts[(i + 1) % pts.length];
      const hit = circleSegmentCollision(ball.x, ball.y, ball.radius, p1.x, p1.y, p2.x, p2.y);
      if (hit.hit && (!best || hit.penetration > best.penetration)) {
        best = hit;
      }
    }
    if (best) {
      ball.x += best.nx * best.penetration;
      ball.y += best.ny * best.penetration;
      reflectVelocity(ball, best.nx, best.ny);
    }
  }

  function collideWalls(ball) {
    if (state.usePolygonBounds && state.polygonPoints.length > 2) {
      collidePolygon(ball);
      return;
    }
    if (ball.x - ball.radius < 0) {
      ball.x = ball.radius;
      ball.vx = Math.abs(ball.vx) * state.bounciness;
    } else if (ball.x + ball.radius > state.cols) {
      ball.x = state.cols - ball.radius;
      ball.vx = -Math.abs(ball.vx) * state.bounciness;
    }

    if (ball.y - ball.radius < 0) {
      ball.y = ball.radius;
      ball.vy = Math.abs(ball.vy) * state.bounciness;
    } else if (ball.y + ball.radius > state.rows) {
      ball.y = state.rows - ball.radius;
      ball.vy = -Math.abs(ball.vy) * state.bounciness;
    }
  }

  function collideCells(ball) {
    const minCol = clampInt(Math.floor(ball.x - ball.radius), 0, state.cols - 1);
    const maxCol = clampInt(Math.floor(ball.x + ball.radius), 0, state.cols - 1);
    const minRow = clampInt(Math.floor(ball.y - ball.radius), 0, state.rows - 1);
    const maxRow = clampInt(Math.floor(ball.y + ball.radius), 0, state.rows - 1);

    let best = null;

    for (let row = minRow; row <= maxRow; row += 1) {
      for (let col = minCol; col <= maxCol; col += 1) {
        const color = getCell(row, col);
        if (color < 0) {
          continue;
        }

        const hit = circleAABB(ball.x, ball.y, ball.radius, col, row, col + 1, row + 1);
        if (hit.hit && (!best || hit.penetration > best.penetration)) {
          best = { row, col, color, ...hit };
        }
      }
    }

    if (!best) {
      return;
    }

    setCell(best.row, best.col, -1);
    ball.x += best.nx * best.penetration;
    ball.y += best.ny * best.penetration;
    reflectVelocity(ball, best.nx, best.ny);
    if (state.randomSilenceTimer <= 0) {
      triggerColor(best.color, best.col, best.row);
    }
  }

  function circleAABB(cx, cy, cr, x1, y1, x2, y2) {
    const closestX = clamp(cx, x1, x2);
    const closestY = clamp(cy, y1, y2);
    const dx = cx - closestX;
    const dy = cy - closestY;
    const d2 = dx * dx + dy * dy;
    const r2 = cr * cr;

    if (d2 > r2) {
      return { hit: false };
    }

    const dist = Math.sqrt(Math.max(d2, 0.0000001));

    if (dist < 0.0001) {
      const left = Math.abs(cx - x1);
      const right = Math.abs(x2 - cx);
      const top = Math.abs(cy - y1);
      const bottom = Math.abs(y2 - cy);
      const edge = Math.min(left, right, top, bottom);

      if (edge === left) return { hit: true, nx: -1, ny: 0, penetration: cr };
      if (edge === right) return { hit: true, nx: 1, ny: 0, penetration: cr };
      if (edge === top) return { hit: true, nx: 0, ny: -1, penetration: cr };
      return { hit: true, nx: 0, ny: 1, penetration: cr };
    }

    return {
      hit: true,
      nx: dx / dist,
      ny: dy / dist,
      penetration: cr - dist,
    };
  }

  function reflectVelocity(ball, nx, ny) {
    const dot = ball.vx * nx + ball.vy * ny;
    ball.vx = (ball.vx - 2 * dot * nx) * state.bounciness;
    ball.vy = (ball.vy - 2 * dot * ny) * state.bounciness;
  }

  function pointerToGrid(event) {
    const rect = el.canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * state.cols;
    const y = ((event.clientY - rect.top) / rect.height) * state.rows;

    return {
      x,
      y,
      col: Math.floor(x),
      row: Math.floor(y),
      inside: x >= 0 && x < state.cols && y >= 0 && y < state.rows,
    };
  }

  function handlePointerDown(event) {
    const point = pointerToGrid(event);
    if (!point.inside) {
      return;
    }

    if (state.usePolygonBounds && state.polygonPoints.length > 2 && state.mode !== "polygon") {
      if (!isPointInPolygon(point.x, point.y, state.polygonPoints)) {
        return;
      }
    }

    ensureAudio();

    if (state.mode.startsWith("bug") && !event.shiftKey) {
      const type = state.mode.split("-")[1] || ["wanderer", "coward", "chameleon"][randInt(0, 2)];
      spawnBug(point.col, point.row, state.selectedColor, type);
      return;
    }
    
    if (state.mode === "bucket" && !event.shiftKey) {
      floodFill(point.row, point.col, getCell(point.row, point.col), state.selectedColor);
      return;
    }

    if (state.mode === "polygon") {
      const pt = { col: point.col, row: point.row, x: point.x, y: point.y };
      if (!state.pointer.polygonDrawing) {
        state.polygonPoints = [pt];
        state.pointer.polygonDrawing = true;
        state.usePolygonBounds = false;
        state.pointer.polygonTempPoint = pt;
      } else {
        const first = state.polygonPoints[0];
        const dist = Math.hypot(first.x - pt.x, first.y - pt.y);
        if (dist < 1.5 && state.polygonPoints.length > 2) {
          state.pointer.polygonDrawing = false;
          state.pointer.polygonTempPoint = null;
          state.usePolygonBounds = true;
          state.balls = state.balls.filter(b => isPointInPolygon(b.x, b.y, state.polygonPoints));
          state.bugs = state.bugs.filter(b => isPointInPolygon(b.x, b.y, state.polygonPoints));
        } else {
          state.polygonPoints.push(pt);
        }
      }
      return;
    }

    el.canvas.setPointerCapture(event.pointerId);
    state.pointer.active = true;
    state.pointer.lastCell = null;

    const launchMode = state.mode === "launch" || event.shiftKey;
    if (launchMode) {
      state.pointer.launching = true;
      state.pointer.painting = false;
      state.pointer.launchStart = {
        x: clamp(point.x, state.radius, state.cols - state.radius),
        y: clamp(point.y, state.radius, state.rows - state.radius),
      };
      state.pointer.launchCurrent = { ...state.pointer.launchStart };
      return;
    }

    if (state.mode === "line" || state.mode === "circle") {
      state.pointer.launching = false;
      state.pointer.painting = false;
      state.pointer.shapeStart = { col: point.col, row: point.row };
      state.pointer.shapeCurrent = { col: point.col, row: point.row };
      return;
    }

    state.pointer.launching = false;
    state.pointer.painting = true;
    state.pointer.strokeValue = getCell(point.row, point.col) === state.selectedColor ? -1 : state.selectedColor;
    paintAt(point);
  }

  function handlePointerMove(event) {
    if (!state.pointer.active) {
      if (state.mode === "polygon" && state.pointer.polygonDrawing) {
        const point = pointerToGrid(event);
        state.pointer.polygonTempPoint = { x: point.x, y: point.y };
      }
      return;
    }

    const point = pointerToGrid(event);

    if (state.pointer.launching) {
      state.pointer.launchCurrent = {
        x: clamp(point.x, 0, state.cols),
        y: clamp(point.y, 0, state.rows),
      };
      return;
    }

    if (state.mode === "line" || state.mode === "circle") {
      state.pointer.shapeCurrent = { col: clampInt(point.col, 0, state.cols - 1), row: clampInt(point.row, 0, state.cols - 1) };
      return;
    }

    if (state.pointer.painting && point.inside) {
      paintAt(point);
    }
  }

  function handlePointerUp(event) {
    if (!state.pointer.active) {
      return;
    }

    if (state.pointer.launching) {
      finishLaunch();
    } else if (state.mode === "line" && state.pointer.shapeStart) {
      finishLine();
    } else if (state.mode === "circle" && state.pointer.shapeStart) {
      finishCircle();
    }

    state.pointer.active = false;
    state.pointer.painting = false;
    state.pointer.launching = false;
    state.pointer.launchStart = null;
    state.pointer.launchCurrent = null;
    state.pointer.shapeStart = null;
    state.pointer.shapeCurrent = null;
    state.pointer.lastCell = null;
    state.pointer.strokeValue = 0;

    if (el.canvas.hasPointerCapture(event.pointerId)) {
      el.canvas.releasePointerCapture(event.pointerId);
    }
  }

  function floodFill(startRow, startCol, targetColor, replacementColor) {
    if (targetColor === replacementColor) return;
    if (getCell(startRow, startCol) !== targetColor) return;
    
    const queue = [[startRow, startCol]];
    
    while(queue.length > 0) {
      const [r, c] = queue.shift();
      if (getCell(r, c) !== targetColor) continue;
      
      setCell(r, c, replacementColor);
      
      if (r > 0) queue.push([r - 1, c]);
      if (r < state.rows - 1) queue.push([r + 1, c]);
      if (c > 0) queue.push([r, c - 1]);
      if (c < state.cols - 1) queue.push([r, c + 1]);
    }
    triggerColor(replacementColor, startCol, startRow, 0.4);
  }

  function finishLine() {
    const s = state.pointer.shapeStart;
    const e = state.pointer.shapeCurrent;
    if (!s || !e) return;
    
    const steps = Math.max(Math.abs(e.col - s.col), Math.abs(e.row - s.row));
    for (let i = 0; i <= steps; i += 1) {
      const t = steps === 0 ? 0 : i / steps;
      const col = Math.round(lerp(s.col, e.col, t));
      const row = Math.round(lerp(s.row, e.row, t));
      setCell(row, col, state.selectedColor);
    }
    triggerColor(state.selectedColor, e.col, e.row, 0.4);
  }

  function finishCircle() {
    const s = state.pointer.shapeStart;
    const e = state.pointer.shapeCurrent;
    if (!s || !e) return;
    
    const radius = Math.round(Math.hypot(e.col - s.col, e.row - s.row));
    const samples = Math.max(8, radius * Math.PI * 2 * 1.5);
    
    for (let i = 0; i < samples; i++) {
      const angle = (i / samples) * Math.PI * 2;
      const col = Math.round(s.col + Math.cos(angle) * radius);
      const row = Math.round(s.row + Math.sin(angle) * radius);
      if (col >= 0 && col < state.cols && row >= 0 && row < state.rows) {
        setCell(row, col, state.selectedColor);
      }
    }
    triggerColor(state.selectedColor, e.col, e.row, 0.4);
  }

  function paintAt(point) {
    const cellKey = `${point.row}:${point.col}`;
    if (state.pointer.lastCell === cellKey) {
      return;
    }

    state.pointer.lastCell = cellKey;
    const changed = setCell(point.row, point.col, state.pointer.strokeValue);
    if (changed && state.pointer.strokeValue >= 0) {
      triggerColor(state.pointer.strokeValue, point.col, point.row, 0.28);
    }
  }

  function finishLaunch() {
    const start = state.pointer.launchStart;
    const current = state.pointer.launchCurrent;
    if (!start || !current) {
      return;
    }

    const dx = start.x - current.x;
    const dy = start.y - current.y;
    const launchSpeed = Math.hypot(dx, dy);
    if (launchSpeed < 0.15) {
      return;
    }

    spawnBall(start.x, start.y, dx * state.launchPower, dy * state.launchPower);
  }

  function spawnBall(x, y, vx, vy) {
    const ball = {
      x: clamp(Number(x), state.radius, state.cols - state.radius),
      y: clamp(Number(y), state.radius, state.rows - state.radius),
      vx: Number(vx),
      vy: Number(vy),
      radius: state.radius,
    };

    state.balls.push(ball);
  }

  function addDefaultBall() {
    ensureAudio();
    const angle = -Math.PI / 4 + (Math.random() - 0.5) * 0.8;
    const magnitude = state.rows * 0.18 * state.launchPower;
    
    let bx = state.cols * 0.5;
    let by = state.rows * 0.42;

    if (state.usePolygonBounds && state.polygonPoints.length > 2) {
      if (!isPointInPolygon(bx, by, state.polygonPoints)) {
        let found = false;
        for (let r = 0; r < state.rows; r++) {
          for (let c = 0; c < state.cols; c++) {
            if (isPointInPolygon(c + 0.5, r + 0.5, state.polygonPoints)) {
              bx = c + 0.5; by = r + 0.5; found = true; break;
            }
          }
          if (found) break;
        }
      }
    }

    spawnBall(bx, by, Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
  }

  function spawnBug(col, row, color = state.selectedColor, type = "wanderer") {
    col = clampInt(col, 0, state.cols - 1);
    row = clampInt(row, 0, state.rows - 1);

    const bug = {
      col,
      row,
      fromCol: col,
      fromRow: row,
      x: col + 0.5,
      y: row + 0.5,
      dx: 1,
      dy: 0,
      color: clampInt(color, 0, palette.length - 1),
      hp: state.bugLife,
      maxHp: state.bugLife,
      radius: 0.46,
      stepClock: 0,
      moveDuration: 0.42,
      hitCooldown: 0,
      dead: false,
      aiType: type,
      colorShiftInterval: clamp(Number(state.chameleonShift), 0.3, 8),
      colorShiftClock: clamp(Number(state.chameleonShift), 0.3, 8),
    };

    setBugDirection(bug);
    state.bugs.push(bug);
    setCell(bug.row, bug.col, bug.color);
    triggerColor(bug.color, bug.col, bug.row, 0.28);
  }

  function setBugDirection(bug) {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ];
    const currentX = bug.col;
    const currentY = bug.row;
    const choices = directions.filter(([dx, dy]) => {
      const nextX = currentX + dx;
      const nextY = currentY + dy;
      return nextX >= 0 && nextX < state.cols && nextY >= 0 && nextY < state.rows;
    });
    const options = choices.length ? choices : directions;
    const [dx, dy] = options[randInt(0, options.length - 1)];

    bug.dx = dx;
    bug.dy = dy;
  }

  function collideBugs(ball) {
    if (state.bugs.length === 0) {
      return;
    }

    for (const bug of state.bugs) {
      if (bug.dead) {
        continue;
      }

      const dx = ball.x - bug.x;
      const dy = ball.y - bug.y;
      const minDistance = ball.radius + bug.radius;
      const d2 = dx * dx + dy * dy;

      if (d2 > minDistance * minDistance) {
        continue;
      }

      const dist = Math.sqrt(Math.max(d2, 0.000001));
      const nx = dist > 0.001 ? dx / dist : 1;
      const ny = dist > 0.001 ? dy / dist : 0;

      ball.x = bug.x + nx * minDistance;
      ball.y = bug.y + ny * minDistance;
      reflectVelocity(ball, nx, ny);
      hitBug(bug, nx, ny);
    }

    state.bugs = state.bugs.filter((bug) => !bug.dead);
  }

  function hitBug(bug, nx, ny) {
    if (bug.hitCooldown > 0) {
      return;
    }

    bug.hp -= 1;
    bug.hitCooldown = 0.22;
    bug.dx = -Math.sign(nx) || bug.dx;
    bug.dy = -Math.sign(ny) || bug.dy;

    const col = clampInt(bug.col, 0, state.cols - 1);
    const row = clampInt(bug.row, 0, state.rows - 1);
    setCell(row, col, bug.color);
    triggerColor(bug.color, col, row, 0.95);

    if (bug.hp <= 0) {
      burstBug(bug);
      bug.dead = true;
    }
  }

  function burstBug(bug) {
    const centerCol = clampInt(bug.col, 0, state.cols - 1);
    const centerRow = clampInt(bug.row, 0, state.rows - 1);
    const offsets = [
      [0, 0],
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dc, dr] of offsets) {
      setCell(centerRow + dr, centerCol + dc, bug.color);
    }

    triggerColor(bug.color, centerCol, centerRow, 1.2);
  }

  function generateRandomDrawing(options = {}) {
    const { resetBalls = false, resetBugs = false, spawnIfEmpty = false, silenceSeconds = 0.18 } = options;
    initGrid();

    const N = state.N; // scale base
    const cols = state.cols;
    const rows = state.rows;
    const marginX = Math.max(1, Math.floor(cols * 0.08));
    const marginY = Math.max(1, Math.floor(rows * 0.08));
    const usableColMin = marginX;
    const usableColMax = Math.max(marginX, cols - marginX - 1);
    const usableRowMin = marginY;
    const usableRowMax = Math.max(marginY, rows - marginY - 1);

    const plot = (col, row, color) => {
      col = clampInt(Math.round(col), 0, cols - 1);
      row = clampInt(Math.round(row), 0, rows - 1);
      if (state.usePolygonBounds && state.polygonPoints.length > 2) {
        if (!isPointInPolygon(col + 0.5, row + 0.5, state.polygonPoints)) return;
      }
      setCell(row, col, color);
    };

    const line = (x1, y1, x2, y2, color) => {
      const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
      for (let i = 0; i <= steps; i += 1) {
        const t = steps === 0 ? 0 : i / steps;
        plot(lerp(x1, x2, t), lerp(y1, y2, t), color);
      }
    };

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ];

    const strokeCount = randInt(5, 9);
    for (let stroke = 0; stroke < strokeCount; stroke += 1) {
      let col = randInt(usableColMin, usableColMax);
      let row = randInt(usableRowMin, usableRowMax);
      let [dx, dy] = directions[randInt(0, directions.length - 1)];
      const color = (stroke + randInt(0, palette.length - 1)) % palette.length;
      const steps = randInt(Math.max(3, Math.floor(N * 0.32)), Math.max(5, Math.floor(N * 0.82)));

      for (let i = 0; i < steps; i += 1) {
        plot(col, row, color);

        if (Math.random() < 0.22) {
          [dx, dy] = directions[randInt(0, directions.length - 1)];
        }

        col = clamp(col + dx, usableColMin, usableColMax);
        row = clamp(row + dy, usableRowMin, usableRowMax);
      }
    }

    const segmentCount = randInt(3, 6);
    for (let i = 0; i < segmentCount; i += 1) {
      const color = randInt(0, palette.length - 1);
      const x1 = randInt(usableColMin, usableColMax);
      const y1 = randInt(usableRowMin, usableRowMax);
      const angle = (Math.PI * 2 * randInt(0, 7)) / 8;
      const length = randInt(Math.max(2, Math.floor(N * 0.18)), Math.max(3, Math.floor(N * 0.55)));
      line(x1, y1, x1 + Math.cos(angle) * length, y1 + Math.sin(angle) * length, color);
    }

    const arcCount = randInt(1, 3);
    for (let i = 0; i < arcCount; i += 1) {
      const color = randInt(0, palette.length - 1);
      const cx = randInt(Math.floor(cols * 0.28), Math.ceil(cols * 0.72));
      const cy = randInt(Math.floor(rows * 0.28), Math.ceil(rows * 0.72));
      const radius = randInt(Math.max(2, Math.floor(N * 0.16)), Math.max(3, Math.floor(N * 0.36)));
      const start = Math.random() * Math.PI * 2;
      const length = Math.PI * (0.5 + Math.random() * 1.35);
      const samples = Math.max(6, Math.floor(radius * length * 1.2));

      for (let step = 0; step <= samples; step += 1) {
        const a = start + (length * step) / samples;
        plot(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius, color);
      }
    }

    if (countCells() < Math.max(12, N * 2)) {
      for (let i = 0; i < N; i += 1) {
        plot(randInt(usableColMin, usableColMax), randInt(usableRowMin, usableRowMax), randInt(0, palette.length - 1));
      }
    }

    if (resetBalls) {
      state.balls = [];
    }

    if (resetBugs) {
      state.bugs = [];
    }

    if (spawnIfEmpty && state.balls.length === 0) {
      let startX = randInt(usableColMin, usableColMax);
      let startY = randInt(usableRowMin, Math.max(usableRowMin, Math.floor(rows * 0.35)));
      
      if (state.usePolygonBounds && state.polygonPoints.length > 2) {
        for (let tries = 0; tries < 100; tries++) {
          if (isPointInPolygon(startX, startY, state.polygonPoints)) break;
          startX = randInt(usableColMin, usableColMax);
          startY = randInt(usableRowMin, usableRowMax);
        }
      }

      const angle = -Math.PI * (0.18 + Math.random() * 0.64);
      const magnitude = N * (0.12 + Math.random() * 0.1) * state.launchPower;
      spawnBall(startX, startY, Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
    }

    state.randomSilenceTimer = Math.max(state.randomSilenceTimer, Math.max(0, silenceSeconds));
    markCellsDirty();
  }

  function ensureAudio() {
    if (audio.enabled && audio.context && audio.context.state !== "closed") {
      if (audio.context.state === "suspended") {
        audio.context.resume();
      }
      return;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      if (el.audioButton) {
        el.audioButton.textContent = "No Audio";
      }
      return;
    }

    audio.context = audio.context || new AudioContext();
    audio.input = audio.context.createGain();
    audio.master = audio.context.createGain();
    audio.dry = audio.context.createGain();
    audio.convolver = audio.context.createConvolver();
    audio.reverbGain = audio.context.createGain();
    audio.delayNode = audio.context.createDelay(5);
    audio.delayGain = audio.context.createGain();
    audio.feedback = audio.context.createGain();
    audio.compressor = audio.context.createDynamicsCompressor();
    audio.monoOutput = audio.context.createGain();
    audio.monoOutput.channelCount = 1;
    audio.monoOutput.channelCountMode = "explicit";
    audio.monoOutput.channelInterpretation = "speakers";

    audio.input.connect(audio.dry);
    audio.input.connect(audio.convolver);
    audio.input.connect(audio.delayNode);
    audio.dry.connect(audio.master);
    audio.convolver.connect(audio.reverbGain);
    audio.reverbGain.connect(audio.master);
    audio.delayNode.connect(audio.feedback);
    audio.feedback.connect(audio.delayNode);
    audio.delayNode.connect(audio.delayGain);
    audio.delayGain.connect(audio.master);
    audio.master.connect(audio.compressor);
    audio.compressor.connect(audio.monoOutput);
    audio.monoOutput.connect(audio.context.destination);
    audio.compressor.threshold.setValueAtTime(-20, audio.context.currentTime);
    audio.compressor.knee.setValueAtTime(12, audio.context.currentTime);
    audio.compressor.ratio.setValueAtTime(8, audio.context.currentTime);
    audio.compressor.attack.setValueAtTime(0.003, audio.context.currentTime);
    audio.compressor.release.setValueAtTime(0.14, audio.context.currentTime);

    audio.enabled = true;
    audio.context.resume();
    updateAudio();
    if (el.audioButton) {
      el.audioButton.textContent = "Audio On";
    }
  }

  function updateAudio() {
    if (!audio.enabled || !audio.context) {
      return;
    }

    const now = audio.context.currentTime;
    const wetLoad = state.reverb * 0.45 + state.delay * 0.28;
    const wetGuard = 1 / (1 + wetLoad * 0.55);
    smoothAudioParam(audio.master.gain, state.volume * 0.72, now, 0.02);
    smoothAudioParam(audio.dry.gain, (0.92 - state.reverb * 0.24) * wetGuard, now, 0.02);
    smoothAudioParam(audio.reverbGain.gain, state.reverb * 0.48 * wetGuard, now, 0.025);
    smoothAudioParam(audio.delayNode.delayTime, state.delayTime, now, 0.025);
    smoothAudioParam(audio.delayGain.gain, state.delay * 0.26 * wetGuard, now, 0.025);
    smoothAudioParam(audio.feedback.gain, Math.min(0.72, state.delayFeedback), now, 0.025);

    const impulseSize = state.reverbSize.toFixed(2);
    if (audio.impulseSize !== impulseSize) {
      audio.convolver.buffer = makeImpulse(audio.context, state.reverbSize, 1.6 + state.reverbSize * 1.1);
      audio.impulseSize = impulseSize;
    }
  }

  function triggerColor(colorIndex, col = 0, row = 0, gainScale = 1) {
    if (!audio.enabled || !audio.context || !audio.input) {
      return;
    }

    const pitchNumber = pitchNumberForColor(colorIndex);
    const frequency = 440 * 2 ** ((pitchNumber - 69) / 12);
    playInstrumentTone(frequency, row, gainScale);
  }

  function playInstrumentTone(frequency, row, gainScale) {
    const ac = audio.context;
    const now = ac.currentTime;
    const preset = getInstrumentPreset();
    const duration = preset.release + (1 - clamp(row / Math.max(1, state.rows), 0, 1)) * preset.rowRelease;
    const voice = ac.createGain();
    const filter = ac.createBiquadFilter();
    const eventGain = clamp(gainScale, 0, 1);
    const outputTrim = preset.outputTrim ?? 1;
    const gain = Math.min(0.22, preset.gain * eventGain * outputTrim);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(Math.min(12000, frequency * (4 + state.tone * preset.toneOpen)), now);
    filter.frequency.exponentialRampToValueAtTime(
      Math.max(650, frequency * (1.6 + state.tone * preset.toneClose)),
      now + duration,
    );
    filter.Q.setValueAtTime(preset.q, now);

    voice.gain.setValueAtTime(0.0001, now);
    voice.gain.exponentialRampToValueAtTime(gain, now + preset.attack);
    voice.gain.exponentialRampToValueAtTime(gain * preset.decayLevel, now + preset.decay);
    voice.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    voice.connect(filter);
    filter.connect(audio.input);

    for (const partial of preset.partials) {
      const osc = ac.createOscillator();
      const partialGain = ac.createGain();
      osc.type = partial.type;
      osc.frequency.setValueAtTime(frequency * partial.ratio, now);
      osc.detune.setValueAtTime(partial.detune, now);
      partialGain.gain.setValueAtTime(partial.gain, now);
      osc.connect(partialGain);
      partialGain.connect(voice);
      osc.start(now);
      osc.stop(now + duration + 0.05);
    }

    const noise = makeNoise(ac, preset.noiseTime);
    const noiseGain = ac.createGain();
    noiseGain.gain.setValueAtTime(preset.noiseGain * eventGain * outputTrim, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + preset.noiseTime);
    noise.connect(noiseGain);
    noiseGain.connect(voice);
    noise.start(now);
    noise.stop(now + preset.noiseTime + 0.01);

    window.setTimeout(() => {
      voice.disconnect();
      filter.disconnect();
    }, (duration + 0.3) * 1000);
  }

  function makeNoise(ac, seconds) {
    const bufferSize = Math.max(1, Math.floor(ac.sampleRate * seconds));
    const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }
    const source = ac.createBufferSource();
    source.buffer = buffer;
    return source;
  }

  function makeImpulse(ac, seconds, decay) {
    const length = Math.floor(ac.sampleRate * seconds);
    const impulse = ac.createBuffer(2, length, ac.sampleRate);
    for (let channel = 0; channel < 2; channel += 1) {
      const data = impulse.getChannelData(channel);
      for (let i = 0; i < length; i += 1) {
        const t = i / length;
        data[i] = (Math.random() * 2 - 1) * (1 - t) ** decay;
      }
    }
    return impulse;
  }

  function getInstrumentPreset() {
    return instrumentPresets[state.instrument] || instrumentPresets.softPiano || Object.values(instrumentPresets)[0];
  }

  function getDefaultInstrumentPresets() {
    const defaults = {
      softPiano: {
        label: "Soft piano",
        attack: 0.006,
        decay: 0.07,
        decayLevel: 0.5,
        release: 1.75,
        rowRelease: 0.55,
        gain: 0.16,
        q: 0.58,
        toneOpen: 9.5,
        toneClose: 2.1,
        noiseTime: 0.035,
        noiseGain: 0.026,
        partials: [
          { ratio: 1, gain: 1, type: "triangle", detune: 0 },
          { ratio: 2.01, gain: 0.36, type: "sine", detune: -3 },
          { ratio: 3.02, gain: 0.16, type: "sine", detune: 5 },
          { ratio: 4.04, gain: 0.07, type: "sine", detune: -6 },
        ],
      },
      brightPiano: {
        label: "Bright piano",
        attack: 0.004,
        decay: 0.045,
        decayLevel: 0.42,
        release: 1.35,
        rowRelease: 0.42,
        gain: 0.14,
        q: 0.72,
        toneOpen: 13,
        toneClose: 3.5,
        noiseTime: 0.026,
        noiseGain: 0.04,
        partials: [
          { ratio: 1, gain: 1, type: "triangle", detune: 0 },
          { ratio: 2.005, gain: 0.48, type: "sine", detune: 4 },
          { ratio: 3.01, gain: 0.28, type: "sine", detune: -4 },
          { ratio: 5.02, gain: 0.12, type: "sine", detune: 6 },
        ],
      },
      harp: {
        label: "Harp pluck",
        attack: 0.002,
        decay: 0.025,
        decayLevel: 0.28,
        release: 2.1,
        rowRelease: 0.8,
        gain: 0.13,
        q: 0.9,
        toneOpen: 16,
        toneClose: 4.4,
        noiseTime: 0.018,
        noiseGain: 0.018,
        partials: [
          { ratio: 1, gain: 1, type: "sine", detune: 0 },
          { ratio: 2.002, gain: 0.54, type: "triangle", detune: -5 },
          { ratio: 3.006, gain: 0.25, type: "sine", detune: 5 },
          { ratio: 4.012, gain: 0.14, type: "sine", detune: -8 },
          { ratio: 6.01, gain: 0.06, type: "sine", detune: 4 },
        ],
      },
    };
    return normalizeInstrumentPresetLevels(defaults);
  }

  async function loadInstrumentPresets() {
    try {
      const response = await fetch("sound-presets.json", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const config = await response.json();
      if (!config || typeof config.presets !== "object") {
        throw new Error("Missing presets");
      }

      instrumentPresets = normalizeInstrumentPresetLevels(sanitizeInstrumentPresets(config.presets));
      if (config.default && instrumentPresets[config.default]) {
        state.instrument = config.default;
      } else if (!instrumentPresets[state.instrument]) {
        state.instrument = Object.keys(instrumentPresets)[0];
      }

      populateInstrumentSelect();
      updateAllControls();
    } catch (_error) {
      populateInstrumentSelect();
      updateAllControls();
    }
  }

  function sanitizeInstrumentPresets(rawPresets) {
    const fallback = getDefaultInstrumentPresets();
    const sanitized = {};

    for (const [id, raw] of Object.entries(rawPresets)) {
      if (!raw || typeof raw !== "object" || !Array.isArray(raw.partials) || raw.partials.length === 0) {
        continue;
      }

      sanitized[id] = {
        label: String(raw.label || id),
        attack: clamp(Number(raw.attack ?? fallback.softPiano.attack), 0.001, 0.2),
        decay: clamp(Number(raw.decay ?? fallback.softPiano.decay), 0.005, 1),
        decayLevel: clamp(Number(raw.decayLevel ?? fallback.softPiano.decayLevel), 0.01, 1),
        release: clamp(Number(raw.release ?? fallback.softPiano.release), 0.05, 6),
        rowRelease: clamp(Number(raw.rowRelease ?? fallback.softPiano.rowRelease), 0, 3),
        gain: clamp(Number(raw.gain ?? fallback.softPiano.gain), 0.01, 0.5),
        q: clamp(Number(raw.q ?? fallback.softPiano.q), 0.05, 12),
        toneOpen: clamp(Number(raw.toneOpen ?? fallback.softPiano.toneOpen), 0.2, 32),
        toneClose: clamp(Number(raw.toneClose ?? fallback.softPiano.toneClose), 0.2, 12),
        noiseTime: clamp(Number(raw.noiseTime ?? fallback.softPiano.noiseTime), 0.001, 0.3),
        noiseGain: clamp(Number(raw.noiseGain ?? fallback.softPiano.noiseGain), 0, 0.2),
        partials: raw.partials.slice(0, 12).map((partial) => ({
          ratio: clamp(Number(partial.ratio ?? 1), 0.1, 16),
          gain: clamp(Number(partial.gain ?? 0.2), 0, 2),
          type: ["sine", "triangle", "sawtooth", "square"].includes(partial.type) ? partial.type : "sine",
          detune: clamp(Number(partial.detune ?? 0), -1200, 1200),
        })),
      };
    }

    return Object.keys(sanitized).length ? sanitized : fallback;
  }

  function populateInstrumentSelect() {
    el.instrumentPreset.replaceChildren();

    for (const [id, preset] of Object.entries(instrumentPresets)) {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = preset.label || id;
      el.instrumentPreset.append(option);
    }
  }

  function pitchNumberForColor(colorIndex) {
    const rootPitch = 12 * (state.octave + 1) + state.root;
    const intervals = scaleIntervals[state.scale] || scaleIntervals.original;
    return rootPitch + intervals[clampInt(colorIndex, 0, intervals.length - 1)];
  }

  function noteNameForColor(colorIndex) {
    const pitch = pitchNumberForColor(colorIndex);
    return `${noteNames[((pitch % 12) + 12) % 12]}${Math.floor(pitch / 12) - 1}`;
  }

  function updateControlsFromInputs() {
    state.launchPower = Number(el.launchPower.value);
    state.radius = Number(el.ballRadius.value);
    state.bounciness = clamp(Number(el.bounciness.value), 0, 1.25);
    state.drag = clamp(Number(el.dragAmount.value), 0, 8);
    state.substeps = clampInt(Number(el.substeps.value), 1, 16);
    if (el.autoRandomInterval) state.autoRandomInterval = clamp(Number(el.autoRandomInterval.value), 1, 20);
    state.bugSpeed = clamp(Number(el.bugSpeed.value), 0.25, 3);
    state.chameleonShift = clamp(Number(el.chameleonShift.value), 0.3, 8);
    state.bugLife = clampInt(Number(el.bugLife.value), 1, 24);
    state.root = clampInt(Number(el.rootNote.value), 0, 11);
    state.octave = clampInt(Number(el.octave.value), 1, 7);
    state.scale = el.scaleMode.value;
    state.instrument = el.instrumentPreset.value;
    state.volume = clamp(Number(el.volume.value), 0, 1);
    state.reverb = clamp(Number(el.reverbAmount.value), 0, 1);
    state.reverbSize = clamp(Number(el.reverbSize.value), 0.1, 5);
    state.delay = clamp(Number(el.delayAmount.value), 0, 1);
    state.delayTime = clamp(Number(el.delayTime.value), 0.04, 5);
    state.delayFeedback = clamp(Number(el.delayFeedback.value), 0, 0.72);
    for (const bug of state.bugs) {
      if (bug.aiType === "chameleon") {
        bug.colorShiftInterval = state.chameleonShift;
        bug.colorShiftClock = Math.min(bug.colorShiftClock, bug.colorShiftInterval);
      }
    }
    updateAllControls();
    updateAudio();
  }

  function updateAllControls() {
    el.gridSize.value = String(state.N);
    el.gridSizeValue.value = String(state.N);
    el.launchPower.value = String(state.launchPower);
    el.launchPowerValue.value = state.launchPower.toFixed(2);
    el.ballRadius.value = String(state.radius);
    el.ballRadiusValue.value = state.radius.toFixed(2);
    el.bounciness.value = state.bounciness.toFixed(2);
    el.dragAmount.value = state.drag.toFixed(1);
    el.substeps.value = String(state.substeps);
    el.bugSpeed.value = String(state.bugSpeed);
    el.bugSpeedValue.value = state.bugSpeed.toFixed(2);
    el.chameleonShift.value = String(state.chameleonShift);
    el.chameleonShiftValue.value = state.chameleonShift.toFixed(1);
    if (el.autoRandomInterval) {
      el.autoRandomInterval.value = state.autoRandomInterval.toFixed(1);
      el.autoRandomIntervalValue.value = state.autoRandomInterval.toFixed(1);
    }
    el.bugLife.value = String(state.bugLife);
    el.rootNote.value = String(state.root);
    el.octave.value = String(state.octave);
    el.scaleMode.value = state.scale;
    el.instrumentPreset.value = state.instrument;
    el.volume.value = String(state.volume);
    el.volumeValue.value = state.volume.toFixed(2);
    el.reverbAmount.value = String(state.reverb);
    el.reverbAmountValue.value = state.reverb.toFixed(2);
    el.reverbSize.value = String(state.reverbSize);
    el.reverbSizeValue.value = state.reverbSize.toFixed(2);
    el.delayAmount.value = String(state.delay);
    el.delayAmountValue.value = state.delay.toFixed(2);
    el.delayTime.value = state.delayTime.toFixed(2);
    if (el.delayTimeValue) el.delayTimeValue.value = state.delayTime.toFixed(2);
    el.delayFeedback.value = state.delayFeedback.toFixed(2);
    if (el.delayFeedbackValue) el.delayFeedbackValue.value = state.delayFeedback.toFixed(2);
    updateRunButton();
    updateModeButtons();
    updatePalette();
  }

  function updateModeButtons() {
    for (const button of el.modeButtons) {
      button.classList.toggle("active", button.dataset.mode === state.mode);
    }
  }

  function updateRunButton() {
    const t = TRANSLATIONS[currentLang];
    el.runButton.textContent = state.running ? t['run-pause'] : t['run-run'];
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pixelsynth-lang', lang);
    document.documentElement.lang = lang;
    const t = TRANSLATIONS[lang];
    for (const node of document.querySelectorAll('[data-i18n]')) {
      const key = node.dataset.i18n;
      if (t[key] !== undefined) node.innerHTML = t[key];
    }
    for (const node of document.querySelectorAll('[data-i18n-title]')) {
      const key = node.dataset.i18nTitle;
      if (t[key] !== undefined) node.title = t[key];
    }
    if (el.langButton) {
      el.langButton.textContent = t['lang-switch'];
    }
    updateRunButton();
  }

  function bindControls() {
    el.canvas.addEventListener("pointerdown", handlePointerDown);
    el.canvas.addEventListener("pointermove", handlePointerMove);
    el.canvas.addEventListener("pointerup", handlePointerUp);
    el.canvas.addEventListener("pointercancel", handlePointerUp);

    for (const button of el.modeButtons) {
      button.addEventListener("click", () => {
        state.mode = button.dataset.mode;
        updateModeButtons();
      });
    }

    el.audioButton?.addEventListener("click", ensureAudio);
    el.settingsButton.addEventListener("click", openSettings);
    el.closeSettingsButton.addEventListener("click", closeOverlays);
    el.infoButton.addEventListener("click", openInfo);
    el.closeInfoButton.addEventListener("click", closeOverlays);
    el.backdrop.addEventListener("click", closeOverlays);
    el.langButton?.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "es" : "en");
    });
    el.fullscreenButton.addEventListener("click", toggleFullscreen);
    el.runButton.addEventListener("click", () => {
      state.running = !state.running;
      updateRunButton();
    });
    
    el.autoRandomButton?.addEventListener("click", () => {
      state.autoRandom = !state.autoRandom;
      state.autoRandomTimer = 0;
      el.autoRandomButton.classList.toggle("active", state.autoRandom);
    });

    el.randomButton.addEventListener("click", () => generateRandomDrawing({ resetBalls: false, resetBugs: false, spawnIfEmpty: false }));
    el.clearButton.addEventListener("click", () => {
      initGrid();
      state.balls = [];
      state.bugs = [];
    });
    el.clearPolygonButton?.addEventListener("click", () => {
      state.polygonPoints = [];
      state.pointer.polygonDrawing = false;
      state.pointer.polygonTempPoint = null;
      state.usePolygonBounds = false;
    });
    el.addBallButton.addEventListener("click", addDefaultBall);
    el.clearBugsButton.addEventListener("click", () => {
      state.bugs = [];
    });

    el.gridSize.addEventListener("input", () => {
      state.N = clampInt(Number(el.gridSize.value), 12, 64);
      initGrid();
      state.balls = [];
      state.bugs = [];
      updateAllControls();
    });

    const controlInputs = [
      el.launchPower,
      el.ballRadius,
      el.bounciness,
      el.dragAmount,
      el.substeps,
      el.bugSpeed,
      el.chameleonShift,
      el.bugLife,
      el.autoRandomInterval,
      el.rootNote,
      el.octave,
      el.scaleMode,
      el.instrumentPreset,
      el.volume,
      el.reverbAmount,
      el.reverbSize,
      el.delayAmount,
      el.delayTime,
      el.delayFeedback,
    ];

    for (const input of controlInputs) {
      input.addEventListener("input", updateControlsFromInputs);
      input.addEventListener("change", updateControlsFromInputs);
    }

    window.addEventListener("keydown", (event) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) {
        return;
      }

      if (event.key === "Escape") {
        closeOverlays();
      } else if (event.key === "1") {
        state.mode = "draw";
        updateModeButtons();
      } else if (event.key === "2") {
        state.mode = "launch";
        updateModeButtons();
      } else if (event.key === "3") {
        state.mode = "bug";
        updateModeButtons();
      }
    });

    window.addEventListener("resize", resizeCanvas);
  }

  function openSettings() {
    if (el.settingsDrawer.classList.contains("open")) {
      closeOverlays();
      return;
    }
    el.settingsDrawer.classList.add("open");
    el.settingsDrawer.setAttribute("aria-hidden", "false");
    el.infoPanel.classList.remove("open");
    el.infoPanel.setAttribute("aria-hidden", "true");
    el.backdrop.hidden = false;
    document.body.classList.add("drawer-open");
    document.body.classList.remove("info-open");
  }

  function openInfo() {
    if (el.infoPanel.classList.contains("open")) {
      closeOverlays();
      return;
    }
    el.infoPanel.classList.add("open");
    el.infoPanel.setAttribute("aria-hidden", "false");
    el.settingsDrawer.classList.remove("open");
    el.settingsDrawer.setAttribute("aria-hidden", "true");
    el.backdrop.hidden = false;
    document.body.classList.add("info-open");
    document.body.classList.remove("drawer-open");
  }

  function closeOverlays() {
    el.settingsDrawer.classList.remove("open");
    el.settingsDrawer.setAttribute("aria-hidden", "true");
    el.infoPanel.classList.remove("open");
    el.infoPanel.setAttribute("aria-hidden", "true");
    el.backdrop.hidden = true;
    document.body.classList.remove("drawer-open", "info-open");
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function clampInt(value, min, max) {
    return Math.max(min, Math.min(max, Math.floor(value)));
  }

  function smoothAudioParam(param, target, now, timeConstant) {
    if (!param) return;
    const current = Number.isFinite(param.value) ? param.value : target;
    param.cancelScheduledValues(now);
    param.setValueAtTime(current, now);
    param.setTargetAtTime(target, now, timeConstant);
  }

  function normalizeInstrumentPresetLevels(presets) {
    const normalized = {};
    for (const [id, preset] of Object.entries(presets)) {
      normalized[id] = {
        ...preset,
        outputTrim: computePresetOutputTrim(preset),
      };
    }
    return normalized;
  }

  function computePresetOutputTrim(preset) {
    const partialEnergy = Math.sqrt(
      preset.partials.reduce((sum, partial) => {
        return sum + (partial.gain * waveformEnergy(partial.type)) ** 2;
      }, 0),
    );
    const estimatedLevel = preset.gain * Math.max(1, partialEnergy) + preset.noiseGain * 0.8;
    return Math.min(1, 0.2 / Math.max(0.2, estimatedLevel));
  }

  function waveformEnergy(type) {
    if (type === "sawtooth") return 1.28;
    if (type === "square") return 1.18;
    if (type === "triangle") return 0.92;
    return 1;
  }

  function speed(vx, vy) {
    return Math.sqrt(vx * vx + vy * vy);
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  initGrid();
  populateInstrumentSelect();
  createPalette();
  bindControls();
  setLanguage(currentLang);
  loadInstrumentPresets();
  updateAllControls();

  function startApp() {
    if (!el.startScreen.parentNode) return;
    el.startScreen.remove();
    ensureAudio();
    generateRandomDrawing({ resetBalls: true, resetBugs: true, spawnIfEmpty: true });
    requestAnimationFrame(animationLoop);
  }

  if (el.startButton) {
    el.startButton.addEventListener("click", startApp);
  }
  window.addEventListener("keydown", (e) => {
    if (el.startScreen.parentNode) startApp();
  }, { once: true });

})();
