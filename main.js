import './styles/modern-normalize.css';
import './styles/style.css';
import './styles/header.css';
import './styles/mobile-nav.css';
import './styles/main-page.css';
import './styles/best-menus.css';
import './styles/menu.css';
import './styles/blogsNews.css';
import './styles/search-result.css';

import { searchBarOpener } from './src/js/search-bar';
import { mobileNavOpener } from './src/js/mobile-nav';
import { displayedBestMenu } from './src/js/best-menu';
import { displayMenu } from './src/js/our-menu';
import { displayBlogs } from './src/js/blogs';
import lazyLoading from './src/js/lazy-loading';
import { SearchEngine } from './src/js/search-results';

searchBarOpener();
mobileNavOpener();
displayedBestMenu();
displayMenu();
displayBlogs();
lazyLoading();
SearchEngine();


var swiper = new Swiper(".blogsAndNewsSwiper", {
      spaceBetween: 60,
      loop: true,
      centeredSlides: true,
      fade: true,
      grabCursor: true,
      autoplay: {
          delay: 9500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: -40,
          },
          900: {
              spaceBetween: -60,
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: -60,
          },
      },
  });
