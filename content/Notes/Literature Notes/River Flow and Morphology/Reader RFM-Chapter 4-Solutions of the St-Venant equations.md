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

When the water depth nears the equilibrium depth $(a \to a_e)$ we find that the depth becomes constant, i.e. the water surface will tend to be parallel to the bottom. Far away from an imposed boundary water depth (e.g. at a confluence or sluice gate) the river will always tend to restore the equilibrium depth. Whether the river tends to the equilibrium depth upstream or downstream of the boundary condition depends on whether the flow is [[Subcritical Flow|Subcritical]] $(\text{Fr} \lt 1)$ or [[Supercritical Flow|Supercritical]] $(\text{Fr} \gt 1)$

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
Based on the equilibrium depth and the critical depth it is possible to classify the bed slopes of rivers. In order to do this, we observe that the equilibrium depth (Equation 4.2) is dependent on slope and discharge, while the critical depth depends only on discharge. This means that given a discharge, the depth at which the flow becomes critical is fixed, but the depth at which the flow is normal changes with the slope. We can thus think of a slope at which the normal and critical depth are equal. This slope is called the **critical slope**. We can find an expressiono for the critical slope by setting the equilibrium depth to be equal to the critical depth