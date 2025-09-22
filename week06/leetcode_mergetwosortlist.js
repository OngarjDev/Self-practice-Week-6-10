/**
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
    let merge = {...list1,...list2}
    let new_arr = []
    while(merge){
        new_arr.push(merge.val)
        merge = merge.next 
    }
    new_arr.sort((a,b) => a - b)
    /// ข้อมูลเป็น listnode แปลงกลับไม่เป็น พรุ่งนี้ค่อยแก้
}