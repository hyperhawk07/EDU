const levelSelect = document.getElementById('level');
const subjectMarksDiv = document.getElementById('subjectMarks');
const form = document.getElementById('marksForm');
const resultPage = document.getElementById('resultPage');
const gradeText = document.getElementById('gradeText');
const gradeEmoji = document.getElementById('gradeEmoji');
const suggestions = document.getElementById('suggestions');

levelSelect.addEventListener('change', () => {
  const level = levelSelect.value;
  let html = '';

  if (level === '10th' || level === '12th') {
    html += `<input type="number" placeholder="Maths Marks" required id="maths" max="100" min="0" />`;
    html += `<input type="number" placeholder="Physics Marks" required id="physics" max="100" min="0" />`;
    html += `<input type="number" placeholder="Chemistry Marks" required id="chemistry" max="100" min="0" />`;
  } else if (level === 'UG') {
    html += `<input type="number" placeholder="CGPA (out of 10)" required id="cgpa" step="0.1" max="10" min="0" />`;
  }

  subjectMarksDiv.innerHTML = html;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const level = levelSelect.value;

  let percentage = 0;

  if (level === '10th' || level === '12th') {
    const maths = parseFloat(document.getElementById('maths').value);
    const physics = parseFloat(document.getElementById('physics').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    percentage = (maths + physics + chemistry) / 3;
  } else {
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    percentage = cgpa * 10;
  }

  let grade = '';
  let emoji = '';
  if (percentage >= 80) {
    grade = '🌟 EXCELLENT';
    emoji = '🎉 Keep up the amazing work!';
  } else if (percentage >= 60) {
    grade = '👍 GOOD';
    emoji = '💪 Great job, but keep pushing further!';
  } else {
    grade = '🛠️ NEED IMPROVEMENT';
    emoji = '📚 Focus more and you’ll improve!';
  }

  const advice = [
    "Explore online courses in your weak subjects.",
    "Join group studies or peer learning.",
    "Use educational apps to practice regularly.",
    "Consider guidance counseling for future studies.",
    "Always believe in progress, not perfection."
  ];

  const randomAdvice = advice[Math.floor(Math.random() * advice.length)];

  gradeText.innerHTML = grade;
  gradeEmoji.innerHTML = emoji;
  suggestions.innerHTML = `💡 Suggestion: ${randomAdvice}`;

  document.querySelector('.container').style.display = 'none';
  resultPage.classList.remove('hidden');
});
