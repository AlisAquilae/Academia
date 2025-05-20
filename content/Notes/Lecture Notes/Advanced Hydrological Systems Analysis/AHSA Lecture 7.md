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
Today: second part of calibration, sensitivity and uncertain. 

When we are talking about the 'best' model we can make, we must talk about equifinality and overfitting.

---
# Equifinality
Is there a single best model? Multiple parameter sets can produce equally good models. This is called equifinality. To account for uncertainty in observations, we usually do not find the single best possible parameter set, but all sets which can present equally good results. To estimate this uncertainty, we use GLUE (Generalized Likelihood Uncertainty Estimation). 

---
# Overfitting
N of parameters should always be less than or equal to the number of observations to avoid overfitting. This is a thumb rule. 

To check for overfitting, we use validation. It is the same as calibration, but we keep a part of our observations hidden and test our calibrated model on the validation observations. This goes for both temporal data as well as spatial data (select limited amount of data points)