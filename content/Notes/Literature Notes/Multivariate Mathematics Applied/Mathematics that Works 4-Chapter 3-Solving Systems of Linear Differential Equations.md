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

