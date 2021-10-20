class ScoreGame {
  constructor() {
    this.score = 0;
    this.computer = 0;
  }
  sumScore() {
    this.score++;
  }
  loseScore() {
    if (this.score > 0) this.score = this.score - 1;
  }
  numRandom() {
    this.computer = Math.floor(Math.random() * 3 + 1);
  }

  get ScoreNum() {
    return this.score;
  }
  get idComp() {
    return this.computer;
  }
}

const scoreClass = new ScoreGame();

export default scoreClass;
