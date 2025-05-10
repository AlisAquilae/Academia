---
fileClass: Base, Summaries
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 1. Finite Volumes in Steady States
Finite volumes are slightly different from [[Finite Differences]]. The main difference lies in the perspective used. Whereas finite difference thinks in terms of nodes, finite volumes works with control volumes. Here, we still treat the same domain, but rather than connecting nodes, we divide the domain into blocks called control volumes. Each node is now contained inside a control volume, and rather than solving for the node, we are going to solve for the control volume. 

We have to make a few decisions on how to do so. The main decision is how to determine where one control volume ends and the other begins. There are generally two methods