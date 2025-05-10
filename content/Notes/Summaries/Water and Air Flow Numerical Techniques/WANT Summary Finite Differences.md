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
## 2.1 The First Derivative
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
\frac{s(x) - s(x - \Delta x)}{\Delta x} = \frac{\partial s}{\partial x} - \frac{\Delta x}{2}\frac{\partial^2 s}{\partial x^2} + \frac{(\Delta x)^2}{6}\frac{\partial^3 s}{\partial x^3}
$$

>[!Note]
>Finite differences in space are different from finite differences in time regarding what it is we are evaluating. Using finite differences in time, we are estimating present or future value derivatives using respectively explicit and implicit methods. Using finite differences in space, we are always interested in values at the present location. The explicit and implicit methods then correspond to estimating the present value from the past or the future, respectively


Again, we can create a composite method using both methods described above. We can subtract the past value from the future one, i.e. subtracting the implicit method from the explicit one. We find

$$
s(x+\Delta x) - s(x-\Delta x) = 2\Delta x \frac{\partial s}{\partial x} + \frac{(\Delta x)^3}{3}\frac{\partial^3 s}{\partial x^3} + \dots
$$

>[!Note]
>We see that the first and third terms cancel each other out, which leads to the equation above

We can again rewrite this into a derivative form

$$
\frac{s(x+\Delta x) - s(x-\Delta x)}{2\Delta x} = \frac{\partial s}{\partial x} + \frac{(\Delta x)^2}{6}\frac{\partial^3 s}{\partial x^3}
$$

What is nice about this centred method is that it has an error term which is proportional to $(\Delta x)^2$. Therefore, this is a second-order approximation rather than a first-order one, as if we half the step-size the error goes down with a factor 4. 

## 2.2 The Second Derivative
So far, we have only seen how to solve for the first derivative. We are, however, predominantly interested in the convection-diffusion equation, which contains a second-order derivative as well

$$
\frac{\partial s}{\partial t} = -u \frac{\partial s}{\partial x} + D \frac{\partial^2 s}{\partial x^2}
$$

To solve the second derivative, we want to find $\frac{\partial^2 s}{\partial x^2}$ as a function of $s(x)$, $s(x+\Delta x)$ and $s(x - \Delta x)$. In order to do so, we add the explicit and implicit methods together. Doing so, the second term disappears. We find

$$
s(x+\Delta x) + s(x - \Delta x) = 2s(x) + (\Delta x)^2\frac{\partial^2 s}{\partial x^2} + \dots
$$

We take $s(x)$ to the left-hand side of the equation

$$
s(x+\Delta x) + s(x-\Delta x) -2s(x) = (\Delta x)^2 \frac{\partial^2 s}{\partial x^2} + \dots
$$

In order to find the derivative, we now divide everything by $(\Delta x)^2$

$$
\frac{s(x+\Delta x) + s(x-\Delta x) - 2s(x)}{(\Delta x)^2} = \frac{\partial^2 s}{\partial x^2} + \dots
$$

## 2.3 Advection-Diffusion Equation
Advection refers to the process of moving things around. Diffusion is concerned with mixing. 

Let's take an example. We are interested in how a concentration of a substance moves around. It moves (advects) with 1 m/s, and diffuses with 0.5 m$^ 2$/s, and we are interested in the next 50 seconds. 

![[Pasted image 20250509132200.png]]

What would happen if there were only advection? The shape of the concentration remains the same, but moves downstream.

What would happen if there were only diffusion? The concentration would flatten out and spread around in a "smearing" fashion 

A combination of both moves downstream and is smeared out simultaneously


>[!Info]
>In some contexts, the notation of the advection-diffusion equation is transformed to use the divergence of fluxes. 
>
>$$
>\frac{\partial s}{\partial t} = -\frac{\partial q}{\partial x}
>$$
>
>where $q$ is the divergence of the flux. The total flux $q$ is, in the example above, the sum of the advection flux and the diffusion flux. 
>
>The advection flux is equal to $u \cdot s$, i.e. the velocity times the concentration itself. 
>
>The diffusion flux is equal to 
>
>$$
>-D \frac{\partial s}{\partial x}
>$$
>
>So, the total flux is
>
>$$
>q = (u \cdot s) - D \frac{\partial s}{\partial x}
>$$
>
>What this shows is that advection as a process depends only on the speed at which the concentration moves. Meanwhile, diffusion depends on the local gradient of the concentration in space. It is highest when the concentration is highest, and moves from high to low concentration


We are now interested in creating a model for this advection-diffusion equation. To do so, we are going to combine all of the previously discussed examples (keeping diffusion centred for simplicity):
- Euler forward in time (explicit) with forward in space advection
- Euler forward in time (explicit) with centred in space advection
- Euler forward in time (explicit) with backward in space advection
- Euler backward in time (implicit) with forward in space advection
- Euler backward in time (implicit) with centred in space advection
- Euler backward in time (implicit) with backward in space advection
- Midpoint in time (mixed explicit/implicit) with centred in space advection

>[!Note]
>These were worked out during the practicals. I will only give a single example here

>[!Example]
>The following is an example of the Euler forward in time (explicit) with forward in space advection. The state variable is $s$. and the indices $i$ and $n$ refer to space and time, respectively
>
>$$
>\frac{s_{i, n+1} - s_{i, n}}{\Delta t} = -u \frac{s_{i + 1, n} - s_{i, n}}{\Delta x} + D \frac{s_{i+1. n} - 2s_{i, n} + s_{i-1, n}}{(\Delta x)^ 2}
>$$
>
>For time $n$, we see that when evaluating the space derivatives, $n$ remains constant and at the time $n$ itself. At the time derivative, we are interested in the next timestep, as is indicated by looking at the difference between the point ahead in time ($n+1$) minus the point at the present ($n$). 
>
 >For space $i$, we see that when evaluating the time derivative, space remains constant. At the space derivative, we see the centred method implemented through taking the average of one step back ($i-1$) and one step forward ($i+1$), as well as the usual implementation of the diffusion equation as derived earlier
 
### 2.3.1 Solving the cD-equation in space

Now onto solving the actual equation. We need a few things
- Paramaters ($u, D$)
- Initial conditions
- The length in time
- Boundary conditions
- Equations to use
- Description of the spatial domain

>[!Note]
>There are different kind of boundary conditions. 
>1. Dirchlet boundary condition: a fixed boundary value
>2. Neumann boundary condition: a fixed boundary flux
>3. Robin boundary condition: a combination of Dirchlet and Neumann

We would like to solve the steady-state solution with centred advection:

$$
0 = -u \frac{\partial s}{\partial x} + D \frac{\partial^ 2 s}{\partial x^ 2}
$$

We can compose equations for every grid point

$$
0 = -u \frac{s_{i+1} - s_{i-1}}{2\Delta x} + D \frac{s_{i+1} - 2s_i + s_{i-1}}{(\Delta x)^ 2}
$$

We first need to introduce boundary conditions.

Assume we are working with a grid of 5 points. We want to model the shape of the water table between two ditches. In this case, the equations would look as follows:
1. For $i=1$: $s_1 = C_L$
2. For $i = 2$: $0 = -u\frac{s_3 - s_1}{2\Delta x} + D \frac{s_3 - 2s_2 + s_1}{(\Delta x)^2}$
3. For $i=3$: $0 = -u\frac{s_4 - s_2}{2\Delta x} + D \frac{s_4 - 2s_3 + s_2}{(\Delta x)^2}$
4. For $i=4$: $0 = -u\frac{s_5 - s_3}{2\Delta x} + D \frac{s_5 - 2s_3 + s_3}{(\Delta x)^2}$
5. For $i=5$: $s_5 = C_R$

We cannot solve these equations step-wise, as they all depend on one another. Rather, we need to solve them in one go. We are going to do so using matrices. For this, we are going to require our equations to be of the following form:

$$
c_1 s_1 + c_2 s_2 + c_3 s_3 + c_4 s_4 + c_5 s_5 = \alpha
$$

where $c$ and $\alpha$ are constants. 

The boundary conditions are easy, as we know the end-points (which are fixed). Thus, 

$$
\begin{aligned}
c_1 s_1 &= 1\cdot s_1 &= C_L \\
c_5 s_5 &= 1\cdot s_5 &= C_R
\end{aligned}
$$

The ones in between are more difficult. Let's work out $i=2$ as an example. In its equation

$$
0 = -u\frac{s_3 - s_1}{2\Delta x} + D \frac{s_3 - 2s_2 + s_1}{(\Delta x)^2}
$$

we find 2 times $s_1$, once in the convection component and once in the diffusion component. The advection component can be refactored into a component for each $s_i$:

$$
-u\frac{s_3 - s_1}{2\Delta x} = - \frac{u}{2\Delta x} s_3 + \frac{u}{2\Delta x}s_1
$$

We can do the same for the diffusion component:

$$
D \frac{s_3 - 2s_2 + s_1}{(\Delta x)^2} = \frac{D}{(\Delta x)^ 2}s_3 - \frac{2D}{(\Delta x)^2}s_2 + \frac{D}{(\Delta x)^2}s_1
$$

We can now find the constant $c$ for every component $s$. So for $i=2$:

$$
\begin{aligned}
c_1 &= \left(\frac{u}{2\Delta x} + \frac{D}{(\Delta x)^2}\right) \\
c_2 &= -\frac{2D}{(\Delta x)^2} \\
c_3 &= \left(- \frac{u}{2\Delta x} + \frac{D}{(\Delta x)^ 2} \right)
\end{aligned}
$$

Thus, our equation corresponding to $i=2$ is

$$
\begin{aligned}
c_1 s_1 + c_2 s_2 + c_3 s_3 &= \alpha \\
\left(\frac{u}{2\Delta x} + \frac{D}{(\Delta x)^2}\right) s_1 -\frac{2D}{(\Delta x)^2} s_2  - \left(\frac{u}{2\Delta x} + \frac{D}{(\Delta x)^ 2} \right) s_3 &= \alpha
\end{aligned}
$$

>[!Note]
>In the equation above, we excluded $s_4$ and $s_5$. We did so because these do not occur in the equation for $i=2$, meaning that their constant is equal to $0$. 


We know, however, that the sum of advection and diffusion is $0$. Thus, our constant $\alpha$ is also equal to $0$. We therefore find for $i=2$

$$
\left(\frac{u}{2\Delta x} + \frac{D}{(\Delta x)^2}\right) s_1 -\frac{2D}{(\Delta x)^2} s_2  - \left(\frac{u}{2\Delta x} + \frac{D}{(\Delta x)^ 2} \right) s_3 = 0
$$

We can do the same for all the other equations, i.e for $i=3$ and $i=4$. One we have done so, we can put them in a matrix, where row $v$ corresponds to $i=v$

$$
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 \\
\frac{u}{2\Delta x} + \frac{D}{(\Delta x)^2} & -\frac{2D}{(\Delta x)^2} & - \frac{u}{2\Delta x} + \frac{D}{(\Delta x)^ 2} & 0 & 0 \\
0 & \frac{u}{2\Delta x} + \frac{D}{(\Delta x)^2} & -\frac{2D}{(\Delta x)^2} & - \frac{u}{2\Delta x} + \frac{D}{(\Delta x)^ 2} & 0 \\
0 & 0 & \frac{u}{2\Delta x} + \frac{D}{(\Delta x)^2} & -\frac{2D}{(\Delta x)^2} & - \frac{u}{2\Delta x} + \frac{D}{(\Delta x)^ 2} \\
0 & 0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
s_1 \\ s_2 \\ s_3 \\ s_4 \\ s_5
\end{bmatrix} = \begin{bmatrix}
C_L \\ 0 \\ 0 \\ 0 \\ C_R
\end{bmatrix}
$$

This corresponds to a matrix-vector product:

$$
M \overrightarrow{s} = \overrightarrow{w}
$$

To solve for this, we need to find the inverse of the matrix. $M^ {-1}$, and solve

$$
M^{-1}M \overrightarrow{s} = M^{-1}\overrightarrow{w}
$$

The product of a matrix with its inverse is simply the identity matrix $I$:

$$
I = \begin{bmatrix}
1 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

Thus, we are left with

$$
I \overrightarrow{s} = M^{-1}\overrightarrow{w}
$$

However, the product of an identity matrix and a vector is simply that vector itself, meaning this reduces to

$$
\overrightarrow{s} = M^{-1}\overrightarrow{w}
$$

### 2.3.2 Solving the cD-equation in space and time
Solving the convection-diffusion equation in time is very similar to solving the same equation in space, with the main difference being that we are not going to solve the equation once, but we do so once for each time-step. 

Let's look at our previous matrix $M$ again. For now, we evaluate all spatial components $s_i$ at once, meaning the $i$-index drops 