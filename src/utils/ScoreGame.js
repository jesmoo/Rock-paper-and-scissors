class ScoreGame {
  constructor() {
    this.score = 0;
    this.comps = 0;
    this.comps2 = 0;
    this.computer = 0;
  }
  sumScore() {
    if (this.comps % 2 === 0) this.score++;
    this.comps++;
  }
  loseScore() {
    if (this.comps2 % 2 === 0) {
      if (this.score > 0) this.score = this.score - 1;
    }
    this.comps2++;
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
