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


