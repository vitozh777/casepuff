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
let form16 = document.getElementById("form16");
let form17 = document.getElementById("form17");
let form18 = document.getElementById("form18");
let form19 = document.getElementById("form19");
let form20 = document.getElementById("form20");
let form21 = document.getElementById("form21");
let form22 = document.getElementById("form22");
let form23 = document.getElementById("form23");
let form24 = document.getElementById("form24");
let form25 = document.getElementById("form25");
let form26 = document.getElementById("form26");
let form27 = document.getElementById("form27");
let form28 = document.getElementById("form28");
let form29 = document.getElementById("form29");
let form30 = document.getElementById("form30");
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
let btn16 = document.getElementById("btn16");
let btn17 = document.getElementById("btn17");
let btn18 = document.getElementById("btn18");
let btn19 = document.getElementById("btn19");
let btn20 = document.getElementById("btn20");
let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");
let btn23 = document.getElementById("btn23");
let btn24 = document.getElementById("btn24");
let btn25 = document.getElementById("btn25");
let btn26 = document.getElementById("btn26");
let btn27 = document.getElementById("btn27");
let btn28 = document.getElementById("btn28");
let btn29 = document.getElementById("btn29");
let btn30 = document.getElementById("btn30");
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
let order16 = document.getElementById("order16");
let order17 = document.getElementById("order17");
let order18 = document.getElementById("order18");
let order19 = document.getElementById("order19");
let order20 = document.getElementById("order20");
let order21 = document.getElementById("order21");
let order22 = document.getElementById("order22");
let order23 = document.getElementById("order23");
let order24 = document.getElementById("order24");
let order25 = document.getElementById("order25");
let order26 = document.getElementById("order26");
let order27 = document.getElementById("order27");
let order28 = document.getElementById("order28");
let order29 = document.getElementById("order29");
let order30 = document.getElementById("order30");
let selectedModel = ""; // Для хранения выбранной модели
let selectedRazmer = ""; // Для хранения выбранной модели
let selectedPrice = ""; // Для хранения выбранной цены
let priceElementForm1 = document.querySelector(".price1");
let priceElementForm2 = document.querySelector(".price2");
let priceElementForm3 = document.querySelector(".price3");
let priceElementForm4 = document.querySelector(".price4");
let priceElementForm5 = document.querySelector(".price5");
let priceElementForm50 = document.querySelector(".price50");
let priceElementForm6 = document.querySelector(".price6");
let priceElementForm7 = document.querySelector(".price7");
let priceElementForm8 = document.querySelector(".price8");
let priceElementForm9 = document.querySelector(".price9");
let priceElementForm10 = document.querySelector(".price10");
let priceElementForm11 = document.querySelector(".price11");
let priceElementForm12 = document.querySelector(".price12");
let priceElementForm13 = document.querySelector(".price13");
let priceElementForm14 = document.querySelector(".price14");
let priceElementForm15 = document.querySelector(".price15");
let priceElementForm16 = document.querySelector(".price16");
let priceElementForm17 = document.querySelector(".price17");
let priceElementForm18 = document.querySelector(".price18");
let priceElementForm19 = document.querySelector(".price19");
let priceElementForm20 = document.querySelector(".price20");
let priceElementForm21 = document.querySelector(".price21");
let priceElementForm22 = document.querySelector(".price22");
let priceElementForm23 = document.querySelector(".price23");
let priceElementForm24 = document.querySelector(".price24");
let priceElementForm25 = document.querySelector(".price25");
let priceElementForm26 = document.querySelector(".price26");
let priceElementForm27 = document.querySelector(".price27");
let priceElementForm28 = document.querySelector(".price28");
let priceElementForm29 = document.querySelector(".price29");
let priceElementForm30 = document.querySelector(".price30");

const backButton = Telegram.WebApp.BackButton;




const tgoper = document.getElementById("tgoper");
tgoper.addEventListener("click", () => {
    window.open("https://t.me/operpuff", "_blank");
});

const tgkanal = document.getElementById("tgkanal");
tgkanal.addEventListener("click", () => {
    window.open("https://t.me/pufferplanet", "_blank");
});

const tginst = document.getElementById("tginst");
tginst.addEventListener("click", () => {
    window.open("https://www.instagram.com/pufferplanet/", "_blank");
});

const tgoper1 = document.getElementById("tgoper1");
tgoper1.addEventListener("click", () => {
    window.open("https://t.me/operpuff", "_blank");
});

const tgkanal1 = document.getElementById("tgkanal1");
tgkanal1.addEventListener("click", () => {
    window.open("https://t.me/pufferplanet", "_blank");
});

const tginst1 = document.getElementById("tginst1");
tginst1.addEventListener("click", () => {
    window.open("https://www.instagram.com/pufferplanet/", "_blank");
});

const tgoper2 = document.getElementById("tgoper2");
tgoper2.addEventListener("click", () => {
    window.open("https://t.me/operpuff", "_blank");
});

const tgkanal2 = document.getElementById("tgkanal2");
tgkanal2.addEventListener("click", () => {
    window.open("https://t.me/pufferplanet", "_blank");
});

const tginst2 = document.getElementById("tginst2");
tginst2.addEventListener("click", () => {
    window.open("https://www.instagram.com/pufferplanet/", "_blank");
});



const casepuffButton = document.getElementById("casepuff");

casepuffButton.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("thepuffercase").style.display = "block";


});

const pufferplanetButton = document.getElementById("puffplanet");

pufferplanetButton.addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("pufferplanet").style.display = "block";

    
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









function calculateTotalPrice(selectedPrice, deliveryPrice) {
    // Логика вычисления общей цены
    return parseFloat(selectedPrice) + parseFloat(deliveryPrice);
}


const razmerInfo1 = {
    "S": "2290₽",
    "M": "2290₽",
    "L": "2290₽",
};


const razmerInfo2 = {
    "S": "4990₽",
    "M": "4990₽",
    "L": "4990₽",
    "XL": "4990₽",
};



const razmerInfo3 = {
    "S": "3990₽",
    "M": "3990₽",
    "L": "3990₽",
    "XL": "3990₽",
};


const modelInfo1 = {
    "iPhone 15 Pro Max": "3699₽",
    "iPhone 15 Pro": "3699₽",
    "iPhone 15 Plus": "3699₽",
    "iPhone 15": "3699₽",
    "iPhone 14 Pro Max": "3699₽",
    "iPhone 14 Pro": "3699₽",
    "iPhone 14 Plus": "3699₽",
    "iPhone 14": "3699₽",
    "iPhone 13 Pro Max": "3699₽",
    "iPhone 13 Pro": "3699₽",
    "iPhone 13": "3699₽",
};


const modelInfo2 = {
    "iPhone 14 Pro Max": "1099₽",
    "iPhone 14 Pro": "999₽",
    "iPhone 14 Plus": "1099₽",
    "iPhone 14": "999₽",
    "iPhone 13 Pro Max": "1099₽",
    "iPhone 13 Pro": "999₽",
    "iPhone 13": "999₽",
    "iPhone 12 Pro Max": "1099₽",
    "iPhone 12 Pro": "999₽",
    "iPhone 12": "999₽",
    "iPhone 11 Pro Max": "1099₽",
    "iPhone 11 Pro": "999₽",
    "iPhone 11": "999₽",
    "iPhone Xs Max": "1099₽",
    "iPhone Xr": "999₽",
    "iPhone X/Xs": "999₽",
};


const modelInfo3 = {
    "iPhone 13 Pro Max": "1899₽",
    "iPhone 13 Pro": "1699₽",
    "iPhone 13": "1699₽",
    "iPhone 12 Pro Max": "1899₽",
    "iPhone 12/12 Pro": "1699₽",
    "iPhone 11": "1699₽",
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












const купить1 = document.getElementById("купить1");
const купить2 = document.getElementById("купить2");
const купить3 = document.getElementById("купить3");
const купить4 = document.getElementById("купить4");
const купить5 = document.getElementById("купить5");
const pufforder1 = document.getElementById("pufforder1");
const pufforder2 = document.getElementById("pufforder2");
const pufforder3 = document.getElementById("pufforder3");
const pufforder4 = document.getElementById("pufforder4");
const pufforder5 = document.getElementById("pufforder5");
let razmer1 = document.querySelectorAll(".razmer1");
let razmer2 = document.querySelectorAll(".razmer2");
let razmer3 = document.querySelectorAll(".razmer3");
let priceElementFormplan1 = document.querySelector(".цена1");
let priceElementFormplan2 = document.querySelector(".цена2");
let priceElementFormplan3 = document.querySelector(".цена3");

function openSetkaWindow() {
    document.getElementById("setkaOverlay").style.display = "block"
}

// Закрыть окошко sale
function closeSetka() {
    const setkaOverlay = document.getElementById("setkaOverlay");
    setkaOverlay.style.display = "none";
}



купить1.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet1").style.display = "block"

    // Делаем кнопку "pufforder1" неактивной
    pufforder1.pufforderinactive = true;
    pufforder1.classList.add("pufforderinactive");
    backButton.show();

    backButton.onClick(() => {
        document.getElementById("pufferplanet").style.display = "block";
        document.getElementById("formplanet1").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});

// Получаем элементы кнопки "SIZE" и окна выбора моделей iPhone
const sizeButtonAir1 = document.getElementById("sizeButtonAir1");
const iphoneModelsWindowAir1 = document.getElementById("iphoneModelsWindowAir1");

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

        pufforder1.orderinactive = false;
        pufforder1.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan1.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});

console.log(tg)
// Добавьте обработчик события click для кнопки "Add"
// Добавьте обработчик события click для кнопки "Add"
pufforder1.disabled = false;
pufforder1.addEventListener("click", (event) => {
    if (!pufforder1.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-OBSIDIAN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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

// Функция для вычисления общей цены
function calculateTotalPrice(price1, price2) {
    const price1Numeric = parseInt(price1.replace("₽", "").replace(",", ""));
    const price2Numeric = parseInt(price2.replace("₽", "").replace(",", ""));
    const total = price1Numeric + price2Numeric;
    return total + "₽";
}

async function sendMessageToBot(instructionMessage) {
    const botToken = "6307642779:AAG5aXORiZ8gaVAK9bFtwrVBlZQPln2Lbd8";
    const chatId = tg.initDataUnsafe.user.id;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = new URLSearchParams({
        chat_id: chatId,
        text: instructionMessage,
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });

        const result = await response.json();
        console.log('Message sent:', result);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

// Функция для отправки сообщения в бота
async function sendMessageToBotWithKeyboard(message, keyboard) {
    const botToken = "6307642779:AAG5aXORiZ8gaVAK9bFtwrVBlZQPln2Lbd8"; // Замените на ваш токен бота
    const chatId = tg.initDataUnsafe.user.id; // Замените на ваш ID чата
                
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = new URLSearchParams({
        chat_id: chatId,
        text: message,
        reply_markup: JSON.stringify(keyboard),
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });
                    
        const result = await response.json();
        console.log('Message sent with keyboard:', result);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}




купить2.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet2").style.display = "block"

    // Делаем кнопку "pufforder2" неактивной
    pufforder2.pufforderinactive = true;
    pufforder2.classList.add("pufforderinactive");
    backButton.show();

    backButton.onClick(() => {
        document.getElementById("pufferplanet").style.display = "block";
        document.getElementById("formplanet2").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});

razmer2.forEach(razmer => {
    razmer.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)


        selectedRazmer = razmer.textContent;
        selectedPrice = razmerInfo2[selectedRazmer];

        // Удаляем границу у всех кнопок
        razmer2.forEach(btn => {
            btn.classList.remove("razmer2active");
        });

        // Добавляем класс selected к выбранной кнопке
        razmer.classList.add("razmer2active");


        pufforder2.pufforderinactive = false;
        pufforder2.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan2.textContent = selectedPrice;

        selectedRazmer = razmer.textContent;
    });
});

console.log(tg)
// Добавьте обработчик события click для кнопки "Add"
pufforder2.disabled = false;
pufforder2.addEventListener("click", (event) => {
    if (!pufforder2.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedRazmer = document.querySelector(".razmer2.razmer2active").textContent;
        const selectedPrice = razmerInfo2[selectedRazmer];

        // Вычисляем общую цену
        const deliveryPrice = "400₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE ZIP HOODIE - BLACK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedRazmer}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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


купить3.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet3").style.display = "block"

    // Делаем кнопку "pufforder3" неактивной
    pufforder3.pufforderinactive = true;
    pufforder3.classList.add("pufforderinactive");
    backButton.show();

    backButton.onClick(() => {
        document.getElementById("pufferplanet").style.display = "block";
        document.getElementById("formplanet3").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});

razmer2.forEach(razmer => {
    razmer.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)


        selectedRazmer = razmer.textContent;
        selectedPrice = razmerInfo2[selectedRazmer];

        // Удаляем границу у всех кнопок
        razmer2.forEach(btn => {
            btn.classList.remove("razmer2active");
        });

        // Добавляем класс selected к выбранной кнопке
        razmer.classList.add("razmer2active");


        pufforder3.pufforderinactive = false;
        pufforder3.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan2.textContent = selectedPrice;

        selectedRazmer = razmer.textContent;
    });
});

console.log(tg)
// Добавьте обработчик события click для кнопки "Add"
pufforder3.disabled = false;
pufforder3.addEventListener("click", (event) => {
    if (!pufforder3.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedRazmer = document.querySelector(".razmer2.razmer2active").textContent;
        const selectedPrice = razmerInfo2[selectedRazmer];

        // Вычисляем общую цену
        const deliveryPrice = "400₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE ZIP HOODIE - WHITE";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedRazmer}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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

    // Делаем кнопку "pufforder4" неактивной
    pufforder4.pufforderinactive = true;
    pufforder4.classList.add("pufforderinactive");
    backButton.show();

    backButton.onClick(() => {
        document.getElementById("pufferplanet").style.display = "block";
        document.getElementById("formplanet4").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});

razmer3.forEach(razmer => {
    razmer.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)


        selectedRazmer = razmer.textContent;
        selectedPrice = razmerInfo3[selectedRazmer];

        // Удаляем границу у всех кнопок
        razmer3.forEach(btn => {
            btn.classList.remove("razmer3active");
        });

        // Добавляем класс selected к выбранной кнопке
        razmer.classList.add("razmer3active");


        pufforder4.pufforderinactive = false;
        pufforder4.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan3.textContent = selectedPrice;

        selectedRazmer = razmer.textContent;
    });
});

console.log(tg)
// Добавьте обработчик события click для кнопки "Add"
pufforder4.disabled = false;
pufforder4.addEventListener("click", (event) => {
    if (!pufforder4.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedRazmer = document.querySelector(".razmer3.razmer3active").textContent;
        const selectedPrice = razmerInfo3[selectedRazmer];

        // Вычисляем общую цену
        const deliveryPrice = "400₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "PANTS - BLACK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedRazmer}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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


купить5.addEventListener("click", () => {
    document.getElementById("pufferplanet").style.display = "none"
    document.getElementById("formplanet5").style.display = "block"

    // Делаем кнопку "pufforder5" неактивной
    pufforder5.pufforderinactive = true;
    pufforder5.classList.add("pufforderinactive");
    backButton.show();

    backButton.onClick(() => {
        document.getElementById("pufferplanet").style.display = "block";
        document.getElementById("formplanet5").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});

razmer3.forEach(razmer => {
    razmer.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)


        selectedRazmer = razmer.textContent;
        selectedPrice = razmerInfo3[selectedRazmer];

        // Удаляем границу у всех кнопок
        razmer3.forEach(btn => {
            btn.classList.remove("razmer3active");
        });

        // Добавляем класс selected к выбранной кнопке
        razmer.classList.add("razmer3active");


        pufforder5.pufforderinactive = false;
        pufforder5.classList.remove("pufforderinactive");

        priceElement.textContent = selectedPrice;
        priceElementFormplan3.textContent = selectedPrice;

        selectedRazmer = razmer.textContent;
    });
});

console.log(tg)
// Добавьте обработчик события click для кнопки "Add"
pufforder5.disabled = false;
pufforder5.addEventListener("click", (event) => {
    if (!pufforder5.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedRazmer = document.querySelector(".razmer3.razmer3active").textContent;
        const selectedPrice = razmerInfo3[selectedRazmer];

        // Вычисляем общую цену
        const deliveryPrice = "400₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "PANTS - WHITE";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedRazmer}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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















const tpcItems = document.querySelectorAll(".item#TPC");
const tscItems = document.querySelectorAll(".item#TSC");
const tacItems = document.querySelectorAll(".item#TAC");
const tdcItems = document.querySelectorAll(".item#TDC");








        
//товар1zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn1.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none"
    document.getElementById("form1").style.display = "block"


    // Делаем кнопку "order1" неактивной
    order1.orderinactive = true;
    order1.classList.add("orderinactive");
    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form1").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });


});





// Получаем элементы кнопки "SIZE" и окна выбора моделей iPhone
const sizeButton = document.getElementById("sizeButton");
const iphoneModelsWindow = document.getElementById("iphoneModelsWindow");

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



console.log(tg)
// Добавьте обработчик события click для кнопки "Add"
order1.disabled = false;
order1.addEventListener("click", (event) => {
    if (!order1.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "FORGED GLOSSY-OBSIDIAN-";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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


//товар2zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn2.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form2").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order2.orderinactive = true;
    order2.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form2").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model2.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo2[selectedModel];

        // Удаляем границу у всех кнопок
        model2.forEach(btn => {
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
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model2.selected").textContent;
        const selectedPrice = modelInfo2[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить  через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-TINTED AIR";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар3zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn3.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form3").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order3.orderinactive = true;
    order3.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form3").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order3.orderinactive = false;
        order3.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm3.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order3.disabled = false;
order3.addEventListener("click", (event) => {
    if (!order3.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора ";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-CERULEAN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар4zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn4.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form4").style.display = "block";

    // Делаем кнопку "order4" неактивной
    order4.orderinactive = true;
    order4.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form4").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model2.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo2[selectedModel];

        // Удаляем границу у всех кнопок
        model2.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

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
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model2.selected").textContent;
        const selectedPrice = modelInfo2[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить  через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-AIR";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар5zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn5.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form5").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order5.orderinactive = true;
    order5.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form5").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


modelcompl.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelcomplInfo5[selectedModel];

        // Удаляем границу у всех кнопок
        modelcompl.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        priceElement.textContent = selectedPrice;
        priceElementForm5.textContent = selectedPrice;
                    
        selectedModel = model.textContent;

        updateOrder5ButtonState(); // Проверка состояния кнопки order5
    });
});


modelcomplair.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModelAir = model.textContent;
        selectedPrice = modelcomplairInfo6[selectedModelAir];

        // Удаляем границу у всех кнопок
        modelcomplair.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        priceElement.textContent = selectedPrice;
        priceElementForm50.textContent = selectedPrice;
                    
        selectedModelAir = model.textContent;

        updateOrder5ButtonState(); // Проверка состояния кнопки order5
    });
});


function updateOrder5ButtonState() {
    if (selectedModel && selectedModelAir) {
        order5.orderinactive = false;
        order5.classList.remove("orderinactive");
    } else {
        order5.orderinactive = true;
        order5.classList.add("orderinactive");
    }
}


order5.disabled = false;
order5.addEventListener("click", (event) => {
    if (!order5.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".modelcompl.selected").textContent;
        const selectedModelAir = document.querySelector(".modelcomplair.selected").textContent;
        const selectedPrice = modelcomplInfo5[selectedModel];
        const selectedPriceAir = modelcomplairInfo6[selectedModelAir];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPriceCompl = calculateTotalComplPrice(selectedPrice, selectedPriceAir, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора ";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-КОМПЛЕКТ";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена со скидкой: ${selectedPrice}
            Размер: ${selectedModelAir}
            Цена со скидкой: ${selectedPriceAir}
            Доставка: ${deliveryPrice}
            Общая цена: ${totalPriceCompl}
        `;
        // Добавьте обработчик для кнопки MainButton
        tg.MainButton.onClick(async () => {
            await sendMessageToBot(instructionMessage);
            await sendMessageToBotWithKeyboard(message, keyboard);
            
            tg.close();
        });
    }   
});

// Функция для вычисления общей цены
function calculateTotalComplPrice(price1, price2, price3) {
    const price1Numeric = parseInt(price1.replace("₽", "").replace(",", ""));
    const price2Numeric = parseInt(price2.replace("₽", "").replace(",", ""));
    const price3Numeric = parseInt(price3.replace("₽", "").replace(",", ""));
    const total = price1Numeric + price2Numeric + price3Numeric;
    return total + "₽";
}
//товар6zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn6.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form6").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order6.orderinactive = true;
    order6.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form6").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order6.orderinactive = false;
        order6.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm6.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order6.disabled = false;
order6.addEventListener("click", (event) => {
    if (!order6.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-MARSHMALLOW";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn7.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form7").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order7.orderinactive = true;
    order7.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form7").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

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
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить  через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-BLACK MANHATTAN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар8zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn8.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form8").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order8.orderinactive = true;
    order8.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form8").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order8.orderinactive = false;
        order8.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm8.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order8.disabled = false;
order8.addEventListener("click", (event) => {
    if (!order8.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-LAVENDER";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар9zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn9.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form9").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order9.orderinactive = true;
    order9.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form9").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order9.orderinactive = false;
        order9.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm9.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order9.disabled = false;
order9.addEventListener("click", (event) => {
    if (!order9.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-RED";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар10zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn10.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form10").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order10.orderinactive = true;
    order10.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form10").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order10.orderinactive = false;
        order10.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm10.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order10.disabled = false;
order10.addEventListener("click", (event) => {
    if (!order10.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-MILK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар11zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn11.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form11").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order11.orderinactive = true;
    order11.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form11").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order11.orderinactive = false;
        order11.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm11.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order11.disabled = false;
order11.addEventListener("click", (event) => {
    if (!order11.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-RED HEARTS";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар12zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn12.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form12").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order12.orderinactive = true;
    order12.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form12").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order12.orderinactive = false;
        order12.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm12.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order12.disabled = false;
order12.addEventListener("click", (event) => {
    if (!order12.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-GREEN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар13zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn13.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form13").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order13.orderinactive = true;
    order13.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form13").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
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

        order13.orderinactive = false;
        order13.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm13.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order13.disabled = false;
order13.addEventListener("click", (event) => {
    if (!order13.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE AIRPODS CASE-BLACK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар14zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn14.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form14").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order14.orderinactive = true;
    order14.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form14").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
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

        order14.orderinactive = false;
        order14.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm14.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order14.disabled = false;
order14.addEventListener("click", (event) => {
    if (!order14.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model4.selected").textContent;
        const selectedPrice = modelInfo4[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE AIRPODS CASE-GREY";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар15zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn15.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form15").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order15.orderinactive = true;
    order15.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form15").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order15.orderinactive = false;
        order15.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm15.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order15.disabled = false;
order15.addEventListener("click", (event) => {
    if (!order15.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-COFFEE";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар16zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn16.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form16").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order16.orderinactive = true;
    order16.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form16").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order16.orderinactive = false;
        order16.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm16.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order16.disabled = false;
order16.addEventListener("click", (event) => {
    if (!order16.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE DOUGH CASE-PINK HEARTS";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар17zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn17.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form17").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order17.orderinactive = true;
    order17.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form17").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order17.orderinactive = false;
        order17.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm17.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order17.disabled = false;
order17.addEventListener("click", (event) => {
    if (!order17.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-YELLOW";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар18zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn18.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form18").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order18.orderinactive = true;
    order18.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form18").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order18.orderinactive = false;
        order18.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm18.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order18.disabled = false;
order18.addEventListener("click", (event) => {
    if (!order18.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE DOUGH CASE-LAVENDER BUTTERFLIES";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар19zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn19.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form19").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order19.orderinactive = true;
    order19.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form19").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order19.orderinactive = false;
        order19.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm19.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order19.disabled = false;
order19.addEventListener("click", (event) => {
    if (!order19.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-BLUE HEARTS";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар20zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn20.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form20").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order20.orderinactive = true;
    order20.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form20").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order20.orderinactive = false;
        order20.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm20.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order20.disabled = false;
order20.addEventListener("click", (event) => {
    if (!order20.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-PINK";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар21zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn21.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form21").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order21.orderinactive = true;
    order21.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form21").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order21.orderinactive = false;
        order21.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm21.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order21.disabled = false;
order21.addEventListener("click", (event) => {
    if (!order21.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить  через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-GLAZED STRAWBERRY";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар22zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn22.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form22").style.display = "block";

    // Делаем кнопку "order3" неактивной
    order22.orderinactive = true;
    order22.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form22").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order22.orderinactive = false;
        order22.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm22.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



order22.disabled = false;
order22.addEventListener("click", (event) => {
    if (!order22.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE DOUGH CASE-CERULEAN BUTTERFLIES";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар23zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn23.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form23").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order23.orderinactive = true;
    order23.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form23").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order23.orderinactive = false;
        order23.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm23.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order23.disabled = false;
order23.addEventListener("click", (event) => {
    if (!order23.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-GLAZED DONUT";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар24zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn24.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form24").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order24.orderinactive = true;
    order24.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form24").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order24.orderinactive = false;
        order24.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm24.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order24.disabled = false;
order24.addEventListener("click", (event) => {
    if (!order24.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-WATERMELON";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар25zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn25.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form25").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order25.orderinactive = true;
    order25.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form25").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order25.orderinactive = false;
        order25.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm25.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order25.disabled = false;
order25.addEventListener("click", (event) => {
    if (!order25.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-BUTTER";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
//товар26zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn26.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form26").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order26.orderinactive = true;
    order26.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form26").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model3.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo3[selectedModel];

        // Удаляем границу у всех кнопок
        model3.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order26.orderinactive = false;
        order26.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm26.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order26.disabled = false;
order26.addEventListener("click", (event) => {
    if (!order26.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model3.selected").textContent;
        const selectedPrice = modelInfo3[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE SOAP CASE-SUGAR COATED";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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

//товар27zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn27.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form27").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order27.orderinactive = true;
    order27.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form27").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order27.orderinactive = false;
        order27.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm27.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order27.disabled = false;
order27.addEventListener("click", (event) => {
    if (!order27.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-BLACK MANHATTAN";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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

//товар28zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn28.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form28").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order28.orderinactive = true;
    order28.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form28").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order28.orderinactive = false;
        order28.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm28.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order28.disabled = false;
order28.addEventListener("click", (event) => {
    if (!order28.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-MIRROR";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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

//товар29zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn29.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form29").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order29.orderinactive = true;
    order29.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form29").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order29.orderinactive = false;
        order29.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm29.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order29.disabled = false;
order29.addEventListener("click", (event) => {
    if (!order29.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-DRAMA";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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


//товар30zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz//
btn30.addEventListener("click", () => {
    document.getElementById("thepuffercase").style.display = "none";
    document.getElementById("form30").style.display = "block";

    // Делаем кнопку "order2" неактивной
    order30.orderinactive = true;
    order30.classList.add("orderinactive");

    backButton.show();

    backButton.onClick(() => {
        document.getElementById("thepuffercase").style.display = "block";
        document.getElementById("form30").style.display = "none";
        tg.MainButton.hide();
        backButton.hide();
    });
});


model1.forEach(model => {
    model.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
                    
        selectedModel = model.textContent;
        selectedPrice = modelInfo1[selectedModel];

        // Удаляем границу у всех кнопок
        model1.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.border = "none";
        });

        // Добавляем класс selected к выбранной кнопке
        model.classList.add("selected");
                    
        // Обновляем стиль выбранной кнопки
        model.style.border = "1px solid black";

        order30.orderinactive = false;
        order30.classList.remove("orderinactive");

        priceElement.textContent = selectedPrice;
        priceElementForm30.textContent = selectedPrice;
                    
        selectedModel = model.textContent;
    });
});



// Добавьте обработчик события click для кнопки "Add"
order30.disabled = false;
order30.addEventListener("click", (event) => {
    if (!order30.disabled) {
        event.preventDefault();
        
        // Получаем выбранную модель и цену
        const selectedModel = document.querySelector(".model1.selected").textContent;
        const selectedPrice = modelInfo1[selectedModel];

        // Вычисляем общую цену
        const deliveryPrice = "199₽";
        const totalPrice = calculateTotalPrice(selectedPrice, deliveryPrice);
        
        // Обновляем текст и видимость кнопки MainButton
        tg.MainButton.text = "Оплатить через оператора";
        tg.MainButton.show();
        
        // Сохраняем выбранные данные для передачи боту
        const itemName = "THE PUFFER CASE-DEMON";
        const instructionMessage = 'Скопируйте ваш заказ ниже и отправьте в чат с оператором';
        const message = `
            Заказ: ${itemName}
            Размер: ${selectedModel}
            Цена: ${selectedPrice}
            Доставка: ${deliveryPrice}
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
                url: "https://t.me/operpuff",
            }
        ]
    ]
};







tg.expand();