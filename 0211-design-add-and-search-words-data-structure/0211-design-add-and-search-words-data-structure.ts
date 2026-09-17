interface Dict {
  [key: string]: Dict
}

class WordDictionary {
  private dict: Dict

  constructor() {
    this.dict = {}
  }

  addWord(word: string): void {
    const chars = word.split('')

    let acc = this.dict

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]

      if (!acc[char]) acc[char] = {} 

      acc = acc[char]
    }

    acc['_'] = {}
  }

  search(word: string, acc: Dict = this.dict): boolean {
    const chars = word.split('')
    const char = chars[0]

    if (chars.length === 0 && acc['_']) return true

    if (char === '.') {
      for (let key in acc) {
        if (this.search(word.slice(1), acc[key])) return true
      }

      return false
    } else if (!acc[char]) return false

    return this.search(word.slice(1), acc[char])
  }
}