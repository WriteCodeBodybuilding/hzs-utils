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

export function desensitizeName(name:string): string {
  return name.replace(/^(.)(.*)$/, '*$2');
}