import '../css/style.css';
const services = require('./services/services');
const images = require('./images/images');
const pagination = require('./pagination/pagination');
const popup = require('./popup/popup');

images.handler();
popup.handler();
pagination.handler();



services.initValidation()
    .then(res => res)
    .then(res => services.getImagesByPage(res.token,1)
    .then(res =>{
        images.loopImgItem(res);
        //show initial number page
        pagination.showInfo(res.pageCount);
    })
    .catch(err => console.log(err)));





