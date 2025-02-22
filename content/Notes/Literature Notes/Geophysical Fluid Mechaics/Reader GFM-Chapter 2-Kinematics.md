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
# 2.1 Introduction
In this chapter we discuss four different approaches to describe the mechanics of a system. We will derive very generic equations for the conservation of any quantity of that system. These general equations will be used in [[Reader GFM-Chapter 3-Conservation of mass and momentum|Chapter 3]] and [[Reader GFM-Chapter 5-Conservation of energy|Chapter 5]] to describe the conservation of mass, momentum and energy.

---
# 2.2 Methods of Description
## 2.2.1 Approaches to Mechanics
There are different approaches to the description of mechanics. We differentiate approaches along two dimensions, with each dimension being differentiated into two as well:
- **System vs field**: In the *system* or *integral* approach, we are only interested in the bulk behaviour of the entire system. In the *field* or *differential* approach, we are interested in all details within the system. We want to know the entire field.
- **Lagrangian vs Eulerian**: In the *Lagrangian* or *constant mass* approach, we keep track of the position of individual objects or particles as they move, and study how their properties (e.g. pressure, velocity) change along their trajectory. In the *Eulerian* or *constant volume* approach, we do not consider the position and properties of the individual objects or particles, but instead focus on system properties (e.g. pressure, velocity) change at a fixed location. 

This differentiation gives rise to 4 approaches to mechanics.

---
## 2.3 Constant mass, system approach
In most high school physics, the constant mass, system approach is considered. Suppose
you would study the dynamics of the student on the bike in the upper left corner of Figure 2.2. The mass will remain constant within the mass system, i.e. the student will not suddenly disappear or become larger. We can apply [[Newton's Second Law of Motion]] $\overrightarrow{F} = m\overrightarrow{a}$, i.e. if a force is applied to a student, the student with either accelerate or decelerate. This approach works well for a clearly defined mass system (the student), but for a fluid, it is much harder to define a constant mass system. That is why we decide to give up on following the fluid and instead define a constant volume within which we will study the fluid.

![[Pasted image 20250222143537.png]]

---
## 2.4 Constant volume, system approach
We turn to our bridge example again. In the constant volume, system approach, we no longer keep track of the motion of the student but define a control volume. Conservation of mass as defined before does not hold in this case. The mass is not simply constant in our fixed volume. Instead, we must now keep track of the **flux** of mass over the edges and the total mass in the control volume. So in our previous example (Figure 2.3), we see that we have around 6.8 students in the volume, and we have an outflow of students on the left edge, so the mass of students in our control volume is decreasing in time.

![[Pasted image 20250222144409.png]]

Just like for the conservation of mass, [[Newton's Second Law of Motion]] will not simply hold for the control volume. Instead of keeping track of the momentum of one student, we will now keep track of the total momentum in our control volume (we ignore how this momentum is distributed in the control volume). We will have momentum flowing out of the control volume (the student is leaving the control volume so takes a bit of momentum with them). We also might have forces acting on the control volume affecting the momentum (imagine the bridge would be sloping, gravity would accelerate the students adding momentum to the control volume). 

>[!Example]
>In a recent study on the Ems estuary, the authors took flow measurements during a tidal cycle. The aim of the measurements was to set up a mass balance for the flow of water and sediment in a section of the estuary, t0o understand the reason for the extreme sediment concentrations in the system. To check the quality of the data collected, they calculated the mass balance over the control volume

### 2.4.1 Mathematical Approach
How do we systematically describe the bookkeeping of mass and momentum? We will start by considering mass, and will later extend the approach to other quantities, such as momentum.

For mass, we first want to know the total mass in the volume. At every place in the volume, we will have a certain mass concentration, or mass per unit volume, also known as [[Fluid Density|Density]]. The total mass $M$ in the control volume $CV$ is equal to the density integrated over the $CV$:

$$
M = \int\limits_{CV} \rho \, \mathrm{d}V \tag{2.1}
$$

Recalling the example of students cycling through a control volume, we have seen that the total mass in the control volume can change over time because of mass flowing in and out of the control volume. The flow volume out of an infinitesimal (i.e. infinitely small) edge piece $\mathrm{d}A$ is equal to:

$$
\overrightarrow{u} \cdot \overrightarrow{n} \; \mathrm{d}A \tag{2.2}
$$

where
- $\overrightarrow{u}$ is the velocity
- $\overrightarrow{n}$ is a unit vector point outwards and orthogonal to the surface of the control volume. 

The dot product corresponds to the projection of the velocity in the direction orthogonal to the surface, which is the only part of the velocity contributing to the outflow. The flow parallel to the surface will not contribute to the outflow. Also, not that we define outflow as positive, and correspondingly define inflow (where the velocity is directed into the control volume) as negative outflow. 

The mass outflow over the infinitesimal edge will be:

$$
\rho \overrightarrow{u} \cdot \overrightarrow{n} \; \mathrm{d}A \tag{2.3}
$$

and the net outflow of mass out of the total outer edge $CS$ of the control volume is equal to:

$$
\int\limits_{CS} \rho \; \overrightarrow{u} \cdot \overrightarrow{n} \; \mathrm{d}A \tag{2.4}
$$

Now, we know (recall Figure 2.3) that a net outflow of mass will lead to a decrease in total mass within the control volume. In other words, a positive mass flux (outflow) through the edges of the control volume has to be balanced by a negative change (decrease) of the total mass inside the control volume. Or, mathematically

$$
\underbrace{\frac{\partial}{\partial t} \int\limits_{CV} \; \rho \, \mathrm{d}V}_{\text{Change of total mass}} \; \; \;+ \underbrace{\int\limits_{CS} \; \rho \, \overrightarrow{u} \cdot \overrightarrow{n} \, \mathrm{d}A}_{\text{Flux of mass through edges}} = 0 \tag{2.5}
$$

Next to the mass, we might be interested in the flux of some other quantity $B$, e.g. momentum or some dissolved material. We can indicate the quantity per unit mass with $b$, such that

$$
B = \int\limits_V \; \rho b \, \mathrm{d}V \tag{2.6}
$$

To obtain the balance of $B$ we multiply the above mass balance (Eq. 2.5) with the quantity per unit mass $b$ to obtain

$$
\underbrace{\frac{\partial}{\partial t} \int_{CV} \; b\, \rho \, \mathrm{d}V}_{\text{Change of total mass}} \; \; \;+ \underbrace{\int_{CS} \; b \, \rho \, \overrightarrow{u} \cdot \overrightarrow{n} \, \mathrm{d}A}_{\text{Flux of mass through edges}} \;= \underbrace{\frac{\mathrm{d}B}{\mathrm{d}t}}_{\text{External flux}} \tag{2.7}
$$

The external flux term has been added to account for changes in the quantity $B$ within the constant mass system. Although the mass is constant, the quantity considered might change due to some external input, or e.g. a chemical reaction.

If we take $B$ to be momentum, i.e. $\overrightarrow{B} = m \, \overrightarrow{u}$, then $\overrightarrow{b} = \overrightarrow{u}$ and $\mathrm{d}B / \mathrm{d}t = m\, \mathrm{d}\overrightarrow{u} / \mathrm{d}t = m \, \overrightarrow{a} = \overrightarrow{F}$, where $\overrightarrow{F}$ is the resultant force acting on the control volume. The balance for momentum becomes:

$$
\frac{\partial}{\partial t} \int_{CV} \; \overrightarrow{u} \, \rho \, \mathrm{d}V + \int_{CS} \; \overrightarrow{u} \, \rho \, \overrightarrow{u} \cdot \overrightarrow{n} \, \mathrm{d}A = \overrightarrow{F} \tag{2.8} 
$$

>[!Note]
>We will discuss the mass and momentum balances in more detail in [[Reader GFM-Chapter 3-Conservation of mass and momentum|Chapter 3]]

The constant volume, system approach that we have adopted in this section works better for fluids than the constant mass approach from section [[#2.3 Constant mass, system approach|2.3]], because we no longer need to follow a finite parcel of fluid, but just need to book-keep all fluxes over the edges of the control volume. This approach, however, does not work if we are interested in how e.g. mass or momentum are distributed in the control volume; for that purpose, we need to adopt the constant volume, field approach. 

---
# 2.5 Constant volume, field approach
In this approach, we will no longer be satisfied just by knowing the bulk effects over the control volume. We want to describe what happens at each location within the control volume. Mathematically we move from an integral approach (over an entire system) to a differential approach (at infinitesimally small points). Looking at the bridge, in this approach, we will know for each fixed point how much mass is flowing part the point and whether it is increasing or decreasing in time. In terms of [[Newton's Second Law of Motion]], we will know how much momentum is passing each point, whether it is increasing or decreasing and the forces acting at each point. This is the approach we will use most in this course. The downside of this approach is that we do not know how points (infinitesimally small, and not finite as in the system approach) are moving through space. 

![[Pasted image 20250222154126.png]]

## 2.5.1 Mathematical Approach
In order to describe what is going on within the control volume, we will take equation 2.7 as a starting point:

$$
\underbrace{\frac{\partial}{\partial t} \int_{CV} \; b\, \rho \, \mathrm{d}V}_{\text{Change of total mass}} \; \; \;+ \underbrace{\int_{CS} \; b \, \rho \, \overrightarrow{u} \cdot \overrightarrow{n} \, \mathrm{d}A}_{\text{Flux of mass through edges}} \;= \underbrace{\frac{\mathrm{d}B}{\mathrm{d}t}}_{\text{External flux}} \tag{2.7}
$$

The integrand of the first term of the left-hand side contains the property $b$ over the control volume, which is what we are aiming for, but we want to have it out of the integral since we are not only interested in the bulk property of the volume, but at each location. In the second term on the left-hand side, we have an integral over the surface. Ideally, we would like to rewrite this to a volume integral, such that also this integrand will vary over the volume instead of the surface. This is indeed possible. 

To express the surface integral as a volume integral, we first work out the surface integral for an infinitesimally small element within our control volume, as illustrated below.

![[Pasted image 20250222154624.png]]

The arrows in Figure 2.8 indicate that the flow field is diverging inside the control volume. This leads to a net outflow out of the volume and thus a mass loss inside the volume. 

>[!Info]
>In fact, we can mathematically show that the volume integral of the divergence is equal to the outward fluxes integrated over the surface of the control volume. This relation is known as the Divergence theorem (or Gauss' theorem).

In fact, this relation between the flux over the surface of the control volume and the divergence of the same property within the volume applies to properties $B$ in general. Recall the meaning of divergence, i.e. that it represents the local loss of a certain quantity due to spatial gradients in it fluxes. The integral of the divergence over the volume will be the total loss of that quantity. This is equivalent to the net loss of that quantity over the edges of the control volume. We can express this as follows:

$$
\underbrace{\int\limits_{CS} \; b \, \rho \, \overrightarrow{u} \cdot \overrightarrow{n} \, \mathrm{d}A}_{\text{Net loss over edges}} \;\;\;= \underbrace{\int\limits_{CV} \; \overrightarrow{\nabla} \, \cdot (b \, \rho \, \overrightarrow{u})\,\mathrm{d}V}_{\text{Sum of local loss in volume}} \tag{2.9}
$$

Also for the total external fluxes, we can express them as the sum of the local fluxes in the volume:

$$
\frac{\mathrm{d}B}{\mathrm{d}t} = \int\limits_{CV} \; \frac{\mathrm{d}(\rho b)}{\mathrm{d}t}\,\mathrm{d}V \tag{2.10}
$$

We can substitute expressions 2.9 and 2.10 into equation 2.7 to obtain 

$$
\int\limits_{CV} \; \frac{\partial b \rho}{\partial t} \, \mathrm{d}V + \int\limits_{CV} \; \overrightarrow{\nabla} \, \cdot \, (b \, \rho \, \overrightarrow{u})\,\mathrm{d}V = \int\limits_{CV} \; \frac{\mathrm{d}\,\rho b}{\mathrm{d}t} \, \mathrm{d}V \tag{2.11}
$$


>[!Note]
>Note that we also brought the derivative into the integral sign. We can only do this because the integration limits, i.e. the control volume, do not change with the derivative variable, i.e. time

We can now consider an infinitesimally small control volume to obtain:

$$
\frac{\mathrm{d}\,\rho b}{\mathrm{d}t} = \frac{\partial \, b \rho}{\partial t} + \overrightarrow{\nabla} \cdot (b \rho \, \overrightarrow{u}) \tag{2.12}
$$

This equation is equivalent to 2.7, but it holds locally over the entire field, instead of holding only for the constant volume system as a whole. 

>[!Note]
>The constant volume, field approach is often used to measure a flow velocities in the lab or field


---
# 2.6 Constant mass, field approach
In this last approach, we will keep track of the motion of every infinitesimally small point and while doing so keep track of all fluxes, changes in time and external forces. This is the most detailed description.

Suppose there is someone standing on our bridge and smoking. The smoke would spread as the wind carries it. A spatial gradient in the smoke concentration $s$ develops. 

![[Pasted image 20250222161626.png]]

A person standing at a distance will experience a smoke concentration that is increasing over time. This local change is called the **local time derivative** and is denoted by $\partial s / \partial t$ (Figure 2.11). So we have both a gradient of $s$ in space and a gradient of $s$ in time.

![[Pasted image 20250222161814.png]]

Let us now think of someone cycling over the bridge with a velocity $\overrightarrow{u}_c$. The smoke concentration this cyclist is going to experience is affected both by the change of smoke concentration in time and by the change of smoke concentration in space. In fact, the faster the cyclist moves in the direction of the increasing concentration, the faster the experienced concentration by the cyclist will increase. (Figure 2.13)

![[Pasted image 20250222162050.png]]

The change in smoke concentration the cyclist is experiencing is denoted by $\mathrm{d}s / \mathrm{d}t$ and is called the **total derivative**. It is a combination of the spatial and temporal gradients:

$$
\frac{\mathrm{d}s}{\mathrm{d}t} = \frac{\partial s}{\partial t} + u_1^c \, \frac{\partial s}{\partial x_1} \tag{2.13}
$$

where
- $u_1^c$ is the $x$-component of the cyclist's velocity vector

The last case we want to consider will stretch our imagination. A mother has just given her child a bunch of balloons and the child has now started to float in the wind over the bridge and crosses the same smoking student (Figure 2.14). 

![[Pasted image 20250222162357.png]]

This child moves with the wind speed $\overrightarrow{u}$. The concentration the child experiences is denoted by $\mathrm{D}s / \mathrm{D}t$ and is called the **material derivative** or **substantial derivative**. 

$$
\frac{\mathrm{D}s}{\mathrm{D}t} = \frac{\partial s}{\partial t} + u_1 \frac{\partial s}{\partial x_1} \tag{2.14}
$$

Note that the material derivative in equation 2.14 is written for one spatial direction ($x_1$) only. This equation can easily be extended for more dimensions by adding $u_2 \frac{\partial s}{\partial x_2}$ and $u_3 \frac{\partial s}{\partial x_3}$., The total derivative in equation 2.13 can similarly be extended to more spatial dimensions.

