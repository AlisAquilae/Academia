---
fileClass: Base, Summaries
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 4. Formulas for Stationary Groundwater Flow
## 4.1 Introduction
In hydrology there are many formulas for the behaviour of groundwater systems. These formulas can be used to answer questions such as "how far apart should ditches be to prevent a field from becoming too wet?", "how wide should a buffer zone around a nature reserve be to prevent it from drying out?" Furthermore, these formulas serve a scientific purpose as they give insight into groundwater systems.

In this section we only present those formulas for stationary groundwater flow which describe the [[Hydraulic Head]] as a function of distance, thus $H=f(x)$.

When deriving formulas, generally, the following steps can be distinguished
1. Limiting the open flow system by defining boundary conditions
2. Simplifying the actual water flow
3. Formulating a differential equation with $H$ as a function of $x$ by combining
   -  The continuity principle
   -  [[Darcy's Law]]
4. Solving the differential equation
5. Applying the boundary conditions

This procedure will be explained in the following sections with some examples

---
## 4.2 Centerfield Head Difference Between Parallel Ditches using Flow Layer Thickness
During winter time the water table in a field surrounded by ditches has a convex shape (it bulges upward) due to the precipitation surplus. Because a water table that is too high can lead to crop damage, it is relevant for agriculture to be able to describe the shape of the water table. 

The following figure shows the cross-section of an agricultural field:

![[20240228_140227.jpg]]

The derivation of the shape of the water table is done in the five steps specified earlier

***Step 1: Limiting the Flow System***
To describe the **flow pattern** we first need to determine what to include in the flow system and what not. This is done by defining boundary conditions. These boundary conditions are defined in those places where there is a water divide. 

>[!Important]
>In case water flows to 2 parallel ditches there are two water divides: one exactly in the middle of the field and one in the ditches. 

Furthermore, there is an impermeable layer below the field. In this case the flow pattern is limited to one half of the field. 

***Step 2. Simplifying the Flow Patterns***
1. The subsoil consists of a homogeneous and horizontally [[Isotropy|isotropic]] Aquifer on top of an "impermeable layer"
2. We assume the water flow is stationary: all groundwater excess flows in its entirety to the ditches, hence there is no change of storage of groundwater
3. The ditches run completely parallel to each other at a distance $L$, so that we can continue our calculations with the [[Two-Dimensional Discharge]] $q$
4. The water table ends at the water level in the ditch 
   >[!Info]
   >in reality the water level always ends somewhat above the water level in the ditch and a seepage zone exists between this point and the ditch water level; in this seepage zone water flows in a "film" across the surface of the ditch wall
5. The wall of the ditch is completely vertical
6. In comparison to the thickness of water flow layer the [[Centerfield Head Difference]] (CFHD) of the water table is so small that it is safe to assume an average flow layer thickness $D$ in further calculations
7. $D$ is so small in comparison to $L$ that the [[Dupuit Assumptions]] can be applied
8. The ditches are dug to the depth of the impermeable layer, which means the effect of radial flow towards the ditches can be neglected. This simplification is justified when at least one of the following assumptions is met:
   - $L \gg D$
   - The distance between the bottom of the "impermeable" layer is small compared to $D$
   - The width of the ditch is larger than or equal to $D$

The following figure shows the simplified flow pattern:

![[20240228_142212.jpg]]

***Step 3. Formulating the Differential Equation***
For $q$ at distance $x$ from the water divide in the middle of the field it is found that: 

$$
q=Rx \tag{4.1} 
$$


Additionally, using the [[Dupuit Assumptions]], the [[Two-Dimensional Discharge]] can be calculated with: 

$$
q=Dv \tag{4.2}
$$


Substituting [[Darcy's Law]]: 

$$
v=-k \frac{\text{d}H}{\text{d}x} \tag{4.3} 
$$


results in: 

$$
q=-kD\frac{\text{d}H}{\text{d}x} \tag{4.4} 
$$


However, for describing the water table a formula for $H$ is needed, and not for $q$. This can be achieved by equating the equations 4.1 and 4.4: 

$$
Rx = -kD\frac{\text{d}H}{\text{d}x} \tag{4.5}
$$



***Step 4. Solving the Differential Equation***
To formulate $H$ as a function of $x$, the differential equation needs to be integrated. In order to do this we make sure that $H$ and $x$ are both on different sides of the equals sign by rewriting equation 4.5: 

$$
Rx\text{d}x = -kD\text{d}H \tag{4.6} 
$$


Solving this is achieved by integrating both sides of the equation, which results in: 

$$
\frac12 Rx^2 = -kDH + C \tag{4.7} 
$$


in which $C$ is a constant of integration, which we will solve in step 5 of the procedure

***Step 5. Defining and Substituting the Boundary Conditions***
The hydraulic head can be defined relative to any reference point consistently chosen within the same case study. Here, we define $H$ relative to the water level in the ditch, which means the boundary condition is: 

$$
\langle x=\frac12L, \, H=0 \rangle \tag{4.8} 
$$


Another boundary condition is $\langle x=-\frac12L, \, H=0 \rangle$ 

Equation 4.8 is a boundary condition defining the flow system. Substitution of these data in 4.7 results in a state at the boundary: 

$$
C=\frac18 RL^2 \tag{4.9} 
$$


This solution we substitute in 4.7, after which we write $H$ explicitly. The result is: 

$$
H=\frac{R(L^2 - 4x^2)}{8kD} \tag{4.10} 
$$


This equation described the height of the water table $H$ relative to the water level in the ditch as a function of the distance $x$ to the middle of the field and two parameters which are independent of location: the [[Conductance|Transmissivity]] $kD$ and a stationary groundwater recharge rate $R$.

Farmers are particularly concerned with keeping the maximum [[Centerfield Head Difference]] ($m_0$), in the middle between the ditches, sufficiently small. In order to do that the ditches need to be separated by a certain distance $L$. Substituting $\langle x=0, \, H=m_0 \rangle$ in 4.10 gives: 

$$
L^2 = \frac{8kDm_0}{R} \tag{4.11} 
$$


This formula, together with more complex ones (see the next section), have had a great influence on shaping large parts of the Netherlands. Equation 4.11 can be used to calculate what the distance between 2 ditches should be at a certain water level in order to keep the centerfield water table low enough to prevent saturation of the plant root zone. 

>[!Note]
>When applying 4.11 the question arises which value $R$ should have. To that end, when determining the optimal distance between ditches so-called drainage standards are used. These standards are reported in the Cultuurtechnisch Vademecum, a manual for water managers. 

In [[Water 1]] we stated that there is a relation between the spatial and the temporal scale. It should be clear that the water table between stream separated from each other by a distance of several kilometers reacts less quickly to the pattern of precipitation and evaporation compared to the water table under a small field. To describe the maximum [[Centerfield Head Difference]] between streams we thus need to apply another, lower, value for $R$ than for a field. The water table in very large groundwater systems reflects the precipitation surplus of a period of many years. 

Stationary formulas are often used to describe the average water table levels. In certain conditions this is valid, i.e. when the groundwater system is "linear", meaning that the output is proportional to the input. For example, 4.11 is linear: when $R$ doubles, $M_0$ is twice as large as well. A very practical feature of linear systems is that the outcomes of several formulas can be added.
