export function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

export function getNextIndex(length, previousIndex = null) {
  if (length <= 1) {
    return 0;
  }

  let nextIndex = getRandomIndex(length);

  while (nextIndex === previousIndex) {
    nextIndex = getRandomIndex(length);
  }

  return nextIndex;
}
