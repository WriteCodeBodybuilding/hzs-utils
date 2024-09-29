declare namespace dipUtils {
    /**
     * 生成数字范围内的随机数
     * @param min 最小数字
     * @param max 最大数字
     * @returns number类型
     */
    export function random(min: number, max: number): number

    /**
     * @desc 手机号脱敏
     * @param {String} num 
     * @demo 155****8810  
     */
    export function desensitizePhoneNumber(num: string): string


    /**
     * @desc 电子邮件脱敏
     * @param {String} email 
     */
    export function desensitizeEmail(email: string): string

    /**
     * @desc 身份证号脱敏
     * @param {String} idCard 
     */
    export function desensitizeIdCard(idCard: string): string
    /**
     * @desc 姓名脱敏
     * @param {String} name 
     */
    export function desensitizeName(name: string): string

    /**
    * 节流函数
    * @param func - 要节流的函数
    * @param wait - 节流时间间隔，默认为 500 毫秒
    * @param immediate - 是否立即执行，默认为 true
    * @returns 节流后的函数
    */
    export function throttle<T extends (...args: any[]) => any>(func: T, wait: number = 500, immediate: boolean = true): T
    /**
     * 防抖函数
     * 防抖原理：一定时间内，只有最后一次操作，再过 wait 毫秒后才执行函数
     *
     * @param func 要执行的回调函数
     * @param wait 延时的时间，默认为 500 毫秒
     * @param immediate 是否立即执行，默认为 false
     * @returns 防抖后的函数
     */
    export function debounce<T extends (...args: any[]) => any>(func: T, wait: number = 500, immediate: boolean = false): T
    /**
     * 深度克隆
     * 
     * @param obj 需要深度克隆的对象
     * @param cache 缓存
     * @returns 克隆后的对象或者原值（不是对象）
     */
    export function deepClone(obj: any, cache: WeakMap<any, any> = new WeakMap()): any;

    /**
     * 将对象转换为 URL 参数字符串
     * 
     * @param data 需要转换的对象
     * @param isPrefix 是否自动加上 "?"
     * @param arrayFormat 数组格式化规则  例如data: {
                name: '冷月夜',
                fruits: ['apple', 'banana', 'orange']
            }
     * indices ?name=冷月夜&fruits[0]=apple&fruits[1]=banana&fruits[2]=orange
     * brackets ?name=冷月夜&fruits[]=apple&fruits[]=banana&fruits[]=orange     
     * repeat ?name=冷月夜&fruits=apple&fruits=banana&fruits=orange  
     * comma  ?name=冷月夜&fruits=apple,banana,orange

     * @returns 转换后的 URL 参数字符串
     */
    export function getQueryParams(
        data: Record<string, any> = {},
        isPrefix: boolean = true,
        arrayFormat: 'indices' | 'brackets' | 'repeat' | 'comma' = 'brackets'
    ): string
    /**
     * 验证电子邮箱格式
     * @param value 待验证的字符串
     * @returns 如果验证通过，返回true，否则返回false
     */
    export function isEmail(value: string): boolean
    /**
     * 验证手机格式
     * @param value 待验证的字符串
     * @returns 如果验证通过，返回true，否则返回false
     */
    export function isMobile(value: string): boolean
    /**
     * 验证身份证号码
     * @param value 待验证的字符串
     * @returns 如果验证通过，返回true，否则返回false
     */
    export function isIdCard(value: string): boolean

}

declare module 'hzs-utils' {
    export = dipUtils
}
