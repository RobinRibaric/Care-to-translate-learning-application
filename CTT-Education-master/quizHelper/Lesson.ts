export default class Lesson {
  constructor(name) {
    this.name = name;

    this.score = 0;
    this.currentPage = 1;
    this.pageState = 'start';
  }

  addPage() {
    this.currentPage += 1;
  }

  addScore() {
    this.score += 1;
  }

  resetGame() {
    this.score = 0;
    this.pageState = 'start';
    this.currentPage = 1;
  }
}
