function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const dict = new Set(wordList);
  if (!dict.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]];
  const visited = new Set<string>([beginWord]);

  while (queue.length) {
    const [word, depth] = queue.shift()!;
    const chars = word.split('');

    for (let i = 0; i < chars.length; i++) {
      const original = chars[i];
      for (let code = 97; code <= 122; code++) {
        const c = String.fromCharCode(code);
        if (c === original) continue;
        chars[i] = c;
        const nextWord = chars.join('');

        if (nextWord === endWord) {
          return depth + 1;
        }
        if (dict.has(nextWord) && !visited.has(nextWord)) {
          visited.add(nextWord);
          queue.push([nextWord, depth + 1]);
        }
      }
      chars[i] = original;
    }
  }

  return 0;
}