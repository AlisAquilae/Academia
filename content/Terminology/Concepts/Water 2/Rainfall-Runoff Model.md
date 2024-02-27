---
fileClass: Base, Concepts
title: 
Parents: ["[[Water 2 Summary Catchment Hydrology]]", "[[Reader Water 2-Chapter 1.1-Rainfall-Runoff Processes]]"]
Draft: 
Status: To Revisit
aliases: 
Related Notes: ["[[Water 2 Summary Catchment Hydrology]]", "[[Reader Water 2-Chapter 1.1-Rainfall-Runoff Processes]]"]
Related Terminology: 
Related Courses: ["[[Water 2]]"]
---
**Rainfall-Runoff Models** are a simplified representation of hydrological processes within a catchment. 

There are various rainfall-runoff models which all have specific advantages and disadvantages. Which model you use completely depends on the modelling goal, your catchment (characteristics) and the available data. 

We can subdivide rainfall-runoff models in three types:
- **Black box models** have almost no physical background. Hence, the relationship between precipitation and runoff is empirical. These kind of models seek a relationship between input (precipitation and often also evapotranspiration) and output (the discharge), without using any information about the catchment or other information about hydrological processes. Black box models are simple to use, but sometimes they are too simple to simulate all important processes in a catchment. Black box models are sometimes used for flood forecasting in small catchments. 

![[20240227_131138.jpg]]

- **Parametric Models** or parameter-based models are based on simplified representations of catchment processes with often reservoirs, fluxes (variables that flow, such as precipitation or drainage), states (variables that do not flow, such as water level) and paramaters (which determine the relationship between variables). The structure of the model is fixed and more complex than the structure of black box models. A more complex structure results in a simulation of more processes, but this also results in more parameters. Parameters are sometimes environmental characteristics of an area (such as the [[Permeability|Conductivity]] of a soil), but some parameters are also quite abstract (such as the relative share of the quick-discharge processes). We often subdivide large catchments into smaller catchments (e.g. due to spatial variation in precipitation or soil types). We often use parametric models to study the effect of climate change or to forecast river discharges in scarcely measured catchments

![[20240227_131145.jpg]]

- **Physically-based models** are based on detailed catchment characteristics and water flow equations, such as [[Darcy's Law]]. These models are often spatially distributed, which means that the catchment is subdivided in cells, which all have their own input series and parameter values. For all these cells, the water flow equations are calculated per time step. This type of model gives more information about the processes which take place at scales that are smaller than the catchment scale. The disadvantage, however, is that these models need much more input data and parameter values than black box and parametric models. 

![[20240227_131215.jpg]]
