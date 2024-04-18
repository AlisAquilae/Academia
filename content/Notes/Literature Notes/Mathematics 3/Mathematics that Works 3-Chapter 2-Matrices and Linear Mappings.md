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
### 2.1 Matrices and their Operations
#### 2.1.1 Rows
If 

$$
Q=
\begin{pmatrix}
q_1 & q_2 & q_3 & q_4
\end{pmatrix}
, x=
\begin{pmatrix}
x_1 \\ x_2 \\ x_3 \\ x_4
\end{pmatrix}
$$
we can compute the **product** $Qx$ as 

$$
\begin{aligned}
Qx &=
\begin{pmatrix}
q_1 & q_2 & q_3 & q_4
\end{pmatrix}

\begin{pmatrix}
x_1 \\ x_2 \\ x_3 \\ x_4
\end{pmatrix} \\
&= q_1x_1+q_2x_2+q_3x_3+q_4x_4
\end{aligned}
$$


#### 2.1.2 Matrices and the Matrix-Vector Product
Arrays in the form of

$$
A=
\begin{pmatrix}
5 & 10 & 0 & 1 \\
10 & 200 & 10 & 20 \\
20 & 10 & 2 & 1
\end{pmatrix}
$$

are called a **matrix** (plural: matrices). In this example the matrix has three (horizontal) rows and four (vertical) columns; therefore, it is a $3 \times 4$ matrix. The numbers in the entries are called entries; the entry in the $i^{\text{th}}$ row and the $j^{\text{th}}$ column is denoted by $a_{ij}$, so in the example above, $a_{11}=5$. 

For the $3 \times 4$ matrix $A$ and the vector $v$ in $R^4$ we consider a product $z=Av$

$$
\begin{aligned}
Av &=
\begin{pmatrix}
5 & 10 & 0 & 1 \\
10 & 200 & 10 & 20 \\
20 & 10 & 2 & 1
\end{pmatrix}
\begin{pmatrix}
0.1 \\ 0.01 \\ 0.0 \\ 0.4
\end{pmatrix} \\
&=
\begin{pmatrix}
0.5+0.1+0.0+0.4 \\
1.0 + 2.0 + 0.0 + 8.0 \\
2.0 + 0.1 + 0.0 + 0.4
\end{pmatrix} \\
&=
\begin{pmatrix}
1.0 \\ 11.0 \\ 2.5
\end{pmatrix}
\end{aligned}
$$

>[!Warning]
>The number of columns of $A$ must be equal to the number of coordinates of the vector to be multiplied with (in this case $v$), otherwise the matrix is undefined

#### 2.1.3 Matrix Operations
Just like vectors, we can add matrices by adding corresponding entries and multiply them with a number by multiplying all entries with this number

>[!Example]
>We find the sum $A+B$ of the $3\times 4$ matrices $A$ and $B$
>
>$$
>A=\begin{pmatrix}
>5 & 10 & 0 & 1 \\
>10 & 200 & 10 & 20 \\
>20 & 10 & 2 & 1 
>\end{pmatrix}
>, B=\begin{pmatrix}
>4 & 10 & 3 & 0 \\
>10 & 80 & 40 & 50 \\
>10 & 30 & 2 & 0
>\end{pmatrix}
>$$
>
>By adding the corresponding entries to both matrices,
>
>$$
>A+B=\begin{pmatrix}
>5+4 & 10 + 10 & 0+3 & 1+0 \\
>10+10 & 200+80 & 10+40 & 20+50 \\
>20+10 & 10+30 & 2+2&1+0 
>\end{pmatrix} =
>\begin{pmatrix}
>9 & 20 & 3 & 1 \\
>20 & 280 & 50 & 70 \\
>30 & 40 & 4 & 1
>\end{pmatrix}
>$$

>[!Example]
>Similarly, we compute a multiple such as $3A$
>
>$$
>3A=
>\begin{pmatrix}
>3\times 5 & 3\times10 & 3\times0 & 3\times1 \\
>3\times10 & 3\times200 & 3\times10 & 3\times20 \\
>3\times20 & 3\times10 & 3\times2 & 3\times1 
>\end{pmatrix}=
>\begin{pmatrix}
>15 & 30 & 0 & 3 \\
>30 & 600 & 30 & 60 \\
>60 & 30 & 6 & 3
>\end{pmatrix}
>$$

A new operation is **transposition**, which is interchanging the columns with the rows. Thus, if we denote the entries of $A$ with $A_{ij}$, then $A_{ji}$ are the entries of its transpose $A^T$

>[!Example]
>For the $3\times 4$ matrix $A$ above, the transpose $A^T$ is a $4\times 3$ matrix
>
>$$
>A^T=\begin{pmatrix}
>5 & 10 & 20 \\
>10 & 200 & 10 \\
>0 & 10 & 2 \\
>1 & 20 & 1
>\end{pmatrix}
>$$

>[!Info]
>The matrix operations satisy the following algebraic rules
>- $(A+B)x = Ax + Bx$
>- $(\gamma A)x = \gamma(Ax) = A(\gamma x)$
>- $(A+B)^T = A^T + B^T$
>- $(\gamma A^T) = \gamma A^T$
>- $(A^T)^T=A$

A vector $x$ can be seen as a matrix as well, specifically as a matrix with a single column. Thus if $x$ is a vector in $R^n$, then $x$ is also an $n\times 1$ matrix. Consequently, $x^T$ exists, too, and is a $1\times n$ matrix

$$
x=\begin{pmatrix}
x_1 \\
. \\
. \\
. \\
x_ n
\end{pmatrix} \Rightarrow
x^T = \begin{pmatrix}
x_1 & . & . & . & x_ n
\end{pmatrix}
$$
#### 2.1.4 The Matrix Product
When multiplying matrices with each other, we follow a specific order of operations

Consider matrices $A$ and $B$

$$
A = \begin{pmatrix}
2 & 9 & 0 \\
-4 & 1 & 5
\end{pmatrix}, B=
\begin{pmatrix}
7 & 5 \\
0 & -1 \\
4 & 6
\end{pmatrix}
$$

We build up matrix $C = AB$. It follows that each entry in $C$ arises as the product of the corresponding row in $A$ with the corresponding column in $B$. 

$$
\begin{aligned}
C=AB &= \begin{pmatrix}
2 & 9 & 0 \\
-4 & 1 & 5
\end{pmatrix}
\begin{pmatrix}
7 & 5 \\
0 & -1 \\
4 & 6
\end{pmatrix} \\
&= \begin{pmatrix}
2 \cdot 7 + 9 \cdot 0 + 0 \cdot 4 & 2 \cdot 5 + 9 \cdot -1 + 0\cdot 6 \\
-4 \cdot 7 + 1 \cdot 0 + 5 \cdot 4 & -4 \cdot 5 + 1 \cdot -1 + 5 \cdot 6
\end{pmatrix}  \\
&= \begin{pmatrix}
14 & 1 \\
-8 & 9
\end{pmatrix}
\end{aligned}
$$

Thus the $i,j$-entry of the product matrix $C$ is the product of the $i^{\text{th}}$ row of $A$ and the  $j^{\text{th}}$ column of $B$. In other words, matrices are applied as rows times columns. 

The most important property satisfies $(AB)x = A(Bx)$

>[!Warning]
>The product $AB$ only exists if the number of columns $A$ is equal to the number of rows $B$!

>[!Warning]
>If both $A$ and $B$ are $n\times n$ matrices, then $AB$ exists as wel
