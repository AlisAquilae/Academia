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
Today: upscaling. Processes on a tiny scale should be aggregated or averaged to start with regional modelling.

2 presentations: upscaling of conductivity fields, and upscaling of ditches (draining systems).

---
# Hydraulic conductivity ($K$)
There is flow through pores, or flow in individual flow paths

$$
K = \frac{\kappa \rho g}{\mu}
$$

Where
- $\kappa$ is the intrinsic permeability, i.e. 'pore space'
- $\rho$ is the density of the fluid
- $\mu$ is the viscosity of the fluid

$K$ has a huge range, depending on the grain size. Distribution, however, is log-normal. 

---
# Upscaling
How to come to a k-field on a regional/model scale (order km2)? Based on:
- Statistical properties "k-samples" (boreholes, pumping tests, etc.), using e.g. mean, SD, correlation length, angle of k
- Upscaling flow relations: layering

Space/flow scales: does Darcy's law hold on every scale? Is based on assumption of homogeneity within a control volume. This holds for very small CV, but not for large CV. 

Suppose many CV's into one single model block. How to average (scale-up)?
- Arithmetic average
- Geometric average
- Harmonic average

Consider a stationary box (no storage and change in storage in time). Many boxes in a single volume, each with its own flow direction and magnitude. 