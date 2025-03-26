---
fileClass: Base, Literature Notes
title: 
Parents: ["[[River Flow and Morphology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[River Flow and Morphology]]"]
---
In this chapter a first analysis of the solutions of the St-Venant equations will be made. The numerical aspects aspects of solving he St-Venant equations will only be briefly touched. The focus will be on a more qualitative analysis of important properties of these solutions.

# 4.1 Solutions of the steady St-Venant equations
## 4.1.1 Standard backwater equation
In this section the solutions of the stationary St-Venant equations will be investigated. As derived in [[Reader RFM-Chapter 3-Derivation of the St-Venant equations|Chapter 3]], the general stationary St-Venant equations are given by 

$$
\begin{aligned}
\frac{\partial Q}{\partial x} &= I \\
\frac{\partial a}{\partial x} &= \frac{s_o - s_f - \frac{2 \, u \, I}{g \, A}}{1 - \text{Fr}^2}
\end{aligned}
$$

These equations can be classified as two simple coupled [[Ordinary Differential Equation|ODEs]] in $x$, and are as such numerically rather simple to solve by standard techniques as e.g. Runge-Kutta (even for complicated $I$).

In the analysis in this section, the special case $I \equiv 0$ of these equations will be investigated. In that case it follows immediately from the first equation that $Q = \text{constant}$. We will refer to this discharge as "the" discharge. The second equation simplifies to the following form

$$
\frac{\mathrm{d}a}{\mathrm{d}x} (x) = \frac{S_o - S_f}{1 - \text{Fr}^2} \tag{4.1}
$$

which is sometimes referred to a the standard backwater equation.

Also this equation is rather easy to solve numerically. We will, however, concentrate here on the qualitative analysis of these solutions. This can be done very systematically and results in a classification generally known as [[Classification Standard Stationary Water Surface Profiles]]. The classified backwater curves turn out to be a very useful tool to assess the hydrodynamic response of a river to a change in e.g. discharge, sea level, side channels, or resulting from human interventions such as narrowing or dredging.

## 4.1.2 Equilibrium depth and critical depth
### 4.1.2.1 Equilibrium depth
The classification of water surface profiles starts by considering the sign of the pressure slope $\frac{da}{dx}$. The sign of this slope follows from the sign of the numerator $(S_o - S_f)$ and denominator $(1 - \text{Fr}^2)$ in Equation 4.1.

When the numerator is zero we are in equilibrium situation, as analysed in [[Reader RFM-Chapter 3-Derivation of the St-Venant equations|Chapter 3]]. In equilibrium situations, given a certain discharge, the depth will change such that a balance is found between friction and gravity. This equilibrium water depth, also referred to as [[Normal Depth]], is denoted by $a_e$. For real cross-sections the value of $a_e$ can for example be found using a graph in which the local cross-sectional geometry is accounted for. However, to ease further analysis of the backwater curves, we derive an expression for the equilibrium depth

To find such an expression, we assume that $b \gg a$. As a result of this assumption we can set $A \approx a \cdot b$ and $R \approx a$. Since in equilibrium $S_o = S_f$ we find (using [[Chézy's Law]] for the friction slope)

$$
S_o = \frac{Q^2}{C^2 A^2 R}
$$

We now fill out in this equation the approximations for $R$ and $A$

$$
S_o = \frac{Q^2}{C^2 a^3_e b^2}
$$

Note that, since we assumed equilibrium, we can write $a_e$ instead of $a$. Now we can easily find an expression for the equilibrium depth:

$$
a_e = \left( \frac{Q^2}{C^2b^2S_o} \right)^{\frac{1}{3}} \tag{4.2}
$$

The sign of the numerator in Equation 4.1 can thus be found by comparing the actual depth to the normal depth

$$
S_o - S_f = \left\{ \begin{matrix} \gt 0 & \text{if } a \gt a_e \\
= 0 & \text{if }a = a_e \\
\lt 0 & \text{if } a \lt a_e \end{matrix} \right.
$$

When the water depth nears the equilibrium depth $(a \to a_e)$ we find that the depth becomes constant, i.e. the water surface will tend to be parallel to the bottom. Far away from an imposed boundary water depth (e.g. at a confluence or sluice gate) the river will always tend to restore the equilibrium depth. 

#### 4.1.2.2 Critical depth
Whether the river tends to the equilibrium depth upstream or downstream of the boundary condition depends on whether the flow is [[Subcritical Flow|Subcritical]] $(\text{Fr} \lt 1)$ or [[Supercritical Flow|Supercritical]] $(\text{Fr} \gt 1)$

The transition between subcritical and supercritical flow is represented in Equation 4.1 by the denominator $1 - \text{Fr}^2$. When the denominator tends to zero, the flow will be critical. The depth at which the flow is critical $(\text{Fr} = 1)$ will be called [[Critical Water Depth]] and denoted by $a_C$. An expression for the critical water depth is found by solving the equation

$$
1 = Fr^2 = \frac{Q^2 b}{g A^3}
$$

Using the same assumption $(b \gg a)$ we used for the normal depth, we can find an expression for the critical depth

$$
a_C = \left( \frac{Q^2}{g b^2} \right)^{\frac{1}{3}} \tag{4.3}
$$

The critical water depth depends on the discharge (and the geometry of the cross section). When the water depth is smaller than the critical depth $a \lt a_C$ the flow is supercritical, while in the other case $a \gt a_C$ the flow is called subcritical. When the flow is supercritical, a boundary condition imposed on the depth has effect downstream of the perturbation, but when the flow is subcritical the boundary condition will only affect the river upstream. A more detailed discussion of the two situations will follow in section 4.4.2

The sign of the denominator in Equation 4.1 can thus be found by comaring the actual depth to the critical water depth. 

$$
1 - \text{Fr}^2 = \left\{ \begin{matrix} \gt 0 & \text{if } a \gt a_e \\
= 0 & \text{if }a = a_e \\
\lt 0 & \text{if } a \lt a_e \end{matrix} \right.
$$

When the water depth nears the critical depth, we find that the depth slope becomes infinite, i.e. the water surface will be perpendicular to the bed. We get to this unrealistic result because near the critical depth the long wave assumption does not hold any longer since we will typically observe strong vertical flow, non-hydrostatic pressure, and strong turbulence (e.g. a [[Hydraulic Jump]] will develop).

## 4.1.3 Classification of river bed slopes
Based on the equilibrium depth and the critical depth it is possible to classify the bed slopes of rivers. In order to do this, we observe that the equilibrium depth (Equation 4.2) is dependent on slope and discharge, while the critical depth depends only on discharge. This means that given a discharge, the depth at which the flow becomes critical is fixed, but the depth at which the flow is normal changes with the slope. We can thus think of a slope at which the normal and critical depth are equal. This slope is called the **critical slope**. We can find an expression for the critical slope by setting the equilibrium depth to be equal to the critical depth:

$$
\begin{aligned}
a_e &= a_C \\
\frac{Q^2}{C^2 b^2 S_o} &= \frac{Q^2}{gb^2}
\end{aligned}
$$

From this, we find that the bed slope, which is equal to the critical slope (as the critical slope is independent of slope, and only depends on discharge) is found by

$$
S_o = S_C = \frac{g}{C^2}
$$

From this we can classify river bed slopes based on the critical slope
- **Mild slope (M)**: when $S_o \lt S_C \; (a_e \gt a_C)$
- **Critical slope (C)**: when $S_o = S_C \; (a_e = a_C)$
- **Steep slope (S)**: when $S_o \gt S_C \; (a_e \lt a_C)$

Furthermore we can distinguish two more slopes based on the sign of the bed slope
- **Horizontal slope (H)**: when $S_o = 0 \; (a_e = \infty \gt a_C)$
- **Adverse slope (A)**: when $S_o \lt 0 \; (a_e \lt 0 \lt a_C)$

Most natural rivers feature mild slopes in lowland areas (such as in the Netherlands) and steep slopes in mountainous areas (typically outside the Netherlands). Figure 4.1 illustrates the two most important slopes: mild and steep. The critical slope is added just for systematic completeness, but will never occur in natural systems. Also the horizontal and adverse slope are often not found in nature, but they commonly occur in hydraulic flumes (often horizontal) and in hydraulic structures. 

![[Pasted image 20250315134436.png]]

![[Pasted image 20250315134454.png]]

## 4.1.4 The twelve water surface profiles
The kind of water surface profile that develops in a river, depends on the type of bed slope. In the previous section we saw that five different bed slopes can be distinguished. For most slopes the river will by itself always be in an equilibrium state and no backwater curve develops. For a backwater curve to develop some kind of imposed water depth, i.e. a boundary condition is needed. This can be a narrowing, a sluice gate or a tributary. Regardless of what causes the depth boundary condition, for a backwater to develop the depth or depth imposed by the depth boundary condition must be a non equilibrium water depth $a$. The imposed depth "pushes" the river out of equilibrium and the river will try to "restore" the equilibrium far away from the boundary condition.

To study the interplay between the boundary condition, imposing a depth $a$ and the equilibrium ($a_e$) and critical depth ($a_C$), we rewrite the backwater equation 4.1 in a more convenient form in terms of these depths, using the same assumption used to derive expressions for the equilibrium and critical depth ($b \gg a$):

$$
\begin{aligned}
\frac{\partial a}{\partial x} &= \frac{S_o - S_f}{1-\text{Fr}^2} \\
&=S_o \frac{a^3 -a^3_e}{a^3 - a^3_C}
\end{aligned}
$$

The equation in this form is also known as the [[Equation of Bélanger]].

With the equation in this form we can better distinguish how the relative magnitude of the boundary depth $a$, and equilibrium and critical depth control the kind of water surface profile that will develop. Considering all combinations we get to a total of twelve water surface profiles. The naming codes in this table are almost standard. 

![[Pasted image 20250315135146.png]]

Each of these twelve cases can now easily be analysed in terms of signs. For instance for the case $M_2$, one has:
- as $a \lt a_e$, one can conclude that $S_o - S_f \lt 0$
- as $a_C \lt a$, one can conclude that $1 - \text{Fr}^2 \gt 0$
- From this follows that $\frac{\mathrm{d}a}{\mathrm{d}x} \lt 0$, i.e.: the water depth will decline in the downstream direction. 

The following figures illustrate all cases of the table above

![[Pasted image 20250315135358.png]]

![[Pasted image 20250315135413.png]]

![[Pasted image 20250315135423.png]]


## 4.1.5 Analytical approximation to the backwater equation (==Skipped==)


## 4.1.6 Example: River widening
### 4.1.6.1 Graphical evaluation
We will consider an example to demonstrate the application of backwater curves to assess the effects of changes in a river. As part of the room for the river program, several measures are implemented that create more room for the river. To understand the effects of this program on the hydrodynamics we consider a river widening over a stretch between locations $A$ and $B$. We assume the river to be initially in equilibrium, and discharging into the sea. The roughness of the river is well represented by a Chèzy coefficient of $C = 50$ m$^{1/2}$ s$^{-1}$ and the bottom slope is $S_o = 1\cdot 10^{-4}$. We will assess the effect qualitatively with a number of sketches. To do so, we need to take the following steps

1. Determine the type of river slope
2. Draw the initial bed and water surface
3. Determine how equilibrium and critical depth change after the change in conditions
4. Draw the water surface profiles after the change has occurred

For the first step we need to determine the type of slope. For this we compute the critical slope (Equation 4.4):

$$
\begin{aligned}
S_C &= \frac{g}{C^2} \\
&= \frac{0.81 \text{ m s}^{-2}}{(50 \text{ m}^{1/2}\text{s}^{-1})^2} \\
&= 3.9 \cdot 10^{-3}
\end{aligned}
$$

Since $S_o = 1 \cdot 10^{-4} \lt S_C = 3.9 \cdot 10^{-3}$ we can conclude that the river has a mild slope, and therefore $a_e \lt a_C$, and we expect backwater curves of the $M$-type.

The second step is to draw the initial situation. We know the river to be discharging into the sea, and that the river is in equilibrium. Since the slope is mild we know that the equilibrium is subcritical, and therefore the boundary condition for the water level is set downstream by the sea. Also the critical depth is smaller than the equilibrium depth.

![[Pasted image 20250315140707.png]]

The third step is to evaluate how the equilibrium and critical depth will change as a result of the river widening. For this we can use Equation 4.2 and 4.3. Since both expressions have the river width in the denominator, we can conclude that as a result of the river widening, both the equilibrium and critical depth will drop. We can now draw these new depths.

![[Pasted image 20250315140821.png]]

The last step is to draw the backwater curves. Since the flow is subcritical the effects propagate in upstream direction and so we start drawing on the downstream end of the river. 

![[Pasted image 20250315140907.png]]

Downstream of location $B$, the river is unaffected by the widening and we still have equilibrium. These equilibrium conditions form a boundary condition for the upstream reach  $AB$. In the reach $AB$ the equilibrium depth is lower. This means that we have a boundary depth that is higher than the equilibrium depth, which means than an $M_1$-curve will develop. Starting at $B$ we can draw the $M_1$-curve. The slope of this curve will decrease when we slowly approach the equilibrium depth (see Equation 4.5), like an exponential curve (see Equation 4.6). The level that the backwater reaches in $A$ will set the boundary condition for the reach upstream of $A$.

Upstream of $A$ the equilibrium depth is again higher. Since the water level downstream of $A$ s lower than the equilibrium depth upstream of $A$, we will have an $M_2$-curve developing. Also here the depth slope will be largest at $A$ and slowly decrease when approaching the equilibrium depth.

The result obtained (Figure 4.8) helps to understand how widening will affect the hydrodynamics of the river. It is important to note that the widening only affects the river upstream, since we are dealing with subcritical flow. The flow upstream of $A$ accelerates when approaching $A$. Downstream of $A$ the flow slowly decelerates until $B$. Downstream of $B$ the flow is still in equilibrium.

---
# 4.2 Solving the dynamic St-Venant equations
In the rest of this chapter we will investigae solutions to the dynamic St-Venant equations. For this we use the St-Venant equations expressed in $a$ and $u$ and the Chézy formalism

$$
\begin{aligned}
\frac{\partial a}{\partial t} + u\frac{\partial a}{\partial x} + d \frac{\partial u}{\partial x} &= i \\
\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + g \frac{\partial a}{\partial x} &= g(S_o - S_f) - \frac{iu}{d} \\
S_f &= \frac{u^2}{C^2 a^2 R}
\end{aligned}
$$

Some differential equations (and systems of partial differential equations) permit analytical solutions, i.e. formula solutions in terms of sin and cos and the like. The following (only interesting for educational purposes) partial differential equations

$$
\begin{aligned}
\frac{\partial a}{\partial t} -4 \frac{\partial a}{\partial x} + 2 \frac{\partial u}{\partial x} &= 0 \\
\frac{\partial u}{\partial t} -2 \frac{\partial u}{\partial x} + 4 \frac{\partial a}{\partial x} &= 0
\end{aligned}
$$

have the following solution (there are of course many other solutions depending on the boundary conditions):

$$
\begin{aligned}
a(t,x) &= \cos(2x + 4t) + \cos(x + 6t) \\
u(t,x) &= \cos (wx+4t) - \cos(x + 6t)
\end{aligned}
$$

The St-Venant equations *do not* have analytical solutions. This is so  because they are non-linear in $a$ and $u$, as well as many of the other terms. Nonlinear differential equations do not permit (apart from some exceptional cases) analytical solutions. 

One can, of course, linearise all equations, and thus also the St-Venant equations. It means that one considers cases where $a$ and $u$ only show small deviations from a constant value, so small that quadratic (and higher order) terms in these deviations are neglected. We will work out examples for this approach in section 5.2.3 and 5.3.4 for simplifications of the St-Venant equations.

The method of characteristics is one mathematical technique that can help to analyse non-linear differential equations. We present a minimal introduction in the next sections. For this we will first give a mathematical introduction to the case of 1 unknown, and then generalise the methods for the St-Venant equations. 

---
# 4.3 Method of Characteristics
We will discuss the method by giving a series of examples. Our approach will be semi-numerical

## 4.3.1 A first example
Consider the following partial differential equation:

$$
\frac{\partial v}{\partial t}(t,x) + 2 \frac{\partial v}{\partial x}(t,x) = 0
$$

To interpret this differential equation, we will use Taylor series expansion. The classical form is (for small $\Delta t$ and small $\Delta x$):

$$
f(t-\Delta t, x - \Delta x) \approx f(t,x) - \frac{\partial f}{\partial t}(t,x)\Delta t - \frac{\partial f}{\partial x}(t,x) \Delta x
$$

But from this follows also for all $\alpha$ and all $\beta$ (and for small $\epsilon$):

$$
\alpha \frac{\partial f}{\partial t}(t,x) + \beta \frac{\partial f}{\partial x}(t,x) \approx \frac{f(t,x) - f(t-\alpha \epsilon, x - \beta \epsilon)}{\epsilon}
$$

It is this form that can be used for the differential equation above, with $\alpha = 1$ and $\beta = 2$. It results in

$$
\begin{aligned}
0 &= \frac{\partial v}{\partial t}(t,x) + 2 \frac{\partial v}{\partial x}(t,x)\\
& \approx \frac{v(t,x) - v(t - \epsilon, x - 2\epsilon)}{\epsilon}
\end{aligned}
$$

and from this we can conclude

$$
v(t,x) \approx v(t-\epsilon, x-2\epsilon)
$$

So if we denote by $v^*$ the value $v(t,x)$, the last equation can be applied over and over again, to yield:

$$
\begin{aligned}
v^* &= v(t,x) \\
&\approx v(t - \epsilon, x - 2\epsilon) \\
&\approx v(t - 2\epsilon, x - 4\epsilon) \\
& \; \; \vdots \\
&\approx v(t - n\epsilon, x - 2n\epsilon)
\end{aligned}
$$

This sequence of times and positions with (approximately) the same v-values can best be analysed in the so-called $(t,x)$-plane. We can make $\epsilon$ smaller and smaller, and it is clear that the points converge to a line. 

The conclusion is clear: the solution of the differential equation of this section has the property that it is constant over lines with a slope of 2 in the $(t,x)$-plane. This line is called a **characteristic**. The slope, being a quotient of a length (here $2\epsilon$) and a time (here $\epsilon$) has the dimension of velocity and is called the **characteristic celerity**, velocity or speed.

Another way of stating this property is by saying that all the different $v$-values travel with speed $c = \frac{\mathrm{d}x}{\mathrm{d}t} = 2$ through the $(t,x)$-plane.

![[Pasted image 20250318085939.png]]

## 4.3.2 Second example
The power of the method of characteristics as first introduced in the precious section is best seen by analysing the following example:

$$
\begin{aligned}
\frac{\partial v}{\partial t} + c(v) \frac{\partial v}{\partial x} &= 0 \\
c(v) &= \sqrt{v}
\end{aligned}
$$

If $c(v)$ would be a constant (i.e. not $v$ dependent), the analysis would be exactly the same as the previous section. The fact that $c(v) = \sqrt{v}$ makes this equation non-linear (analytical solutions do not exist). The analysis by the method of characteristics however remains perfectly feasible. To prove that, let us start in a point $(t,x)$ and denote $v^* = v(t,x)$ and $c^* = c(v*)$. The differential equation in that point:

$$
\frac{\partial v}{\partial t}(t,x) + c^* \frac{\partial v}{\partial x}(t,x)
$$

This differential equation can - as seen in the previous section - be written as

$$
\begin{aligned}
0 &= \frac{\partial v}{\partial t}(t,x) + c^* \frac{\partial v}{\partial x}(t,x) \\
&\approx \frac{v(t,x) - v(t-\epsilon, x - c^* \epsilon)}{\epsilon}
\end{aligned}
$$

from which we may conclude:

$$
v(t-\epsilon, x-c^* \epsilon) = v^*
$$

and thus also

$$
c(v(t-\epsilon, x-c^* \epsilon)) = c(v^*) = c^*
$$

This allows again a systematic recursion:

$$
\begin{aligned}
v^* &= v(t,x) \\
& \approx v(t-\epsilon, x-c^* \epsilon) \\
& \approx v(t-2\epsilon, x - 2c^* \epsilon) \\
& \; \; \vdots \\
&\approx v(t-n\epsilon, x-nc^* \epsilon)
\end{aligned}
$$

$$
\begin{aligned}
c^* &= c(v(t,x)) \\
&\approx c(v(t-\epsilon, x-c^* \epsilon)) \\
&\approx c(v(t-2\epsilon, x-2c^* \epsilon)) \\
& \; \; \vdots \\
&\approx c(v(t-n \epsilon, x - nc^* \epsilon))
\end{aligned}
$$

and the same conclusion as in the previous section: the value $v^*$ travels with a characteristic speed of $c^*$ over the straight line characteristic without changing. 

However, if we would have taken another $v$-vale as a start, the $v$-values travel at unequal characteristic speeds, resulting in non-parallel characteristics, as illustrated by Figure 4.11. This generates in principle the theoretical possibility that characteristic lines intersect. In practical hydraulic situations this will not happen.

This difference in characteristic speed is often systematic, as is the case in the example: the square root is an increasing function, so higher values of $v$ travel faster than lower values (also seen in Figure 4.11)

![[Pasted image 20250318091312.png]]

## 4.3.3 Third example
![[Pasted image 20250318091354.png]]

Figure 4.12 illustrates the characteristic result for a differential equation of the form:

$$
\frac{\partial v}{\partial t} + c\frac{\partial v}{\partial x} = -v^{1.5}
$$

The difference with the previous examples is that the right hand side differs from zero. If $c$ is constant, the analysis is done as follows. First, the differential equation is discretised into

$$
\frac{v(t, x) - v(t- \epsilon, x-c\epsilon)}{\epsilon} = -v^{1/5} (t,x)
$$

so that

$$
v(t-\epsilon, x-c\epsilon) = v(t,x) + \epsilon v^{1.5} (t,x)
$$

and by repeating

$$
v(t-2\epsilon, x-2c\epsilon) = v(t-\epsilon, x-c\epsilon) + \epsilon v^{1.5} (t-\epsilon, x-c\epsilon)
$$

First we see that because of the constant characteristic speed, the characteristics are again straight parallel lines. The change is now on the $v$-values. They are no longer constant. But they remain to be calculated using the previous values on the characteristic only. 

## 4.3.4 Fourth example
![[Pasted image 20250318091928.png]]

Figure 4.13 illustrates the solution by characteristics of the following (most general) differential equation:

$$
\frac{\partial v}{\partial t} + \sqrt{v} \frac{\partial v}{\partial x} = -v^{1.5}
$$

The behaviour of the solution of this equation is a combination of the previous cases: $v$-values travel with a $v$-value dependent characteristic speed. But as the $v$-values do change while traveling, the speed also changes, resulting in curved characteristics.

---
# 4.4 Characteristics for the St-Venant equations
The St-Venant equations are a system of two partial differential equations in two unknowns. The method of characteristics does also work for this type of equations, but the mathematics are of course much more complex. For that reason, we work with the following "linear" St-Venant equations:

$$
\begin{aligned}
\frac{\partial a}{\partial t} + \text{u} \frac{\partial a}{\partial x} + \text{d} \frac{\partial u}{\partial x} &= 0\\
\frac{\partial u}{\partial t} + \text{g} \frac{\partial a}{\partial x} + \text{u} \frac{\partial u}{\partial x} &= \text{g} (S_o - S_f)
\end{aligned}
$$

Where (note the difference in fonts) u and d are now not functions but constants (and $a$ and $u$ are still functions of $t$ and $x$).

## 4.4.1 Derivation of the characteristics (==Skipped==)


## 4.4.2 Characteristic celerities
Using the mathematics above, the St-Venant equations were rewritten into the following equivalent system of differential equations:

$$
\begin{aligned}
\frac{\partial \Lambda_+}{\partial t} + (u + \sqrt{\text{g}d}) \frac{\partial \Lambda_+}{\partial x} &= \dots \\
\frac{\partial \Lambda_-}{\partial t} + (u - \sqrt{\text{g}d}) \frac{\partial \Lambda_-}{\partial x} &= \dots 
\end{aligned}
$$

where
- $\Lambda_+ = \sqrt{\text{g}} a + \sqrt{\text{d}} u$ and $\Lambda_- = -\sqrt{\text{g}} a + \sqrt{\text{d}} u$
- $c_+ = \text{u} + \sqrt{\text{dg}}$ and $c_- = \text{u} - \sqrt{\text{dg}}$

We see thus that the St-Venant equations have 2 characteristic celerities: $c_+$ and $c_-$. In addition, some "features" ($\Lambda_+$ and $\Lambda_-$) of the wave described by the St-Venant equations move with speeds $c_+$ and $c_-$. These speeds are called **celerities** to distinguish them from the flow velocity of the water $u$. 

We also see that some features of a wave can travel faster than the medium:

$$
c_+ = u + \sqrt{\text{g}d} \gt u
$$

It is customary to use the [[Froude Number]] to quantify this difference:

$$
\text{Fr} = \frac{u}{\sqrt{\text{g}d}}
$$

With this, one can write:

$$
\begin{aligned}
c_+ &= u \left(1 + \frac{1}{\text{Fr}} \right) \\
c_- &= u \left(1 - \frac{1}{\text{Fr}} \right)
\end{aligned}
$$

We can get an insight into the physical meaning of these celerities by investigating the propagation of a (small) disturbance, as e.g. produced by throwing a small pebble into a river. This will generate small disturbances moving through the water surface along characteristics, comparable to the circles generated by throwing a pebble in a pond.

![[Pasted image 20250326134154.png]]

Figure 4.15 shows an analysis of this type of disturbance (starting at position $x_0$) with characteristics. One of these characteristics moves downwards with a speed $c_+ \gt u$, so that the perturbation that follows the characteristic has arrived at position 

$$
\begin{aligned}
x_+ &= x_0 + \Delta t \, c_+ \\
&= x_0 + \Delta t \, u + \Delta t \, \sqrt{\text{g}d}
\end{aligned}
$$

The other disturbance ends at position

$$
\begin{aligned}
x_- &= x_0 + \Delta t \, c_- \\
&= x_0 + \Delta t \, u \left(1 - \frac{1}{\text{Fr}} \right)
\end{aligned}
$$

The most common situation in open water is a flowing regime in which $\text{Fr} \lt 1$, which results in $x_- \lt x_0$, i.e. the other disturbance is moving upstream. Such situations are called **tranquil** or **streaming** or [[Subcritical Flow]]. 

The same figure can be used to illustrate another very common use of characteristics, that as limits of zones of influence (see Section 4.6). 
- Nothing of what happens at time $t=0$ upstream of point $x_0$ can influence the wave downstream of point $x_+$ at time $t = \Delta t$
- Nothing of what happens at time $t=0$ downstream of point $x_0$ can have any influence on the flow situation at time $t=\Delta t$ upstream of point $x_-$

In some - less common - situations however, with larger velocity $u$ and smaller water depths $d$, it may happen that $\text{Fr} \gt 1$. If this is the case, the flow is called **rapid**, **torrential** or [[Supercritical Flow]]. In that case, a similar analysis as the one above results in two disturbances both moving downstream, as illustrated by Figure 4.16

![[Pasted image 20250326134815.png]]


>[!Note]
>In normal situations (at least in the Netherlands), shooting water occurs only very locally in the neighbourhood of control structures like weirs


---
# 4.5 Characteristic analysis of the St-Venant equations (==Partially skipped==)
To continue the analysis by the method of characteristics, we will investigate the following equations

$$
\begin{aligned}
\frac{\partial \Lambda_+}{\partial t} + c_+ \frac{\partial \Lambda_+}{\partial x} &= 0\\
\frac{\partial \Lambda_-}{\partial t} + c_- \frac{\partial \Lambda_-}{\partial x} &= 0
\end{aligned}
$$

the difference with the original ones being the zeros on the right hand sides.

As was done in the section 4.3, we will analyse this semi-numerically, take a small $\epsilon$ derive from the equations above:

$$
\begin{aligned}
\Lambda_+ (t,x) &\approx \Lambda_+ (t - \epsilon, x - c_+ \epsilon) \\
\Lambda_- (t,x) &\approx \Lambda_- (t-\epsilon, x - c_- \epsilon)
\end{aligned}
$$

The new variables $\Lambda_+$ and $\Lambda_-$ do not give much direct insight, but there is a one-to-one correspondence with the original variables $a$ and $u$:

$$
\begin{aligned}
\Lambda_+ &= \sqrt{\text{g}} \, a + \sqrt{\text{d}} \, u \\
\Lambda_- &= -\sqrt{\text{g}} \, a + \sqrt{\text{d}} \, u \\
& \, \, \Downarrow \\
u &= \frac{1}{2 \sqrt{\text{d}}} \left( \Lambda_+ + \Lambda_- \right) \\
a &= \frac{1}{2 \sqrt{\text{g}}} \left( \Lambda_+ - \Lambda_- \right)
\end{aligned}
$$


---
# 4.6 Domains of dependency by characteristics (==Partially skipped==)
The analysis of the previous section proves that the values of $a$ and $u$ at the point $P = (t,x)$ did depend on the values at the points $(t - \epsilon, x - c_+ \epsilon)$ and $(t - \epsilon, x - c_- \epsilon)$. The values of $a$ and $u$ in these points do depend - by the same reasoning - on the values in the points $(t - 2\epsilon, x - 2c_+ \epsilon)$, $(t-2\epsilon, x - (c_+ + c_-) \epsilon)$ and $(t-2\epsilon, x-2c_- \epsilon)$. Building in this way more and more past points on which the values of $a$ and $u$ in the top depend, generates a picture as in Figure 4.18. 

![[Pasted image 20250326140228.png]]

If we let $\epsilon \to 0$, we see that all these points converge to a **domain of dependency** determined by a cone with $P$ as top and characteristics as boundaries.

This type of analysis can be useful in understanding the dependencies in the solutions of the St-Venant equations. 

---
# 4.7 Characteristics and the general St-Venant equations (==Skipped==)

---
# 4.8 Numerical solutions (==Partially skipped==)
As analytical solutions tot he St-Venant equations can not be found, the best one can do is to use numerical schemes in order to obtain best approximations of the true solutions. 

Many techniques can and have been used [[Finite Elements]], [[Finite Volumes]], and others. As the St-Venant equations are spatially one-dimensional, the most used type of numerical technique is [[Finite Difference]]. It is out of the scope of these lecture notes to give an overview of all possible choices of FD schemes. We present here only one example, a so-called [[Staggered Grid Finite Difference]].

The first step in any FD approach is to construct a (regular)  grid in the $(x, t)$ domain. Only on the grid points approximations for $a$ and $u$ will be calculated, which makes the problem finite. Assuming the grid differences constant (as we will do in these notes) and denoted by $\Delta x$ and $\Delta t$ the difference between two neighbouring grid points in space and time respectively, a FD scheme will calculate approximations $\hat{a}[n, j] \, \hat{u}[n, h]$ for $n = 1, 2, \dots$ and $j = 1, 2, \dots$ such that

$$
\begin{aligned}
a(n \Delta t, j \Delta x) &\approx \hat{a}[n, j] \\
u(n \Delta t, j\Delta x) &\approx \hat{u}[n, j]
\end{aligned}
$$

In a so-called **staggered grid** (see Figure 4.21), this is done in a special way:
- On halve of the notes (the black marked nodes in Figure 4.21, or - in this example - the nodes with an odd $j$-index), only approximations to the flow terms will be calculated
  
  $$
  \hat{u}[n, 13], \hat{u}[n, 15], \hat{u}[n, 17], \dots
  $$
  
  
- On the other halve of the nodes (the nodes marked with open squares in Figure 4.21, or - in this example - the nodes with an even $j$-index) level terms are calculated
  
  $$
  \begin{aligned}
  \hat{a}[n, 12], \hat{a}[n, 14], \hat{a}[n, 16], \dots \\
  \hat{d}[n, 12] = \hat{d}(\hat{a}[n, 12], \hat{d}[n, 14])
  \end{aligned}
  $$
  
  

>[!Warning]
>The notation is weird here, which is why I did not finish this section completely


- Spatial derivatives of level terms on flow nodes and spatial derivatives of flow terms on level nodes can easily be approximated by looking at neighbouring grid nodes, e.g