const enterUser = document.querySelector('.header-enter-link');
const popupWriteUs = document.querySelector('.popup-write-us');
let buttonPopupClose = document.querySelector('.button-popup-close');

const form = popupWriteUs.querySelector(".popup-write-us-form");
const login = popupWriteUs.querySelector("[name=login]");
const eMail = popupWriteUs.querySelector("[name=e-mail]");
const storage = localStorage.getItem('login');




        enterUser.addEventListener('click', function (evt) {
            evt.preventDefault();
            popupWriteUs.classList.add('popup-write-us-show');
            login.focus();
        });

        buttonPopupClose.addEventListener('click', function () {
            popupWriteUs.classList.remove('popup-write-us-show');
        });

        window.addEventListener('keydown', function (evt) {
            if (evt.keyCode === 27) {
              if  (popupWriteUs.classList.contains('popup-write-us-show')) {
                evt.preventDefault();  
                popupWriteUs.classList.remove('popup-write-us-show');
              }
                
            }
        });

        form.addEventListener('submit', function (evt) {
          if (!login.value || !eMail.value) {
            evt.preventDefault();
          } else {
            localStorage.setItem('login', login.value);
          };

          if (storage) {
            login.value = storage;
          }
        });

