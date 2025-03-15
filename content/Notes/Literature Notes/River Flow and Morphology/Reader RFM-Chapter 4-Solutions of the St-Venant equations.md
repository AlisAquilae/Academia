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
The classification of water surface profiles starts by considering the sign of the pressure slope $\frac{da}{dx}$. The sign of this slope follows from the sign of the numerator $(S_o - S_f)$ and denominator $(1 - \text{Fr}^2)$ in Equation 4.1.

When the numerator is zero we are in equilibrium situation, as analysed in [[Reader RFM-Chapter 3-Derivation of the St-Venant equations|Chapter 3]]. In equilibrium situations, given a certain discharge, the depth will change such that a balance is found between friction and gra