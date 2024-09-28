---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Multivariate Mathematics Applied]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Multivariate Mathematics Applied]]"]
---
# 4.2 The Convection-Diffusion Equation
## 4.2.1 Functions of Space and Time
In this chapter, we consider the evolution of processes in space and time. Examples are transport of matter (molecules, cells or organisms), possible in combination with (bio-)chemical reactions, heat transport, fluid flows, et cetera.

We shall model these processes with mathematical equations, which we formulate on the basis of transport laws and conservation laws. As a thread in this section, we use the example of the concentration $c$ of the substance in solution. However, similar results apply for the other above-mentioned applications. 

>[!Note]
>To keep things simple, we assume in this chapter that motion takes place in one direction only; we denote the spatial variable in this direction with $x$. 

## 4.2.2 Conservation Laws and the Balance Equation
The conservation law in all its various forms is the fundamental rule for the changes of a spatial distribution. The mathematical formulation of the conservation law is the balance equation. In simple words, this balance equation is formulated as follows:
- Consider a small domain
- Compute the change of the amount of substance in the domain: the amount of substance flowing in minus the amount flowing out, plus the amount of substance originating within the domain minus the amount that disappears

>[!Warning]
>The book gives a detailed derivation of the balance equation of concentration. I have skipped this part, since it serves as an example which we do not engage further with


## 4.2.3 Transport Laws: Convection, Diffusion and Dispersion
The balance equation derived above connects the rate of change of a concentration $c(x,t)$ to the flow density $J(x,t)$. Below we consider transport laws that state how the flow density $J(x,t)$ depends on the concentration $c(x,t)$. Contrary to the balance equation, which formulates a general bookkeeping principle based on mass conservation, the transport law depends on the nature of physical processes. Neglecting possible source terms, we consider three important cases

### 4.2.3.1 Convection
The particles are carried along by a flow (e.g. a liquid or gas flow). This process is called convection. If $v(x,t)$ is the flow velocity, then

$$
J(x,t) = v(x,t)c(x,t)
$$

Substitution in the balance equation gives

$$
\frac{\partial}{\partial t} c(x,t) = \frac{\partial}{\partial x} (v(x,t)c(x,t))
$$

This is the (one-dimensional) convection equation or transport equation. If the flow velocity $v$ does not depend on position $x$ or time $t$, then it reduces to

$$
\frac{\partial}{\partial t} c(x,t) = -v \frac{\partial}{\partial x} c(x,t)
$$


### 4.2.3.2 Diffusion
The particles move because of continuous random movements of individual molecules. This motion of individual particles is often called a random walk. The collective motion of all particles together is denoted with the term diffusion. It leads to a flow that is proportional to the differences in concentration

$$
J(x,t) = -D \frac{\partial}{\partial x}c(x,t)
$$

This relation is called Fick's Law; the proportionality constant $D$ is called the diffusion coefficient. 

Substitution of Fick's Law into the balance equation gives

$$
\frac{\partial}{\partial t}c(x,t)= \frac{\partial}{\partial x}\left(D \frac{\partial}{\partial x}c(x,t) \right)
$$

This is the (one-dimensional) diffusion equation. Often we assume that $D$ does not depend on $x$, and then it reduces to

$$
\frac{\partial}{\partial t}c(x,t)= D \frac{\partial^2}{\partial x^2}c(x,t)
$$

### 4.2.3.3 Dispersion
The particles move because of mutual 