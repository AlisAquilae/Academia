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

Another way of fitting is using a parameter response surface/plane. Plot all sum of squares for different parameter sets. It is basically the objective function response surface/plane. This technique also allows you to change multiple parameters at the same time, instead of one at the same time.

Now, our fitting problem is to find the optimum, our best parameter set such that our Sum of Square is as small as possible. Mathematical minimisation techniques exist to account for that. In other words, for every change in the parameter, our new objective function should be smaller than the previous objective function. 

The problem is that we do not know the surface of the objective function plane, meaning we might end up in a local minimum instead of a global one. This depends on your starting point. It is completely random, and depends on your luck. 

How can we solve our minimisation problem here? In general, the minimum is not directly visible. Instead, we let the algorithm find the minimum iteratively with different starting points. Here, we will discuss the different principles behind them

## Minimisation by sampling
Let's say we plot a sum of squares in a parameter response plane. You do some sampling, taking random parameter sets and hope you get close to the minimum. And we don't know the contours, meaning we also cannot easily validate. Very time consuming and therefore costly

But what if you had prior information? This helps reduce the search area and therefore the model runs. 

## Monte-Carlo Sampling
Very popular in parameter uncertainty estimation. Instead of doing parameter selection yourself, the computer does the optimisation for you randomly, similar to above. You have no guarantee to find the global minimum. 

However, we sill don't know which direction to go, and the starting point is again completely random. It may therefore take many model runs to find the optimum parameter set. 

## Gradient direction

>[!Note] Intermezzo
>The conflict between observation and the model can never be completely resolved because of uncertainty in the model and observation of the real world
>
>There are 4 sources of uncertainty
>1. Uncertainty in measuring model input (e.g. precipitation), e.g. due to measurement errors
>2. Uncertainty in measuring real-world output (e.g. groundwater level), e.g. due to measurement errors
>3. Uncertainty in the model setup, e.g. on whether all processes are included
>4. Parameter uncertainty, relating to