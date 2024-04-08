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
### 2.1 Solving Systems of Linear Equations Systematically

#### 2.1.1 Systems of Linear Equations
Assume the following linear equation with two unknowns, $x$ and $y$

$$
\left\{
\begin{array}{l}
0.80x + 0.10y &= 30 \\
0.10x + 0.70y &= 45 \\
\end{array}
\right.
$$

When we multiply the second equation by 8, we obtain

$$
\left\{
\begin{array}{ll}
0.80x + 0.10y &= 30 \\
0.80x + 5.60y &= 360 \\
\end{array}
\right.
$$

Now we subtract the upper equation from the lower one

$$
\left\{
\begin{array}{ll}
0.80x + 0.10y &= 30 \\
0x + 5.50y &= 330 \\
\end{array}
\right.
$$

After dividing the second equation by $5.50$ we find $y=60$. We use this result in the first equation to obtain $0.80x + 6 = 30 \Rightarrow 0.80x = 24 \Rightarrow x=30$

The solutions of the equation $0.80x + 0.10y = 30$ form a straight line in the (x,y)-plane (because $y=-8x + 300$). Hence, this equation is called a **Linear Equation**. 

In an equation of the form 

$$
a_1x_1 + a_2x_2 + \dots + a_nx_n = b
$$

is a linear equation in the $n$ variables $x_1, x_2, \dots, x_n$. The numbers $a_1, a_2, \dots, a_n$ are called the **coefficients** of the equation, and the number $b$ is the **inhomogeoneous term**

#### 1.2 Elimination and Substitution
The solution process of many mathematical problems and applications involves solving a system of linear equations. To guarantee that one finds all solution, it is essential to proceed in a systematic way.

Consider the following two systems of equations with **unknowns** $\alpha, \beta, \gamma$

$$
\left\{
\begin{array}{ll}
1\alpha + 1\beta -1\gamma &= 1 \\
1 \alpha + 2 \beta + 2 \gamma &= 6 \\
2\alpha +1\beta-3\gamma &=1
\end{array}
\right.
$$

and

$$
\left\{
\begin{array}{ll}
1\alpha + 1\beta -1\gamma &= 1 \\
0\alpha + 1\beta +3\gamma &= 5\\
0\alpha + 0\beta +2\gamma &= 4
\end{array}
\right.
$$

The system on the right is easier to solve than the one on the left, because in the right system we can solve $\gamma$ directly from the third equation. Using the value for $\gamma$, we can solve $\beta$ from the second equation, and finally, using the values for $\beta$ and $\gamma$ we can find $\alpha$ from the first equation. 

This process is called **substitution**. This approach fails for the first system, because there the unknowns $\alpha, \beta, \gamma$ appear in each of the equations. Yet the solutions of these two systems are the same: the systems are equivalent. In order to solve the system above we will transform it into the system below, by means of elimination. This elimination is followed by substitution. 

>[!Example]
>We want to find systematically all solutions (i.e. pairs of $\alpha$ and $\beta$) of the system of three linear equations with two unknowns
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta &= 1 \\
>1\alpha + 1\beta &= 0 \\
>3\alpha + 1\beta &= 2
>\end{array}
>\right.
>$$
>
>Now we use the first equation to eliminate the first variable, $\alpha$, from the second equation. The first equuation begins with $2\alpha$ and the second with $1\alpha$; so we can eliminate the variabale $\alpha$ from the second equation by multiplying the second equation by $2$ and by subsequently subtracting the first equation from the second. We then have
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta &= 1 \\
>0\alpha + 1\beta &= -1 \\
>3\alpha + 1\beta &= 2 \\
>\end{array}
>\right.
>$$
>
>Likewise, we eliminate $\alpha$ from the third equation. The first equation starts with $2\alpha$ and the third with $3\alpha$, so the variable $\alpha$ disappears from the third equation by multiplying the third equation by 2 and subtracting 3 times the first equation from it
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta &= 1 \\
>0\alpha + 1\beta &= -1 \\
>0\alpha + -1\beta &= 1
>\end{array}
>\right.
>$$
>
>Again, the solutions of this system of linear equations are exactly the same as those of the previous sustem, and therefore they are exactly the same as the solutions of the original system.
>
>Now, the first variable has been removed from all equations but the first one. We proceed by eliminating the second variable, $\beta$, from the third equation using the second equation. The second equation begins with $1\beta$ and the third equation with $-1\beta$, so $\beta$ disappears from the third equation by adding the second equation to it
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1 \beta &= 1 \\
>0\alpha + 1\beta &= -1 \\
>0\alpha + 0\beta &= 0
>\end{array}
>\right.
>$$
>
>Again, this system of linear equations is equivalent to the original system. 
>
>The last equation of the system above is satisfied for all $\alpha$ and $\beta$. The second equation resolves $\beta$: $\beta = -1$. By substituting this into the first equation, we get $2\alpha -1=1$, so $\alpha = 1$. 
>
>The solution $\alpha=1, \beta=-1$ is the only solution; we say the solution is unique

Using elimination, any system of linear equations can be brought to what is called **Echelon Form**. A system of linear equations is in echelon form if each equation either has only zero coefficients, or begins with more zero coefficients than the equation proceeding it. In other words, a system of linear equations is in echelon form if the first variable (with non-zero coefficient) in an equation comes after the first variable (with non-zero coefficient) in the equation preceding it. 

>[!Note]
>We usually use an abbreviated notation, where the first two steps in the example above are shortened into 1, and we describe the steps taken before the equations. 

#### 1.3 Row Exchange
When the equation that is used for elimination does not contain the variable that is in line to be eliminated, the elimination process as described above fails. In such a case, we use a trick to bring the system to echelon form. We can exchange the equations with each other (switch places between them). Since the equations can be seen as the rows of a system, the common term for this procedure is **row exchange**

>[!Example]
>We determine the solution of the system
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta + 2\gamma &= 1 \\
>4\alpha + 2\beta + 3\gamma &= 3 \\
>3\alpha + 1\beta + 2\gamma &= 2
>\end{array}
>\right.
>$$
>
>First, we eliminate $\alpha$ from the second and third equation. To do so, we subtract two times the first equation from the second; we them multiply the third equation by two, after which we subtract three times the first equation from it
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta + 2\gamma &= 1 \\
>4\alpha + 2\beta + 3\gamma &= 3 \\
>3\alpha + 1\beta + 2\gamma &= 2
>\end{array}
>\right.
>
>\Rightarrow
>
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta + 2\gamma &= 1 \\
>0\alpha + 0\beta - 1\gamma &= 1 \\
>0\alpha - 1\beta - 2\gamma &= 1
>\end{array}
>\right.
>$$
>
>When trying to eliminate $\beta$ from the third equation using the second equation, we face a problem: $\beta$ does not occur in the second equation! Here we can use row exchange
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta + 2\gamma &= 1 \\
>0\alpha + 0\beta - 1\gamma &= 1 \\
>0\alpha - 1\beta - 2\gamma &= 1
>\end{array}
>\right.
>
>\Rightarrow
>
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta + 2\gamma &= 1 \\
>0\alpha -1\beta -2\gamma &= 1 \\
>0\alpha +0 \beta -1 \gamma &= 1
>\end{array}
>\right.
>$$
>
>The system is now in echelon form. Its solution(s) can be found as usual with substitution

#### 1.4 Inconsistent Systems of Equations
The process of elimination (with, if necessary, row exchange) always results in finding the complete set of solutions. If it does not yield a solution, this is because the system of equations has no solution

>[!Example]
>We determine systematically all solutions of the system of linear equations
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta &= 1 \\
>1\alpha + 1\beta &= 0 \\
>3\alpha + 1\beta &= 1
>\end{array}
>\right.
>$$
>
>By following the usual procedure towards the echelon form, we reach the following system of equations
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta &= 1 \\
>0\alpha + 1\beta &= -1 \\
>0\alpha + 0\beta &= -2
>\end{array}
>\right.
>$$
>
>It turns out that the last equation of this system cannot be satisfied for any $\alpha$ and $\beta$; therefore, the system of equations is **inconsistent**, which is to say, the system has no solution. 


#### 1.5 Systems of Equations Having Multiple Solutions
We have seen an example of a linear system having a single solution, and an example of a linear system with no solution. Systems having more than one solution also occur.

>[!Example]
>We compute $\alpha, \beta$ and $\gamma$ by solving the system of equations
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta + 1\gamma &= 0 \\
>1\alpha + 1\beta + 0\gamma &= 1 \\
>3\alpha + 1\beta + 2\gamma &= -1
>\end{array}
>\right.
>$$
>
>Using elimination we bring the system in echelon form
>
>$$
>\left\{
>\begin{array}{ll}
>2\alpha + 1\beta + 1\gamma &= 1 \\
>0\alpha + 1\beta - 1\gamma &= 3 \\
>0\alpha + 0\beta + 0\gamma &= 0
>\end{array}
>\right.
>$$
>
>The third equation of the system is always satisfied, for any $\alpha, \beta$ and $\gamma$, so it does not yield information on their values. The second equation in the echelon form starts with $\beta$; thus, it assigns a value to $\beta$. The first equation starts with $\alpha$, so it assigns a value to $\alpha$. In these equations, however, the third variable $\gamma$ appears. Apparently, there is no equation to assign a value to $\gamma$, so $\gamma$ can be chosen at will: $\gamma$ is free. The seccond equation connects $\beta$ to $\gamma$: 
>
>$$
>\beta - \gamma = 2
>$$ 
>
>So $\beta=2+\gamma$. Hence, the first equation $2\alpha + \beta + \gamma = 0$ simplifies to 
>
>$$
>2\alpha + (2+\gamma)+\gamma = 0
>$$
>
>So $\alpha=-1-\gamma$. These constitute the set of solutions of the linear system. 

---
## 1.2 Vectors, Lines and Planes
The position of point X in the plane can be identified by two coordinates $x_1$ and $x_2$, so $X=(x_1, x_2)$. In order to facilitate computations with these coordinates, we mostly do not use the point $X$ itself, but a **Vector** $x$.

$$
x=
\begin{pmatrix}
x_1 \\ x_2
\end{pmatrix}
$$

>[!Info]
>Geometrically, we can represent such a vector as an arrow

A vector in the place is a column with two numbers; these numbers are the **coordinates** of the vector. A vector $x$ with the same coordinates as a point $X$ is the **position vector** of $X$. 

To each vector $x=\begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$ in the plane corresponds an arrow with a certain length and direction. If this arrow starts at the origin $O$, it ends at the point $X=(x_1, x_2)$

There are two elementary vector operations, the sum of two vectors and the product of a vector with a number

Both operations are performed on the coordinates separately.

>[!Example]
>The sum of the vectors $a= \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ and $b= \begin{pmatrix} -1 \\ 2 \end{pmatrix}$ is 
>
>$$
>\begin{pmatrix}
>3 + -1 \\ 1 + 2
>\end{pmatrix}
> = 
> \begin{pmatrix}
> 2 \\ 3
> \end{pmatrix}
>$$

>[!Example]
>$$
>2a = 2
>\begin{pmatrix}
>3 \\ 1
>\end{pmatrix}
> = 
> \begin{pmatrix}
> 2 \cdot 3 \\
> 2 \cdot 1
> \end{pmatrix}
> =
> \begin{pmatrix}
> 6 \\ 2
> \end{pmatrix} 
>$$ 

So far we have seen only vectors with 2 coordinates; in other words, we have considered the **vector space** $R^2$. However, we can also consider vectors with more coordinates. 

$$
a=
\begin{pmatrix}
2 \\ -1 \\ 1
\end{pmatrix}
$$
>[!Note]
>Again, such vectors can be added and multiplied with a number by applying these operations to the individual coordinates

The vectors with three coordinates together constitute the vector space $R^3$. 

#### 1.2.1 Vectors in $R^n$
The sum of two vectors and the product of a vector with a number can be generalised to an arbitrary number of coordinates. Thus we write

$$
a=\begin{pmatrix}
a_1 \\ a_2 \\ \vdots \\ a_n
\end{pmatrix}
,
b=
\begin{pmatrix}
b_1 \\ b_2 \\ \vdots \\ b_n
\end{pmatrix}
$$

#### 1.2.2 Lines

>[!Example]
>The point $A=(3,1)$ in the plane has a position vector 
>
>$$
>a=\begin{pmatrix}
>3 \\ 1
>\end{pmatrix}
>$$
>
>The endpoints of the multiples of $a$ constitute a line $l$. Conversely, the vectors $x$ with endpoint on $l$ satisfy 
>
>$$
>x = \lambda a
>$$

The vector $a$ is called a **direction vector** of line $l$. The line $l$ is said to be **spanned by** $a$. The arbitrary number $\lambda$ is a parameter. After expansion into coordinates we find

$$
x= \begin{pmatrix}
x_1 \\ x_2
\end{pmatrix}
= \lambda 
\begin{pmatrix}
3 \\ 1
\end{pmatrix}
$$

>[!Example]
>The points $A=(3,1)$ and $B=(-1,2)$ have position vectors
>
>$$
>a=\begin{pmatrix}
>3 \\ 1
>\end{pmatrix}
>, b= \begin{pmatrix}
>-1 \\ 2
>\end{pmatrix}
>$$
>
>The line $l$ passes through the point $B$ and has the direction of ("is parallel to") the vector $a$. We can reach any point $X$ on $l$ from $B$ by moving far enough in the direction of $a$
>
>In other words, the position vector $x$ of $X$ is the sum of the vector $b$ and a multiple of $a$,
>
>$$
>x=b+\lambda a
>$$

This is a vector representation of the line $l$ through $B$. The vector $b$ is called a **position vector** of the line and $a$ is the **direction vector**. 

Expanded into coordinates, this reads

$$
x=\begin{pmatrix}
x_1 \\ x_2
\end{pmatrix}
=
\begin{pmatrix}
-1 \\ 2
\end{pmatrix}
+ \lambda 
\begin{pmatrix}
3 \\ 1
\end{pmatrix}
$$

In order to determine whether e.g. $P = (5,3)$ lies on $l$, we solve a system of linear equations. 

$$
\begin{pmatrix}
5 \\ 3
\end{pmatrix}
=
\begin{pmatrix}
-1 \\ 2
\end{pmatrix}
+ \lambda
\begin{pmatrix}
3 \\ 1
\end{pmatrix}
\Rightarrow
\left\{
\begin{array}{ll}
-1+3\lambda &= 5 \\
2 + 1\lambda &= 3
\end{array}
\right.
\Rightarrow
\left\{
\begin{array}{ll}
3\lambda &= 6 \\
1 \lambda &= 1
\end{array}
\right.
$$

We see that these equations are inconsistent. Therefore, $P=(5,3)$ does not lie on $l$. 

Often, a line is determined by two points, instead of one point and a direction. 

>[!Important]
>In general, a line can be described by a vector representation:
>- $x=\lambda a$ represents a line through $O$ and $A$
>- $x=b+\lambda a$ represents a line through $B$ and parallel to $a$
>- $x=b+\lambda (a-b)$ represents a line through $A$ and $B$

#### 1.2.3 Planes
Consider 2 points, A and B, with their position vectors

$$
a=
\begin{pmatrix}
1 \\ 2 \\ 0
\end{pmatrix}
, b=
\begin{pmatrix}
-4 \\ 0 \\ 1
\end{pmatrix}
$$

Because $A$, $B$ and the origin $O$ do not lie on one line there is exactly one plane $V$ through $O$, $A$ and $B$. Any position vector of a point in this plane can be written as

$$
x=\lambda a + \mu b
$$

This is a vector representation of the plane $V$. Here $a$ and $b$ are the (two!) direction vectors of $V$. In coordinates:

$$
x=
\begin{pmatrix}
x_1 \\ x_2 \\ x_3
\end{pmatrix}
= \lambda
\begin{pmatrix}
1 \\ 3 \\ 0
\end{pmatrix}
+ \mu
\begin{pmatrix}
-4 \\ 0 \\ 1
\end{pmatrix}
$$

In order to f