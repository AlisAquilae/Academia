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
## 1.1 Introduction
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

## 1.2 Explicit method (Euler Forward)
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


Going back to our example, the water level $h$. Building a simple model using using only the first term of the Taylor series (i.e. $\frac{\partial h}{\partial t})$, and taking this to be equal to $\alpha h(t)$ again, we find

$$
\frac{h(t+\Delta t) - h(t)}{\Delta t} = \alpha h(t)
$$

This is what is called an **explicit method**: we are solving the future using only information the present. 

We can now predict our future value for $h$ using the current timestep plus the derivative

$$
\begin{aligned}
h(t+\Delta t) &= h(t) + \Delta t \alpha h(t) \\
&= (1+\Delta t \alpha)h(t)
\end{aligned}
$$

This is our first numerical model, which is called [[Euler Forward]]. We can tell what our future value of $h(t)$ is going to be using the value of $h(t)$ at our current timestep. 

## 1.3 Implicit Method (Euler Backward)
One could argue that if we are able to use the Taylor series to estimate a future value, we can also use the same method to estimate a past value. In other words (estimated at time $t+\Delta t$)

$$
h(t) = h(t + \Delta t) - \Delta t \frac{\partial h}{\partial t} + \frac{(\Delta t)^2}{2} \frac{\partial^2 h}{\partial t^2} - \frac{(\Delta t)^3}{6}\frac{\partial^3 h}{\partial t^3}
$$

>[!Note]
>Given that our timestep is $-\Delta t$, we would assume the second operator to be $-$ instead of $+$. However, $(-\Delta t)^2$ becomes positive, hence the positive operator. For the sign after that, $(-\Delta t)^3$ becomes negative again. We therefore find alternating $+$ and $-$


We are still interested in an expression of the form

$$
\frac{h(t+\Delta t) - h(t)}{\Delta t}
$$


as this allows us to integrate our model in time. Shuffling the terms around and following the same argument used at Euler Forward, we find (estimated at time $t+\Delta t$). 

$$
\begin{aligned}
\frac{h(t+\Delta t) - h(t)}{\Delta t} &= \frac{\partial h}{\partial t} - \frac{\Delta t}{2}\frac{\partial^2 h}{\partial t^2} + \frac{(\Delta t)^2}{6}\frac{\partial^3 h}{\partial t^3} \\
&= \frac{\partial h}{\partial t} - \text{errors}
\end{aligned}
$$

This is still a first order approximation, with the error term being proportional to $\Delta t$. However, now the error term has a negative value. Thus, if we overestimate using the first method, we will underestimate with this one.

Taking our usual example, we take

$$
h(t + \Delta t) = h(t) + \Delta t \, \alpha \, h(t+\Delta t)
$$

This is more difficult to solve, especially in practice. In this case, it is relatively easy. 

$$
\begin{aligned}
h(t+\Delta t) - \Delta t \, \alpha \, h(t+\Delta t) &= h(t) \\
h(t+\Delta t) (1-\Delta t \, \alpha) &= h(t) \\
h(t+\Delta t) &= \frac{h(t)}{1-\Delta t \, \alpha}
\end{aligned}
$$

This is called the implicit method, or [[Euler Backward]]. 

## 1.4 Implicit and Explicit Combined: The Midpoint Method
It is possible to combine the previous two methods into one. There are various ways of doing so. Here, we will present an example where we first take half a step using the explicit method, and then half a step using the implicit method.

>[!Warning]
>Skipped the derivation of this


---
# 2. Finite Differences in Space
Central to this course is the advection-diffusion equation. We now have to create a derivative in space rather than time. We can, once again, use the Taylor series. 

$$
s(x + \Delta x) = s(x) + \Delta x \frac{\partial s}{\partial x} + \frac{(\Delta x)^2}{2} \frac{\partial^2 s}{\partial x^2} + \frac{(\Delta x)^3}{6}\frac{\partial^3 s}{\partial x^3}
$$

We can again work towards a solution we have seen before

$$
\frac{s(x + \Delta x) - s(x)}{\Delta x} = \frac{\partial s}{\partial x} + \frac{\Delta x}{2}\frac{\partial^2 s}{\partial x^2} + \frac{(\Delta x)^2}{6} \frac{\partial^3 s}{\partial x^3}
$$

This corresponds to the forward method.  The backward method is as follows:

$$
s(x- \Delta x) = s(x) - \Delta x \frac{\partial s}{\partial x} + \frac{(\Delta x)^2}{2} \frac{\partial^2 s}{\partial x^2} - \frac{(\Delta x)^3}{6} \frac{\partial^3 s}{\partial x^3}
$$

For the derivative, we then get

$$
\frac{s(x) - s(x + \Delta x)}{\Delta x} = \frac{\partial s}{\partial x} - \frac{\Delta x}{2}\frac{\partial^2 s}{\partial x^2} + \frac{(\Delta x)^2}{6}\frac{\partial^3 s}{\partial x^3}
$$

>[!Note]
>Finite differences in space are different from finite differences in time regarding what it is we are evaluating. Using finite differences in time, we are estimating present or future value derivatives using respectively explicit and implicit methods. Using finite differences in space, we are always interested in values at the present location. The explicit and implicit methods then correspond to estimating the present value from the past or the future, respectively


Again, we can create a composite method using both methods described above. We can subtract the past value from the future one, i.e. subtracting the implicit method from the explicit one. We find

$$
s(x+\Delta x) - s(x-\Delta x) = 2\Delta x \frac{\partial s}{\partial x} + \frac{(\Delta x)^3}{3}\frac{\partial^3 s}{\partial x^3}
$$

>[!Note]
>We see that the first and third terms cancel each other out, which leads to the equation above

We can again rewrite this into a derivative form

$$
\frac{s(x+\Delta x) - s(x-\Delta x)}{2\Delta x} = \frac{\partial s}{\partial x} + \frac{(\Delta x)^2}{6}\frac{\partial^3 s}{\partial x^3}
$$

What is nice about this centred method is that it has an error term which is proportional to $(\Delta x)^2$. Therefore, this is a second-order approximation rather than a first-order one, as if we half the step-size the error goes down with a factor 4. 

