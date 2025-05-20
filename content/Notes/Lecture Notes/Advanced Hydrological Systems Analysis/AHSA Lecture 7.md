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

Main message: always validate your model, and be careful about overfitting

---
# Fitting techniques
We already discussed fitting using the hydrograph. Now, we are going to fit based on the objective function. This is a trial and error method, which is time-consuming as well as subjective. 

Another way is by doing this automatically using a computer. An algorithm changes parameters using algorithms. There are, however, different problems here
- Local search vs. global search (or minima)

Another way of fitting is using a parameter response surface/plane. Plot all sum of squares for different parameter sets. It is basically the objective function response surface/plane. 

Now, our fitting problem is to find the optimum, our best parameter set such that our Sum of Square is as small as possible. Mathematical minimisation techniques exist to account for that. This technique also allows you to change multiple parameters at the same time, instead of one at the same time.

