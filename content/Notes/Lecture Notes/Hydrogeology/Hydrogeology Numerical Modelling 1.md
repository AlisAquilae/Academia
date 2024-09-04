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
Which data is required:
- We are going to use hydraulic properties: k, C (S for storage coefficient)
- Dimensions: size flow domain. Whole model, cell size. delta x, delta y, delta z
- Know heads: top systems, boundary conditions
- 'Forcings': precipitation, evapotransporation, wells

What principles and formulas are used:
- Water balance (continuity, mass balance)
- Darcy

We are only going to discuss stationary models; no changes in time, no storage change. This can occur when we average out ten or twenty years

Qin = Qout = 0

The water balance holds for the entire model, but also for each cell. Internal is exchange with neighbours, external is recharge, evapotranspiration, etc. A water balance for a cell is:

Qinternal + Qexternal fluxes = 0

We can derive the equations using a mathematical approach and a physical approach. 

Mathematical: Using partial derivatives, Taylor series, etc.

We are going to use physical approach
- We look at Qnorth, Qeast, Qsouth, Qwest

Qwest = areaFaceWest x Darcy = Area face west x k x delta h / delta x

The 