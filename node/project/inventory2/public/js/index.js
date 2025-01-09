document.body.addEventListener('DOMContentLoaded', () => {
	const studentAddForm = document.querySelector('#add-student-form');
	const studentAddBtn = document.querySelector('#add-student-btn');
	studentAddBtn.addEventListener('click', () => {
		studentAddForm.classList.toogle('hidden');
	});
});
