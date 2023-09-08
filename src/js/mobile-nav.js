export function mobileNavOpener() {
      const mobileMenuBtn = document.querySelector('.menu__bar');
      const navigationContainer = document.querySelector('.mobile-navigations');

      let isMenuOpen = false;

      mobileMenuBtn.addEventListener('click', () => {
            if (!isMenuOpen) {
                  navigationContainer.style.opacity = '1';
                  navigationContainer.style.pointerEvents = 'auto';
                  navigationContainer.style.transform = 'translateY(0)';

            } else {
                  navigationContainer.style.opacity = '0';
                  navigationContainer.style.pointerEvents = 'none';
                  navigationContainer.style.transform = 'translateY(-100%)';
            };
            isMenuOpen = !isMenuOpen;
      });
      

      
};