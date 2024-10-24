---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Multivariate Mathematics Applied]]"]
Draft: 
Status: Done
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Multivariate Mathematics Applied]]"]
---

# 2.2 Rectangular Domains
## 2.2.1 Refresher: Integration Over an Interval (Skipped)

## 2.2.2 Refresher of Integration Techniques: Substitution and Integration by Parts
The method of substitution is useful when the integrand contains a composite function

>[!Tip]
>Algorithm for the method of substitution:
>1. Look for a composite function $f(u(x))$ as a part of the integrand. Here the identification of the inner function $u(x)$ is of prime importance; the outer function $f(u)$ turns up on its own accord
>2. Choose $u = u(x)$
>3. Determine the derivative $\frac{du}{dx}=u'(x)$. Check whether this expression appears as a part of the integrand
>4. If necessary, rewrite the integrand and substitute the new variable $u$ with $du = u'(dx)$
>
>$$
>\int_a^b f(u(x))u'(x)dx = \int_{u(a)}^{u(b)} f(u) du
>$$

>[!Example]
>In the integral 
>
>$$
>\int_0^1 xe^{-x^2}dx
>$$
>
>we recognize a composite function of $f(u)=e^u$ and $u(x)=-x^2$. The derivative of the inner function $u'(x) = -2x$, also appears in the integrand up to a factor of $-2$. Therefore
>
>$$
>\begin{aligned}
>\int_0^1 xe^{-x^2} &= -\frac{1}{2} \int_0^1 e^{-x^2 } \cdot -2x \, dx \\
>&= -\frac12 \int_0^{-1} e^u \, du \\
>&= -\frac12 \left[ e^u \right]_{u=0}^{u=-1} \\
>&= -\frac12(e^{-1} - e^0) \\
>&= \frac12(1-e^{-1})
>\end{aligned}
>$$
>

Integration by parts is useful when integrating a product of functions

>[!Tip]
>Algorithm for the method of integration by parts
>1. Identify the integrand as the product of two functions
>2. Identify one of the factors as a derivative; that is, write the integrand in the form $f(x)g'(x)$
>3. Set up a scheme containing $f(x), f'(x), g(x), g'(x)$
>4. Apply the rule $\int_a^b f(x)g'(x)dx = \left[ f(x)g(x) \right]^{x=b}_{x=a} - \int_a^b f'(x)g(x)dx$
>5. Finally, find $\int_a^b f'(x)g(x)dx$

>[!Example]
>In the integral
>
>$$
>\int_0^\infty xe^{-x} dx
>$$
>
>we recognise an integrand as a product of $x$ and $e^{-x}$. Although we can identify both factors as the derivative of a known function, only the choice $f(x) = x$ and $g'(x) = e^{-x}$ leads to a useful result
>
>$$
>\begin{aligned}
>\int_0^\infty xe^{-x}dx &= \left[ x \cdot -e^{-x} \right]_{x=0}^{x=\infty} - \int_0^\infty 1 \cdot -e^{-x} dx \\
>&= (0-0) + \int_0^\infty e^{-x}dx \\
>&= \left[ -e^{-x} \right]_{x=0}^{x=\infty} \\
>&= 0 - -1 \\
>&= 1
>\end{aligned}
>$$
>


## 2.2.3 Integration Over a Rectangle (Skipped)

## 2.2.4 Double Integrals and Iterative Integrals
For a rectangular domain bounded by the lines  $x=a, x=b, y=c$ and $y=d$ 

$$
\int \int f(x,y)dA = \int_c^d \int_a^b f(x,y)dxdy
$$

Note that the limits in outer integral correspond to the outer integration variable, $y$, and that the inner integral corresponds to the inner integration variable, $x$. 

>[!Tip]
>You can swap whether you first differentiate X and Y, as long as you then also swap the integrals and the integration variables in the notation

>[!Example]
>We want to integrate the function 
>
>$$
>f(x,y)=xy+y^2
>$$
>
>over the rectangular region $R$ given by $0 \le x \le 1$ and $-1 \le y \le 1$. Thus, we evaluate the integral
>
>$$
>V=\int_{-1}^1 \int_0^1 xy+y^2 dx dy
>$$
>
>in which we first integrate with respect to $x$ and next with respect to $y$, as can be seen from the order of the symbols dx and dy. Integrating with respect to $x$, we find
>
>$$
>\begin{aligned}
>V &= \int_{y=-1}^{y=1} \left[ \int_{x=0}^{x=1} xy+y^2 dx \right] dy \\
>&= \int_{y=-1}^{y=1} \left[ \frac12 x^2 y +xy^2 \right]_{x=0}^{x=1}dy \\
>&= \int_{y=-1}^{y=1} \frac12y + y^2 dy
>\end{aligned}
>$$
>
>Here, we mentioned explicitly the integration variable in the limits, although this is not strictly necessary. We will further omit this explicit notation
>
>Next, we integrate with respect to $y$. By integration and evaluation of the limits, the variable $x$ has dissapeared, so an ordinary integral with respect to $y$ remains. 
>
>$$
>\begin{aligned}
>V &= \int_{-1}^1 \frac12 y + y^2 dy \\
>&= \left[ \frac14 y^2 +\frac13 y^3 \right]_{y=-1}^{y=1} \\
>&= (\frac14 + \frac13) - (\frac14 - \frac13) \\
>&= \frac23
>\end{aligned}
>$$

The steps above can be done in reversed order as well; in other words, first integrating with respect to $y$ and then integrating with respect to $x$. In addition, we now integrated along 3 unknowns, $x$ and $y$. Adding more unknowns follows the same principle.

Finally, we note that the physical dimension of the integral is the product of the integration variable and that of the integrand

---
# 2.8 Coordinate Transforms
In measuring quantities, we use a set of measurement units, the coordinate system. Thus, the outcome of measurements is a set of coordinates in that coordinate system. If you change the coordinate system, then the measurement outcomes change accordingly

>[!Example]
>If your body length is 1.80 m, then you are also 180 cm tall. The new scale unit (centimetre) is one hundredth of the old one (metre). In the transition from one scale to the other, the scale indicator gains an extra factor 100 that compensates exactly for the factor in the scale unit. 

Apparently, we can apply various scale units or coordinate units to length. As the measured object does not change, the choice affects the scale indicaton or coordinate. 

>[!Example]
>In an atlas, positions on earth are not expressed as distances (in metres) from a certain reference point, but with angles: the longitude (western or eastern longitude, in degrees, with respect to the prime meridian at Greenwich) and the latitude (northern or southern latitude, in degrees, with respect to the equator). This positioning system is closely related to the spherical coordinates that we will introduce now

## 2.8.1 Coordinate Systems
In a plane we often use the coordinates $x$ and $y$, in space the coordinates $x, y$ and $z$. They are called the **Cartesian coordinates**. However, there may be reasons to use different coordinates, for example if we consider a region with a regular geometric structure. After Cartesian coordinates, polar coordinates in **R**$^2$, and cylindrical coordinates and spherical coordinates in **R**$^3$ are the most used coordinate systems

### 2.8.1.1 Polar Coordinates
The polar coordinates $r$ and $\varphi$ in **R**$^2$ are connected to the ordinary (Cartesian) coordinates $x$ and $y$ via the relations

$$
\begin{aligned}
x &= r \cos(\varphi) \\
y &= r \sin(\varphi)
\end{aligned}
$$

where $0 \le \varphi \le 2\pi$. Then $r$ is the distance of the point $P = (x,y)$ to the origin $O$:

$$
r = \sqrt{x^2 + y^2}
$$

and $\varphi$ is the angle between $OP$ and the positive x-axis. By fixing $r$ and varying $\varphi$, we find (a piece of) a circle about the origin. If we fix $\varphi$ and vary $r$, we obtain a half line originating in the origin. 

### 2.8.1.2 Cylindrical Coordinates
The cylindrical coordinates $r$, $\phi$, and $z$ in **R**$^3$ are linked to the ordinary coordinates $x, y$ and $z$ by

$$
\begin{aligned}
x &= r \cos(\varphi) \\
y &= r \sin(\varphi) \\
z &= z
\end{aligned}
$$

where $0 \le \varphi \le 2 \pi$, $r$ and $\varphi$ coincide with polar coordinates in the $(x,y)$-plane (the "base plane"):

$$
r = \sqrt{x^2 + y^2}
$$

Thus, $r$ is the distance of $P = (x,y,z)$ to the $z$-axis. By fixing $r$ and varying $\varphi$ and $z$ we find a cylindrical surface. Cylindrical coordinates are well-suited to describe solids of rotation

### 2.8.1.3 Spherical Coordinates
The spherical coordinates $r, \theta$ and $\varphi$ in **R**$^3$ satisfy

$$
\begin{aligned}
x &= r \sin(\theta)\cos(\theta) \\
y &= r \sin(\theta)\sin(\theta) \\
z &= r \cos(\theta)
\end{aligned}
$$

where $0 \le \theta \le \pi$ and $0 \le \varphi \le 2\pi$. Here $r$ is the distance of $P=(x,y,z)$ to the origin $O$:

$$
r = \sqrt{x^2 + y^2 + z^2}
$$

$\theta$ and $\varphi$ are angles: $\theta$ is the angle between $OP$ and the positive $z$-axis, and $\varphi$ is the angle in the $(x,y)$-plane (the "base plane") of the line through $(x,y,0)$ with the positive $x$-axis. Spherical coordinates are especially suited for integration over spherical constants. 

The angles $\theta$ and $\varphi$ are closely related with the longitude and latitude degrees that are used in positions on earth. By fixing $r$ and varying $\theta$ and $\varphi$ we obtain a spherical surface. By fixing $r$ and $\theta$ and varying $\varphi$ we find a parallel latitude; by fixing $r$ and $\varphi$ and varying $\theta$ we find a meridian (half circle in a vertical plane)

The usage of different coordinate systems has far-reaching consequences in differentiation and integration. For functions of one variable, we have the chain rule and the substitution rule. Below we study the higher dimensional variant of the substitution rule. 

## 2.8.2 Integration in R$^2$: Polar Coordinates
We examine the effect of new coordinates on the computation of a double integral. In calculating an integral we have to weigh points differently. More precisely:

An integral over a circular region $R$ can be computed as

$$
\iint\limits_G f(x,y) \, \mathrm dx \, \mathrm dy = \iint\limits_H g(r, \varphi) r \, \mathrm dr \, \mathrm dp = \int\limits_0^{2\pi} \int\limits_0^R f(r \cos(\varphi), r\sin(\varphi))r \, \mathrm dr \, \mathrm dp
$$

The symbol $\mathrm dx \, \mathrm dy$ in a double integral is often called an area element, denoted as $\mathrm dA$. When under polar coordinates, we may write

$$
\mathrm dA = \mathrm dx \, \mathrm dy = r\, \mathrm dr \, \mathrm dp
$$

>[!Question]
>**2.42**: $G$ is a quarter of a disc with radius $R$ and centre in the origin, such that $x \gt 0$ and $y \gt 0$. Find the integral $\iint\limits_G \cos(x^2 + y^2) \, \mathrm dx \, \mathrm dy$
>
>>[!Check]- Answer
>>$$
>>\begin{aligned}
>>r = \sqrt{x^2 +y^2} \Rightarrow x^2 + y^2 &= r^2 \\
>>\iint\limits_G \cos(x^2 + y^2) \, \mathrm dx \, \mathrm dy &= \int_0^{\frac12\pi} \int_0^R \cos(r^2) \, r \, \mathrm dr \, \mathrm d\varphi \\
>>u = r^2 \Rightarrow \frac{\mathrm du}{\mathrm dr} = 2r \Rightarrow \frac{\mathrm du}{2r} &= dr \\
>>&= \int_0^{\frac12 \pi} \left[ \sin(u) \, r\cdot \frac{1}{2r} \right]_0^R \mathrm d\varphi \\
>>&= \int_0^{\frac12 \pi} \frac12 \left[ \sin(u) \right]_0^R \mathrm d\varphi \\
>>&= \int_0^{\frac12 \pi} \frac12 \sin(R^2) \mathrm d\varphi \\
>>&= \left[ \frac12 \sin(R^2)\varphi \right]_0^{\frac12 \pi} \\
>>&= \frac14 \pi \sin(R^2)
>>\end{aligned}
>>$$


## 2.8.3 Coordinate Transforms, Jacobi Matrix and Jacobian
Now we consider a general coordinate transform of the form

$$
x=x(u,v), y=y(u,v)
$$
The region $R$ in the $(x,y)$-plane is transformed to the region $H$ in the $(u,v)$-plane. To this coordinate transform belongs a Jacobi Matrix $J(u,v)$,

$$
J(u,v) = \begin{pmatrix}x_u(u,v) & x_v(u,v) \\ y_u(u,v) & y_v(u,v) \end{pmatrix}
$$

The determinant of the Jacobi matrix is called the Jacobian. Using the Jacobian, the area element can be expressed in terms of the new coordinates of $u$ and $v$

$$
\begin{aligned}
\mathrm dA &= \mathrm dx \, \mathrm dy \\
&= |\det(J(u,v))| \mathrm du \, \mathrm dv \\
&= \left| \det \begin{pmatrix}x_u(u,v) & x_v(u,v) \\ y_u(u,v) & y_v(u,v) \end{pmatrix} \right| \mathrm du \, \mathrm dv
\end{aligned}
$$

This enables us to formulate integrals in the new coordinates:

$$
\iint\limits_G f(x,y) \, \mathrm dx \mathrm dy = \iint\limits_H f(x(u,v), y(u,v)) |\det(J(u,v))| \, \mathrm du \, \mathrm dv
$$

>[!Example]
>For the transform to polar coordinates $r$ and $\varphi$ with 
>
>$$
>x = r\cos(\varphi), \, y = r\sin(\varphi)
>$$
>
>We have the Jacobian
>
>$$
>\begin{aligned}
>\det J(r, \varphi) &= \det 
>\begin{pmatrix} 
>x_r(r,\varphi) & x_{\varphi}(r, \varphi) \\ y_r(r, \varphi) & y_{\varphi}(r, \varphi) \end{pmatrix} \\
>&= \det \begin{pmatrix} \cos(\varphi) & -r\sin(\varphi) \\ \sin(\varphi) & r\cos(\varphi) \end{pmatrix} \\
>&= r
>\end{aligned}
>$$
>
>Hence, we find for the area element
>
>$$
>\mathrm dx \, \mathrm dy = r \, \mathrm dr \,  \mathrm d\varphi 
>$$


## 2.8.3 Integration in R$^3$: Cylindrical Coordinates
For integration over solids of rotation, we often use cylindrical coordinates $r$, $\varphi$ and $z$:

$$
\begin{aligned}
x &= r \cos(\varphi) \\
y &= r \sin (\varphi) \\
z &= z
\end{aligned}
$$

where $0 \le \varphi \le 2\pi$. For these coordinates we find the volume element to be 

$$
\mathrm dV = \mathrm dx \, \mathrm dy \, \mathrm dz = r \, \mathrm dr \, \mathrm d\varphi \, \mathrm dz
$$
Hence, integrals can be expressed in terms of cylindrical coordinates by 

$$
\iiint\limits_G f(x,y,z) \, \mathrm dx \, \mathrm dy \, \mathrm dz = \iiint\limits_H g(r, \varphi, z) \, r \, \mathrm dr \, \mathrm d\varphi \, \mathrm dz 
$$

where $g(r,\varphi,z) = f (r \cos(\varphi), r \sin(\varphi), z)$

>[!Info]
>Cylindrical coordinates are especially suited for functions that are rotationally symmetrix about the $z$-axis, i.e. functions depending only on $r=\sqrt{x^2 + y^2}$ and $z$

>[!Example]
>A trough for algae cultivation is shaped as a half cylinder with an excavation for a TL-tube at the top. It has a length of 1 m, an outer radius of 10cm and an inner radius of 5 cm. We calculate the volume of this trough. 
>
>The volume $V$ of an object $R$ is 
>
>$$
>V= \iiint\limits_R \mathrm dV
>$$
>
>For the integration we choose cylindrical coordinates, taking the $z$-axis along the axis of the trough. One end is put at $z=0$, the other at $z=100$ (so we use cm as a unit of length). Now we set up the integral, expressing the integrand, here $1$, into the new coordinates (after which, of course, it is still $1$) and incorporating the Jacobian
>
>$$
>V=\iiint\limits_R r\, \mathrm dr \, \mathrm d\varphi \, \mathrm dz 
>$$
>
>The integration limits for $z$ are above; the limits in the radial direction are $r=5$ and $r=10$; and the limits for the angle $\varphi$ we choose $\varphi = 0$ and $varphi = \pi$. This results in 
>
>$$
>\begin{aligned}
>V &= \int_0^{100} \int_0^\pi \int_5^{10} r \, \mathrm dr \, \mathrm d\varphi \, \mathrm dz \\
>&= \int_0^{100} \int_0^\pi \left[ \frac12 r^2 \right]_{r=5}^{r=10} \, \mathrm d\varphi \, \mathrm dz \\
>&= 37.5 \int_0^{100} \int_0^\pi \mathrm d\varphi \, \mathrm dz \\
>&= 3750 \pi \\
>&= 11781 \, \text{cm}^3
>\end{aligned}
>$$

## 2.8.4 Integration in R$^3$: Spherical Coordinates
For a region that is (partially) spherical, we may consider using spherical coordinates $r$, $\theta$ and $\varphi$. These coordinates satisfy

$$
\begin{aligned}
x &= r\sin(\theta)\cos(\varphi) \\
y &= r \sin (\theta)\sin(\varphi) \\
z &= r \cos (\theta)
\end{aligned}
$$

where $0 \le \theta \lt \pi$  and $0 \le \varphi \lt 2\pi$. Then we use the following property: the volume element of spherical coordinates is

$$
\mathrm dV = \mathrm dx\, \mathrm dy \, \mathrm dz = r^2 \sin(\theta) \, \mathrm dr \,  \mathrm d\theta \, \mathrm d\varphi
$$

This results in the following property for integrals expressed in spherical coordinates

$$
\iiint\limits_G f(x,y,z) \, \mathrm dx \, \mathrm dy \, \mathrm dz = \iiint\limits_H g(r, \varphi, z) \, r^2 \sin(\theta) \, \mathrm dr \,  \mathrm d\theta \, \mathrm d\varphi
$$

where $g(r, \varphi, z) = f(r\sin(\theta)\cos(\varphi), r\sin(\theta)\sin(\varphi), r\cos(\theta))$

>[!Example]
>If $S$ is a sphere with centre in the origin and radius $R$, then 
>
>$$
>\iiint\limits_S f(x,y,z) \, \mathrm dx \, \mathrm dy \, \mathrm dz = \int_0^{2\pi} \int_0^\pi \int_0^R f(r\sin(\theta)\cos(\varphi), r\sin(\theta)\sin(\varphi), r\cos(\theta)) \, r^2 \sin(\theta) \, \mathrm dr \,  \mathrm d\theta \, \mathrm d\varphi
>$$
