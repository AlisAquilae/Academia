---
fileClass: Base, Lecture Notes
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# Modflow Concepts
Different packages used for different parts, for example groundwater, unsaturated zone, etc.

---
# Types of Modflow Packages
We use MODFLOD as a master, and add unsaturated zone and open water as extras.

We have
1. Flow packages (internal flow), which are required
2. Solver packages, also required
3. Optional (forcing) packages (external flow)
   - Not head-related
   - Head related (basic one-way interactions, i.e. Cauchy, or complex two-way interactions)

Flow package
- Required to solve internal flow
- Different options: BCF (block-centered flow), Hydrogeologic Unit Flow