// 주사위를 던진 결과 값을 반환해주는 함수(Roll)
function rollDice(){
  return Math.floor(Math.random() * 6)+1
}
console.log(rollDice())