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
- Different options: BCF (block-centered flow), Hydrogeologic Unit Flow (HUF), and Layer Property Flow (LPF), Upstream Weighting (UPW, variable cell activation, for example due to dry and wet conditions). LPF used mostly, for full soil layers. BCF for solving for single layers (e.g. a single aquitard)
- We mostly use confined layer types. We take depth to be fixed, i.e. constant. We can also choose convertible, i.e. unconfined aquifer, which varies cell depth with the water table. Particularly useful for wet/dry contexts

Solver packages
- SIP: Highly nonlinear system and large domain. Useful for very large systems.
- SOR: barely used, very simple but not useful for  real world
- PCG: One of the most used ones. We have an initial guess, solve water balance problem. Use gradient to gradually move towards optimal value. Continues until the tolerance we define
- NWT: Used most, especially for dry and wet problems

Optional packages / Top systems / Boundary condition packages
- NO COUPLING: not related to calculated head. Neumann (RCH, WEL)
- ONE-WAY COUPLING: Related to calculated head. Cauchy (RIV, DRN, GHB) and Dirichlet (IBOUND)
- TWO-WAY COUPLING: Flow process packages. Own water balance (budget). Own "flow"