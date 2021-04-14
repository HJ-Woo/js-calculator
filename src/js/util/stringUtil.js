const OVER_NUMBER = /(\d+){3,}/;

export function validOverNumber(input) {
  if (input.match(OVER_NUMBER) !== null) {
    alert("숫자는 세 자리까지만 입력 가능합니다!");
    return false;
  }
  return true;
}

export function validNoNumber(input) {
  if (input === '0') {
    return true;
  }
  return false;
}