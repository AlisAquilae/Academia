---
fileClass: Base, Concepts
Parents: ["[[Network Ordering]]", "[[Water 1 Summary Catchments]]"]
title: 
Draft: 
Status: Done
aliases: 
Related Terminology: ["[[Network Ordering]]"]
Related Notes: ["[[Water 1 Summary Catchments]]"]
Related Courses: ["[[Water 1]]"]
---
A common [[Network Ordering]] method is **Strahler Order Numbering**. Its rules are:
1. All exterior links get the order 1
2. When links of the same order merge, add one for the link downstream of the junction (e.g. two order 2's merge into an order 3)
3. When links with a different order merge, the link downstream of the junction will have the same order as the highest order of the merging links (e.g. when an order 1 and an order 3 stream merge, the downstream link is a 3rd order stream)
4. The highest order is always found at the outlet and represents the **Strahler Order** of the catchment

![[Pasted image 20240217190607.jpg]]