// ============================================================
// TOMS TECHNIK-TRAINER – APP-LOGIK
// ============================================================

let state = {
  currentTopic: null,
  cardIndex: 0,
  flipped: false,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
};

// Exam-Modus state
let examState = {
  index: 0,
  earnedPoints: 0,
  maxPoints: 0,
  timerInterval: null,
  secondsLeft: 0,
  selfScores: [], // pro Frage: erzielte Punkte
  hintShown: false,
  revealed: false,
};

// Fortschritt im Speicher (nur für diese Sitzung, kein localStorage!)
let progress = {
  elektro: 0,
  getriebe: 0,
  mobil: 0,
  verkehr: 0
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  showScreen('screen-home');
  updateOverallProgress();
}

function openTopic(topicKey) {
  state.currentTopic = topicKey;
  const topic = TOPICS[topicKey];
  document.getElementById('topic-title').textContent = topic.title;
  document.getElementById('topic-sub').textContent = topic.sub;

  const headerBox = document.getElementById('topic-header-box');
  const colorMap = {
    elektro: 'var(--elektro-soft)',
    getriebe: 'var(--getriebe-soft)',
    mobil: 'var(--mobil-soft)',
    verkehr: 'var(--verkehr-soft)'
  };
  headerBox.style.background = colorMap[topicKey];

  showScreen('screen-topic');
}

function goTopicMenu() {
  showScreen('screen-topic');
}

// ---------------- FLASHCARDS ----------------

function startCards() {
  state.cardIndex = 0;
  state.flipped = false;
  renderCard();
  showScreen('screen-cards');
}

function renderCard() {
  const topic = TOPICS[state.currentTopic];
  const cards = topic.cards;
  const card = cards[state.cardIndex];

  const flashcardEl = document.getElementById('flashcard');
  flashcardEl.classList.remove('flipped');
  state.flipped = false;

  document.querySelector('#flashcard .label').textContent = 'Frage – tippen zum Umdrehen';
  document.getElementById('card-emoji').textContent = topic.emoji;
  document.getElementById('card-content').textContent = card.q;
  document.querySelector('#flashcard .hint').textContent = '👆 Antippen für die Antwort';

  document.getElementById('card-counter').textContent = `${state.cardIndex + 1} / ${cards.length}`;
  document.getElementById('card-prev').disabled = state.cardIndex === 0;
  document.getElementById('card-next').disabled = state.cardIndex === cards.length - 1;
}

function flipCard() {
  const topic = TOPICS[state.currentTopic];
  const card = topic.cards[state.cardIndex];
  const flashcardEl = document.getElementById('flashcard');

  state.flipped = !state.flipped;

  if (state.flipped) {
    flashcardEl.classList.add('flipped');
    document.querySelector('#flashcard .label').textContent = 'Antwort';
    document.getElementById('card-emoji').textContent = '✅';
    document.getElementById('card-content').textContent = card.a;
    document.querySelector('#flashcard .hint').textContent = '👆 Antippen für die Frage';
  } else {
    renderCard();
  }
}

function prevCard() {
  if (state.cardIndex > 0) {
    state.cardIndex--;
    renderCard();
  }
}

function nextCard() {
  const topic = TOPICS[state.currentTopic];
  if (state.cardIndex < topic.cards.length - 1) {
    state.cardIndex++;
    renderCard();
  }
}

// ---------------- QUIZ ----------------

function startQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  renderQuizQuestion();
  showScreen('screen-quiz');
}

function renderQuizQuestion() {
  const topic = TOPICS[state.currentTopic];
  const quiz = topic.quiz;
  const q = quiz[state.quizIndex];

  state.quizAnswered = false;

  document.getElementById('quiz-progress').textContent = `Frage ${state.quizIndex + 1} / ${quiz.length}`;
  document.getElementById('quiz-question').textContent = q.q;

  const optionsBox = document.getElementById('quiz-options');
  optionsBox.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(idx);
    optionsBox.appendChild(btn);
  });

  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('show', 'correct-fb', 'wrong-fb');
  document.getElementById('quiz-next-btn').classList.remove('show');
}

function selectAnswer(selectedIdx) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const topic = TOPICS[state.currentTopic];
  const q = topic.quiz[state.quizIndex];
  const buttons = document.querySelectorAll('.quiz-option');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && idx !== q.correct) {
      btn.classList.add('wrong');
    }
  });

  const feedback = document.getElementById('quiz-feedback');
  const feedbackText = document.getElementById('quiz-feedback-text');
  const explainText = document.getElementById('quiz-explain');

  if (selectedIdx === q.correct) {
    state.quizScore++;
    feedback.classList.add('show', 'correct-fb');
    feedbackText.textContent = '🎉 Richtig! Super gemacht!';
  } else {
    feedback.classList.add('show', 'wrong-fb');
    feedbackText.textContent = '💡 Nicht ganz – aber kein Problem!';
  }
  explainText.textContent = q.explain;

  document.getElementById('quiz-next-btn').classList.add('show');

  const isLast = state.quizIndex === topic.quiz.length - 1;
  document.getElementById('quiz-next-btn').textContent = isLast ? '🏁 Ergebnis ansehen' : 'Weiter ➡️';
}

function nextQuizQuestion() {
  const topic = TOPICS[state.currentTopic];
  if (state.quizIndex < topic.quiz.length - 1) {
    state.quizIndex++;
    renderQuizQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const topic = TOPICS[state.currentTopic];
  const total = topic.quiz.length;
  const score = state.quizScore;
  const pct = score / total;

  progress[state.currentTopic] = Math.max(progress[state.currentTopic], pct);
  updateBadge(state.currentTopic);

  const emojiEl = document.getElementById('result-emoji');
  const titleEl = document.getElementById('result-title');
  const subEl = document.getElementById('result-sub');

  if (pct === 1) {
    emojiEl.textContent = '🏆';
    titleEl.textContent = 'Perfekt! Alle richtig!';
  } else if (pct >= 0.7) {
    emojiEl.textContent = '🎉';
    titleEl.textContent = 'Stark gemacht!';
  } else if (pct >= 0.4) {
    emojiEl.textContent = '💪';
    titleEl.textContent = 'Guter Versuch!';
  } else {
    emojiEl.textContent = '🌱';
    titleEl.textContent = 'Weiter so – das wird!';
  }

  subEl.textContent = `Du hast ${score} von ${total} richtig beantwortet.`;

  showScreen('screen-result');
}

function updateBadge(topicKey) {
  const badge = document.getElementById(`badge-${topicKey}`);
  const pct = progress[topicKey];
  if (pct === 1) {
    badge.textContent = '⭐';
  } else if (pct > 0) {
    badge.textContent = '✅';
  } else {
    badge.textContent = '🔒';
  }
}

function updateOverallProgress() {
  const keys = Object.keys(progress);
  const total = keys.length;
  const done = keys.filter(k => progress[k] > 0).length;
  const perfect = keys.filter(k => progress[k] === 1).length;

  const fillPct = (done / total) * 100;
  document.getElementById('overall-fill').style.width = fillPct + '%';

  const label = document.getElementById('overall-label');
  if (done === 0) {
    label.textContent = "Noch nichts geschafft – los geht's! 💪";
  } else if (done === total) {
    label.textContent = "Alle Themen geschafft! 🎉";
  } else {
    label.textContent = `${done} von ${total} Themen begonnen`;
  }

  const stars = document.getElementById('overall-stars');
  stars.textContent = '⭐'.repeat(perfect) + '🔘'.repeat(total - perfect);

  keys.forEach(updateBadge);
}

// ---------------- KLASSENARBEIT-SIMULATION ----------------

function startExam() {
  examState.index = 0;
  examState.earnedPoints = 0;
  examState.maxPoints = EXAM.questions.reduce((sum, q) => sum + q.points, 0);
  examState.selfScores = new Array(EXAM.questions.length).fill(0);
  examState.secondsLeft = EXAM.durationMinutes * 60;
  examState.hintShown = false;
  examState.revealed = false;

  renderExamQuestion();
  startExamTimer();
  showScreen('screen-exam');
}

function startExamTimer() {
  if (examState.timerInterval) clearInterval(examState.timerInterval);
  updateTimerDisplay();
  examState.timerInterval = setInterval(() => {
    examState.secondsLeft--;
    updateTimerDisplay();
    if (examState.secondsLeft <= 0) {
      clearInterval(examState.timerInterval);
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(examState.secondsLeft / 60);
  const s = examState.secondsLeft % 60;
  const display = `⏱️ ${m}:${s.toString().padStart(2, '0')}`;
  const timerEl = document.getElementById('exam-timer');
  timerEl.textContent = display;
  if (examState.secondsLeft <= 60) {
    timerEl.classList.add('low');
  } else {
    timerEl.classList.remove('low');
  }
}

function renderExamQuestion() {
  const q = EXAM.questions[examState.index];
  examState.hintShown = false;
  examState.revealed = false;

  document.getElementById('exam-progress-text').textContent =
    `Aufgabe ${examState.index + 1} / ${EXAM.questions.length}`;

  const box = document.getElementById('exam-box');
  let html = `<div class="exam-points-tag">${q.points} ${q.points === 1 ? 'Punkt' : 'Punkte'}</div>`;
  html += `<div class="exam-question">${q.q}</div>`;

  if (q.type === 'open') {
    if (q.hint) {
      html += `<button class="exam-hint-btn" onclick="toggleHint()">💡 Tipp anzeigen</button>`;
      html += `<div class="exam-hint-text" id="exam-hint-text">${q.hint}</div>`;
    }
    html += `<textarea class="exam-answer-area" id="exam-answer-input" placeholder="Schreib hier deine Lösung auf..."></textarea>`;
    html += `<button class="exam-reveal-btn" id="exam-reveal-btn" onclick="revealSolution()">✅ Lösung anzeigen & vergleichen</button>`;
    html += `<div class="exam-solution-box" id="exam-solution-box">
                <div class="label">Musterlösung</div>
                <div class="text">${q.answer}</div>
              </div>`;
    html += `<div id="self-score-area" style="display:none;">
                <div style="font-weight:800; margin-bottom:8px;">Wie viele Punkte hättest du bekommen?</div>
                <div class="self-score-row" id="self-score-row"></div>
              </div>`;
  } else if (q.type === 'mc') {
    html += `<div class="exam-options" id="exam-mc-options"></div>`;
  }

  html += `<button class="exam-next-btn" id="exam-next-btn" onclick="nextExamQuestion()">
              ${examState.index === EXAM.questions.length - 1 ? '🏁 Abgeben' : 'Weiter ➡️'}
            </button>`;

  box.innerHTML = html;

  if (q.type === 'mc') {
    const optionsBox = document.getElementById('exam-mc-options');
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.onclick = () => selectExamMcAnswer(idx);
      optionsBox.appendChild(btn);
    });
  }
}

function toggleHint() {
  examState.hintShown = !examState.hintShown;
  document.getElementById('exam-hint-text').classList.toggle('show', examState.hintShown);
}

function revealSolution() {
  examState.revealed = true;
  document.getElementById('exam-solution-box').classList.add('show');
  document.getElementById('exam-reveal-btn').style.display = 'none';

  const q = EXAM.questions[examState.index];
  const scoreArea = document.getElementById('self-score-area');
  scoreArea.style.display = 'block';

  const row = document.getElementById('self-score-row');
  row.innerHTML = '';
  const options = [0, Math.round(q.points / 2), q.points];
  const labels = ['0 Punkte', 'Teilweise', `${q.points} Punkte (voll)`];
  // Vermeide Duplikate bei kleinen Punktzahlen
  const uniqueOptions = [...new Set(options)];

  uniqueOptions.forEach((val) => {
    const btn = document.createElement('button');
    btn.className = 'self-score-btn';
    btn.textContent = val === 0 ? '0 Punkte' : (val === q.points ? `${val} (voll)` : `${val} (teilw.)`);
    btn.onclick = () => {
      examState.selfScores[examState.index] = val;
      document.querySelectorAll('.self-score-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('exam-next-btn').classList.add('show');
    };
    row.appendChild(btn);
  });
}

function selectExamMcAnswer(selectedIdx) {
  if (examState.revealed) return;
  examState.revealed = true;

  const q = EXAM.questions[examState.index];
  const buttons = document.querySelectorAll('#exam-mc-options .quiz-option');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) btn.classList.add('correct');
    else if (idx === selectedIdx) btn.classList.add('wrong');
  });

  const earned = selectedIdx === q.correct ? q.points : 0;
  examState.selfScores[examState.index] = earned;

  const box = document.getElementById('exam-box');
  const explainDiv = document.createElement('div');
  explainDiv.className = 'quiz-explain';
  explainDiv.style.marginTop = '10px';
  explainDiv.style.marginBottom = '10px';
  explainDiv.textContent = q.explain;
  document.getElementById('exam-mc-options').after(explainDiv);

  document.getElementById('exam-next-btn').classList.add('show');
}

function nextExamQuestion() {
  if (examState.index < EXAM.questions.length - 1) {
    examState.index++;
    renderExamQuestion();
  } else {
    finishExam();
  }
}

function finishExam() {
  if (examState.timerInterval) clearInterval(examState.timerInterval);

  const earned = examState.selfScores.reduce((sum, v) => sum + v, 0);
  const max = examState.maxPoints;
  const pct = max > 0 ? earned / max : 0;

  document.getElementById('exam-result-sub').textContent =
    `Du hast ${earned} von ${max} Punkten erreicht.`;

  const emojiEl = document.getElementById('exam-result-emoji');
  const titleEl = document.getElementById('exam-result-title');
  const noteEl = document.getElementById('exam-result-note');

  let note;
  if (pct >= 0.92) note = '1';
  else if (pct >= 0.81) note = '2';
  else if (pct >= 0.67) note = '3';
  else if (pct >= 0.50) note = '4';
  else if (pct >= 0.30) note = '5';
  else note = '6';

  noteEl.textContent = `Ungefähre Note: ${note}`;

  if (pct >= 0.85) {
    emojiEl.textContent = '🏆';
    titleEl.textContent = 'Super Ergebnis!';
  } else if (pct >= 0.65) {
    emojiEl.textContent = '🎉';
    titleEl.textContent = 'Gut gemacht!';
  } else if (pct >= 0.4) {
    emojiEl.textContent = '💪';
    titleEl.textContent = 'Solider Versuch!';
  } else {
    emojiEl.textContent = '🌱';
    titleEl.textContent = 'Da geht noch mehr – weiterüben!';
  }

  showScreen('screen-exam-result');
}

function confirmExitExam() {
  if (confirm('Klassenarbeit wirklich abbrechen? Dein Fortschritt geht verloren.')) {
    if (examState.timerInterval) clearInterval(examState.timerInterval);
    goHome();
  }
}

// init
updateOverallProgress();
