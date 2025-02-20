// 📝 Steps to Merge Two Sorted Linked Lists
// 1️⃣ Create a dummy node to simplify list merging.
// 2️⃣ Initialize a pointer (current) to track the merged list.
// 3️⃣ Use a while loop to compare nodes from list1 and list2:

// If list1.val < list2.val → Attach list1 to current, move list1 forward.
// Else → Attach list2 to current, move list2 forward.
// Move current to current.next.
// 4️⃣ After the loop, one list might still have remaining nodes.
// 5️⃣ Attach the remaining nodes using:
// js
// Copy
// Edit
// current.next = list1 !== null ? list1 : list2;
// 6️⃣ Return dummyHead.next, which is the merged list's head.

// Without current = current.next;, current would always point to the dummy node or the same node without moving forward.
// Ensures we are always adding new nodes to the end of the merged list.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function mergeTwoLists(list1, list2) {
  let dummyHead = new ListNode(-1); // Step 1
  let current = dummyHead; // Step 2

  while (list1 !== null && list2 !== null) {
    // Step 3
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2; // Step 5

  return dummyHead.next; // Step 6
}
