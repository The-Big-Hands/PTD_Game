const rollbtn = document.getElementById('rollbtn'); 
const bankBtn = document.getElementById('bankbtn');
const gameBtn = document.getElementById('gamebtn');
const diceimg = document.querySelector('.dice');



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
// Player: 이름, 현재 점수, 총 점수 정보를 갖고있는 객체
class Player{
  constructor(name){
    this.currentScore = 0
    this.totalScore = 0
    this.name = name
  }
  // 현재 점수를 총점에 더합니다.(Bank)
  addTotal(){
    this.totalScore+=this.currentScore
  }
  // 주사위 결과를 현재 점수에 더합니다.(Roll)
  addCurrent(score){
    this.currentScore+=score
  }
}


rollbtn.addEventListener('click', () => {
  let n = rollDice();
  diceimg.src = `/images/${n}.png`;
})

// 주사위를 던진 결과 값을 반환해주는 함수(Roll)
function rollDice(){
  return Math.floor(Math.random() * 6)+1
}
