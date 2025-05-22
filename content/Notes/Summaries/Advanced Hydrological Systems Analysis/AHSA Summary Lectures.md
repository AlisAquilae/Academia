---
fileClass: Base, Summaries
title: 
Parents: ["[[Advanced Hydrological Systems Analysis]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Advanced Hydrological Systems Analysis]]"]
---
# 1. Lecture 1
## 1.1 Introduction
This course is concerned with coupling the groundwater, unsaturated zone and open water systems in a quantitative manner, rather than treating these individually. Doing so requires simplifying the system, as otherwise complexity becomes too large. 

In general, when modelling, we move through a flowchart

![[Pasted image 20250514104009.png]]

1. The first step, even before going through this flowchart, is to decide on the problem it is we are trying to model
2. Next, we create a perceptual model. We decide on what processes we think affect our problem to the extent it warrants including in the model.
3. Afterwards, we quantify the processes identified in the perceptual model in order to create a conceptual model. We describe the equations to use and how these link
4. This feeds into the procedural model, where the goal is to get our model's equations to work on a computer, regardless of whether the model output is of sufficient quality
5. The next step is to calibrate our model and perform sensitivity analysis. We predict our problem in the past (hindcasting), and compare our predictions with measurements in order to make sure our model performs as expected. Given that we cannot always have measurements for all variables, we also often test which parameters have a large influence on our model output by varying these slightly and seeing what changes. Sensitive parameters require more attention, and therefore more accurate measurements. 
6. Finally, we evaluate our model in the future. We run our model, solve our real-life problem using our model's predictions, and then evaluate whether the problem was solved as expected or whether something unexpected happened. If this is the case, we need to update our model for future use

## 1.2 Time scales
As mentioned, we intend to couple the open water, unsaturated zone and groundwater systems in this course. However, these operate at different time scales. Depending on the geology, water movement in the soil might happen in the order of centimetres per day, whereas in open water we see flow in the order of tens of meters per second. The question, then, is what timescale to use in our model. 

In order to investigate this, we start with a simple reservoir model (bucket model) which visualises our catchment. 

![[Pasted image 20250514104902.png]]

In our model, we have a bucket with a constant outlet $Q_{\text{out}}$. The water level in our bucket, $S$, is dependent on time, as at each timestep water leaves the bucket through the outlet. Thus, we write $S$ to be dependent on time, $S(t)$. The amount of water leaving the bucket is, however, also dependent on the water level itself, as the water 'pushes' the other water our. Thus, $Q_{\text{out}}$ can also change in time, leading to the formulation $Q_{\text{out}}(t)$. Finally, the outlet can be opened or closed further, for which we take a factor $T_{\text{res}}$ which represents the resistance. Thus, a high $T_{\text{res}}$value represents a very small outlet. Finally, we choose an arbitrary initial condition, $S_0$. Our equations thus become

$$
\begin{aligned}
Q_{\text{out}}(t) &= \frac{1}{T_{\text{res}}} S(t) \\
\frac{\mathrm{d}S}{\mathrm{d}t} &= -\frac{1}{T_{\text{res}}} S(t) \\
S(0) &= S_0
\end{aligned}
$$

We are going to compare various basic model predictions to the real solution. This 'real' solution is called the **Analytical solution**. In practice, this analytical solution is often unknown, due to the complexity of our case. In this case, we work with a **numerical solution** which approximates the analytical one. 

The analytical solution is found to be as follows:

$$
S(t) = S_0 \exp(-t/T_{\text{res}})
$$

For our numerical solution, we use an explicit [[Finite Differences]] approach. We first choose a timestep to discretize by

$$
S(n\Delta t) \approx \tilde{S}(n)
$$

Next, we write

$$
\tilde{S}(n+1) = \left(1 - \frac{\Delta t}{T_{\text{res}}} \right) \tilde{S}(n)
$$

We can investigate the numerical solution above to identify a few cases:
1. For $\Delta t \to 0$ and $\Delta t \ll T_{\text{res}}$, we find convergence to the extent that $\tilde{S}$ tends to $S$
2. For $0 \lt \Delta t \ll T_{\text{res}}$, we find ok results. $\tilde{S} \approx S$
3. For $T_{\text{res}} \lt \Delta t \lt 2 \cdot T_{\text{res}}$, $\tilde{S}$ becomes less than $0$. This is a physical impossibility, indicating our model behaves poorly
4. For $2 \cdot T_{\text{res}} \gt \Delta t$, we see that the numerical solution starts oscillating, not modelling the analytical solution well at all. This is called **Instability**

Each of these cases is visualised in the figure below for the value $T_{\text{res}} = 1$

![[Pasted image 20250514110939.png]]

We can do the same, now for an implicit finite differences method. The formula then becomes

$$
\tilde{S}(n+1) = \frac{1}{1-\frac{\Delta t}{T_{\text{res}}}}\tilde{S}(n)
$$

Although we no longer see physical impossibilities, we do find the same pattern as before: the more the timestep for our model exceeds the timestep of our system's behaviour, the worse our results. 

![[Pasted image 20250514111706.png]]

>[!Important]
>Thus, the scale of our numerical approximation should be less than the scale at which our system operates


Now, let's investigate what happens when we change our model slightly. First, let's add a constant input $Q_{\text{in}}$. Instead of converging towards $0$ (i.e. being completely empty), the system now converges towards a certain water level where the input is balanced by the output. 

Another example: what if the input is variable? For our purposes, let's say the input oscillates with some sine function. It now becomes important which period is the smallest. 

>[!Important]
>The scale of our numerical approximation should be less than the scale at which our system operates or the period with which the input varies, whichever is smallest


Our final example is when the input has different frequencies with which it varies. Here, we must change the rule above slightly

>[!Important]
>The scale of our numerical approximation should be less than the scale at which our system operates or the smallest period with which the input varies, whichever is smallest


All rules of thumb above apply when we want to capture as much of the details in our analytical solution as possible. It might happen, however, that we are only interested in the general trend and not in the small artefacts. One technique to deal with this is to 'filter' our input, for example by taking a moving average. In this case, the rule of thumb becomes

>[!Important]
>The scale of our numerical approximation should be less than the scale at which our system operates or the period with which the filtered input varies, whichever is smallest


---
# 2. Lecture 2
## 2.1 Introduction
In Lecture 1, we discussed what is the appropriate time step to take when finding a numerical solution for our system. In this lecture, we introduce some extra complexity by coupling our systems. Specifically, we are going to discuss 2 cases:
- One-sided coupled reservoirs: These are cases where one bucket feeds into the other, but not vice versa
- Two-sided coupled reservoirs: These are cases where two buckets feed into each other. 

Let's say, for example, that we have a two-sided coupled reservoir. A general formula would look as follows:

$$
\begin{aligned}
\frac{\partial S_1}{\partial t} (t) &= a_{1,1} S_1(t) + a_{1,2}S_2 (t) + b_1 \\
S_1(0) &= S_{\text{init},1} \\
\frac{\partial S_2}{\partial t} (t) &= a_{2,1} S_1(t) + a_{2,2}S_2 (t) + b_2 \\
S_2(0) &= S_{\text{init},2}
\end{aligned}
$$

For our purposes, it is useful to convert this into matrix notation

$$
\frac{\partial}{\partial t} \begin{pmatrix}S_1 \\ S_2 \end{pmatrix} = \begin{pmatrix}a_{1,1} & a_{1,2} \\ a_{2,1} & a_{2,2} \end{pmatrix} \begin{pmatrix}S_1(t) \\ S_2(t) \end{pmatrix} + \begin{pmatrix}S_1(0) \\ S_2(0) \end{pmatrix} = \begin{pmatrix}S_{\text{init},1} \\ S_{\text{init},2} \end{pmatrix}
$$

We can write this in the following, more general form

$$
\begin{aligned}
\frac{\partial S}{\partial t}(t) &= A_s S(t) + B_s \\
S(0) &= S_{\text{init}}
\end{aligned}
$$

We know all linear ordinary differential equations in time to have an analytical solution

$$
S(t) = C_s + T_s \exp(e_s \, t)
$$

where
- $C_s$ is a vector containing the equilibrium value
- $T_s$ is a matrix
- $e_s$ is a vector containing the eigenvalues

It are the eigenvalues that are interesting to us. That's because they allow us to quickly determine the timescale of our system. Specifically, the timescale of each eigenvalue is calculated as

$$
\Delta t_i = -\frac{1}{e_i}
$$

In line with the rules of thumb, we should take the lowest $\Delta t_i$ corresponding to all eigenvalues of our system

>[!Example]
>We find from our analysis 2 eigenvalues: $e_1=-5$ and $e_2=-2$. Their respective timesteps are then
>
>$$
>\begin{aligned}
>\Delta t_1 &= -\frac{1}{-5} = 0.2 \\
>\Delta t_2 &= -\frac{1}{-2} = 0.5
>\end{aligned}
>$$
>
>Given that $0.2$ is the lowest timestep of our system, the timestep of our numerical solution should be at least less than $0.2$


>[!Important]
>It is important to mention that the eigenvalues (and, therefore, the system's timestep) are independent of (changes in) external inputs and initial conditions


---
# 3. Lecture 3
## 3.1 Upscaling
When modelling at a regional scale, we are interested in areas of many kilometers. The processes we want to include are, however, often of a much smaller scale, and the theories and formulas used to describe them assume a (small) control volume. Thus, we cannot make our grid-size too large. On the other hand, computing an area of 100 km$^2$ with control volumes of 1 cm$^3$ would be computationally almost impossible to do. Thus, we need to find a way to average ('scale up') by assuming a single model block to contain many different control volumes, and determine a value that is representative for all control volumes underlying the model block. This is difficult to do, as aside from the value we are interested in, we end up with local gradients which are unknown to us and impossible to find. 

Then how do we find the representative value? We do so by calibrating our value, including local gradients, in order to best fit to our data. 

>[!Important]
>Experience teaches us that in different situations different aggregation methods perform better:
>1. In a stratified deposit layer with horizontal flow (i.e. parallel to the aquifers), we use the **arithmetic mean**
>   
>   $$
>   k_{\text{eff}} = \frac{\sum k_i D_i}{\sum D_i}
>   $$
>   
>2. In a stratified deposit layer with vertical flow (i.e. serial), we use the **harmonic mean**
>   
>   $$
>   k_{\text{eff}} = \frac{D_{\text{tot}}}{\sum \frac{D_i}{k_i}} = \frac{D_{\text{tot}}}{\sum c_i}
>   $$
>   
>3. In a layer with no stratification, we use the **geometric mean**
>
>$$
>k_{\text{eff}} = \exp(\overline{\ln(k)})
>$$


---
# 4. Lecture 4
## 4.1 St-Venant Equations
To describe open water flow, we use the St-Venant Equations. These equations are derived from the more general Navier-Stokes Equation by applying a long-wave assumption. This implies that flow is gradually varied, thereby neglecting small-scale variations in depth and velocity. We also assume a constant density and hydrostatic conditions. 

The equations are as follows

$$
\begin{aligned}
\frac{\partial A}{\partial t} + \frac{\partial Q}{\partial x} &= I \\
\frac{\partial Q}{\partial t} + \frac{\partial Q \, u}{\partial x} &= g \, A \left(S_o - S_f - S_p \right)
\end{aligned}
$$

where
- $A$ is the cross-sectional area of the river
- $Q$ is the discharge in the downstream direction
- $I$ is an external mass flux
- $u$ is the velocity
- $S_o$ is the bed slope (gravity)
- $S_f$ is the friction slope
- $S_p$ is the pressure slope

The bed slope ($S_o$) is simply the change in depth over the change in the downstream direction, i.e.

$$
\frac{\partial a}{\partial x}
$$

The pressure slope is calculated in a similar fashion, as we assume pressure to change only as a function of water depth (i.e. hydrostatic). 

The friction slope, however, is more difficult to calculate. Specifically, we use Manning's Equation

$$
S_f = \frac{n^2 Q^2}{A^2 R^{4/3}}
$$

where $n$ is the Manning coefficient, which differs for different river types and surfaces. 

## 4.2 The Equilibrium Case
In the case of equilibrium, i.e. where flow changes in neither space nor time, the St-Venant equations reduce to

$$
S_o - S_f = 0
$$

Substituting Manning's Equation into the formula above and rewriting, we find

$$
Q_e = \frac{\sqrt{S_o}}{n} \, A_e \, R_e^{2/3}
$$

## 4.3 The Steady Case
In the case of steady flow, i.e. where flow does not change in time but does change in space, the St-Venant equations are given by

$$
\begin{aligned}
\frac{\partial Q}{\partial x} &= I \\
\frac{\partial a}{\partial x} &= \frac{s_o - s_f - \frac{2 \, u \, I}{g \, A}}{1 - \text{Fr}^2}
\end{aligned}
$$

In the case where we have no external inflow, i.e. $I = 0$, this reduces to

$$
\frac{\mathrm{d}a}{\mathrm{d}x} (x) = \frac{S_o - S_f}{1 - \text{Fr}^2}
$$

This is known as the **Standard Backwater Equation**. 

Where there is side inflow, i.e. $I \neq 0$, we find

$$
\begin{aligned}
\frac{\partial Q}{\partial x} &= I \\
\frac{\partial a}{\partial x} &= \frac{S_o - S_f - S_i}{1 - \text{Fr}^2}
\end{aligned}
$$

where $S_i$ is some lateral inflow slope

$$
S_i = \frac{2 \, u \, I}{g \, A} = \frac{2 \, Q \, I}{g \, A^2}
$$

---
# 5. Lecture 5
For this lecture, the most important thing to remember is that for unsaturated flow, flow is highly non-linear: both the pressure head ($\psi$) and the hydraulic conductivity ($K$) are functions of the local water content ($\theta$), where hydraulic conductivity strongly decreases when the  water content decreases.

---
# 6. Lecture 6
There is always a conflict between our model and the real world, which cannot be fully resolved. This conflict is caused by different sources of uncertainty, which could cause the values we are working with to not be the 'true' values. 

We mainly deal with 4 kinds of uncertainty
1. Uncertainty in the real-life data we use as input for our model (e.g. precipitation). Our measurement data might differ from the 'true' data due to measurement device errors or human error
2. Uncertainty in the real-life data we use to validate and calibrate our output with (e.g. the water table elevation). This is a similar source of error to point 1, but now to the 'response' rather than the input
3. Model uncertainty is caused by different design choices made during the conceptualisation of the model. Think of the discretization method used, our timestep, and the processes we find important. These might not align best with reality, and therefore create uncertainty
4. Finally, uncertainty in the parameters. These often describe physical processes of which we do not know the exact magnitude. We are able to estimate them based on our observations, but we cannot validate them. 

>[!Important]
>Uncertainty is therefore not just caused by the parameters in our model, but also by the model itself and the data we compare our model to


To get a best estimate of our parameter values, we need to calibrate them. This implies an iterative process whereby we compare our model output to real-life observations, and change our parameter values until we are satisfied with the model performance. We can do this manually, using a fit-by-eye method, but this is time-consuming and arbitrary. Therefore, we often use some objective function: a score which describes our model's performance. We can then use this objective function as a criterion to fit our model to our observations. 

There are many options when it comes to objective functions
1. **Mean Error (ME)**: The sum of all residuals divided by the number of observations. If mean error is close to $0$, we call it a good model. If it is not, we have model bias, where overestimation is called a positive bias and underestimation is a negative bias. The problem with this objective function is that positive and negative bias can cancel each other out. This OF is therefore useful for bias, but not for model fit
2. **Mean Absolute Error (MAE)**: Use the absolute error to get the mean. We still work towards a score of $0$. This OF is, however, difficult to differentiate, and therefore difficult to optimise using gradients
3. **Mean Square Error (MSE)**: The mean of the square of the residuals. If the mean error is close to $0$, then the MSE becomes an estimator of the variance of the residuals. We still work towards a score of $0$. The problem with this OF is that it is square-based, and therefore assigns more weight to larger values. The good thing, however, is that it is easily differentiated. 
4. **Root Mean Square Error (RMSE)**: The root of the MSE. If the mean error is close to $0$, then the RMSE becomes an estimator of the standard deviation of the residuals. We still work towards a score of $0$. The advantage of this OF is that it has the same units as our observations. 
5. **Sum of squares (SS)**: Very similar to the MSE, now just the sum rather than the mean
6. **R Squared ($R^2$)**: Calculated as 
   
   $$
   1 - \frac{\text{MSE}}{\text{Variance of observations}}
   $$
   
   The $R^2$ is also known as the Nash-Sutcliff Efficiency (NSE). Here, close to $1$ means the model has a good performance. 

We are still missing the correlation between our model and the observations. This is by itself not a good fitting criterion, but it serves well to be combined with the previous cases. For example, we can decompose the MSE into three main components: standard deviation, mean and correlation. Here, the SD indicates the variability, the mean indicates the bias, and the correlation indicates itself. This reformulation is known as the **Kling-Gupta Criterion**. 

>[!Important]
>In general, when it comes to using objective functions as fitting criteria, any square-based objective function is good


---
# 7. Lecture 7
## 7.1 Equifinality and Overfitting
When making the best model we can, it is important to account for equifinality and overfitting

Equifinality refers to the concept where different parameter sets can produce equally good models. Thus, there is no 'best' parameter set. To account for this, as well as for the uncertainty when modelling, we usually present all sets which produce equally good results within some range. 

Overfitting refers to tailoring our model to the observations too strictly, causing problems when adding new observations. To prevent this, we usually separate our modelling process in calibrating (fitting to one part of our observations) and validating (assessing whether our model performs well for the other set of observations as well)

## 7.2 Fitting Techniques
We can plot all outcomes of our model's performance using the objective function of choice into a plane. Now, our fitting problem is to find the optimum, our best parameter set such that our objective function (let's say Sum of Squares) is as small as possible. For this, we can use mathematical minimisation techniques. 

The problem is that we do not know the surface of this objective function plane exactly, meaning we might end up in a local minimum instead of a global one. There are different ways to try to go around this
1. Minimisation by sampling. You take random samples of parameter sets and hope you find the minimum somewhere. Very time consuming and therefore costly. We can also do this automatically, for example using Monte-Carlo Sampling. However, this is still based on luck, and it might take many model runs to find a minimum
2. Minimisation using gradient direction. We compute the gradient of the objective function in the downward direction, thereby pointing towards the direction of lower values. Note that this is just the direction, not a point. To calculate the gradient, we need to differentiate our objective function. This explains why square-based objective functions are preferred when fitting. We now know the direction to go in, but we don't know how far to actually go
3. Minimisation using gradient size: Calculates the gradient as well as a length for the gradient proportional to the step size. If you have a high gradient / steep slope, you can go further and therefore the gradient size is larger. This works well, but we can still get caught in a 'local' minimum
4. Minimisation by second-order approximation: The methods discussed so-far (i.e. gradient-based) are all first-order approximations. We can opt for a second-order approximation (also known as a 'Newtonian Method') by adding the assumption that our objective function is quadratic close to the minimum. This is quicker and more accurate, but still does not prevent local minima
5. The final option is to use global search methods. These use not one starting point at a time, but multiple starting points which can communicate with each other. 


---
# 8. Lecture 8
## 8.1 Parameter Uncertainty
As discussed previously, when modelling we are faced with various kinds of uncertainty. Here, we will go into more depth on parameter uncertainty. 

When calculating our parameters, we fit our model output to our observations in the process of calibration. These observations, however, do not represent the 'true' situation: rather, they are uncertain themselves. Thus, they represent the true signal as well as some random, stochastic error. 

Our goal is to find parameters which best fit the 'true' signal, rather than the noisy observations. We can never know these parameters, but we can give a confidence estimate of where we think the best parameters are situated approximately. For this, we make a few assumptions:
1. We assume our parameters to be normally distributed, with a mean of $0$, a variance $\sigma^2$ and independent of each other (i.e. we assume homoscedasticity)
2. We assume linearity
3. We expect some parameter value, $p^o$, to be equal to the parameter value we fitted, $p^t$. 
4. We express our uncertainty in terms of the variance of the optimal parameter, which we calculate as 

$$
\begin{aligned}
\text{var}(p^o) &= \frac{\sigma_{\epsilon}^2}{\sum_i x_i^2} \\
&= \frac{\frac{1}{N_o}SS(p^o)}{\sum_i x_i^2} \\
x_i &= \frac{\partial M}{\partial p} = \text{model sensitivity}
\end{aligned}
$$


In other words, the variance of the optimal parameter set is calculated as the variance of the noise divided by the sum of the model sensitivity squared.

Graphically, a parameter is more uncertain if
1. The leftover objective function is greater (i.e. further away form x-axis)
2. The slope (and, therefore, model sensitivity) is less steep

When working with 2 parameters instead of 1, the above still holds. However, now we are working with the covariance matrix.

When the surface of the objective function is 'rotated', this indicates correlation between the parameters.

---
# 9. Lecture 9
We now want to find out what the uncertainty in our parameter(s) implies for the uncertainty in our outcome variable(s). For this, we again assume linearity and use what is called the Gaussian Escape. 

We find the expected value of our outcome to be equal to the outcome corresponding to our expected parameter value $p^t$, and the variance of our outcome to be equal to

$$
\text{var}(Y) = a^2 \, \text{var}(X)
$$

where $a$ is the slope of the parameter-outcome relation - in other words, the model sensitivity. 

Now let's make the step to using 2 parameters. Our fitting procedure now produces a covariance matrix, which shows not only the variance of the parameters themselves, but also their covariance. We can use this to calculate the correlation as follows:

$$
\text{Corr}(P_1, P_2) = \frac{\text{Covar} (P_1, P_2)}{\text{SD}(P_1) \cdot \text{SD}(P_2)}
$$

We can read the variance and the covariance from a covariance matrix as follows: For $X_1$ and $X_2$:

$$
\begin{bmatrix}
\text{Var}(X_1) & \text{Covar}(X_1, X_2) \\
\text{Covar}(X_2, X_1) & \text{Var}(X_2)
\end{bmatrix}
$$

Here, contrary to when we were discussing uncertainty in the parameters, a higher model sensitivity