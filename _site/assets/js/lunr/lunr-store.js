var store = [{
        "title": "Data Structure Index",
        "excerpt":"Data Structure list matrix linked list string stack queue, priority queue heap hash table tree: tree basic, binary search tree, tree + linked list, segment tree graph ALgorithms sorting binary search greedy dfs, bfs back tracking dynamic programming divide and conquer OThers math bit manipulation regex two pointers minimax memoization...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-index.html",
        "teaser":null},{
        "title": "Data Structure 9 - tree",
        "excerpt":"Definition class TreeNode(): def __init__(self,x): self.val=x self.left=None self.right=None #create tree root=TreeNode(0) root.left=TreeNode(1) root.right=TreeNode(2) root.left.left=TreeNode(3) root.right.left=TreeNode(4) Basic Operation insert search find max depth - leetcode 104 - Maximum Depth of Binary Tree [E] #leetcode 104 def maxDepth(self, root): if not root: return 0 return 1+max(self.maxDepth(root.left),self.maxDepth(root.right)) min length - leetcode 111 -...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-tree.html",
        "teaser":null},{
        "title": "Data Structure 9 - binary search tree",
        "excerpt":"Definition Basic Operation leetcode 98 - Validate Binary Search Tree [M] - [T/F] class BinarySearchTree(): def isValidBST(self, root): return self.isValid(root,float('-inf'),float('inf')) def isValid(self,node,left,right): if not node: return True if node.val&lt;=left or node.val&gt;=right: return False return self.isValid(node.left,left,node.val) and self.isValid(node.right,node.val,right) Others leetcode 95 - Unique Binary Search Trees II [M] - generate leetcode...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-bst.html",
        "teaser":null},{
        "title": "ALgorithms 6 - dynamic programming",
        "excerpt":"dp basic leetcode 118 - Pascal’s Triangle [E] leetcode 119 - Pascal’s Triangle II [E] Input: 5 Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]] class Solution(object): #leetcode 118 def generate(self, n): if n==0: return [] dp=[[1]] for i in range(1,n): temp=[] for j in range(i-1): temp.append(dp[i-1][j]+dp[i-1][j+1]) temp.insert(0,1) temp.insert(len(temp),1) dp.append(temp) return dp...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/23/algorithm-dp.html",
        "teaser":null},{
        "title": "Data Structure 9 - tree + linked list",
        "excerpt":"leetcode 109 - Convert Sorted List to Binary Search Tree [M] solution: list -&gt; array -&gt; tree class Solution(object): def sortedListToBST(self, head): l=[] while head: l.append(head.val) head=head.next return self.construct(l) def construct(self,l): if len(l)==0: return None if len(l)==1: return TreeNode(l[0]) mid=len(l)//2 root=TreeNode(l[mid]) root.left=self.construct(l[:mid]) root.right=self.construct(l[mid+1:]) return root leetcode 114 - Flatten Binary...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/23/data-structrue-tree-linkedlist.html",
        "teaser":null},{
        "title": "Topics",
        "excerpt":"Best Time Buy n Sell leetcode 121 - Best Time to Buy and Sell Stock (Once) [E] - record min and max Input: [7,1,5,3,6,4] Output: 5 Explanation: Buy on 1 and sell on 6, profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/25/topics.html",
        "teaser":null},{
        "title": "Data Structure 4 - string",
        "excerpt":"Python Operation check if char is alphabet/alphabet or numeric/numeric s=’abc123’ s.isalpha() -&gt; False s.isalnum() -&gt; True s.isnumeric() -&gt; False remove white spaces before and after s=’ lajdflak ‘ s.strip() #remove both s.lstrip() #remove left s.rstrip() #remove right swtich to upper case and lower case s=’aBcDeFg’ s.lower() -&gt; s=’abcdefg’ s.upper() -&gt;...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/26/data-structrue-string.html",
        "teaser":null},{
        "title": "ALgorithms 4 - breadth first traversal",
        "excerpt":"bfs graph   normally use queue   bfs related   (string) leetcode 127 - word ladder [M] see topic series     ","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/27/algorithm-bfs.html",
        "teaser":null},{
        "title": "Data Structure 6 - queue",
        "excerpt":"Python Operation   collections.deque - geeksforgeeks     a generalization of stacks and queues   preferred over list when quicker append and pop from both the ends of container are needed   O(1) time complexity for append and pop as list is O(n)   ```python  ","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/27/data-structrue-queue.html",
        "teaser":null},{
        "title": "Data Structure 1 - list",
        "excerpt":"Python Operation Find Sequence leetcode 128 - Longest Consecutive Sequence [H] Input: [100, 4, 200, 1, 3, 2] Output: 4 Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. Solution: make a set for removing the repeated filter out non-head numbers using if-continue...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/29/data-structrue-list.html",
        "teaser":null},{
        "title": "Data Structure 2 - matrix",
        "excerpt":"Python Operation 2 variables in for loop for dr,dc in [(1,0),(-1,0),(0,-1),(0,1)]: print(dr,dc) 0utput: 1,0 -1,0 0,-1 0,1 Board Game leetcode 130 - Surrounded Regions [M] - stack or dfs Given a 2D board containing ‘X’ and ‘O’ (the letter O), capture all regions surrounded by ‘X’. A region is captured...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/29/data-structrue-matrix.html",
        "teaser":null},{
        "title": "ALgorithms 4 - depth first traversal",
        "excerpt":"Definition String simple scanning Input: ‘abcd’ Output: [[‘a’, ‘b’, ‘c’, ‘d’], [‘a’, ‘b’, ‘cd’], [‘a’, ‘bc’, ‘d’], [‘a’, ‘bcd’], [‘ab’, ‘c’, ‘d’], [‘ab’, ‘cd’], [‘abc’, ‘d’], [‘abcd’]] Bars: a b c d _ _ _ _ _ _ ___ _ ___ _ _ _____ ___ _ _ ___ ___ _____...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/10/31/algorithm-dfs.html",
        "teaser":null},{
        "title": "Data Structure 10 - graph",
        "excerpt":"Definition   graph   **leetcode 133 - Clone Graph [M] **     ","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/11/01/data-structrue-graph.html",
        "teaser":null},{
        "title": "OThers 2 - bit manipulation",
        "excerpt":"Python Operation ‘&amp;’, and, for carrying（进位） ‘|’, or ’~’, opposite ~100 ouput: -101 ’«’, one bit left, for power of 2 ’»’, one bit right, for power of 2 ’^’, xor, for plus without carrying i=10 j=100 k=i^j output: k=110 steps: a. dec -&gt; bin i=10 -&gt; bin(10) -&gt; ‘0b1010’...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/11/02/others-bit-manipulation.html",
        "teaser":null},{
        "title": "Data Structure 3 - linked list",
        "excerpt":"Definition class ListNode(): def __init__(self,x): self.val=x self.next=None #create linked list head=ListNode(0) head.next=ListNode(1) head.next.next=ListNode(2) head.next.next.next=ListNode(3) head.next.next.next.next=ListNode(4) Remove leetcode 19 - Remove Nth Node From End of List [M] Given a linked list, remove the n-th node from the end of list and return its head. Example: Given linked list: 1-&gt;2-&gt;3-&gt;4-&gt;5, and...","categories": ["Programming"],
        "tags": [],
        "url": "http://localhost:4000/programming/2019/11/08/data-structrue-linkedlist.html",
        "teaser":null},{
        "title": "Paper Reading - CoRL 2019",
        "excerpt":"MPC   Deep Value Model Predictive Control  ","categories": ["LiteratureReview"],
        "tags": [],
        "url": "http://localhost:4000/literaturereview/2019/11/11/paper-reading-corl.html",
        "teaser":null}]
