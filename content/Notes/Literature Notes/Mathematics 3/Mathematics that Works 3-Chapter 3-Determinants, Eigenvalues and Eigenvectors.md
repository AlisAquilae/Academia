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
=-3v
$$

The image $Av$ of $v$ has the opposite direction to that of $v$; the length of $Av$ is 3 times that of $v$. Here the image vector is a negative multiple of the original. 

We have found that $Au=2u$ and $Av=-3v$. The image vector of both $u$ and $v$ is a multiple of the original. This is a special property. A vector with this property is called an [[Eigenvector]] of the matrix $A$, and the multiplication factor is called the corresponding [[Eigenvalue]]. Thus, the vector $u$ is an eigenvector of $A$ corresponding to the eigenvalue 2. 

>[!Note]
>The same applies to larger matrices and vectors

The vector $v$ in $R^n$ is an eigenvector of the $n\times n$ matrix $A$ if $v \ne 0$ and $Av=\lambda v$ for a number $\lambda$. Similarly, the number $\lambda$ is an eigenvalue of the $n\times n$ matrix $A$ if $Av=\lambda v$ for a vector $v \ne 0$

>[!Warning]
>Only a square matrix has eigenvalues and eigenvectors. 

An eigenvector $v$ of $A$ can correspond only to a single eigenvalue $\lambda$ of $A$. However, if $v$ is an eigenvector of $A$ corresponding to the eigenvalue $\lambda$, any multiply of $v$ (with the exception of $0$) is also an eigenvector of $A$ corresponding to the eigenvalue $\lambda$

>[!Example]
>For the $2\times 2$ matrix $A$ and the vector $u$,
>
>$$
>A=\begin{pmatrix}
>-2 & 2 \\
>2 & 1
>\end{pmatrix}, u=\begin{pmatrix} 1 \\ 2 \end{pmatrix}
>$$
>
>we saw above that $u$ is an eigenvector of $A$ corresponding to the eigenvalue $\lambda =2$. The same applies to the vector $s=3u$. 
>
>$$
>As=\begin{pmatrix}
>-2 & 2 \\
>2 & 1
>\end{pmatrix}\begin{pmatrix} 3 \\ 6 \end{pmatrix} = 
>\begin{pmatrix}6 \\ 12
>\end{pmatrix}
>=2s
>$$
>

Thus, if $v$ is an eigenvector of $A$ corresponding to the eigenvalue $\lambda$, any multiple $u=\alpha v$ (with the exception of 0) is also an eigenvector of $A$ corresponding to $\lambda$. 

#### 3.2.2 The Computation of Eigenvalues
At the outset of this section, we first presented a vector, which subsequently was shown to be an eigenvector of a matrix; incidentally, we computed the corresponding eigenvalue. This is not what happens in practice; the problem is to find among all possible vectors the eigenvectors of a given matrix. Here we do this first by looking for the eigenvalues, and next finding the corresponding eigenvectors

>[!Warning]
>The book contains more explanation on what is about to follow and how they reach the conclusion presented after this block. I will not go into depth on the justification presented, but skip to the conclusion instead

The eigenvalues of an $n\times n$ matrix $A$ are the solutions of the equation $\det(A-\lambda I)=0$

>[!Example]
>We determine the eigenvalues of the $3\times 3$ matrix $B$,
>
>$$
>B=\begin{pmatrix}
>2 & -2 & 3 \\
>1 & 1 & 1 \\
>1 & 3 & -1 
>\end{pmatrix}
>$$
>
>The characteristic equation $\det(B-\lambda I)=0$ is