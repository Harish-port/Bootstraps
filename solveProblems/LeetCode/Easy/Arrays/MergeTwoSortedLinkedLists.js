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
function mergeTwoSortedLists(list1, list2) {
  let dummyHead = new ListNode(-1); // Dummy node to simplify edge cases
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If one of the lists is not fully traversed, append it
  current.next = list1 !== null ? list1 : list2;

  return dummyHead.next; // The merged list starts after dummyHead
}

// another solution
var mergeTwoLists = function (list1, list2) {
  if (list1 == null) {
    return list2;
  }

  if (list2 == null) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
