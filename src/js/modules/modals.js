const modals = () => {
    function bindModal(triggerSelector, modalSelector,closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        //открытие модальных окон для разных триггеров через перебор массива
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                //проверяем, что event target (то, куда кликаем) существует
                if (e.target) {
                    //отмена перезагрузки страницы (при нажатии на элемнты типа <a>
                    e.preventDefault();
                }
                modal.style.display = "block";
                //запрет прокрутки при открытом модальном окне. класс из bootstrap
                document.body.classList.add('modal-open');

            });
        });
        //закрытие модального окна нажатием на элемент (крестик)
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        });
        //закрытие модального окна нажатием на серую зону (вне модального окна)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
            }
        });
    }

    //выскакивание модального окна по таймеру
    function showModalByTime (selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup','.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;