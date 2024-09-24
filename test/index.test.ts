import { random, desensitizePhoneNumber, desensitizeEmail, desensitizeIdCard, desensitizeName } from '../src/index'

//测试随机数
describe('生成数字范围内的随机数', () => {
  it('random(1, 1) -> should return 1', () => {
    const rand = random(1, 1)
    expect(rand).toBe(1)
  })
  it('random(1, 10) -> should return number', () => {
    const rand = random(1, 10)
    expect(rand).toBeNaN
  })
})


describe('手机号脱敏', () => {
  it(`desensitizePhoneNumber(18968795269) -> should return 189****5269`, () => {
    const phone = desensitizePhoneNumber('18968795269')
    expect(phone).toBe('189****5269')
  })
})

describe('手机号脱敏', () => {
  it(`desensitizeEmail(1819546721@qq.com) -> should return 181****21@qq.com`, () => {
    const email = desensitizeEmail('1819546721@qq.com')
    expect(email).toBe('181****21@qq.com')
  })
})


describe('身份证号脱敏', () => {
  it(`desensitizeEmail(330327200012165874) -> should return 330327********5874`, () => {
    const email = desensitizeIdCard('330327200012165874')
    expect(email).toBe('330327********5874')
  })
})


describe('姓名脱敏', () => {
  it(`desensitizeEmail(黄果树) -> should return *果树`, () => {
    const email = desensitizeName('黄果树')
    expect(email).toBe('*果树')
  })
})