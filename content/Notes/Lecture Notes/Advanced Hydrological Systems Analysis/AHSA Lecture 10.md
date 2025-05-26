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
# Introduction
Today: methodology

We are going to walk through a case and talk about various considerations. E.g. which processes are important, think of computational time, how accurate should model be, and of what scale?

Everything depends on your research question. Based on that, the answers of what is going to follow will change. 

Building a hydrogeological model is an iterative process. 

There are basically 3 steps to develop a conceptual model
1. Model domain: horizontal and vertical extent, boundary conditions, and initial conditions if necessary
2. Discretisation: spatial resolution, temporal resolution
3. Schematisation: subsoil hydrostratigraphic units, top-systems


---
# Domain
For the model domain, we need to define the size of our model, i.e. the extent in space and time. We cannot develop a model for the entirety of the world. We need to define boundaries. Once we have the boundaries, we need to determine what kind of boundaries we want. 

For the extent, we need to decide what should be included in the model? Which features are important?

The boundary conditions should be far enough that the impact on our area of interest are minimal. However, the regional flow patterns should be captures

Upper aquifers are more affected by local aspects. Lower aquifers capture regional groundwater flow.

Take the aquifer with largest flow and consider that as your boundary condition. Unless, of course, you have a different objective. 

This is all qualitative determination. We would like something more objective. For this we use the Leakage factor $\lambda$, which determines the distance the boundary condition should be from the area of interest. 

$$
\lambda = \sqrt{kD C}
$$

where
- $k$ is the conductivity
- $D$ is the thickness
- $kD$ is the transmissivity
- $C$ is the resistance

This describes the point where the impact of the boundary condition on our area of interest is only 5%

This distance is $3 \times \lambda$. 

We go $3 \times \lambda$ in all directions and that is the extent.

This is, of course, a thumb rule which needs to be checked. 

To account for different water layers. We are going to use

$$
\lambda = \sqrt{\sum kD \, C'}
$$

where
- $\sum kD$ is the sum of the transmissivity of all aquifers
- $C'$  is the sum of the resistances of all aquitards

Now we know a distance, but we don't know the exact boundary conditions. There are 3
- Constant head: Dirichlet
- Constant flux: Neumann
- Head-dependent flux: Cauchy

We might also need an initial condition for our first timestep. This is, of course, only required if we are making a transient simulation. Doing this also requires a storage parameter, but we will come back to this later. 

---
# Discretisation
Spatial and temporal resolution.

For spatial, we can have coarse or fine grid size, structured or unstructured. Which do we use, and how do we decide on this? Unfortunately, there is no mathematical rule. We have to decide based on our objective and our expert judgement.

In general, however, it should be small enough to capture the details we are interested in, but large enough that it does not burden the CPU too much. 

In general, choose the highest resolution you can. This is constrained by the curse of dimensionality: high resolution models need many, many, many more parameters, observations and calculations, increasing non-linearly. 

One of the solutions is to use a fine grid in and around the area if interest, and a courser area on the outer area. You can also try with a fine grid. If it performs well, try a finer version. If the difference is small, use the previous one. If it is large, use the finer one. 

For the temporal aspect, i.e. the time-step. The smaller the time-step, the more dynamic the head is. The larger the time-step, the more gradual the head change is. 

The temporal scale is also dependent on your hydrologic properties
- Specific yield and specific storage. In clays, the system is much less dynamic, meaning you can get away with a larger timestep


---
# Schematisation
This means to represent the subsoil: defining aquifers and aquitards and your top system (top boundary conditions, e.g. river, wells, etc.)

We want to translate the geologic information into a conceptual model suitable for numerical modelling. This can be from maps, cross-sections, boreholes, etc.

For aquifers, use arithmetic average, and for aquitards we use harmonic average. When it is very heterogeneous, we use the geometric average. 

For top systems, we have 2 boundary conditions:
- Independent on calculated head (well)
- Dependent on calculated head (recharge). Mostly for interaction with surface water (e.g. rivers and drains) and vegetation (Evapotranspiration)


