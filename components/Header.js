import { toggleAnnually, toggleMonthly } from '../store/toggleSlice';
import { subscribe, dispatch } from '../store/store';
import store from '../store/store';

const togglerWrapper = document.createElement('div');
togglerWrapper.classList.add('header__toggler-wrapper');

const annuallyText = document.createElement('p');
annuallyText.classList.add('header__text');
annuallyText.textContent = 'Annually';

const monthlyText = document.createElement('p');
monthlyText.classList.add('header__text');
monthlyText.textContent = 'Monthly';

const toggler = document.createElement('button');
toggler.classList.add('toggler');

const circle = document.createElement('div');
circle.classList.add('circle');

toggler.appendChild(circle);

togglerWrapper.appendChild(annuallyText);
togglerWrapper.appendChild(toggler);
togglerWrapper.appendChild(monthlyText);

const Header = document.createElement('header');
Header.classList.add('header');

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'Our Pricing';

Header.appendChild(h1);
Header.appendChild(togglerWrapper);

const listener = function () {
    const state = store.getState().toggle;

    if (state.plan === 'Annually') {
        circle.style.left = '4px';
        return;
    }

    if (state.plan === 'Monthly') {
        circle.style.left = '28px';
        return;
    }
};

subscribe(listener);

const toggle = function () {
    if (store.getState().toggle.plan === 'Annually') {
        dispatch(toggleMonthly());
        return;
    }

    if (store.getState().toggle.plan === 'Monthly') {
        dispatch(toggleAnnually());
        return;
    }
};

toggler.addEventListener('click', toggle);

export default Header;
