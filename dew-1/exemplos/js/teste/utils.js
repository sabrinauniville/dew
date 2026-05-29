export function cleanText(value) {
  return String(value || '').trim().toLowerCase();
}

export function arraysEqual(a, b) {
  return JSON.stringify(a.slice().sort()) === JSON.stringify(b.slice().sort());
}

export function gradeAnswer(exercise, answerValue) {
  if (exercise.type === 'radio') {
    return Number(answerValue) === exercise.answer ? exercise.weight : 0;
  }
  if (exercise.type === 'checkbox') {
    const selected = Array.isArray(answerValue) ? answerValue.map(String) : [];
    const expected = exercise.answer.map(String);
    return arraysEqual(selected, expected) ? exercise.weight : 0;
  }
  if (exercise.type === 'text' || exercise.type === 'code') {
    const normalized = cleanText(answerValue);
    return exercise.answer.some((expected) => normalized.includes(cleanText(expected))) ? exercise.weight : 0;
  }
  return 0;
}

export function calculateAverage(userData) {
  if (!userData?.progress) return 0;
  const scores = [];
  Object.values(userData.progress).forEach((moduleProgress) => {
    Object.values(moduleProgress).forEach((lessonProgress) => {
      scores.push({ score: lessonProgress.score || 0, weight: lessonProgress.weight || 0 });
    });
  });
  const totalScore = scores.reduce((acc, item) => acc + item.score, 0);
  const totalWeight = scores.reduce((acc, item) => acc + item.weight, 0);
  return totalWeight ? Math.round((totalScore / totalWeight) * 10) / 10 : 0;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export function isUserBlocked(userData) {
  return userData?.status === 'blocked';
}
