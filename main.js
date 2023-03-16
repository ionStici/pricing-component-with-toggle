import './scss/main.scss';
import { subscribe } from './store/store';
import Header from './components/Header';
import CardsSection from './components/Cards';

const main = document.createElement('main');
main.classList.add('main');
main.appendChild(Header);
main.appendChild(CardsSection);

const app = document.querySelector('#app');
const render = () => app.appendChild(main);
render();
subscribe(render);
