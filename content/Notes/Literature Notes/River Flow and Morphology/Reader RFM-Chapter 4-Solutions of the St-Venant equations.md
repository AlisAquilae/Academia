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

When the numerator is zero we are in equilibrium situation, as analysed in [[Reader RFM-Chapter 3-Derivation of the St-Venant equations|Chapter 3]]. In equilibrium situations, given a certain discharge, the depth will change such that a balance is found between friction and gravity. This equilibrium water depth, also referred to as [[Normal Depth]], is denoted by $a_e$. For real cross-sections the value of $a_e$ can for example be found suing a graph in which the local cross-sectional geometry is accounted for. However, to ease further analysis of the backwater curves, we derive an expression for the equilibrium depth

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
&= \frac{0.81 \text{ m s}^{-2}}{(50 \text{ m}^)}
\end{aligned}
$$