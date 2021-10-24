'use strict';

const TABLET_VIEW = 768;
const page = document.querySelector('.js__page');
const pageHeader = page.querySelector('.js__page-header');
const menuOpenBTN = page.querySelector('.js__menu-open');
const menuCloseBTN = page.querySelector('.js__menu-close');

const submenuContainer = page.querySelectorAll('.js__submenu-container');






function openMenu() {
	pageHeader.classList.add('page__header--menu-transition');
	pageHeader.classList.add('page__header--menu-visible');
}





function closeMenu() {
	pageHeader.classList.remove('page__header--menu-visible');
	setTimeout(()=>{
		pageHeader.classList.remove('page__header--menu-transition');
	}, 500);
}





function toggleSubmenu(event) {
	event.preventDefault();
	const link = event.currentTarget;
	const submenuParent = link.closest('.js__submenu-container');
	const submenu = submenuParent.querySelector('.js__submenu');
	const submenuContent = submenu.querySelector('.js__submenu-items');
	const submenuContentHeight = submenuContent.offsetHeight;

	if (window.innerWidth < TABLET_VIEW) {
		if (submenuParent.classList.contains('menu__item--with-submenu-visible')) {
			// Ocultar el submenú
			submenuParent.classList.remove('menu__item--with-submenu-visible');
			submenu.style.height = 0;
			submenu.setAttribute('aria-hidden', true);
		} else {
			// Mostrar el submenú
			submenuParent.classList.add('menu__item--with-submenu-visible');
			submenu.style.height = submenuContentHeight + 'px';
			submenu.setAttribute('aria-hidden', false);
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





function updateSubmenuAttr() {
	if (window.innerWidth >= TABLET_VIEW) {
		const submenus = page.querySelectorAll('.js__submenu');
		for (const submenu of submenus) {
			submenu.style = null;
			submenu.closest('.js__submenu-container').classList.remove('menu__item--with-submenu-visible');
			submenu.setAttribute('aria-hidden', false);
		}
	}
}





function initSubmenuArias() {
	if (window.innerWidth < TABLET_VIEW) {
		const submenus = page.querySelectorAll('.js__submenu');
		for (const submenu of submenus) {
			submenu.setAttribute('aria-hidden', true);
		}
	}
}



menuOpenBTN.addEventListener('click', openMenu);
menuCloseBTN.addEventListener('click', closeMenu)
submenuContainer.length && initSubmenus();
setAriaHiddenAttribute();
initSubmenuArias();





// Queremos cerrar el menú móvil cuando redimensionamos?
window.addEventListener('resize', () => {
	setAriaHiddenAttribute();
	updateSubmenuAttr();
})
