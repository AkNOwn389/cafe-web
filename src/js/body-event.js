export function evenListener() {
      // Kunin ang mga kinakailangang element
      const body = document.querySelector('body');
      const menuBar = document.querySelector('.menu__bar');
      const mobileNav = document.querySelector('.mobile-navigations');
      const mobileNavLi = document.querySelector('.mobile-navigations li');
      const mobileNavA = document.querySelector('.mobile-navigations li a');

      // Idagdag ang event listener sa body
      body.addEventListener('click', (event) => {
            // Tingnan kung ang mobile navigation ang na-click
            if (event.target === mobileNav) {
                  return;
            } else if(event.target === menuBar) {
                  return;
            } else {
                  // Kung hindi ang mobile navigation ang na-click, siguruhing naka-hide ito
                  mobileNav.style.opacity = '0';
                  mobileNav.style.pointerEvents = 'none';
                  mobileNav.style.transform = 'translateY(-100%)';
                  window.localStorage.setItem('isNavBarOpen', 'false');
            }
      });
};