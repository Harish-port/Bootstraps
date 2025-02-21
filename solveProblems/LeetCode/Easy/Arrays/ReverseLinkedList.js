// Reverse Linked List
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []

// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next; // Store next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev forward
    current = nextNode; // Move current forward
  }

  return prev; // New head of the reversed list
}

// // Helper function to create a linked list from an array
// function arrayToLinkedList(arr) {
//     if (arr.length === 0) return null;
//     let head = new ListNode(arr[0]);
//     let current = head;
//     for (let i = 1; i < arr.length; i++) {
//         current.next = new ListNode(arr[i]);
//         current = current.next;
//     }
//     return head;
// }

// // Helper function to convert linked list to array (for easy visualization)
// function linkedListToArray(head) {
//     let result = [];
//     while (head) {
//         result.push(head.val);
//         head = head.next;
//     }
//     return result;
// }

// // Example Usage
// let head = arrayToLinkedList([0, 1, 2, 3]); // Convert array to linked list
// let reversedHead = reverseLinkedList(head); // Reverse the linked list
// console.log(linkedListToArray(reversedHead)); // Convert back to array and print
