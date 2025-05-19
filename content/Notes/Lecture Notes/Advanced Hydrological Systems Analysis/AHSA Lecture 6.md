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
This week: Calibration, sensitivity and uncertainty. Today is the first part

Previous week: coupling systems and their challenges

We need to define numerical scheme and timestep, for example, to come form a mathematical description to a numerical model. In addition, we need to make sure our parameters make our model represent reality as closely as possible. 

This week: how to define parameters and calibrate them, the impact of parameters on model output, and uncertainty in parameters. 

---
# Uncertainty
There is always a conflict between model and real world. This conflict is usually resolved by observations. However, both the model and our observations have uncertainty, meaning this conflict can never be resolved fully. However, we can resolve it as much as possible

Different kinds of uncertainty
- Real input (e.g. precipitation), we know real-world system, we get a true response. We measure this, and we have an observed response. The measurement is not equal to the true response due to errors in the measurement
- We can measure the rainfall as an observed input. There is uncertainty due to measuring this, for example uncertainty in the measurement instrument as well as human error. We have a model to represent observed rainfall, but prameters of this model are unknown (as well as how model is built creates uncertainty). The model gives a simulated response, which we can compare to the observed response. 

If the model does not fit, we optimise our parameters to better represent the observed response. 

- Uncertainty in measuring input
- Uncertainty in measuring response
- Uncertainty in model conceptualisation and definition
- Uncertainty in parameters

Combining these, we get a final uncertainty. Uncertainty is therefore not just caused by parameters, but also by measurements. In this course, we assume our input is perfect, and therefore only focus on parameter uncertainty. 

>[!Important]
>We have a model, we have real-world, and we cannot make these perfectly fit due to uncertainties. 


We start with parametric modelling

---
# Parametric modelling
PM is modelling using a finite number of parameters. A finite number of parameters is able to represent the real world.

We need
- Inputs
- Boundary conditions
- Parameters
- Discretisation (resolution in space and time, for example)

We are not focused on all 4, just the 3rd, namely the parameters. Aside from this, our model is 'perfect'

If you have $n$ number of parameters, our parameters can solve $n$ number of simulations. 

How to parameterise spatial variability? For example, transmissivity depends on hydraulic conductivity and depth, but depth only saturated depth, thus depending on the water table. 

Model gives a simulation for 1000 cells. How to parameterise a model's spatial property? Assumptions:
- For example, we assume transmissivity constant everywhere. Not very realistic
- Transmissivity in every grid cell. Perfect, but impossible to measure. Depends on numerics
- Pilot points: you know 2 representative points, define parameters based on that using interpolation. There are different methods of doing so, which again causes uncertainty. We typically use pilot points for GW modelling

Parameterisation of a spatial property needs to be finite, and independent of numerics. 

---
# Fitting to observations (model calibration)
Calibration sets optimal values for the model parameters for a certain case study in an iterative process. Compare model output to observation, and change parameters until it performs good enough. We can do this manually or automatically. 

Manually: 
- fit-by-eye. Simple, but subjective
- fit-by-eye using residuals (error): minimising difference between model and observation. Provides more information, as it allows for residual analysis (e.g. trends, shifts, variable variance/heteroscedasticity, normally distributed). However, only looks at the vertical, not at the horizontal (e.g. time-shift or lag)

These are all subjective, we need an objective function, using fitting criteria. There are many of them
- Mean error: sum of all residuals divided by number of observations

