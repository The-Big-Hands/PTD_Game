// 게임: Player, Turn, Dice, Target Score 정보를 갖고있는 객체
// turn이 1이면 Player1의 turn, turn이 2면 Player2의 turn
class Game{
  constructor(targetScore){
    initGame()
    this.setTargetScore(targetScore)
    this.turn = 1
    // Player 초기화
    const player1 = new Player("PLAYER1")
    const player2 = new Player("PLAYER2")
    this.player1 = player1
    this.player2 = player2
  }
  // Target Score를 업데이트합니다.
  setTargetScore(targetScore){
    this.targetScore = targetScore
  }

  // 다음 턴으로 넘깁니다.
  nextTurn(){
    // 현재 턴의 플레이어 현재점수 0으로 초기화
    if(this.turn === 2){
      this.player2.currentScore = 0
      this.turn = 1
    }else{
      this.player1.currentScore = 0
      this.turn = 2
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
}
// 클래스 정의 끝

// 버튼 가져오기
const rollbtn = document.getElementById('rollbtn'); 
const bankBtn = document.getElementById('bankbtn');
const gameBtn = document.getElementById('gamebtn');
const diceimg = document.querySelector('.dice');
// 플레이어 총점 div 가져오기
let player_score = document.querySelectorAll('.player-score')
// 플레이어 현재점수 div 가져오기
let bank_scroe = document.querySelectorAll('.bank-score')

// target-score의 Default 값
let win_scroe = 50
// Game 초기화
let new_game = new Game(win_scroe)

// 라디오버튼 클릭되면 win_score값 변경
const radioList = document.getElementsByName("win-score")
for(const radioBtn of radioList){
  radioBtn.addEventListener('click', (e)=>{
    win_scroe = Number(e.target.value)
  }) 
}

// Roll 버튼 클릭 이벤트 리스너
rollbtn.addEventListener('click', () => {
  let n = rollDice();
  // 주사위 값에 따라 이미지 세팅
  diceimg.src = `./images/${n}.png`;
  // 주사위가 1이 나오면 현재 쌓인 점수 초기화하고 상대 턴으로 넘긴다.
  if(n ===1) {
    bank_scroe[new_game.turn-1].innerText = 0    
    new_game.nextTurn()
  }
  else{
    // 1이 아니라면 현재 점수에 주사위 값을 더한다.
    const temp = Number(bank_scroe[new_game.turn-1].innerText)
    bank_scroe[new_game.turn-1].innerText = temp+n
  }
})

// Bank 버튼 클릭 이벤트 리스너
bankBtn.addEventListener('click', ()=>{
  // 현재 턴 플레이어의 bank값을 저장합니다.
  const bank_temp = Number(bank_scroe[new_game.turn-1].innerText)
  // 현재 턴 플레이어의 총점을 저장합니다.
  const score_temp = Number(player_score[new_game.turn-1].innerText)
  // 두 값을 더해서 현재 턴 플레이어의 총점으로 만듭니다.
  player_score[new_game.turn-1].innerText = bank_temp+score_temp
  if(bank_temp + score_temp >=win_scroe){
    // 게임을 종료합니다.
    alert("우승: Player"+new_game.turn)
    initGame()
    return
  }
  bank_scroe[new_game.turn-1].innerText = 0
  new_game.nextTurn()
})

// New Game 버튼 클릭 이벤트 리스너
gameBtn.addEventListener('click', ()=>{
  // 게임 초기화
  new_game = new Game(win_scroe)
})

// 게임 초기화 함수
function initGame(){
  for(let i=0; i<player_score.length; i++){
    // 플레이어들의 총점, 현재점수 초기화
    player_score[i].innerText = 0
    bank_scroe[i].innerText=0
  }
}

// 주사위를 던진 결과 값을 반환해주는 함수
function rollDice(){
  return Math.floor(Math.random() * 6)+1
}