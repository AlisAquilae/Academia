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
# 5.1 Introduction
We have discussed methods to solve ordinary differential equations (ODEs) by means of separation of variables and variation of constants. In practice, the scope of these so-called analytical methods is limited. Therefore it may be necessary to resort to numerical approximation methods. In this chapter we discuss simple methods to approximate the solution $u(t)$ of the initial value problem

$$
\left\{
\begin{array}{ll}
u'(t) &= f(t,u(t)) \\
u(t_0) &= u_0
\end{array}
\right.
$$

# 5.2 Simple Numerical Methods for Differential Equations

## 5.2.1 Difference Quotients
Numerical approximations of function derivatives are seldom computed for their own sake. However, numerically approximated derivatives do have important applications, specifically in the context of numerical solution of differential equations

The simplest formulas to numerically approximate a derivative are derived straight-forward from the definition of the derivative, the differential quotient

$$
\lim\limits_{h \to 0} \frac{u(t+h) -u(t)}{h} = u'(t)
$$

The numerical approximation is found simply by omitting the limiting process; thus, the differential quotient is approximated with the difference quotient. 

$$
\frac{u(t+h)-u(t)}{h} \cong u(t)
$$

now with $h$ a "fixed" number. 

The approximation error decreases with decreasing $h$. This is underpinned by the following property: for $h$ small enough, the errors in the forward difference quotient is

$$
u'(t) - \frac{u(t+h)-u(t)}{h} \cong -\frac{1}{2} hu''(t)
$$

We conclude that for a smooth function, the error of the difference quotient is almost proportional to $h$.

>[!Note]
>Notice that the proportionality factor $\frac{1}{2} u''(t)$ is usually unknown

