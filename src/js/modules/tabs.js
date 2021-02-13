const tabs = (headerSelector,tabSelector, contentSelector, activeClass) =>{
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i= 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        //из tabSelector(это придет класс) с помощью рег.выр. убираем точку из начала (заменяем на пустую строку)
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./,"")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./,"")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;

//делегирование событий: вешаем обработчик события на общий блок (header),
//а дальше отслеживаем, на какой именно таб кликнули
//затем мы перебираем массив табов
//как только выполнилось условие, что конкретный таб = таргету (т.е. произошло событие - на него кликнули
//вызываем функции - скрыть весь контент, показать контент по определенному индексу
// target.parentNode - родитель элемента, на котором произошло событие