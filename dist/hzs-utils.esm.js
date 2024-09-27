function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function desensitizePhoneNumber(num) {
    return num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
}
function desensitizeEmail(email) {
    var emailArray = email.split('@');
    return emailArray[0].replace(/(\w{3})\w*(\w{2})/, '$1****$2') + '@' + emailArray[1];
}
function desensitizeIdCard(idCard) {
    return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
}
function desensitizeName(name) {
    return name.replace(/^(.)(.*)$/, '*$2');
}
function throttle(func, wait, immediate) {
    if (wait === void 0) { wait = 500; }
    if (immediate === void 0) { immediate = true; }
    var flag = false;
    var throttled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (immediate) {
            if (!flag) {
                flag = true;
                // 如果是立即执行，则在 wait 毫秒内开始时执行
                func.apply(void 0, args);
                setTimeout(function () {
                    flag = false;
                }, wait);
            }
        }
        else if (!flag) {
            flag = true;
            // 如果是非立即执行，则在 wait 毫秒内的结束处执行
            setTimeout(function () {
                flag = false;
                func.apply(void 0, args);
            }, wait);
        }
    };
    return throttled;
}

export { desensitizeEmail, desensitizeIdCard, desensitizeName, desensitizePhoneNumber, random, throttle };
