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
# 1.1 Introduction
Water plays a vital role in both natural processes and engineered systems, making it a key focus of study in physics. Just as physics is divided into statics and dynamics, the study of water is similarly split into hydrostatics (the behaviour of water at rest) and hydrodynamics (the behaviour of water in motion). Unlike much of physics, which often deals with solid objects like planets or apples, the study of fluids - encompassing liquids and gasses - introduces unique properties and behaviours.

---
# 1.2 Properties of Water
In this section, we will explore the fundamental physical properties of water, such as mass, weight, density and viscosity. A solid understanding of these concepts is essential for analysing and predicting water's behaviour in both natural systems and engineered structures. 

**Mass** refers to the quantity of matter in an object, and it is one of the most basic properties in physics. Like all substances, water has mass, and in the International System of Units (SI), mass is measured in kilograms (kg). 

>[!Example]
>One cubic meter of water has a mass of approximately 1000 kg. For comparison, a typical car has a mass of around 1000 kg, and an elephant weighs about 6000 kg


**Weight**, in contrast, is the gravitational force that the earth exerts on an object. It is calculated using the following formula:

$$
W = mg \tag{1.1}
$$

where
- $W$ is the weight (in Newtons, N)
- $m$ is the mass (in kilograms, kg)
- $g$ is the gravitational acceleration (9.81 m/'s$^2$)

>[!Example]
>The weight of 1 m$^3$ of water is therefore (mass = 1000 kg):
>
>$$
>W = 1000 \times 9.81 = 9810 \text{ N}
>$$


**Density** ($\rho$) is defined as the mass of substance per unit volume. For water, density varies with temperature, but at 4 degree Celcius (its densest point), freshwater has a density of approximately 1000 kg m$^{-3}$. Saltwater, on the other hand, has a slightly higher density, up to 1030 kg m$^{-3}$. In this course, we will focus on freshwater, assuming a density of $\rho = 1000$ kg m$^{-3}$ for simplicity.

The formula for density is

$$
\rho = \frac{m}{V} \tag{1.2}
$$

where
- $\rho$ is density
- $m$ is mass
- $V$ is volume

>[!Info]
>One of water's unique properties is that its maximum density occurs at 4 degree Celcius, unlike most substances, which are densest in their solid state. This explains why ice floats on liquid water, as its solid form is less dense. 


**Viscosity** is a measure of a fluid's resistance to flow, reflecting how much it resists deformation when subjected to an external force. In simple terms, it represents the fluid's "thickness" or "stickiness". Water has a relatively low dynamic viscosity, making it easy to move through or stir. Higher values indicate a "thicker" fluid

>[!Info]
>The dynamic viscosity $\mu$ of water at room temperature is
>
>$$
>\mu \approx 1.0 \cdot 10^{-3} \; \text{ kg / ms}
>$$


An ideal fluid, by contrast, is incompressible and has no viscosity, but in real-world applications, viscosity plays a crucial role in understanding the friction and resistance experienced during flow.

---
# 1.3 Hydrostatic Pressure
[[Hydrostatic Pressure]] refers to the pressure exerted by a fluid due to its weight when at rest. In standing water, pressure increases with depth due to the weight of the water above exerting a downward force.

The fundamental equation for hydrostatic pressure is

$$
P = p \cdot g \cdot h \tag{1.3}
$$

where
- $P$ is the pressure at depth (Pa)
- $\rho$ is the density of water
- $g$ is the gravitational acceleration
- $h$ is the depth below the water surface

Liquids are largely incompressible, meaning their density remains fairly constant despite changes in pressure. This makes hydrostatic liquids predictable and straightforward to calculate. 

However, the total pressure exerted at a given depth in a fluid is the sum of the hydrostatic pressure and the atmospheric pressure acting on the surface of the fluid. 

$$
P_{\text{total}} = P{_{\text{hydrostatic}}} + P_{\text{atmospheric}} \tag{1.4}
$$

The atmospheric pressure is the pressure exerted by the weight of the atmosphere above the fluid. At sea level, atmospheric pressure is approximately 101,325 Pa or 101.3 kPa

>[!Example]
>At 10 meters below the surface of the water, the hydrostatic pressure is:
>
>$$
>P_{\text{hydrostatic}} = 1000 \cdot 9.81 \cdot 10 = 98.1 \text{ kPa}
>$$
>
>The total pressure at this depth is
>
>$$
>P_{\text{total}} = 98.1 + 101.3 = 199.4 \text{ kPa}
>$$


In practice, we often only calculate the hydrostatic pressure, assuming that atmospheric pressure remains constant if we stay at the same altitude.

## 1.3.1 Hydrostatic Paradox
The hydrostatic paradox is a counter-intuitive concept in fluid mechanics that highlights a surprising property of fluids regarding pressure and force. It states that the pressure at a given depth in a fluid depends solely on the height of the fluid column and not on the shape of volume of the container. In other words, containers with different shapes but the same base area and the same height of liquid will exert the same pressure on the base, even if their total volume of liquid differs significantly.

Intuition might suggest that a container holding a larger volume of fluid should exert a greater force on its base. In reality, since pressure depends only on the height of the fluid column, containers with more fluid (but the same fluid height and base area) do not exert more force on the base. 

This apparent contradiction is resolved when we consider the following:
- In a narrow container, the sides of the container support much of the fluid's weight
- In a wide container, the weight of the additional fluid is distributed more horizontally
- In a flaring container, the walls support some of the fluid weight, relieving the base of additional force. 

Although this is referred to as the **hydroststic paradox**, it is not a true paradox. The difference between solids and fluids helps clarify the situation: solids do not change their shape under p[re]