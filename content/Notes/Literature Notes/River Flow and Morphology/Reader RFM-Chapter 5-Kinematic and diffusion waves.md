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
   
2. 