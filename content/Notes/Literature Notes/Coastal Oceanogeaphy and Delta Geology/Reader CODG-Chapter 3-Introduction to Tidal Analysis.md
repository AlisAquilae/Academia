---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Coastal Oceanography and Delta Geology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Coastal Oceanography and Delta Geology]]"]
---
# 3.1 The Origin of Tides and the Equilibrium Tide
As discussed in the previous chapters, delta morphology reflects the relative importance of fluvial, tidal and wave processes. This chapter deals with one of these factors: the tidal motion

As the earth rotates around its axis, spatially varying gravitational forces from the moon and the sun act on the oceans. This generates tides on earth at primarily diurnal and semi-diurnal frequencies. This chapter aims to quantitatively describe the forces governing tides. First, the basic equations governing the tidal forces are presented. Then, the causes of differences in tides and tidal amplitudes around the globe are introduced. The final paragraph gives an onset of planetary motion and frequencies

>[!Info]
>This chapter is based on chapter 3 of Pugh (1996)


## 3.1.1 Gravitational Attraction
The explanation of the tidal motion begins with [[Newton's Law of Universal Gravitation]]. This law states that any particle with mass $m_1$ attracts any other particle with mass $m_2$. This is what causes e.g. gravity on earth and the rotation of the earth around the sun. The force of attraction $F$ depends on the product of the two masses $m_1 \cdot m_2$ and the distance $r$ between them. 

The law is given by

$$
F = G \frac{m_1 \cdot m_2}{r^2} \tag{3.1}
$$

In equation 3.1, $G$ is the gravitational constant taking a magnitude of $6.67 \cdot 10^{-11}$ Nm$^2$kg$^{-2}$. The distance between the two objects is the distance between the two centres of mass, the point where the mass of an object is assumed to be concentrated. For spherical objects the mass lies at its centre. The moon-earth system has a centre of mass, which is called the common centre of mass. It is located in between the two individual centres of mass. The moon and earth orbit around their common centre of mass due to their attraction. 

>[!Missing]
>Insert Fig. 3.1

The common centre of mass of the earth-moon system lies within the earth, because of the large mass of the earth. The period it takes for two bodies to complete an orbit is called a [[Sidereal Period]]. For the earth-moon system the sidereal period is 27.32 days.

Every single element on the earth describes an equal orbit around the common centre of mass. They are only shifted with respect to the common centre of mass. The force that is needed to perform this revolution is the same as the force exerted on the centre of mass. However, a particle on the surface of the earth, closest to the moon experiences a larger force of attraction. The accelerations of all particles are equal, but the force of attraction that generates this attraction is not. 

>[!Important]
>The difference between the force necessary for the orbit and the experienced force, is the tide-generating force

The magnitude of the tide-generating force is determined by the distance to the moon's centre of gravitation. We can easily calculate the tide-generating force for the points on earth which are located on the straight line between the moon's and the earth's centres of mass, since we know the radius of the earth. These points are indicated by $P_1$ and $P_2$ in the figure below

>[!Missing]
>Insert Fig. 3.2

The attractional force exerted on $P_1$ by the moon can be calculated by subtracting the radius of the earth, $r$, from the total distance to the moon, $R_l$:

$$
F_{\text{moon}} = G \frac{mm_l}{(R_l-r)^2} \tag{3.2}
$$

The force needed for the orbit is given by

$$
F_{\text{orb}} = G \frac{mm_l}{R^2_l} \tag{3.3}
$$

Subtracting the force needed for the orbit, $F_{\text{orb}}$, from the force exerted by the moon, $F_{\text{moon}}$, gives the tide generating force, $F_{\text{tide}}$:

$$
\begin{aligned}
F_{\text{tide}} &= F_{\text{moon}} - F_{\text{orb}} \\
&= Gmm_l \left[ \frac{1}{(R_l-r)^2} - \frac{1}{R^2_l} \right] \\
&= \frac{Gmm_l}{R^2_l} \left[ \frac{1}{(1-\frac{r}{R_l})^2} -1 \right]
\end{aligned} \tag{3.4}
$$

This equation can be simplified when realizing that the square of the radius of the earth is negligible compared to the square of the total distance to the moon. The earth radius is about 60 times smaller than the total distance to the moon. The equation thus can be simplified to

$$
F_{\text{tide}} = \frac{2Gmm_l r}{R^3_l} \tag{3.5}
$$

In a similar way the force on $P_2$ can be calculated. The tide generating forces at $P_1$ and $P_2$ are equal but their direction is opposite. At $P_1$ the attraction force of the moon exceeds the force needed for the orbit (i.e. the centrifugal force), at $P_2$ the centrifugal form exceeds the force of attraction. The net force at $P_2$ is directed away from the moon. Equations 3.1 and 3.5 can be used to calculate the acceleration at $P_1$, realizing that $F_{\text{tide}} = ma$

$$
a = 2g\frac{m_l}{m_e}\left( \frac{r}{R_l} \right)^3 \tag{3.6}
$$

Using that $r$ is 6378 km, $R_l$ is 384400km, $m_l$ is $7.35 \cdot 10^{22}$ kg and $m_e$ is $5.97 \cdot 10^{24}$ kg. This results in an acceleration of $11.2 \cdot 10^{-8}$ g. The $g$ is the gravitational acceleration of the earth.

The sungener