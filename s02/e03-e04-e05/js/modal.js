'use strict';

function openModal(id) {
	const modal = html.querySelector('#' + id);
	modal.setAttribute('aria-hidden', false);
	page.setAttribute('aria-hidden', true);
	modal.classList.add('modal--active');
	modal.setAttribute('tabindex', 1);
	modal.focus();
	html.classList.add('no-scroll');
}

function closeModal(id) {
	const modal = html.querySelector('#' + id);
	modal.style.opacity = 0;
	setTimeout(() => {
		modal.classList.remove('modal--active');
		modal.style.opacity = null;
		html.classList.remove('no-scroll');
		modal.setAttribute('aria-hidden', true);
		modal.removeAttribute('tabindex');
		page.setAttribute('aria-hidden', false);
	}, 500);
}




const html = document.querySelector('html');
const page = html.querySelector('.js__page');
const triggers = html.querySelectorAll('.js__btn-modal');
const closers = html.querySelectorAll('.js__modal-close');

for (const trigger of triggers) {
	trigger.addEventListener('click', event => {
		const btn = event.currentTarget;
		const modalId = btn.dataset.modal;
		openModal(modalId);
	});
}

for (const close of closers) {
	close.addEventListener('click', event => {
		const closeBtn = event.currentTarget;
		const modal = closeBtn.closest('.js__modal');
		const modalId = modal.id;
		closeModal(modalId);
	});
}
