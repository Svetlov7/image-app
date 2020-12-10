const services = require('../services/services');

module.exports = (function () {
    const config = {
        popup: '.popup',
        insertWrapperPopup: '[data-area-insert]',
        closePopup: '[data-popup-close]',
        nextButton: '[data-next]',
        prevButton: '[data-prev]',
    }
    const $body = document.querySelector('body');
    const $popup = document.querySelector(config.popup);
    const $popupInsertingArea = $popup.querySelector(config.insertWrapperPopup);
    const $closePopupEl = $popup.querySelector(config.closePopup);
    const $nextButton = $popup.querySelector(config.nextButton);
    const $prevButton = $popup.querySelector(config.prevButton);

    function handler() {
        $popup.addEventListener('click', shareLink);
        $closePopupEl.addEventListener('click', popupClose);
        $nextButton.addEventListener('click', showNextImg);
        $prevButton.addEventListener('click', showPrevImg);
    }

    function popupShow() {
        $popup.classList.remove('disable');
        $body.classList.add('no-scroll');
    }

    function popupClose() {
        $popup.classList.add('disable');
        clearContentPopup();
        let selectedEl = document.querySelector('.selected');
        selectedEl.classList.remove('selected');
        $body.classList.remove('no-scroll');
    }

    function clearContentPopup() {
        $popup.querySelector('.popup__content').remove();
    }

    function shareLink(e) {
        let target = e.target;
        if (target.classList.contains('js-button')) {
            let input = target.parentNode.querySelector('input');
            input.select();
            document.execCommand("copy");
            alert("Copied the text: " + input.value);
        }
    }

    function insertLightBoxPopup(data) {
        $popupInsertingArea.insertAdjacentHTML('beforeend', renderLightBoxPopup(data));
    }

    function showNextImg() {
        const images = document.querySelectorAll('.img__item');
        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('selected')) {
                images[i].classList.remove('selected');
                let nextImage = images[i += 1];
                clearContentPopup();
                services.initValidation()
                    .then(res => res)
                    .then(res => services.getImagesById(res.token, nextImage.dataset.imgId))
                    .then(res => {
                        insertLightBoxPopup(res);
                    });
                nextImage.classList.add('selected');

                if (i == [images.length - 1]) {
                    this.setAttribute("disabled", "disabled");
                }
                $prevButton.removeAttribute("disabled");
            }
        }
    }

    function showPrevImg() {
        const images = document.querySelectorAll('.img__item');
        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('selected')) {
                images[i].classList.remove('selected');
                let prevImage = images[i -= 1];
                clearContentPopup();
                services.initValidation()
                    .then(res => res)
                    .then(res => services.getImagesById(res.token, prevImage.dataset.imgId))
                    .then(res => {
                        window.savedImgs = {...window.savedImgs,...{[res.id]:res}};
                        insertLightBoxPopup(res);
                    });
                prevImage.classList.add('selected');
                if (i == 0) {
                    this.setAttribute("disabled", "disabled");
                }
                $nextButton.removeAttribute("disabled");
            }
        }
    }

    function renderLightBoxPopup(data) {
        popupShow();
        return `
            <div class="popup__content">
                <img src="${data.full_picture}" alt="">
                <div class="popup__info">
                <div class="popup__info-content">
                    <p>Author: ${data.author}</p>
                    <p>Camera: ${data.camera}</p>
                    <p class="popup__info-tags">${data.tags}</p>
               </div>
                    <button class="popup__info-button js-button">Share</button>
                    <input type="text" class="input__link--hidden" value="${data.full_picture}">
                </div>
           </div>
    `
    }

    return {
        insertLightBoxPopup,
        handler
    }
})();