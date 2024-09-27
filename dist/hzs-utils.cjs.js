'use strict';

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
function debounce(func, wait, immediate) {
    if (wait === void 0) { wait = 500; }
    if (immediate === void 0) { immediate = false; }
    var timeout = null;
    var debounced = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
            if (callNow) {
                func.apply(void 0, args);
            }
        }
        else {
            timeout = setTimeout(function () {
                func.apply(void 0, args);
            }, wait);
        }
    };
    return debounced;
}
function deepClone(obj, cache) {
    if (cache === void 0) { cache = new WeakMap(); }
    if (obj === null || typeof obj !== 'object')
        return obj;
    if (cache.has(obj))
        return cache.get(obj);
    var clone;
    if (obj instanceof Date) {
        clone = new Date(obj.getTime());
    }
    else if (obj instanceof RegExp) {
        clone = new RegExp(obj);
    }
    else if (obj instanceof Map) {
        clone = new Map(Array.from(obj, function (_a) {
            var key = _a[0], value = _a[1];
            return [key, deepClone(value, cache)];
        }));
    }
    else if (obj instanceof Set) {
        clone = new Set(Array.from(obj, function (value) { return deepClone(value, cache); }));
    }
    else if (Array.isArray(obj)) {
        clone = obj.map(function (value) { return deepClone(value, cache); });
    }
    else if (typeof obj === 'object') {
        clone = Object.create(Object.getPrototypeOf(obj));
        cache.set(obj, clone);
        for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            clone[key] = deepClone(value, cache);
        }
    }
    else {
        clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
}
function getQueryParams(data, isPrefix, arrayFormat) {
    if (data === void 0) { data = {}; }
    if (isPrefix === void 0) { isPrefix = true; }
    if (arrayFormat === void 0) { arrayFormat = 'brackets'; }
    var prefix = isPrefix ? '?' : '';
    var _result = [];
    if (!['indices', 'brackets', 'repeat', 'comma'].includes(arrayFormat)) {
        arrayFormat = 'brackets';
    }
    var _loop_1 = function (key) {
        var value = data[key];
        // 去掉为空的参数
        if (['', undefined, null].includes(value)) {
            return "continue";
        }
        // 如果值为数组，另行处理
        if (Array.isArray(value)) {
            switch (arrayFormat) {
                case 'indices':
                    // 结果: ids[0]=1&ids[1]=2&ids[2]=3
                    for (var i = 0; i < value.length; i++) {
                        _result.push("".concat(key, "[").concat(i, "]=").concat(value[i]));
                    }
                    break;
                case 'brackets':
                    // 结果: ids[]=1&ids[]=2&ids[]=3
                    value.forEach(function (_value) {
                        _result.push("".concat(key, "[]=").concat(_value));
                    });
                    break;
                case 'repeat':
                    // 结果: ids=1&ids=2&ids=3
                    value.forEach(function (_value) {
                        _result.push("".concat(key, "=").concat(_value));
                    });
                    break;
                case 'comma':
                    // 结果: ids=1,2,3
                    var commaStr_1 = '';
                    value.forEach(function (_value) {
                        commaStr_1 += (commaStr_1 ? ',' : '') + _value;
                    });
                    _result.push("".concat(key, "=").concat(commaStr_1));
                    break;
                default:
                    value.forEach(function (_value) {
                        _result.push("".concat(key, "[]=").concat(_value));
                    });
            }
        }
        else {
            _result.push("".concat(key, "=").concat(value));
        }
    };
    for (var key in data) {
        _loop_1(key);
    }
    return _result.length ? prefix + _result.join('&') : '';
}

exports.debounce = debounce;
exports.deepClone = deepClone;
exports.desensitizeEmail = desensitizeEmail;
exports.desensitizeIdCard = desensitizeIdCard;
exports.desensitizeName = desensitizeName;
exports.desensitizePhoneNumber = desensitizePhoneNumber;
exports.getQueryParams = getQueryParams;
exports.random = random;
exports.throttle = throttle;
