var store = [{
        "title": "Data Structure Index",
        "excerpt":"Data Structure list linked list array, matrix string stack queue, priority queue heap hash table tree: tree basic, bst, tree + linked list, segment tree ALgorithms sorting binary search greedy graph: dfs, bfs back tracking dynamic programming divide and conquer OThers math bit manipulation regex two pointers minimax memoization trie...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-index.html",
        "teaser":null},{
        "title": "Data Structure 9 - tree",
        "excerpt":"Tree Definition class TreeNode(): def __init__(self,x): self.val=x self.left=None self.right=None #create tree root=TreeNode(0) root.left=TreeNode(1) root.right=TreeNode(2) root.left.left=TreeNode(3) root.right.left=TreeNode(4) Tree Basic Operation insert search find max depth - leetcode 104 - Maximum Depth of Binary Tree [E] #leetcode 104 def maxDepth(self, root): if not root: return 0 return 1+max(self.maxDepth(root.left),self.maxDepth(root.right)) min length - leetcode...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-tree.html",
        "teaser":null},{
        "title": "Data Structure 9 - tree + linked list",
        "excerpt":"leetcode 109 - Convert Sorted List to Binary Search Tree [M]   class Solution(object):     #leetcode 109     def sortedListToBST(self, head):         l=[]         while head:             l.append(head.val)             head=head.next          return self.construct(l)      def construct(self,l):               if len(l)==0:             return None         if len(l)==1:             return TreeNode(l[0])          mid=len(l)//2         root=TreeNode(l[mid])         root.left=self.construct(l[:mid])         root.right=self.construct(l[mid+1:])          return root  ","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/23/data-structrue-tree-linkedlist.html",
        "teaser":null}]
