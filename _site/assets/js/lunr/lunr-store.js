var store = [{
        "title": "Data Structure Index",
        "excerpt":"Complexity CheatSheet Standard Data Structure ------------------------------------------------------------------------------------------------- | Standard | Time Complexity | Space Complexity | ------------------------------------------------------------------------------------------------- | | Average / Worst | Worst | ------------------------------------------------------------------------------------------------- | | Access | Search | Insertion | Deletion | | ------------------------------------------------------------------------------------------------- | Array | O(1) | O(n) | O(n) | O(n) | O(n) |...","categories": ["Programming"],
        "tags": ["Index","Data Structure"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/21/data-structrue-index.html",
        "teaser": null
      },{
        "title": "Data Structure 9 - tree",
        "excerpt":"Background Definition A tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes. A tree data structure can be defined recursively as a collection of nodes (starting...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Recursion","Dfs"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/21/data-structrue-tree.html",
        "teaser": null
      },{
        "title": "Data Structure 10 - binary search tree",
        "excerpt":"Background Definition A binary search tree (BST), also known as an ordered binary tree, is a node-based data structure in which each node has no more than two child nodes. The left sub-tree contains only nodes with keys less than the parent node; The right sub-tree contains only nodes with...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Binary Search Tree","Recursion"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/21/data-structrue-bst.html",
        "teaser": null
      },{
        "title": "ALgorithms 5 - dynamic programming",
        "excerpt":"Triangle leetcode 118 - Pascal’s Triangle [E] leetcode 119 - Pascal’s Triangle II [E] Input: 5 Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]] class Solution(object): #leetcode 118 def generate(self, n): if n==0: return [] dp=[[1]] for i in range(1,n): temp=[] for j in range(i-1): temp.append(dp[i-1][j]+dp[i-1][j+1]) temp.insert(0,1) temp.insert(len(temp),1) dp.append(temp) return dp #leetcode...","categories": ["Programming"],
        "tags": ["Algorithms","DP"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/23/algorithm-dp.html",
        "teaser": null
      },{
        "title": "Data Structure 9 - tree + linked list",
        "excerpt":"leetcode 109 - Convert Sorted List to Binary Search Tree [M] solution: list -&gt; array -&gt; tree class Solution(object): def sortedListToBST(self, head): l=[] while head: l.append(head.val) head=head.next return self.construct(l) def construct(self,l): if len(l)==0: return None if len(l)==1: return TreeNode(l[0]) mid=len(l)//2 root=TreeNode(l[mid]) root.left=self.construct(l[:mid]) root.right=self.construct(l[mid+1:]) return root leetcode 114 - Flatten Binary...","categories": ["Programming"],
        "tags": ["Data Structure","Tree","Linked List","Recursion"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/23/data-structrue-tree-linkedlist.html",
        "teaser": null
      },{
        "title": "Topics 1 - general",
        "excerpt":"Topics 1 general N Sum x4 leetcode 1 - Two Sum [E] - hash see hash table #nsum leetcode 167 - Two Sum II - Input array is sorted [M] - binary search see binary search #twosum leetcode 170 - Two Sum III - Data structure design [E] see design...","categories": ["Programming"],
        "tags": ["Topics"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/25/topics.html",
        "teaser": null
      },{
        "title": "Topics 3 - series",
        "excerpt":"Best Time Buy n Sell leetcode 121 - Best Time to Buy and Sell Stock (Once) [E] - record min and max Input: [7,1,5,3,6,4] Output: 5 Explanation: Buy on 1 and sell on 6, profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger...","categories": ["Programming"],
        "tags": ["MinMax","Bfs","Dfs","DP","Recursion","Topics","Hash Table","Binary Search","N-Sum","Sorting"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/25/topics-series.html",
        "teaser": null
      },{
        "title": "Data Structure 3 - string",
        "excerpt":"Background Definition A string is traditionally a sequence of characters, either as a literal constant or as some kind of variable. The latter may allow its elements to be mutated and the length changed, or it may be fixed (after creation). A string is generally considered as a data type...","categories": ["Programming"],
        "tags": ["Data Structure","String","Palindrome","Dfs"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/26/data-structrue-string.html",
        "teaser": null
      },{
        "title": "ALgorithms 8 - breadth first traversal",
        "excerpt":"bfs graph normally use queue Problems leetcode 127 - Word Ladder [M] see topics3 leetcode 286 - Walls and Gates [M] You are given a m x n 2D grid initialized with these three possible values: -1 - A wall or an obstacle 0 - A gate INF - Infinity...","categories": ["Programming"],
        "tags": ["Algorithms","Bfs"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/27/algorithm-bfs.html",
        "teaser": null
      },{
        "title": "Data Structure 7 - queue",
        "excerpt":"Background Definition A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first....","categories": ["Programming"],
        "tags": ["Data Structure","Queue","Python Collections"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/27/data-structrue-queue.html",
        "teaser": null
      },{
        "title": "Data Structure 1 - array",
        "excerpt":"Background Definition An array data structure, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored such that the position of each element can be computed from its index tuple by a mathematical...","categories": ["Programming"],
        "tags": ["Data Structure","List","MinMax"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/29/data-structrue-array.html",
        "teaser": null
      },{
        "title": "Data Structure 2 - matrix",
        "excerpt":"Cracking 1.7 Rotate Matrix: Given an image represented by an nxn matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degree. Can you do this in place? Solution: TO(n^2) for i=0 to n: temp=top[i] top[i]=left[i] left[i]=bottom[i] bottom[i]=right[i] right[i]=temp class Solution():...","categories": ["Programming"],
        "tags": ["Data Structure","Matrix","Board Game"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/29/data-structrue-matrix.html",
        "teaser": null
      },{
        "title": "ALgorithms 7 - depth first traversal",
        "excerpt":"Definition String simple scanning Input: ‘abcd’ Output: [[‘a’, ‘b’, ‘c’, ‘d’], [‘a’, ‘b’, ‘cd’], [‘a’, ‘bc’, ‘d’], [‘a’, ‘bcd’], [‘ab’, ‘c’, ‘d’], [‘ab’, ‘cd’], [‘abc’, ‘d’], [‘abcd’]] Bars: a b c d _ _ _ _ _ _ ___ _ ___ _ _ _____ ___ _ _ ___ ___ _____...","categories": ["Programming"],
        "tags": ["Algorithms","Dfs","Palindrome","Recursion"],
        "url": "http://localhost:4000/judy_blog/programming/2019/10/31/algorithm-dfs.html",
        "teaser": null
      },{
        "title": "Data Structure 14 - graph",
        "excerpt":"Background Definition A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as, 0 - 1 \\...","categories": ["Programming"],
        "tags": ["Data Structure","Graph","Topological Sort"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/01/data-structrue-graph.html",
        "teaser": null
      },{
        "title": "OThers 2 - bit manipulation",
        "excerpt":"Python Operation ‘&amp;’, and, for carrying（进位） ‘|’, or ’~’, opposite ~100 &gt;&gt;-101 ’«’, one bit left, for power of 2 m=3 #11 m&lt;&lt;=1 m=6 #110 m&lt;&lt;=1 m=12 #1100 ’»’, one bit right, for power of 2 m=5 #101 m&gt;&gt;=1 m=2 #10 m&gt;&gt;=1 m=1 #1 m&gt;&gt;=1 m=0 #0 m&gt;&gt;=1 m=0 #0...","categories": ["Programming"],
        "tags": ["Others"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/02/others-bit-manipulation.html",
        "teaser": null
      },{
        "title": "Data Structure 5 - linked list",
        "excerpt":"Background Definition A linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic...","categories": ["Programming"],
        "tags": ["Data Structure","Linked List","Pointers"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/08/data-structrue-linkedlist.html",
        "teaser": null
      },{
        "title": "Selected Papers - CoRL 2019",
        "excerpt":"Deep Value Model Predictive Control Motivation the sparsity of the reward and potential non-differentiability rule out the possibility of using Trajectory Optimization (TO) Goal combine model-based and sample-based approaches to exploit the knowledge of the system dynamics while effectively exploring the env MPC - a model-based Trajectory Optimization approach MPC...","categories": ["Literature"],
        "tags": ["MPC","Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/literature/2019/11/11/selected-paper-corl.html",
        "teaser": null
      },{
        "title": "OThers 1 - math",
        "excerpt":"Greatest Common Divisor Example: gcd(2,4) -&gt; 2 gcd(3,0) -&gt; 3 gcd(-5,-10) -&gt; -5 #loop def gcd(x,y): while y: x,y=y,x%y return x #recursive def gcd(x,y): if y==0: return x else: gcd(y,x%y) #one line max([x for x in range(1,a+1) if a%x==0 and b%x==0]) #or [x for x in range(1,a+1) if a %...","categories": ["Programming"],
        "tags": ["Others","Point","Greatest Common Divisor","Python Collections","Hash Table"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/12/others-math.html",
        "teaser": null
      },{
        "title": "Data Structure 15 - python built-in",
        "excerpt":"lambda def identity(x): lambda x:x &lt;=&gt; return x (lambda x,y:x+y)(2,3) &gt;&gt;5 add_one=lambda x:x+1 add_one(2) &gt;&gt;3 cmp=lambda x,y: 1 if x+y&gt;y+x else -1 cmp('54','109') &gt;&gt;1 #54109&gt;10954 cmp('109','54') &gt;&gt;-1 #10954&lt;54109 higher-order functions high_fun=lambda x,func:x+func(x) high_fun(2,lambda x:x*x) &gt;&gt;6 lambda with args and kwargs (lambda x, y, z: x + y + z)(1, 2,...","categories": ["Programming"],
        "tags": ["Data Structure","Python collections","Python itertools","Queue","Hash Table"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html",
        "teaser": null
      },{
        "title": "Data Structure 6 - stack",
        "excerpt":"Background Definition Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). There are many real-life examples of a stack. Consider an example of plates stacked over one another in...","categories": ["Programming"],
        "tags": ["Data Structure","Stack","Calculator","Hash Table","Parentheses"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/13/data-structrue-stack.html",
        "teaser": null
      },{
        "title": "ALgorithms 3 - back tracking",
        "excerpt":"Definition If cannot go forward, go back! Parentheses leetcode 22 - Generate Parentheses [M] Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. For example, given n = 3, a solution set is: [”((()))”, “(()())”, “(())()”, “()(())”, “()()()”] Palindrome leetcode 131 - Palindrome Partitioning...","categories": ["Programming"],
        "tags": ["Algorithms","Back Tracking","Parentheses","Recursion"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/13/algorithm-backtracking.html",
        "teaser": null
      },{
        "title": "Control as Inference",
        "excerpt":"Introduction the Equivalence probabilistic inference under deterministic dynamics - - a generalization of RL | &lt;=&gt; max entropy RL | variational inference - - optimal control problem under stochastic dynamics Probabilistic Graphical Models (PGMs) provide a consistent and flexible framework to devise principled objectives set up models that reflect the...","categories": ["Literature"],
        "tags": ["Soft-Q Learning","KL Divergence","Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/literature/2019/11/13/control-as-inference.html",
        "teaser": null
      },{
        "title": "ALgorithms 2 - binary search",
        "excerpt":"Time Complexity O(log n) Find Element in Array leetcode 153 - Find Minimum in Rotated Sorted Array [M] Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand, find the minimum element Example 1: Input: [3,4,5,1,2] Output: 1 Example 2: Input: [4,5,6,7,0,1,2] Output: 0...","categories": ["Programming"],
        "tags": ["Algorithms","Binary Search","N-Sum"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/13/algorithm-binarysearch.html",
        "teaser": null
      },{
        "title": "ALgorithms 1 - sorting",
        "excerpt":"Background Big O Table ------------------------------------------------------------------ | Sort | Time Complexity | Space Complexity | ------------------------------------------------------------------ | | Average | Best | Worst | Worst | ------------------------------------------------------------------ | Tim | O(n) | O(nlogn) | O(nlogn) | O(n) | | Merge | O(nlogn) | O(nlogn) | O(nlogn) | O(n) | | Quick...","categories": ["Programming"],
        "tags": ["Algorithms","Bucket Sort"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/14/algorithm-sorting.html",
        "teaser": null
      },{
        "title": "Data Structure 4 - hash table",
        "excerpt":"Definition A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from...","categories": ["Programming"],
        "tags": ["Data Structure","Hash Table","N-Sum"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/14/data-structrue-hash.html",
        "teaser": null
      },{
        "title": "OThers 4 - design",
        "excerpt":"Stack leetcode 155 - Min Stack [E] leetcode 716 - Max Stack [E] see stack #design Tree leetcode 173 - Binary Search Tree Iterator [M] see bst #basic leetcode 208 - Implement Trie (Prefix Tree) [M] see trie Two Sum leetcode 170 - Two Sum III - Data structure design...","categories": ["Programming"],
        "tags": ["Others","Stack","N-Sum"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/15/others-design.html",
        "teaser": null
      },{
        "title": "OThers 9 - sql",
        "excerpt":"leetcode 175 - Combine Two Tables [E] leetcode 176 - Second Highest Salary [E] leetcode 177 - Nth Highest Salary [M] lettcode 178 - Rank Scores [M] leetcode 180 - Consecutive Numbers [M] leetcode 181 - Employees Earning More Than Their Managers [E] leetcode 182 - Duplicate Emails [E] leetcode...","categories": ["Programming"],
        "tags": ["Others","SQL"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/15/others-sql.html",
        "teaser": null
      },{
        "title": "OThers 10 - file",
        "excerpt":"leetcode 192 - Word Frequency [M]   leetcode 194 - Transpose File [M]   leetcode 195 - Tenth Line [M]   with open('tenthline.txt','r') as f:      for i,l in enumerate(f):         if i==9:             print(l)  ","categories": ["Programming"],
        "tags": ["Others","file"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/18/others-file.html",
        "teaser": null
      },{
        "title": "OThers 3 - regex",
        "excerpt":"command leetcode 193 - Valid Phone Numbers [E] Given a text file file.txt that contains list of phone numbers (one per line), write a one liner bash script to print all valid phone numbers. You may assume that a valid phone number must appear in one of the following two...","categories": ["Programming"],
        "tags": ["Others","regex"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/18/others-regex.html",
        "teaser": null
      },{
        "title": "ALgorithms 9 - topological sort",
        "excerpt":"Background Motivation Many real world situation can be modeled as a graph with directed edges where some events must occur before others, say prerequisites problems, i.e. school class prerequisites program dependencies build systems advanced-packaging tool (apt-get) event/task scheduling assembly instructions For example, school class prerequisites ---&gt; class C ---&gt; class...","categories": ["Programming"],
        "tags": ["Algorithms","Graph"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/20/algorithm-topological.html",
        "teaser": null
      },{
        "title": "Data Structure 12 - trie",
        "excerpt":"Definition Trie is an efficient information retrieval data structure. Using Trie, search complexities can be brought to optimal limit (key length). If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N, where M is maximum string length and N...","categories": ["Programming"],
        "tags": ["Data Structure","Tree"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/29/data-structrue-tree-trie.html",
        "teaser": null
      },{
        "title": "Data Structure 8 - heap",
        "excerpt":"Background Definition A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property: In a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or...","categories": ["Programming"],
        "tags": ["Data Structure","Heap"],
        "url": "http://localhost:4000/judy_blog/programming/2019/11/30/data-structrue-heap.html",
        "teaser": null
      },{
        "title": "ALgorithms 10 - union find",
        "excerpt":"Background Definition A disjoint-set data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. A union-find algorithm is an algorithm that performs two useful operations on such a data structure: Find: Determine which subset a particular element is...","categories": ["Programming"],
        "tags": ["Algorithms","Union Find"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/02/algorithm-unionfind.html",
        "teaser": null
      },{
        "title": "Data Structure 8 - priority queue",
        "excerpt":"Definition A priority queue is an abstract data type which is like a regular queue or stack data structure, but where additionally each element has a “priority” associated with it. In a priority queue, an element with high priority is served or dequeued before an element with low priority. If...","categories": ["Programming"],
        "tags": ["Data Structure","Queue","Priority Queue","Heap"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/02/data-structrue-priorityqueue.html",
        "teaser": null
      },{
        "title": "OThers 11 - object-oriented programming",
        "excerpt":"Object Copying In object-oriented programming, object copying is creating a copy of an existing object, a unit of data in object-oriented programming. The resulting object is called an object copy or simply copy of the original object. Copying is basic but has subtleties and can have significant overhead. There are...","categories": ["Programming"],
        "tags": ["Others"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/03/others-oop.html",
        "teaser": null
      },{
        "title": "ALgorithms 6 - divide and conquer",
        "excerpt":"Definition Divide and Conquer is an algorithmic paradigm. A typical Divide and Conquer algorithm solves a problem using following three steps. Divide: Break the given problem into subproblems of same type. Conquer: Recursively solve these subproblems Combine: Appropriately combine the answers A classic example of Divide and Conquer is Merge...","categories": ["Programming"],
        "tags": ["Algorithms","Divide and conquer"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/03/algorithm-dividenconquer.html",
        "teaser": null
      },{
        "title": "Data Structure 13 - segment tree",
        "excerpt":"Definition A segment tree also known as a statistic tree is a tree data structure used for storing information about intervals, or segments. It allows querying which of the stored segments contain a given point. It is, in principle, a static structure; that is, it’s a structure that cannot be...","categories": ["Programming"],
        "tags": ["Data Structure","Segment Tree"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/03/data-structrue-segmenttree.html",
        "teaser": null
      },{
        "title": "Multi Agent Reinforcement Learning",
        "excerpt":"Background In cooperative MARL, one central challenge is coping with the size of the joint action space, which grows exponentially in the number of agents (Game theory suffers this problem) Efficient MARL therefore must be able to generalize over large joint action spaces, in the same way taht CNN allows...","categories": ["Literature"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/literature/2019/12/04/marl.html",
        "teaser": null
      },{
        "title": "OThers 12 - python class",
        "excerpt":"Public and Private   class M():     def public(self):         print('You can see me!')      def _private(self):         print('You cannot see me!')  m=M() m.public() &gt;&gt;You can see me! m._private() ??? &gt;&gt;'You cannot see me!'  ","categories": ["Programming"],
        "tags": ["Others"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/06/others-pythonclass.html",
        "teaser": null
      },{
        "title": "ALgorithms 4 - greedy",
        "excerpt":"Background Definition A greedy algorithm is any algorithm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the intent of finding a global optimum. For example, a greedy strategy for the traveling salesman problem (which is of a high computational complexity) is the following...","categories": ["Programming"],
        "tags": ["Algorithms","Greedy"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/06/algorithm-greedy.html",
        "teaser": null
      },{
        "title": "Soft Q-Learning",
        "excerpt":"Background keywords: energy-based policies &lt;- boltzmann distribution max-entropy policies amortized stein variational gradient descent DRL: a promising direction for autonomous acquisition of complex behaviors (+) can process complex sensory input (+) so that can acquire elaborate behavior skills using general-purpose neural network representations However, (-) most DRL methods operate on...","categories": ["Literature"],
        "tags": ["Reinforcement Learning","Soft-Q Learning"],
        "url": "http://localhost:4000/judy_blog/literature/2019/12/06/softq.html",
        "teaser": null
      },{
        "title": "Bellman Equation",
        "excerpt":"finite MDP MDPs are a classical formalization of sequential decision making, where actions influence not just immediate rewards, but subsequent situations, or states, and through those future reward Thus MDPs involve delayed reward and the need to tradeoff immediate and delayed reward In Bandit Problems: estimate the Q*(a) of each...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2019/12/12/bellman.html",
        "teaser": null
      },{
        "title": "RL Dynamic Programming",
        "excerpt":"Dynamic Programming in RL DP here refers to algorithms that can be used to compute optimal policies given a perfect model of the env as MDP. The key idea is the use of value functions to organize and structure the search for good policies Assumption: MDP Dynamics is known Goal:...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2019/12/13/rldp.html",
        "teaser": null
      },{
        "title": "Reinforcement Learning Index",
        "excerpt":"RL Basic      Bellman Equation   Dynamic Programming in RL   Q-function Learning   Operators in RL   POMDP   RL Advanced      Maximum Entropy RL   Soft Q Learning   Control as Inference   Literature Review      Model Predictive Control in CoRL 2019   MARL partial   Modular RL   Model-based RL   Multi-Agent RL   Sim2Real   Domain Randomization  ","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning","Index"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2019/12/16/rlbasic.html",
        "teaser": null
      },{
        "title": "Topics 2 - multiple answers",
        "excerpt":"Majority Elements leetcode 169 - Majority Element [E] [Hash, Set, Counter, Sort, Randomization, Divide n Conquer, Moore Voting, Bit Manipulation] Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times. Examples: Input: [3,2,3] Output: 3 Input:...","categories": ["Programming"],
        "tags": ["MinMax","Bfs","Dfs","DP","Recursion","Topics","Hash Table","Binary Search","N-Sum","Sorting"],
        "url": "http://localhost:4000/judy_blog/programming/2019/12/16/topics-multians.html",
        "teaser": null
      },{
        "title": "Q-function Learning",
        "excerpt":"Definition       Algorithms      References  ","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2019/12/17/qfunctionlearning.html",
        "teaser": null
      },{
        "title": "Stochastic Optimization",
        "excerpt":"Background Stochastic optimization (SO) methods are optimization methods for minimizing or maximizing an objective function when randomness is present. Randomness Injection through: the objective functions the constraint sets can be other ways like random iterates, etc Algorithms stochastic approximation SA [Robbins and Monro 1951] stochastic gradient descent finite-difference SA [Kiefer...","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2019/12/18/stochasticoptimization.html",
        "teaser": null
      },{
        "title": "Markov Chain Monte Carlo",
        "excerpt":"Motivation It turns out sampling from any but the most basic probability distribution is a difficult task. Methods include inverse transform sampling (IRT) rejection sampling (RS) IRT requires the cumulative distribution function aka normalization constant, which can be obtained by numerical integration. (-) however, it quickly gets infeasible with an...","categories": ["ML-Basic"],
        "tags": ["Machine Learning","sampling","MCMC"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2019/12/20/mcmc.html",
        "teaser": null
      },{
        "title": "Modular RL",
        "excerpt":"Modular Deep Reinforcement Learning with Temporal Logic Specification a modular Deep Deterministic Policy Gradient (DDPG) architecture is proposed to generate a low-level control policy Deep reinforcement learning is an emerging paradigm for autonomous solving of decision-making tasks in complex and unknown environments. However, tasks featuring extremely delayed rewards are often...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2020/01/16/modulerrl.html",
        "teaser": null
      },{
        "title": "Energy-based Model",
        "excerpt":"Definition The main purpose of statistical modeling and machine learning is to encode dependencies between variables. By capturing those dependencies, a model can be used to answer questions about the values of unknown variables given the values of known variables. Energy-Based Models (EBMs) capture dependencies by associating a scalar energy...","categories": ["ML-Basic"],
        "tags": ["EBM"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/02/05/energybasedmodel.html",
        "teaser": null
      },{
        "title": "Restricted Boltzmann Machine",
        "excerpt":"Energy-based Model EBM defines a probability distribution through an Energy function exp(-E(x)) exp(-E(x)) p(x) = ----------- = ----------- Z Σ exp(-E(x)) x Z = Σ exp(-E(x)) x An EBM can be learned by performing SGD on the empirical negative log-likelihood of the training data L(θ,D) = 1/N Σ log p(x_i)...","categories": ["ML-Basic"],
        "tags": ["EBM"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/02/10/RBM.html",
        "teaser": null
      },{
        "title": "Gibbs Sampling",
        "excerpt":"Definition In statistics, Gibbs sampling or a Gibbs sampler is a Markov chain Monte Carlo (MCMC) algorithm for obtaining a sequence of observations which are approximately from a specified multivariate probability distribution, when direct sampling is difficult. This sequence can be used to approximate the joint distribution (i.e. to generate...","categories": ["ML-Basic"],
        "tags": ["Machine Learning","sampling","MCMC"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/02/18/gibbssampling.html",
        "teaser": null
      },{
        "title": "Machine Learning Index",
        "excerpt":"Basic Distributions I Binomial Distributions II Multinomial KL Divergence Sampling Importance Sampling MCMC includes Metropolis-Hastings Gibbs Sampling MCMC - a method that repeatedly draws random values for the parameters of a distribution based on the current values. Each sample of values is random, but the choices for the values are...","categories": ["ML-Basic"],
        "tags": ["Machine Learning","Index"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/02/19/mlbasic.html",
        "teaser": null
      },{
        "title": "Importance Sampling",
        "excerpt":"Definition Consider a scenario for calculating an expectation of function f(x), where x~p(x) E[f(x)] = ∫ f(x)p(x) dx ≈ 1/n Σ_n f(x_i) The Monte Carlo sampling is to simply sample x from p(x), and take the average of all samples to get an estimation of the expectation Problem: What if...","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/02/21/importancesampling.html",
        "teaser": null
      },{
        "title": "Maximum Entropy RL",
        "excerpt":"Definition Randomness is for exploration a ~ π(a|s) - policy is defined by a probability distribution, in many RL algorithms For discrete actions, picking one of many possible actions, a categoritcal distribution is used (left fig) For continuous actions, a Gaussian with a mean and a std may be used...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2020/03/02/maxentrl.html",
        "teaser": null
      },{
        "title": "Entropy & KL Divergence",
        "excerpt":"Entropy Entropy gives us a way to quantify the information content of a given probability distribution n H(X) = - Σ p(x_i) log p(x_i) i=1 Suppose we have a simple probability distribution over the likelihood of a coin flip resulting in heads or tails [p,1-p] Plugging [p,1-p] into H(X), we...","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/03/02/kl.html",
        "teaser": null
      },{
        "title": "Hidden Markov Model",
        "excerpt":"Definition   Reference   https://medium.com/@kangeugine/hidden-markov-model-7681c22f5b9   https://towardsdatascience.com/introduction-to-hidden-markov-models-cd2c93e6b781  ","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/03/03/hmm.html",
        "teaser": null
      },{
        "title": "Variational Inference",
        "excerpt":"Definition   Reference   https://zhiyzuo.github.io/VI/#a-motivating-example   https://www.slideshare.net/PeadarCoyle/variational-inference-in-python  ","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/03/03/variationalinference.html",
        "teaser": null
      },{
        "title": "Operators in RL",
        "excerpt":"Background There is a fundamental tension in decision making between choosing the action that has highest expected utility and avoiding ‘starving’ the other actions. Related context: exploration-exploitation dilemma [Thrun 1992] non-stationary decision problems [Sutton 1990] when interpreting observed decisions [Baker et al 2007] softmax operator can be used for value-function...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2020/03/04/rloperators.html",
        "teaser": null
      },{
        "title": "Distributions I",
        "excerpt":"Keywords Binomial distributions Multimonial distributions for Discrete random variables Continuous random variables Density Estimation Model p(x) of a random variable x, given a finite set {x_1,x_2,…,x_N} of observations Assumption: Data points are Independent and Identically Distributed (I.I.D) Density Estimation is fundamentally ill-posed, cuz there are infinitely many probability distributions that...","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/03/05/distributions.html",
        "teaser": null
      },{
        "title": "Distributions II",
        "excerpt":"Multinomial Variables K-dimensional vector X with one x_k equals 1, others equal 0, i.e. X=(0,1,0,0,0)’ Note: Σ_K x_k=1 If we denote the probability of x_k=1 by the parameter μ_k, i.e. x_2=1 with μ_2=0.3 K i.e. p(x|μ_) = ∏ μ_k^(x_k) = μ_1^x_1 * μ_2^x_2 * μ_3^x_3 * μ_4^x_4 * μ_5^x_5 k=1...","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/03/10/distributions2.html",
        "teaser": null
      },{
        "title": "Domain Randomization",
        "excerpt":"Background Optimal Control(+): more efficient Optimal Control(-): Optimal Control requires a transition model to solve the optimal sequence of actions Modeling certain classes of objects can require expensive simulation steps, and often physical parameters of real objects that are not known in detail RL(+): Require no model Learn direct mapping...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2020/03/12/domainrandom.html",
        "teaser": null
      },{
        "title": "Dimension Reduction",
        "excerpt":"PCA PCA can be defined as the orthogonal projection of the data onto a lower dimensional linear space, known as the principal subspace, such that the variance of the projected data is maximized. PCA can also be defined as the linear projection that minimizes the average projection cost, defined as...","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/03/25/pcatsne.html",
        "teaser": null
      },{
        "title": "Grid RBF - SARSA, Q",
        "excerpt":"RBF RBF models the data using smooth transitioning circular shapes instead of sharp cut-off circles. RBF enables us to be aware of the the rate of the closeness between centroids and any data point irrespective of the range of the distance. Simple Implementation 1d 4xRBF, 8xRBF, normalized center 0~1, data...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2020/04/14/gridrbf.html",
        "teaser": null
      },{
        "title": "Neural Network",
        "excerpt":"Definition A single neuron: x1 x2 . -&gt; a = w' x + b -&gt; y=f(a) . 1 1xn nx1 1 1 . x - input a - activations w,b - weights and bias, parameters y - output f() - activation function Multi-layers, fully connected a11 a21 y1 x1 -/&gt;...","categories": ["ML-Basic"],
        "tags": ["Machine Learning"],
        "url": "http://localhost:4000/judy_blog/ml-basic/2020/04/15/nn.html",
        "teaser": null
      },{
        "title": "Eligibility Traces",
        "excerpt":"Definition bridge TD to Monte Carlo methods (forward view) a temporary record of the occurrence of an event, such as the visiting of a state of the taking of an action (backward view) The trace marks the memory parameters associated with the event as eligible for undergoing learning changes TD...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2020/04/27/eligitilityt.html",
        "teaser": null
      },{
        "title": "Semi-gradient N-step SARSA",
        "excerpt":"General Update Rule The general approach to computing the estimations of value functions is to have the agent follow policy π and maintain for each state (or state-action) a running average of the returns that follow NewEstimate &lt;- OldEstimate + α [Target - OldEstimate] Target - the return from the...","categories": ["RL-Basic"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/rl-basic/2020/05/11/semigradientsarsan.html",
        "teaser": null
      },{
        "title": "Soft Actor Critic",
        "excerpt":"Background model-free DRL: (-) very high sample complexity: even relatively simple tasks can require millions of steps of data collection, and complex behaviors with high-dimensional observations might need substantially more (-) brittle convergence properties, which necessitate meticulous hyperparameter tuning on-policy learning, i.e. TRPO,PPO,A3C, poor sample efficiency because: they require new...","categories": ["Literature"],
        "tags": ["Reinforcement Learning","Soft-Q Learning"],
        "url": "http://localhost:4000/judy_blog/literature/2020/07/10/softac.html",
        "teaser": null
      },{
        "title": "Curiosity",
        "excerpt":"Background Deal with sparse reward: curiosity-driven / intrinsic motivation intrinsic curiosity model curiosity in model-based RL curriculum learning automatic generation of easy goals learning to select easy tasks auxiliary tasks reward shaping dense reward Curiosity [1] curiosity can serve as an intrinsic reward signal to enable the agent to explore...","categories": ["Literature"],
        "tags": ["Reinforcement Learning"],
        "url": "http://localhost:4000/judy_blog/literature/2020/12/03/curiosity.html",
        "teaser": null
      }]
