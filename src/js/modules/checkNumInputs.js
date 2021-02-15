const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            // если не число, то заменить на пустую строку
            item.value = item.value.replace(/\D/,'');
        });
    });
}

export default checkNumInputs;