const modals = () => {
    function bindModal(triggerSelector, modalSelector,closeSelector,closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        //открытие модальных окон для разных триггеров через перебор массива
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                //проверяем, что event target (то, куда кликаем) существует
                if (e.target) {
                    //отмена перезагрузки страницы (при нажатии на элемнты типа <a>
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                //запрет прокрутки при открытом модальном окне.
                document.body.style.overflow = "hidden";

            });
        });
        //закрытие модального окна нажатием на элемент (крестик)
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = "none";
            document.body.style.overflow = "";
        });
        //закрытие модального окна нажатием на серую зону (вне модального окна)
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    //выскакивание модального окна по таймеру
    function showModalByTime (selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup','.popup .popup_close');
    bindModal('.popup_calc_btn','.popup_calc','.popup_calc_close');
    bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button','.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
};

export default modals;