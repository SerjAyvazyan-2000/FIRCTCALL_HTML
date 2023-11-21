

// Определение функции прокрутки вверх
function srollBottom() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Обработчик скачивания
function handleDownload(type) {
    console.log('Download ' + type);
    // Ваша логика обработки скачивания
}

// Обработчик клика по бургер-меню
function handleClick() {
    const menuContainer = document.getElementById('menuContainer');
    const burgerMenu = document.getElementById('burgerMenu');
    console.log('Burger menu clicked');
    // Ваша логика обработки клика по бургер-меню
}

// Обработчик наведения на кнопку
function onMouseOver() {
    // Ваша логика при наведении на кнопку
}

// Обработчик ухода курсора с кнопки
function onMouseOut() {
    // Ваша логика при уходе курсора с кнопки
}

// Симуляция хука useEffect
function useEffect(callback, dependencies) {
    callback();
    return cleanup; // Очищаем обработчик при следующем вызове эффекта
}

// Функция для регистрации обработчика прокрутки
function registerScrollHandler() {
    window.addEventListener("scroll", handleScroll);
}

// Функция для очистки обработчика прокрутки
function cleanup() {
    window.removeEventListener("scroll", handleScroll);
}

// Функция обработки события прокрутки
function handleScroll() {
    const scrollY = window.scrollY;
    scrollLine = scrollY;
    const rotationValue = scrollY * 0.5;
    rotation = rotationValue;
    // Ваша логика при прокрутке
}

// Функция рендеринга
function render() {
    // Ваша логика рендеринга
    console.log("Scale:", scale);
    console.log("Scroll Line:", scrollLine);
    console.log("Rotation:", rotation);
}

// Инициализация переменных
let scale = false;
let scrollLine = 0;
let rotation = 0;

// Вызов функций
useEffect(() => {
    // Логика, выполняемая при монтировании компонента
    registerScrollHandler();
}, []);

document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector('.our_telephone_sales_section');

    // Ваш код для определения видимости секции (например, использование Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });

    observer.observe(section);
});

// Рендеринг
render();