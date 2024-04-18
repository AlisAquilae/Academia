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

>[!Warning]
>The product $AB$ only exists if the number of columns $A$ is equal to the number of rows $B$!

>[!Warning]
>If both $A$ and $B$ are $n\times n$ matrices, then $AB$ exists as well as $BA$, and they are both $n\times n$ matrices. These product matrices are often not equal!

The following algebraic rules apply to the matrix product (as long as $A$, $B$, and $C$ are matrices for which the products are well defined)
- $(AB)x  = A(Bx)$
- $(AB)C = A(BC)$
- $A(B+C) = AB + AC$
- $(A+B)C = AC + AB$
- $(AB)^T = B^T A^T$

#### 2.1.5 Special Matrices

>[!Warning]
>More special matrices are discussed in the book, but since we later on only seem to engage with one of them, I will only explain that one here

The matrix $I$ is the **identity matrix** or **unit matrix**, which is a square diagonal matrix for which all diagonal entries have value 1. So

$$
I=
\begin{pmatrix}
1 & 0 & \dots & 0 \\
0 & 1 & \dots & 0 \\
\vdots & \vdots &  & \vdots \\
0 & 0 & \dots & 1
\end{pmatrix}
$$

$I$ can be of any size, but it is always square. 

The important properties of the matrix $I$ are
- $Ix=x$ for any vector $x$
- $IA=A$ and $AI=A$ for any matrix $A$

---
### 2.2 Matrices and Systems of Linear Equations
#### 2.2.1 Matrix-Vector Equations
With the knowledge of vectors that we have acquired in the meantime, we can nor write systems of linear equations as a vector equation

>[!Example]
>Consider the following system of linear equations:
>
>$$
>\left\{
>\begin{array}{ll}
>0.80x + 0.10y &= 30 \\
>0.10x + 0.70y &= 45
>\end{array}
>\right.
>$$
>
>This can also be written using vectors, namely as
>
>$$
>\begin{pmatrix}
>0.80 \\
>0.10
>\end{pmatrix} x + 
>\begin{pmatrix}
>0.10 \\
>0.70
>\end{pmatrix} y =
>\begin{pmatrix}
>30 \\ 45
>\end{pmatrix}
>$$

In a next step, also the unknowns $x$ and $y$ can be put into a vector, say $v$. Then we obtain a matrix-vector equation of the form $Av=b$

>[!Example]
>
>$$
>\begin{pmatrix}
>0.80 & 0.10 \\
>0.10 & 0.70
>\end{pmatrix}
>\begin{pmatrix}
>x \\ y
>\end{pmatrix} = 
>\begin{pmatrix}
>30 \\ 45
>\end{pmatrix}
>$$

The coefficients of the system of equations return as the entries of the matrix $A$. The original system of equations, the vector equation and the matrix-vector equation are three different ways to write down the same problem. 

#### 2.2.2 The Solution of Systems of Linear Equations in Matrix-Vector Form
A matrix-vector equation is a compact form for a system of linear equations. Often we solve such a matrix-vector equation directly, without first rewriting it as a system. The computation remains exactly the same

>[!Example]
>Consider the matrix-vector equation $Ax=b$ with 
>
>$$
>A=\begin{pmatrix}
>2 & -1 & 0 \\
>1 & -1 & 2
>\end{pmatrix}, b=
>\begin{pmatrix}
>2 \\ -1
>\end{pmatrix}
>$$
>
>We could solve this as a system of linear equations by multiplying each individual entry with $x$, and then rewriting to echelon form. However, we can also write the matrix itself into echelon form, without having to multiply by $x$ first. 
>
>$$
>\begin{pmatrix}
>2 & -1 & 0 \\
>1 & -1 & 2
>\end{pmatrix} x = 
>\begin{pmatrix}
>2 \\ -1
>\end{pmatrix}
>\Rightarrow
>\begin{pmatrix}
>2 & -1 & 0 \\
>0 & -1 & 4
>\end{pmatrix} x =
>\begin{pmatrix}
>2 \\ -4
>\end{pmatrix}
>$$
>
>This is a matrix-equation in echelon form. 
>
>In both cases, the substitution is the same. 

