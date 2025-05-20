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


>[!Note] Intermezzo
>The conflict between observation and the model can never be completely resolved because of uncertainty in the model and observation of the real world
>
>There are 4 sources of uncertainty
>1. Uncertainty in measuring model input (e.g. precipitation), e.g. due to measurement errors
>2. Uncertainty in measuring real-world output (e.g. groundwater level), e.g. due to measurement errors
>3. Uncertainty in the model setup, e.g. on whether all processes are included
>4. Parameter uncertainty, relating to whether the real world is represented by the chosen parameters. 


## Gradient direction
This computes a gradient of the objective function in the downward direction. The gradient is negative, because we are looking for a minimum. It is just the direction, not a point. It points towards lower values, meaning your next step should be in that direction. 

Can we calculate the gradient for our objective function? To calculate, we need a vector of 2 partial derivatives. Whether this works depends on the objective function. Mean absolute error is very difficult to differentiate, for example, and therefore more difficult to work with. Similarly, KGE is also very difficult to differentiate. Sum of squares, for example, is easier, and is therefore used more often for this kind of thing.

The change of the model with respect to the parameter is called the sensitivity. We can calculate the gradient numerically, or through the residuals and the model sensitivity. 

The next problem is that we know the direction, but we don't know the step size, i.e. how far to go. 

## Minimisation using gradient size
The gradient size should be proportional to your step size, and vice versa. If you have a high, steep slope of your response surface. If the gradient is high, you can go further and your step size can be long. If the gradient is small, or flat, the step-size should be smaller. 