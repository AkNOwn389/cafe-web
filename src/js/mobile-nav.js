export function mobileNavOpener() {
      const mobileMenuBtn = document.querySelector('.menu__bar');
      const navigationContainer = document.querySelector('.mobile-navigations');
      window.localStorage.setItem('isNavBarOpen', 'false');


      mobileMenuBtn.addEventListener('click', () => {
            if (window.localStorage.getItem('isNavBarOpen') == 'false') {
                  navigationContainer.style.opacity = '1';
                  navigationContainer.style.pointerEvents = 'auto';
                  navigationContainer.style.transform = 'translateY(0)';
                  window.localStorage.setItem('isNavBarOpen', 'true');

            } else {
                  navigationContainer.style.opacity = '0';
                  navigationContainer.style.pointerEvents = 'none';
                  navigationContainer.style.transform = 'translateY(-100%)';
                  window.localStorage.setItem('isNavBarOpen', 'false');
            };

      });

};