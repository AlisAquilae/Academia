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

Although this is referred to as the **hydroststic paradox**, it is not a true paradox. The difference between solids and fluids helps clarify the situation: solids do not change their shape under pressure, while fluids are deformable under pressure. 

*Simon Stevin*, a renowned Dutch scientist (1548 - 1620) explained this phenomenon intuitively. He argued that if a pressure difference existed between two differently sized reservoirs, the fluid would start flowing. However, since hydrostatics assumed the fluid to be at rest (non-flowing), pressures must be equal at depths. This reasoning also leads to what is known as the law of communicating vessels: a difference in fluid levels between two connected parts would generate pressure differences, which is impossible in a standing fluid./ 

Stevin's argument can be applied in all directions, proving that pressure in a fluid is the same in every direction. This principle is also known as [[Pascal's Law]]. Pascal's law is reflected in the equation for hydrostatic pressure (Eq. 1.3), which gives the magnitude of pressure without specifying any direction. Thus, pressure is not a vector but a scalar quantity

## 1.3.2 Applications of hydrostatic pressure
Hydrostatic pressure plays an essential role in numerous fields, including:
- Engineering: in civil and mechanical engineering, hydrostatic pressure must be considered when designing structured that interact with fluids, such as dams, bridges and pipelines
- Medicine: In the human body, blood pressure behaves like hydrostatic pressure, where the pressure exerted by blood in arteries depends on gravity and the position of the body
- Meteorology: Atmospheric pressure, a form of hydrostatic pressure in gases, helps explain weather patterns, storm systems, and altitude-based variations in climate
- Oceanography: In the study of the ocean, hydrostatic pressure helps explain the distribution of marine life, the structure of ocean currents, and the behavious of submersible vehicles
- Measuring pressure in flowing water: In this chapter, we treat hydrostatic pressure (i.e. no-flow conditions), but it also has applications in cases of flowing water. 

---
# 1.4 Hydrostatic forces
From the previous sections, we know how to calculate pressure. Pressure itself is *not* a force (it's a force divided by an area). However, on every object below the water surface, a force is exerted caused by the pressure within the water. This chapter discusses how to calculate this pressure force for some specific objects, which can be used for bridge pillars, boats, sand grains and valves. Here, these objects will be generalised to surfaces

[[Hydrostatic Force]] is defined as the total force exerted by a stationary fluid on a surface in contact with the fluid. This force arises from the hydrostatic pressure acting over an area of the surface. Since pressure increases with depth, the hydrostatic force on a surace varies with its orientation and depth within the fluid.

The hydrostatic force $F$ acting on a surface submerged in a fluid can be expressed as

$$
F = P \times A \tag{1.6}
$$

Replacing $P$ with our formula found in Eq. 1.2, we reach

$$
\begin{aligned}
F &= P \cdot A \\
&= \rho \cdot g \cdot h \cdot A
\end{aligned} \tag{1.7}
$$

where
- $F$ is the total force of the base in Newtons
- $P$ is the pressure at depth in pascals
- $A$ is the area of the base (in square meters)
- $\rho$ is the density of the fluid
- $g$ is the gravitational acceleration
- $h$ is the height of the fluid column

Even though container $C$ might hold a much larger volume of water than containers $A$ or $B$, the pressure at the bottom depends only on the height of the water column. Therefore, the force on the base will be the same for all three containers, assuming they have the same base area and fluid height.

Knowing the pressure gives only the magnitude of the force perpendicular to a surface per unit area of the surface. 

## 1.4.1 Pressure forces on flat vertical rectangular surfaces
In this section we will show how to calculate the total pressure force on a vertical rectangular surface. Figure 1.7 illustrates this problem and we will use the notations of this figure. The direction orthogonal to the surface is horizontal, and so is the direction of the pressure force. It is therefore sufficient to calculate the magnitude of the pressure force. 

>[!Missing]
>Insert Figure 1.7


Such a surface can be thought of as an aggregate of a lot of small strips ($N$ in the illustration). The total pressure force is the sum of the total pressure forces on all of these strips.

Consider one of these strips and denote by $z_i$ its depth below the water surface. As the vertical height of this strip is rather small ($D/N$ with $N$ being large) the pressure on this strip is everywhere very close to

$$
P_i = \rho g z_i \tag{1.8}
$$

As this pressure does not vary much, one can approximate the pressure force on this strip:

$$
\begin{aligned}
F_i &= A_i P_i \\
&= L \, \frac{D}{N} \rho g z_i
\end{aligned} \tag{1.9}
$$

The total pressure force is then given by the sum of the forces on all strips:

$$
F_{\text{tot}} = \sum\limits_i F_i = L \, \frac{D}{N} \rho g \sum\limits_i z_i \tag{1.10}
$$

$\frac{1}{N} \sum_i z_i$ is the mean depth $\overline{z}$ of the surface below the water surface, which can be expressed (using the notations of Figure 1.7) as

$$
\overline{z} = z_T + \frac{D}{2} \tag{1.11}
$$

The pressure at this mean depth is given by

$$
\begin{aligned}
\overline{P} &= \rho g \overline{z} \\
&= \rho g \left(z_T + \frac{D}{2} \right)
\end{aligned} \tag{1.12}
$$

Combining this leads to

$$
\begin{aligned}
F_{\text{tot}} &= A \overline{P} \\
&= L D \rho g \left( z_T + \frac{D}{2} \right)
\end{aligned} \tag{1.13}
$$


>[!Example]
>A square surface with sides of 1.5 m is located 1 m below the water surface. Calculate the total pressure force
>
>$$
>\begin{aligned}
>A &= (1.5)^2 = 2.25 \, \text{m}^2 \\
>\overline{P} &= \rho g z\\
>&= 1000 \times 9.81 \times (1+0.75) \\
>&= 17168 \, \text{N m}^{-2} \\
>F &= A \times \overline{P} \\
>&= 2.25 \times 17168 \\
>&= 38629 \, \text{N} \\
>&= 3.9 \times 10^4 \, \text{N}
>\end{aligned}
>$$


## 1.4.2 Pressure forces on general flat vertical surfaces
Equation 1.13 above used the pressure calculated in the middle as an average for the whole surface. When the surface in the vertical is not symmetrical, the choice of the middle as average is no longer correct. The equation of the previous section can however be generalised for all vertical surfaces into

$$
\begin{aligned}
\overrightarrow{F_{\text{tot}}} &= A \overline{P} \\
&= L D \rho g (z_T + y_G)
\end{aligned} \tag{1.14}
$$

In this equation:
- $z_T$ depends only on the position of the top of the surface (not on its shape)
- $y_G$ depends only on the geometry of the surface (not on its position in the water): at this depth below the top of the surface, the mean pressure on the surface can be found

For trapezoidal surfaces (see for notations Figure 1.8) this depth is given by

$$
y_G = \frac{D}{2} \left(1 + \frac{1}{3} \frac{L_B - L_T}{L_B + L_T} \right) \tag{1.15}
$$

There are three cases
- When the bottom is wider than the top, the average depth should be more to the bottom
- When the top is as wide as the bottom, which is the rectangular case of the previous section
- When the top is wider than the bottom, the average depth should be more to the top

For each geometrical shape the calculation of $y_G$ is different (Sec. 1.4.3)

## 1.4.3 Hydrostatic forces on rectangular vertical surfaces
For a vertical surface, such as the wall of a dam, the pressure varies with depth, resulting in a non-uniform distribution of force. The pressure at the top of the surface is lower than that at the bottom.

To calculate the total hydrostatic force on a vertical surface, we use the concept of average pressure. The average pressure on a submerged wall can be calculated by

$$
P_{\text{avg}} = \frac{P_{\text{top}} + P_{\text{bottom}}}{2} \tag{1.16}
$$

For a wall where the top of the wall is at the surface of the water, the pressure at the top of the surface is defined as $P_{\text{top}} = 0$. which makes the calculation easier.

>[!Example]
>Suppose a vertical dam wall has a height of 10 meters and a width of 20 meters. The fluid in the reservoir is water, and the top of the wall is at the surface of the water.
>
>The pressure at the bottom of the wall is
>
>$$
>\begin{aligned}
>P_{\text{bottom}} &= \rho g h_{\text{bottom}} \\
>&= 1000 \, \text{kg / m}^3 \times 9.81 \, \text{m / s}^2 \times 10 \, \text{m} \\
>&= 98100 \, \text{Pa}
>\end{aligned}
>$$
>
>The average pressure on the wall is
>
>$$
>\begin{aligned}
>P_{\text{avg}} &= \frac{0 + 98100}{2} \\
>&= 49050 \, \text{Pa}
>\end{aligned}
>$$
>
>The hydrostatic force on the entire surface is then
>
>$$
>\begin{aligned}
>F &= P_{\text{avg}} \times A \\
>&= 49050 \, \text{Pa} \times (10 \, \text{m} \times 20 \, \text{m})\\
>&= 9810000 \, \text{N}
>\end{aligned}
>$$


For a vertical surface submerged in water, one must also calculate the pressure force at the upper end of the surface. 

>[!Example]
>Due to the construction of a dam, the artificial Lake Reschen in South Tyrol, Italy, developed to a depth of 28 meters. Alongside 16