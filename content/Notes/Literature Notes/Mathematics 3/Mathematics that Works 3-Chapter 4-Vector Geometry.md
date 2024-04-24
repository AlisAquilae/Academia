---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 3]]"]
Draft: 
Status: To Revisit
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

If $x$ and $y$ are the position vectors of $X$ and $Y$ respectively, the segment $XY$ has the same length and the same direction as the vector $y-x$. Therefore, the distance between the points $X$ and $Y$ is

$$
|y-x|
$$

#### 4.1.3 Angle
Just as the length of a vector, the angle between two vectors is closely related to the inner product. 

For any two vectors $x$ and $y$ in $R^n$, the angle $\alpha$ between $x$ and $y$ satisfies

$$
(x,y)=|x||y|\cos(\alpha)
$$
Be extension, the angle $\alpha$ between the vectors $x$ and $y$ satisfies

$$
\cos(\alpha)=\frac{(x,y)}{|x||y|}
$$

>[!Example]
>The angle $\alpha$ between vectors
>
>$$
>x=
>\begin{pmatrix}
>1\\2
>\end{pmatrix}
>, y=
>\begin{pmatrix}
>3\\1
>\end{pmatrix}
>$$
>
>satisfies
>
>$$
>\cos(\alpha)=\frac{5}{\sqrt{5}\sqrt{10}}=\frac12 \sqrt{2}
>$$
>
>So $\alpha$ is 45$\degree$

An important special situation is when two vectors are **orthogonal (perpendicular)**. Again, we use the inner product. Two vectors are orthogonal if $(x,y)=0$

#### 4.1.4 The Distance Between a Vector and a Subspace
Imagine a subspace $V$ as well as a vector $y$ not belonging to $V$. Now, we set out to find the vector $y_v$ in $V$ that is the closest to $y$ among all vectors in $V$. This is called the **projection** of $y$ onto $V$.
- The projection $y_v$ of $y$ onto $V$ is such that $y-y_v$ is orthogonal to any vector $v$ in $V$. 
- The distance of $y$ to $V$ is $|y-y_v|$, where $y_v$ is the projection of $y$ onto $V$

---
### 4.2 Projection and Regression
Many mathematical problems can be reduced to finding the vector $y_v$ in a subspace $V$ that gas the smallest distance to a given vector $y$. This vector $y_v$ is called the **projection** of $y$ onto subspace $V$, and it is the best approximation of $y$ with a vector $V$. We already found that $y_v$ is such that $y-y_v$ is orthogonal to any vector $v$ in $V$. Now we will use this property to compute $y_v$. 

>[!Warning]
>I skipped the justification and went straight for the conclusion

The projection $y_l$ of a vector $y$ in $R^n$ onto the line $l$ spanned by the vector $a$ in $R^n$ is $y_l=\alpha a$, where $(a,a)\alpha = (a,y)$

>[!Example]
>We consider two vectors $y$ and $a$ in $R^3$
>
>$$
>y= \begin{pmatrix}
>3 \\ 1 \\ 2
>\end{pmatrix} \text{ and } a=\begin{pmatrix}
>1\\1\\0
>\end{pmatrix}
>$$
>
>and we look for the projection $y_l$ onto the line $l$ spanned by $a$
>
>$$
>l: x=\lambda a
>$$
>
>This projection $y_l$ is a multiple of $a$, say $y_l=\alpha a$. Now we have to choose $\alpha$ such that the difference vector $y-y_l$ is orthogonal to $l$, that is to say, such that $y-y_l$ is orthogonal to $a$
>
>We now use the formula mentioned above: $(a,a)\alpha = (a,y)$. With $(a,a)=2$ and $(a,y)=4$ we find that $\alpg


