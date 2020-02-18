export default class Jyanken {
  constructor() {
    this.scores = []
    this.statuses = [0, 0, 0]
  }
  pon(human_hand) {
    const computer_hand = Math.floor(Math.random() * 3)
    const judgment = (computer_hand - human_hand + 3) % 3
    this.scores.push({human: human_hand, computer: computer_hand, created_at: new Date(), judgment: judgment})
    this.statuses[judgment]++
  }
  getScores() {
    return this.scores.slice().reverse()
    //reverse()メッソドは配列の内容を反転させる、最新の勝敗を先頭になるようにしている
    //slice()メッソドは配列の内容をコピーする、reverse()メッソドは配列の内容を書き換えてしまうのでslice()メッソドを使用している
  }
  getStatuses() {
    return {draw: this.statuses[0], win: this.statuses[1], lose: this.statuses[2]}
  }
}