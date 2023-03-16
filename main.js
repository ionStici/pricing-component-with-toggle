import './scss/main.scss';
import { subscribe } from './store/store';
import Header from './components/Header';
import { cardBasic, cardPro, cardMaster } from './components/Card';

const app = document.querySelector('#app');
const main = document.createElement('main');
main.classList.add('main');

const render = function () {
    main.innerHTML = [cardBasic, cardPro, cardMaster].join('');
    main.prepend(Header);
    app.appendChild(main);
};

render();

subscribe(render);
