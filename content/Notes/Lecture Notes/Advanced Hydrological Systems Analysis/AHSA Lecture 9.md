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
We now know how to quantify the uncertainty in our parameters. Now what is the effect of this uncertainty on our model output? This is our main question for today.

We know there is some relation between our parameter and our output, we just don't know what the exact relation is like. If we did, we could calculate our output immediately from the parameter value. This is not the uncertainty, however, but the value for the mean/expected. So how to find the uncertainty in our output and quantify it?

One option is sampling: generate random parameters, measure the related output. Works, but takes a long time and is computationally expensive. 

Let's assume our system is linear again and we are working with a normal distribution. In this case, our expected output
- Mean target output is $b + aE(X)$
- Target output variance = $a^2 \text{var}(X)$ 

the $a$ is the slope, and therefore the local sensitivity. How to calculate this? Assume linear again, and calculate dOutput/dPar

>[!Important]
>Variance in output is determined by variance in parameter multiplied by model sensitivity squared


Again, when we are working with 2 parameters, we need their correlation. For this we can use the covariance which we obtain when fitting the model to the observations. We get a covariance matrix, where top-left to bottom-right is the variance, and the rest is the covariance. 

If we have the covariance, you know the correlation

$$
cor = \frac{covar(x_1,x_2)}{SD(x_1) \cdot SD(x_2)}
$$


$$
covar(Y) = A \; covar(X)A^T
$$

where $A$ is the sensitivity matrix

