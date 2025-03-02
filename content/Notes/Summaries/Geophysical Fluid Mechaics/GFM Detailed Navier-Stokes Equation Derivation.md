---
fileClass: Base, Summaries
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: In Progress
Related Notes: ["[[Reader GFM-Chapter 2-Kinematics]]", "[[Reader GFM-Chapter 3-Conservation of mass and momentum]]"]
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---

>[!Warning]
>This summary is dedicated to deriving the Navier-Stokes equation in a more elaborate manner, especially concerning how to arrive at the initial momentum balance equation. This is a summary partially based on the study book, but supplemented with results from online searches and ChatGPT.


# Reynolds Transport Theorem
The Reynolds Transport Theorem (RTT) is a fundamental theorem in fluid mechanics that allows us to translate the description of physical laws from a [[Lagrangian Perspective]] (i.e. system-based) to a [[Eulerian Perspective]] (i.e. control-volume based). It helps to analyse how extensive properties (like mass, momentum and energy) change within a control volume and across its boundaries
## The Integral Form
In an integral form, we consider a control volume $CV$, which is a fixed region in space through which fluid flows. Let $B$ be any property (such as mass, momentum or energy) and let $b$ be the corresponding intensive property (i.e. per unit mass):

$$
B = \int\limits_{CV} \; \rho b \, \mathrm{d}V \tag{1}
$$

where
- $\rho$ is the fluid density
- $b$ is the intensive property (e.g. $\overrightarrow{u}$ if $B$ is momentum)
- $\mathrm{d}V$ is a differential volume element

We know, however, that $B$ can change over time in a control volume, for example mass flowing in and out of the CV. The flow volume out of an infinitesimal (i.e. infinitely small) edge piece $\mathrm{d}A$ is equal to:

$$
\overrightarrow{u} \cdot \overrightarrow{n} \; \mathrm{d}A \tag{2}
$$

where
- $\overrightarrow{u}$ is the velocity
- $\overrightarrow{n}$ is a unit vector point outwards and orthogonal to the surface of the control volume. 
- $(\overrightarrow{u} \cdot \overrightarrow{n}$), i.e. the dot product, corresponds to the projection of the velocity in the direction orthogonal to the surface, which is the only part of the velocity contributing to the outflow. The flow parallel to the surface will not contribute to the outflow

>[!Note]
>We define outflow as positive, and correspondingly define inflow (where the velocity is directed into the control volume) as negative outflow

The net outflow out of the total outer edge $CS$ of the control volume is equal to 

$$
\int\limits_{CS} \rho b \; (\overrightarrow{u} \cdot \overrightarrow{n}) \; \mathrm{d}A \tag{3}
$$

We know that a net outflow of $B$ will lead to a decrease in total $B$ within the control volume. In other words, a positive flux (outflow) through the edges of the control volume has to be balanced by a negative change (decrease) of total $B$ inside the control volume. Or, mathematically

$$
\underbrace{\frac{\partial}{\partial t} \int\limits_{CV} \; \rho b \, \mathrm{d}V}_{\text{Change of total B}} \; \; \;+ \underbrace{\int\limits_{CS} \; \rho b \, (\overrightarrow{u} \cdot \overrightarrow{n}) \, \mathrm{d}A}_{\text{Flux of B through edges}} = 0 \tag{4}
$$

The first term accounts for the local rate of change within the control volume (i.e. how the property changes at a fixed point due to time dependence). 

We, however, have to account for changes in quantity $B$ within the constant system due to, for example, a chemical reaction or temperature changes. This is captures in the external flux

$$
\frac{\mathrm{d}}{\mathrm{d}t} \int\limits_{CV} \; \rho b \, \mathrm{d}V = \frac{\mathrm{d}B}{\mathrm{d}t} \tag{5}
$$

The complete Reynolds Transport Theorem in integral form (as a combination of 4 and 5) states

$$
\begin{aligned}
\underbrace{\frac{\mathrm{d}B}{\mathrm{d}t}}_{\text{External flux}} &= \frac{\mathrm{d}}{\mathrm{d}t} \int\limits_{CV} \; \rho b \, \mathrm{d}V \\
&= \underbrace{\frac{\partial}{\partial t} \int_{CV} \; \rho b \, \mathrm{d}V}_{\text{Change of total mass}} \; \; \;+ \underbrace{\int_{CS} \;  \rho b \, (\overrightarrow{u} \cdot \overrightarrow{n}) \, \mathrm{d}A}_{\text{Flux of mass through edges}} \;
\end{aligned} \tag{6}
$$


## The Differential Form
To derive the differential form, we apply the [[Divergence Theorem]] to the flux term. Recall the meaning of divergence, i.e. that it represents the local loss of a certain quantity due to spatial gradients and fluxes. The integral of the divergence over the volume will be the total loss of that quantity. This is the equivalent to the net loss of that quantity over the edges of the control volume. We can express this as follows:

$$
\underbrace{\int\limits_{CS} \;  \rho b \, (\overrightarrow{u} \cdot \overrightarrow{n}) \, \mathrm{d}A}_{\text{Net loss over edges}} \;\;\;= \underbrace{\int\limits_{CV} \; \overrightarrow{\nabla} \, \cdot (\rho b \, \overrightarrow{u})\,\mathrm{d}V}_{\text{Sum of local loss in volume}} \tag{7}
$$

Substituting this into the integral form (i.e. Equation 6):

$$
\int\limits_{CV} \; \frac{\partial}{\partial t} (\rho b) \, \mathrm{d}V + \int\limits_{CV} \; \overrightarrow{\nabla} \cdot (\rho b \, \overrightarrow{u}) \, \mathrm{d}V = 0 \tag{8}
$$


This equation should hold for any arbitrary control volume. The only way this is possible is if both integrands themselves are 0. Thus:

$$
\frac{\partial}{\partial t} (\rho b) + \overrightarrow{\nabla} \cdot (\rho b \, \overrightarrow{u})= 0 \tag{9}
$$

This is the final differential form of the Reynolds Transport Theorem.

## The Local Time Derivative, Total Derivative and Material Derivative
In Equation 9 we obtained the differential form of the RTT. Expanding the divergence term using the product rule:

$$
\frac{\partial}{\partial t} \, (\rho b) + \rho (\overrightarrow{u} \cdot \overrightarrow{\nabla}) b + b(\overrightarrow{\nabla} \cdot \rho \, \overrightarrow{u}) = 0 \tag{10}
$$

For incompressible fluids, $(\overrightarrow{\nabla} \cdot \overrightarrow{u} = 0)$. This simplifies Equation 10 to

$$
\frac{\partial}{\partial t}b + \overrightarrow{u} \cdot \overrightarrow{\nabla} b = 0 \tag{11}
$$

This is the fundamental equation governing the change of a fluid property $b$ (such as velocity, temperature or concentration)

The **local time derivative** measures how $b$ changes at a fixed point in space using only the first term of Equation 11. It captures unsteady effects, meaning variations in time at a stationary observation point.

$$
\frac{\partial b}{\partial t} \tag{12}
$$

>[!Example]
>If you are standing on a riverbank and measure water velocity at a fixed location, the local derivative tells you how the speed of the water at that spot changes over time.

The **total derivative** accounts for changes in a function that depends on both space and time. The total derivative applies to a moving observer who is not necessarily following a fluid particle. It describes how $b$ changes both due to explicit time dependence and because the observer moves through a spatially varying field.

If $b$ is a property that varies with space and time $(b(x, t)$), its total derivative is

$$
\begin{aligned}
\frac{\mathrm{d}b}{\mathrm{d}t} &= \frac{\partial b}{\partial t} + \sum\limits_{i=1}^{3} \frac{\partial b}{\partial x_{i}} \frac{\mathrm{d}x_i}{\mathrm{d}t} \\
\end{aligned} \tag{13}
$$

>[!Note]
>Equation 13 captures the total derivative for the x, y and z directions. If we only want one direction, for example x, the formula reduces to
>
>$$
>\frac{\mathrm{d}b}{\mathrm{d}t} = \frac{\partial b}{\partial t} + u_1^e \, \frac{\partial b}{\partial x_1} \tag{14}
>$$

>[!Example]
>Imagine you are on a boat moving through a river. The velocity of the water around you might change due to time variation (local derivative) and also because you are moving through a region where the flow is faster or slower (spatial derivative contribution)

The **material derivative** describes the total rate of change of a property as experienced by a moving fluid particle. 

It is denoted as

$$
\frac{\mathrm{D}b}{\mathrm{D}t} = \frac{\partial b}{\partial t} + (\overrightarrow{ u} \cdot \overrightarrow{\nabla})b \tag{15}
$$

where
- $\frac{\partial b}{\partial t}$ is the local rate of change at a fixed point
- $(\overrightarrow{ u} \cdot \overrightarrow{\nabla})b$ is the convective rate of change, capturing how a moving fluid particle experiences spatial variations

Thus, the material derivative is the rate of change $b$ along the trajectory of a fluid particle. Here,
- The local derivative measures changes at a fixed point
- The convective term accounts for the fact that fluid particles move through a spatially varying field
- The material derivative is the sum of both, representing the actual rate of change for a moving fluid particle. 

>[!Example]
>If you are floating in a river, the material derivative tells you how the velocity of the water around you changes, considering both the time variation of the flow and the spatial variations in the river. 

---
# Conservation of Mass (Continuity Equation)
Assuming that we have a control volume, mass can not be created or destroyed within this volume. In other words, if you import air of the same density over a boundary of the control volume, then it is forced to move out another boundary of the control volume. Mass is therefore a **conserved variable**. 

Another assumption that we will apply often in our derivations is that density of air or water is as a first approximation constant in time. If this assumption holds, then in addition of mass conservation, the volume is also conserved. If the flow satisfies this assumption, we call it **incompressible flow**.

## Integral form
Our starting point is the integral form of the Reynolds Transport Theorem, i.e. Equation 6 we saw earlier

$$
\begin{aligned}
\underbrace{\frac{\mathrm{d}B}{\mathrm{d}t}}_{\text{External flux}} &= \frac{\mathrm{d}}{\mathrm{d}t} \int\limits_{CV} \; \rho b \, \mathrm{d}V \\
&= \underbrace{\frac{\partial}{\partial t} \int_{CV} \; \rho b \, \mathrm{d}V}_{\text{Change of total mass}} \; \; \;+ \underbrace{\int_{CS} \;  \rho b \, (\overrightarrow{u} \cdot \overrightarrow{n}) \, \mathrm{d}A}_{\text{Flux of mass through edges}} \;
\end{aligned}
$$

For the specific case of mass, we take $b = 1$. Now, including the first assumption (i.e. mass is conserved, there is no external flux) and rewriting the equation, we arrive at:

$$
\underbrace{\int\limits_{CV} \; \frac{\partial \rho}{\partial t} \, \mathrm{d}V}_{\text{Mass rate gain/loss in the control volume}} + \underbrace{\int\limits_{CS} \; \rho \, (\overrightarrow{u} \cdot \overrightarrow{n})\,\mathrm{d}A}_{\text{Net loss/gain by fluxes normal to the surface}} = 0 \tag{15}
$$

This is the conservation of mass in integral form

## Differential Form
The starting point of the differential form of the mass balance equation is Equation 9, i.e. the differential form of the Reynolds Transport Theorem:

$$
\frac{\partial}{\partial t} (\rho b) + \overrightarrow{\nabla} \cdot (\rho b \, \overrightarrow{u})= 0 
$$

In the specific case of mass, we again set $b=1$. Equation 9 then reduces to

$$
\frac{\partial \rho}{\partial t} + \overrightarrow{\nabla} \cdot (\rho \, \overrightarrow{u} \,) = 0 \tag{16}
$$

Or, using the index notation:

$$
\frac{\partial \rho}{\partial t} + \frac{\partial}{\partial x_i} \, (\rho \, u_i) = 0 \tag{17}
$$

If we now include the second assumption, i.e. that we are dealing with an incompressible fluid, we know density ($\rho$) to remain constant in time. Equation 16 thus reduces to

$$
\overrightarrow{\nabla} \cdot \overrightarrow{u} = 0 \tag{18}
$$

This shows that there is no net inflow or outflow at any given point, solidifying that all mass is conserved.

---
# Conservation of Momentum (Navier-Stokes Equation)
In the previous section, we learned that we need to conserve mass, but both air and water move and accelerate/decelerate continuously. Therefore we need an equation that describes the evolution in the three-spatial directions of a control volume or a point in space: the conservation of momentum expressed in the form of acceleration and deceleration. 

## Integral Form
Our starting point is, again, the integral form of the Reynolds Transport Theorem, i.e. Equation 6

$$
\begin{aligned}
\underbrace{\frac{\mathrm{d}B}{\mathrm{d}t}}_{\text{External flux}} &= \frac{\mathrm{d}}{\mathrm{d}t} \int\limits_{CV} \; \rho b \, \mathrm{d}V \\
&= \underbrace{\frac{\partial}{\partial t} \int_{CV} \; \rho b \, \mathrm{d}V}_{\text{Change of total mass}} \; \; \;+ \underbrace{\int_{CS} \;  \rho b \, (\overrightarrow{u} \cdot \overrightarrow{n}) \, \mathrm{d}A}_{\text{Flux of mass through edges}} \;
\end{aligned}
$$

Whereas we took $b=1$ in the conservation of mass equation, we now take $b = \overrightarrow{u}$, such that $B = \rho \overrightarrow{u}$. The