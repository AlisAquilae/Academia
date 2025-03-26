---
fileClass: Base, Literature Notes
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---

This chapter introduces simplifications of the St-Venant equations resulting in the so-called **kinematic** and **diffusion** equations. Apart from being useful themselves, the study of these leads also to a better understanding of essentials of the St-Venant equations in general. The reason for this is that these equations capture the most important characteristics of the movement of flood waves through natural rivers. Therefore they are often described as flood routing methods. 

In this chapter we use the following form of the St-Venant equations (A and B, respectively):

$$
\begin{aligned}
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} &= 0 \\
\frac{\partial Q}{\partial t} + \frac{\partial Q \, u}{\partial x} &= g \, A \, \left(S_o - S_f - S_p \right)
\end{aligned}
$$


# 5.1 Introduction
The first of the St-Venant equations:

$$
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} = 0
$$

will be left untouched, as it expresses the conservation of mass. If one considers the momentum equation, however:

$$
\frac{\partial Q}{\partial t} + \frac{\partial Q \, u}{\partial x} = g \, A \, \left(S_o - S_f - S_p \right)
$$

one finds that in many practical situations, the terms in this equation systematically differ in magnitude. The following table illustrates this for real rivers.

![[Pasted image 20250326142743.png]]

From this table, one can draw the following conclusions:
1. In most practical situations, the gravity and the friction term are of the same order, and much larger than all the others. This makes:
   
   $$
   0 = S_o - S_f
   $$
   
   a good first approximation of the momentum equation
2. Of the other terms, the pressure term is the next in importance. This makes:
   
   $$
   0 = S_o - S_f - S_p
   $$
   
   a good second-order approximation of the momentum equation  

>[!Note]
>From the dimensionless form of the St-Venant equations as derived in Section 3.7.4, one can say that the formula above is a "$\text{Fr} = 0$" approximation. As for most long waves considered in these notes, the Froude number will be rather small: $\text{Fr} \ll 1$, the assumption above is also acceptable from this argument


Next sections study the flood models that follow from these two approximations. 

---
# 5.2 Kinematic wave
The wave model that follows from the first order approximation is called the [[Kinematic Wave Model]] and will be studied in this section

## 5.2.1 The $Q-a$ relationship
The first order approximation of the momentum equation:

$$
S_o  = S_f
$$

expresses the equilibrium between friction and gravity forces. The same equation was already discussed in Section 3.5.1, where it was used to study flow in equilibrium: situations where all flow characteristics (level, velocities, discharges) are the same everywhere (uniformity) and at all times (stationarity). Here we will use this relation in a dynamic context to study waves that do vary in space and time.

The basic formula was rewritten, either using the [[Chézy Equation|Chézy]] or [[Manning's Law|Manning]] formalism into

$$
\begin{aligned}
Q_e &= \sqrt{S_o} \, C \, A_e \, R_e^{1/2} \;\;\text{ : Chézy} \\
&= \frac{\sqrt{S_o}}{n} \, A_e \, R_e^{2/3} \;\;\text{ : Manning}
\end{aligned}
$$

In this both $A$ and $R$ are functions of the depth $a$. It shows that this first approximation results in a one-to-one relationship between depth $a$ and discharge $Q$.

