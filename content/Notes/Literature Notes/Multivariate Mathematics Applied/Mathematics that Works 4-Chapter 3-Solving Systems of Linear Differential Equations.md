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
>
>$$
>C=\begin{pmatrix}2 & 2 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 2 \end{pmatrix}
>$$
>
>First we formulate the characteristic equation
>
>$$
>\begin{aligned}
>\det\begin{pmatrix}2-\lambda & 2 & 1 \\ 1 & 3-\lambda & 1 \\ 1 & 2 & 2-\lambda \end{pmatrix} &= \\
> (2-\lambda)\det\begin{pmatrix} 3-\lambda & 1 \\ 2 & 2-\lambda \end{pmatrix} -1\det \begin{pmatrix}2 & 1 \\ 2 & 2-\lambda \end{pmatrix} + 1\det\begin{pmatrix}2 & 1 \\ 3-\lambda & 1 \end{pmatrix} &= \\
> (2-\lambda)(\lambda^2 -5\lambda +4)-1(-2\lambda + 2) + 1(\lambda -1) &= \\
> (-\lambda^3 +7\lambda^2 -14\lambda +8)+(2\lambda - 2) + (\lambda - 1) &= \\
> -\lambda^3 + 7\lambda^2 - 11\lambda + 5 &= 0 
>\end{aligned}
>$$
>
>By trial and error we find the solution $\lambda = 1$. This enables us to factorize the characteristic polynomial by $(\lambda-1)$
>
>$$
>\begin{aligned}
>-\lambda^3 +7\lambda^2 -11\lambda+5 &= (\lambda-1)(a\lambda^2 + b\lambda + c) \\
>-\lambda^3 +7\lambda^2 -11\lambda +5 &= a\lambda^3 +(b-a)\lambda^2 + (c-b)\lambda - c
>\end{aligned}
>$$
>
>Equating coefficients yields a system of four linear equations that can be solved straightforwardly
>
>$$
>\begin{aligned}a &= -1 \\
>b-a = 7 \Rightarrow b &= 6 \\
>c-b = -11 \Rightarrow c &= -5
>-c = 5 \Rightarrow c &= -5 
>\end{aligned}
>$$
>
>The equation $-\lambda^3 + 7\lambda^2 - 11\lambda + 5 = 0$ is now decomposed as $(\lambda-1)(-\lambda^2 +6\lambda -5) = 0$. Beside the known root $(\lambda -1) = 0$ we thus find the roots $\mu = 1$ and $v = 5$ of the quadratic factor $-\lambda^2 +6\lambda -5=0$. Hence, the eigenvalues of $C$ are $\lambda = -1, \mu = 1, v = 5$. 


## 3.2.5 The Eigenvector Corresponding to an Eigenvalue
Any multiple of an eigenvector is again an eigenvector corresponding to the same eigenvalue. 

>[!Example]
>For the $2\times 2$ matrix $A$, 
>
>$$
>A = \begin{pmatrix} -2 & 2 \\ 2 & 1 \end{pmatrix}
>$$
>
>We found that the vector 
>
>$$
>u = \begin{pmatrix}1 \\ 2 \end{pmatrix}
>$$
>
>is an eigenvector corresponding to the eigenvalue 2. Hence, any multiple $s = \alpha u = 2 s$. If we take for example $a=-2$, then
>
>$$
>s = \begin{pmatrix}-2 \\ -4\end{pmatrix}
>$$
>
>and
>
>$$
>\begin{aligned}
>As &= \begin{pmatrix}-2 & 2 \\ 2 & 1 \end{pmatrix}\begin{pmatrix}-2 \\ -4 \end{pmatrix} \\
>&= \begin{pmatrix}4-8 \\ -4-8 \end{pmatrix} \\
>&= \begin{pmatrix} -4 \\ -8 \end{pmatrix} \\
>&= 2s
>\end{aligned}
>$$

It is possible two independent eigenvectors correspond to one eigenvalue. Then any linear combination of these is again an eigenvector

>[!Example]
>Consider the matrix $C$ and the vectors $x$ and $y$
>
>$$
>\begin{aligned}
>C &= \begin{pmatrix}2 & 2 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 2 \end{pmatrix}, \\
>x &= \begin{pmatrix}1 \\ 0 \\ -1 \end{pmatrix}, \\
>y &= \begin{pmatrix}0 \\ 1 \\ -2 \end{pmatrix}
>\end{aligned}
>$$
>
>We find 
>
>$$
>\begin{aligned}
>Cx &= \begin{pmatrix}2 & 2 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 2 \end{pmatrix}\begin{pmatrix}1 \\ 0 \\ -1 \end{pmatrix} \\
>&= \begin{pmatrix}1 \\ 0 \\ -1 \end{pmatrix} \\
>&= x
>\end{aligned}
>$$
>
>Similarly,
>
>$$
>\begin{aligned}
>Cy &= \begin{pmatrix}2 & 2 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 2 \end{pmatrix}\begin{pmatrix}0 \\ 1 \\ -2 \end{pmatrix} \\
>&= \begin{pmatrix}0 \\ 1 \\ -2 \end{pmatrix} \\
>&= y
>\end{aligned}
>$$
>
>Therefore, the vectors $x$ and $y$ are two independent eigenvectors of $C$ to the eigenvalue $\lambda = 1$. Now, any linear combination of $x$ and $y$ is also an eigenvector corresponding to $\lambda = 1$. For example, when $z=2x-3y$, we have
>
>$$
>\begin{aligned}
>Cz &= \begin{pmatrix}2 & 2 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 2 \end{pmatrix}\begin{pmatrix} 2 \\ -3 \\ 4 \end{pmatrix} \\
>&= \begin{pmatrix}2 \\ -3 \\ 4 \end{pmatrix} \\
>&= z
>\end{aligned}
>$$

The results found above have general validity

>[!Important]
>If $\lambda$ is an eigenvalue of an $n \times n$ matrix, then the vectors $v$ with $Av = \lambda v$ form the eigenspace $E_\lambda$ of $A$ corresponding to $\lambda$. 


## 3.2.6 The Computation of Eigenvectors
Earlier in this section we saw that once we have found an eigenvector of a matrix $A$, the eigenvalue can be determined easily. We now pose the reverse question: if we have an eigenvalue of a matrix $A$, how can we find the corresponding eigenvectors?

>[!Example]
>We determine the eigenvectors of the $2\times2$ matrix $A$,
>
>$$
>A=\begin{pmatrix} -2 & 2 \\ 2 & 1 \end{pmatrix}
>$$
>
>By solving the characteristic equation $\det(A-\lambda I) = 0$ we already calculated the eigenvalues $\lambda = 2$ and $\mu = -3$. 
>
>If $v$ is an eigenvector corresponding to these eigenvalues, then $Av = 2v$, that is,
>
>$$
>\left\{
>\begin{array}{ll}
>-2v_1 + 2v_2 &= 2v_1 \\
>2v_1 + 1 v_2 &= 2v_2
>\end{array}
>\right.
>$$
>
>We collect related terms and reduce the resulting system to echelon form by elimination
>
>$$
>\left\{
>\begin{array}{ll}
>-4v_1 + 2v_2 &= 0 \\
>2v_1 -1v_2 &= 0
>\end{array}
>\right. 
>\Rightarrow 
>\left\{
>\begin{array}{ll}
>-4v_1 + 2v_2 &= 0 \\
>0v_1 + 0v_2 &= 0
>\end{array} 
>\right.
>$$
>
>The coordinate $v_2$ can be chosen freely. Choosing $v_2 = 1$ we find 
>
>$$
>v = \begin{pmatrix}
>\frac12 \\
>1 \end{pmatrix}
>$$
>
>To check this result we verify the relation $Av = 2v$
>
>$$
>\begin{aligned}
>Av &= \begin{pmatrix}-2 & 2 \\ 2 & 1 \end{pmatrix}\begin{pmatrix}\frac12 \\ 1 \end{pmatrix} \\
>&= \begin{pmatrix}1+2 \\ 1 + 1 \end{pmatrix}\\
>&= \begin{pmatrix}1\\2\end{pmatrix}\\
>&= 2v
>\end{aligned}
>$$
>
>which confirms the correctness of both the eigenvalue and the eigenvector that we found

In general, the eigenvectors can be found in the same manner as in the above example. If $v$ is an eigenvector of an $n\times n$ matrix $A$ corresponding to the eigenvalue $\lambda$, then

$$
Av = \lambda v \Rightarrow Av-\lambda I v = 0 \Rightarrow (A-\lambda I)v = 0
$$

Therefore, the eigenvectors $v$ are the non-zero solutions of the system of linear equations $(A - \lambda I)v = 0$. These solutions can be found using elimination and substitution. 

>[!Tip]
>For any eigenvalue $\lambda$ of $A$, the system $(A - \lambda I)v = 0$ is dependent. Therefore the elimination process yields a row of zeros. If this row of zeros does not appear, either the eigenvalue is wrong or the elimination process has not been carried out correctly. 


---
# 3.5 Systems of Linear Differential Equations (1)
A one-dimensional first order differential equation $x'(t)=\alpha x(t)$ can be generalised to a system of linear differential equations. This system is often written in matrix-vector form

>[!Example]
>The state variables $x_1(t)$ and $x_2(t)$ in the system of differential equations
>
>$$
>\left\{
>\begin{array}[ll] 
>\, x'_1(t) &= 2x_1(t)-3x_2(t) \\ x'_2(t) &= -2x_1(t) - x_2(t) \end{array}
>\right.
>$$
>
>can be put together into a vector $x(t)$. Then $x(t)$ is a function of $t$. By differentiating its coordinates, we also get its derivative $x'(t)$. Thus
>
>$$
>x(t) = \begin{pmatrix}x_1(t) \\ x_2(t) \end{pmatrix}, x'(t)=\begin{pmatrix}x'_1(t) \\ x'_2(t) \end{pmatrix}
>$$
>
>In the vector form $x'(t) = Ax(t)$, the above system now takes the form
>
>$$
>\begin{pmatrix}x'_1(t) \\ x'_2(t) \end{pmatrix} = \begin{pmatrix}2 & -3 \\ -2 & -1 \end{pmatrix} \begin{pmatrix}x_1(t) \\ x_2(t)\end{pmatrix}
>$$


## 3.5.1 Eigenvalues, Eigenvectors and the Basis Solution
The matrix-vector equation

$$
x'(t) = Ax(t)
$$

is a homogeneous system of linear differential equations. As in the one-dimensional case, we find that the sum of two solutions is a solution again. Moreover, any multiple of a solution is a solution again. Hence, from the solutions found we can make new ones by forming linear combinations. Therefore, we first set out to find basis solutions, in which we can express other solutions. 

We examine when an exponential (vector) function 

$$
x(t)=ve^{\lambda t}
$$

solves the differential equation, for some constant vector $v$. From $x(t)=ve^{\lambda t}$ we see that $x'(t)=v\lambda e^{\lambda t}$, and by substituting these functions into the differential equation we find

$$
\begin{aligned}
x'(t)&=Ax(t) \\
v \lambda e^{\lambda t} &= Av e^{\lambda t} \\
v \lambda &= Av
\end{aligned}
$$

The last equation is preciesely the defining relation for the eigenvalues and eigenvectors of the matrix $A$. For small matrices, the eigenvalues can be found by solving the **characteristic equation**

$$
\det(A-\lambda I)=0
$$

Once an eigenalue of $\lambda$ of $A$ has been found, we can compute the corresponding eigenvector(s) by solving the system of linear equations

$$
(A-\lambda I)v = 0
$$

We then use the eigenvalue-eigenvector pair to form a (basis) solution $x(t)=v e^{\lambda t}$

>[!Example]
>Consider the initial value problem
>
>$$
>x'(t)=Ax(t), x(0)=x_0 \, \text{ with } \, A=\begin{pmatrix}1 & 1 \\ -2 & 4 \end{pmatrix} \, \text{ and } \, x_0 = \begin{pmatrix} 3 \\ 1 \end{pmatrix}
>$$
>
>The characteristic equation is 
>
>$$
>\begin{aligned}
>\det(a-\lambda I) &= \det\begin{pmatrix} 1-\lambda & 1 \\ -2 & 4-\lambda \end{pmatrix} \\
>&= (1-\lambda)(4-\lambda) + 2 \\
>&= \lambda^2 -5\lambda +6 = 0
>\end{aligned}
>$$
>
>with solutions $\lambda = 3$ and $\mu = 2$. An eigenvector $v$ of $A$ corresponding to the eigenvalue $\lambda = 3$ satisfies $Av=3v$. We collect corresponding terms and reduce the system to echelon form using elimination
>
>$$
>\left\{
>\begin{array}{ll}
>1v_1 + 1v_2 &= 3v_1 \\ -2v_1 + 4v_2 &= 3v_2 \end{array}
>\right.\Rightarrow
>\left\{
>\begin{array}{ll}
>-2v_1 + 1v_2 &= 0 \\
>-2v_1 + 1v_2 &= 0
>\end{array}
>\right. \Rightarrow
>\left\{
>\begin{array}{ll}
>-2v_1 + 1v_2 &= 0 \\
>0v_1 + 0v_2 &= 0
>\end{array}
>\right.
>$$
>
>The coordinate $v_2$ can be chosen freely. Furthermore, $v_1 = \frac12 v_2$, so we take 
>
>$$
>v = \begin{pmatrix}1\\2\end{pmatrix}
>$$
>
>In the same way we ffind an eigenvector $w$ of $A$ corresponding to the eigenvalue $\,mu = 2$.
>
>$$
>w = \begin{pmatrix}1\\1\end{pmatrix}
>$$
>
>With the eigenvalues and eigenvectors, we have found two basis solutions for the system of differential equations to be $v e^{\lambda t}$ and $w e^{\lambda t}$. The general solution of the differential equation consists of all linear combinations of these solutions; here,
>
>$$
>\begin{aligned}
>x(t)&=\alpha v e^{\lambda t} + \beta w e^{\mu t} \\
>&= \alpha \begin{pmatrix}1\\2\end{pmat}
>$$

