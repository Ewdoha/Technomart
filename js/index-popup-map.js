const mapImage = document.querySelector('.map-image');
const popupMap = document.querySelector('.popup-map');
const buttonPopupMapClose = document.querySelector('.button-popup-map-close');


        mapImage.addEventListener('click', function (evt) {
            evt.preventDefault();
            popupMap.classList.add('popup-map-show');
        });

        buttonPopupMapClose.addEventListener('click', function (evt) {
            evt.preventDefault();
            popupMap.classList.remove('popup-map-show');
        });

        window.addEventListener('keydown', function (evt) {
            if (evt.keyCode === 27) {
              if  (popupMap.classList.contains('popup-map-show')) {
                evt.preventDefault();  
                popupMap.classList.remove('popup-map-show');
              }
                
            }
        });