---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Catchment and Climate Hydrology]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Catchment and Climate Hydrology]]"]
---
# Introduction
Catchment hydrology: study of hydrology in drainage basins. Smaller spatial scales of hillslope or catchment. Streamflow (quality + quantity) provides integrated signal of catchment response

Challenges:
- High variability in catchments
- Measurement of water flows difficult because a lot of it happens underground

Climate hydrology: the study of the interaction between terrestrial water cycle and the climate system. Larger scales. 

Hydrology is a young field. 

---
# Paper 1 for today
Introduces water balance

The effect of plants is important for hydrology, for example through evaporation and atmospheric moisture. This is a coupled system. 

You want to make a model that does justice to nature but is still elegant. 

Also coupled with atmosphere, for example through recycling of evaporated water as new rain. 

---
# Paper 2 for today
Model evaluation: where models and observations meet. This is vital for how well our models represent nature

We use [[Flux Density|Specific Discharge]] instead of regular discharge

We have a system with climate forcing (water and energy) where in a natural system with a lot of complexity and variability produces some output.  model simplifies this and tries to predict it. 

Catchment is box which partitions, stores and releases water. System has memory, meaning that precipitation - discharge shoots up and then slowly declines

Types of models in hydrology
- Conceptual model (reservoirs)
- Perceptual model (view on how the system works)
- Physically-based model (differential equations)
- Lumped models, distributed models

Steps in model development
1. System conceptualisation (knowledge on dominant hydrological processes)
2. Numerical implementation
3. Code verification (check whether concept was implemented correctly)
4. Model parameter calibration or optimisation
5. Model output validation

4 and 5 using different subsets of available data ("split sample" consisting of training set and validation set)

Model development complexity and data availability together determine the performance of a model and what its worth in practice. 

We can also look at model prediction in terms of bias and variance
- High bias means off-target
- High variance means not accurate

There is thus an optimum complexity. Captured by Occam's razor theory (law of parsimony):
- Problem solving principle: always choose model with fewest assumptions. 
- Determine how many assumptions and conditions are necessary. If an explanation requirex extra assumptions
- ??????????

Model terminology:
- Input
  - Model parameters (or variables)
  - Initial conditions (for all model states)
  - Model / atmospheric forcing (e.g. P, T, RH)
- Model simupation (equation)
- Outout
  - Model variables (e.g. Q, ET)
  - State variables (e.g. S)

Usually sensitivity analysis is included, where paramaters, etc. are varied

**How to quantify how well a model fits the data?**
Nash-Sutcliffe coefficient. Still used a lot.

Nash-Sutcliffe is R$^2$ for linear regression, with the only difference being that it can become negative.

>[!Warning]
>ChatGPT Nash-Sutcliffe

Easy to interpret, normalised statistic, but emphasis on peak flows and outliers

Drawbacks of NSE: high vs. low flows very sensitive to log transformation. Does not handle this well. Another problem of NSE baseline being mean of the model is not very ambitious. It is very simple to make use of this. Thus you need a better baseline / benchmark. Now same formula but instead of mean you use baseline discharge.

Latest development is moving away from NSE altogether. Thus moving towards the King-Gupta efficiency. Allows weighting of factors based on their relative importance. 