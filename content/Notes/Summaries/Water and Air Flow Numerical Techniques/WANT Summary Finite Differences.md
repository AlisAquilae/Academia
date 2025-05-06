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

If we do this in a finite difference way, we work with step-sizes larger than 0 by approximation. We do so because finding a derivative the normal way for derivatives with a step-size infinitely close to 0, we would have to wait infinitely long. The result would be highly accurate, but we are always bound by time-constraints. Thus, we take a finite-difference approach, which approximates the derivative but includes some errors. 

The finite differences definition of a derivative is as follows:

$$
\frac{s(t + \Delta t) - s(t)}{\Delta t} \approx \frac{\mathrm{d}s}{\mathrm{d}t} + \text{errors}
$$

We then have to evaluate these errors: whether they are large or small relative to the change of our state variable over time, how they behave, etc.

What we are going to use do this, is through the [[Taylor Series]]. We can approximate our state variable a little bit ahead in time as a function of a lot of things which we know at the actual time.

$$
s(t + \Delta t) = s(t) + \sum\limits_{n=1}^\infty \frac{(\Delta t)^n}{n!} \frac{\partial^n s}{\partial t^n}
$$

So, for the first three terms, and evaluated at time $t$, we find

$$
s(t + \Delta t) = s(t) + \Delta t \frac{\partial s}{\partial t} + \frac{(\Delta t)^2}{2!}\frac{\partial^2 s}{\partial t^2} + \frac{(\Delta t)^3}{3!} \frac{\partial^3 s}{\partial t^3} + \dots
$$

We can approximate the accuracy of the forward finite difference operator using this. We take our finite difference to be the first term of the Taylor series, and consider the other terms to be equal to the error:

$$
\begin{aligned}
s(t + \Delta t) &= s(t) + \Delta t \frac{\partial s}{\partial t} + \frac{(\Delta t)^2}{2!}\frac{\partial^2 s}{\partial t^2} + \frac{(\Delta t)^3}{3!} \frac{\partial^3 s}{\partial t^3} + \dots \\
\frac{s(t + \Delta t) - s(t)}{\Delta t} &= \frac{\partial s}{\partial t} + \frac{\Delta t}{2!}\frac{\partial^2 s}{\partial t^2} + \frac{(\Delta t)^2}{3!} \frac{\partial^3 s}{\partial t^3} +\dots \\
\frac{s(t + \Delta t) - s(t)}{\Delta t} &= \frac{\partial s}{\partial t} + \text{errors}
\end{aligned}
$$

For our finite differences prediction to be accurate, the error needs to be small relative to $\frac{\partial s}{\partial t}$. 

>[!Important]
>The error always tends to be dominated by the first error term, i.e.
>
>$$
>\frac{\Delta t}{2!}\frac{\partial^2 s}{\partial t^2}
>$$
>
>This is because the error is proportional to $\Delta t$, i.e. $\text{error} \sim \Delta t$, which tells us this is a first-order approximation


