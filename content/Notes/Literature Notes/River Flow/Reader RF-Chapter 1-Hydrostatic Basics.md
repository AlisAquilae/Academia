---
fileClass: Base, Literature Notes
title: 
Parents: ["[[River Flow]]"]
Draft: 
Status: To Revisit
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[River Flow]]"]
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

### 1.4.2.1 Hydrostatic forces on rectangular vertical surfaces
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
>Due to the construction of a dam, the artificial Lake Reschen in South Tyrol, Italy, developed to a depth of 28 meters. Alongside 163 homes, a 14th century church was flooded in the process. Suppose the vertical bell tower of the submerged church has a height of 10 meters and a width fo 3 meters. The fluid in the reservoir is water. 
>
>The pressure at the top of the tower is
>
>$$
>\begin{aligned}
>P_{\text{top}} &= 1000 \, \text{kg / m}^3 \times 9.81 \, \text{m / s}^2 \times (28 \, \text{m} - 10 \, \text{m}) \\
>&= 176580 \, \text{Pa}
>\end{aligned}
>$$
>
>The pressure at the bottom of the tower is
>
>$$
>\begin{aligned}
>P_{\text{top}} &= 1000 \, \text{kg / m}^3 \times 9.81 \, \text{m / s}^2 \times 28 \, \text{m} \\
>&= 274680 \, \text{Pa}
>\end{aligned}
>$$
>
>The average pressure is then
>
>$$
>P_{\text{avg}} = \frac{176580 + 274680}{2} = 225630 \, \text{Pa}
>$$
>
>The hydrostatic force on the entire bell tower wall is then
>
>$$
>\begin{aligned}
>F &= P_{\text{avg}} \times A \\
>&= 225630 \, \text{Pa} \times (10 \, \text{m} \times 3 \, \text{m}) \\
>&= 6768.9 \, \text{kN}
>\end{aligned}
>$$



### 1.4.2.2 Hydrostatic forces on a horizontal surface
For a horizontal surface submerged in a fluid, such as the bottom of a tank, the pressure is constant across the entire surface because the depth does not vary. 

>[!Example]
>Consider a tank filled with water, where the depth of water above the bottom surface is 5 meters. The area of the bottom surface is 10 m$^2$, and the density of the water is 1000 kg/m$^3$. The pressure at the bottom of the tank can be calculated as follows:
>
>$$
>P = \rho g h
>$$
>
>where
>- $\rho = 1000$ kg/m$^3$ (density of water)
>- $g = 9.81$ m/s$^2$ (acceleration due to gravity)
>- $h = 5$ m (depth of water)
>
>Substituting the values:
>
>$$
>P = 1000 \times 9.81 \times 5 = 49050 \, \text{Pa}
>$$
>
>The hydrostatic force on the bottom surface is
>
>$$
>49050 \times 10 \, \text{m}^2 = 490500 \, \text{N}
>$$


## 1.4.3 Center of pressure

>[!Missing]
>Insert Figure 1.11

The **center of pressure** is a special case of the "point of application of the total force". Figure 1.11 shows four cases of a bar on which two forces are working from the right and one from the left. The left force's magnitude equals the sum of the two right forces. The bar will (initially) neither move left or right under the influence of these forces as the magnitudes left and right balance. The bar will, however, start (again, initially) turning, which depends on the position of the left force. The magnitude and direction of this rotation can be determined by examining the **moment of force** (also known as **torque**). In general, the moment of force $M$ is computed by summing the combined pushing effect of all forces acting on an object

$$
M = \sum\limits_i F_i r_i \tag{1.17}
$$

where $r$ is the lever, which is the distance to the point where the force is applied.

In figure 1.11, the moment becomes

$$
\begin{aligned}
M &= \sum\limits_i F_i (z_i - z) \\
&= F_1 (z_1 - z) + F_2 (z_2 - z)
\end{aligned} \tag{1.18}
$$

The four panels of figure 1.11 illustrate four cases
1. If $M \lt 0$, rotation will be clockwise
2. If $M \gt 0$, rotation will be counterclockwise. Note that this is caused by the large lever $(z_2 - z)$ of the force $F_2$, which makes that the top force is more of influence, even though the bottom force is larger. The levers multiplied with the magnitudes of the forces give the moment of force
3. Applying the left force in the middle of the bar (third figure from the left) does not avoid rotation: the levers are now equal, but as $F_1 \gt F_2$, the bar starts rotating clockwise
4. $M$ is only zero if the left force is applied to
   
   $$
   z_p = \frac{\sum\limits_i z_i F_i}{\sum F_i} \tag{1.19}
   $$
   
   This point $z_p$ is called the **point of application** of the total of the forces on the right

This analysis shows that for practical (calculation) purposes, one may replace the two forces on the right by one total force, whose magnitude is the total of these two applied at the point of application. This theory can also be applied to pressure forces. The point of application is in these cases also called the **center of pressure**. As pressure increases with depth, and the mean pressure is given by the centroid, the center of pressure will always be found below this centroid. 

The following equation gives a general way of calculating this center of pressure:

$$
y_P = y_G + \frac{I}{y_G + z_T} \tag{1.20}
$$

where
- $y_P$ is the center of pressure
- $y_G$ is the centroid
- $z_T$ is the distance from the top of the surface to the water level
- $I$ stands for the **second moment of area** of the surface. Each surface has its own $I$, which depends on the geometry of the surface (just like the position of the centroid). 

>[!Example]
>For a rectangle, $I = D^2 /12$. Independently of depth in the water, the centroid can be found as $y_G = D/2$. The center of pressure is then found at
>
>$$
>y_P = D/2 + \frac{D^2 /12}{z_T + D/2}
>$$


Based on the example above, we can draw 2 conclusions which are valid for all surfaces in general:
- The center of pressure is always below the centroid
- The deeper the surface is submerged, the more the center of pressure approximates the centroid

>[!Warning]
>Skipped the derivation of $y_P$ for various geometrical shapes


## 1.4.4 Application of hydrostatic forces
It is essential to quantify the acting hydrostatic forces in various applications, some are mentioned below.

- Dams and reservoirs: Engineers must calculate the hydrostatic forces acting on the walls of dams and reservoirs to ensure structural integrity. Incorrect calculations can lead to catastrophic failures. 
- Aquariums and water tanks: The design of aquariums, water tanks, and pressure vessels require precise calculations of hydrostatic forces to ensure that the walls can withstand the pressure exerted by the fluid inside.
- [[Archimedes' Principle]]: Archimedes' principle is a fundamental concept in fluid mechanics, formulated by the ancient Greek mathematician and physicist Archimedes. It explains why objects float or sink in fluids and describes the buoyant force acting on objects submerged in a fluid (liquid or gas)
  
  >[!Quote]
  >Any object, wholly or partially submerged in a fluid, experiences an upward force (buoyant force) equal to the weight of the fluid displaced by the object
  
This means that when an object is placed in a fluid, it displaces a certain amount of fluid. The fluid, in turn, exerts an upward buoyant force on the object, equal to the weight of the fluid displaced. 

The buoyant force $F_b$ is the upward force acting on an object submerged in a fluid. It is responsible for making objects appear lighter when submerged and is the reason why objects sink or float. The equation for buoyant force is given by

$$
F_b = \rho_{\text{fluid}} \cdot g \cdot V_{\text{displaced}} \tag{1.26}
$$

where
- $F_b$ is the buoyant force
- $\rho_{\text{fluid}}$ is the density of the fluid
- $g$ is the gravitational acceleration
- $V_{\text{displaced}}$ is the volume of fluid displaced by the object.

Objects that are less dense than the fluid displace an amount of fluid whose weight is greater than the object's weight, resulting in a net upward force (buoyant force) that causes objects to float. Conversely, objects denser than the fluid displace an amount of fluid whose weight is less than the object's weight, leading to sinking.

The Archimedes' Principle can be used to understand why ships can float on water, how much of an iceberg is under water, and why helium balloons rise and how submarines work. Despite being made of steel, which is denser than water, ships float because their overall shape and design allow them di displace a large volume of water, creating a buoyant force equal to their weight. The weight of the displaced water keeps them afloat. Ice is less dense than water, so about 10% of the iceberg is above the surface, while the rest is submerged, displacing seawater equal to the iceberg's total weight. Helium is less dense than air. A helium balloon displaces air, and since the weight of the air displaced is greater than the weight of the balloon itself, it rises. And lastly, submarines use ballast tanks to control their buoyancy. When the tanks are filled with water, the submarine becomes denser and sinks. When the tanks are filled with air, the submarine becomes less dense and rises. 