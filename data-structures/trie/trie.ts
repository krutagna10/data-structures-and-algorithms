class TrieNode {
  charToNode: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.charToNode = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.charToNode.has(char)) {
        node.charToNode.set(char, new TrieNode());
      }
      node = node.charToNode.get(char);
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.charToNode.has(char)) {
        return false;
      }
      node = node.charToNode.get(char);
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.charToNode.has(char)) {
        return false;
      }
      node = node.charToNode.get(char);
    }
    return true;
  }
}
