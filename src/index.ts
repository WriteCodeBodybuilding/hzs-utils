export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


export function desensitizePhoneNumber(num: string): string {
  return num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

export function desensitizeEmail(email: string): string {
  let emailArray = email.split('@');
  return emailArray[0].replace(/(\w{3})\w*(\w{2})/, '$1****$2') + '@' + emailArray[1];
}

export function desensitizeIdCard(idCard: string): string {
  return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
}

export function desensitizeName(name: string): string {
  return name.replace(/^(.)(.*)$/, '*$2');
}


export function throttle<T extends (...args: any[]) => any>(func: T, wait: number = 500, immediate: boolean = true): T {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let flag = false;

  const throttled = (...args: Parameters<T>): void => {
    if (immediate) {
      if (!flag) {
        flag = true;
        // 如果是立即执行，则在 wait 毫秒内开始时执行
        func(...args);
        timer = setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      // 如果是非立即执行，则在 wait 毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false;
        func(...args);
      }, wait);
    }
  };

  return throttled as T;
}




export function debounce<T extends (...args: any[]) => any>(func: T, wait: number = 500, immediate: boolean = false): T {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);

      if (callNow) {
        func(...args);
      }
    } else {
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    }
  };

  return debounced as T;
}



export function deepClone(obj: any, cache: WeakMap<any, any> = new WeakMap()): any {
  if (obj === null || typeof obj !== 'object') return obj;
  if (cache.has(obj)) return cache.get(obj);

  let clone: any;

  if (obj instanceof Date) {
    clone = new Date(obj.getTime());
  } else if (obj instanceof RegExp) {
    clone = new RegExp(obj);
  } else if (obj instanceof Map) {
    clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
  } else if (obj instanceof Set) {
    clone = new Set(Array.from(obj, value => deepClone(value, cache)));
  } else if (Array.isArray(obj)) {
    clone = obj.map(value => deepClone(value, cache));
  } else if (typeof obj === 'object') {
    clone = Object.create(Object.getPrototypeOf(obj));
    cache.set(obj, clone);
    for (const [key, value] of Object.entries(obj)) {
      clone[key] = deepClone(value, cache);
    }
  } else {
    clone = Object.assign({}, obj);
  }

  cache.set(obj, clone);
  return clone;
}


export function getQueryParams(
  data: Record<string, any> = {},
  isPrefix: boolean = true,
  arrayFormat: 'indices' | 'brackets' | 'repeat' | 'comma' = 'brackets'
): string {
  const prefix = isPrefix ? '?' : '';
  const _result: string[] = [];

  if (!['indices', 'brackets', 'repeat', 'comma'].includes(arrayFormat)) {
    arrayFormat = 'brackets';
  }

  for (const key in data) {
    const value = data[key];

    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      continue;
    }

    // 如果值为数组，另行处理
    if (Array.isArray(value)) {
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) {
            _result.push(`${key}[${i}]=${value[i]}`);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          let commaStr = '';
          value.forEach((_value) => {
            commaStr += (commaStr ? ',' : '') + _value;
          });
          _result.push(`${key}=${commaStr}`);
          break;
        default:
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
      }
    } else {
      _result.push(`${key}=${value}`);
    }
  }

  return _result.length ? prefix + _result.join('&') : '';
}

export function isEmail(value: string): boolean {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

export function isMobile(value:string): boolean {
  return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value)
}


export function isIdCard(value:string):boolean {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
  )
}