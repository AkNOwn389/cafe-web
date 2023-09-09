import './styles/modern-normalize.css';
import './styles/style.css';
import './styles/header.css';
import './styles/mobile-nav.css';
import'./styles/main-page.css';
import './styles/best-menus.css';

import { searchBarOpener } from './src/js/search-bar';
import { mobileNavOpener } from './src/js/mobile-nav';
import { displayedBestMenu } from './src/js/best-menu';

searchBarOpener();
mobileNavOpener();
displayedBestMenu();