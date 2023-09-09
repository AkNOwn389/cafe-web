import './styles/modern-normalize.css';
import './styles/style.css';
import './styles/header.css';
import './styles/mobile-nav.css';
import'./styles/main-page.css';
import './styles/best-menus.css';
import './styles/menu.css';
import './styles/blogsNews.css';

import { searchBarOpener } from './src/js/search-bar';
import { mobileNavOpener } from './src/js/mobile-nav';
import { displayedBestMenu } from './src/js/best-menu';
import { displayMenu } from './src/js/our-menu';
import { displayBlogs } from './src/js/blogs';

searchBarOpener();
mobileNavOpener();
displayedBestMenu();
displayMenu();
displayBlogs();