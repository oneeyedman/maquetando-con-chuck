'use strict';

const TABLET_VIEW = 768;
const page = document.querySelector('.js__page');
const pageHeader = page.querySelector('.js__page-header');
const menuOpenBTN = page.querySelector('.js__menu-open');
const menuCloseBTN = page.querySelector('.js__menu-close');

const submenuContainer = page.querySelectorAll('.js__submenu-container');








function openMenu() {
	pageHeader.classList.add('page__header--menu-visible');
}

function closeMenu() {
	pageHeader.classList.remove('page__header--menu-visible');
}

function toggleSubmenu(event) {
	event.preventDefault();
	const link = event.currentTarget;
	const submenu = link.closest('.js__submenu-container').querySelector('.js__submenu');
	if (window.innerWidth < TABLET_VIEW) {
		if (submenu.classList.contains('submenu--visible')) {
			submenu.classList.remove('submenu--visible');
		} else {
			submenu.classList.add('submenu--visible');
		}
	}

}

function initSubmenus() {
	for (const submenuCont of submenuContainer) {
		const toggl = submenuCont.querySelector('.js__submenu-toggl');
		toggl.addEventListener('click', toggleSubmenu);
	}
}

function setAriaHiddenAttribute() {
	if (window.innerWidth >= TABLET_VIEW) {
		menuOpenBTN.setAttribute('aria-hidden', true);
		menuCloseBTN.setAttribute('aria-hidden', true);
	} else {
		menuOpenBTN.setAttribute('aria-hidden', false);
		menuCloseBTN.setAttribute('aria-hidden', false);
	}
}




menuOpenBTN.addEventListener('click', openMenu);
menuCloseBTN.addEventListener('click', closeMenu)
submenuContainer.length && initSubmenus();
setAriaHiddenAttribute();

// Queremos cerrar el menú móvil cuando redimensionamos?
window.addEventListener('resize', () => {
	setAriaHiddenAttribute();
})
