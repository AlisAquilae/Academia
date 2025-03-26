---
fileClass: Base, Literature Notes
title: 
Parents: ["[[River Flow]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[River Flow]]"]
---
In this chapter, the relation between velocity and pressure will be investigated. We do this by means of the classical law of Bernoulli. 

# 3.1 Forms of energy of fluids
In this section a very intuitive introduction to the concept of energy will be given. We start from the very general definition:

>[!Quote]
>Energy is the ability of a fluid to perform work


We distinguish three different forms of energy for fluids:
1. Potential energy
2. Kinetic energy
3. Pressure energy

This is not an exhaustive list of energies that can be considered. Electromagnetic energy is another form of energy, but is not relevant for flowing water. 

>[!Note]
>In a later chapter, we will add (or rather, subtract) friction energy to the analysis


## 3.1.1 Potential energy
The fist form of energy is **potential energy**. Any mass of water at a certain height has the ability (if allowed to flow downward) to make a water wheel turn. Reservoirs for hydroelectric power generation are classical examples. Potential energy is given by the following equation:

$$
\text{potential energy} = m \, g \, z = W \, z \tag{3.1}
$$

This equation can intuitively be understood by noting that:
- More mass $m$ leads to more potential energy
- The gravitation constant matters: on Jupiter the same mass at the same height will have more potential energy
- The potential energy depends on weight: $W = m \, g$
- A higher mass ( = larger $z$) has more potential energy

The term "potential energy" is an overstatement. It suggests that the equation gives a value for an absolute quantity. In reality, the zero level for $z$ (sometimes called datum) can be chosen arbitrarily. So the equation can only be used in a relative sense, to compare the potential energies in two situations with the same zero level.

## 3.1.2 Kinetic energy
The **kinetic energy** of an object is the energy that it possesses due to its current motion. For fluids this translates into "flowing water has kinetic energy". A hose with flowing water possesses kinetic energy, because it can make a water wheel turn. Kinetic energy is given by:

$$
\text{kinetic energy} = \frac{1}{2} m \, v^2 = W \frac{1}{2} \frac{v^2}{g} \tag{3.2}
$$

- Larger mass $m$ leads to more kinetic energy
- Higher velocity $v$ leads to more kinetic energy. This relation is not linear: doubling the velocity quadruples the energy. 
- The fraction $\frac12$ and the power $2$ are not easy to explain intuitively
- Kinetic energy on Jupiter is equal to kinetic energy on Earth, so no gravitational constant appears in the equation. To make the comparison with the equation for potential energy as transparent as possible, the equation is translated into weight by $m = W/g$. 

## 3.1.3 Pressure energy
The last form of energy is **pressure energy**. This form of energy is illustrated by a bottle of champagne: if one releases the cork, the pressurised fluid will drive the wheel.

The equation for pressure energy is given by:

$$
\text{pressure energy} = P V = W \frac{P}{\rho \, g} \tag{3.3}
$$

- Higher pressure leads to more pressure energy
- Larger volumes have more pressure energy
- To make the comparison with the equation for potential energy as transparent as possible, the equation is translated into weight by $V = m / \rho = W / (\rho \, g)$. 

We choose $P$ to be pressure with respect to atmospheric pressure rather than the absolute pressure. Pressure energy as given by the equation above can thus only be used for comparing two situations (which was also the case with potential energy).

---
# 3.2 Bernoulli's Law
The law of conservation of energy says that in a stream tube:

>[!Quote]
>Total energy remains constant:
>
>$$
>\text{total energy} = \text{potential energy} + \text{kinetic energy} + \text{pressure energy}
>$$


Now we take any streamline and two points on it. Consider a thin stream tube around the streamline. By making the stream tube infinitely thin, the total energy $\varepsilon$ at points 1 and 2 become:

$$
\begin{aligned}
\varepsilon_1 &= W \, z_1 + W \frac{1}{2} \frac{v^2_1}{g} + W\frac{P_1}{\rho \, g} \\
\varepsilon_2 &= W \, z_2 + W \frac{1}{2} \frac{v^2_2}{g} + W\frac{P_2}{\rho \, g}
\end{aligned} \tag{3.4}
$$


The conservation of energy between 1 and 2 can thus be written as

$$
W \, z_1 + W \frac{1}{2} \frac{v^2_1}{g} + W\frac{P_1}{\rho \, g} =  W \, z_2 + W \frac{1}{2} \frac{v^2_2}{g} + W\frac{P_2}{\rho \, g} \tag{3.5}
$$

As $W$ appears both on the left and right it can be eliminated from the equation to yield [[Bernoulli's Law]]: For points 1 and 2 on the same streamline,

$$
z_1 + \frac{v_1^2}{2g} + \frac{P_1}{\rho \, g} = z_2 + \frac{v_2^2}{2g} + \frac{P_2}{\rho \, g} \tag{3.6}
$$


>[!Info]
>Strictly speaking, the equation above is not about conservation of energy but about the conservation of energy per unit weight. However, the formulation above is the most common one in hydraulics, because the two are effectively the same for water. 


---
# 3.3 Energy lines
The total energy per unit weight in Bernoulli's Law (Eq. 3.6) is split as:

$$
E_{\text{tot}} = z + \frac{v^2}{2g} + \frac{P}{\rho \, g} \tag{3.7}
$$

All terms in this equation have the dimension of length (not of energy) and the names of the terms reflect this: $E_{\text{tot}}$ is the total energy height, $z$ is the position or potential height, $\frac{P}{\rho \, g}$ is the pressure height (so the height of the water column in a piezometer) and $\frac{v^2}{2g}$ is the velocity height.

When for all points on a streamline, the pressure heights are added to the vertical position of the points, one obtains the **hydraulic gradient line**. Connecting total energy heights gives a horizontal line, called the **total energy line**. 

>[!Missing]
>Insert Figure 3.3


The total energy line is horizontal (since energy is conserved), but the hydraulic gradient line and the streamline itself are in general not horizontal. The changes in these lines give insight in how to contributions of the three forms of energy change when moving over the streamline (while their sum remains constant). These changes in contribution are caused by energy conversions. 

---
# 3.4 Applying Bernoulli (==Skipped==)