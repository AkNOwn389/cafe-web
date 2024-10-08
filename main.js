import './styles/modern-normalize.css';
import './styles/style.css';
import './styles/header.css';
import './styles/our-stuff.css';
import './styles/mobile-nav.css';
import './styles/main-page.css';
import './styles/best-menus.css';
import './styles/menu.css';
import './styles/blogsNews.css';
import './styles/search-result.css';
import './styles/feeds.css';
import './styles/about-us.css';
import './styles/contact.css';
import './styles/footer.css';

import { searchBarOpener } from './src/js/search-bar';
import { mobileNavOpener } from './src/js/mobile-nav';
import { evenListener } from './src/js/body-event';
import { displayedBestMenu } from './src/js/best-menu';
import { displayMenu } from './src/js/our-menu';
import { displayBlogs } from './src/js/blogs';
import lazyLoading from './src/js/lazy-loading';
import { SearchEngine } from './src/js/search-results';
import { feedBackEngine } from './src/js/feeds';
import { loadFeedBack } from './src/js/feeds';

searchBarOpener();
mobileNavOpener();
evenListener();
displayedBestMenu();
displayMenu();
displayBlogs();
SearchEngine();
lazyLoading();
feedBackEngine();
loadFeedBack();

var swiper = new Swiper(".our-stuff-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 9500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".cutomer-feedback-container", {
    spaceBetween: 30,
    centeredSlides: true,
    fade: true,
    grabCursor: true,
    autoplay: {
          delay: 20000,
          disableOnInteraction: true,
    },
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
    breakpoints: {
          0: {
                slidesPerView: 1,
          },
          750: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 1,
          }
    },
});