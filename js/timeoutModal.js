(function ($) {
 
    var TimeoutPopup = function (popuptItem, timeoutNumber) {
        /**
         * Функция появления попапа после таймаута
         */
 
        var self = this;
        var timeoutMinutes = timeoutNumber * 1000;
        var getCookie = $.cookie('timeoutPopup');
 
        self.setPopupCookie = function () {
            /**
             * Задаём куку при помощи плагина jQuery Cookie
             */
            $.cookie('timeoutPopup', {
                expires: 1,
                path: '/'
            });
        }
 
        self.openPopup = function () {
            /**
             * Перед открытием попапа проверим наличие куки
             * и не будет ничего делать если её нету
             */
            if (getCookie) {
                return false;
            } else {
                self.setPopupCookie();
                $(popuptItem).removeClass('timeoutPopup_hidden');
            }
        }
 
        self.closePopupHandler = function () {
            /**
             * Обработчик закрытия попапа
             */
            $(popuptItem).on('click', function (event) {
                if ($(event.target).is(popuptItem) || $(event.target).is('.timeoutPopup__close')) {
                    $(popuptItem).addClass('timeoutPopup_hidden');
                } else {
                    return false;
                }
 
            });
        }
 
        self.timeoutEnd = function () {
            /**
             * Устанавливаем значение секунд таймаута, 
             * по истечение которой будет открываться попап
             */
            setTimeout(function () {
                self.openPopup();
            }, timeoutMinutes);
        }
 
        self.init = function () {
            /**
             * Для начала проверим наличие попапа в DOM
             */
            if ($(popuptItem).length != 0) {
                self.timeoutEnd();
                self.closePopupHandler();
            } else {
                return false;
            }
        }
 
    }
 
    $(document).ready(function () {
 
        var openTimeoutPopup = new TimeoutPopup('#timeoutPopup', 10);
        openTimeoutPopup.init();
 
    });
 
})(jQuery);