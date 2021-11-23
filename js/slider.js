let cardPerf = document.querySelector('.category-list-item-perf');
let buttonPrew = cardPerf.querySelector('.button-prew');
let buttonNext = cardPerf.querySelector('.button-next');
let description = cardPerf.querySelector('.perf-description');
let h3 = cardPerf.querySelector('h3');
let circlePerf = cardPerf.querySelector('.slider-circle:nth-child(1)');
let circleDrill = cardPerf.querySelector('.slider-circle:nth-child(2)');


buttonNext.addEventListener('click', function () {
    cardPerf.classList.add('drill');
    description.textContent = 'Соседям на радость!';
    h3.textContent = 'Дрели';

    circlePerf.classList.remove('current-circle');
    circleDrill.classList.add('current-circle');
});


buttonPrew.addEventListener('click', function () {
    cardPerf.classList.remove('drill');
    description.textContent = 'Настоящие мужские игрушки';
    h3.textContent = 'Перфораторы';

    circleDrill.classList.remove('current-circle');
    circlePerf.classList.add('current-circle');
});

circlePerf.addEventListener('click' , function () {
    cardPerf.classList.remove('drill');
    description.textContent = 'Настоящие мужские игрушки';
    h3.textContent = 'Перфораторы';

    circleDrill.classList.remove('current-circle');
    circlePerf.classList.add('current-circle');
});

circleDrill.addEventListener('click', function () {
    cardPerf.classList.add('drill');
    description.textContent = 'Соседям на радость!';
    h3.textContent = 'Дрели';
    circlePerf.classList.remove('current-circle');
    circleDrill.classList.add('current-circle');
});

