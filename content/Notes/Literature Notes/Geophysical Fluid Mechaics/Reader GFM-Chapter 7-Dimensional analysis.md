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
# 7.1 Modeling based on dimensional analysis
Although the equations of motion of a Newtonian fluid have been known since 1821, no general analytical solution is available yet. Great progress has been made in recent years on numerical solutions, but many unsolved problems remain. Simulation of three-dimensional flow patterns, in which the vertical pressure distribution is typically non-hydrostatic, is computationally highly demanding. In this chapter, we show how an analysis of the dimensions of variables involved in a fluid mechanics problem can be used to obtain an approximate solution. Reformulating a problem in terms of dimensionless properties allows one to relate one situation (a model) to another (a prototype), so that the behaviour of one can be used to predict the behaviour of the other. With this, results from experiments in a laboratory can be translated to full-scale. Physical modeling is one of the oldest tools of the practical hydraulician. It is generally considered an empirical technique and as much an art as a science.

The approach followed in dimensional analysis is as follows. First, all variables assumed to govern the physical system subject to analysis are listed. The list of variables can be either or not derived from balance equations describing the system, which cannot readily be solved. The list of dimensional variables is then reduced to a smaller number of dimensionless variables. In empirical equations, these dimensionless variables are then combined, introducing unknown parameters which have to be determined experimentally. The theoretical grounds for such an empirical model are weaker than those of a balance equation, derived from a finite control volume. Despite this, empirical models often outperform the more rigorous numerical models based on fundamental conservation laws, yielding a practical solution within the parameter range for which the relation is shown to hold. The use of dimensional analysis extends beyond setting up emiprical models. In the next chapter, it is shown how equations can be simplified, and made better solvable, based on nondimensional numbers obtained using characteristic scales involved in a physical system.

This chapter continues with a description of units, dimensions, and dimensionless quantities. The setup of an empirical model equation based on dimensional analysis is then illustrated, introducing the indicial method. The indicial method is straightforward but becomes elaborate when a large numbers of variables is involved. The Buckinham Pi theorem is subsequently explained, offering a formalism that simplifies the procedure to reduce the initial variables to a smaller set of non-dimensional variables. Finally, the interpretation of dimensionless numbers is explained. 

---
# 7.2 Dimension and units
A **dimension** can be defined as a measurable property to describe the physical state of a body or system. For example, gravity has the dimension (length / time$^2$). Other definitions are used though. In common language, dimension may refer to a parameter or measurement defining the characteristics of an object: length, width, and height or size and shape. In mathematics, dimension is the total number of different parameters used for all possible objects considered in the model. 

There are 4 fundamental dimensions involved in most fluid mechanics problems, corresponding to:
1. Mass ($M$)
2. Length ($L$)
3. Time ($T$)
4. Temperature ($T_e$)

A dimension is expressed in measurable units. The dimension of gravity is length per time squared, which, in the SI-system is expressed in the units [m s$^{-2}$]. 

>[!Note]
>Sometimes other unit systems are used such as imperial units, with inches and feet as units of length, for instance. The discussion on dimension holds regardless of the system of units


In physics, the dimension of a quantity $y$ in general is denoted using angular brackets, as in [$y$]. Terms in an equation can be analysed by focusing on the dimension. For example, the double derivative:

$$
\frac{\partial^2 y}{\partial x^2} = \frac{\partial}{\partial x} \frac{\partial y}{\partial x} \tag{7.1}
$$

has the dimension:

$$
\left[ \frac{1}{x} \frac{y}{x} \right] = \left[ \frac{y}{x^2} \right] \tag{7.2}
$$

In general, for arbitrary $n$:

$$
\left[ \frac{\partial^n y}{\partial x^ n} \right] = \left[ \frac{y}{x^n} \right]\tag{7.3}
$$

Taking an integral instead of a derivative:

$$
\int\limits_{a}^b
 \; y \, \mathrm{d}x \tag{7.4}
$$

The integration bounds $a$ and $b$ have the same dimension as $x$; $[a] = [b] = [x]$. The integral as a whole has the same dimension as $x$ times $y$:

$$
\left[ \int\limits_{a}^b
 \; y \, \mathrm{d}x \right] = [yx] \tag{7.5}
$$

and for multiple integrals

$$
\left[ \iiint \; y \, \mathrm{d}x_1 \, \mathrm{d}x_2 \, \mathrm{d}x_3 \right] = \left[ yx_1 x_2 x_3 \right] \tag{7.6}
$$

Correct equations are dimensionally homogeneous. This means that the dimension of all terms in the equation are the same. [[Bernoulli's Equation]] is dimensionally homogeneous because all terms have the same dimension length $L$, which in the SI-system has the unit (m):

$$
{\underbrace{\vphantom{\frac{v^2}{2g}}{H}}_{\text{L (m)}}} = {\underbrace{\frac{v^2}{2g}}_\text{L (m)}} + {\underbrace{\vphantom{\frac{v^2}{2g}}{\frac{p}{\rho g}}}_{\text{L (m)}}} + {\underbrace{\vphantom{\frac{v^2}{2g}}{z}}_{\text{L (m)}}} \tag{7.7}
$$

From this example above we can conclude that it is not possible to sum, subtract, or compare terms with different dimensions, but it is possible to multiple, divide, and raise to a power variables with different dimensions. Next to these functions we also have so-called transcendental functions such as the logarithm, exponential, trigonometric functions, etc. These functions only allow for dimensionless arguments. We will make use of these properties of dimensional variables to derive relations between these variables. 

---
# 7.3 Indicial method
The merits of dimensional analysis can be explained by describing the procedure to set up experimental research aimed at obtaining a predictive formula for the friction factor $f$. Because if its intuitive appeal, the indicial method will be adopted here, whereas in the subsequent section a more efficient (but less transparent) procedure is introduced. 

The variables that may influence friction include mean velocity $\bar{v}$, depth $d$, water density $\rho$, viscosity $\mu$, a characteristic protrusion length of the wall roughness $k$, and spacing of the roughness elements $k'$. The objective is to find a function $\phi$ relating the friction factor and all other variables:

$$
\phi (f, \bar{v}, d, \rho, \mu, k, k') = 0 \tag{7.8}
$$

Finding such a relation is quite challenging, especially since have six independent variables. This would require exploring a 6-dimensional parameter space leading to a prohibitive number of experiments. This function, however, must adhere to the dimensional rules we described above. We can make use of that knowledge to simplify this function.

The function we aim to find might contain sums, subtractions, and other mathematical functions. Regardless of the form of this function, we know it must adhere to the properties we found earlier: terms that are summed should have the same dimensions. In other words, we want to combine the above variables in such a way that they have equal dimensions. Furthermore, to allow for the use of transcendental functions we require them to be dimensionless.

Therefore, we seek a way to combine the variables in the above function such that they form dimensionless numbers. The only possible way to combine variables of different dimensions is in a multiplicative way (multiplying, dividing, and raising to a power):

$$
f \bar{v}^m d^b \mu ^r k^s k'^t = K \tag{7.10}
$$

We equate this to an unknown dimensionless number $K$. Herein, $m, b, q, r, s$ and $t$ are unknown powers. With this, a multiplicative relation is established between the variables. The dimensions of the parameters in our model can be expressed in terms of three of those fundamental dimensions