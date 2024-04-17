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

