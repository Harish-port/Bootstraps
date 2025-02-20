// Link >>>  https://www.geeksforgeeks.org/linked-list-meaning-in-dsa/

// A linked list is a linear data structure used for storing a sequence of elements, where each element is stored in a node that contains both the element and a pointer to the next node in the sequence.

// Types of linked lists:
// Linked lists can be classified in the following categories

// Singly Linked List: This type of linked list consists of nodes that have a reference only to the next node in the list.
// Doubly Linked List: In a doubly linked list, each node has references to both the next and previous nodes in the list.
// Circular Linked List: This type of linked list is similar to a singly linked list, but the last node’s reference points to the first node, creating a circular structure.

// Reverse Linked List
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []
// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev forward
    current = next; // Move current forward
  }

  return prev; // New head of the reversed list
}

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }


// // Helper function to convert an array to a linked list
// function arrayToLinkedList(arr) {
//     let dummy = new ListNode();
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// // Helper function to convert linked list to an array for easy visualization
// function linkedListToArray(head) {
//     let result = [];
//     while (head !== null) {
//         result.push(head.val);
//         head = head.next;
//     }
//     return result;
// }

// // Example 1
// let head1 = arrayToLinkedList([0, 1, 2, 3]);
// console.log(linkedListToArray(reverseLinkedList(head1))); // Output: [3, 2, 1, 0]

// // Example 2
// let head2 = arrayToLinkedList([]);
// console.log(linkedListToArray(reverseLinkedList(head2)));