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
- We look at Qnorth, Qeast, Qsouth, Qwest. This added together is Qinternal

Qwest = areaFaceWest x Darcy = Area face west x k x delta h / delta x

The gradient is head at the side versus head at the center

Now it comes to down to rearranging

Qnorth = delta x D x Darcy

$$
\Delta x D \times k \times \frac{\Delta h}{\Delta x}
$$

$$
\Delta x D \times k \times \frac{Hn = Hc}{Ly}
$$

Ly is the distance from the center of one cube to the other

It is always Hx - Hc

If the head at the side Hw is greater than the head at the center, Hc, we have Qin. Vice verse as well

Qin - Qout = Qwest(x) + Qeast(x + delta x)

Boundary conditions:
- Dupuit assumption: no vertical flow, only horizontal 