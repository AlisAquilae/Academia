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

The sun generates tides on earth as well. Despite the larger mass of the sun, the tide generating force is about half that of the moon. This is due to the larger distance of the sun to the earth. The solar tidal acceleration for $P_1$ is $5.2 \cdot 10^{-8}$ g. Also, the gravitational forces by other planets in our solar system can be calculated, but these have a very limited contribution to the tides on earth. 

The attraction by the moon creates two tidal bulges at the surface of the earth closest to and furthest from the moon (see image above). Each day, $P_1$ and $P_2$ will pass the high tide twice, because of the rotation of the earth around its axis. This is the semi-diurnal tide. In the figure above, the moon is drawn in the equatorial plane. This is only true for special cases. The inclination of the moon with the equator causes also diurnal tides, because the two bulges do not pass the same location. Except when the moon is in the equatorial plane, the minimum and maximum water levels have an unequal amplitude. 

## 3.1.2 Gravitational Potential
The theory of the gravitational forces is often extended by the gravitational potential, $\Omega_p$. The gravitational potential is defined as the work that needs to be done against the force of attraction to remove a particle of unit mass to an infinite distance from the body. The gravitational potential can be calculated by 

$$
\Omega_p = -\frac{Gm}{r} \tag{3.7}
$$

in which
- $G$ is the gravitational constant,
- $r$ is the distance between the two masses
- $m$ is the mass of the body of attraction

The definition for the gravitational potential has a minus sign, because energy must be added to move the particle. It has the unit length$^2$time$^2$ and is a [[Scalars|Scalar]] property.

>[!Missing]
>Insert Fig. 3.3

When calculating the gravitational potential for any point $P$ on the surface of the earth, the distance $MP$ should be known. This can be calculated using the law of cosines:

$$
MP^2 =r^2 + R^2_l - 2rR\cos(\varphi) \tag{3.8}
$$

In equation 3.8, $\varphi$ is the angle MOP. For simplicity, $\varphi$ is assumed to be the latitude of $P$ and the moon is positioned in the equatorial plane. When substituting this in the equation for gravitational potential, the result for any location $P$ is

$$
\Omega_p(\varphi) = -\frac{Gm_l}{R_l}\left[ 1-2\frac{r}{R_l}\cos(\varphi)+\frac{r^2}{R^2_l} \right]^{-\frac{1}{2}} \tag{3.9}
$$

Since the tides can be described by sinus-like functions, the equation above can be expanded by a series of Legendre-polynomials:

$$
\Omega_p(\varphi) = -\frac{Gm_l}{R_l}\left[ 1 + \frac{r}{R}\xi_1 \cos(\varphi) + \frac{r^2}{R^2}\xi_2 \cos(\varphi) + \frac{r^3}{R^3}\xi_3 \cos(\varphi) + \dots \right] \tag{3.10}
$$

The $\xi_n$ terms are the polynomials, which are defined as

$$
\begin{aligned}
\xi_1 &= \cos(\varphi) \\
\xi_2 &= \frac{1}{2} (3\cos^2(\varphi)-1) \\
\xi_3 & = \frac{1}{2} (5 \cos^3(\varphi) - 3 \cos(\varphi)) \\
& \vdots
\end{aligned} 
$$

The tidal forces related to these polynomial terms can be calculated by taking the spatial gradient, $-\text{grad}(\xi_n)$. The first term of equation 3.10 is a constant and produces therefore no force. The second term produces a uniform force parallel to the line OM. The third term is the major tide producing term. The fourth and higher terms are often neglected because $\frac{r}{R_l}$ is approximately $\frac{1}{60}$. The effective tide generating potential is now written as

$$
\Omega_{p, \text{eff}} (\varphi) = \frac{1}{2} Gm_l \frac{r^2}{R^3}(3 \cos^2 (\varphi)-1) \tag{3.11} 
$$

This equation can be resolved in the potential gradient vertically upward from the earth surface and the potential gradient perpendicular to the earth surface, in the direction of increasing $\varphi$. The equation vertically upwards reads

$$
-\frac{\partial \Omega_p}{\partial r} = 2g\Lambda_l (\cos^2 (\varphi) - \frac{1}{3}) \tag{3.12}
$$

and tangent to the earth surface

$$
-\frac{\partial \Omega_p}{\partial \varphi} = -g \Lambda_l (\sin(2\varphi)) \tag{3.13}
$$

where

$$
\Lambda_l = \frac{3}{2} \frac{m_l}{m_e} \left( \frac{r}{R_l} \right)^3
$$

Since $\Lambda_l$ is very small, the vertical forces are overcompensated by the earth's gravity and the horizontal forces cause the tidal movements.

In this section, $\varphi$ was considered to be the latitude of the position on the surface of the earth. However, the distance to the moon does not only depend on the observer's location, but also on the moon's location. To compensate for the change in the location of the moon, three new time-dependent variables can be defined:
- $\varphi_p$, the north latitude of the position P
- $d_l$, the declination of the moon north of the equator (or the latitude of the sub-lunar point)
- $C_p$, the hour angle of the moon. The difference between the longitude of the observer and the longitude of the sub-lunar point

We can now define the lunar angle, $\varphi$:

$$
\cos(\varphi) = \sin(\varphi_p)\sin(d_l) + \cos(\varphi_p)\cos(d_l)\cos(C_p) \tag{3.14}
$$

which gives the exact location of the moon with respect to position on earth. Substitution of the lunar angle in equation 3.11, the equation for the gravitational potential, becomes

$$
\begin{aligned}
-\Omega_p(\varphi_p,t) &= \frac{3}{2}rg\frac{m_l}{m_e} \left(\frac{r}{R_l} \right)^3 \left( \frac{3}{2}\sin^2(d_l(t) - \frac{1}{3}) (\sin^2 (\varphi_p) - \frac{1}{3} \right.\\
&+ \frac{1}{2} \sin(2d_l(t))\sin(2\varphi_p)\cos(C_p(t)) \\ 
&+ \left. \frac{1}{2}\cos^2(d_l(t)) \cos^2(\varphi_p) \cos(2C_p(t)) \right)
\end{aligned}
$$

## 3.1.3 The Equilibrium Tide
The [[Equilibrium Tide Theory]] described the tide on a spherical earth which is fully covered with water. This theory is developed to get a first grasp upon the tides on earth. The tidal waves can propagate endlessly, because there are no continental boundaries and the oceans have an infinite depth. The propagation of the tidal waves keeps up with the tidal forces. The equilibrium water level is only affected by gravity and the tidal forces. In this theory, the sea surface level, $\varsigma$, is always perpendicular to the resultant of the gravity and the gravitational force

>[!Missing]
>Insert Fig. 3.4

The tide-generating force is defined as $-m\frac{\partial \Omega_p}{\partial x}$. where $x$ is the direction perpendicular to the direction of gravity. Using the definition of the forces as in the figure above, the slope of the sea surface can be calculated as 

$$
\tan(\alpha) = -\frac{\partial \Omega_p}{\partial x} / g \tag{3.16}
$$

and

$$
\tan(\alpha) = \frac{\partial \varsigma}{\partial x} \tag{3.17}
$$

so that

$$
g\frac{\partial \varsigma}{\partial x} + \frac{\partial \Omega_p}{\partial x} = 0 \tag{3.18}
$$

or

$$
\frac{\partial}{\partial x} (g\varsigma + \Omega_p) = 0 \tag{3.19}
$$

When this equation is integrated with respect to $x$ over an infinite area, it results in $g\varsigma + \Omega_p = \text{constant}$. When the integration takes place over the whole ocean surface, so that the total volume of water is conserved, this constant equals zero

$$
g\varsigma + \Omega_p =0
$$

In other words,

$$
g \varsigma = -\Omega_p \tag{3.20}
$$

Therefore, the equilibrium surface height can be calculated by

$$
\varsigma = -\frac{\Omega_p}{g} \tag{3.21}
$$

When this is substituted in equation 3.15 for the gravitational potential, a time-dependent equation for the equilibrium surface level is obtained:

$$
\varsigma(\varphi_p, t) = r \left( \frac{m_l}{m_e} \right) \left( \frac{r}{R_l} \right)^3 \left( C_0(t)(\frac{3}{2} \sin^2 (\varphi_p) - \frac{1}{2}) + C_1 (t) \sin(2\varphi_p) + C_2 (t) \cos^2 (\varphi_p) \right) \tag{3.22}
$$

The time-dependent coefficients are defined as 

$$
\begin{aligned}
C_0(t) &= \left( \frac{3}{2} \sin^2 (d_l) - \frac{1}{2} \right) \\
C_1(t) &= \left(\frac{3}{4} \sin(2d_l) \cos(C_p) \right) \\
C_2(t) &= \left( \frac{3}{4} \cos^2 (d_l) \cos(2C_p) \right)
\end{aligned}
$$

$C_0(t)$ represents the long-period tides, since it depends on the monthly variation in lunar declination. $C_1(t)$ represents the diurnal tides and depends on the lunar hour angle. $C_2(t)$ represents the semi-diurnal tides and depends on twice the frequency of the lunar hour angle. 

The amplitudes of the equilibrium tide are much smaller than the tidal amplitudes in reality. For example, the equilibrium amplitude at the equation would be 0.27 m, for a lunar declination of zero. In reality, the tidal amplitude is much larger. However, the observed tides have their maximum and minimum energy at the same frequencies as the equilibrium tide. 

## 3.1.4 Earth Tides
The solid earth also respond elastically to the tidal forces. The movements have an amplitude of less than one meter and can only be measured by highly sensitive instruments. Earth tides can be interesting, because precise geodatic instruments are influenced by these movements. In turn, ocean tides are affected by the solid earth movements. 

Investigation of the earth tides can be used to obtain knowledge about the elastic properties of the earth. Similar to ocean tides, we can derive an equilibrium level for the amplitude of the solid earth. The amplitude depends on two more factors than the equilibrium water level, namely:
- The elastic properties of the solid earth. The amplitude of the surface distortion depends on an elastic constant $h$, which influences the equilibrium level as $h\Omega_p / g$. In this equation, $\Omega_p / g$ is the equilibrium level amplitude
- The potential decrease by redistribution of the earth's mass. The redistribution increased the gravitational potential of the moon, which increases the equilibrium water level. This can be calculated by $k \Omega_p / g$, in which $k$ is another elastic constant.

The combined effect of the elastic response to the earth and the potential increase by the mass redistribution increases the height of the equilibrium level above the solid earth by

$$
(1+k-h)\frac{\Omega_p}{g} \tag{3.23}
$$

Herein, $k$ and $h$ are the Love numbers, after the mathematician who invented them. A higher $h$ results in a smaller amplitude, because it represents a stronger resistance of the solid earth against the lunar gravitational attraction. The values of the Love numbers are normally within the following range:
- $h = [0.604 \to 0.630]$
- $k = [0.299 \to 0.310]$

Love numbers are hard to determine accurately, because of the following reasons
- There can be local anomalies in the character of the near-surface geology
- The measurements are often done in tunnels and mines, because the precise geodetic instruments are very temperature-sensitive. However, the tidal response just below the surface is different from that at surface
- The loading of the earth crust by ocean tides influences the measurements

