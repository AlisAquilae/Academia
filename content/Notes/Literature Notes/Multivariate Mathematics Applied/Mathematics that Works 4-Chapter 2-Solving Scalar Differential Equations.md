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
# 2.2 Time-Invariant Scalar Differential Equations
## 2.2.1 Separation of Variables

>[!Example]
>We look for the solution $x(t)$ of the initial value problem
>
>$$
>x'(t) = kx(t), x(0)=2
>$$
>
>**Step 1**: We bring the factor $x(t)$ to the left hand side of the equation, which is realised by dividing the differential equation left and right by $x(t)$. The result is
>
>$$
>\frac{1}{x(t)}x'(t)=k
>$$
>
>**Step 2**: We integrate left and right with respect to $t$
>
>$$
>\int \frac{1}{x(t)} x'(t)dt = \int k dt
>$$
>
>**Step 3**: In the integral on the left, we exchange the integration variable to $x$ by using substitution, with $dx=x'(t)dt$. Thus,
>
>$$
>\int \frac{1}{x(t)}x'(t)dt = \frac{1}{x} dx = \int k dt
>$$
>
>**Step 4**: Solving these integrals, we obtain 
>
>$$
>\ln(|x|) = kt + K
>$$
>
>where $K$ is an arbitrary integration constant.
>
>**Step 5:** The resulting equation must be solved for $x$. To remove the natural logarithm we take exponentials (on the left and right hand side), which gives
>
>$$
>e^{\ln(|x|)} = e^{kt + K} = e^{kt}e^K
>$$
>
>We can drop the absolute values by admitting negative values for $C$. We now have obtained the general solution of the differential equation
>
>$$
>x(t) = Ce^{kt}
>$$
>
>Verify that the solution satisfies the differential equation for all $C$ and $t$
>
>**Step 6**: The constant $C$ is used to find the specific solution $x(t)$ that satisfies the initial condition. Substitution of $t=0$ into the general solution gives
>
>$$
>2 = x(0) = Ce^{k0} = C \Rightarrow C=2
>$$
>
>Hence, the solution of the initial value problem is $x(t)=2e^{kt}$

The differential equation $x'(t) = kx(t)$ is so common in all fields of science that it is useful to know the solution $x(t)=Ce^{kt}$ by heart

The method used above to solve the differential equation $x'(t) = kx(t)$ can be applied in principle to any time-invariant differential equation

$$
x'(y)=f(x(t))
$$

We can solve this differential equation by separation of variables. We divide both sides of the equation by $f(x(t))$ to find

$$
\frac{1}{f(x(t))}x'(t)=1
$$

We antidifferentiate the functions at both sides formally with respect to $t$:

$$
\int \frac{1}{f(x(t))}x'(t)dt = \int 1 dt
$$

By substitution we change to $x$ as integration variable in the left integral, using that $dx = x'(t)dt$. Thus, we find

$$
\int \frac{1}{f(x)}dx = t + K
$$

If we can find the remaining integral, we obtain an equation for $x(t)$

>[!Example]
>We look for a solution of the initial value problem
>
>$$
>x'(t) = 1-2x(t), x(0)=1
>$$
>
>**Step 1:** Separation of variables gives
>
>$$
>\frac{1}{1-2x(t)}x'(t)=1
>$$
>
>**Step 2**: By integration with respect to $t$ we get
>
>$$
>\int \frac{1}{1-2x(t)}x'(t)dt = \int 1 dt
>$$
>
>**Step 3**: Substituting $x$ for integration variable in the integral on the left yields
>
>$$
>\int \frac{1}{1-2x(t)}x'(t)dt = \int \frac{1}{1-2x}dx = \int 1 dt
>$$
>
>**Step 4**: Evaluation of these integrals gives the equation
>
>$$
>-\frac12 \ln(|1-2x|) = t + K
>$$
>
>>[!Note]
>>Notice the factor $\frac12$ before the ln!
>
>We need only one integration constant, here $K$.
>
>**Step 5**: In order to solve this for $x$, we first remove the factor $-\frac12$ be multiplying with $-2$. Next, we take exponentials on the left and right hand side
>
>$$
>e^{\ln(|1-2x)|} = e^{-2t-2K} = e^{-2t}e^{-2K}
>$$
>
>$$
>|1-2x(t)| = Ce^{-2t+}
>$$
>
>where $C = e^{-2K}$
>
>We can drop the absolute values by allowing $C$ to take negative values
>
>$$
>1-2x(t) = Ce^{-2t} \Rightarrow x(t) = \frac12(1-Ce^{-2t})
>$$
>
>Thus we have found the general solution of the differential equation
>
>**Step 6**: The constant $C$ is used to find the solution that satisfies the initial condition. For the solution of the above differential equation with $x(0)=1$ we find
>
>$$
>1=x(0)=\frac12(1-C) \Rightarrow C=-1
>$$
>
>Thus, the solution of the initial value problem is
>
>$$
>x(t)=\frac12(1+e^{-2t})
>$$


## 2.2.2 Special Case: The Logistic Differential Equation
The [[Logistic Differential Equation]] is the basis equation for population models.

The solutions of the logistic differential equation

$$
x'(t)=\frac{r}{K}(K-x(t))x(t)
$$

satisfy

$$
x(t)=\frac{K}{1+ce^{-rt}}
$$

>[!Note]
>For an explanation of how this solution was derived, see p.73 of the book. 


---
# 2.5 Time-Dependent Differential Equations
## 2.5.1 Separation of Variables
In the previous section, we applied the method of separation of variables to time-invariant differential equations. Here, we extent this method to a class of time-dependent differential equations. 

>[!Example]
>We look for the solution $x(t)$ of the initial value problem
>
>$$
>x'(t)=\sin(t)x(t), x(0)=3
>$$
>
>**Step 1**: We move the factor $x(t)$ from the right hand side to the left hand side of the equation by dividing the differential equation on the left and right hand side by $x(t)$, giving
>
>$$
>\frac{1}{x(t)}x'(t) = \sin(t)
>$$
>
>Now the variables are separated; the left hand side depends explicitly on $x$ only, while the right hand side depends on $t$ only. 
>
>**Step 2**: We integrate left and right hand side with respect to $t$. Thus,
>
>$$
>\int \frac{1}{x(t)}x'(t)dt = \int \sin(t)dt
>$$
>
>**Step 3**: in the integral on the left, we change the integration variable to $x$ by substitution:
>
>$$
>\int \frac{1}{x(t)}x'(t)dt = \int \frac{1}{x}dx = \int \sin(t)dt
>$$
>
>**Step 4**: Elaborating these integrals, we obtain
>
>$$
>\ln(|x|) = -\cos(t)+K
>$$
>
>where $K$ is an arbitrary constant. This equation is to be solved for $x$.
>
>**Step 5**: To remove the natural logarithm we take exponentials (left and right)
>
>$$
>e^{\ln(|x|)} = e^{\cos(t) + K} = e^Ke^{\cos(t)}
>$$
>
>so
>
>$$
>|x(t)| = Ce^{\cos(t)}
>$$
>
>where $C = e^K$
>
>We can drop the absolute values by admitting negative values for $C$, and we obtain
>
>$$
>x(t)=Ce^{\cos(t)}
>$$
>
>This is the general solution of the differential equation
>
>**Step 6**: The constant $C$ is used to make $x(t)$ satisfy the initial condition. For the solution with $x(0)=3$ we find
>
>$$
>3=x(0)=Ce \Rightarrow C=3e^{-1}
>$$
>
>So the solution of the initial value problem is $x(t)=Ce^{cos(t)} =3e^{-1}e^{\cos(t)} = 3e^{\cos(t)-1}$

A differential equation is called separable if it has the form 

$$
x'(t)=p(x(t))q(t)
$$

On the right hand side there is a product of two functions, the first of which is a function of the dependent variable $x(t)$ only, while the second one is a function of the independent variable $t$ only. This type of variable can be solved using separation of variables. 

## 2.5.2 Homogeneous Linear Differential Equations
A very important special case for separation of variables arises if $p(x)=x$; that is, if 

$$
x'(t)=q(t)x(t)
$$

This is a **linear homogeneous differential equation**. Applying the method above we find

$$
\int \frac1x dx = \int q(t)dt
$$

$$
\ln(|x(t)|) = \int q(t)dt
$$

$$
x(t)= \pm e^{\int q(t)dt}
$$

Even more specifically, for $q(t)$ we retrieve the **time-invariant linear homogeneous differential equation**

$$
x'(t)=ax(t)
$$

for which we rediscover the solution

$$
x(t)=e^{\int a dt} = e^{at + K} = Ce^{at}
$$


## 2.5.3 Inhomogeneous Linear Differential Equations: Variation of Constants
A linear inhomogeneous differential equation

$$
x'(t)=a(t)x(t)+b(t)
$$

can be solved with separation of variables only if $b(t)=ka(t)$ for some constant $k$. This is the case for example if $b(t)=0$ for all $t$ (then the equation is homogeneous) or if $a(t)=0$ and $b(t)=b$, both independent of $t$. In all other cases we use **variation of constants**

>[!Example]
>We set out to solve the initial value problem
>
>$$
>x'(t)=-2x(t)+3t, x(0)=1
>$$
>
>**Step 1**: The corresponding homogeneous differential equation
>
>$$
>x'(t)=-2xt
>$$
>
>is a standard equation. If necessary, we solve it using separation of variables to find 
>
>$$
>x(t)=Ue^{-2t}
>$$
>
>where $U$ is an integration constant
>
>**Step 2**: We construct the solution of the inhomogeneous differential equation using the method of variation of constants. To do so we replace constant $U$ with a function $u(t)$:
>
>$$
>x(t)=u(t)e^{-2t}
>$$
>
>This function we substitute into the complete (inhomogeneous) differential equation:
>
>$$
>(u(t)e^{-2t})' = -2(u(t)e^{-2t})+3t
>$$
>
>We elaborate this to
>
>$$
>u'(t)e^{-2t} + u(t)e^{-2t} \cdot -2 = -2u(t)e^{-2t}+3t
>$$
>
>The second term at the left hand side cancels the first term at the right. Hence,
>
>$$
>u'(t)e^{-2t} = 3t \Rightarrow u'(t) = \frac{3t}{e^{-2t}} = 3te^{2}
>$$

