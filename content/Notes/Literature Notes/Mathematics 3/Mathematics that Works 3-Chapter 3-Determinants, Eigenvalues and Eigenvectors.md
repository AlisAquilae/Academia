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
>
>$$
>\begin{aligned}
>\det(B-\lambda I) &= \det \left( 
>\begin{pmatrix} 
>2 & -2 & 3 \\
>1 & 1 & 1 \\
>1 & 3 & -1
>\end{pmatrix} - \lambda 
>\begin{pmatrix}
>1 & 0 & 0 \\
>0 & 1 & 0 \\
>0 & 0 & 1
>\end{pmatrix}
>\right) \\
>&= \det \begin{pmatrix}
>2-\lambda & -2 & 3 \\
>1 & 1-\lambda & 1 \\
>1 & 3 & -1-\lambda
>\end{pmatrix}\\
>&= (2-\lambda)\det \begin{pmatrix}
>1-\lambda & 1 \\
>3 & -1-\lambda
>\end{pmatrix} -1 \det \begin{pmatrix}
>-2 & 3 \\
>3 & -1-\lambda
>\end{pmatrix} + 1 \det \begin{pmatrix}
>-2 & 3 \\
>1-\lambda & 1
>\end{pmatrix} \\
>&= (2-\lambda)(\lambda^2-4)-(2\lambda-7)+(3\lambda - 5) \\
>&= -\lambda^3 + 2\lambda^2 +4\lambda -8 -2\lambda +7+3\lambda-5 \\
>&= -\lambda^3 + 2\lambda^2 +5\lambda-6=0
>\end{aligned}
>$$
>>[!Note]
>>We expanded along the first column
>
>with solutions $\lambda_1=1, \lambda_2=-2, \lambda_3=3$. Therefore, these are the eigenvalues of $B$

#### 3.2.3 The Computation of Eigenvectors
At the beginning of this section, we have seen that we can easily find the eigenvalues of a matrix $A$ corresponding to a known eigenvector. Now we pose the reverse question: if we have an eigenvalue of matrix $A$, how do we find the corresponding eigenvectors?

>[!Example]
>We determine the eigenvectors of the $2\times 2$ matrix $A$
>
>$$
>A=\begin{pmatrix} -2 & 2 \\ 2 & 1 \end{pmatrix}
>$$
>
>By solving the characteristic equation $\det(A-\lambda I)=0$ we have earlier calculated the eigenvalues $\lambda_1=2$ and $\lambda_2=-3$
>
>If $v$ is an eigenvector of $A$ corresponding to the eigenvalue $\lambda_1=2$, then $Av=2v$, that is,
>
>$$
>\begin{pmatrix}
>-2 & 2 \\
>2 & 1
>\end{pmatrix} \begin{pmatrix}
>v_1 \\ v_2 \end{pmatrix} =2\begin{pmatrix}
>v_1 \\ v_2 \end{pmatrix}
>$$
>
>We expand this into coordinates, and we collect the corresponding terms
>
>$$
>\left\{
>\begin{array}{ll}
>-2v_1 + 2v_2 &= 2v_1 \\
>2v_1 + 1v_2 &= 2v_2
>\end{array}
>\right.
>\Rightarrow
>\left\{
>\begin{array}{ll}
>-4v_1 + 2v_2 &= 0\\
>2v_1 1 1v_2 &= 0
>\end{array}
>\right.
>$$
>
>Using elimination, we reduce the system to echelon form
>
>$$
>\left\{
>\begin{array}{ll}
>-4v_1 + 2v_2 &= 0\\
>2v_1 - 1v_2 &= 0
>\end{array}
>\right. \Rightarrow
>\left\{
>\begin{array}{ll}
>-4v_1 + 2v_2 &= 0\\
>0v_1 + 0v_2 &= 0
>\end{array}
>\right.
>$$
>
>The coordinate $v_2$ can be chosen freely. Furtherm,re, we find $v_1=\frac12v_2$, leading to
>
>$$
>v=
>\begin{pmatrix}
>v_1 \\ v_2
>\end{pmatrix} = 
>\begin{pmatrix} 
> \frac12 v_2 \\ v_2
>\end{pmatrix} = v_2
>\begin{pmatrix}
>\frac12 \\ 1
>\end{pmatrix}
>$$
>
>All these eigenvectors are multiples of one another. In the applications, we usually need only one eigenvector corresponding to each eigenvalue. Here the choice $v_2=2$ results in a simple eigenvector corresponding to $\lambda_1 = 2$
>
>$$
>v=2\begin{pmatrix} \frac12 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}
>$$


>[!Example]
>We determine the eigenvectors of the $3\times 3$ matrix $B$
>
>$$
>\begin{pmatrix}
>2 & -2 & 3 \\
>1 & 1 & 1 \\
>1 & 3 & -1
>\end{pmatrix}
>$$
>
>By solving the characteristic equation $\det(A-\lambda I)=0$ we previously calculated the eigenvalues $\lambda_1=1$, $\lambda_2=-2$ and $\lambda_3=3$. Any eigenvector $v$ corresponding to $\lambda_3=3$ satisfies the equation $Bv=3v$. In coordinates
>
>$$
>\left\{
>\begin{array}{ll}
>2v_1 - 2v_2 + 3v_3 &= 3v_1 \\
>1v_1 + 1v_2 + 1v_3 &= 3v_2 \\
>1v_1 + 3v_2 -1v_3 &= 3v_3
>\end{array}
>\right. \Rightarrow
>\left\{
>\begin{array}{ll}
>-1v_1 -2v_2 + 3v_3 &= 0 \\
>1v_1 - 2v_2 + 1v_3 &= 0 \\
>1v_1 + 3v_2 -4v_3 &= 0
>\end{array}
>\right.
>$$
>
>Elimination yields
>
>$$
>\left\{
>\begin{array}{ll}
>-1v_1 -2v_2 + 3v_3 &= 0 \\
>1v_1 - 2v_2 + 1v_3 &= 0 \\
>1v_1 + 3v_2 -4v_3 &= 0
>\end{array}
>\right. \Rightarrow
>\left\{
>\begin{array}{ll}
>-1v_1 - 2v_2 + 3v_3 = 0 \\
>0v_1 -4v_2 +4v_3 = 0 \\
>0v_1 +0v_2 +0v_3 = 0
>\end{array}
>\right.
>$$
>
>The coordinate $v_3$ can be chosen freely. We find $v_2=v_3$ and $v_1 = v_3$ so
>
>$$
>v= \begin{pmatrix}
>v_1 \\ v_2 \\ v_3
>\end{pmatrix} = 
>\begin{pmatrix}
>v_3 \\ v_3 \\ v_3
>\end{pmatrix}
>$$
>
>With $v_3=1$ we find in particular 
>
>$$
>v=\begin{pmatrix} 1\\1\\1 \end{pmatrix}
>$$


---
### 3.3 Linear Iteration Processes
#### 3.3.1 Linear Iteration Processes
Consider the following coordinates

$$
\begin{aligned}
p_1 (k+1)&=0.9p_1(k) + 0.2p_2(k) \\
p_2 (k+1)&=0.1p_1(k) + 0.8p_2(k)
\end{aligned}
$$

Formulated as a matrix-vector product,

$$
\begin{pmatrix}
p_1(k+1) \\
p_2(k+1)
\end{pmatrix} = \begin{pmatrix}
0.9 & 0.2 \\ 0.1 & 0.8
\end{pmatrix}
\begin{pmatrix}
p_1(k) \\p_2(k)
\end{pmatrix}
$$

Or $p(k+1)=Mp(k)$ where 

$$
M=\begin{pmatrix}
0.9 & 0.2 \\ 0.1 & 0.8
\end{pmatrix}
$$

The formula $p(k+1)=Mp(k)$ can be applied iteratively. Thus we obtain $p(1)=Mp(0), p(2)=Mp(1)=M^2p(0), p(3)=M^3p(0)$, et cetera

$$
p(k)=M^k p(0)
$$

This process is called a [[Linear Iteration Process]]

A linear iteration process consists of a sequence of vectors $p(k)$ in $R^n$ satisfying

$$
p(k+1)=Ap(k)
$$

The matrix $A$ is called the **transition matrix** or **iteration matrix**

#### 3.3.2 Decomposition along Eigenvectors
For the matrix $A$ and the vector $v$ with

$$
A=\begin{pmatrix}
1 & \frac{1}{10} \\
\frac{1}{10} & 1
\end{pmatrix}, v=\begin{pmatrix} 1 \\ 1 \end{pmatrix}
$$

We find a range of values belonging to $Av$, $A^2v$, $A^3v$, et cetera. It appears that $v$ is an eigenvector of $A$ with eigenvalue $\lambda = 1.1$, and also of $A^2$ with eigenvalue $\lambda^2 = 1.21$, and also of $A^3$ with eigenvalue $\lambda^3=1.331$, et cetera

If $v$ is an eigenvector of an $n\times n$ matrix $A$ corresponding to an eigenvalue $\lambda$, then $v$ is also an eigenvector of $A^k$ corresponding to eigenvalue $\lambda^k$

Because of this property the outcome of an iteration process $p(k+1)=Ap(k)$ is easy to find if the initial vector $p(0)$ is an eigenvector of $A$. In this case,

$$
p(k)=A^kp(0)=\lambda^k p(0)
$$

so all $p(k)$ are multiples of $p(0)$ and in each consecutive iteration a factor of $\lambda$ is gained. 

We generalise the above method for iteration processes $p(k+1)=Ap(k)$, for any $n\times n$ matrix $A$ that has $n$ linearly independent eigenvectors

If the $n\times n$ matrix $A$ had $n$ independent eigenvectors $v_1, v_2, \dots, v_n$ corresponding to the eigenvalues $\lambda_i, \lambda_2, \dots, \lambda_n$, the solution $p(k)$ of the iteration process $p(k+1)=Ap(k)$ satisfies

$$
p(k)=\alpha_1 \lambda_1^kv_1 + \alpha_2 \lambda_2^kv_2 + \dots + \alpha_n\lambda_n^k v_n
$$

The coefficients $\alpha_i$ can be found from the initial condition

$$
p(0)=\alpha_iv_1 + \alpha_2v_2+\dots+a_nv_n
$$

It is often unnecessary to verify explicitly whether the matrix $A$ has $n$ independent eigenvectors. In most cases, this can be seen by inspection of the eigenvalues. If an $n \times n$ matrix $A$ has $n$ distinct eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$, the corresponding eigenvectors $v_1, v_2, \dots, v_n$ are linearly independent

>[!Important]
>Algorithm for the iteration process $p(k+1)=Ap(k)$
>1. Find the eigenvalues $\lambda_i$ of $A$
>2. Find the corresponding eigenvectors $v_i$ of $A$
>
>If $A$ has $n$ linearly independent eigenvectors $v_1, v_2, \dots, v_n$, then
>
>3. Write the general solution as $p(k)=\alpha_1 \lambda_1^k v_1 + \dots + \alpha_n \lambda_n^k v_n$
>4. Compute the coefficients $\alpha$ from the initial condition $p(0)=\alpha_1 v_1 + \dots + \alpha_n v_n$


#### 3.3.3 Stationary and Stable Distributions

>[!Warning]
>I skipped the justification and went straight for the conclusion

>[!Important]
>The eigenvalue $\lambda$ of the iteration matrix having the highest absolute value is called the **dominant eigenvalue**, and the corresponding eigenvector is called the **stable distribution**

#### 3.3.4 The Probability Matrix
The iteration process

$$
p(k+1)=Mp(k)
$$

with 

$$
M=\begin{pmatrix} 0.9 & 0.2 \\ 0.1 & 0.8 \end{pmatrix}
$$

describes the distribution of a population over "city" and "countryside"

We can read the number 0.9 in the matrix $M$ as the probability that a city dweller stays in the city for another year; then the number 0.1 is the probability that he moves to the country in this year. The other entries of $M$ have a similar interpretation. 

We can also interpret the coordinates of the vector $p$ as probabilities. If $p(0)$ contains the probabilities that a person initially lives in the town or the countryside, then the coordinates of $p(k)$ give the probabilities that he lives in the city or in the countryside in year $k$. Of course, these probabilities add up to 1. Furthermore, the probabilities in the year $k+1$ depend only on the probabilities in the year $k$. 

>[!Note]
>Notice that the columns of $M$ add up to 1 as well. This causes the probabilities in $p(k)$ to keep adding up to 1, for any $k$ (as probabilities should). Moreover, the entries of $M$ are always greater than (or equal to) 0

This can easily be generalised to iteration processes having $n$ instead of 2 outcomes; then $p(k)$ is a vector in $R^n$. Such a process is called a [[Markov Process]] and the transition matrix (an $n\times n$ matrix) is called the **probability matrix**. The entries of a probability matrix represent transition probabilities, with values $0$ and $1$. Moreover, all columns add up to $1$, because the sum of the transition probabilities in a column is always $1$. 

Any probability matrix has an eigenvalue $1$, and this eigenvalue is dominant. To this eigenvalue, an eigenvector corresponds having non-negative coordinates. 

