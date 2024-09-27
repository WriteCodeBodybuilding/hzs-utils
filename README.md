<h1 align="center">前端常用工具函数</h1>

<p align="center">汇总常用工具函数</p>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/kingfront/hzs-utils" />
    <img src="https://img.shields.io/github/languages/top/kingfront/hzs-utils?style=flat-square&color=green"  alt="GitHub top language" />
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=github&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dkingfront&style=flat-square&logo=github" />
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/kingfront/hzs-utils?color=yellow">
</p>

---

## 简介

前端项目开发中，会经常使用一些工具函数，随着项目数量的增多、工具函数的增多，在每个项目里面都维护一个 util.js 会带来不少的麻烦，所以还是维护一个工具函数包，希望大家也一并 commit!

## 安装使用

### 1. 安装包使用方式

安装

```shell
# npm
npm install hzs-utils -S

# yarn
yarn add hzs-utils -S
```

ESM 导入使用

```js
import { random } from "hzs-utils";
console.log(random(1, 10));
```

RequireJS 导入使用

```js
const { random } = require("hzs-utils");
console.log(random(1, 10));
```

### 2. 网页 script 直接引入使用方式

直接拷贝 dist 下的 hzs-utils-umd.js 到项目里面，可直接引用

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="/dist/hzs-utils-umd.js"></script>
    <script>
      console.log(dutils.random(1, 10));
    </script>
  </body>
</html>
```

## 函数概览

```js
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


```
