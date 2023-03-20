// Первый цвет

const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnNode.addEventListener ('click', function(){
    switchLight(trafficLightNode);
});

// Второй цвет

const btnNode2 = document.querySelector('.js-btn2');
const trafficLightNode2 = document.querySelector('.js-traffic-light2');


initLight(trafficLightNode2);

btnNode2.addEventListener ('click', function(){
    switchLight(trafficLightNode2);
});

// Третий цвет

const btnNode3 = document.querySelector('.js-btn3');
const trafficLightNode3 = document.querySelector('.js-traffic-light3');

initLight(trafficLightNode3);

btnNode3.addEventListener ('click', function(){
    switchLight(trafficLightNode3);
});

// Проверка

const btnCheckNode = document.querySelector('.js-check');

btnCheckNode.addEventListener('click', function () {
    if (trafficLightNode.classList.contains (CLASSES_BY_LIGHT.red) && trafficLightNode2.classList.contains(CLASSES_BY_LIGHT.yellow) && trafficLightNode3.classList.contains (CLASSES_BY_LIGHT.green)) {
        alert ("Ответ верен.\nВы молодец")
    }
    else {
        alert ("Ответ неверен.\nПопробуйте еще раз")
    }
});
