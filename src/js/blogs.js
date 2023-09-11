export function displayBlogs() {
      function fetchMenuData() {
            return fetch('./json/blog-and-news.json')
                  .then((response) => response.json())
                  .then((data) => {
                        // Call a function to populate the grid with the data
                        populateGrid(data);
                  })
                  .catch((error) => {
                        console.error('Error fetching menu data:', error);
                  });
      }

      function populateGrid(menuData) {
            const gridContainer = document.querySelector('.blogsAndNews-container');

            menuData.forEach((item) => {
                  const menuItem = document.createElement('div');
                  menuItem.className = 'swiper-slide box';

                  menuItem.innerHTML = `
                  <div class="blogs-image-container">
                  <img class="lazy-image loading" src="https://fakeimg.pl/300x400" data-src="${item.imageSrc}" alt="${item.name}"/>
                  </div>
                  <div class="description-container">
                  <h3 class="blog-item-title">${item.name}</h3>
                  <p class="blog-item-description">${item.description}</p>
                  <button class="blog-item-watch-button Button">${item.buttonName}</button>
                  </div>
                  `;

                  gridContainer.appendChild(menuItem);
            });
            const lazyImgs = document.querySelectorAll('.lazy-image');
            const observer = new IntersectionObserver(
                  (entries, observer) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                    let img = entry.target;
                                    img.src = img.dataset.src;
                                    img.classList.remove('loading');
                                    img.classList.add('loaded');
                                    observer.unobserve(img);
                              }
                        });
                  }
            );

            lazyImgs.forEach((img) => {
                  console.log(img.classList);
                  observer.observe(img);
            });
      }
      fetchMenuData();
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
                  1050: {
                        slidesPerView: 3,
                        spaceBetween: -60,
                  },
                  1350: {
                        slidesPerView: 4,
                        spaceBetween: -100,
                  },
                  1600: {
                        spaceBetween: -200,
                        slidesPerView: 4,
                  },
                  1700: {
                        spaceBetween: -300,
                        slidesPerView: 6,
                  },
                  1800: {
                        spaceBetween: -400,
                        slidesPerView: 7,
                  },
            },
      });
};