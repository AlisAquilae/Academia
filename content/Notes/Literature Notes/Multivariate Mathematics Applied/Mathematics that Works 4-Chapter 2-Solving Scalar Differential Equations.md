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
>>
>>Notice the factor $\frac{1}{2}$ before the $\ln$!
>
>We need only one integration constant, here $K$.
>
>**Step 5**: In order to solve this for $x$, we first remove the factor $-\frac{1}{2}$ be multiplying with $-2$. Next, we take exponentials on the left and right hand side
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

>[!Note]
>Time invariant is autonomous

>[!Note]
>Linearity is with reference to the unknown variable, not the rest

>[!Note]
>All autonomous are automatically separable

>[!Note]
>If it is linearly homogeneous, it is automatically separable

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
>x'(t)=-2x(t)+3t, \, x(0)=1
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
>u'(t)e^{-2t} = 3t \Rightarrow u'(t) = \frac{3t}{e^{-2t}} = 3te^{2t}
>$$
>
>and we find $u(t)$ as the antiderivative of $u'(t)$
>
>$$
>u(t) = \int u'(t)dt = \int 3te^{2t}dt = \frac32 (t-\frac12)e^{2t} + C
>$$
>
>Thus, the general solution is
>
>$$
>x(t)=u(t)e^{-2t} = [\frac32(t-\frac12)e^{2t} + C]e^{2t} = \frac32t - \frac34 + Ce^{-2t}
>$$
>
>We select the solution that satisfies the initial condition $x(0)=1$
>
>$$
>x(t)=\frac32 t -\frac34 + Ce^{-2t}
>$$
>
>**Step 3**: We select the solution that satisfied the initial condition $x(0)=1$
>
>$$
>x(t)=\frac32t - \frac34 + Ce^{-2t}
>$$
>
>$$
>x(0)=0-\frac34 + C \, \text{ and } \, x(0)=1
>$$
>
>$$
>-\frac34 + C = 1 \Rightarrow C = \frac74
>$$
>
>Hence, the solution of our initial value problem is
>
>$$
>x(t)=\frac32t - \frac34 + \frac74 e^{-2t}
>$$


Thus, we find the following algorithm for linear inhomogeneous differential equations, also known as the variation of constants:
1. Using separation of variables, find a non-zero solution $x_h(t) of the corresponding homogeneous equation $x'(t) = a(t)x(t)$. Its multiples $C x_h(t)$ constitute the general solution of the homogeneous equation
2. Construct the general solution of the inhomogeneous differential equation:
   a.  Write the solution of the inhomogeneous equation as $x(t)=u(t)x_h(t)$
   b. Substitute this into the inhomogeneous differential equation, and derive an expression for $u'(t)$
   c. Use antidifferentiation to obtain $u(t)$, including a new integration constant
   d. Use this to find the general solution $x(t)=u(t)x_h(t)$ of the inhomogeneous differential equation
3. If an initial condition is specified, use it to find the integration constant

## 2.5.4 Cascade Models
In [[Mathematics that Works 4-Chapter 1-Modelling Time-Dependent Processes#1.5 Modelling with Differential Equations|Chapter 1.5]] we saw examples of models in which the rates of change of the state variables mutually depend on each other. We obtained a system of differential equations, to be solved simultaneously. For instance, in a Lotka-Volterra predator-prey model, we cannot solve for the prey without solving for the predator, nor the other way around. 

In other cases, we may find that the rate of change of the first variable $x_1(t)$ does not depend on the other state variables $x_2(t), x_3(t), \dots$. In this case we may try to solve for $x_1(t)$ independently, that is, without knowing $x_2(t), x_3(t), \dots$. If we succeed, we are left with a system of differential equations for $x_2(t), x_3(t), \dots$. This system is simpler than the original one, because it contains one variable less. 

It may happen that we can continue in the same way. In this case, the system

$$
\begin{aligned}
x_1'(t)&= f_1(t, x_1(t), x_2(t), \dots, x_n(t)) \\
x_2'(t)&= f_2(t, x_1(t), x_2(t), \dots, x_n(t)) \\
& \vdots \\
x_n'(t)&= f_n(t, x_1(t), x_2(t), \dots, x_n(t))
\end{aligned}
$$

can also be described by

$$
\begin{aligned}
x_1'(t) &= f_1(t, x_1(t)) \\
x_2'(t)&= f_2(t, x_1(t), x_2(t)) \\
& \vdots \\
x_n'(t)&=f_n(t, x_1(t), x_2(t), \dots, x_n(t))
\end{aligned}
$$

The equation for $x_1$ is a scalar differential equation, which we may try to solve. If we succeed, $x_1(t)$ becomes a known function. We thus obtain a scalar differential equation for $x_2$, which we may try to solve, and so on. A system of this kind is called a **cascade model**

---
# 2.8 Higher Order Differential Equations and Complex Numbers
## 2.8.1 Differential Equations of Higher Order
A differential equation of order $n$ is an equation of the form

$$
x^{n}(t) = f(t, x(t), x'(t), \dots, x^{(n-1)}(t))
$$

This equation expresses the nth derivative of $x(t)$ as a function $f$ of $t$, $x(t)$ and the first $n-1$ derivatives of $x(t)$. This differential equation is time-invariant (or autonomous) if the function $f$ does not depend explicitly on the independent variable $t$; we then may write

$$
x^n(t)=f(x(t), x'(t), \dots, x^{(n-1)}(t))
$$

The differential equation is linear if

$$
f(x(t), x'(t), \dots, x^{(n-1)}(t)) = a_0(t)x(t) + a_1(t)x'(t) + \dots + a_{n-1}(t)x^{n-1}t + b(t)
$$

The functions $a_0(t), a_1(t), \dots, a_{n-1}(t)$ are coefficients of the linear differential equation and $b(t)$ is the inhomogeneous term. If $b(t)=0$ for all $t$, then the linear differential equation is homogeneous. If not, it is inhomogeneous.

## 2.8.2 Constant Coefficients: The Method of Characteristic Roots
A linear homogeneous differential equation with constant coefficients can easily be solved using the characteristic equation

>[!Example]
>We solve the second order initial value problem
>
>$$
>x''(t)+3x'(t)+2x(t)=0 \, , \, x(0)=1 \, , \, x'(0)=0
>$$
>
>using trial solutions $u(t)=e^{\lambda t}$ for the differential equation. For such a trial solution, we find $u'(t)=\lambda e^{\lambda t}$ and $u''(t)=\lambda^2 e^{\lambda t}$. So
>
>$$
>\begin{aligned}
>u''(t)+3u'(t)+2u(t) &= \lambda^2 e^{\lambda t} + 3\lambda e^{\lambda t} + 2e^{\lambda t} \\
>&= (\lambda^2 + 3\lambda + 2)e^{\lambda t} = 0
>\end{aligned} 
>$$
>
>Division by $e^{\lambda t}$ gives the characteristic equation
>
>$$
>$\lambda^2 + 3\lambda + 2 =0
>$$
>
>which has solutions
>
>$$
>\lambda_1 = -1 \, \text{ and } \, \lambda_2 = -2
>$$
>
>Hence, the basis solutions are $u(t)=\exp(\lambda_1 t)=e^{-t}$ and $v(t)=\exp(\lambda_2 t) = e^{-2t}$
>
>Because the differential equation is linear, any linear combination $x(t)=\alpha u(t) + \beta v(t)$ is also a solution. The coefficients $\alpha$ and $\beta$ follow from the initial conditions
>
>$$
>\left.
>\begin{array}{ll}x(t)=\alpha u(t) + \beta v(t) = \alpha e^{-t} + \beta e^{-2t} \Rightarrow \underset{t \to 0} \alpha + \beta = 1
>$$









