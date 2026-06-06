const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#eef3f1");
  tg.setBackgroundColor("#eef3f1");
}

const moduleNames = {
  russian: "Русский язык",
  history: "История России",
  law: "Основы законодательства РФ"
};

const examShape = { russian: 11, history: 5, law: 6 };
const passShape = { russian: 6, history: 2, law: 3, total: 11 };

const questions = [
  {
    id: "ru-001",
    module: "russian",
    text: "Выберите правильный вариант: Я приехал в Россию ... работы.",
    options: ["для", "из", "над", "между"],
    answer: 0,
    explanation: "Правильно: приехал для работы. Предлог 'для' показывает цель."
  },
  {
    id: "ru-002",
    module: "russian",
    text: "Как правильно обратиться к сотруднику центра?",
    options: ["Дайте бумагу быстро", "Здравствуйте, подскажите, пожалуйста", "Эй, где очередь?", "Я хочу сейчас"],
    answer: 1,
    explanation: "В официальной ситуации нужна вежливая форма: приветствие, просьба и слово 'пожалуйста'."
  },
  {
    id: "ru-003",
    module: "russian",
    text: "Выберите слово, которое подходит по смыслу: Для оформления патента нужен ... .",
    options: ["договор", "паспорт", "магазин", "перерыв"],
    answer: 1,
    explanation: "Документ, удостоверяющий личность, обычно паспорт."
  },
  {
    id: "ru-004",
    module: "russian",
    text: "Где правильно поставлено ударение?",
    options: ["докУмент", "дОкумент", "докумЕнт", "документ"],
    answer: 2,
    explanation: "Нормативное ударение: докумЕнт."
  },
  {
    id: "ru-005",
    module: "russian",
    text: "Выберите правильную форму: У меня нет ... .",
    options: ["регистрация", "регистрации", "регистрацию", "регистрацией"],
    answer: 1,
    explanation: "После 'нет' используется родительный падеж: нет регистрации."
  },
  {
    id: "ru-006",
    module: "russian",
    text: "Какое предложение написано правильно?",
    options: ["Я живу в Москве.", "Я жить в Москве.", "Я живет в Москве.", "Я жил Москва."],
    answer: 0,
    explanation: "Подлежащее 'я' требует форму глагола 'живу'."
  },
  {
    id: "ru-007",
    module: "russian",
    text: "Что означает объявление: 'Прием документов с 9:00 до 18:00'?",
    options: ["Документы принимают ночью", "Документы принимают с утра до вечера", "Документы не принимают", "Прием только в 18:00"],
    answer: 1,
    explanation: "Фраза указывает период работы: с 9 часов утра до 18 часов."
  },
  {
    id: "ru-008",
    module: "russian",
    text: "Выберите правильный ответ на вопрос: 'Где вы работаете?'",
    options: ["Я работаю на стройке.", "Я работал завтра.", "Я работа на стройке.", "Я работает здесь."],
    answer: 0,
    explanation: "Правильная форма: я работаю."
  },
  {
    id: "ru-009",
    module: "russian",
    text: "Как правильно заполнить фразу в заявлении: 'Прошу ... мне патент'?",
    options: ["выдать", "выдал", "выдает", "выдача"],
    answer: 0,
    explanation: "В официальной просьбе используется инфинитив: прошу выдать."
  },
  {
    id: "ru-010",
    module: "russian",
    text: "Выберите антоним к слову 'разрешено'.",
    options: ["можно", "запрещено", "открыто", "верно"],
    answer: 1,
    explanation: "Антоним слова 'разрешено' - 'запрещено'."
  },
  {
    id: "ru-011",
    module: "russian",
    text: "Как правильно сказать о времени?",
    options: ["Экзамен начинается в десять часов.", "Экзамен начинается на десять часов.", "Экзамен начинается десять час.", "Экзамен начинается по десять."],
    answer: 0,
    explanation: "Для точного времени используется предлог 'в': в десять часов."
  },
  {
    id: "ru-012",
    module: "russian",
    text: "Выберите правильную форму: Я должен оплатить ... .",
    options: ["патента", "патент", "патентом", "патенте"],
    answer: 1,
    explanation: "Глагол 'оплатить' требует винительный падеж: оплатить патент."
  },
  {
    id: "ru-013",
    module: "russian",
    text: "Что означает фраза 'срок действия документа истек'?",
    options: ["Документ новый", "Документ больше не действует", "Документ находится в офисе", "Документ потерян"],
    answer: 1,
    explanation: "Если срок истек, документ уже недействителен."
  },
  {
    id: "ru-014",
    module: "russian",
    text: "Выберите вежливую просьбу.",
    options: ["Запишите меня, пожалуйста.", "Записал меня.", "Запись мне надо.", "Быстро запись."],
    answer: 0,
    explanation: "Вежливая просьба строится с формой повелительного наклонения и словом 'пожалуйста'."
  },
  {
    id: "ru-015",
    module: "russian",
    text: "Какой документ подтверждает адрес пребывания?",
    options: ["Уведомление о миграционном учете", "Чек из магазина", "Билет в метро", "Расписание автобуса"],
    answer: 0,
    explanation: "Адрес пребывания подтверждает постановка на миграционный учет."
  },
  {
    id: "hist-001",
    module: "history",
    text: "Какой город является столицей Российской Федерации?",
    options: ["Санкт-Петербург", "Москва", "Казань", "Новосибирск"],
    answer: 1,
    explanation: "Столица Российской Федерации - Москва."
  },
  {
    id: "hist-002",
    module: "history",
    text: "Какой праздник отмечается в России 9 мая?",
    options: ["День России", "День народного единства", "День Победы", "День Конституции"],
    answer: 2,
    explanation: "9 мая в России отмечается День Победы."
  },
  {
    id: "hist-003",
    module: "history",
    text: "Кто основал Санкт-Петербург?",
    options: ["Петр I", "Иван IV", "Александр II", "Юрий Гагарин"],
    answer: 0,
    explanation: "Санкт-Петербург был основан Петром I."
  },
  {
    id: "hist-004",
    module: "history",
    text: "Как называется основной закон Российской Федерации?",
    options: ["Конституция РФ", "Трудовой договор", "Миграционная карта", "Паспорт"],
    answer: 0,
    explanation: "Основной закон страны - Конституция Российской Федерации."
  },
  {
    id: "hist-005",
    module: "history",
    text: "Как называется нижняя палата Федерального Собрания РФ?",
    options: ["Совет Федерации", "Государственная Дума", "Правительство РФ", "Верховный суд"],
    answer: 1,
    explanation: "Федеральное Собрание состоит из Совета Федерации и Государственной Думы."
  },
  {
    id: "hist-006",
    module: "history",
    text: "Какой символ изображен на Государственном гербе России?",
    options: ["Двуглавый орел", "Береза", "Медный всадник", "Кремлевская башня"],
    answer: 0,
    explanation: "На гербе России изображен двуглавый орел."
  },
  {
    id: "hist-007",
    module: "history",
    text: "Какой день является Днем России?",
    options: ["1 января", "8 марта", "12 июня", "4 ноября"],
    answer: 2,
    explanation: "День России отмечается 12 июня."
  },
  {
    id: "hist-008",
    module: "history",
    text: "Кто был первым человеком в космосе?",
    options: ["Юрий Гагарин", "Сергей Королев", "Михаил Ломоносов", "Александр Пушкин"],
    answer: 0,
    explanation: "Юрий Гагарин совершил первый полет человека в космос 12 апреля 1961 года."
  },
  {
    id: "hist-009",
    module: "history",
    text: "Какой праздник отмечается 4 ноября?",
    options: ["День народного единства", "День Победы", "День знаний", "День труда"],
    answer: 0,
    explanation: "4 ноября отмечается День народного единства."
  },
  {
    id: "hist-010",
    module: "history",
    text: "Кто написал роман в стихах 'Евгений Онегин'?",
    options: ["Лев Толстой", "Александр Пушкин", "Федор Достоевский", "Антон Чехов"],
    answer: 1,
    explanation: "Автор 'Евгения Онегина' - Александр Сергеевич Пушкин."
  },
  {
    id: "law-001",
    module: "law",
    text: "Для чего иностранному гражданину нужен патент?",
    options: ["Для законной работы у работодателя или физического лица", "Для бесплатного проезда", "Для получения водительских прав", "Для открытия банковского вклада"],
    answer: 0,
    explanation: "Патент подтверждает право временно пребывающего иностранного гражданина работать в России."
  },
  {
    id: "law-002",
    module: "law",
    text: "Что нужно делать с авансовым платежом по патенту?",
    options: ["Оплачивать вовремя", "Оплатить только после окончания года", "Не оплачивать", "Передать работодателю без квитанции"],
    answer: 0,
    explanation: "Своевременная оплата фиксированного авансового платежа важна для действия патента."
  },
  {
    id: "law-003",
    module: "law",
    text: "Можно ли работать без патента, если патент нужен по закону?",
    options: ["Да, если работодатель разрешил", "Да, если работа временная", "Нет, это нарушение", "Да, если есть миграционная карта"],
    answer: 2,
    explanation: "Работа без нужного патента или разрешения считается нарушением миграционных правил."
  },
  {
    id: "law-004",
    module: "law",
    text: "Что должен сделать иностранный гражданин при смене места пребывания?",
    options: ["Уточнить и оформить миграционный учет по новому адресу", "Ничего не делать", "Только купить билет", "Сдать паспорт работодателю"],
    answer: 0,
    explanation: "Адрес пребывания должен быть актуальным, поэтому миграционный учет нужно оформлять по правилам."
  },
  {
    id: "law-005",
    module: "law",
    text: "Какой документ обычно подтверждает личность иностранного гражданина?",
    options: ["Паспорт", "Квитанция", "Пропуск", "Расписание"],
    answer: 0,
    explanation: "Личность подтверждает документ, удостоверяющий личность, чаще всего паспорт."
  },
  {
    id: "law-006",
    module: "law",
    text: "Что запрещено указывать в документах?",
    options: ["Заведомо ложные сведения", "Номер телефона", "Фамилию", "Адрес приема"],
    answer: 0,
    explanation: "Предоставление ложных сведений может привести к ответственности и отказу в оформлении документов."
  },
  {
    id: "law-007",
    module: "law",
    text: "Что такое трудовой договор?",
    options: ["Соглашение между работником и работодателем", "Медицинская справка", "Билет на поезд", "Форма оплаты налога"],
    answer: 0,
    explanation: "Трудовой договор закрепляет условия работы, обязанности и права сторон."
  },
  {
    id: "law-008",
    module: "law",
    text: "Кто обязан соблюдать законы Российской Федерации?",
    options: ["Только граждане РФ", "Все лица на территории РФ", "Только работодатели", "Только туристы"],
    answer: 1,
    explanation: "Законы РФ должны соблюдать все, кто находится на территории России."
  },
  {
    id: "law-009",
    module: "law",
    text: "Что должен сделать работник, если потерял паспорт?",
    options: ["Скрыть это от всех", "Обратиться в уполномоченные органы и восстановить документы", "Продолжать работать без документов", "Отдать миграционную карту знакомому"],
    answer: 1,
    explanation: "При потере документа нужно обратиться в компетентные органы и восстановить документы."
  },
  {
    id: "law-010",
    module: "law",
    text: "Можно ли передать свой патент другому человеку?",
    options: ["Да, родственнику", "Да, за плату", "Нет, патент оформляется на конкретного человека", "Да, если работа одинаковая"],
    answer: 2,
    explanation: "Патент является личным документом и не передается другому человеку."
  },
  {
    id: "law-011",
    module: "law",
    text: "Что означает административное выдворение?",
    options: ["Поощрение работника", "Принудительное перемещение внутри города", "Обязанность покинуть Россию по решению уполномоченного органа", "Продление патента"],
    answer: 2,
    explanation: "Административное выдворение связано с обязанностью покинуть территорию РФ."
  },
  {
    id: "law-012",
    module: "law",
    text: "Какая информация в миграционной карте особенно важна для работы?",
    options: ["Цель въезда", "Цвет ручки", "Номер места в автобусе", "Название магазина"],
    answer: 0,
    explanation: "Для оформления работы важна указанная цель въезда, например 'работа'."
  }
];

const state = {
  view: "home",
  activeModule: "all",
  progress: loadProgress(),
  quiz: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("patent2026Progress")) || { learned: [], mistakes: [], bestExam: 0 };
  } catch {
    return { learned: [], mistakes: [], bestExam: 0 };
  }
}

function saveProgress() {
  localStorage.setItem("patent2026Progress", JSON.stringify(state.progress));
  renderStats();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getModuleQuestions(module) {
  return questions.filter((question) => question.module === module);
}

function pickExamQuestions() {
  return Object.entries(examShape).flatMap(([module, amount]) => shuffle(getModuleQuestions(module)).slice(0, amount));
}

function showView(view) {
  state.view = view;
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  $$(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`));
  renderLists();
}

function renderStats() {
  const learned = new Set(state.progress.learned);
  const mistakes = new Set(state.progress.mistakes);
  $("#trainedCount").textContent = learned.size;
  $("#bestScore").textContent = `${state.progress.bestExam || 0}%`;
  $("#mistakeCount").textContent = mistakes.size;

  Object.keys(moduleNames).forEach((module) => {
    const total = getModuleQuestions(module).length;
    const complete = getModuleQuestions(module).filter((question) => learned.has(question.id)).length;
    $(`#${module}Progress`).textContent = `${complete}/${total}`;
  });
}

function renderLists() {
  renderQuestionList();
  renderMistakes();
}

function renderQuestionList() {
  const container = $("#questionList");
  const learned = new Set(state.progress.learned);
  const mistakes = new Set(state.progress.mistakes);
  const visible = state.activeModule === "all" ? questions : getModuleQuestions(state.activeModule);

  container.innerHTML = visible.map((question) => {
    const statusClass = mistakes.has(question.id) ? "mistake" : learned.has(question.id) ? "learned" : "";
    return `
      <button class="question-row ${statusClass}" data-question-id="${question.id}" type="button">
        <small>${moduleNames[question.module]}</small>
        <strong>${question.text}</strong>
      </button>
    `;
  }).join("");
}

function renderMistakes() {
  const mistakeIds = new Set(state.progress.mistakes);
  const mistakeQuestions = questions.filter((question) => mistakeIds.has(question.id));
  $("#mistakesEmpty").hidden = mistakeQuestions.length > 0;
  $("#mistakeList").innerHTML = mistakeQuestions.map((question) => `
    <button class="question-row mistake" data-question-id="${question.id}" type="button">
      <small>${moduleNames[question.module]}</small>
      <strong>${question.text}</strong>
    </button>
  `).join("");
}

function startQuiz(mode, selectedQuestions, title) {
  state.quiz = {
    mode,
    title,
    questions: selectedQuestions,
    index: 0,
    answers: [],
    locked: false
  };
  $("#quizSheet").hidden = false;
  $("#resultSheet").hidden = true;
  renderQuestion();
}

function renderQuestion() {
  const quiz = state.quiz;
  const question = quiz.questions[quiz.index];
  const progress = ((quiz.index) / quiz.questions.length) * 100;

  quiz.locked = false;
  $("#quizMode").textContent = quiz.mode === "exam" ? "Пробный экзамен" : "Тренировка";
  $("#quizTitle").textContent = quiz.title;
  $("#quizCounter").textContent = `${quiz.index + 1}/${quiz.questions.length}`;
  $("#quizProgress").style.width = `${progress}%`;
  $("#questionModule").textContent = moduleNames[question.module];
  $("#questionText").textContent = question.text;
  $("#feedback").hidden = true;
  $("#feedback").textContent = "";
  $("#nextQuestion").disabled = true;
  $("#nextQuestion").textContent = quiz.index === quiz.questions.length - 1 ? "Завершить" : "Далее";
  $("#answerOptions").innerHTML = question.options.map((option, index) => `
    <button class="answer-option" data-answer-index="${index}" type="button">${option}</button>
  `).join("");
}

function answerCurrent(optionIndex) {
  const quiz = state.quiz;
  if (!quiz || quiz.locked) return;

  const question = quiz.questions[quiz.index];
  const correct = optionIndex === question.answer;
  quiz.locked = true;
  quiz.answers.push({ id: question.id, module: question.module, correct });

  const learned = new Set(state.progress.learned);
  const mistakes = new Set(state.progress.mistakes);
  learned.add(question.id);
  if (correct) {
    mistakes.delete(question.id);
  } else {
    mistakes.add(question.id);
  }
  state.progress.learned = [...learned];
  state.progress.mistakes = [...mistakes];
  saveProgress();

  $$(".answer-option").forEach((button) => {
    const index = Number(button.dataset.answerIndex);
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    if (index === optionIndex && !correct) button.classList.add("wrong");
  });

  $("#feedback").hidden = false;
  $("#feedback").textContent = correct ? `Верно. ${question.explanation}` : `Неверно. ${question.explanation}`;
  $("#nextQuestion").disabled = false;
  tg?.HapticFeedback?.notificationOccurred(correct ? "success" : "error");
}

function nextQuestion() {
  const quiz = state.quiz;
  if (!quiz) return;

  if (quiz.index < quiz.questions.length - 1) {
    quiz.index += 1;
    renderQuestion();
    return;
  }
  finishQuiz();
}

function finishQuiz() {
  const quiz = state.quiz;
  $("#quizProgress").style.width = "100%";
  $("#quizSheet").hidden = true;

  if (quiz.mode !== "exam") {
    showView("train");
    state.quiz = null;
    return;
  }

  const totals = { russian: 0, history: 0, law: 0, total: quiz.answers.length };
  const correct = { russian: 0, history: 0, law: 0, total: 0 };

  quiz.answers.forEach((answer) => {
    totals[answer.module] += 1;
    if (answer.correct) {
      correct[answer.module] += 1;
      correct.total += 1;
    }
  });

  const percent = Math.round((correct.total / totals.total) * 100);
  state.progress.bestExam = Math.max(state.progress.bestExam || 0, percent);
  saveProgress();

  const passed = correct.russian >= passShape.russian
    && correct.history >= passShape.history
    && correct.law >= passShape.law
    && correct.total >= passShape.total;

  $("#resultTitle").textContent = passed ? "Зачет пройден" : "Нужно повторить";
  $("#resultStats").innerHTML = [
    ["Русский язык", `${correct.russian}/${totals.russian}`, passShape.russian],
    ["История России", `${correct.history}/${totals.history}`, passShape.history],
    ["Законодательство РФ", `${correct.law}/${totals.law}`, passShape.law],
    ["Всего", `${correct.total}/${totals.total}`, passShape.total]
  ].map(([label, score, pass]) => `
    <div class="stat-line">
      <span>${label}<br><small>минимум ${pass}</small></span>
      <strong>${score}</strong>
    </div>
  `).join("");
  $("#resultSheet").hidden = false;
  state.quiz = null;
}

function startSingleQuestion(id) {
  const question = questions.find((item) => item.id === id);
  if (question) startQuiz("train", [question], moduleNames[question.module]);
}

function bindEvents() {
  $$(".tab").forEach((tab) => tab.addEventListener("click", () => showView(tab.dataset.view)));
  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.activeModule = chip.dataset.module;
      $$(".chip").forEach((item) => item.classList.toggle("active", item === chip));
      renderQuestionList();
    });
  });

  $("#startExam").addEventListener("click", () => startQuiz("exam", shuffle(pickExamQuestions()), "Вариант 2026"));
  $$("[data-start-module]").forEach((button) => {
    button.addEventListener("click", () => {
      const module = button.dataset.startModule;
      startQuiz("train", shuffle(getModuleQuestions(module)), moduleNames[module]);
    });
  });

  document.addEventListener("click", (event) => {
    const questionRow = event.target.closest("[data-question-id]");
    if (questionRow) startSingleQuestion(questionRow.dataset.questionId);

    const answerButton = event.target.closest("[data-answer-index]");
    if (answerButton) answerCurrent(Number(answerButton.dataset.answerIndex));
  });

  $("#nextQuestion").addEventListener("click", nextQuestion);
  $("#closeQuiz").addEventListener("click", () => {
    $("#quizSheet").hidden = true;
    state.quiz = null;
  });
  $("#backHome").addEventListener("click", () => {
    $("#resultSheet").hidden = true;
    showView("home");
  });
  $("#resetProgress").addEventListener("click", () => {
    state.progress = { learned: [], mistakes: [], bestExam: 0 };
    saveProgress();
    renderLists();
  });
}

bindEvents();
renderStats();
renderLists();
