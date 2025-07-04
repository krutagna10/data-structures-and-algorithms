import TrieNode from "@/data-structures/trie/trie-node";

/**
 * Class representing a trie
 */
class Trie {
  root: TrieNode;

  /**
   * Creates a trie instance
   */
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Adds a word in trie
   * @param {string} word - The word to be added
   * @returns {void}
   */
  add(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.charToNode.has(char)) {
        node.charToNode.set(char, new TrieNode());
      }
      node = node.charToNode.get(char);
    }
    node.isEndOfWord = true;
  }

  /**
   * Checks whether trie contains a word
   * @param {string} word - The word to be searched
   * @returns {boolean} - `true` if word exists in trie, `false` otherwise
   */
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

  /**
   * Checks whether a word starts with prefix
   * @param {string} prefix - The prefix to check with in the trie
   * @returns {boolean} - `true` if a word starts with prefix, `false` otherwise
   */
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
