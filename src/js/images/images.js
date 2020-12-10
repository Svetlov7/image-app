const popup = require('../popup/popup');
const services = require('../services/services');

module.exports = (function () {
    const config = {
        wrapper: '[data-img-container]',
        prevButton: '[data-prev]',
        nextButton: '[data-next]',
    }

    const $wrapper = document.querySelector(config.wrapper);
    const $prevButton = document.querySelector(config.prevButton);
    const $nextButton = document.querySelector(config.nextButton);

    function handler() {
        $wrapper.addEventListener('click', onImgClick);
    }


    function loopImgItem(data) {
        let pictures = data.pictures;
        let isPageAlreadyExist = document.querySelectorAll(`[data-item-paged="${data.page}"]`);
        let itemsAll = document.querySelectorAll(`[data-item-paged]`);

        if (isPageAlreadyExist.length > 0) {
            hideAllItem();

            isPageAlreadyExist.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            hideAllItem();
            pictures.forEach(item => {
                $wrapper.insertAdjacentHTML('beforeend', renderImgItem(item.cropped_picture, item.id, data.page));
            })
        }

        function hideAllItem() {
            itemsAll.forEach(item => {
                item.style.display = 'none';
            });
        }
    }


    function onImgClick(e) {
        let target = e.target;

        if (target.classList.contains('img__item')) {
            target.classList.add('selected');
            services.initValidation()
                .then(res => res)
                .then(res => services.getImagesById(res.token, target.dataset.imgId))
                .then(res => {
                    popup.insertLightBoxPopup(res);
                })
                .catch(err => console.log(err));
        }
        hideButtonsSliderByIndex()
    }

    function hideButtonsSliderByIndex() {
        let nodes = Array.prototype.slice.call(document.querySelectorAll('.img__item')),
            elementPosition = document.getElementsByClassName('selected')[0];

        if (nodes.indexOf(elementPosition) == 0) {
            $prevButton.setAttribute("disabled", 'disabled');
        } else {
            $prevButton.removeAttribute("disabled");
        }
        if (nodes.indexOf(elementPosition) == nodes.length - 1) {
            $nextButton.setAttribute("disabled", 'disabled');
        } else {
            $nextButton.removeAttribute("disabled");
        }
    }

    function renderImgItem(src, id, paged) {
        return `
       <div class="img__item" data-img-id="${id}" data-item-paged="${paged}">
            <img src="${src}" alt="">
        </div>
    `
    }

    return {
        loopImgItem,
        handler,
    }
})();

