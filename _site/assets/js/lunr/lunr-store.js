var store = [{
        "title": "Data Structure Index",
        "excerpt":"Data Structure list matrix linked list string stack queue, priority queue heap hash table tree, binary search tree, tree + linked list, trie, segment tree graph python built-in ALgorithms sorting binary search greedy dfs, bfs back tracking dynamic programming divide and conquer topological sort - graph related union find -...","categories": ["Programming"],
        "tags": ["Index","Data Structure"],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-index.html",
        "teaser":null},{
        "title": "Data Structure 9 - tree",
        "excerpt":"Definition class TreeNode(): def __init__(self,x): self.val=x self.left=None self.right=None #create tree root=TreeNode(0) root.left=TreeNode(1) root.right=TreeNode(2) root.left.left=TreeNode(3) root.right.left=TreeNode(4) Basic Operation insert search find max depth - leetcode 104 - Maximum Depth of Binary Tree [E] #leetcode 104 def maxDepth(self, root): if not root: return 0 return 1+max(self.maxDepth(root.left),self.maxDepth(root.right)) min length - leetcode 111 -...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Recursion","Dfs"],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-tree.html",
        "teaser":null},{
        "title": "Data Structure 9 - binary search tree",
        "excerpt":"Definition A binary search tree (BST), also known as an ordered binary tree, is a node-based data structure in which each node has no more than two child nodes. The left sub-tree contains only nodes with keys less than the parent node; The right sub-tree contains only nodes with keys...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Binary Search Tree","Recursion"],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-bst.html",
        "teaser":null},{
        "title": "ALgorithms 6 - dynamic programming",
        "excerpt":"Triangle leetcode 118 - Pascal’s Triangle [E] leetcode 119 - Pascal’s Triangle II [E] Input: 5 Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]] class Solution(object): #leetcode 118 def generate(self, n): if n==0: return [] dp=[[1]] for i in range(1,n): temp=[] for j in range(i-1): temp.append(dp[i-1][j]+dp[i-1][j+1]) temp.insert(0,1) temp.insert(len(temp),1) dp.append(temp) return dp #leetcode...","categories": ["Programming"],
        "tags": ["Algorithms","DP"],
        "url": "http://localhost:4000/programming/2019/10/23/algorithm-dp.html",
        "teaser":null},{
        "title": "Data Structure 9 - tree + linked list",
        "excerpt":"leetcode 109 - Convert Sorted List to Binary Search Tree [M] solution: list -&gt; array -&gt; tree class Solution(object): def sortedListToBST(self, head): l=[] while head: l.append(head.val) head=head.next return self.construct(l) def construct(self,l): if len(l)==0: return None if len(l)==1: return TreeNode(l[0]) mid=len(l)//2 root=TreeNode(l[mid]) root.left=self.construct(l[:mid]) root.right=self.construct(l[mid+1:]) return root leetcode 114 - Flatten Binary...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Linked List","Recursion"],
        "url": "http://localhost:4000/programming/2019/10/23/data-structrue-tree-linkedlist.html",
        "teaser":null},{
        "title": "Topics",
        "excerpt":"N Sum - 3 questions leetcode 1 - Two Sum [E] - hash see hash table #nsum leetcode 167 - Two Sum II - Input array is sorted [M] - binary search see binary search #twosum leetcode 170 - Two Sum III - Data structure design [E] see design #twosum...","categories": ["Programming"],
        "tags": ["MinMax","Bfs","Dfs","DP","Recursion","Topics","Hash Table","Binary Search","N-Sum","Sorting"],
        "url": "http://localhost:4000/programming/2019/10/25/topics.html",
        "teaser":null},{
        "title": "Data Structure 4 - string",
        "excerpt":"Python Operation string to list pattern='abba' list(pattern) &gt;&gt;['a','b','b','a'] check if char is alphabet/alphabet or numeric/numeric s='abc123' s.isalpha() -&gt; False s.isalnum() -&gt; True s.isnumeric() -&gt; False remove white spaces before and after s=' lajdflak ' s.strip() #remove both s.lstrip() #remove left s.rstrip() #remove right swtich to upper case and lower case...","categories": ["Programming"],
        "tags": ["Data Structure","String","Palindrome","Dfs"],
        "url": "http://localhost:4000/programming/2019/10/26/data-structrue-string.html",
        "teaser":null},{
        "title": "ALgorithms 4 - breadth first traversal",
        "excerpt":"bfs graph   normally use queue   bfs related   (string) leetcode 127 - word ladder [M] see topics     ","categories": ["Programming"],
        "tags": ["Algorithms","Bfs"],
        "url": "http://localhost:4000/programming/2019/10/27/algorithm-bfs.html",
        "teaser":null},{
        "title": "Data Structure 6 - queue",
        "excerpt":"Python Operation   collections.deque - geeksforgeeks     a generalization of stacks and queues   preferred over list when quicker append and pop from both the ends of container are needed   O(1) time complexity for append and pop as list is O(n)   ```python  ","categories": ["Programming"],
        "tags": ["Data Structure","Queue","Python Collections"],
        "url": "http://localhost:4000/programming/2019/10/27/data-structrue-queue.html",
        "teaser":null},{
        "title": "Data Structure 1 - list",
        "excerpt":"Definition subarray - subsequence - substring - Rotate leetcode 189 - Rotate Array [E] Given an array, rotate the array to the right by k steps, where k is non-negative. Example: Input: [1,2,3,4,5,6,7] and k = 3 Output: [5,6,7,1,2,3,4] Explanation: rotate 1 steps to the right: [7,1,2,3,4,5,6] rotate 2 steps...","categories": ["Programming"],
        "tags": ["Data Structure","List","MinMax"],
        "url": "http://localhost:4000/programming/2019/10/29/data-structrue-list.html",
        "teaser":null},{
        "title": "Data Structure 2 - matrix",
        "excerpt":"Word Search leetcode 79 - Word Search [M] - backtracking see backtracking #matrix word search Given a 2D board and a word, find if the word exists in the grid. Example: board= [[‘A’,’B’,’C’,’E’], [‘S’,’F’,’C’,’S’], [‘A’,’D’,’E’,’E’],] word=”ABCCED” return True word=”SEE” return True word=”ABCB” return False leetcode 212 - Word Search II...","categories": ["Programming"],
        "tags": ["Data Structure","Matrix","Board Game"],
        "url": "http://localhost:4000/programming/2019/10/29/data-structrue-matrix.html",
        "teaser":null},{
        "title": "ALgorithms 4 - depth first traversal",
        "excerpt":"Definition String simple scanning Input: ‘abcd’ Output: [[‘a’, ‘b’, ‘c’, ‘d’], [‘a’, ‘b’, ‘cd’], [‘a’, ‘bc’, ‘d’], [‘a’, ‘bcd’], [‘ab’, ‘c’, ‘d’], [‘ab’, ‘cd’], [‘abc’, ‘d’], [‘abcd’]] Bars: a b c d _ _ _ _ _ _ ___ _ ___ _ _ _____ ___ _ _ ___ ___ _____...","categories": ["Programming"],
        "tags": ["Algorithms","Dfs","Palindrome","Recursion"],
        "url": "http://localhost:4000/programming/2019/10/31/algorithm-dfs.html",
        "teaser":null},{
        "title": "Data Structure 10 - graph",
        "excerpt":"Definition   leetcode 133 - Clone Graph [M]      Related      topological sort  ","categories": ["Programming"],
        "tags": ["Data Structure","Graph","Topological Sort"],
        "url": "http://localhost:4000/programming/2019/11/01/data-structrue-graph.html",
        "teaser":null},{
        "title": "OThers 2 - bit manipulation",
        "excerpt":"Python Operation ‘&amp;’, and, for carrying（进位） ‘|’, or ’~’, opposite ~100 &gt;&gt;-101 ’«’, one bit left, for power of 2 m=3 #11 m&lt;&lt;=1 m=6 #110 m&lt;&lt;=1 m=12 #1100 ’»’, one bit right, for power of 2 m=5 #101 m&gt;&gt;=1 m=2 #10 m&gt;&gt;=1 m=1 #1 m&gt;&gt;=1 m=0 #0 m&gt;&gt;=1 m=0 #0...","categories": ["Programming"],
        "tags": ["Others"],
        "url": "http://localhost:4000/programming/2019/11/02/others-bit-manipulation.html",
        "teaser":null},{
        "title": "Data Structure 3 - linked list",
        "excerpt":"Definition class ListNode(): def __init__(self,x): self.val=x self.next=None #create linked list head=ListNode(0) head.next=ListNode(1) head.next.next=ListNode(2) head.next.next.next=ListNode(3) head.next.next.next.next=ListNode(4) Remove leetcode 19 - Remove Nth Node From End of List [M] Given a linked list, remove the n-th node from the end of list and return its head. Example: Given linked list: 1-&gt;2-&gt;3-&gt;4-&gt;5, and...","categories": ["Programming"],
        "tags": ["Data Structure","Linked List","Pointers"],
        "url": "http://localhost:4000/programming/2019/11/08/data-structrue-linkedlist.html",
        "teaser":null},{
        "title": "Selected Papers - CoRL 2019",
        "excerpt":"Deep Value Model Predictive Control Motivation the sparsity of the reward and potential non-differentiability rule out the possibility of using Trajectory Optimization (TO) Goal combine model-based and sample-based approaches to exploit the knowledge of the system dynamics while effectively exploring the env MPC - a model-based Trajectory Optimization approach MPC...","categories": ["LiteratureReview"],
        "tags": ["MPC","Reinforcement Learning"],
        "url": "http://localhost:4000/literaturereview/2019/11/11/selected-paper-corl.html",
        "teaser":null},{
        "title": "OThers 1 - math",
        "excerpt":"Greatest Common Divisor Example: gcd(2,4) -&gt; 2 gcd(3,0) -&gt; 3 gcd(-5,-10) -&gt; -5 #loop def gcd(x,y): while y: x,y=y,x%y return x #recursive def gcd(x,y): if y==0: return x else: gcd(y,x%y) #one line max([x for x in range(1,a+1) if a%x==0 and b%x==0]) #or [x for x in range(1,a+1) if a %...","categories": ["Programming"],
        "tags": ["Others","Point","Greatest Common Divisor","Python Collections","Hash Table"],
        "url": "http://localhost:4000/programming/2019/11/12/others-math.html",
        "teaser":null},{
        "title": "Data Structure 11 - python built-in",
        "excerpt":"lambda def identity(x): lambda x:x &lt;=&gt; return x (lambda x,y:x+y)(2,3) &gt;&gt;5 add_one=lambda x:x+1 add_one(2) &gt;&gt;3 cmp=lambda x,y: 1 if x+y&gt;y+x else -1 cmp('54','109') &gt;&gt;1 #54109&gt;10954 cmp('109','54') &gt;&gt;-1 #10954&lt;54109 higher-order functions high_fun=lambda x,func:x+func(x) high_fun(2,lambda x:x*x) &gt;&gt;6 lambda with args and kwargs (lambda x, y, z: x + y + z)(1, 2,...","categories": ["Programming"],
        "tags": ["Data Structure","Python collections","Python itertools","Queue","Hash Table"],
        "url": "http://localhost:4000/programming/2019/11/12/data-structrue-python-builtin.html",
        "teaser":null},{
        "title": "Data Structure 5 - stack",
        "excerpt":"Design leetcode 155 - Min Stack [E] Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. push(x) – Push element x onto stack. pop() – Removes the element on top of the stack. top() – Get the top element. getMin() – Retrieve the...","categories": ["Programming"],
        "tags": ["Data Structure","Stack","Calculator","Hash Table","Parentheses"],
        "url": "http://localhost:4000/programming/2019/11/13/data-structrue-stack.html",
        "teaser":null},{
        "title": "ALgorithms 5 - back tracking",
        "excerpt":"Definition If cannot go forward, go back! Parentheses leetcode 22 - Generate Parentheses [M] Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. For example, given n = 3, a solution set is: [”((()))”, “(()())”, “(())()”, “()(())”, “()()()”] Palindrome leetcode 131 - Palindrome Partitioning...","categories": ["Programming"],
        "tags": ["Algorithms","Back Tracking","Parentheses","Recursion"],
        "url": "http://localhost:4000/programming/2019/11/13/algorithm-backtracking.html",
        "teaser":null},{
        "title": "Control as Inference",
        "excerpt":"Introduction the Equivalence probabilistic inference under deterministic dynamics - - a generalization of RL | &lt;=&gt; max entropy RL | variational inference - - optimal control problem under stochastic dynamics Probabilistic Graphical Models (PGMs) provide a consistent and flexible framework to devise principled objectives set up models that reflect the...","categories": ["LiteratureReview"],
        "tags": ["Soft-Q Learning","KL Divergence","Reinforcement Learning"],
        "url": "http://localhost:4000/literaturereview/2019/11/13/control-as-inference.html",
        "teaser":null},{
        "title": "ALgorithms 2 - binary search",
        "excerpt":"Time Complexity O(log n) Find Peak leetcode 153 - Find Minimum in Rotated Sorted Array [M] Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand, find the minimum element Example 1: Input: [3,4,5,1,2] Output: 1 Example 2: Input: [4,5,6,7,0,1,2] Output: 0 Solution: create...","categories": ["Programming"],
        "tags": ["Algorithms","Binary Search","N-Sum"],
        "url": "http://localhost:4000/programming/2019/11/13/algorithm-binarysearch.html",
        "teaser":null},{
        "title": "ALgorithms 1 - sorting",
        "excerpt":"Big O Table   Bubble Sort   Insertion Sort   leetcode 147 - Insertion Sort List [M] see linked list #sorting   Merge Sort   leetcode 148 - (Merge) Sort List [M] see linked list #sorting   Bucket Sort   leetcode 164 - Maximum Gap [H]   class Solution():     def maximumGap(self,nums):   ","categories": ["Programming"],
        "tags": ["Algorithms","Bucket Sort"],
        "url": "http://localhost:4000/programming/2019/11/14/algorithm-sorting.html",
        "teaser":null},{
        "title": "Data Structure 8 - hash table",
        "excerpt":"Find Dups leetcode 217 - Contains Duplicate [E] Given an array of ints find if the array contains any duplicates. Examples: Input: [1,2,3,1] Output: True Input:[1,2,3,4] Output: False Input: [1,1,1,3,3,4,3,2,4,2] Output: True Solution 1: hash class Solution(): def containsDuplicate(self,nums): seen={} for n in nums: if n in seen: return True...","categories": ["Programming"],
        "tags": ["Data Structure","Hash Table","N-Sum"],
        "url": "http://localhost:4000/programming/2019/11/14/data-structrue-hash.html",
        "teaser":null},{
        "title": "OThers 10 - design",
        "excerpt":"Stack leetcode 155 - Min Stack [E] leetcode 716 - Max Stack [E] see stack #design Tree leetcode 173 - Binary Search Tree Iterator [M] see bst #basic leetcode 208 - Implement Trie (Prefix Tree) [M] see trie Two Sum leetcode 170 - Two Sum III - Data structure design...","categories": ["Programming"],
        "tags": ["Others","Stack","N-Sum"],
        "url": "http://localhost:4000/programming/2019/11/15/others-design.html",
        "teaser":null},{
        "title": "OThers 12 - sql",
        "excerpt":"leetcode 175 - Combine Two Tables [E] leetcode 176 - Second Highest Salary [E] leetcode 177 - Nth Highest Salary [M] lettcode 178 - Rank Scores [M] leetcode 180 - Consecutive Numbers [M] leetcode 181 - Employees Earning More Than Their Managers [E] leetcode 182 - Duplicate Emails [E] leetcode...","categories": ["Programming"],
        "tags": ["Others","SQL"],
        "url": "http://localhost:4000/programming/2019/11/15/others-sql.html",
        "teaser":null},{
        "title": "OThers 13 - file",
        "excerpt":"leetcode 192 - Word Frequency [M]   leetcode 194 - Transpose File [M]   leetcode 195 - Tenth Line [M]   with open('tenthline.txt','r') as f:      for i,l in enumerate(f):         if i==9:             print(l)  ","categories": ["Programming"],
        "tags": ["Others","file"],
        "url": "http://localhost:4000/programming/2019/11/18/others-file.html",
        "teaser":null},{
        "title": "OThers 3 - regex",
        "excerpt":"command leetcode 193 - Valid Phone Numbers [E] Given a text file file.txt that contains list of phone numbers (one per line), write a one liner bash script to print all valid phone numbers. You may assume that a valid phone number must appear in one of the following two...","categories": ["Programming"],
        "tags": ["Others","regex"],
        "url": "http://localhost:4000/programming/2019/11/18/others-regex.html",
        "teaser":null},{
        "title": "ALgorithms 8 - topological sort",
        "excerpt":"Motivation Many real world situation can be modeled as a graph with directed edges where some events must occur before others, say prerequisites problems, i.e. school class prerequisites program dependencies build systems advanced-packaging tool (apt-get) event/task scheduling assembly instructions For example, school class prerequisites ---&gt; class C ---&gt; class J...","categories": ["Programming"],
        "tags": ["Algorithms","Graph"],
        "url": "http://localhost:4000/programming/2019/11/20/algorithm-topological.html",
        "teaser":null},{
        "title": "Data Structure 9 - trie",
        "excerpt":"Definition Trie is an efficient information retrieval data structure. Using Trie, search complexities can be brought to optimal limit (key length). If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N, where M is maximum string length and N...","categories": ["Programming"],
        "tags": ["Data Structure","Tree"],
        "url": "http://localhost:4000/programming/2019/11/29/data-structrue-tree-trie.html",
        "teaser":null},{
        "title": "Data Structure 7 - heap",
        "excerpt":"Definition   heapq   Leetcode   leetcode 215 - Kth Largest in an Array [M] - max heap see topic #kth largest  ","categories": ["Programming"],
        "tags": ["Data Structure","Heap"],
        "url": "http://localhost:4000/programming/2019/11/30/data-structrue-heap.html",
        "teaser":null},{
        "title": "ALgorithms 9 - union find",
        "excerpt":"Definition A disjoint-set data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. A union-find algorithm is an algorithm that performs two useful operations on such a data structure: Find: Determine which subset a particular element is in....","categories": ["Programming"],
        "tags": ["Algorithms","Union Find"],
        "url": "http://localhost:4000/programming/2019/12/02/algorithm-unionfind.html",
        "teaser":null}]
