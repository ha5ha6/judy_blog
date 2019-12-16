var store = [{
        "title": "Data Structure Index",
        "excerpt":"Complexity CheatSheet Standard Data Structure ------------------------------------------------------------------------------------------------- | Standard | Time Complexity | Space Complexity | ------------------------------------------------------------------------------------------------- | | Average / Worst | Worst | ------------------------------------------------------------------------------------------------- | | Access | Search | Insertion | Deletion | | ------------------------------------------------------------------------------------------------- | Array | O(1) | O(n) | O(n) | O(n) | O(n) |...","categories": ["Programming"],
        "tags": ["Index","Data Structure"],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-index.html",
        "teaser":null},{
        "title": "Data Structure 9 - tree",
        "excerpt":"Background Definition A tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes. A tree data structure can be defined recursively as a collection of nodes (starting...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Recursion","Dfs"],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-tree.html",
        "teaser":null},{
        "title": "Data Structure 10 - binary search tree",
        "excerpt":"Background Definition A binary search tree (BST), also known as an ordered binary tree, is a node-based data structure in which each node has no more than two child nodes. The left sub-tree contains only nodes with keys less than the parent node; The right sub-tree contains only nodes with...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Binary Search Tree","Recursion"],
        "url": "http://localhost:4000/programming/2019/10/21/data-structrue-bst.html",
        "teaser":null},{
        "title": "ALgorithms 5 - dynamic programming",
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
        "title": "Data Structure 3 - string",
        "excerpt":"Definition A string is traditionally a sequence of characters, either as a literal constant or as some kind of variable. The latter may allow its elements to be mutated and the length changed, or it may be fixed (after creation). A string is generally considered as a data type and...","categories": ["Programming"],
        "tags": ["Data Structure","String","Palindrome","Dfs"],
        "url": "http://localhost:4000/programming/2019/10/26/data-structrue-string.html",
        "teaser":null},{
        "title": "ALgorithms 8 - breadth first traversal",
        "excerpt":"bfs graph   normally use queue   bfs related   (string) leetcode 127 - word ladder [M] see topics     ","categories": ["Programming"],
        "tags": ["Algorithms","Bfs"],
        "url": "http://localhost:4000/programming/2019/10/27/algorithm-bfs.html",
        "teaser":null},{
        "title": "Data Structure 7 - queue",
        "excerpt":"Background Definition A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first....","categories": ["Programming"],
        "tags": ["Data Structure","Queue","Python Collections"],
        "url": "http://localhost:4000/programming/2019/10/27/data-structrue-queue.html",
        "teaser":null},{
        "title": "Data Structure 1 - array",
        "excerpt":"Background Definition An array data structure, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored such that the position of each element can be computed from its index tuple by a mathematical...","categories": ["Programming"],
        "tags": ["Data Structure","List","MinMax"],
        "url": "http://localhost:4000/programming/2019/10/29/data-structrue-array.html",
        "teaser":null},{
        "title": "Data Structure 2 - matrix",
        "excerpt":"Word Search leetcode 79 - Word Search [M] - backtracking see backtracking #matrix word search Given a 2D board and a word, find if the word exists in the grid. Example: board= [[‘A’,’B’,’C’,’E’], [‘S’,’F’,’C’,’S’], [‘A’,’D’,’E’,’E’],] word=”ABCCED” return True word=”SEE” return True word=”ABCB” return False leetcode 212 - Word Search II...","categories": ["Programming"],
        "tags": ["Data Structure","Matrix","Board Game"],
        "url": "http://localhost:4000/programming/2019/10/29/data-structrue-matrix.html",
        "teaser":null},{
        "title": "ALgorithms 7 - depth first traversal",
        "excerpt":"Definition String simple scanning Input: ‘abcd’ Output: [[‘a’, ‘b’, ‘c’, ‘d’], [‘a’, ‘b’, ‘cd’], [‘a’, ‘bc’, ‘d’], [‘a’, ‘bcd’], [‘ab’, ‘c’, ‘d’], [‘ab’, ‘cd’], [‘abc’, ‘d’], [‘abcd’]] Bars: a b c d _ _ _ _ _ _ ___ _ ___ _ _ _____ ___ _ _ ___ ___ _____...","categories": ["Programming"],
        "tags": ["Algorithms","Dfs","Palindrome","Recursion"],
        "url": "http://localhost:4000/programming/2019/10/31/algorithm-dfs.html",
        "teaser":null},{
        "title": "Data Structure 14 - graph",
        "excerpt":"Definition A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as, 0 - 1 \\ |...","categories": ["Programming"],
        "tags": ["Data Structure","Graph","Topological Sort"],
        "url": "http://localhost:4000/programming/2019/11/01/data-structrue-graph.html",
        "teaser":null},{
        "title": "OThers 2 - bit manipulation",
        "excerpt":"Python Operation ‘&amp;’, and, for carrying（进位） ‘|’, or ’~’, opposite ~100 &gt;&gt;-101 ’«’, one bit left, for power of 2 m=3 #11 m&lt;&lt;=1 m=6 #110 m&lt;&lt;=1 m=12 #1100 ’»’, one bit right, for power of 2 m=5 #101 m&gt;&gt;=1 m=2 #10 m&gt;&gt;=1 m=1 #1 m&gt;&gt;=1 m=0 #0 m&gt;&gt;=1 m=0 #0...","categories": ["Programming"],
        "tags": ["Others"],
        "url": "http://localhost:4000/programming/2019/11/02/others-bit-manipulation.html",
        "teaser":null},{
        "title": "Data Structure 5 - linked list",
        "excerpt":"Background Definition A linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic...","categories": ["Programming"],
        "tags": ["Data Structure","Linked List","Pointers"],
        "url": "http://localhost:4000/programming/2019/11/08/data-structrue-linkedlist.html",
        "teaser":null},{
        "title": "Selected Papers - CoRL 2019",
        "excerpt":"Deep Value Model Predictive Control Motivation the sparsity of the reward and potential non-differentiability rule out the possibility of using Trajectory Optimization (TO) Goal combine model-based and sample-based approaches to exploit the knowledge of the system dynamics while effectively exploring the env MPC - a model-based Trajectory Optimization approach MPC...","categories": ["Literature"],
        "tags": ["MPC","Reinforcement Learning"],
        "url": "http://localhost:4000/literature/2019/11/11/selected-paper-corl.html",
        "teaser":null},{
        "title": "OThers 1 - math",
        "excerpt":"Greatest Common Divisor Example: gcd(2,4) -&gt; 2 gcd(3,0) -&gt; 3 gcd(-5,-10) -&gt; -5 #loop def gcd(x,y): while y: x,y=y,x%y return x #recursive def gcd(x,y): if y==0: return x else: gcd(y,x%y) #one line max([x for x in range(1,a+1) if a%x==0 and b%x==0]) #or [x for x in range(1,a+1) if a %...","categories": ["Programming"],
        "tags": ["Others","Point","Greatest Common Divisor","Python Collections","Hash Table"],
        "url": "http://localhost:4000/programming/2019/11/12/others-math.html",
        "teaser":null},{
        "title": "Data Structure 15 - python built-in",
        "excerpt":"lambda def identity(x): lambda x:x &lt;=&gt; return x (lambda x,y:x+y)(2,3) &gt;&gt;5 add_one=lambda x:x+1 add_one(2) &gt;&gt;3 cmp=lambda x,y: 1 if x+y&gt;y+x else -1 cmp('54','109') &gt;&gt;1 #54109&gt;10954 cmp('109','54') &gt;&gt;-1 #10954&lt;54109 higher-order functions high_fun=lambda x,func:x+func(x) high_fun(2,lambda x:x*x) &gt;&gt;6 lambda with args and kwargs (lambda x, y, z: x + y + z)(1, 2,...","categories": ["Programming"],
        "tags": ["Data Structure","Python collections","Python itertools","Queue","Hash Table"],
        "url": "http://localhost:4000/programming/2019/11/12/data-structrue-python-builtin.html",
        "teaser":null},{
        "title": "Data Structure 6 - stack",
        "excerpt":"Background Definition Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). There are many real-life examples of a stack. Consider an example of plates stacked over one another in...","categories": ["Programming"],
        "tags": ["Data Structure","Stack","Calculator","Hash Table","Parentheses"],
        "url": "http://localhost:4000/programming/2019/11/13/data-structrue-stack.html",
        "teaser":null},{
        "title": "ALgorithms 3 - back tracking",
        "excerpt":"Definition If cannot go forward, go back! Parentheses leetcode 22 - Generate Parentheses [M] Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. For example, given n = 3, a solution set is: [”((()))”, “(()())”, “(())()”, “()(())”, “()()()”] Palindrome leetcode 131 - Palindrome Partitioning...","categories": ["Programming"],
        "tags": ["Algorithms","Back Tracking","Parentheses","Recursion"],
        "url": "http://localhost:4000/programming/2019/11/13/algorithm-backtracking.html",
        "teaser":null},{
        "title": "Control as Inference",
        "excerpt":"Introduction the Equivalence probabilistic inference under deterministic dynamics - - a generalization of RL | &lt;=&gt; max entropy RL | variational inference - - optimal control problem under stochastic dynamics Probabilistic Graphical Models (PGMs) provide a consistent and flexible framework to devise principled objectives set up models that reflect the...","categories": ["Literature"],
        "tags": ["Soft-Q Learning","KL Divergence","Reinforcement Learning"],
        "url": "http://localhost:4000/literature/2019/11/13/control-as-inference.html",
        "teaser":null},{
        "title": "ALgorithms 2 - binary search",
        "excerpt":"Time Complexity O(log n) Find Peak leetcode 153 - Find Minimum in Rotated Sorted Array [M] Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand, find the minimum element Example 1: Input: [3,4,5,1,2] Output: 1 Example 2: Input: [4,5,6,7,0,1,2] Output: 0 Solution: create...","categories": ["Programming"],
        "tags": ["Algorithms","Binary Search","N-Sum"],
        "url": "http://localhost:4000/programming/2019/11/13/algorithm-binarysearch.html",
        "teaser":null},{
        "title": "ALgorithms 1 - sorting",
        "excerpt":"Big O Table ------------------------------------------------------------------ | Sort | Time Complexity | Space Complexity | ------------------------------------------------------------------ | | Average | Best | Worst | Worst | ------------------------------------------------------------------ | Tim | O(n) | O(nlogn) | O(nlogn) | O(n) | | Merge | O(nlogn) | O(nlogn) | O(nlogn) | O(n) | | Quick |...","categories": ["Programming"],
        "tags": ["Algorithms","Bucket Sort"],
        "url": "http://localhost:4000/programming/2019/11/14/algorithm-sorting.html",
        "teaser":null},{
        "title": "Data Structure 4 - hash table",
        "excerpt":"Definition A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from...","categories": ["Programming"],
        "tags": ["Data Structure","Hash Table","N-Sum"],
        "url": "http://localhost:4000/programming/2019/11/14/data-structrue-hash.html",
        "teaser":null},{
        "title": "OThers 4 - design",
        "excerpt":"Stack leetcode 155 - Min Stack [E] leetcode 716 - Max Stack [E] see stack #design Tree leetcode 173 - Binary Search Tree Iterator [M] see bst #basic leetcode 208 - Implement Trie (Prefix Tree) [M] see trie Two Sum leetcode 170 - Two Sum III - Data structure design...","categories": ["Programming"],
        "tags": ["Others","Stack","N-Sum"],
        "url": "http://localhost:4000/programming/2019/11/15/others-design.html",
        "teaser":null},{
        "title": "OThers 9 - sql",
        "excerpt":"leetcode 175 - Combine Two Tables [E] leetcode 176 - Second Highest Salary [E] leetcode 177 - Nth Highest Salary [M] lettcode 178 - Rank Scores [M] leetcode 180 - Consecutive Numbers [M] leetcode 181 - Employees Earning More Than Their Managers [E] leetcode 182 - Duplicate Emails [E] leetcode...","categories": ["Programming"],
        "tags": ["Others","SQL"],
        "url": "http://localhost:4000/programming/2019/11/15/others-sql.html",
        "teaser":null},{
        "title": "OThers 10 - file",
        "excerpt":"leetcode 192 - Word Frequency [M]   leetcode 194 - Transpose File [M]   leetcode 195 - Tenth Line [M]   with open('tenthline.txt','r') as f:      for i,l in enumerate(f):         if i==9:             print(l)  ","categories": ["Programming"],
        "tags": ["Others","file"],
        "url": "http://localhost:4000/programming/2019/11/18/others-file.html",
        "teaser":null},{
        "title": "OThers 3 - regex",
        "excerpt":"command leetcode 193 - Valid Phone Numbers [E] Given a text file file.txt that contains list of phone numbers (one per line), write a one liner bash script to print all valid phone numbers. You may assume that a valid phone number must appear in one of the following two...","categories": ["Programming"],
        "tags": ["Others","regex"],
        "url": "http://localhost:4000/programming/2019/11/18/others-regex.html",
        "teaser":null},{
        "title": "ALgorithms 9 - topological sort",
        "excerpt":"Motivation Many real world situation can be modeled as a graph with directed edges where some events must occur before others, say prerequisites problems, i.e. school class prerequisites program dependencies build systems advanced-packaging tool (apt-get) event/task scheduling assembly instructions For example, school class prerequisites ---&gt; class C ---&gt; class J...","categories": ["Programming"],
        "tags": ["Algorithms","Graph"],
        "url": "http://localhost:4000/programming/2019/11/20/algorithm-topological.html",
        "teaser":null},{
        "title": "Data Structure 12 - trie",
        "excerpt":"Definition Trie is an efficient information retrieval data structure. Using Trie, search complexities can be brought to optimal limit (key length). If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N, where M is maximum string length and N...","categories": ["Programming"],
        "tags": ["Data Structure","Tree"],
        "url": "http://localhost:4000/programming/2019/11/29/data-structrue-tree-trie.html",
        "teaser":null},{
        "title": "Data Structure 8 - heap",
        "excerpt":"Definition A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property: In a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal...","categories": ["Programming"],
        "tags": ["Data Structure","Heap"],
        "url": "http://localhost:4000/programming/2019/11/30/data-structrue-heap.html",
        "teaser":null},{
        "title": "ALgorithms 10 - union find",
        "excerpt":"Definition A disjoint-set data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. A union-find algorithm is an algorithm that performs two useful operations on such a data structure: Find: Determine which subset a particular element is in....","categories": ["Programming"],
        "tags": ["Algorithms","Union Find"],
        "url": "http://localhost:4000/programming/2019/12/02/algorithm-unionfind.html",
        "teaser":null},{
        "title": "Data Structure 8 - priority queue",
        "excerpt":"Definition A priority queue is an abstract data type which is like a regular queue or stack data structure, but where additionally each element has a “priority” associated with it. In a priority queue, an element with high priority is served or dequeued before an element with low priority. If...","categories": ["Programming"],
        "tags": ["Data Structure","Queue","Priority Queue","Heap"],
        "url": "http://localhost:4000/programming/2019/12/02/data-structrue-priorityqueue.html",
        "teaser":null},{
        "title": "OThers 11 - object-oriented programming",
        "excerpt":"Object Copying In object-oriented programming, object copying is creating a copy of an existing object, a unit of data in object-oriented programming. The resulting object is called an object copy or simply copy of the original object. Copying is basic but has subtleties and can have significant overhead. There are...","categories": ["Programming"],
        "tags": ["Others"],
        "url": "http://localhost:4000/programming/2019/12/03/others-oop.html",
        "teaser":null},{
        "title": "ALgorithms 6 - divide and conquer",
        "excerpt":"Definition Divide and Conquer is an algorithmic paradigm. A typical Divide and Conquer algorithm solves a problem using following three steps. Divide: Break the given problem into subproblems of same type. Conquer: Recursively solve these subproblems Combine: Appropriately combine the answers A classic example of Divide and Conquer is Merge...","categories": ["Programming"],
        "tags": ["Algorithms","Divide and conquer"],
        "url": "http://localhost:4000/programming/2019/12/03/algorithm-dividenconquer.html",
        "teaser":null},{
        "title": "Data Structure 13 - segment tree",
        "excerpt":"Definition A segment tree also known as a statistic tree is a tree data structure used for storing information about intervals, or segments. It allows querying which of the stored segments contain a given point. It is, in principle, a static structure; that is, it’s a structure that cannot be...","categories": ["Programming"],
        "tags": ["Data Structure","Segment Tree"],
        "url": "http://localhost:4000/programming/2019/12/03/data-structrue-segmenttree.html",
        "teaser":null},{
        "title": "Multi Agent Reinforcement Learning",
        "excerpt":"Background In cooperative MARL, one central challenge is coping with the size of the joint action space, which grows exponentially in the number of agents (Game theory suffers this problem) Efficient MARL therefore must be able to generalize over large joint action spaces, in the same way taht CNN allows...","categories": ["Literature"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/literature/2019/12/04/marl.html",
        "teaser":null},{
        "title": "OThers 12 - python class",
        "excerpt":"Public and Private   class M():     def public(self):         print('You can see me!')      def _private(self):         print('You cannot see me!')  m=M() m.public() &gt;&gt;You can see me! m._private() ??? &gt;&gt;'You cannot see me!'  ","categories": ["Programming"],
        "tags": ["Others"],
        "url": "http://localhost:4000/programming/2019/12/06/others-pythonclass.html",
        "teaser":null},{
        "title": "ALgorithms 4 - greedy",
        "excerpt":"Background Definition A greedy algorithm is any algorithm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the intent of finding a global optimum. For example, a greedy strategy for the traveling salesman problem (which is of a high computational complexity) is the following...","categories": ["Programming"],
        "tags": ["Algorithms","Greedy"],
        "url": "http://localhost:4000/programming/2019/12/06/algorithm-greedy.html",
        "teaser":null},{
        "title": "Soft Q-Learning",
        "excerpt":"Background keywords: energy-based policies &lt;- boltzmann distribution max-entropy policies amortized stein variational gradient descent DRL: a promising direction for autonomous acquisition of complex behaviors (+) can process complex sensory input (+) so that can acquire elaborate behavior skills using general-purpose neural network representations However, (-) most DRL methods operate on...","categories": ["Literature"],
        "tags": ["Reinforcement Learning","Soft-Q Learning"],
        "url": "http://localhost:4000/literature/2019/12/06/softq.html",
        "teaser":null},{
        "title": "Bellman Equation",
        "excerpt":"finite MDP MDPs are a classical formalization of sequential decision making, where actions influence not just immediate rewards, but subsequent situations, or states, and through those future reward Thus MDPs involve delayed reward and the need to tradeoff immediate and delayed reward In Bandit Problems: estimate the Q*(a) of each...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/rl-basic/2019/12/12/bellman.html",
        "teaser":null},{
        "title": "RL Dynamic Programming",
        "excerpt":"Dynamic Programming in RL DP here refers to algorithms that can be used to compute optimal policies given a perfect model of the env as MDP. The key idea is the use of value functions to organize and structure the search for good policies Assumption: MDP Dynamics is known Goal:...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/rl-basic/2019/12/13/rldp.html",
        "teaser":null},{
        "title": "Reinforcement Learning Index",
        "excerpt":"RL Basic      Bellman Equation   Dynamic Programming in RL   RL Advanced      Soft Q Learning   Control as Inference   Model-based RL      Model Predictive Control in CoRL 2019   Multi-Agent RL      MARL partial  ","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/rl-basic/2019/12/16/rlbasic.html",
        "teaser":null}]
