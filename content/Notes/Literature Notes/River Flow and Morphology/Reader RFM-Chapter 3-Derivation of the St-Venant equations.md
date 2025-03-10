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

## 3.2.3 Lateral flow
In this previous section, the inflow and outflow into the control volume from within the river system was calculated. In general, however, one has also to consider water than enters the control volume from outside the river system, or water that is lost from the river to the outside world. For example:
- rainfall can fall into the river
- water can evaporate from the river
- groundwater can drain into the river or the river can leak into the groundwater system
- overland flow can reach the river
- $\dots$

We will use the term **lateral flow** for the total of all these external fluxes. We assume that these flows are *diffuse*: distributed in space and time. Let us denote by $I$ the intensity per unit of time and per unit of river length of the sum of all the external flows. We make the convention that $I \gt 0$ means that there is a net flow to the river. Then the total inflow into the control volume during the time interval $\Delta t$ is given by:

$$
\Delta x \Delta t \, \rho \, I
$$

This lateral flow can have many functional forms
1. When the total lateral flow consists of overland flow, one can state that $I = I(t)$;
2. When the total lateral flow consists of rainfall or evaporation, one may write: $I = b(t,x)\, i(t)$ where $b(t,x)$ is the width of the channel at time $t$ at the cross section at $x$ and $i(t)$ the intensity of the rainfall and/or evaporation per unit area
3. When the lateral flow consists totally of drainage from leakage to the groundwater, then the magnitude of the flow will depend on the difference between the groundwater level $(H)$ and the open water surface resulting in formulas as $I=(H-h)/c_r$, where $c_r$ is the [[Resistance]]

In general, it will be a combination of the above.

## 3.2.4 Total mass balance
Combining the terms above results in

$$
\begin{aligned}
\text{change in storage} &= \text{inflow} - \text{outflow} + \text{external flow} \\
\Delta x \Delta t \left(\frac{\partial \rho A}{\partial t} (t, x) \right) &= \Delta x \Delta t \left( -\frac{\partial \rho Q}{\partial x}(t, x) \right) + \Delta x \, \Delta t \, \rho \, I \\
\frac{\partial \rho \, A}{\partial t} (t, x) &= - \frac{\partial \rho \, Q}{\partial x} (t,x) + \rho \, I
\end{aligned}
$$

Using the fact that water has a constant density ($\rho = 1$), this can be rewritten into

$$
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} = I
$$

---
# 3.3 Conservation of Momentum
## 3.3.1 Momentum and forces
The second conservative quantity to be investigates is the momentum. The more traditional Newtonian formulation (for one simple body) is in terms of acceleration and forces:

$$
\begin{aligned}
\text{acceleration} &= \text{forces}\\
m \overrightarrow{a} &= \overrightarrow{F}
\end{aligned}
$$


As we will only investigate the components in the direction of the flow, we will only consider the components of the vectors in that direction, and omit the vector sign $\; \overrightarrow{}\;$ above.

Momentum is defined by momentum $= m v$, so that

$$
\begin{aligned}
\text{change in momentum} &= \frac{\partial (\text{momentum})}{\partial t} \\
&= \frac{\partial m v}{\partial t}\\
&= m \frac{\partial v}{\partial t} \\
&= m a\\
&= F
\end{aligned}
$$

This is generalised in the conservation law for momentum, which can be formulated using the control volume description of this chapter as:

$$
\text{change in momentum} = \left( \text{momentum inflow} - \text{momentum outflow} \right) + \text{external forces}
$$

The conservation law can be worked out in much the same wat as was done for the conservation of mass in the previous section:

1. Storage

$$
\rho A u = \rho Q
$$

2. Change of storage

$$
\frac{\partial \rho \, Q}{\partial t} = \rho \frac{\partial Q}{\partial t}
$$

3. Flow into the system

$$
\rho \, Q \,u
$$

4. Inflow - outflow

$$
- \frac{\partial \rho \, Q \, u}{\partial x} = - \rho \frac{\partial Q \, u}{\partial x}
$$

5. External flow

$$
F
$$


Following the same reasoning as in the previous section, the momentum balance can be written as:

$$
\rho \frac{\partial Q}{\partial t} + \rho \frac{\partial Q \, u}{\partial x} = F
$$

Where $F$ in the right hand stands for the sum of all external forces, all evaluated per unit river length (as was also done for the lateral flow):

$$
F = \sum\limits_i F_i
$$

These different forces will be studied in more detail in the next sections

## 3.3.2 Gravity
As the bottom slope is in general non-zero, gravity will make water flow and thus will generate momentum. To calculate the component of this force in the flow direction, we have to decompose the total gravity force (pointing vertically downwards: i.e. in the direction given by the vector $-\overrightarrow{1}_z$) into a component perpendicular to the bottom of the river (this part does not contribute to flow momentum), and a component parallel to that bottom that does contribute to the flow in that direction. 

![[Pasted image 20250310140655.png]]

The total gravity force can now be calculated:

$$
\begin{aligned}
\overrightarrow{F}_{\text{grav}} &= -\overrightarrow{1}_z \, g \, \cdot \, \text{mass control volume} \\
&= -\overrightarrow{1}_z \, g \, \rho \, \Delta x \, A \\
&= -\overrightarrow{1}_z \, g \, \rho \, A \, \Delta x
\end{aligned}
$$

From this total force the component parallel to the bottom can be calculated. We are interested in the magnitude of this component per unit length of the river. This quantity will be denoted by $F_o$ and can be calculated as follows:

$$
\begin{aligned}
F_o &= \sin(\alpha) \, F_{\text{grav}} / \Delta x \\
&= \rho \, g \, A \, S_o
\end{aligned}
$$

>[!Note]
>The subindex "$_o$" is traditionally used in this context and has no special meaning

>[!Note]
>For small $\alpha$: $S_o = \tan(\alpha) \approx \sin(\alpha) \approx \alpha$


