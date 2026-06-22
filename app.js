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

// init
updateOverallProgress();
