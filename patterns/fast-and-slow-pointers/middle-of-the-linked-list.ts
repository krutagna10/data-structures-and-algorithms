import ListNode from "../../data-structures/linked-list/singly-linked-list/src/list-node";

/**
 * @template T - The type of value stored in the linked list
 * Finds the middle node of the linked list
 * @param {ListNode<T> | null} head - The head of the linked list
 * @returns {ListNode<T> | null} - The middle node of the linked list
 */
function middleNode<T>(head: ListNode<T> | null): ListNode<T> | null {
  let slow = head;
  let fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

export default middleNode;
