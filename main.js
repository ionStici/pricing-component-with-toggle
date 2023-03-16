import './scss/main.scss';
import { subscribe } from './store/store';
import Header from './components/Header';
import CardsSection from './components/Card';

const app = document.querySelector('#app');
const main = document.createElement('main');
main.classList.add('main');

const render = function () {
    main.appendChild(Header);
    main.appendChild(CardsSection);
    app.appendChild(main);
};

render();
subscribe(render);
