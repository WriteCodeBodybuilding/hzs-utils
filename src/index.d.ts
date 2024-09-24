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
}

declare module 'hzs-utils' {
    export = dipUtils
}
