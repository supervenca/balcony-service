const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('works_popup');
    imgPopup.style.display = 'none';

    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        //если кликлнул на подложку
        if (target && target.matches('div.works_popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });

};

export default images;