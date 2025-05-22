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


To get a best estimate of our parameter values, we need to calibrate them. This implies an iterative process whereby we compare our model output to real-life observations, and change our parameter values until we are satisfied with the model performance. We can do this manually, using a fit-by-eye method, but this is time-consuming and arbitrary. Therefore, we often use some o