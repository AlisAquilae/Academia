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
We are going to couple the system, which introduces complexity in what we discussed yesterday.
- One-sided coupled reservoirs (one bucket feeds into another)
- Double-coupled reservoirs (two buckets can feed into each other)

>[!Warning]
>See slides for example formulas

# One-sided coupled reservoirs
First set of formulas (slide 8): more general formulas, can relate to either one-sided or coupled.

We can write these formulas in matrix notation. We will use matrix notation when discussing coupling today.

>[!Important]
>Any linear ODE in time has an analytical solution


We end up with an analytical solution of vector C (input), matrix T and vector of eigenvalues (e)

Timestep should be smaller than 1/e

>[!Example]
>If e = 5t and e = -2t, smallest timestep should be less than 1/5 = 0.2

In this context, the eigenvalues are independent of the external inputs, meaning the timestep is independent of the input. The same holds for the independence of the initial condition. 

>[!Important]
>We want the numerical scale to be smaller than the smallest system scale (i.e. smallest eigenvalue)

# Double-coupled reservoirs
Slightly more complex, but more realistic: two-way coupled. 

Be careful of 'hidden' eigenvalues. Always do the full calculation, don't eyeball it

Eigenvalue analysis only possible for linear systems. 

