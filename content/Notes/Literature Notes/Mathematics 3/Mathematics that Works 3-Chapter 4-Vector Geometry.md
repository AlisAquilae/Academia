---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 3]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
### 4.1 Angels and Distances
#### 4.1.1 Inner Product
In vector geometry, the length of a vector and the angle between two vectors are fundamental concepts. The key to express angle and length in terms of the coordinates of the vector(s) is the **inner product**

For any two vectors $x$ and $y$ in $R^2$,

$$
x=
\begin{pmatrix}
x_1 \\ x_2
\end{pmatrix}
, y=
\begin{pmatrix}
y_1 \\ y_2
\end{pmatrix}
$$

the inner product of $x$ and $y$ is the number

$$
(x,y)=x_1y_1+x_2y_2
$$

>[!Example]
>The inner product $(x,y)$ of
>
>$$
>x=
>\begin{pmatrix}
>1 \\ 4
>\end{pmatrix}
>, y=\begin{pmatrix}
>3 \\ -2
>\end{pmatrix}
>$$
>
>is $1\cdot 3 + 4 \cdot -2 = 3-8=-5$

The same goes for vectors in $R^n$. 

>[!Warning]
>If $x$ is a vector in $R^n$ and $y$ is a vector in $R^m$ with $m \neq n$, then the inner product of $x$ and $y$ is undefined!

>[!Info]
>The inner product satisfies some useful rules. These are (for vectors $x$, $y$ and $z$ in $R^n$ and for numbers $\lambda$ in $R$)
>- $(\lambda x,y)=\lambda (x,y)$
>- $(x,y)=(y,x)$
>- $(x+y,z)=(x,z)+(y,z)$

An inner product can also be written using a transpose vector. For any two vectors $x$ and $y$ in $R^n$ 

$$
x^Ty=(x,y)
$$

For any $n \times k$ matrix $A$ and any vectors $x$ in $R^k$ and $y$ in $R^n$,

$$
(Ax, y) = x, (A^Ty)
$$

#### 4.1.2 Length and Distance
The length $|x|$ of a vector $x$ in $R^2$,

$$
x=\begin{pmatrix}
x_1 \\ x_2
\end{pmatrix},
$$

can be computed using the Pythagorean Theorem

$$
\begin{aligned}
|x|^2 &= x_1^2 + x_2^2 \\
&= (x,x) \\
|x| &= \sqrt{x_1^2+x_2^2} \\
&= \sqrt{(x,x)}
\end{aligned}
$$

>[!Example]
>The length of the vector 
>
>$$
>x=
>\begin{pmatrix}
>1 \\ 4
>\end{pmatrix}
>$$
>
>is $|x|=\sqrt{1^2 + 4^2}=\sqrt{17}$

This also works for $R^n$

The **length**, also called *Euclidian Length*, of a vector is the number $\sqrt{(x,x)}$


