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
In this chapter the partial differential equations describing the flow in open water will be derived. These equations are called the [[St-Venant Equations]]. This will be done by using the assumptions of the previous chapter

---
# 3.1 Control volume
The equations will be derived by applying the laws of conservation of mass and momentum to a control volume. A control volume is an (infinitesimal) small part of the river between cross section $x$ and $x + \Delta x$. We will calculate the amount of mass and momentum that flows in and out of that control volume and the change in storage between times $t$ and $t + \Delta t$. For any conservative quantity "$\diamond$" (mass, momentum, $\dots$), one can make a balance for the control volume during the time interval $\Delta t$ by:

$$
\begin{aligned}
\text{change in "}\diamond\text{" storage} = &+ \text{inflow of "}\diamond\text{"} \\
&- \text{outflow of "}\diamond\text{"} \\
& + \text{external in/outflow of "}\diamond\text{"}
\end{aligned}
$$

---
# 3.2 Conservation of Mass
## 3.2.1 Change in Storage
The calculation of the total mass storage, and the change of it, is illustrated by Figure 3.3. The total *volume* of water is $A\Delta x$, and the change ($\rho$ being the density of water) of mass is given by:

$$
\begin{aligned}
\text{change in mass} &= \Delta x \left( \rho A(t + \Delta t, x) - \rho A (t, x) \right) \\
& \approx \Delta x \Delta t \left(\frac{\partial \rho A}{\partial t} (t, x) \right)
\end{aligned}
$$

![[Pasted image 20250310134047.png]]
## 3.2.2 in and outflow
The discharge flowing into the control volume at $x$ is given by $Q(t,x)$. From this follows that the total amount of water entering the control volume at $x$ between $t$ and $t + \Delta t$ equals $\Delta t \, Q(t, x)$. The outflow can be calculated in a similar way. This gives:

$$
\begin{aligned}
\text{mass inflow}-\text{mass outflow} &= \Delta t \left( \rho Q(t, x) - \rho Q(t, x+\Delta x) \right) \\
&\approx \Delta x \Delta t \left( -\frac{\partial \rho Q}{\partial x}(t, x) \right)
\end{aligned}
$$

![[Pasted image 20250310134059.png]]