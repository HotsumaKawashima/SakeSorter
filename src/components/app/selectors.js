export function getRandomSakes(sakes, count) {
  const set = new Set();
  const filtered = [];
  while(set.size < count) {
    const i = Math.floor(Math.random() * Math.floor(sakes.length));
    if(!set.has(i)) {
      set.add(i);
      filtered.push(sakes[i]);
    }
  }
  return filtered;
}
