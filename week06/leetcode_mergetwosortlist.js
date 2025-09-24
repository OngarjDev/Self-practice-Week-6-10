/**
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
Example 2:
Input: list1 = [], list2 = []
Output: []
Example 3:
Input: list1 = [], list2 = [0]

Output: [0]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
let new_arr = [];
    
    let cur = list1;
    while (cur) {
        new_arr.push(cur.val);
        cur = cur.next;
    }

    cur = list2;
    while (cur) {
        new_arr.push(cur.val);
        cur = cur.next;
    }

    new_arr.sort((a, b) => a - b);

    let dummy = new ListNode(0);
    let tail = dummy;
    for (let val of new_arr) {
        tail.next = new ListNode(val);
        tail = tail.next;
    }

    return dummy.next;
}