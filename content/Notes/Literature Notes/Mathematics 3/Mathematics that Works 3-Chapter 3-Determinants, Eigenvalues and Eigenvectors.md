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
### 3.1 Determinants
#### 3.1.1 Determinants of 2x2 matrices
In $R^2$ we consider the vectors $a$ and $b$

$$
a=\begin{pmatrix}
a_1 \\ a_2
\end{pmatrix}
, b=\begin{pmatrix}
b_1 \\ b_2
\end{pmatrix}
$$

The area of the parallellogram spanned by the vectors $a$ and $b$ is $|a_1b_2 - a_2b_1|$

Inspired by the property we define the determinant of a $2\times 2$ matrix

The **determinant** of a $2\times 2$ matrix $A \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$ is the number

$$
\det(A)=a_{11}a_{22} - a_{21}a_{12}
$$

>[!Example]
>
>$$
>\det
>\begin{pmatrix}
>1 & -1 \\
>4 & 2
>\end{pmatrix} = 1 \cdot 2 - 4\cdot -1 = 6
>$$
>
>Consequently, the area of the parallellogram spanned by the columns of $A$ is $\det(A)$. 

This enables us to use the determinant in testing the columns for dependency. For any $2\times 2$ matrix $A$, $\det(A)=0$ implies that the columns of $A$ are dependent

#### 3.1.2 Determinants of 3x3 Matrices
We consider a 3x3 matrix

$$
A=\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$
We introduce the determinant $\det(A)$ by the following rule

$$
\det(A) = a_{11}\det
\begin{pmatrix}
a_{22} &
$$
