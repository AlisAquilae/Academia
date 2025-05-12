---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Advanced Hydrological Systems Analysis]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Advanced Hydrological Systems Analysis]]"]
---
# Introduction
This course: coupling of groundwater, unsaturated zone and open water. As well as how to simplify the system. 

Focus on quantitative aspects for regional water management. 

Typically we move through a flowchart:
1. Define a problem
2. Create perceptual model: decide on the processes
3. Conceptual model: deciding on the equations
4. Procedural model: Get code running on a computer
5. Calibration (hindcasting) / sensitivity analysis: identify parameters, estimate uncertainty
6. Evaluation: compare output with observations

# Unsaturated zone
Richard's equation, mainly vertical direction.

Extinction depth: area below rooting zone

# Saturated zone
Assume horizontal flow in aquifers. Vertical flow in aquitards (Dupuit assumptions)

Recharge = net rainfall (not accounting for storage in unsaturated zone)

# Open water
Linearised (one channel in one line) St-Venant equations, constant drainage, i.e. equilibrium flow

---
# Numerics of Time and Space Scales (mostly time)

Looking at the flow-chart, this mostly looks at the procedural model: choosing the code and how to represent space and time discretizations.

Depending on the system you are looking at, different scales are relevant (e.g. cm vs m, seconds vs hours)

In our case, open water behaves the fastest, and therefore mostly dictates our approach. 

Start with simple reservoir model (bucket model). This visualises our catchment, with a Qout. We find an analytical solution which depends on the previous Qout. 

An analytical solution is an exact solution of the differential equation. However, we cannot always find this mathematically. Thus, we often make simplifying assumptions. In this case, we make a numerical solution which approximates the analytical one. 

>[!Important]
>The numerical scale should be less than the system scale, or the scale of system dynamics

Before, there was no representation of input. What if we do this now? Qin is constant, and the water level converges to an equilibrium. The lesson learnt mentioned above in the important box still holds for this case.

Now what happens if input is variable? We take, for now, input as oscillating one per day. 
- When Tnum is smaller than Tin and smaller than Tres, it does decently, but not great
- When Tnum is much smaller, it does better