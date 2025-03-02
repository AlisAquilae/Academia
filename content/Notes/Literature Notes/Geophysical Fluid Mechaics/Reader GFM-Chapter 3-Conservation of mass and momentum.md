---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---
# 3.1 Introduction
In this chapter, we introduce the three main governing equations that enable us to describe and forecast the motion evolution of geophysical flows. The conservation laws are for the variables mass, movement and energy. For these variables, the derivation starts with equation 2.7, and the application of this generic equation to mass ($M$), three-components of the velocity ($u_i$) and energy ($e$). We start with an example that motivates us to derive an equation to ensure that mass is conserved. We then move to the derivation of the conservation equation. Under typical conditions of water and air, we simplify this mass conservation law, and we derive its incompressible form. A fluid that is incompressible keeps the volume constant subject to changes of temperature and pressure.


---
# 3.2 Conservation of Mass - The equation of continuity
![[Pasted image 20250224145242.png]]

Figure 3.1 (left) shows a deep convective cloud formed in the Amazonian rain forest. Clouds are fundamental entities in transporting mass, momentum and energy. A key question is how much mass clouds are transporting from the layer above the forest into the upper layers of the atmosphere, and how much mass is transported into or out of the cloud. During this transport, we need to account that mass ($M$) is not created and destroyed, and therefore we need to derive a physical law that conserves mass. From this general law, we can make physical assumptions that enable us to not only conserve the mass, but also conserve the volume. In doing so, we obtain a relation of the three directions of the wind that quantifies if the flow converges (moves together) or diverges (split up).

## 3.2.1 Why do we need a law to conserve mass?
We define mass ($M$) as $M=\rho V$ (where $\rho$ is density and $V$ is volume). Assuming that we have a control volume (see [[Reader GFM-Chapter 2-Kinematics|Chapter 2]]), mass can not be created or destroyed within this volume. In other words, if you import air of the same density over a boundary of the control volume, then it is forced to move out another boundary of the control volume. Mass is therefore a **conserved variable**. 

Another assumption that we will apply often in our derivations is that density of air or water is as a first approximation constant in time (not always, see [[Reader GFM-Chapter 6-Compressibility and vorticity|Chapter 6]] for a more in-depth discussion). If this assumption holds, then in addition of mass conservation, the volume is also conserved. If the flow satisfies this assumption, we call it **incompressible flow**. Applying this assumption to the conserved law of momentum will enable us to obtain more physical expressions of the [[Shear Strain]]-term


## 3.2.2 What does the mass conservation equation mean?
Our starting point is Equation 2.7:

$$
\underbrace{\frac{\partial}{\partial t} \int_{CV} \; b\, \rho \, \mathrm{d}V}_{\text{Change of total mass}} \; \; \;+ \underbrace{\int_{CS} \; b \, \rho \, \overrightarrow{u} \cdot \overrightarrow{n} \, \mathrm{d}A}_{\text{Flux of mass through edges}} \;= \underbrace{\frac{\mathrm{d}B}{\mathrm{d}t}}_{\text{External flux}} \tag{2.7}
$$

>[!Note]
>See [[Reader GFM-Chapter 2-Kinematics#2.4.1 Mathematical Approach|Chapter 2]] for an explanation of this equation

Remember that this equation was derived for a control volume and field differential. In the particular case of mass, we now take that $b=M/V=m$. The equation then reads:

$$
\underbrace{\int\limits_{CV} \; \frac{\partial \rho}{\partial t} \, \mathrm{d}V}_{\text{Mass rate gain/loss in the control volume}} + \underbrace{\int\limits_{CS} \; \rho \, (\overrightarrow{u} \cdot \overrightarrow{n})\,\mathrm{d}A}_{\text{Net loss/gain by fluxes normal to the surface}} = 0 \tag{3.1}
$$

## 3.2.3 What is the physical interpretation?
The flux over the surface of the control volume relates to the divergence of the same property within the volume. Recall the physical meaning of divergence, i.e. it represents the local loss of a certain quantity due to spatial gradients. These gradients create fluxes that move mass in and out of the control volume. The integral of the divergence over the volume is the total loss or gain of that quantity, in that case $m$. This is equivalent to the net loss of that quantity over the edges of the control volume.

$$
\underbrace{\int\limits_{CS} \; b \, \rho \, \overrightarrow{u} \cdot \overrightarrow{n} \, \mathrm{d}A}_{\text{Net loss over the edges}} = \underbrace{\int\limits_{CV} \; \overrightarrow{\nabla} \cdot (b \, \rho \, \overrightarrow{u}) \, \mathrm{d}V}_{\text{Sum of local loss in volume}} \tag{3.2}
$$

Similar as done in the previous chapter, we can now consider an infinitesimally small control volume (Equation 2.12) to obtain:

$$
\int\limits_{CV} \left[ \frac{\partial \rho}{\partial t} + \overrightarrow{\nabla} \cdot (\rho \, \overrightarrow{u} \,) \right] \, \mathrm{d}V = 0 \tag{3.3}
$$

It is important to stress that it is only representative locally over the entire field. We can then take the inner part of the integral. Then, the equation reads in the vectoral form:

$$
\frac{\partial \rho}{\partial t} + \overrightarrow{\nabla} \cdot (\rho \, \overrightarrow{u} \,) = 0 \tag{3.4}
$$

and using the index notation

$$
\frac{\partial \rho}{\partial t} + \frac{\partial}{\partial x_i} \, (\rho \, u_i) = 0 \tag{3.5}
$$

Both equations represent the same: the conservation of mass in a control volume.

## 3.2.4 Can we express the equations as a function of the total derivative?
In geophysical fluids it is key to be able to compare terms to determine which term is relevant with respect to the other. To this end, we take now equation 3.5, and we express it as a function of the material, or substantial derivative, as presented in the previous chapter. 

>[!Warning]
>I skipped the steps used in the derivation


The material derivative of the density is:

$$
\underbrace{\frac{D \rho}{Dt}}_{\text{Change of density of a fluid particle}} = \underbrace{-\rho \frac{\partial \, u_i}{\partial \, x_i}}_{\text{Expandion of the fluid}} \tag{3.6}
$$

By expressing the conservation of mass using only two terms, it is easy to compare them. As will be explained in the next section, this can lead to a simplified equation of the conservation of mass.

## 3.2.5 Mass conservation in incompressible form
As mentioned before, in a lot of applications for air and water we can assume as a first approximation that density $\rho$ is constant over time. If we make this assumption, equation 3.6 reduces to

$$
\frac{\partial u_i}{\partial x_i} = 0 \tag{3.7}
$$

If the flow fulfils this equations it is named incompressible. A flow is considered incompressible if the density of the fluid is constant within a fluid parcel (also called isochoric flow). Such a flow is often called incompressible.

If now we take the incompressible form of the mass conservation, we can provide a physical explanation to our motivating example of the in or out flow in the Amazonian cloud. Remember that by definition, the velocity vector has three components. We take $u_1 = u$, $u_2 = v$ and $u_3 = w$. Our starting point is:

$$
\begin{equation}
\frac{\partial u_i}{\partial x_i} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0 \tag{3.8} 
\end{equation}
$$

The expression enables us a method to calculate whether the flow is converging (net inflow of air increases the mass in a control volume) and diverging (net outflow of air decreases the mass in a control volume).

Let us make use of equation 3.8. Assuming for the sake of simplicity that $v=0$, Figure 3.2 shows a convergent situation in which $\frac{\partial u}{\partial x} \lt 0$, and therefore the air is ascending $\frac{\partial w}{\partial z} \gt 0$ to fulfil the equation: 

$$
\overbrace{\frac{\partial u}{\partial x}}^{\lt \, 0} + \overbrace{\frac{\partial w}{\partial z}}^{\gt \, 0} = 0 \tag{3.9}
$$

![[Pasted image 20250224155114.png]]

The analysis is valid within the control volume, by assuming that the dotted square is a control volume. Likewise, we can apply this analysis to the field description, by assuming that the dotted square is a point in space. 

---
# 3.3 Conservation of momentum - The equation of motion
In our objective to describe all the characteristics of the flow (motions, laws and mathematics), it is key to be able to represent and calculate the movement of water and air masses. In the previous section, we learned that we need to conserve mass, but both air and water move and accelerate/decelerate continuously. Therefore we need an equation that describes the evolution in the three-spatial directions of a control volume or a point in space: the conservation of momentum expressed in the form of acceleration and deceleration. We will derive it like the equation for the conservation of mass, knowing that momentum is directly proportional to the object's mass ($m$) and velocity ($v$). 

## 3.3.1 What is the governing equation that describes the movements of water and air masses?
Our starting point is the [[Newton's Second Law of Motion|Second Law of Newton]]. In short: acceleration of an object depends upon two variables: the net force acting upon the object and the mass of the object. This object for us are masses of air and water. Using a similar approach as in the derivation of the conservation of mass, we analyse the forces that occur in and out of a control volume. 

The second law of Newton reads (assuming mass does not change in time):

$$
\overrightarrow{F} = m \, \frac{\mathrm{d}}{\mathrm{d}t} \, \overrightarrow{v} = m \overrightarrow{a} \tag{3.10}
$$

Here, the vector $\overrightarrow{F}$ represents a generic force of forces. Later in the section, we will identify the more important forces acting in the air or water masses. In our derivation, we will consider that these forces are acting per unit of volume, and therefore we divide the $\overrightarrow{F}$ by the volume: $\frac{\overrightarrow{F}}{V} = \overrightarrow{f}$. 

It is here important to remember that we will use in parts of the derivation the index notation and its extensions:

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d}t} \overrightarrow{v} &= \frac{\mathrm{d}u_i}{\mathrm{d}t} \\
&= \frac{\mathrm{d}u}{\mathrm{d}t} + \frac{\mathrm{d}v}{\mathrm{d}t} + \frac{\mathrm{d}w}{\mathrm{d}t}
\end{aligned} \tag{3.11}
$$

We will also use the relation between total and local derivative:

$$
\frac{\mathrm{d}u_i}{\mathrm{d}t} = \frac{\partial u_i}{\partial t} + u_j \frac{\partial u_i}{\partial x_j} \tag{3.12}
$$

or, in an extended form for the first component $u$:

$$
\frac{\mathrm{d}u}{\mathrm{d}t} = \frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z} \tag{3.13}
$$

## 3.3.2 Derivation of the conservation of momentum: Navier-Stokes equation

>[!Note]
>From here on out follows a derivation of the conservation of momentum equation, also called the [[Navier-Stokes Equation]]. Note that it is not important to be able to derive this equation yourself, but you should be able to follow the steps taken

The equation of motion is obtained by associating $B$ (see Equation 2.7) with the momentum in the system. Momentum is a vector quantity, the product of mass and velocity. In the particular case of the momentum equation, $b$ becomes the velocity vector $\overrightarrow{u}$ with respect to the control volume equation. 

From Newton's law of motion, the net force acting on a control volume equals the rate of change of momentum within that control volume. The equation reads:

$$
\frac{\mathrm{d}}{\mathrm{d}t} \overrightarrow{B} = \overrightarrow{F} \tag{3.14}
$$

Applying equation 3.14 to the control volume equation (Equation 2.7) becomes

$$
\overrightarrow{F} = \int\limits_{CV} \; \frac{\partial}{\partial t} (\rho \overrightarrow{u}) \, \mathrm{d}V + \int\limits_{CS} \; \rho \, \overrightarrow{u} \, (\overrightarrow{u} \cdot \overrightarrow{n}) \, \mathrm{d}A \tag{3.15}
$$

in which
- $\overrightarrow{F}$ is the sum of al forces acting on the fluid in the control volume

To obtain the differential equation, we can express the last term of the right-hand side as the sum of the fluxes acting in the volume. The equation now reads:

$$
\frac{\mathrm{d}B}{\mathrm{d}t} = \int\limits_{CV} \left[ \frac{\partial}{\partial t} \, (\rho b) + \overrightarrow{\nabla} \cdot (\rho b \,\overrightarrow{u}) \right] \mathrm{d}V \tag{3.16}
$$

Similar to the conservation of mass, we can now consider an infinitesimal control volume (point). Dividing by the volume, the left side becomes the force per unit volume $\overrightarrow{f}$, and $b = \overrightarrow{u}$. The equation states that the rate of change of momentum per unit volume is equal to the force per unit volume. As a result, the differential equation reads:

$$
\overrightarrow{f} = \frac{\partial}{\partial t}\, (\rho \, \overrightarrow{u}) + \nabla \cdot (\rho \, \overrightarrow{u} \, \overrightarrow{u}) \tag{3.17}
$$

The quantity $\overrightarrow{u} \, \overrightarrow{u}$ is a dyadic product ($u_i u_j$). Equation 3.17 can be simplified by the use of the continuity equation (Equation 3.6).

Note that Equation 3.17 is written in a vectorial form. The equivalent equation written using the index notation reads:

$$
\begin{aligned}
f_i &= \frac{\partial}{\partial t} \, (\rho u_i) + \frac{\partial}{\partial x_j} \, (\rho u_i u_j) \\
&= u_1 \frac{\partial \rho}{\partial t} + \rho \frac{\partial u_i}{\partial t} + \rho u_j \frac{\partial u_i}{\partial x_j} + u_i \frac{\partial }{\partial x_j} (\rho u_j) 
\end{aligned} \tag{3.18}
$$

Here we can make an important simplification and invoke the conservation of mass: the first and last term of the right hand side. Both terms cancel each other, and therefore the final expression reads:

$$
f_i = \rho \frac{\partial u_i}{\partial t} + \rho u_j \frac{ \partial u_i}{\partial x_j} \tag{3.19}
$$

This is the final conservation equation for momentum. Note that all the terms have units [kg m$^{-2}$ s$^{-2}$], equivalent to a force per unit volume with units [N m$^{-3}$]. Positive values of this term indicate that air/water masses are accelerating, whereas negative values indicate a deceleration of the air/water masses. In short, in a control volume, the (de-)acceleration inside the volume and through the six sides of the volume depends on the forces exerted in the volume (see figure 2.8). Therefore, by identifying the individual forces and their relevant, we obtain an equation that is able to make a prognostic of the (de-)acceleration of air and water masses.

