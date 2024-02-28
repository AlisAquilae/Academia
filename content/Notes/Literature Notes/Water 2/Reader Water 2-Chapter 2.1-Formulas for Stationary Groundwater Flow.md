---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Water 2]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 2024
Related Notes: 
Related Terminology: 
Related Courses: ["[[Water 2]]"]
---
### 2.1.1 Introduction
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
### 2.1.2 Centerfield Head Difference Between Parallel Ditches using Flow Layer Thickness $D$

During winter time the water table in a field surrounded by ditches has a convex shape (it bulges upward) due to the precipitation surplus. Because a water table that is too high can lead to crop damage, it is relevant for agriculture to be able to describe the shape of the water table. 

The following figure shows the cross-section of an agricultural field:
>[!Missing]
>Insert Fig. 3.2

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

>[!Missing]
>Insert Fig. 3.3

***Step 3. Formulating the Differential Equation***
For $q$ at distance $x$ from the water divide in the middle of the field it is found that: 

$$
q=Rx \tag{2.1} 
$$


Additionally, using the [[Dupuit Assumptions]], the [[Two-Dimensional Discharge]] can be calculated with: 

$$
q=Dv \tag{2.2}
$$


Substituting [[Darcy's Law]]: 

$$
v=-k \frac{\text{d}H}{\text{d}x} \tag{2.3} 
$$


results in: 

$$
q=-kD\frac{\text{d}H}{\text{d}x} \tag{2.4} 
$$


However, for describing the water table a formula for $H$ is needed, and not for $q$. This can be achieved by equating the equations 3.1 and 3.4: 

$$
Rx = -kD\frac{\text{d}H}{\text{d}x} \tag{2.5}
$$



***Step 4. Solving the Differential Equation***
To formulate $H$ as a function of $x$, the differential equation needs to be integrated. In order to do this we make sure that $H$ and $x$ are both on different sides of the equals sign by rewriting equation 3.5: 

$$
Rx\text{d}x = -kD\text{d}H \tag{2.6} 
$$


Solving this is achieved by integrating both sides of the equation, which results in: 

$$
\frac12 Rx^2 = -kDH + C \tag{2.7} 
$$


in which $C$ is a constant of integration, which we will solve in step 5 of the procedure

***Step 5. Defining and Substituting the Boundary Conditions***
The hydraulic head can be defined relative to any reference point consistently chosen within the same case study. Here, we define $H$ relative to the water level in the ditch, which means the boundary condition is: 

$$
\langle x=\frac12L, \, H=0 \rangle \tag{2.8} 
$$


Another boundary condition is $\langle x=-\frac12L, \, H=0 \rangle$ 

Equation 3.8 is a boundary condition defining the flow system. Substitution of these data in 3.7 results in a state at the boundary: 

$$
C=\frac18 RL^2 \tag{2.9} 
$$


This solution we substitute in 3.7, after which we write $H$ explicitly. The result is: 

$$
H=\frac{R(L^2 - 4x^2)}{8kD} \tag{2.10} 
$$


This equation described the height of the water table $H$ relative to the water level in the ditch as a function of the distance $x$ to the middle of the field and two parameters which are independent of location: the [[Conductance|Transmissivity]] $kD$ and a stationary groundwater recharge rate $R$.

Farmers are particularly concerned with keeping the maximum [[Centerfield Head Difference]] ($m_0$), in the middle between the ditches, sufficiently small. In order to do that the ditches need to be separated by a certain distance $L$. Substituting $\langle x=0, \, H=m_0 \rangle$ in 3.10 gives: 

$$
L^2 = \frac{8kDm_0}{R} \tag{2.11} 
$$


This formula, together with more complex ones (see the next section), have had a great influence on shaping large parts of the Netherlands. Equation 3.11 can be used to calculate what the distance between 2 ditches should be at a certain water level in order to keep the centerfield water table low enough to prevent saturation of the plant root zone. 

>[!Note]
>When applying 3.11 the question arises which value $R$ should have. To that end, when determining the optimal distance between ditches so-called drainage standards are used. These standards are reported in the Cultuurtechnisch Vademecum, a manual for water managers. 

In [[Water 1]] we stated that there is a relation between the spatial and the temporal scale. It should be clear that the water table between stream separated from each other by a distance of several kilometers reacts less quickly to the pattern of precipitation and evaporation compared to the water table under a small field. To describe the maximum [[Centerfield Head Difference]] between streams we thus need to apply another, lower, value for $R$ than for a field. The water table in very large groundwater systems reflects the precipitation surplus of a period of many years. 

Stationary formulas are often used to describe the average water table levels. In certain conditions this is valid, i.e. when the groundwater system is "linear", meaning that the output is proportional to the input. For example, 3.11 is linear: when $R$ doubles, $M_0$ is twice as large as well. A very practical feature of linear systems is that the outcomes of several formulas can be added.

---
### 2.1.3 Centerfield Head Differences Between Parallel Ditches Without Using the Flow Layer Thickness
We examine the same flow problem as in the previous section, only now the [[Centerfield Head Difference|CFHD]] with respect to the depth of the impermeable layer below the drain level is so large that it is no longer justified to use the flow layer thickness $D$ in our calculations. Also in this case we can derive the shape of the water table.

***Step 1. Limiting the Flow System***
Same as in the previous section

***Step 2. Simplifying the Flow Pattern***
Same as in the previous section, only simplification 6 no longer applies. 

***Step 3. Formulating the Differential Equation***
Equation 3.1 still holds for $q$. Additionally, $q$ can also be calculated as the product of the [[Flux Density]] (also called Specific Discharge or sometimes Apparent Velocity), and the flow layer thickness. However, in this case the flow layer thickness is not a constant value like in the previous section, because it significantly decreases in the direction of $x$. Hence, we define $H$ here with respect to the impermeable layer (instead of the water level in the ditch), in order for $H$ to represent the depth of the impermeable layer below drain level.

>[!Missing]
>Insert Fig. 3.5

This way we arrive at: 

$$
q=-kH\frac{\text{d}H}{\text{d}x} \tag{2.12} 
$$


Equating 3.1 and 3.12 yields: 

$$
Rx =-kH\frac{\text{d}H}{\text{d}x} \tag{2.13} 
$$



***Step 4. Solving the differential equation***
From 3.13 follows: 

$$
Rx\text{d}x = -kH\text{d}H \tag{2.14} 
$$


Integrating once gives: 

$$
\frac12 Rx^2 =- \frac12 kH^2 + C \tag{2.15} 
$$



***Step 5. Defining and Substituting the Boundary Conditions***
When the depth (anmd thus the [[Hydraulic Head]]) of the ditch is unknown, but we still want to calculate the constant of integration, we use a symbol instead of a number. Let us call the hydraulic head at the water level of the ditch $H_0$. One of the boundary conditions is then: 

$$
\langle x=\frac12 L, \, H=H_0 \rangle \tag{2.16}
$$


Substituting these data in 3.15 results in: 

$$
C=\frac18 RL^2 + \frac12 kH_0^2 \tag{2.17} 
$$


Again substituting 3.17 in 3.15 and writing $H$ explicitly gives: 

$$
H= \sqrt{H_0^2 + \frac RK \Bigl(\frac14 L^2 - x^2 \Bigr) } \tag{2.18} 
$$


In the middle between the ditches $\langle x=0, \, H=H_0 + m_0 \rangle$ applies as a boundary condition. Substituting in 3.18 leads to: 

$$
L^2=\frac{8kH_0m_0 + 4m_0^2}{R} \tag{2.19} 
$$


This formula is known as the [[Hooghoudt Formula]] and is widely used when determining the desired distance between ditches. 

>[!Note]
>Equation 3.11 is a simplification of 3.19, i.e. in many instances $8kH_0m_0 \gg 4km_0^2$ (which means the latter term can be neglected) and $H_0 \approx D$ which means 3.19 becomes 3.11

---
### 2.1.4 The Shape of a Dome-Shaped Raised Bog
Raised bogs are bogs that fully rely on precipitation for their water supply. Therefore they only occur in a climate with a certain precipitation surplus. Just as fens, raised bogs need to be permanently wet in order to prevent the peat from oxidising. 

>[!Info]
>A long time ago, a large part of the Netherlands consisted of bogs. Since then a large part has been washed away by the sea or has been covered with clay. The remainder has largely been reclaimed for agriculture and has been mined as a fuel, which is why today only about 8000 ha of raised bog remains in the Netherlands, most of which is degenerated

Raised bogs are large dome-shaped bodies of peat which in the middle are raised many meters above their surroundings. 

>[!Info]
>Engelsmann (1967) compared historical data on 64 raised bogs in north-western Germany and found an average diameter of 6 km and a [[Centerfield Head Difference|CFHD]] of 5 m. 

>[!Info]
>In a high profile article in Nature, Ingram (1982) provided the first hydrological explanation for the shape of a "living" raised bog. According to Ingram the shape id dictated by the amount of water that has to be discharged. This amount increases towards the edge of the raised bog and thus, following [[Darcy's Law]], the [[Hydraulic Head]] gradient needs to increase towards the edge as well. The shape of the land surface us explained by the fact that it is similar to that of the water table. 

Most of the precipitation surplus that feeds living raised bog is discharged close to the land surface through the top soil layer. This layer consists of peat mosses and dwarf shrubs (like heather), often in a pattern of hummocks and hollows. A small part of the water percolates to an aquifer below the bog. [[Percolation]] at the lower boundary is limited by the high resistance of a waxy layer of illuviated humus on the border between the bog and the sandy subsurface. What remains of the water flows horizontally through the peat body from the centre towards the edges. This horizontal component is assigned the symbol $u$ and defined as the amount of water per unit area that flows through the bog per unit of time (unit: m d$^{-1}$). 

>[!Example]
>For example: $u=0.0002$ m d$^{-1}$ if 20% of the precipitation surplus of 1 mm d$^{-1}$ flows through the bog

Now, we will hydrologically derive the shape of the raised bog and subsequently calculate how large $u$ should be in order to explain that shape. 

>[!Missing]
>Insert Fig. 3.8

***Step 1. Limiting the Flow System***
There is a water divide in the middle of the bog where $r = 0$ and at the edge of the bog at $r_{\text{max}}$ 

***Step 2. Simplifying the Flow Pattern***
1. The layer of peat is homogeneous and horizontally [[Isotropy|isotropic]]
2. Flow is [[Stationary Flow|stationary]]
3. $u$ is spatially constant (no variation with distance towards the centre)
4. The raised bog is perfectly circular
5. The water table ends exactly at the edge of the raised bog
6. The [[Dupuit Assumptions]] can be applied

***Step 3. Formulating the Differential Equation***
A volume flow rate $Q$ flows from the centre through a circular raised bog with radius $r$, which is equal to the product of the area of that circle and $u$: 

$$
Q= \pi r^2 u \tag{2.20} 
$$


When $H$ is defined with respect to the bottom of the bog, we can place an imaginary cylinder in the bog at distance $r$ with an area size of $2 \pi r H$. Multiplying this area with the apparent velocity in [[Darcy's Law]] gives a second expression for the volume flow rate: 

$$
Q=2 \pi rHk \frac{\text{d}H}{\text{d}r} \tag{2.21} $$


Setting both equations equal yields after some rewriting: 

$$
ur\text{d}r = -2kH\text{d}H \tag{2.22} 
$$


***Step 4. Solving the Differential Equation***
Integrating once results in: 

$$
\frac12 ur^2 = -kH^2 + C \tag{2.23} 
$$


***Step 5. Defining and Substituting the Boundary Conditions***
On the edge of the raised bog the following applies: 

$$
\langle r = r_{\text{max}}, \, H=0 \rangle \tag{2.24} 
$$


Substituting these conditions in 3.23 and solving for $C$: 

$$
C= \frac12 ur_{\text{max}}^2  \tag{2.25}
$$


Substituting $C$ in 3.23 and writing $H$ explicitly leads to: 

$$
H=\sqrt{\frac{u}{2k}(r_{\text{max}}^2 - r^2)} \tag{2.26} 
$$


Ingram could describe the shape of raised bogs with equation 3.26 fairly well. He derived the amount of water flowing through the bog ($u$), necessary to know the shape of the bog, from 3.26, the average values from Engelmann's research ($r_{\text{max}}=3$ km, $m_0 = 5$ m), and an assumed hydraulic (saturated) [[Permeability|Conductivity]] of $0,5$ m d$^{-1}$. 

In the centre of the raised bog, we find $\langle r = 0, \, H=m_0 \rangle$. Substituting in 3.26, writing $u$ explicitly and substituting the values mentioned previously results in: 

$$
\begin{aligned}
u &=\frac{2km_0^2}{r_{\text{max}}} \\ &= \frac{2 \times 0.5 \times 5^2}{3000^2} \\ &= 0.0000028 \, \text{m d}^{-1} \\ &\approx 1 \, \text{mm y}^{-1} 
\end{aligned} 
$$

This result shows that only 1 mm of recharge per year would be needed to explain a bog with a height of 5 m and a dismater of 6000 m! A remarkable result. However, do not forget that there is still a large amount of water flowing through the edges of a bog of such dimensions)

>[!Note]
>There is much criticism on this theory of Ingram concerning the shape of a raised bog, especially on some of his assumptions (Step 2). Nowadays, other hydrological theories exist that explain the shape of a raised bog. Nonetheless, the essence of Ingram's theory remains: the shape of a raised bog reflects the discharge of water

---
### 2.1.5 Very Short Introduction to Numerical Methods
In the previous sections we have described the flow of water in groundwater systems based on analytical solutions. We have used analysis to describe how the groundwater system reacts to different conditions. Such systems are called **closed systems**. 

However, this only works for simple systems. When the flow pattern becomes more complex, it cannot be described mathematically with an analytical solution. In such cases we can use numerical methods. Similar to the analytical methods described earlier, there is generally a range of numerical methods that can be used to solve the same problem. 

In this example the differentiation method will be discussed, which is widely applicable in hydrology. We will apply this method to the simplified [[Hooghoudt Formula]] dealt with in section 3.1.2. 

First of all, though, we will present an alternative analytical derivation of this formula, which serves as an analogy for the numerical methods discussed afterwards

Essentially, the only change in the derivation given in section 3.1.2 is Step 3, the formulation of the differential equation. For a small flow element of width $\text{d}x$ we can work out a water balance. 

>[!Missing]
>Insert Fig,. 3.9

Because no water appears or disappears (i.e. the [[Continuity Principle]]) we have: 

$$
q + R \text{d}x = q + \text{d}q \tag{2.27} 
$$


Which leads to: 

$$
\frac{\text{d}q}{\text{d}x}=R \tag{2.28} 
$$


Additionally, according to [[Darcy's Law]], equation 3.4 applies. Differentiating once results in: 

$$
\frac{\text{d}q}{\text{d}x}= -kD \frac{\text{d}^2 H}{\text{d}x^2} \tag{2.29} 
$$


The differential equation wanted in step 3 is obtained by setting 3.28 and 3.29 equal (elimination of $q$): 

$$
\frac{\text{d}^2 H}{\text{d}x^2} = - \frac{R}{kD} \tag{2.30}
$$


We will assume (without proving it) that integrating 3.30 twice results in the exact same solution as equation 3.10. 

When using the differentiation method we partition the model area in elements, which are numbered from 1 to $N$ (see the following figure)

>[!Missing]
>Insert Fig, 3.10

The distance between the elements is $\Delta x$. In the middle of each element there is a "node" which is assumed to be representative for the whole element. In the following figure, one element is highlighted. 

>[!Note]
>Note that this figure is similar to the figure on the water balance earlier

We approximate the first derivative of $H$ in node $i$ by the numerical difference between the [[Hydraulic Head|Hydraulic Heads]] of adjacent nodes divided by the distance: 

$$
\frac{\text{d}H_i}{\text{d}x} \approx \frac{H_{i+1} - H_{i-1}}{2 \Delta x} \tag{2.31}
$$


The second derivative of $H$ can be approximated similarly, i.e. as the derivative at point $i + \frac12$ minus the derivative at point $i - \frac12$ divided by the distance between those points, i.e.: 

$$
\begin{aligned} \frac{\text{d}^2 H_i}{\text{d}x^2} &\approx \frac{\frac{H_{i+1}-H_i}{\Delta x}- \frac{H_i - H_{i - 1}}{\Delta x}}{\Delta x} \\ &\approx \frac{H_{i+1}-2H_i + H_{i-1}}{\Delta x^2}
\end{aligned} \tag{2.32}
$$


When we use this approximation to substitute the left-hand term of 3.30, we get, after rearranging several terms, the following numerical difference equation: 

$$
H_i = \frac{R\Delta x^2}{2kD}+ \frac{H_{i+1}+H_{i-1}}{2} \tag{2.33} 
$$


The hydraulic head in each node is now expressed in terms of the hydraulic heads in neighbouring nodes. Because initially only the hydraulic heads of the nodes at the edge are known ($i =1$ and $i = N$), 3.33 does not directly provide a solution of $H$ in the other nodes. However, the solution can be determined iteratively:
1. Make an initial estimation for all values of $H_i$
2. Calculate the new value for $H$ at each node using 3.33
3. Repeat the second step until the values for $H$ remain constant

This procedure is extremely simple. However, it needs to be repeated many times before a stable solution is reached and thus it is best to have a computer do it. The numerical example in this section is characteristic of the way in which hydrological models operate

---
### 2.1.6 Conclusion
An hydrologist conceptualised reality in order to describe it with formulas. We should always test  a formula against reality using measurement data. A hydrologist should also be able to judge whether a specific flow problem fits the concepts used to derive the formula - do the assumptions hold?

In step 2 of the procedure to derive equations for groundwater flow the [[Continuity Principle]] was combined with [[Darcy's Law]]. So the principle to derive stationary solutions is: multiplication of the [[Flux Density|Apparent Velocity]] according to Darcy ($v=-k\text{d}H/Dx$) with an area (e.g. $D$, $H$ or $A$ in sections 4.2 and 4.3 respectively); calculation of the amount of water flowing through that area by looking at the water balance ([[Continuity Principle]]); equation of both expressions for the volume flow rate, and solving the resulting differential equation

The differential equations that we have presented could be solved. However, in more complex cases a hydrologist conceptualised the situation, discusses the possibility of a solution and when this is not possible, switches to modelling
