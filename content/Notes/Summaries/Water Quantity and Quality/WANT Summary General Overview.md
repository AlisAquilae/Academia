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
# Introduction
This course is about flow modelling. We can model different topics, such as turbulent mixing of fluid layers, the water level evolution of lakes, the turbulent dispersion of forest fire plumes or moisture transport in the atmosphere. 

All these models have a few things in common:
- They all involve flow in space
- They all involve flow in time
- Most are modeled using some form of the advection-diffusion equation:

$$
\frac{\partial s}{\partial t} = -u \frac{\partial s}{\partial x} + D \frac{\partial^2 s}{\partial x^2}
$$

We call our type of models **environmental flow models**

We describe environmental flow models in terms of balance equations, where the balance is defined in terms of fluxes (internal and external)

We will discuss three different techniques for solving flow equations:
- [[Finite Differences]] (solving equations on a spatial grid)
- [[Finite Volumes]] (budgeting flow in control volumes)
- [[Finite Elements]] (budgeting flow in control volumes with more accuracy)

When dealing with flow models, we have to deal with different kinds of uncertainty:
- Uncertainty in initial conditions: it is often difficult to get high quality data, but slight changes in the initial conditions can have enormous impacts on the outcome of our models
- Uncertainty in flow parameters: many models constants or parameters vary in space, and they are often poorly known. 