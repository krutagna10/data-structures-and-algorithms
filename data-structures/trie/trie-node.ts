/**
 * Class representing a trie node
 */
class TrieNode {
  charToNode: Map<string, TrieNode>;
  isEndOfWord: boolean;

  /**
   * Creates a trie node instance
   */
  constructor() {
    this.charToNode = new Map();
    this.isEndOfWord = false;
  }
} 

export default TrieNode;