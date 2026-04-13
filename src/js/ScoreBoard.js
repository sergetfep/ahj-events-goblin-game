export default class ScoreBoard {
  constructor(container) {
    this.container = container;
    this.root = null;
    this.hitsElement = null;
    this.missesElement = null;
    this.statusElement = null;
    this.messageElement = null;
  }

  render() {
    const panel = document.createElement('div');
    panel.classList.add('scoreboard');

    const hits = this.createStat('Попадания', '0');
    const misses = this.createStat('Промахи', '0');
    const status = this.createStat('Статус', 'Игра идёт');

    const message = document.createElement('p');
    message.classList.add('scoreboard__message');

    this.root = panel;
    this.hitsElement = hits.value;
    this.missesElement = misses.value;
    this.statusElement = status.value;
    this.messageElement = message;

    panel.append(hits.item, misses.item, status.item, message);
    this.container.append(panel);
  }

  createStat(labelText, valueText) {
    const item = document.createElement('div');
    item.classList.add('scoreboard__item');

    const label = document.createElement('span');
    label.classList.add('scoreboard__label');
    label.textContent = labelText;

    const value = document.createElement('span');
    value.classList.add('scoreboard__value');
    value.textContent = valueText;

    item.append(label, value);

    return { item, value };
  }

  updateScore(hits, misses) {
    this.hitsElement.textContent = String(hits);
    this.missesElement.textContent = String(misses);
  }

  setStatus(status) {
    this.statusElement.textContent = status;
  }

  setMessage(message) {
    this.messageElement.textContent = message;
  }
}
