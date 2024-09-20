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
# 3.2 Eigenvalues and Eigenvectors
## 3.2.1 Determinants
The area of a parallellogram spanned by the vectors $a$ and $b$ is $|a_1 b_2 - a_2 b_1$. 

Inspired by this property, we now define the determinant of a $2\times 2$ matrix $A_{ij}$. This is the number $\det(A)=a_{11} a_{22} - a_{12} a_{21}$ 

>[!Example]
>$$
>\det{\begin{pmatrix} 1 & -1 \\ 4 & 2\end{pmatrix}} = 1 \cdot 2 - 4 \cdot -1 = 6
>$$

>[!Note]
>The area of the parallellogram is absolute

Determinants of larger matrixes are constructed by expansion. Expanding the determinant of a $3\times 3$ matrix $A=(a_{ij})$ involves the following steps
- The $2\times 2$ matrix corresponding to the first entry $a_{11}$ in the first column of $A$ arises by deleting the row and column of $a_{ij}$ (which are the first row and the first column) from $A$; compute $a_{11} \det(A_{11})$
- Compute $a_{21}\det(A_{21})$, where the $2\times 2$ matrix $A_{21}$ arises from $A$ by deleting its second row and its first column
- Repeat this process for $a_{31}\det(A_{31})$
- Calculate $\det(A) = a_{11}\det(A_{11}) - a_{21}\det(A_{21}) + a_{31}\det(A_{31})$

>[!Example]
>By expansion, we find
>
>$$
>\begin{aligned}
>\det\begin{pmatrix}2 & 4 & 5 \\ 4 & -1 & -3 \\ 3 & 0 & -1\end{pmatrix} &= 2\det\begin{pmatrix}-1 & -3 \\ 0 & -1 \end{pmatrix} - 4 \det \begin{pmatrix}4 & 5 \\ 0 & -1 \end{pmatrix} + 3\det\begin{pmatrix}4 & 5 \\ -1 & -3 \end{pmatrix}\\
>&= 2(1-0) - 4(-4) + 3(-12-5)\\
>&= 2 + 16 -21 \\
>&= -3
>\end{aligned}
>$$

>[!Note]
>We alternate positive and negative, starting with positive in the corners of the matrix

## 3.2.2 Eigenvalues and Eigenvectors
For the $2\times 2$ matrix $A$ and the vector $u$, 

$$
A=\begin{pmatrix}-2 & 2 \\ 2 & 1 \end{pmatrix}, u=\begin{pmatrix}1\\2 \end{pmatrix}
$$

We note that the image $Au$ of $u$ has the same direction as $u$ itself. $Au$ is twice as long as $u$. The image vector is a multiple of the original.

With the same matrix $A$ and the vector 

$$
v=\begin{pmatrix}2\\-1\end{pmatrix}
$$

we find

$$
Av=\begin{pmatrix}-2&2\\2&1\end{pmatrix}\begin{pmatrix}2\\-1 \end{pmatrix} = \begin{pmatrix}-4-2 \\ 4-1 \end{pmatrix} = \begin{pmatrix}-6\\3\end{pmatrix} = -3v
$$

Here, the image vector $Av$ of $v$ has the opposite direction as that of $v$; the length of $Av$ is 3 times that of $v$. Thus, the image vector is a negative multiple of the original

As we can see, some vectors have an image vector which is a multiple of the original vector. Vectors with this special property are called [[Eigenvector|Eigenvectors]]. The multiple is called the corresponding [[Eigenvalue]]. Thus, the vector $u$ is an eigenvector of $A$ corresponding to the eigenvalue $2$, and $v$ is an eigenvector of $A$ corresponding to eigenvalue $-3$. 

>[!Note]
>The same applies for larger matrices. However, only a square matrix has eigenvalues and eigenvectors

The eigenvalues and eigenvectors of a matrix are closely interconnected, which is also apparent from the twin definition below
- The vector $v$ is an eigenvector of the $n\times n$ matrix $A$ if $v \neq 0$ and $Av = \lambda v$ for a number $\lambda$
- The number $\lambda$ is an eigenvalue of the $n\times n$ matrix $A$ is $Av = \lambda v$ for a vector $v \neq 0$

## 3.2.3 The Computation of Eigenvalues
At the outset of this section, we first presented a vector and then showed that it was an eigenvector of a matrix, and calculated the eigenvalue corresponding to this vector. Of course, this is not what happens in practice; there the problem is to find among all possible vectors the eigenvector of a given matrix. For small matrices, we may do this by first looking for the eigenvalues, and afterwards finding the corresponding eigenvalues. 

>[!Example]
>We determine the eigenvalues and eigenvectors of the $2\times 2$ matrix $A$,
>
>$$
>A=\begin{pmatrix}-2 & 2 \\ 2 & 1 \end{pmatrix}
>$$
>
>If $v$ is an eigenvector of $A$ that corresponds to an eigenvalue $\lambda$, then $Av = \lambda v$, that is, 
>
>$$
>\begin{aligned}
>\begin{pmatrix}-2 & 2 \\ 2 & 1 \end{pmatrix}\begin{pmatrix}v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix}\lambda v_1 \\ \lambda v_2 \end{pmatrix} &= \begin{pmatrix}-2v_1 + 2v_2 \\ 2v_1 + 1v_2 \end{pmatrix} = \begin{pmatrix}\lambda v_1 \\ \lambda v_2 \end{pmatrix} \\
>&= \begin{pmatrix}(-2-\lambda)v_1 + 2v_2 \\ 2v_1 + (1-\lambda)v_2 \end{pmatrix} \\
>&= \begin{pmatrix} 0\\0 \end{pmatrix}
>\end{aligned}
>$$
>
>Since $v$ may not be the null vector according to common convention, there must be a linear combination of the columns that yields 0, so the columns are linearly dependent. It follows that
>
>$$
>\det \begin{pmatrix}(-2-\lambda)v_1 + 2v_2 \\ 2v_1 + (1-\lambda)v_2 \end{pmatrix} = 0
>$$
>
>With elaboration of the determinant, we get
>
>$$
>\begin{aligned}
>\det \begin{pmatrix}(-2-\lambda)v_1 + 2v_2 \\ 2v_1 + (1-\lambda)v_2 \end{pmatrix} &=
>(-2-\lambda)(1-\lambda) -4 \\
>&= (-2+2\lambda -\lambda + \lambda^2)-4 \\
>&= \lambda^2 +\lambda - 6 = 0
>\end{aligned}
>$$
>
>With solutions $\lambda = 2$ and $\mu = -3$. Therefore, the eigenvalues of $A$ are $\lambda = 2$ and $\mu = -3$

>[!Tip]
>Once all eigenvalues have been found, it is wise to check that they are zeros of the original characteristic equation.

Using matrix notations we can write the calculations above in a more compact form. For an $n\times n$ matrix $A$, $\det(A-\lambda I)$ is the characteristic polynomial of $A$, and the equation

$$
\det(A-\lambda I) = 0
$$

is the characteristic equation of $A$. 

>[!Important]
>The eigenvalues of an $n\times n$ matrix $A$ are the solutions of the characteristic equation $\det(A-\lambda I)=0$


>[!Question]
>Find the eigenvalues of the following matrix
>
>$$
>A=\begin{pmatrix}0 & 2 \\ 3 & 1\end{pmatrix}
>$$
>
>>[!check]- Answer
>>
>>$$
>>\begin{aligned}
>>\begin{pmatrix} 0 & 2 \\ 3 & 1 \end{pmatrix} \begin{pmatrix}v_1 \\ v_2 \end{pmatrix} &= \begin{pmatrix}\lambda v_1 & \lambda v_2 \end{pmatrix} \\
>>\begin{pmatrix} (0-\lambda) v_1 + 2v_2 \\ 3v_1 + (1-\lambda)v_2 \end{pmatrix} &= \begin{pmatrix}0\\ 0 \end{pmatrix} \\
>>\begin{pmatrix} 0-\lambda & 2 \\ 3 & 1-\lambda \end{pmatrix}\begin{pmatrix}v_2 \\ v_2 \end{pmatrix} &= \begin{pmatrix}0\\ 0 \end{pmatrix} \\
>>\det\begin{pmatrix} 0-\lambda & 2 \\ 3 & 1-\lambda \end{pmatrix} &= 0 \\
>>(0-\lambda)(1-\lambda)-3\cdot 2 &= 0 \\
>>\lambda^2 -\lambda -6 &= 0 \\
>>(\lambda - 3)(\lambda + 2) &= 0 \\
>>\begin{pmatrix}\lambda_1 = 3 & \lambda_2 = -2 \end{pmatrix}
>>\end{aligned}
>>$$


## 3.2.4 Factorizing a Known Eigenvalue
Once we have found an eigenvalue we can factor it out, which results in an equation of lower degree. The remaining eigenvalues satisfy this latter equation

>[!Example]
>We determine the eigenvalues of the matrix 