const services = require('../services/services');
const images = require('../images/images');

module.exports = (function () {
    const config = {
        infoPagination: '[data-info]',
    }
    const $buttonNext = document.querySelector('[data-page-next]');
    const $buttonPrev = document.querySelector('[data-page-prev]');
    const $infoPagination = document.querySelector(config.infoPagination);
    let currentPage = 1;

    function handler() {
        $buttonNext.addEventListener('click', changePage);
        $buttonPrev.addEventListener('click', changePage);
    }

    function changePage() {

        if (this.hasAttribute('data-page-prev')) {
            currentPage--;
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            currentPage++;
            window.scrollTo({
                top: 0,
            });
        }
        services.initValidation()
            .then(res => res)
            .then(res => services.getImagesByPage(res.token, currentPage)
                .then(res => {
                    showInfo(res.pageCount);
                    images.loopImgItem(res);
                }));
        //write into url num of page
        window.location.href = `#page${currentPage}`;
    }

    function showInfo(totalPages) {
        $infoPagination.innerHTML = `
            <span class="page__info-number">${currentPage ? currentPage : 1}</span>
            <span>of</span>
            <span class="page__info-number">${totalPages}</span>
        `
        togglePaginationButtons(totalPages);
    }


    function togglePaginationButtons(totalPages) {
        if (currentPage == totalPages) {
            $buttonNext.setAttribute('disabled', 'disabled');
        } else {
            $buttonNext.removeAttribute('disabled');
        }


        if (currentPage == 1) {
            $buttonPrev.setAttribute('disabled', 'disabled');
        } else {
            $buttonPrev.removeAttribute('disabled');
        }

    }

    return {
        handler,
        showInfo,
    }
})();