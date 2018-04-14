# timeoutModal
jQuery модальное окно по таймауту

# Зависимости
1. <a href="https://jquery.com/download/" target="_blank">Библиотека jQuery</a>
2. <a href="https://plugins.jquery.com/cookie/" target="_blank">Плагин jQuery Cookie</a>

# Вызов функции
1. (#timeoutPopup) - айдишник попапа.
2. (10) - секунды, задаём нужное кол-во.

```javascript
$(document).ready(function () {
 
    var openTimeoutPopup = new TimeoutPopup('#timeoutPopup', 10);
    openTimeoutPopup.init();

});
```

# HTML разметка попапа
1. (#timeoutPopup) - айдишник попапа.
2. (timeoutPopup__close) - кнопка закрытия попапа.
3. (timeoutPopup__content) - сюда помещаем наш контент.
```html
<div class="timeoutPopup timeoutPopup_hidden" id="timeoutPopup"> 
    <div class="timeoutPopup__wrapper"> 
        <div class="timeoutPopup__close"></div> 
        <div class="timeoutPopup__content"></div> 
    </div> 
</div>
```

# СSS стили попапа
```css
.timeoutPopup {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: -ms-flexbox;
    display: flex;
    overflow: auto;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    background: rgba(0, 0, 0, .7);
    z-index: 999;
    visibility: visible;
    opacity: 1;
    transition: opacity .1s linear, visibility .1s linear, background .1s linear
}

.timeoutPopup_hidden {
    visibility: hidden;
    opacity: 0;
    background: transparent
}

.timeoutPopup_hidden .timeoutPopup__wrapper {
    top: -100%;
    visibility: hidden;
    opacity: 0
}

.timeoutPopup__wrapper {
    margin: 30px 0;
    position: relative;
    max-width: 1200px;
    visibility: visible;
    opacity: 1;
    transition: opacity .4s linear, visibility .4s linear, top .4s linear
}

.timeoutPopup__content {
    background: #2d2d2d;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    padding: 40px 30px
}

.timeoutPopup__close {
    position: absolute;
    right: -21px;
    top: -21px;
    width: 42px;
    height: 42px;
    background: url(../img/timeoutPopup__close.png) no-repeat
}
```


