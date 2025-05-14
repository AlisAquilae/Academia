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


All rules of thumb above apply when we want to capture as much of the details in our analytical solution as possible. It might happen, however, that we are only interested in the gene