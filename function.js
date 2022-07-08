// 주사위를 던진 결과 값을 반환해주는 함수(Roll)
function rollDice(){
  return Math.floor(Math.random() * 6)+1
}
console.log(rollDice())

// 게임: Player, Turn, Dice, Target Score 정보를 갖고있는 객체
// turn이 0이면 Player1의 turn
class Game{
  constructor(targetScore){
    this.setTargetScore(targetScore)
    this.turn = 0
  }
  // Target Score를 업데이트합니다.
  setTargetScore(targetScore){
    this.targetScore = targetScore
  }
  // Player리스트를 세팅합니다.
  setPlayers(playerList){
    // 넘겨받은 playerList를 this.playerList에 세팅합니다.
    for(let i=0; i<playerList.length; i++){
      this.playerList[i] = playerList[i]
    }
    // this.playerList = playerList
  }
  // 다음 턴으로 넘깁니다.
  nextTurn(){
    if(this.turn === 1){
      this.turn === 0
    }else{
      this.turn === 1
    }
  }
}
