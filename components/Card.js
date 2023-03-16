import store from '../store/store';

let basic = store.getState().toggle.basic;
let pro = store.getState().toggle.pro;
let master = store.getState().toggle.basic;

export let cardBasic, cardPro, cardMaster;

store.subscribe(() => {
    basic = store.getState().toggle.basic;
    pro = store.getState().toggle.pro;
    master = store.getState().toggle.basic;

    cardBasic = CreateCard(basic.title, basic.price, basic.list);
    cardPro = CreateCard(pro.title, pro.price, pro.list);
    cardMaster = CreateCard(master.title, master.price, master.list);

    console.log(basic);
});

const CreateCard = function (plan, price, data) {
    return `
        <section class="card ${plan === 'Professional' ? 'card--blue' : ''}">
            <h2 class="card__h2">${plan}</h2>
            <p class="card__price-box"><span class="card__dollar">$</span><span class="card__price">${price}</span></p>

            <ul class="card__list">
                <li class="card__item">${data[0]}</li>
                <li class="card__item">${data[1]}</li>
                <li class="card__item">${data[2]}</li>
            </ul>

            <button class="card__btn">Learn More</button>
        </section>
    `;
};

cardBasic = CreateCard(basic.title, basic.price, basic.list);
cardPro = CreateCard(pro.title, pro.price, pro.list);
cardMaster = CreateCard(master.title, master.price, master.list);
