var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   smakdonald.github   https:\/\/smakdonald.github.io\/index.html   copyright  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The content of this text is heavily based on the 850-851 sequence of courses offered in UNL, specificlly those taught during the 2020 academic year. I am very thankful to Audrey Goodnight for sharing their .tex files with me.  And, as always, I reserve a speical thank you for Erin McNicholas and Inga Johnson for forever tinting the world of mathematics purple.  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book",
  "body": "How to Use This Book  I'm still in the process of figuring out exactly what this text is for. Some possibilities include:   Future lecture notes for the hopeful possibility that one day I will teach a course over this material.    Current notes for students taking the first year discrete sequence.    Assistance in studying for the Discrete Qualifying Exam at UNL.    Clout.     Blocks  Here are the types of environments you are likely to encounter throughout the text and what they are used for.  Definition   These are pretty standard and probably what you'd be expecting. The building blocks of what we'll be working with.   Examples   Specific instances of a definition. For example, the empty set, is an example of a set, and thus would be contained within an example environment. At some point the line between example and definition becomes incoherently blurred, but I have done my best to keep things consistent.   Theorem   A result.   Lemma   A true mathematical statement that was proven mainly to help in the proof of some theorem.   Corollary   An important result whose proof comes directly from a previous theorem.   Proposition   Results that require proof but are more specific and\/or contained in a larger result coming later.   Exploration   Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem   Used for qualifying exam problems.   Remark   Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Convention      Discussion   Usually for arguing about notation.   Footnotes   Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       "
},
{
  "id": "p-8",
  "level": "2",
  "url": "preface-1.html#p-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exploration Problem Remark Convention Discussion Footnotes "
},
{
  "id": "sec-counting",
  "level": "1",
  "url": "sec-counting.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Counting Principles",
  "body": "Basic Counting Principles  In this course we will focus on combinatorial reasoning and arguments. Often we are interested in the number of elements in a particular set. Enumeration techniques allow us to count efficiently, rather than simply listing out the elements and counting them brute-force. Today we will start by reviewing basic counting principles.    A partition of a finite set is a collection of disjoint nonempty sets whose union is :     Sum Principle (Counting by cases)   If is a finite set, and is partitioned into sets then     roduct Principle (Counting by stages)   If elements of are formed by a series of choices where there are options for the choice, regardless of previous choices made, then      The particular options available at the choice may depend on previous choices, but the number of options is the same at that step        Cartesian product  There are ways to select and for each choice there are ways to select .     A pair of distinguishable dice (say red and blue) is rolled. Let be the set of possible outcomes that have the same parity. Find . Denote an outcome by where is the number of red die, is the number of blue die. Above uses sum principle then product principle for each term.  Could also use product principle directly: since 6 ways to have , once chosen parity determined and 3 ways to select .        A simple but powerful tool is counting two ways . We can prove identities or show that two formulas are equal if we can show that each one counts the size of the same set. Usually the hard part is determining which set each side is counting.  Counting Two Ways   When two formulas count the same set, their values are equal.      By counting two ways, show that Let denote the set . We will show that each side counts the number of unordered pairs of elements from .    RHS counts using product principle: there are choices fro the first element in the pair, and then choices for the second element. Since we chose elements in order and want an unordered pair, we must divide by 2 to undo overcounting.  LHS counts using sum principle: Partition the pairs according to the largest element in the pair. If is largest, there are choices for the other element.    As a counting technique, we can compute the size of a set by establishing a bijection from to a set whose size is known. Recall that a function is a bijection if for every there is exactly one such that .  Bijection Principle   If there is a bijection from one set to another, then the two sets have the same size.      Show that the number of -lists of length equals the number of subsets of .    Define as follows:    Let so is a subset of .     where if if (so is the   incidence vector of ).    Now, given any list , it is the image of the set . Any two lists that are identical are from the same set.    So the map is a bijection.     Also note (by product principle).   Often the bijection principle or counting two ways is used in a combinatorial proof. The next principle is also a useful tool in many arguments. The idea is that in any set of numbers, there is an element that is at least as large as the average.  Pigeonhole Principle   If more than objects are placed in boxes, then there is some box that contains more than objects.    Suppose not. If there are at most objects per box, then there at most objects.    The Pigeonhole Principle generalizes as follows to classes that have quotas. Let denote the quota for items in class .  Pigeonhole Principle Generalized   If objects are partitioned into classes, with quotas , then some class meets its quota.    If not, there are at most objects placed.      Show that within any set of at least two people, there are always two people who have the same number of acquaintances.    Let be the number of people. Assume acquaintance relation is symmetric. The possible number of acquaintances any person can have is in , which has elements. Observe that not both of and may be used simultaneously within the same set of people. Thus, there are people and choices of acquaintance numbers (either or ). So by PP, some two people have the same number.    "
},
{
  "id": "def-partition",
  "level": "2",
  "url": "sec-counting.html#def-partition",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A partition of a finite set is a collection of disjoint nonempty sets whose union is :    "
},
{
  "id": "thm-sum",
  "level": "2",
  "url": "sec-counting.html#thm-sum",
  "type": "Theorem",
  "number": "1.2",
  "title": "Sum Principle (Counting by cases).",
  "body": "Sum Principle (Counting by cases)   If is a finite set, and is partitioned into sets then    "
},
{
  "id": "thm-product",
  "level": "2",
  "url": "sec-counting.html#thm-product",
  "type": "Theorem",
  "number": "1.3",
  "title": "roduct Principle (Counting by stages).",
  "body": "roduct Principle (Counting by stages)   If elements of are formed by a series of choices where there are options for the choice, regardless of previous choices made, then    "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-counting.html#remark-1",
  "type": "Remark",
  "number": "1.4",
  "title": "",
  "body": " The particular options available at the choice may depend on previous choices, but the number of options is the same at that step  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-counting.html#example-1",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": "     Cartesian product  There are ways to select and for each choice there are ways to select .     A pair of distinguishable dice (say red and blue) is rolled. Let be the set of possible outcomes that have the same parity. Find . Denote an outcome by where is the number of red die, is the number of blue die. Above uses sum principle then product principle for each term.  Could also use product principle directly: since 6 ways to have , once chosen parity determined and 3 ways to select .       "
},
{
  "id": "p-42",
  "level": "2",
  "url": "sec-counting.html#p-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "counting two ways "
},
{
  "id": "fact-two-ways",
  "level": "2",
  "url": "sec-counting.html#fact-two-ways",
  "type": "Fact",
  "number": "1.6",
  "title": "Counting Two Ways.",
  "body": "Counting Two Ways   When two formulas count the same set, their values are equal.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-counting.html#example-2",
  "type": "Example",
  "number": "1.7",
  "title": "",
  "body": "  By counting two ways, show that Let denote the set . We will show that each side counts the number of unordered pairs of elements from .    RHS counts using product principle: there are choices fro the first element in the pair, and then choices for the second element. Since we chose elements in order and want an unordered pair, we must divide by 2 to undo overcounting.  LHS counts using sum principle: Partition the pairs according to the largest element in the pair. If is largest, there are choices for the other element.   "
},
{
  "id": "p-47",
  "level": "2",
  "url": "sec-counting.html#p-47",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bijection "
},
{
  "id": "thm-bijection",
  "level": "2",
  "url": "sec-counting.html#thm-bijection",
  "type": "Theorem",
  "number": "1.8",
  "title": "Bijection Principle.",
  "body": "Bijection Principle   If there is a bijection from one set to another, then the two sets have the same size.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec-counting.html#example-3",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": "  Show that the number of -lists of length equals the number of subsets of .    Define as follows:    Let so is a subset of .     where if if (so is the   incidence vector of ).    Now, given any list , it is the image of the set . Any two lists that are identical are from the same set.    So the map is a bijection.   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-counting.html#remark-2",
  "type": "Remark",
  "number": "1.10",
  "title": "",
  "body": " Also note (by product principle).  "
},
{
  "id": "thm-pigeon",
  "level": "2",
  "url": "sec-counting.html#thm-pigeon",
  "type": "Theorem",
  "number": "1.11",
  "title": "Pigeonhole Principle.",
  "body": "Pigeonhole Principle   If more than objects are placed in boxes, then there is some box that contains more than objects.    Suppose not. If there are at most objects per box, then there at most objects.   "
},
{
  "id": "thm-general-pigeon",
  "level": "2",
  "url": "sec-counting.html#thm-general-pigeon",
  "type": "Theorem",
  "number": "1.12",
  "title": "Pigeonhole Principle Generalized.",
  "body": "Pigeonhole Principle Generalized   If objects are partitioned into classes, with quotas , then some class meets its quota.    If not, there are at most objects placed.   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec-counting.html#example-4",
  "type": "Example",
  "number": "1.13",
  "title": "",
  "body": "  Show that within any set of at least two people, there are always two people who have the same number of acquaintances.    Let be the number of people. Assume acquaintance relation is symmetric. The possible number of acquaintances any person can have is in , which has elements. Observe that not both of and may be used simultaneously within the same set of people. Thus, there are people and choices of acquaintance numbers (either or ). So by PP, some two people have the same number.   "
},
{
  "id": "sec-perm-comb",
  "level": "1",
  "url": "sec-perm-comb.html",
  "type": "Section",
  "number": "1.2",
  "title": "Permutations and Combinations",
  "body": "Permutations and Combinations  We will now look at how to count selections taken in order or without order.    First some notation. For a natural number , define    factorial       falling factorial  ( terms).     rising factorial  ( terms).       There are four main cases for choosing items from a set of elements, depending on whether the items are ordered or not ordered, or chosen with repetition or without repetition.    Let be a set of elements.   A -set in is a subset of with distinct elements.    The number of -sets will be denoted  choose .    is the number of ways to select items from without order.     -sets are sometimes called combinations.    Observe that unless (by combinatorial defn).      A multiset from is a selection of elements from where repetition is allowed.    A word of length from is a list of elements from . is the alphabet. (order matters, repetition is allowed)    A word is simple if elements\/letters are distinct.    A simple word of length from is called a permutation (order matters, no repetition)          We will now look at how to count each of these types of sets\/words. Often parts of counting problems can be cast as one of these main types, so words and subsets are useful models for counting.  Counting -words with repetition   The number of words of length from an alphabet of elements is .    By product principle, there are choices for each of the positions, so there are words.    Counting -words without repetition   The number of simple words of length from an alphabet of elements is .    Elements may not repeat in the word. There are choices for position 1, choices for position 2, etc. In general, choices for position . So word may be formed in ways.    Counting -sets (i.e. no repetition)   The number of -sets of an -set is     We will count the simple -words in two ways. From above, there are simple words from . Alternatively, we can form a simple -word by first choosing the elements from , and then permute them. This gives possible simple -words. Thus     Observe that for a fixed , is a polynomial of degree . (Later we’ll extend the definition to real-valued , but the combinatorial meaning will be lost.)  Counting multisets (i.e. repetition)   First observe that a multiset of elements from an -element set may be viewed as a choice of objects from a set of object types, where each object type occurs in unlimited supply.  A multiset is therefore determined by the multiplicities of each type chosen.      A 7-multiset of could be which may be written so repetition numbers are , respectively.     The number of -element multisets from is the same as the number of nonegative integer solutions to where is the number of copies of element chosen for the multiset.     The number of -element multisets from is .    From above, the number of -element multisets from is equivalent to the number of solutions to in nonnegative integers. We proceed by establishing a bijection from the set of these solutions to the number of lists of stars and bars.  We can represent each solution of as a list of stars, where after stars we place a bar, then stars, then bar, stars, etc. Given such a list, we can read off the values of , since will be the number of stars between the bar and the bar (assuming 0 bar and bar at ends).  This gives a bijection between solutions and star\/bar lists of length with bars.  Thus, the number of solutions is since there are this many ways to choose positions for the bars.       is number of solutions to  corresponds to solution     We can restrict the variables in the integer sum problem to be positive. Doing this leads to another useful counting model called a composition.    A composition of the positive integer is a list of positive integers summing to . The entries in the list are called parts .      There are compositions of with parts.       We convert the problem to the case of counting solutions in nonnegative integers.  Consider where . Now let for . So . The solutions to corresponds to solutions of in nonnegative integers.  (To see this, so is a solution for .)  There are such solutions, which is .    Use stars and bars.  The number of solutions in positive integers corresponds to an arrangement of stars and bars where no two bars can occur consecutively. Place the stars. There are positions between the stars where bars may be placed. So the number of arrangements is          A solution to in positive integers corresponds to in nonnegative integers (you’re just deciding where to put the extra two 1s).    "
},
{
  "id": "def-factorial",
  "level": "2",
  "url": "sec-perm-comb.html#def-factorial",
  "type": "Definition",
  "number": "1.14",
  "title": "",
  "body": "  First some notation. For a natural number , define    factorial       falling factorial  ( terms).     rising factorial  ( terms).      "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-perm-comb.html#def-permutation",
  "type": "Definition",
  "number": "1.15",
  "title": "",
  "body": "  Let be a set of elements.   A -set in is a subset of with distinct elements.    The number of -sets will be denoted  choose .    is the number of ways to select items from without order.     -sets are sometimes called combinations.    Observe that unless (by combinatorial defn).      A multiset from is a selection of elements from where repetition is allowed.    A word of length from is a list of elements from . is the alphabet. (order matters, repetition is allowed)    A word is simple if elements\/letters are distinct.    A simple word of length from is called a permutation (order matters, no repetition)         "
},
{
  "id": "prop-k-rep",
  "level": "2",
  "url": "sec-perm-comb.html#prop-k-rep",
  "type": "Proposition",
  "number": "1.16",
  "title": "Counting <span class=\"process-math\">\\(k\\)<\/span>-words with repetition.",
  "body": "Counting -words with repetition   The number of words of length from an alphabet of elements is .    By product principle, there are choices for each of the positions, so there are words.   "
},
{
  "id": "prop-k-no-rep",
  "level": "2",
  "url": "sec-perm-comb.html#prop-k-no-rep",
  "type": "Proposition",
  "number": "1.17",
  "title": "Counting <span class=\"process-math\">\\(k\\)<\/span>-words without repetition.",
  "body": "Counting -words without repetition   The number of simple words of length from an alphabet of elements is .    Elements may not repeat in the word. There are choices for position 1, choices for position 2, etc. In general, choices for position . So word may be formed in ways.   "
},
{
  "id": "prop-k-set",
  "level": "2",
  "url": "sec-perm-comb.html#prop-k-set",
  "type": "Proposition",
  "number": "1.18",
  "title": "Counting <span class=\"process-math\">\\(k\\)<\/span>-sets (i.e. no repetition).",
  "body": "Counting -sets (i.e. no repetition)   The number of -sets of an -set is     We will count the simple -words in two ways. From above, there are simple words from . Alternatively, we can form a simple -word by first choosing the elements from , and then permute them. This gives possible simple -words. Thus    "
},
{
  "id": "fact-mutlisets",
  "level": "2",
  "url": "sec-perm-comb.html#fact-mutlisets",
  "type": "Fact",
  "number": "1.19",
  "title": "Counting multisets (i.e. repetition).",
  "body": "Counting multisets (i.e. repetition)   First observe that a multiset of elements from an -element set may be viewed as a choice of objects from a set of object types, where each object type occurs in unlimited supply.  A multiset is therefore determined by the multiplicities of each type chosen.   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec-perm-comb.html#example-5",
  "type": "Example",
  "number": "1.20",
  "title": "",
  "body": "  A 7-multiset of could be which may be written so repetition numbers are , respectively.   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-perm-comb.html#remark-3",
  "type": "Remark",
  "number": "1.21",
  "title": "",
  "body": " The number of -element multisets from is the same as the number of nonegative integer solutions to where is the number of copies of element chosen for the multiset.  "
},
{
  "id": "thm-num-multisets",
  "level": "2",
  "url": "sec-perm-comb.html#thm-num-multisets",
  "type": "Theorem",
  "number": "1.22",
  "title": "",
  "body": "  The number of -element multisets from is .    From above, the number of -element multisets from is equivalent to the number of solutions to in nonnegative integers. We proceed by establishing a bijection from the set of these solutions to the number of lists of stars and bars.  We can represent each solution of as a list of stars, where after stars we place a bar, then stars, then bar, stars, etc. Given such a list, we can read off the values of , since will be the number of stars between the bar and the bar (assuming 0 bar and bar at ends).  This gives a bijection between solutions and star\/bar lists of length with bars.  Thus, the number of solutions is since there are this many ways to choose positions for the bars.   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-perm-comb.html#example-6",
  "type": "Example",
  "number": "1.23",
  "title": "",
  "body": "   is number of solutions to  corresponds to solution    "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "sec-perm-comb.html#def-composition",
  "type": "Definition",
  "number": "1.24",
  "title": "",
  "body": "  A composition of the positive integer is a list of positive integers summing to . The entries in the list are called parts .   "
},
{
  "id": "cor-num-comp",
  "level": "2",
  "url": "sec-perm-comb.html#cor-num-comp",
  "type": "Corollary",
  "number": "1.25",
  "title": "",
  "body": "  There are compositions of with parts.       We convert the problem to the case of counting solutions in nonnegative integers.  Consider where . Now let for . So . The solutions to corresponds to solutions of in nonnegative integers.  (To see this, so is a solution for .)  There are such solutions, which is .    Use stars and bars.  The number of solutions in positive integers corresponds to an arrangement of stars and bars where no two bars can occur consecutively. Place the stars. There are positions between the stars where bars may be placed. So the number of arrangements is       "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-perm-comb.html#example-7",
  "type": "Example",
  "number": "1.26",
  "title": "",
  "body": "  A solution to in positive integers corresponds to in nonnegative integers (you’re just deciding where to put the extra two 1s).   "
},
{
  "id": "sec-binomial",
  "level": "1",
  "url": "sec-binomial.html",
  "type": "Section",
  "number": "1.3",
  "title": "Binomial Theorem and Identities",
  "body": "Binomial Theorem and Identities    "
},
{
  "id": "sec-paths",
  "level": "1",
  "url": "sec-paths.html",
  "type": "Section",
  "number": "1.4",
  "title": "Paths",
  "body": "Paths  Lattice Paths     Delannoy Paths     "
},
{
  "id": "sec-counting-trees",
  "level": "1",
  "url": "sec-counting-trees.html",
  "type": "Section",
  "number": "1.5",
  "title": "Counting Trees",
  "body": "Counting Trees    "
},
{
  "id": "sec-recurrence",
  "level": "1",
  "url": "sec-recurrence.html",
  "type": "Section",
  "number": "2.1",
  "title": "Recurrence Relations",
  "body": "Recurrence Relations   "
},
{
  "id": "sec-char-eq",
  "level": "1",
  "url": "sec-char-eq.html",
  "type": "Section",
  "number": "2.2",
  "title": "Characteristic Equations",
  "body": "Characteristic Equations    "
},
{
  "id": "sec-gen-fun",
  "level": "1",
  "url": "sec-gen-fun.html",
  "type": "Section",
  "number": "2.3",
  "title": "Generating Functions",
  "body": "Generating Functions    "
},
{
  "id": "sec-ord-gen-fun",
  "level": "1",
  "url": "sec-ord-gen-fun.html",
  "type": "Section",
  "number": "2.4",
  "title": "Ordinary Generating Functions",
  "body": "Ordinary Generating Functions    "
},
{
  "id": "section-10",
  "level": "1",
  "url": "section-10.html",
  "type": "Section",
  "number": "3.1",
  "title": "Permutation Statistics",
  "body": "Permutation Statistics    "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "3.2",
  "title": "Operations and Summations",
  "body": "Operations and Summations  Convolutions     Snake Oil     "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Section",
  "number": "3.3",
  "title": "Exponential Generating Functions",
  "body": "Exponential Generating Functions    "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Section",
  "number": "3.4",
  "title": "Sterling Numbers",
  "body": "Sterling Numbers    "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Section",
  "number": "3.5",
  "title": "The Exponential Formula",
  "body": "The Exponential Formula    "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Section",
  "number": "3.6",
  "title": "Involutions, Partitions, and Diagrams",
  "body": "Involutions, Partitions, and Diagrams  Involutions     Integer Partitions     Ferrers Diagrams     "
},
{
  "id": "section-16",
  "level": "1",
  "url": "section-16.html",
  "type": "Section",
  "number": "4.1",
  "title": "Inclusion Exclusion",
  "body": "Inclusion Exclusion    "
},
{
  "id": "section-17",
  "level": "1",
  "url": "section-17.html",
  "type": "Section",
  "number": "4.2",
  "title": "Counting Under Symmetry",
  "body": "Counting Under Symmetry    "
},
{
  "id": "section-18",
  "level": "1",
  "url": "section-18.html",
  "type": "Section",
  "number": "4.3",
  "title": "Distribution Methods",
  "body": "Distribution Methods    "
},
{
  "id": "section-19",
  "level": "1",
  "url": "section-19.html",
  "type": "Section",
  "number": "5.1",
  "title": "Channel Coding",
  "body": "Channel Coding    "
},
{
  "id": "section-20",
  "level": "1",
  "url": "section-20.html",
  "type": "Section",
  "number": "5.2",
  "title": "Decoding",
  "body": "Decoding    "
},
{
  "id": "section-21",
  "level": "1",
  "url": "section-21.html",
  "type": "Section",
  "number": "5.3",
  "title": "Standard Array and Syndrome Coding",
  "body": "Standard Array and Syndrome Coding    "
},
{
  "id": "section-22",
  "level": "1",
  "url": "section-22.html",
  "type": "Section",
  "number": "5.4",
  "title": "MDS, Reed-Solomon Codes, and Polynomial Interpretation of GRS Codes",
  "body": "MDS, Reed-Solomon Codes, and Polynomial Interpretation of GRS Codes    "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
