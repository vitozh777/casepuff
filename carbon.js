let tg = window.Telegram.WebApp;
let sizes = document.querySelectorAll(".size");
let model1 = document.querySelectorAll(".model1");
let model2 = document.querySelectorAll(".model2");
let model3 = document.querySelectorAll(".model3");
let model4 = document.querySelectorAll(".model4");
let modelcompl = document.querySelectorAll(".modelcompl");
let modelcomplair = document.querySelectorAll(".modelcomplair");
let priceElement = document.querySelector(".price");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let form5 = document.getElementById("form5");
let form6 = document.getElementById("form6");
let form7 = document.getElementById("form7");
let form8 = document.getElementById("form8");
let form9 = document.getElementById("form9");
let form10 = document.getElementById("form10");
let form11 = document.getElementById("form11");
let form12 = document.getElementById("form12");
let form13 = document.getElementById("form13");
let form14 = document.getElementById("form14");
let form15 = document.getElementById("form15");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let homeContent = document.getElementById("thepuffercase");
let order1 = document.getElementById("order1");
let order2 = document.getElementById("order2");
let order3 = document.getElementById("order3");
let order4 = document.getElementById("order4");
let order5 = document.getElementById("order5");
let order6 = document.getElementById("order6");
let order7 = document.getElementById("order7");
let order8 = document.getElementById("order8");
let order9 = document.getElementById("order9");
let order10 = document.getElementById("order10");
let order11 = document.getElementById("order11");
let order12 = document.getElementById("order12");
let order13 = document.getElementById("order13");
let order14 = document.getElementById("order14");
let order15 = document.getElementById("order15");
let selectedModel = ""; // Для хранения выбранной модели
let selectedRazmer = ""; // Для хранения выбранной модели
let selectedPrice = ""; // Для хранения выбранной цены
let priceElementFormplan1 = document.querySelector(".price1");
let priceElementFormplan2 = document.querySelector(".price2");
let priceElementFormplan3 = document.querySelector(".price3");
let priceElementForm1 = document.querySelector(".price1");
let priceElementForm2 = document.querySelector(".price2");
let priceElementForm3 = document.querySelector(".price3");
let priceElementForm4 = document.querySelector(".price4");
let priceElementForm5 = document.querySelector(".price5");
let priceElementForm6 = document.querySelector(".price6");
let priceElementForm7 = document.querySelector(".price7");
let priceElementForm8 = document.querySelector(".price8");
let priceElementForm9 = document.querySelector(".price9");

const cartButton = document.getElementById('cart-button');


const backButton1 = document.getElementById("back-button1");
const backButton2 = document.getElementById("back-button2");

// Получаем ссылки на видео
const video1 = document.getElementById("myVideo3");
const video2 = document.getElementById("myVideo");





document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const video1 = document.getElementById('myVideo');
    const video2 = document.getElementById('myVideo3');
    const videos = [video1, video2];
    let resourcesLoaded = 0;
    const totalResources = videos.length + document.images.length;
    let videosReady = 0;

    // Функция для проверки состояния загрузки ресурсов
    function checkAllResourcesLoaded() {
        resourcesLoaded++;
        console.log(`Загружено ресурсов: ${resourcesLoaded}/${totalResources}`);

        if (resourcesLoaded >= totalResources && videosReady >= videos.length) {
            hideLoadingScreen();
        }
    }

    // Обработка загрузки всех изображений
    for (let i = 0; i < document.images.length; i++) {
        if (document.images[i].complete) {
            checkAllResourcesLoaded();
        } else {
            document.images[i].addEventListener('load', checkAllResourcesLoaded);
            document.images[i].addEventListener('error', checkAllResourcesLoaded); // В случае ошибки также учитываем как загруженное
        }
    }

    // Обработка загрузки каждого видео
    videos.forEach((video) => {
        video.preload = "auto"; // Начать загрузку видео только при старте страницы
        video.onloadeddata = () => {
            videosReady++;
            console.log(`Видео ${video.id} готово к воспроизведению.`);
            checkAllResourcesLoaded();
        };

        video.onerror = () => {
            console.error(`Ошибка загрузки видео: ${video.src}`);
            videosReady++;
            checkAllResourcesLoaded();
        };
    });

    // Таймаут на случай зависания загрузки
    setTimeout(() => {
        if (resourcesLoaded < totalResources || videosReady < videos.length) {
            console.warn('Загрузка заняла слишком много времени. Скрываем загрузочный экран принудительно.');
            hideLoadingScreen();
        }
    }, 10000); // Таймаут в 10 секунд (можно настроить)

    // Функция для скрытия загрузочного экрана и синхронного воспроизведения видео
    function hideLoadingScreen() {
        console.log('Все ресурсы загружены или истек таймаут. Скрываем загрузочный экран.');
        loadingScreen.style.display = 'none'; // Скрыть загрузочный экран

        // Воспроизвести оба видео одновременно
        videos.forEach((video) => {
            video.currentTime = 0; // Установить начальное время на 0, чтобы гарантировать синхронное воспроизведение
            video.play().catch((error) => {
                console.error('Ошибка воспроизведения видео:', error);
            });
        });
    }
});


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
});

function openOverlayPP(imageSrc) {
    document.getElementById('overlayPPImage').src = imageSrc;
    document.getElementById('overlayPP').style.display = 'flex';
}

function closeOverlayPP() {
    document.getElementById('overlayPP').style.display = 'none';
}



// Создаем инлайн клавиатуру с кнопкой "Открыть чат с оператором"
const keyboard = {
    inline_keyboard: [
        [
            {
                text: "Открыть чат с оператором",
                url: "https://t.me/carbonexpert",
            }
        ]
    ]
};




var animation = lottie.loadAnimation({
    container: document.getElementById('cart-icon'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'cart.json' // путь к вашему JSON-файлу
});



let cartItems = [];



// Кнопка открытия корзины
cartButton.addEventListener('click', function () {
    const cart = document.getElementById('mycart');
    cart.classList.remove('hidden'); // Открываем корзину

    // Проверяем, есть ли товары в корзине
    if (cartItems.length > 0) {
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
    } else {
        tg.MainButton.hide(); // Если корзина пуста, скрываем MainButton
    }
});

// Обновление отображения корзины
function updateCartDisplay() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div class="item-info">
                <div>Название: ${item.name}</div>
                <div>Модель: ${item.model}</div>
                <div>Цена: ${item.price}₽</div>
                <div>Количество: ${item.quantity}</div>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Проверка товаров в корзине для отображения MainButton
    if (cartItems.length > 0) {
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
}

// Отправка данных о заказе боту через MainButton
tg.MainButton.onClick(async () => {
    
    // Закрываем WebApp после отправки заказа
    tg.close();
});

// Функция для подсчета общей цены корзины
function calculateTotalPrice() {
    let totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice += parseFloat(deliveryPrice.replace(/[^\d]/g, '')); // Добавляем стоимость доставки
    if (stickerIncluded) {
        totalPrice += 20; // Добавляем цену наклеек, если они включены
    }
    return `${totalPrice}₽`;
}


document.getElementById("close-cart").addEventListener("click", function() {
    document.getElementById("mycart").classList.add("hidden");
    // Скрываем кнопку MainButton
    tg.MainButton.hide();
});





// Функция добавления товара в корзину
function addToCart(item) {
    const existingItem = cartItems.find(i => i.id === item.id && i.model === item.model);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ ...item });
    }

    // После добавления товара разблокируем все элементы корзины
    enableCartControls();
    
    updateTotalPrice();
}




// Функция для обновления количества товара
function updateQuantity(itemId, model, change) {
    const item = cartItems.find(i => i.id === itemId && i.model === model);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cartItems = cartItems.filter(i => i.id !== itemId || i.model !== model);
        }
        updateTotalPrice();
    }
}










// Функция для переключения видимости блока контактов
function toggleContacts() {
    var contactsButtons = document.getElementById("contacts-buttons");
    var arrow = document.getElementById("arrow");

    if (contactsButtons.classList.contains("hidden")) {
        contactsButtons.classList.remove("hidden");
        arrow.classList.add("open");
    } else {
        contactsButtons.classList.add("hidden");
        arrow.classList.remove("open");
    }
}

// Обработчик клика по документу
document.addEventListener("click", function(event) {
    var contactsButtons = document.getElementById("contacts-buttons");
    var contactsHeader = document.querySelector(".contacts-header");
    
    // Проверяем, произошел ли клик внутри кнопки или блока контактов
    if (!contactsHeader.contains(event.target) && !contactsButtons.contains(event.target)) {
        // Скрываем блок с контактами и закрываем стрелку
        if (!contactsButtons.classList.contains("hidden")) {
            contactsButtons.classList.add("hidden");
            var arrow = document.getElementById("arrow");
            arrow.classList.remove("open");
        }
    }
});








const casepuffButton = document.getElementById("casepuff");

casepuffButton.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("thepuffercase").style.display = "block";

    var contactsHeader = document.querySelector(".contacts-header");
    if (contactsHeader) {
        contactsHeader.style.display = "none";
    }

    // Показываем кнопку "Назад"
    backButton1.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton1.onclick = () => {
        document.getElementById("thepuffercase").style.display = "none"; // Скрываем "pufferplanet"
        document.getElementById("home").style.display = "block"; // Показываем "home"
        backButton1.style.display = "none"; // Скрываем кнопку "Назад"

        // Показываем contacts-header при возврате на "home"
        if (contactsHeader) {
            contactsHeader.style.display = "block"; // Показываем элемент снова
        }

        video1.currentTime = 0; // Сбрасываем видео на начало
        video1.play(); // Начинаем воспроизведение
        video2.currentTime = 0; // Сбрасываем второе видео на начало
        video2.play(); // Начинаем воспроизведение
    };


});

const pufferplanetButton = document.getElementById("puffplanet");

pufferplanetButton.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("pufferplanet").style.display = "block";

    var contactsHeader = document.querySelector(".contacts-header");
    if (contactsHeader) {
        contactsHeader.style.display = "none";
    }

    // Показываем кнопку "Назад"
    backButton1.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton1.onclick = () => {
        document.getElementById("pufferplanet").style.display = "none"; // Скрываем "pufferplanet"
        document.getElementById("home").style.display = "block"; // Показываем "home"
        backButton1.style.display = "none"; // Скрываем кнопку "Назад"

        // Показываем contacts-header при возврате на "home"
        if (contactsHeader) {
            contactsHeader.style.display = "block"; // Показываем элемент снова
        }

        video1.currentTime = 0; // Сбрасываем видео на начало
        video1.play(); // Начинаем воспроизведение
        video2.currentTime = 0; // Сбрасываем второе видео на начало
        video2.play(); // Начинаем воспроизведение
    };

    
});




document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var video3 = document.getElementById('myVideo3');
    var secondVideo = document.getElementById('myVideo2');
    var isVideoPlayed = false;

    // Показываем первое видео сразу
    video.style.display = 'block';
    video3.style.display = 'block';

    // Задержка в 1 секунду перед воспроизведением первого видео
    setTimeout(function() {
        // Проверяем, что видео не было воспроизведено ранее
        if (!isVideoPlayed) {
            video.play().then(function() {
                // Видео успешно воспроизведено
                isVideoPlayed = true;
            }).catch(function(error) {
                // Воспроизведение может вызвать ошибку, если видео уже воспроизводится.
                // Игнорируем эту ошибку.
            });
            video3.play().then(function() {
                // Видео успешно воспроизведено
                isVideoPlayed = true;
            }).catch(function(error) {
                // Воспроизведение может вызвать ошибку, если видео уже воспроизводится.
                // Игнорируем эту ошибку.
            });
        }
    }, 1000);

    // Обработчик события при появлении контейнера
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Воспроизводим второе видео, когда контейнер становится видимым
                secondVideo.play().catch(function(error) {
                    // Воспроизведение может вызвать ошибку, если видео уже воспроизводится.
                    // Игнорируем эту ошибку.
                });
            }
        });
    });
    observer.observe(document.getElementById('thepuffercase'));
});











const modelInfo1 = {
    "iPhone 15 Pro Max": "3699₽",
    "iPhone 15 Pro": "3699₽",
    "iPhone 15": "3699₽",
    "iPhone 14 Pro Max": "3699₽",
    "iPhone 14 Pro": "3699₽",
    "iPhone 14": "3699₽",
    "iPhone 13 Pro Max": "3699₽",
    "iPhone 13 Pro": "3699₽",
    "iPhone 13": "3699₽",
};


const modelInfo2 = {
    "iPhone 15 Pro Max": "3299₽",
    "iPhone 15 Pro": "3299₽",
    "iPhone 15": "3299₽",
    "iPhone 14 Pro Max": "3299₽",
    "iPhone 14 Pro": "3299₽",
    "iPhone 14": "3299₽",
    "iPhone 13 Pro Max": "3299₽",
    "iPhone 13 Pro": "3299₽",
    "iPhone 13": "3299₽",
};


const modelInfo3 = {
    "iPhone 16 Pro Max": "2099₽",
    "iPhone 16 Pro": "2099₽",
    "iPhone 16": "2099₽",
    "iPhone 15 Pro Max": "2099₽",
    "iPhone 15 Pro": "2099₽",
    "iPhone 15": "2099₽",
    "iPhone 14 Pro Max": "2099₽",
    "iPhone 14 Pro": "2099₽",
    "iPhone 14": "2099₽",
    "iPhone 13 Pro Max": "2099₽",
    "iPhone 13 Pro": "2099₽",
    "iPhone 13": "2099₽",
    "iPhone 12 Pro Max": "2099₽",
    "iPhone 12/12 Pro": "2099₽",
    "iPhone 11 Pro Max": "2099₽",
    "iPhone 11 Pro": "2099₽",
    "iPhone 11": "2099₽",
};


const modelInfo4 = {
    "AirPods 1/2": "2299₽",
    "AirPods Pro/Pro(2)": "2299₽",
    "AirPods 3": "2299₽",
};


const modelcomplInfo5 = {
    "iPhone 15 Pro Max": "1890₽",
    "iPhone 15 Pro": "1710₽",
    "iPhone 15 Plus": "1890₽",
    "iPhone 15": "1710₽",
    "iPhone 14 Pro Max": "1890₽",
    "iPhone 14 Pro": "1710₽",
    "iPhone 14 Plus": "1890₽",
    "iPhone 14": "1710₽",
    "iPhone 13 Pro Max": "1890₽",
    "iPhone 13 Pro": "1710₽",
    "iPhone 13": "1710₽",
    "iPhone 13 mini": "1710₽",
    "iPhone 12 Pro Max": "1890₽",
    "iPhone 12/12 Pro": "1710₽",
    "iPhone 12 mini": "1710₽",
    "iPhone 11 Pro Max": "1890₽",
    "iPhone 11 Pro": "1710₽",
    "iPhone 11": "1710₽",
    "iPhone Xs Max": "1710₽",
    "iPhone Xr": "1530₽",
    "iPhone X/Xs": "1530₽",
    "iPhone 8 Plus/7 Plus": "1530₽",
    "iPhone 6/7/8/SE20": "1530₽",
};
const modelcomplairInfo6 = {
    "AirPods 1/2": "899₽",
    "AirPods Pro/Pro(2)": "899₽",
    "AirPods 3": "899₽",
};





document.addEventListener('DOMContentLoaded', function() {
    function initializeDeliveryButtons(groupId) {
        const buttons = document.querySelectorAll(`#${groupId} .airdelivery-btn1, .airdelivery-btn2, .airdelivery-btn3, .airdelivery-btn4, .airdelivery-btn5, .airdelivery-btn6, .airdelivery-btn7, .airdelivery-btn8, .delivery-btn1, .delivery-btn2, .delivery-btn3, .delivery-btn4, .delivery-btn5, .delivery-btn6, .delivery-btn7, .delivery-btn8, .delivery-btn9, .delivery-btn10, .delivery-btn11, .delivery-btn12, .delivery-btn13, .delivery-btn14, .delivery-btn15`);
        
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();  // Предотвращаем стандартное поведение

                // Убираем активный статус у всех кнопок в этой группе
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });

                // Активируем выбранную кнопку
                button.classList.add('active');
            });
        });

        // Устанавливаем начальное состояние: 5post активен
        document.querySelector(`#${groupId} .airdelivery-btn1, .airdelivery-btn2, .airdelivery-btn3, .airdelivery-btn4, .airdelivery-btn5, .airdelivery-btn6, .airdelivery-btn7, .airdelivery-btn8, .delivery-btn1, .delivery-btn2, .delivery-btn3, .delivery-btn4, .delivery-btn5, .delivery-btn6, .delivery-btn7, .delivery-btn8, .delivery-btn9, .delivery-btn10, .delivery-btn11, .delivery-btn12, .delivery-btn13, .delivery-btn14, .delivery-btn15`).classList.add('active');
    }

    // Инициализируем группы кнопок
    initializeDeliveryButtons('airdelivery-group-1');  // Первая группа на одной странице
    initializeDeliveryButtons('airdelivery-group-2');  // Вторая группа на другой странице
    initializeDeliveryButtons('airdelivery-group-3');
    initializeDeliveryButtons('airdelivery-group-4');
    initializeDeliveryButtons('airdelivery-group-5');
    initializeDeliveryButtons('airdelivery-group-6');
    initializeDeliveryButtons('airdelivery-group-7');
    initializeDeliveryButtons('airdelivery-group-8');
    initializeDeliveryButtons('delivery-group-1');
    initializeDeliveryButtons('delivery-group-2');
    initializeDeliveryButtons('delivery-group-3');
    initializeDeliveryButtons('delivery-group-4');
    initializeDeliveryButtons('delivery-group-5');
    initializeDeliveryButtons('delivery-group-6');
    initializeDeliveryButtons('delivery-group-7');
    initializeDeliveryButtons('delivery-group-8');
    initializeDeliveryButtons('delivery-group-9');
    initializeDeliveryButtons('delivery-group-10');
    initializeDeliveryButtons('delivery-group-11');
    initializeDeliveryButtons('delivery-group-12');
    initializeDeliveryButtons('delivery-group-13');
    initializeDeliveryButtons('delivery-group-14');
    initializeDeliveryButtons('delivery-group-15');
});










const купить1 = document.getElementById("купить1");
const купить2 = document.getElementById("купить2");
const купить3 = document.getElementById("купить3");
const купить4 = document.getElementById("купить4");
const купить5 = document.getElementById("купить5");
const купить6 = document.getElementById("купить6");
const купить7 = document.getElementById("купить7");
const купить8 = document.getElementById("купить8");
const pufforder1 = document.getElementById("pufforder1");
const pufforder2 = document.getElementById("pufforder2");
const pufforder3 = document.getElementById("pufforder3");
const pufforder4 = document.getElementById("pufforder4");
const pufforder5 = document.getElementById("pufforder5");
const pufforder6 = document.getElementById("pufforder6");
const pufforder7 = document.getElementById("pufforder7");
const pufforder8 = document.getElementById("pufforder8");

// Получаем элементы кнопки "SIZE" и окна выбора моделей iPhone
const sizeButtonAir1 = document.getElementById("sizeButtonAir1");
const sizeButtonAir2 = document.getElementById("sizeButtonAir2");
const sizeButtonAir3 = document.getElementById("sizeButtonAir3");
const sizeButtonAir4 = document.getElementById("sizeButtonAir4");
const sizeButtonAir5 = document.getElementById("sizeButtonAir5");
const sizeButtonAir6 = document.getElementById("sizeButtonAir6");
const sizeButtonAir7 = document.getElementById("sizeButtonAir7");
const sizeButtonAir8 = document.getElementById("sizeButtonAir8");
const sizeButton = document.getElementById("sizeButton");
const sizeButton2 = document.getElementById("sizeButton2");
const sizeButton3 = document.getElementById("sizeButton3");
const sizeButton4 = document.getElementById("sizeButton4");
const sizeButton5 = document.getElementById("sizeButton5");
const sizeButton6 = document.getElementById("sizeButton6");
const sizeButton7 = document.getElementById("sizeButton7");
const sizeButton8 = document.getElementById("sizeButton8");
const sizeButton9 = document.getElementById("sizeButton9");
const sizeButton10 = document.getElementById("sizeButton10");
const sizeButton11 = document.getElementById("sizeButton11");
const sizeButton12 = document.getElementById("sizeButton12");
const sizeButton13 = document.getElementById("sizeButton13");
const sizeButton14 = document.getElementById("sizeButton14");
const sizeButton15 = document.getElementById("sizeButton15");
const iphoneModelsWindowAir1 = document.getElementById("iphoneModelsWindowAir1");
const iphoneModelsWindowAir2 = document.getElementById("iphoneModelsWindowAir2");
const iphoneModelsWindowAir3 = document.getElementById("iphoneModelsWindowAir3");
const iphoneModelsWindowAir4 = document.getElementById("iphoneModelsWindowAir4");
const iphoneModelsWindowAir5 = document.getElementById("iphoneModelsWindowAir5");
const iphoneModelsWindowAir6 = document.getElementById("iphoneModelsWindowAir6");
const iphoneModelsWindowAir7 = document.getElementById("iphoneModelsWindowAir7");
const iphoneModelsWindowAir8 = document.getElementById("iphoneModelsWindowAir8");
const iphoneModelsWindow = document.getElementById("iphoneModelsWindow");
const iphoneModelsWindow2 = document.getElementById("iphoneModelsWindow2");
const iphoneModelsWindow3 = document.getElementById("iphoneModelsWindow3");
const iphoneModelsWindow4 = document.getElementById("iphoneModelsWindow4");
const iphoneModelsWindow5 = document.getElementById("iphoneModelsWindow5");
const iphoneModelsWindow6 = document.getElementById("iphoneModelsWindow6");
const iphoneModelsWindow7 = document.getElementById("iphoneModelsWindow7");
const iphoneModelsWindow8 = document.getElementById("iphoneModelsWindow8");
const iphoneModelsWindow9 = document.getElementById("iphoneModelsWindow9");
const iphoneModelsWindow10 = document.getElementById("iphoneModelsWindow10");
const iphoneModelsWindow11 = document.getElementById("iphoneModelsWindow11");
const iphoneModelsWindow12 = document.getElementById("iphoneModelsWindow12");
const iphoneModelsWindow13 = document.getElementById("iphoneModelsWindow13");
const iphoneModelsWindow14 = document.getElementById("iphoneModelsWindow14");
const iphoneModelsWindow15 = document.getElementById("iphoneModelsWindow15");







купить1.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet1").style.display = "block"

    // Делаем кнопку "pufforder1" неактивной
    pufforder1.pufforderinactive = true;
    pufforder1.classList.add("pufforderinactive");

    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet1").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
    
});


// Обработчик события для кнопки "SIZE"
sizeButtonAir1.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir1.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir1.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir1.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder1.pufforderinactive = false;
        pufforder1.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan1.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});












let deliveryPrice = 280; // Цена доставки по умолчанию (5Post)
let promoApplied = false;
let stickerIncluded = true;

// Открываем окно промокода при нажатии на кнопку "Применить скидку"
document.getElementById("apply-discount").addEventListener("click", () => {
    if (!document.getElementById("apply-discount").disabled) {
        document.getElementById("promo-popup").classList.remove("hidden");
    }
});

// Обрабатываем применение скидки
document.getElementById("apply-promo-btn").addEventListener("click", () => {
    const promoCode = document.getElementById("promo-code").value;
    
    if (promoCode === "скидка10" && !promoApplied) {
        promoApplied = true; // Устанавливаем флаг, что скидка применена
        document.getElementById("promo-popup").classList.add("hidden"); // Закрываем окно
        updateTotalPrice(); // Пересчитываем общую цену с учетом скидки
    } else {
        alert("Неверный промокод или скидка уже применена.");
    }
});

// Функция переключения набора наклеек
function toggleSticker() {
    stickerIncluded = document.getElementById("toggle-sticker").checked; // Проверяем состояние набора наклеек
    updateTotalPrice(); // Пересчитываем общую цену
}



// Обновление подсказки по наклейкам
function updateStickerHint(totalWithoutDiscount) {
    const hintElement = document.getElementById("sticker-hint");

    // Если общая цена (с доставкой) меньше 3000 рублей, показываем, сколько не хватает до бесплатного набора наклеек
    if (totalWithoutDiscount < 3000) {
        const amountLeft = Math.round(3000 - totalWithoutDiscount);
        hintElement.textContent = `Добавьте ещё ${amountLeft}₽ для бесплатного набора наклеек`;
    } else {
        hintElement.textContent = ''; // Убираем подсказку, если сумма >= 3000
    }
}





pufforder1.disabled = false;

pufforder1.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем обновление страницы

    const selectedModel = document.querySelector(".model4.selected").textContent;
    const selectedPrice = parseFloat(modelInfo4[selectedModel].replace(/[^\d]/g, ''));

    addToCart({
        id: 1,
        name: "FORGED GLOSSY-OBSIDIAN",
        model: selectedModel,
        price: selectedPrice,
        quantity: 1,
    });

    updateCartDisplay();
});


// Разблокировка кнопок корзины
function enableCartControls() {
    document.getElementById("toggle-sticker").disabled = false;
    document.getElementById("apply-discount").disabled = false;
    document.getElementById("promo-code").disabled = false;
    document.getElementById("apply-promo-btn").disabled = false;

    const deliveryButtons = document.querySelectorAll(".airdelivery-btn1");
    deliveryButtons.forEach(button => button.disabled = false);
}




function updateTotalPrice() {
    // Считаем общую цену товаров
    let totalItemsPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Применяем скидку 10%, если промокод введён
    let discountedItemsPrice = totalItemsPrice;
    if (promoApplied) {
        discountedItemsPrice *= 0.9; // Применяем скидку 10%
    }

    // Определяем общую цену без учёта скидки (с доставкой)
    const totalWithoutDiscount = totalItemsPrice + deliveryPrice;

    // Логика для набора наклеек
    let stickerPrice = 20; // Цена набора наклеек по умолчанию — 20₽

    // Если общая сумма товаров + доставка >= 3000, набор становится бесплатным
    if (totalWithoutDiscount >= 3000) {
        stickerPrice = 0; // Набор бесплатный
    } else if (!stickerIncluded) {
        stickerPrice = -20; // Если набор выключен, цена 20₽ сохраняется, но вычитается из общей суммы
    }

    // Итоговая цена товаров + доставка + наклейки
    const totalPrice = Math.round(discountedItemsPrice + deliveryPrice + (stickerPrice > 0 ? stickerPrice : 0));

    // Обновляем цену на странице
    const oldPriceElement = document.getElementById("old-price");
    const newPriceElement = document.getElementById("new-price");

    if (promoApplied) {
        oldPriceElement.textContent = `${Math.round(totalItemsPrice + deliveryPrice + 20)}₽`; // Старая цена
        newPriceElement.textContent = `${totalPrice}₽`; // Новая цена со скидкой
        oldPriceElement.classList.remove("hidden"); // Показываем старую цену
        newPriceElement.classList.add("discount-applied"); // Меняем цвет новой цены на красный
    } else {
        newPriceElement.textContent = `${Math.round(totalItemsPrice + deliveryPrice + (stickerPrice > 0 ? stickerPrice : 0))}₽`; // Без скидки, цена серого цвета
        oldPriceElement.classList.add("hidden"); // Скрываем старую цену
        newPriceElement.classList.remove("discount-applied"); // Убираем красный цвет
    }

    // Обновляем цену за наклейки
    document.getElementById("sticker-price").textContent = stickerPrice >= 0 ? `${stickerPrice}₽` : "0₽";

    // Обновляем подсказку по наклейкам
    updateStickerHint(totalWithoutDiscount);
}

// Выбор метода доставки
function selectDeliveryMethod(price) {
    deliveryPrice = price;
    updateTotalPrice();
}









// Функция для отправки данных в Telegram боту
async function sendMessageToBot(message) {
    const botToken = "7514969997:AAHHKwynx9Zkyy_UOVMeaxUBqYzZFGzpkXE"; // Замените на ваш токен бота
    const chatId = tg.initDataUnsafe.user.id; // Идентификатор пользователя

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = new URLSearchParams({
        chat_id: chatId,
        text: message,
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data.toString(), // Преобразуем данные в строку
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.description);
        }

        console.log('Сообщение отправлено:', result);
    } catch (error) {
        console.error('Ошибка отправки сообщения боту:', error);
    }
}

// Функция для отправки сообщения в бота
async function sendMessageToBotWithKeyboard(message) {
    const botToken = "7514969997:AAHHKwynx9Zkyy_UOVMeaxUBqYzZFGzpkXE"; // Замените на ваш токен бота
    const chatId = tg.initDataUnsafe.user.id; // Идентификатор пользователя

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Отправляем данные в формате JSON
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.description);
        }

        console.log('Сообщение с клавиатурой отправлено:', result);
    } catch (error) {
        console.error('Ошибка отправки сообщения боту:', error);
    }
}




купить2.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet2").style.display = "block"

    // Делаем кнопку "pufforder2" неактивной
    pufforder2.pufforderinactive = true;
    pufforder2.classList.add("pufforderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet2").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});

// Обработчик события для кнопки "SIZE"
sizeButtonAir2.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir2.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir2.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir2.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder2.pufforderinactive = false;
        pufforder2.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan2.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


// Добавьте обработчик события click для кнопки "Add"
// Добавьте обработчик события click для кнопки "Add"
pufforder2.disabled = false;
pufforder2.addEventListener("click", (event) => {
    if (!pufforder2.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];
        
        // Добавляем товар в корзину
        addToCart({
            id: 1, // Уникальный ID товара
            name: "FORGED MATTE-ONYX",
            model: selectedModel,
            price: selectedPrice,
            quantity: 1,
        });

        // Открываем корзину "mycart"
        document.getElementById("mycart").classList.remove("hidden");

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.airdelivery-btn1.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.aircheckmark1').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3, .deliveryprice4');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED MATTE-ONYX";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;

        // Добавляем обработчик для MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);

            // Закрываем WebApp
            tg.close();
        });
    }
});


купить3.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet3").style.display = "block"

    // Делаем кнопку "pufforder3" неактивной
    pufforder3.pufforderinactive = true;
    pufforder3.classList.add("pufforderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet3").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});

// Обработчик события для кнопки "SIZE"
sizeButtonAir3.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir3.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir3.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir3.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder3.pufforderinactive = false;
        pufforder3.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan3.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


// Добавьте обработчик события click для кнопки "Add"
// Добавьте обработчик события click для кнопки "Add"
pufforder3.disabled = false;
pufforder3.addEventListener("click", (event) => {
    if (!pufforder3.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];
        

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.airdelivery-btn3.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.aircheckmark3').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "WOVEN GLOSSY-CLASSIC";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});

купить4.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet4").style.display = "block"

    // Делаем кнопку "pufforder3" неактивной
    pufforder4.pufforderinactive = true;
    pufforder4.classList.add("pufforderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet4").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});

// Обработчик события для кнопки "SIZE"
sizeButtonAir4.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir4.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir4.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir4.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder4.pufforderinactive = false;
        pufforder4.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan4.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


// Добавьте обработчик события click для кнопки "Add"
pufforder4.disabled = false;
pufforder4.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем обновление страницы

    const selectedModel = document.querySelector(".model4.selected").textContent;
    const selectedPrice = parseFloat(modelInfo4[selectedModel].replace(/[^\d]/g, ''));

    addToCart({
        id: 2,
        name: "FORGED MATTE-ONYX",
        model: selectedModel,
        price: selectedPrice,
        quantity: 1,
    });

    updateCartDisplay();
});

купить5.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet5").style.display = "block"

    // Делаем кнопку "pufforder5" неактивной
    pufforder5.pufforderinactive = true;
    pufforder5.classList.add("pufforderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet5").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});

// Обработчик события для кнопки "SIZE"
sizeButtonAir5.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir5.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir5.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir5.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder5.pufforderinactive = false;
        pufforder5.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan5.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


// Добавьте обработчик события click для кнопки "Add"
pufforder5.disabled = false;
pufforder5.addEventListener("click", (event) => {
    if (!pufforder5.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.airdelivery-btn5.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.aircheckmark5').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-RUBIN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});

купить6.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet6").style.display = "block"

    // Делаем кнопку "pufforder5" неактивной
    pufforder6.pufforderinactive = true;
    pufforder6.classList.add("pufforderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet6").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});

// Обработчик события для кнопки "SIZE"
sizeButtonAir6.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir6.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir6.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir6.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder6.pufforderinactive = false;
        pufforder6.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan6.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


// Добавьте обработчик события click для кнопки "Add"
pufforder6.disabled = false;
pufforder6.addEventListener("click", (event) => {
    if (!pufforder6.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.airdelivery-btn6.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.aircheckmark6').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-EMERALD";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});

купить7.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet7").style.display = "block"

    // Делаем кнопку "pufforder5" неактивной
    pufforder7.pufforderinactive = true;
    pufforder7.classList.add("pufforderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet7").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});

// Обработчик события для кнопки "SIZE"
sizeButtonAir7.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir7.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir7.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir7.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder7.pufforderinactive = false;
        pufforder7.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan7.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


// Добавьте обработчик события click для кнопки "Add"
pufforder7.disabled = false;
pufforder7.addEventListener("click", (event) => {
    if (!pufforder7.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.airdelivery-btn7.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.aircheckmark7').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-GOLD";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});

купить8.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet8").style.display = "block"

    // Делаем кнопку "pufforder5" неактивной
    pufforder8.pufforderinactive = true;
    pufforder8.classList.add("pufforderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("pufferplanet").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("formplanet8").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});

// Обработчик события для кнопки "SIZE"
sizeButtonAir8.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindowAir8.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model4").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindowAir8.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButtonAir8.textContent = `Размер: ${selectedModel}`;
    });
});

model4.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo4[selectedModel];

        // Удаляем границу у всех кнопок
        model4.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        pufforder8.pufforderinactive = false;
        pufforder8.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan8.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});


// Добавьте обработчик события click для кнопки "Add"
pufforder8.disabled = false;
pufforder8.addEventListener("click", (event) => {
    if (!pufforder8.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.airdelivery-btn8.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.aircheckmark8').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-OPAL";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});















        
//товар1zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn1.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form1").style.display = "block"


    // Делаем кнопку "order1" неактивной
    order1.orderinactive = true;
    order1.classList.add("orderinactive");

    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form1").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
    


});



// Обработчик события для кнопки "SIZE"
sizeButton.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton.textContent = `Размер: ${selectedModel}`;
    });
});

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});










model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order1.orderinactive = false;
        order1.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm1.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order1.disabled = false;
order1.addEventListener("click", (event) => {
    if (!order1.disabled) {
        event.preventDefault();

        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = parseFloat(modelInfo1[selectedModel].replace(/[^\d]/g, ''));

        // Добавляем товар в корзину
        addToCart({
            id: 1, // Уникальный ID товара
            name: "FORGED GLOSSY-OBSIDIAN",
            model: selectedModel,
            price: selectedPrice,
            quantity: 1,
        });
    }
});


//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар2zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn2.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form2").style.display = "block"


    // Делаем кнопку "order2" неактивной
    order2.orderinactive = true;
    order2.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form2").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});




// Обработчик события для кнопки "SIZE"
sizeButton2.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow2.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow2.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton2.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon2'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order2.orderinactive = false;
        order2.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm2.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order2.disabled = false;
order2.addEventListener("click", (event) => {
    if (!order2.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo1[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn2.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark2').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-SAPHIR";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар3zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn3.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form3").style.display = "block"


    // Делаем кнопку "order3" неактивной
    order3.orderinactive = true;
    order3.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form3").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton3.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow3.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow3.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton3.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon3'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order3.orderinactive = false;
        order3.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm3.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order3.disabled = false;
order3.addEventListener("click", (event) => {
    if (!order3.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo1[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn3.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark3').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-RUBIN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар4zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn4.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form4").style.display = "block"


    // Делаем кнопку "order4" неактивной
    order4.orderinactive = true;
    order4.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form4").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton4.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow4.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow4.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton4.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon4'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order4.orderinactive = false;
        order4.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm4.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order4.disabled = false;
order4.addEventListener("click", (event) => {
    if (!order4.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo1[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn4.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark4').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-EMERALD";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар5zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn5.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form5").style.display = "block"


    // Делаем кнопку "order5" неактивной
    order5.orderinactive = true;
    order5.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form5").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton5.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow5.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow5.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton5.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon5'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order5.orderinactive = false;
        order5.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm5.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order5.disabled = false;
order5.addEventListener("click", (event) => {
    if (!order5.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo1[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn5.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark5').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-GOLD";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар6zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn6.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form6").style.display = "block"


    // Делаем кнопку "order6" неактивной
    order6.orderinactive = true;
    order6.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form6").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton6.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow6.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow6.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton6.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon6'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order6.orderinactive = false;
        order6.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm6.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order6.disabled = false;
order6.addEventListener("click", (event) => {
    if (!order6.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo1[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn6.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark6').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-OPAL";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn7.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form7").style.display = "block"


    // Делаем кнопку "order6" неактивной
    order7.orderinactive = true;
    order7.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form7").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton7.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow7.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow7.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton7.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon7'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo2[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order7.orderinactive = false;
        order7.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm7.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order7.disabled = false;
order7.addEventListener("click", (event) => {
    if (!order7.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo2[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn7.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark7').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "WOVEN GLOSSY-CLASSIC (с защитой камеры)";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//


//товар8zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn8.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form8").style.display = "block"


    // Делаем кнопку "order8" неактивной
    order8.orderinactive = true;
    order8.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form8").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton8.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow8.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow8.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton8.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon8'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo2[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order8.orderinactive = false;
        order8.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm8.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order8.disabled = false;
order8.addEventListener("click", (event) => {
    if (!order8.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo2[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn8.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark8').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "WOVEN GLOSSY-CLASSIC (без защиты камеры)";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар9zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn9.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form9").style.display = "block"


    // Делаем кнопку "order9" неактивной
    order9.orderinactive = true;
    order9.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form9").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton9.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow9.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow9.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton9.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon9'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order9.orderinactive = false;
        order9.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order9.disabled = false;
order9.addEventListener("click", (event) => {
    if (!order9.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo3[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn9.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark9').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED HYBRID-QUARTZ";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар10zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn10.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form10").style.display = "block"


    // Делаем кнопку "order9" неактивной
    order10.orderinactive = true;
    order10.classList.add("orderinactive");
   
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form10").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton10.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow10.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow10.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton10.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon10'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order10.orderinactive = false;
        order10.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order10.disabled = false;
order10.addEventListener("click", (event) => {
    if (!order10.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo3[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn10.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark10').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED HYBRID-SILBER";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар11zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn11.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form11").style.display = "block"


    // Делаем кнопку "order9" неактивной
    order11.orderinactive = true;
    order11.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form11").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton11.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow11.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow11.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton11.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon11'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order11.orderinactive = false;
        order11.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order11.disabled = false;
order11.addEventListener("click", (event) => {
    if (!order11.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo3[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn11.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark11').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED HYBRID-SAPHIR";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар12zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn12.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form12").style.display = "block"


    // Делаем кнопку "order9" неактивной
    order12.orderinactive = true;
    order12.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form12").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton12.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow12.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow12.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton12.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon12'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order12.orderinactive = false;
        order12.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order12.disabled = false;
order12.addEventListener("click", (event) => {
    if (!order12.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo3[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn12.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark12').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED HYBRID-AMETHYST";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар13zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn13.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form13").style.display = "block"


    // Делаем кнопку "order9" неактивной
    order13.orderinactive = true;
    order13.classList.add("orderinactive");
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form13").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton13.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow13.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow13.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton13.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon13'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order13.orderinactive = false;
        order13.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order13.disabled = false;
order13.addEventListener("click", (event) => {
    if (!order13.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo3[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn13.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark13').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED HYBRID-RUBIN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар14zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn14.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form14").style.display = "block"


    // Делаем кнопку "order9" неактивной
    order14.orderinactive = true;
    order14.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form14").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton14.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow14.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow14.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton14.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon14'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order14.orderinactive = false;
        order14.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order14.disabled = false;
order14.addEventListener("click", (event) => {
    if (!order14.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo3[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn14.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark14').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED HYBRID-EMERALD";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//

//товар15zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn15.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form15").style.display = "block"


    // Делаем кнопку "order9" неактивной
    order15.orderinactive = true;
    order15.classList.add("orderinactive");
    
    // Показываем кнопку "Назад"
    backButton1.style.display = "none";
    backButton2.style.display = "block";

    // Логика для кнопки "Назад", возвращающая на "home"
    backButton2.onclick = () => {
        document.getElementById("thepuffercase").style.display = "block"; // Скрываем "pufferplanet"
        document.getElementById("form15").style.display = "none"; // Показываем "home"
        backButton2.style.display = "none"; // Скрываем кнопку "Назад"
        backButton1.style.display = "block";
    };
});



// Обработчик события для кнопки "SIZE"
sizeButton15.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию (обновление страницы)
    
    // Показываем окно выбора модели iPhone
    iphoneModelsWindow15.style.display = "block";
});

// Добавляем обработчик события на каждую модель iPhone
document.querySelectorAll(".model1").forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault();

        // Сохраняем выбранную модель
        selectedModel = model.textContent;
        
        // Скрываем окно после выбора модели
        iphoneModelsWindow15.style.display = "none";

        // Изменяем текст кнопки "SIZE" на выбранную модель
        sizeButton15.textContent = `Размер: ${selectedModel}`;
    });
});
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-icon15'), // контейнер для анимации
    renderer: 'svg', // тип рендера (svg, canvas, html)
    loop: true, // зацикливание анимации
    autoplay: true, // автоматическое воспроизведение
    path: 'magsafe.json' // путь к вашему JSON-файлу
});

model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");


        order15.orderinactive = false;
        order15.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
        
        selectedModel = model.textContent;
    });
});




// Добавьте обработчик события click для кнопки "Add"
order15.disabled = false;
order15.addEventListener("click", (event) => {
    if (!order15.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель
        const selectedModelElement = document.querySelector(".model1.selected");
        let selectedModel = selectedModelElement ? selectedModelElement.textContent : "Не выбрана";
        
        // Получаем цену модели (если модель выбрана)
        const selectedPrice = selectedModel ? modelInfo3[selectedModel] : "Неизвестная цена";

        // Получаем выбранный метод доставки и его цену
        const selectedDelivery = document.querySelector('.delivery-btn15.active');
        let deliveryMethod = "Не выбран метод доставки";
        let deliveryPrice = "0₽";

        if (selectedDelivery) {
            deliveryMethod = selectedDelivery.querySelector('.checkmark15').textContent;
            const deliveryPriceElement = selectedDelivery.querySelector('.deliveryprice1, .deliveryprice2, .deliveryprice3');
            deliveryPrice = deliveryPriceElement ? deliveryPriceElement.textContent : "Неизвестная цена";
        }

        // Вычисляем общую цену
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED HYBRID-GOLD";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryMethod} - ${deliveryPrice}
            Общая цена: ${totalPrice}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//





























tg.expand();