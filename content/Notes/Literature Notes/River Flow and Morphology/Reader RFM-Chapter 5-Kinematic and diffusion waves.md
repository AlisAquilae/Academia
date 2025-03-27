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

This chapter introduces simplifications of the St-Venant equations resulting in the so-called **kinematic** and **diffusion** equations. Apart from being useful themselves, the study of these leads also to a better understanding of essentials of the St-Venant equations in general. The reason for this is that these equations capture the most important characteristics of the movement of flood waves through natural rivers. Therefore they are often described as flood routing methods. 

In this chapter we use the following form of the St-Venant equations (A and B, respectively):

$$
\begin{aligned}
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} &= 0 \\
\frac{\partial Q}{\partial t} + \frac{\partial Q \, u}{\partial x} &= g \, A \, \left(S_o - S_f - S_p \right)
\end{aligned}
$$


# 5.1 Introduction
The first of the St-Venant equations:

$$
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} = 0
$$

will be left untouched, as it expresses the conservation of mass. If one considers the momentum equation, however:

$$
\frac{\partial Q}{\partial t} + \frac{\partial Q \, u}{\partial x} = g \, A \, \left(S_o - S_f - S_p \right)
$$

one finds that in many practical situations, the terms in this equation systematically differ in magnitude. The following table illustrates this for real rivers.

![[Pasted image 20250326142743.png]]

From this table, one can draw the following conclusions:
1. In most practical situations, the gravity and the friction term are of the same order, and much larger than all the others. This makes:
   
   $$
   0 = S_o - S_f
   $$
   
   a good first approximation of the momentum equation
2. Of the other terms, the pressure term is the next in importance. This makes:
   
   $$
   0 = S_o - S_f - S_p
   $$
   
   a good second-order approximation of the momentum equation  

>[!Note]
>From the dimensionless form of the St-Venant equations as derived in Section 3.7.4, one can say that the formula above is a "$\text{Fr} = 0$" approximation. As for most long waves considered in these notes, the Froude number will be rather small: $\text{Fr} \ll 1$, the assumption above is also acceptable from this argument


Next sections study the flood models that follow from these two approximations. 

---
# 5.2 Kinematic wave
The wave model that follows from the first order approximation is called the [[Kinematic Wave Model]] and will be studied in this section

## 5.2.1 The $Q-a$ relationship
The first order approximation of the momentum equation:

$$
S_o  = S_f
$$

expresses the equilibrium between friction and gravity forces. The same equation was already discussed in Section 3.5.1, where it was used to study flow in equilibrium: situations where all flow characteristics (level, velocities, discharges) are the same everywhere (uniformity) and at all times (stationarity). Here we will use this relation in a dynamic context to study waves that do vary in space and time.

The basic formula was rewritten, either using the [[Chézy Equation|Chézy]] or [[Manning's Law|Manning]] formalism into

$$
\begin{aligned}
Q_e &= \sqrt{S_o} \, C \, A_e \, R_e^{1/2} \;\;\text{ : Chézy} \\
&= \frac{\sqrt{S_o}}{n} \, A_e \, R_e^{2/3} \;\;\text{ : Manning}
\end{aligned}
$$

In this both $A$ and $R$ are functions of the depth $a$. It shows that this first approximation results in a one-to-one relationship between depth $a$ and discharge $Q$.

The formula above was theoretically derived. In many cases, such a relationship is obtained from measurements. First, one measures in several situations (and thus for several depths $a$) the discharge (e.g. by measuring the flow velocity profile). The measurements are then connected by a smooth curve (often of the form $Q = \alpha \, a^{\beta}$).

We will use any one-to-one $Q-a$ relationship as a replacement of the momentum equation, regardless of whether this was theoretically derived from equilibrium or obtained by fitting. So, formally, we start from

$$
Q= Q_{\text{kin}}(a)
$$

where $Q_{\text{kin}}$ can stand for any (increasing) function of $a$. We can think of this relation as a first order approximation in general situations, or as an exact relation in equilibrium cases. Note that the existence of one-to-one $Q-a$ relationship implies a similar relation between the flow velocity $u$ and the depth $a$, as from

$$
u = \frac{Q}{A} = \frac{Q_{\text{kin}}(a)}{A(a)}
$$

In the formalism of Chézy and Manning, respectively:

$$
\begin{aligned}
u &= \sqrt{S_o} \, C \, R^{1/2} \\
&= \frac{1}{n} \sqrt{S_o} \, R^{2/3}
\end{aligned}
$$


## 5.2.2 The kinematic equation
The start for the derivation of the kinematic equation are the following equations (which can be thought of as simplifications of the St-Venant equations):

$$
\begin{aligned}
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} &= 0 \\
Q &= Q_{\text{kin}}(a)
\end{aligned}
$$

Applying the chain rule gives

$$
\begin{aligned}
\frac{\partial Q}{\partial x} &= \frac{\partial Q_{\text{kin}}}{\partial t} \, \frac{\partial a}{\partial x} \\
\frac{\partial A}{\partial t} &= \frac{\partial A}{\partial a}\, \frac{\partial a}{\partial t} \\
&= b \frac{\partial a}{\partial t}
\end{aligned}
$$

Substituting this in the mass conservation equation:

$$
\begin{aligned}
b \frac{\partial a}{\partial t} + \frac{\partial Q_{\text{kin}}}{\partial a} \, \frac{\partial a}{\partial x} &= 0 \\
\frac{\partial a}{\partial t} + \frac{1}{b} \frac{\partial Q_{\text{kin}}}{\partial a} \, \frac{\partial a}{\partial x} &= 0
\end{aligned}
$$

Which results finally in the **Kinematic wave equation**:

>[!Important]
>
>$$
>\frac{\partial a}{\partial t} + c \frac{\partial a}{\partial x} = 0
>$$
>
>with
>
>$$
>c = \frac{1}{b(a)} \frac{\partial Q_{\text{kin}}}{\partial a}
>$$


This quantity $c$, which has the dimension of velocity, is called the **Kinematic wave celerity** or the celerity for short.

>[!Note]
>Another well-known way of writing the celerity results in
>
>$$
>\begin{aligned}
>c &= \frac{1}{b(a)} \frac{\partial Q_{\text{kin}}}{\partial a} \\
>&= \frac{1}{\frac{\partial A}{\partial a}} \frac{\partial Q_{\text{kin}}}{\partial a} \\
>&= \frac{\partial Q_{\text{kin}}}{\partial A}
>\end{aligned}
>$$
>
>which is called in this form [[Seddon's Law]]


## 5.2.3 Linearised kinematic equation
The kinematic wave equation is a non-linear differential equation, as the celerity is in general a function of the depth:

$$
\frac{\partial a}{\partial t} + c(a) \frac{\partial a}{\partial x} = 0
$$

As linear differential equations are mathematically much easier to solve, one often linearises the constituent equations. For this purpose, one chooses a constant reference depth $a_0$ and writes:

$$
\frac{\partial a}{\partial t} + c(a_0) \frac{\partial a}{\partial x} = 0
$$

where

$$
c(a_0) = \frac{1}{b(a_0)}\frac{\partial Q_{\text{kin}}}{\partial a} (a_0)
$$

is now a constant, only depending on the reference depth $a_0$. The kinematic wave equation in this form is known as the **Linear kinematic wave equation**.

## 5.2.4 Kinematic characteristics
The kinematic equations can be analysed by the technique of characteristics as given in Section 4.2

For the linearised kinematic equation, one can state

>[!Quote]
>The water level travels with speed $c(a_0)$


This is graphically illustrated by Figure 5.3. The paths that the depth follow are plotted in the $x-t$ plane. They are all parallel as they all have the same speed. From this follows that in a linear kinematic model, the form of the wave remains unchanged as it travels downstream. 

![[Pasted image 20250327155354.png]]

For the general non-linear kinematic equation, one can formulate the analysis by characteristics as

>[!Quote]
>the depth $a$ that exists at time $t$ at place $x$ can be found a time $\Delta t$ later at a place $x(a) \Delta t$ downstream

or also

>[!Quote]
>every depth $a$ travels with its own speed $c(a)$ downstream


This is illustrated in Figure 5.4. The non-constant speed results in non-parallel characteristics.

![[Pasted image 20250327155647.png]]

As $c(a)$ is in general an increasing function of $a$, higher water levels travel faster than lower ones.

For the form of the wave, one can draw the following conclusions:
- Each depth travels without attenuation: the highest water level will arrive downstream with the same height
- The fact that higher depths travel faster make that the wave front gets steeper and the wave tail fatter. This would in the end also lead to the impossible situation that one fast water level passes a slower moving one, proving that the kinematic approach , although initially may be a good approximation, is ultimately physically unrealistic. What happens in reality is that when the water front gets very steep, the pressure slope or depth slope can no longer be neglected. This will be worked out in Section 5.3

## 5.2.5 Celerity versus flow velocity
The celerity $c$ can be interpreted as the (kinematic) speed of a wave. $c$ is the speed of the wave, i.e. a form, and not of the water itself as this has a flow velocity $u$. Waves travel at a different speed that then water, usually faster. 

---
# 5.3 Convection diffusion wave
This section discusses the second order approximation to the St-Venant equations. The resulting model is called the **diffusion** or **convection-diffusion** equation, or even shorter the cD-wave.

This second order is really needed if one wants to study floods in natural rivers. 

## 5.3.1 The $Q_{\text{dif}}$ formula
A second order approximation of the momentum equation:

$$
0 = S_o - S_f - S_p
$$

expresses the equilibrium between gravity, friction and pressure forces by the corresponding slopes. Using the Manning form of the friction, this becomes

$$
0 = S_o - \frac{n^2 \, Q^2}{A^2 \, R^{4/3}} - S_p
$$

which leads to:

$$
Q = \frac{1}{n} S_o^{1/2} \, A \, R^{2/3} \, \left(1 - \frac{S_p}{S_o} \right)^{1/2}
$$

This shows that discharge $Q$ is not only a function of depth $a$ but also of the depth slope $S_p = \partial a / \partial x$

Part of the formula is similar to the kinetic one. This can be used to write:

$$
\begin{aligned}
Q_{\text{dif}}(a, S_p) &= Q_{\text{kin}}(a) \left( 1 - \frac{S_p}{S_o} \right)^{1/2} \\
&= Q_{\text{kin}}(a) \, \mathfrak{S}^{1/2}
\end{aligned}
$$

The last factor $\mathfrak{S}^{1/2}$ is a pressure-correction to the kinematic discharge. As the depth is mostly in first order approximation parallel to the bottom, this correction term is usually approximately 1. 

One can gain more insight into this correction as follows.

>[!Warning]
>Skipped the derivation


$$
\mathfrak{S} = \frac{1}{S_o} \left| \frac{\partial h}{\partial x} \right|
$$

where $h$ is the water height measured with respect to a reference horizontal (this in contrast to $a$ which is the water height measured with respect to the bottom of the river). These different types of slopes are illustrated in Figure 5.6. In words:

$$
\mathfrak{S} = \frac{\text{water surface slope w.r.t. horizontal}}{\text{bottom slope w.r.t. horizontal}}
$$


![[Pasted image 20250327162117.png]]


## 5.3.2 The $cD$-equation
The start for the derivation of the $cD$-equation are the following equations:

$$
\begin{aligned}
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} &= 0 \\
Q &= Q_{\text{diff}} (a, S_p) = Q_{\text{kin}}(a) \, \mathfrak{S}^{1/2}
\end{aligned}
$$


>[!Warning]
>Skipped the derivation


This results finally in the $cD$-wave equation:

$$
\begin{aligned}
\frac{\partial a}{\partial t} + c \frac{\partial a}{\partial x} - D \frac{\partial^2 a}{\partial x^2} &= 0 \\
c &= \frac{\mathfrak{S}^{1/2}}{b} \frac{\partial Q_{\text{kin}}}{\partial a} \\
D &= \frac{Q_{\text{kin}}}{2 S_o \, b \, \mathfrak{S}^{1/2}}
\end{aligned}
$$


In this $c$ is again the celerity as discussed in the kinematic section, although the formula is a bit different. 

The new coefficient $D$ is called the **diffusion coefficient**. Its meaning will be investigated in the next sections. The minus sign in the right hand side of the definition of $D$ was introduced to make $D$ positive.

## 5.3.3 General description of the $cD$-equation
One way of getting insight in the workings of the $cD$-equation is by investigating how a general wave $a$ changes in small time interval $\Delta t$. One can show using a second order Taylor expansion that for $\Delta t \to 0$ the following expression converges to the solution of the linear $cD$-equation:

$$
a(t+\Delta t, x) \approx \frac{a(t, x-c(t, x)\Delta t + \sqrt{2D(t,x)\Delta t}) + a(t, x-c(t,x)\Delta t - \sqrt{2D(t,x)\Delta t})}{2}
$$

where $c$ and $D$ were calculated in the $(t,x)$ point:

$$
\begin{aligned}
c(t,x) &= c \left(a(t,x), \frac{\partial a}{\partial x}(t,x) \right) \\
D(t,x) &= D \left(a(t,x), \frac{\partial a}{\partial x}(t,x) \right)
\end{aligned}
$$

This allows for the following description: in a small time interval $\Delta t$
- The wave travels over a distance $c \Delta t$ downstream. This is sometimes called the **convection step** (Figure 5.7)
- After this convective movement, an averaging step performed by replacing the depth by the average of levels a distance $\sqrt{2D\Delta t}$ upstream and $\sqrt{2D\Delta t}$ downstream (Figure 5.8)

The combination of both results in a shifted collapsed form, as in Figure 5.9

![[Pasted image 20250327163419.png]]

![[Pasted image 20250327163329.png]]


## 5.3.4 Linearised $cD$-equation

The expressions for $c$ and $D$ are complex functions of $a$ and $S_p = \frac{\partial a}{\partial x}$, making the $cD$-equation highly nonlinear. They become more transparent when one approximated them by linearised versions. 

>[!Warning]
>Skipped the derivation


The linearised $cD$-equation reads as follows:

$$
\frac{\partial a}{\partial t} + c(a_0) \frac{\partial a}{\partial x} - D(a_0) \frac{\partial^2 a}{\partial x^2} = 0
$$

where $c(a_0)$ and $D(a_0)$ are now constants

## 5.3.5 Analytical solutions of the linearised $cD$-equation
The linearised $cD$-equation

$$
\frac{\partial a}{\partial t} + c(a_0) \frac{\partial a}{\partial x} - D(a_0) \frac{\partial^2 a}{\partial x^2} = 0
$$

has analytical solutions. A simple but illustrative case is given by (see also Figure 5.10)

$$
a(t,x) = \alpha + a_{\text{max}} \, e^{-\frac{D(a_0)}{L^2} t} \, \cos \left(\frac{x - c(a_0) t}{L} \right) 
$$

In this solution we see the two main principles of the $cD$-equation:
1. The "$x - c(a_0)t$" term shows the translation or the kinematic movement of the wate with celerity $c(a_0)$: the higher the celerity, the faster it moves
2. The "$e^{-\frac{D(a_0)}{L^2} t}$" shows how, due to the diffusion part, the cosine function damps out. This is also called the **attenuation** of the wave. The larger the $D$ and the smaller the wave length $L$, the larger the dampening

![[Pasted image 20250327165752.png]]

## 5.3.6 Time transfer function
The linearised $cD$-equation also allows a direct answer (without solving the differential equation) to the following problem:

- Given the values of $a(t_0, x)$ for all $x$ and a time $t_1 \gt t_0$
- Calculate the values of $a(t_1, x)$ for all $x$

The direct answer can be given by means of an integral:

$$
a(t1, x) = \int\limits_{- \infty}^{+\infty} \, \mathrm{d} \zeta \, a(t_0, \zeta) \, T (x-\eta, t_1 - t_0)
$$

where the so-called **transfer function** is given by

$$
T(\zeta, \Delta t) = \frac{1}{\sqrt{4 \pi D \Delta t}} \, e^{-\frac{(\zeta - c \Delta t)^2}{4D\Delta t}}
$$

The transfer function is the well-known Gauss function, classically defined by its mean (here $c \Delta t$) and its standard deviation (here $\sqrt{2D\Delta t}$).

The integral states that any depth at time $t_1$ at place $x$ can be found as a weighted average of values at time $t_0$, where the values around the point $(t_0, x-c(t_1 - t_0))$ get the most weight. The smaller $D$ the more weight is concentrated around $(t_0, x-c(t_1 - t_0))$


## 5.3.7 Space transfer function
In the same spirit, the linearised $cD$-equation also allows a direct answer to the following practical problem:
- Given the depths in an upstream point at $x_u: a(t, x_u)$, for all $t$
- Calculate the depths in a downstream point at $x_d \gt x_u$

The solution is in this case given by a space transfer function:

$$
a(t, x_d) = \int\limits_0^{\infty} \, \mathrm{d} \tau \, a(t - \tau, x_u) \, T (\tau, x_u - x_d)
$$

where the transfer function is now given by

$$
T(\tau, \Delta x) = \frac{\Delta x}{2 \sqrt{\pi D \tau ^3}} \, e^{-\frac{(\Delta x - c \tau)^2}{4D\tau}}
$$

One may think of the space transfer function as the wave that would pass the measuring point $\Delta x$ if at time $0$ at place $0$ an "instantaneous unit wave" would be released. 


The large advantage of this approach is that one does not need to calculate any intermediate values. Only values at the upstream point and a global assessment of the values $c$ and $D$ is needed to solve the problem. 


## 5.3.8 The passage of a wave
In this section, we will focus on the analysis of the passage of a $cD$-wave in one particular point "$x = L_o$" on the river (e.g. a gauging station). For this analysis, it is important to make a sharp distinction between temporal and spatial properties. The "wave top" e.g. can be interpreted in two ways:
- The "spatial wave top" is for each time $t$ defined as that place in the whole trajectory where the highest depth (w.r.t. the bottom) is measured. The trajectory in space-time of the spatial wave top is indicated in Figure 5.12 by a dotted line. The statement "the wave top passed the gauging station $L$ at time $t$" means that at that time $t$ the spatial wave top happened to be just at $x = L_0$
- The "temporal wave top" is for each $x$ along the river as that time when the highest depth was measured at that point. 

![[Pasted image 20250327170659.png]]

In this analysis we pay special attention to the formula

$$
\begin{aligned}
Q_{\text{dif}} \left(a, \frac{\partial a}{\partial x} \right) &= Q_{\text{kin}} (a) \, \mathfrak{S}^{1/2} \\
\mathfrak{S}^{1/2} &= \left(1 - \frac{S_p}{S_o} \right) = \left( 1 - \frac{1}{S_o} \frac{\partial a}{\partial x} \right)
\end{aligned}
$$

At time $t_1$:
- The spatial wave top is upstream of the point $L_o$. Therefore, at the point $L_o$ self
  
  $$
  \frac{\partial a}{\partial x}(t_1, L_o)
  $$