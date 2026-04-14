# Домашнее задание к занятию "3. Обработка событий"

## Игра с гоблинами

[![build](https://github.com/sergetfep/ahj-events-goblin-game/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/sergetfep/ahj-events-goblin-game/actions/workflows/pages.yml)

## Github Pages

Ссылка: [Игра с гоблинами](https://sergetfep.github.io/ahj-events-goblin-game)

## Описание

Сделана доработка игры из предыдущего задания:

- гоблин появляется в случайной ячейке на 1 секунду;
- клик по гоблину даёт +1 к счёту и сразу убирает его с поля;
- после 5 пропусков игра завершается;
- логика разбита на классы `GameBoard`, `ScoreBoard` и `GameController`.

Для оформления добавлен курсор-молоток и простая панель со счётом, промахами и текущим статусом игры.

## Команды

```bash
yarn install
yarn start
yarn build
yarn lint
yarn test
```

## Структура

- `src/js/GameBoard.js` — отрисовка поля;
- `src/js/ScoreBoard.js` — счёт и сообщения;
- `src/js/GameController.js` — игровая логика;
- `src/js/helpers.js` — выбор следующей ячейки.

## Ссылка за задание

Ссылка: [3. Обработка событий](https://github.com/netology-code/ahj-homeworks/tree/AHJ-50/events)
