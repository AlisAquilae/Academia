---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Mathematics 3]]"]
Draft: 
Status: Done
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
a_{22} & a_{23} \\
a_{32} & a_{33}
\end{pmatrix} - a_{21}\det 
\begin{pmatrix}
a_{12} & a_{13} \\
a_{32} & a_{33}
\end{pmatrix} + a_{31} \det
\begin{pmatrix}
a_{12} & a_{13} \\
a_{22} & a_{23}
\end{pmatrix}
$$

The determinant $\det(A)$ of the $3\times 3$ matrix $A$ is the number

$$
\det(A) = a_{11}a_{22}a_{33} - a_{11}a_{32}a_{23} - a_{21}a_{12}a_{33} + a_{21}a_{32}a_{13} + a_{31}a_{12}a_{23} - a_{31}a_{22}a_{13}
$$

The volume $V$ of the parallelepiped spanned by the columns of a $3\times 3$ matrix $A$ satisfies $V=|\det(A)|$. The columns of $A$ are dependent exactly if $\det(A)=0$

In practice, we usually carry out the expansion as follows
- Select a column or row to expand from and follow the procedures below in the order moving along the row or column
- The $2\times 2$ matrix $A_{11}$ associated with $a_{11}$ arises by deleting from $A$ the row and column that contain $a_{11}$ (these are the first row and the first column); compute $a_{11}\det(A_{11})$
- Follow the same procedure along the row or column you chose to expand upon
- Compute the formula

>[!Tip]
>The plusses and minuses in the expansion of a determinant are distributed over the matrix according to the chessboard pattern below:
>
>$$
>\begin{pmatrix}
>+ & - & + \\
>- & + & - \\
>+ & - & +
>\end{pmatrix}
>$$

Here we list some properties of the determinant
- If one column of $A$ is multiplied by a number $\lambda$, $\det(A)$ is multiplied by $\lambda$ as well
- If to one column of $A$ a multiple of another column $A$ is added, $\det(A)$ remains unchanged
- If two columns of the matrix $A$ are interchanges, $\det(A)$ changes sign
- $\det(A^T)=\det(A)$
- For any two $n\times n$ matrices $A$ and $B$, $\det(AB) = \det(A) \det(B)$

---
### 3.2 Eigenvalues and Eigenvectors
#### 3.2.1 Eigenvalues and Eigenvectors
Given the $2\times 2$ matrix $A$ and the vector $U$, 

$$
A=\begin{pmatrix}
-2 & 2 \\
2 & 1
\end{pmatrix}, u=\begin{pmatrix} 1 \\ 2 \end{pmatrix}
$$

we find

$$
Au=\begin{pmatrix}
-2 & 2 \\
2 & 1
\end{pmatrix}\begin{pmatrix} 1 \\ 2 \end{pmatrix} = 
\begin{pmatrix}
-2+4 \\ 2 + 2 
\end{pmatrix}
= \begin{pmatrix}2 \\ 4
\end{pmatrix}
=2u
$$

We observe that the image $Au$ of $u$ has the same direction as $u$ itself; however, $Au$ is twice as long as $u$. The image vector is a multiple of the original

With the same matrix $A$ and the vector

$$
v=\begin{pmatrix} 2 \\ -1 \end{pmatrix}
$$

we find

$$
Av=\begin{pmatrix}
-2 & 2 \\
2 & 1
\end{pmatrix}\begin{pmatrix} 2 \\ -1 \end{pmatrix} = 
\begin{pmatrix}
-4-2 \\ 4-1 
\end{pmatrix}
= \begin{pmatrix}-6 \\ 3
\end{pmatrix}
=2u
$$