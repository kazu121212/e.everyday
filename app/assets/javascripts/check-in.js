const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
nav.classList.toggle('open-menu')
/* ↓ ここから追加 ↓ */
if (btn.innerHTML === 'back') {
btn.innerHTML = 'check-in';
} else {
btn.innerHTML = 'back';
}
/* ↑ ここまで追加 ↑ */
});

const teacher = document.querySelector('.teacher-menu');
const na = document.querySelector('.na');

teacher.addEventListener('click', () => {
na.classList.toggle('open-teacher')
/* ↓ ここから追加 ↓ */
if (teacher.innerHTML === 'student') {
teacher.innerHTML = 'teacher';
} else {
teacher.innerHTML = 'student';
}
/* ↑ ここまで追加 ↑ */
});

// const student = document.querySelector('.student-menu');
// const nav = document.querySelector('nav');

// student.addEventListener('click', () => {
// nav.classList.toggle('open-student')
// /* ↓ ここから追加 ↓ */
// // if (btn.innerHTML === 'back') {
// // btn.innerHTML = 'check-in';
// // } else {
// // btn.innerHTML = 'back';
// // }
// // /* ↑ ここまで追加 ↑ */
// });


