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

Now how to upscale all local flows into a single, uniform flow? We use space flow scaling

$$
\overline{q} = \frac{1}{V} \int\limits_V \, q \, \mathrm{d}V
$$

We look at the average $q$, meaning Darcy is also averaged. Write gradient as $i_x$ for clarity

$$
\overline{q} = - \overline{(k_x i_x)}
$$

>[!Warning]
>See slides


Variance is variation squared

All variations summed = 0

Back to the formula above, we can rewrite as

$$
\overline{q}_x = -\overline{k}_x \overline{i}_x - \overline{(k_x^0 i_x^0)}
$$

>[!Warning]
>See slides


This we have a remaining term which appears by averaging Darcy. Rewriting again,

$$
\overline{q} = - \left( \overline{k} + \frac{\overline{k^0 i^0}}{\overline{i}}\right)  \cdot \overline{i} 
$$

Thus, we find an effective hydraulic conductivity, which depends on hydraulic properties as well as local gradients (which are unknown). Thus not 100% measurable and identifiable. This is bad, because we cannot find the values. What do we do?

We calibrate the effective hydraulic conductivity. We try different averaging methods for $k$ and tweak the best one with calibration.

If we have flow parallel to layers (i.e. aquifers), we use the arithmetic mean. Sum of transmissivity and divide by sum of layer depths.

Vertical flow (aquitards) or anisotropical flow in aquifers, we use the harmonic mean. We use the total depth divided by the sum of all resistances

>[!Warning]
>See slides


How to implement this in a 500km2 model?
- Following lithology: too detailed, requires tiny cell size, very cpu itnensive, not sufficient data
- Following hydrogeology: scaled up to formations, identify aquifer and aquitard formations

Rule of thumb: when layers differ in k by 2 orders of magnitude, you can consider one an aquifer and another an aquitard. 