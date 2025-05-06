---
fileClass: Base, Summaries
title: 
Parents: ["[[Water and Air Flow Numerical Techniques]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Water and Air Flow Numerical Techniques]]"]
---
# 1. Finite Differences in Time
Finite differences in time are applicable to numerical models of physical problems that evolve over time only (i.e. no spatial dimension). To do this, we will solve [[Ordinary Differential Equation]]s. Specifically, the form that we will study is, with $s$ as the state variable,

$$
\frac{\mathrm{d}s}{\mathrm{d}t} = f(t,s)
$$

In other words, the change of $s$ in time is dependent on the time and on $s$ itself. 

For example, how the water level in a reservoir evolves over time when we open a dam. In this case, the state variable $s$ refers to the water level. Let's say that water level $h$ is calculated as some recession rate $\alpha$ times the water depth itself

$$
\frac{\mathrm{d}h}{\mathrm{d}t} = \alpha h
$$

and let's say $\alpha = -0.007$. The $h$ on the right hand side indicates that the water level change in time is dependent on the water level at present. Physically, this can for example indicate the amount of force the water exerts on the water below it, and therefore how quickly the water level drops. Solving this results in

$$
h(t) = h_0 \exp(\alpha t)
$$

The mathematical notation of the derivative above, again using the state variable, is

$$
\frac{\mathrm{d}s}{\mathrm{d}t} = \lim_{\epsilon \to 0} \frac{s(t+\epsilon) - s(t)}{\epsilon}
$$

