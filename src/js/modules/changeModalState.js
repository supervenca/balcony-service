import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    //форма окна из калькулятора расчета стоимости
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
     windowWidth = document.querySelectorAll('#width'),
     windowHeight = document.querySelectorAll('#height'),
     windowType = document.querySelectorAll('#view_type'),
     windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Тёплое";
                            //пройтись по всем чекбоксам и убрать галочки со всех, кроме тех, на которые кликнул пользователь
                            element.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        }else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalState;

//сбор данных, введенных пользователем в форме-калькуляторе