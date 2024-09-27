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
}

declare module 'hzs-utils' {
    export = dipUtils
}
