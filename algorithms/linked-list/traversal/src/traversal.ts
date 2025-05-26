import ListNode from "../../../../data-structures/linked-list/singly-linked-list/src/list-node";

function traversal<T>(head: ListNode<T>): void {
  let curr = head;
  while (curr) {
    curr = curr.next;
  }
}

export default traversal;
